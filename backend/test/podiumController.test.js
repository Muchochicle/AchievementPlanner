import { test } from "node:test";
import assert from "node:assert";
import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";

import { getGamePodium, getGlobalPodium } from "../controllers/podiumController.js";
import { indexUserSnapshot } from "../services/leaderboardStore.js";
import { getLeaderboardDb, resetLeaderboardDbForTests } from "../services/leaderboardDb.js";

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

function baseSnapshot(overrides = {}) {

    return {

        steamId: "1",
        personaName: "Alice",
        avatarUrl: "https://example.com/avatar.jpg",
        profileUrl: "https://steamcommunity.com/id/alice",

        libraryStatus: "available",
        gamesOwned: 2,
        gamesPlayed: 2,
        totalPlaytimeMinutes: 1000,
        games: [{ appid: 10, playtimeMinutes: 300 }],

        achievements: {
            achievementsUnlocked: 42,
            gamesCompleted100: 3,
            achievementsStatus: "available"
        },

        ...overrides

    };

}

// This suite (unlike profileStatsController.test.js) never touches Steam,
// so it doesn't need dependency injection - the controller's only external
// dependency is the leaderboard DB itself, redirected the same way
// leaderboardDb.test.js/profileStatsController.test.js already do via
// DATABASE_PATH + resetLeaderboardDbForTests.
function withTempDatabasePath(run) {

    const dbPath = path.join(
        os.tmpdir(),
        `achievementplanner-podium-test-${crypto.randomUUID()}`,
        "test.db"
    );

    const previousEnv = process.env.DATABASE_PATH;
    process.env.DATABASE_PATH = dbPath;
    resetLeaderboardDbForTests();

    return Promise.resolve()
        .then(() => run(getLeaderboardDb()))
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

test("getGamePodium returns 400 for a non-positive/non-integer appid without touching the database", () => withTempDatabasePath(() => {

    const res = createMockRes();

    getGamePodium({ params: { appid: "not-a-number" }, session: {} }, res);
    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.jsonBody.success, false);

    const res2 = createMockRes();
    getGamePodium({ params: { appid: "-5" }, session: {} }, res2);
    assert.strictEqual(res2.statusCode, 400);

}));

test("getGamePodium returns the top10 rows, omitting steamId, with isMe/loggedIn/totalRanked computed correctly", () => withTempDatabasePath(db => {

    indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Alice", games: [{ appid: 10, playtimeMinutes: 900 }] }));
    indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "Bob", games: [{ appid: 10, playtimeMinutes: 300 }] }));

    const res = createMockRes();

    getGamePodium({ params: { appid: "10" }, session: { user: { steamid: "2" } } }, res);

    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.top10.length, 2);
    assert.strictEqual(res.jsonBody.top10[0].personaName, "Alice");
    assert.strictEqual(res.jsonBody.top10[0].playtimeMinutes, 900);
    assert.strictEqual(res.jsonBody.top10[0].isMe, false);
    assert.strictEqual(res.jsonBody.top10[1].isMe, true);

    // No row exposes the raw Steam ID to the client.
    for (const row of res.jsonBody.top10) {

        assert.ok(!("steamId" in row));

    }

    assert.strictEqual(res.jsonBody.loggedIn, true);
    assert.deepStrictEqual(res.jsonBody.me, { playtimeMinutes: 300, rank: 2 });
    assert.strictEqual(res.jsonBody.totalRanked, 2);

}));

test("getGamePodium returns me: null and loggedIn: false for an anonymous request, without erroring", () => withTempDatabasePath(db => {

    indexUserSnapshot(db, baseSnapshot({ steamId: "1", games: [{ appid: 10, playtimeMinutes: 900 }] }));

    const res = createMockRes();

    getGamePodium({ params: { appid: "10" }, session: {} }, res);

    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.loggedIn, false);
    assert.strictEqual(res.jsonBody.me, null);
    assert.strictEqual(res.jsonBody.top10.length, 1);

}));

test("getGamePodium returns an empty (not error) result for a real appid nobody has been ranked in yet", () => withTempDatabasePath(() => {

    const res = createMockRes();

    getGamePodium({ params: { appid: "999999" }, session: {} }, res);

    assert.strictEqual(res.jsonBody.success, true);
    assert.deepStrictEqual(res.jsonBody.top10, []);
    assert.strictEqual(res.jsonBody.totalRanked, 0);

}));

test("getGlobalPodium returns 400 for an unrecognized category without touching the database", () => withTempDatabasePath(() => {

    const res = createMockRes();

    getGlobalPodium({ params: { category: "not-a-real-category" }, session: {} }, res);

    assert.strictEqual(res.statusCode, 400);
    assert.strictEqual(res.jsonBody.success, false);

}));

test("getGlobalPodium ranks by the requested category, omits steamId, and computes isMe/me/totalRanked correctly", () => withTempDatabasePath(db => {

    indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Alice", gamesOwned: 200 }));
    indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "Bob", gamesOwned: 50 }));

    const res = createMockRes();

    getGlobalPodium({ params: { category: "games-owned" }, session: { user: { steamid: "1" } } }, res);

    assert.strictEqual(res.jsonBody.success, true);
    assert.strictEqual(res.jsonBody.category, "games-owned");
    assert.strictEqual(res.jsonBody.top10[0].personaName, "Alice");
    assert.strictEqual(res.jsonBody.top10[0].value, 200);
    assert.strictEqual(res.jsonBody.top10[0].isMe, true);

    for (const row of res.jsonBody.top10) {

        assert.ok(!("steamId" in row));

    }

    assert.deepStrictEqual(res.jsonBody.me, { value: 200, rank: 1 });
    assert.strictEqual(res.jsonBody.totalRanked, 2);

}));

test("getGamePodium echoes the requested appid in the response, matching getGlobalPodium's category echo", () => withTempDatabasePath(() => {

    const res = createMockRes();

    getGamePodium({ params: { appid: "10" }, session: {} }, res);

    assert.strictEqual(res.jsonBody.appid, 10);
    assert.strictEqual(typeof res.jsonBody.appid, "number");

}));

test("getGamePodium/getGlobalPodium pass persona names through the JSON response untouched - HTML-escaping is the frontend's responsibility, not the backend's", () => withTempDatabasePath(db => {

    const trickyName = `<script>alert("hi")</script> & "quotes"`;

    indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: trickyName, games: [{ appid: 10, playtimeMinutes: 100 }] }));

    const gameRes = createMockRes();
    getGamePodium({ params: { appid: "10" }, session: {} }, gameRes);
    assert.strictEqual(gameRes.jsonBody.top10[0].personaName, trickyName);

    const globalRes = createMockRes();
    getGlobalPodium({ params: { category: "games-owned" }, session: {} }, globalRes);
    assert.strictEqual(globalRes.jsonBody.top10[0].personaName, trickyName);

}));

test("a SQLite failure surfaces as a 500 with a message, never crashing the process or leaking a stack trace as the message", () => withTempDatabasePath(() => {

    // Sabotage the DB path the same way profileStatsController.test.js
    // does: a plain file where a directory needs to exist (ENOTDIR),
    // forcing getLeaderboardDb() itself to throw. withTempDatabasePath
    // already set process.env.DATABASE_PATH and opened it once above (to
    // hand `run` a real db) - point it at a broken path now and reset the
    // singleton so the next getLeaderboardDb() call (inside the
    // controller) is the one that fails.
    const dbPath = process.env.DATABASE_PATH;

    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    const blockerFile = path.join(path.dirname(dbPath), "blocker");
    fs.writeFileSync(blockerFile, "not a directory");
    process.env.DATABASE_PATH = path.join(blockerFile, "sub", "test.db");
    resetLeaderboardDbForTests();

    const res = createMockRes();

    assert.doesNotThrow(() => {

        getGamePodium({ params: { appid: "10" }, session: {} }, res);

    });

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);
    assert.strictEqual(typeof res.jsonBody.message, "string");

}));

test("getGlobalPodium never turns a never-fetched/unavailable user into a fabricated zero rank", () => withTempDatabasePath(db => {

    indexUserSnapshot(db, baseSnapshot({ steamId: "1", personaName: "Available", achievements: { achievementsUnlocked: 5, gamesCompleted100: 0, achievementsStatus: "available" } }));
    indexUserSnapshot(db, baseSnapshot({ steamId: "2", personaName: "NeverScanned", achievements: null }));

    const res = createMockRes();

    getGlobalPodium({ params: { category: "achievements" }, session: { user: { steamid: "2" } } }, res);

    assert.strictEqual(res.jsonBody.top10.length, 1);
    assert.strictEqual(res.jsonBody.top10[0].personaName, "Available");

    // The never-scanned viewer gets an honest "not ranked" (null), not a
    // fabricated rank/zero.
    assert.strictEqual(res.jsonBody.me, null);
    assert.strictEqual(res.jsonBody.loggedIn, true);

}));
