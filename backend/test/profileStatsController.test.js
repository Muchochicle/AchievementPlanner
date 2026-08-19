import { test } from "node:test";
import assert from "node:assert";
import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";

import { getProfileStats, getProfileStatsWithDeps } from "../controllers/profileStatsController.js";
import { indexProfileSnapshotSafely } from "../services/leaderboardStore.js";
import { getLeaderboardDb, resetLeaderboardDbForTests } from "../services/leaderboardDb.js";

// Mirrors steamController.test.js's convention: the 401/no-session path is
// pure (no network) and tested directly with a fake req/res. The
// authenticated success path calls the real getOwnedGames/Steam API fan-out
// and is verified live against a real account instead, consistent with how
// this suite already treats network-dependent paths (see
// steamController.test.js's login()/callback() comment for the same
// reasoning). getProfileStatsWithDeps lets the two tests below substitute
// fake Steam calls (no network) while still exercising the real
// leaderboard-indexing side effect end-to-end against a real (temp/broken)
// SQLite file - see profileStatsController.js's comment on why the real
// Express handler never accepts a 3rd (deps) parameter.
function createMockRes() {

    return {

        statusCode: null,
        jsonBody: null,

        status(code) {
            this.statusCode = code;
            return this;
        },

        json(body) {
            this.jsonBody = body;
            return this;
        }

    };

}

function fakeSteamDeps({ achievementStats } = {}) {

    return {

        getOwnedGames: async () => ({
            game_count: 1,
            games: [{ appid: 10, name: "Game", img_icon_url: "", playtime_forever: 60 }]
        }),

        getProfileStatsCached: async () => achievementStats ?? {
            achievements: 5,
            gamesWithUnlockedAchievements: 1,
            completedGames: 0,
            completedGameSlugs: [],
            gamesConsidered: 1,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0,
            generatedAt: "2026-08-19T00:00:00.000Z"
        },

        indexProfileSnapshotSafely

    };

}

function withTempDatabasePath(run) {

    const dbPath = path.join(
        os.tmpdir(),
        `achievementplanner-profilestats-test-${crypto.randomUUID()}`,
        "test.db"
    );

    const previousEnv = process.env.DATABASE_PATH;
    process.env.DATABASE_PATH = dbPath;
    resetLeaderboardDbForTests();

    return Promise.resolve()
        .then(() => run(dbPath))
        .finally(() => {

            resetLeaderboardDbForTests();

            if (previousEnv === undefined) {

                delete process.env.DATABASE_PATH;

            } else {

                process.env.DATABASE_PATH = previousEnv;

            }

            fs.rmSync(path.dirname(dbPath), { recursive: true, force: true });

        });

}

test("getProfileStats returns 401 without contacting Steam when there is no session user", async () => {

    const req = { session: {} };
    const res = createMockRes();

    await getProfileStats(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});

test("getProfileStats returns 401 when session.user exists but has no steamid", async () => {

    const req = { session: { user: {} } };
    const res = createMockRes();

    await getProfileStats(req, res);

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});

test("a successful /api/profile/stats request indexes the user into SQLite as a side effect, without changing the JSON response", () => withTempDatabasePath(async () => {

    const req = {
        session: {
            user: {
                steamid: "76561198000000001",
                personaname: "Tester",
                avatarfull: "https://example.com/avatar.jpg",
                profileurl: "https://steamcommunity.com/id/tester"
            }
        }
    };
    const res = createMockRes();

    await getProfileStatsWithDeps(req, res, fakeSteamDeps());

    // The response is exactly what it was before Phase 32 Step 2 - no new
    // fields, no DB data leaked into it.
    assert.strictEqual(res.statusCode, null);
    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.gamesOwned, 1);
    assert.strictEqual(res.jsonBody.achievements, 5);
    assert.ok(!("steam_id" in res.jsonBody));
    assert.ok(!("users" in res.jsonBody));

    // ...but the side effect actually happened: a real row now exists in
    // the (temp, isolated) SQLite database.
    const db = getLeaderboardDb();
    const row = db.prepare("SELECT * FROM users WHERE steam_id = ?").get("76561198000000001");

    assert.ok(row);
    assert.strictEqual(row.persona_name, "Tester");
    assert.strictEqual(row.games_owned, 1);
    assert.strictEqual(row.achievements_unlocked, 5);
    assert.strictEqual(row.achievements_status, "available");

    const games = db.prepare(
        "SELECT appid, playtime_minutes FROM user_game_playtime WHERE steam_id = ?"
    ).all("76561198000000001");

    assert.strictEqual(games.length, 1);
    assert.strictEqual(games[0].appid, 10);
    assert.strictEqual(games[0].playtime_minutes, 60);

}));

test("a database failure does not make /api/profile/stats fail - it still returns the real Steam statistics response", () => withTempDatabasePath(async dbPath => {

    // Sabotage the DB path so opening the connection itself throws: put a
    // plain file where a directory needs to exist (ENOTDIR on mkdirSync),
    // one level below the temp dir withTempDatabasePath already created.
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    const blockerFile = path.join(path.dirname(dbPath), "blocker");
    fs.writeFileSync(blockerFile, "not a directory");
    process.env.DATABASE_PATH = path.join(blockerFile, "sub", "test.db");
    resetLeaderboardDbForTests();

    const req = {
        session: {
            user: { steamid: "1", personaname: "Tester" }
        }
    };
    const res = createMockRes();

    await getProfileStatsWithDeps(req, res, fakeSteamDeps());

    // Persistence failed (getLeaderboardDb() itself couldn't open), but the
    // Profile statistics response is completely unaffected: still a 200
    // with the real Steam-derived numbers, not a 500.
    assert.strictEqual(res.statusCode, null);
    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.gamesOwned, 1);
    assert.strictEqual(res.jsonBody.achievements, 5);

}));

test("a successful request calls getOwnedGames and getProfileStatsCached exactly once each - persistence never triggers a second Steam scan", () => withTempDatabasePath(async () => {

    const req = {
        session: {
            user: { steamid: "1", personaname: "Tester" }
        }
    };
    const res = createMockRes();

    let ownedGamesCalls = 0;
    let statsCalls = 0;

    await getProfileStatsWithDeps(req, res, {

        getOwnedGames: async () => {
            ownedGamesCalls++;
            return { game_count: 1, games: [{ appid: 10, name: "Game", img_icon_url: "", playtime_forever: 60 }] };
        },

        getProfileStatsCached: async () => {
            statsCalls++;
            return {
                achievements: 5, gamesWithUnlockedAchievements: 1, completedGames: 0,
                completedGameSlugs: [], gamesConsidered: 1, gamesWithPlayerDataUnavailable: 0,
                gamesWithTransientErrors: 0, generatedAt: "2026-08-19T00:00:00.000Z"
            };
        },

        indexProfileSnapshotSafely

    });

    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(ownedGamesCalls, 1);
    assert.strictEqual(statsCalls, 1);

}));

test("when getOwnedGames fails (e.g. a private profile), no leaderboard write happens and any previously-indexed data for that user is left completely untouched", () => withTempDatabasePath(async () => {

    const steamId = "1";
    const req = { session: { user: { steamid: steamId, personaname: "Tester" } } };

    // First, a normal successful index so there is real prior data to
    // potentially corrupt.
    await getProfileStatsWithDeps(req, createMockRes(), fakeSteamDeps());

    const db = getLeaderboardDb();
    const before = db.prepare("SELECT * FROM users WHERE steam_id = ?").get(steamId);
    const gamesBefore = db.prepare("SELECT appid, playtime_minutes FROM user_game_playtime WHERE steam_id = ?").all(steamId);

    assert.ok(before);

    // Now simulate the profile going private: getOwnedGames throws before
    // the persistence call site is ever reached (mirrors steamApi.js's
    // real "empty response" guard for a private/invalid profile).
    const res = createMockRes();

    await getProfileStatsWithDeps(req, res, {

        getOwnedGames: async () => {
            throw new Error("Steam API returned an empty response (private profile or invalid request)");
        },

        getProfileStatsCached: async () => {
            throw new Error("should never be called - getOwnedGames already failed");
        },

        indexProfileSnapshotSafely

    });

    // Existing (pre-Phase-32) behavior preserved: a Steam fetch failure is
    // still a 500.
    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);

    // The previously-indexed leaderboard row/games are byte-for-byte
    // unchanged - a failed refresh must never be treated as "current data",
    // and must never overwrite good data with anything (let alone zeros).
    const after = db.prepare("SELECT * FROM users WHERE steam_id = ?").get(steamId);
    const gamesAfter = db.prepare("SELECT appid, playtime_minutes FROM user_game_playtime WHERE steam_id = ?").all(steamId);

    assert.deepStrictEqual(after, before);
    assert.deepStrictEqual(gamesAfter, gamesBefore);

}));
