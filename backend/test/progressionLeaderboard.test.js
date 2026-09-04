import { test } from "node:test";
import assert from "node:assert";

import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { savePlayerProgress } from "../services/playerProgressStore.js";
import { indexUserSnapshot } from "../services/leaderboardStore.js";
import {
    getProgressionLeaderboard,
    getUserProgressionRank,
    getProgressionLeaderboardSize
} from "../services/leaderboardStore.js";
import { getProgressionPodium } from "../controllers/podiumController.js";
import { getLeaderboardDb, resetLeaderboardDbForTests } from "../services/leaderboardDb.js";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

// achievementsUnlocked/gamesCompleted100 default to distinguishable
// per-user values (Alice > Bob > Carol) so "level" ranking tests exercise
// real authoritative-data ordering rather than all three tying at the same
// value - override via `achievements` for tests that need something else.
function userSnapshot(steamId, personaName, achievements) {

    return {
        steamId,
        personaName,
        avatarUrl: `https://example.com/${steamId}.jpg`,
        profileUrl: `https://steamcommunity.com/id/${steamId}`,
        libraryStatus: "available",
        gamesOwned: 1,
        gamesPlayed: 1,
        totalPlaytimeMinutes: 100,
        games: [{ appid: 10, playtimeMinutes: 100 }],
        achievements: achievements ?? { achievementsUnlocked: 1, gamesCompleted100: 0, achievementsStatus: "available" }
    };

}

function seed(db) {

    // Level ranking (Alice > Bob > Carol) now comes ENTIRELY from these
    // Steam-verified counts, not from the totalXP values saved below -
    // deliberately mismatched with the old totalXP-based ordering so a
    // regression back to trusting the client blob would be caught.
    indexUserSnapshot(db, userSnapshot("a", "Alice", { achievementsUnlocked: 100, gamesCompleted100: 2, achievementsStatus: "available" })); // 100*50 + 2*300 = 5600
    indexUserSnapshot(db, userSnapshot("b", "Bob", { achievementsUnlocked: 10, gamesCompleted100: 0, achievementsStatus: "available" }));    // 500
    indexUserSnapshot(db, userSnapshot("c", "Carol", { achievementsUnlocked: 5, gamesCompleted100: 0, achievementsStatus: "available" }));   // 250
    // Dana has progress but never visited Profile -> no users row.

    savePlayerProgress(db, "a", JSON.stringify({ player: { totalXP: 5000, longestStreak: 3 } }));
    savePlayerProgress(db, "b", JSON.stringify({ player: { totalXP: 500, longestStreak: 20 } }));
    savePlayerProgress(db, "c", JSON.stringify({ player: { totalXP: 500, longestStreak: 20 } }));
    savePlayerProgress(db, "d", JSON.stringify({ player: { totalXP: 999999, longestStreak: 999 } }));
    // Eve's blob is corrupt - must be skipped, not crash.
    db.prepare("INSERT INTO player_progress (steam_id, state, updated_at) VALUES (?, ?, ?)")
        .run("e", "{bad json", "2026-01-01T00:00:00.000Z");

}

test("getProgressionLeaderboard('level') ranks by Steam-verified achievements/completions desc, excludes users with no users-table row and corrupt blobs", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        seed(db);

        const rows = getProgressionLeaderboard(db, "level", { limit: 10 });

        assert.deepStrictEqual(rows.map(r => r.personaName), ["Alice", "Bob", "Carol"]);
        assert.strictEqual(rows[0].value, 5600);
        assert.strictEqual(getProgressionLeaderboardSize(db, "level"), 3);

    } finally {

        db.close();

    }

});

test("getProgressionLeaderboard('level') ignores a spoofed totalXP in the client-PUT blob entirely", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        // Real (small) Steam-verified data for Alice...
        indexUserSnapshot(db, userSnapshot("a", "Alice", { achievementsUnlocked: 1, gamesCompleted100: 0, achievementsStatus: "available" })); // 50 XP
        // ...but a DevTools-style fabricated totalXP in her synced blob.
        savePlayerProgress(db, "a", JSON.stringify({ player: { totalXP: 999999999, longestStreak: 1 } }));

        const rows = getProgressionLeaderboard(db, "level", { limit: 10 });

        assert.strictEqual(rows.length, 1);
        assert.strictEqual(rows[0].value, 50, "ranking must reflect the real Steam-verified 1 achievement, not the spoofed blob");

    } finally {

        db.close();

    }

});

test("getProgressionLeaderboard('level') excludes a user whose achievement data was never fetched (status 'unknown')", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        // No `achievements` field at all -> indexUserSnapshot leaves the
        // achievements_* columns at their schema default ('unknown'
        // status, NULL counts) - exactly a user who has logged in and
        // synced progress but never opened Profile.
        indexUserSnapshot(db, { ...userSnapshot("a", "Alice"), achievements: null });
        savePlayerProgress(db, "a", JSON.stringify({ player: { totalXP: 5000, longestStreak: 1 } }));

        assert.strictEqual(getProgressionLeaderboard(db, "level", { limit: 10 }).length, 0);
        assert.strictEqual(getProgressionLeaderboardSize(db, "level"), 0);

    } finally {

        db.close();

    }

});

test("getProgressionLeaderboard('longest-streak') ranks by streak desc with a deterministic steam_id tie-break", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        seed(db);

        const rows = getProgressionLeaderboard(db, "longest-streak", { limit: 10 });

        // Bob & Carol tie at 20; "b" < "c" so Bob comes first, every call.
        assert.deepStrictEqual(rows.map(r => r.personaName), ["Bob", "Carol", "Alice"]);
        assert.deepStrictEqual(rows.map(r => r.value), [20, 20, 3]);

    } finally {

        db.close();

    }

});

test("getUserProgressionRank uses competition ranking (ties share a rank)", () => {

    const db = createLeaderboardDb(":memory:");

    try {

        seed(db);

        assert.deepStrictEqual(getUserProgressionRank(db, "a", "longest-streak"), { value: 3, rank: 3 });
        assert.deepStrictEqual(getUserProgressionRank(db, "b", "longest-streak"), { value: 20, rank: 1 });
        assert.deepStrictEqual(getUserProgressionRank(db, "c", "longest-streak"), { value: 20, rank: 1 });
        assert.strictEqual(getUserProgressionRank(db, "nobody", "longest-streak"), null);
        // Dana has no users row -> not ranked here.
        assert.strictEqual(getUserProgressionRank(db, "d", "level"), null);

    } finally {

        db.close();

    }

});

// Controller-level check, using the DATABASE_PATH redirect pattern from
// podiumController.test.js.
test("GET /api/podiums/progression/:metric returns public rows + me, and 400 for an unknown metric", () => {

    const dbPath = path.join(os.tmpdir(), `ap-progression-test-${crypto.randomUUID()}`, "test.db");
    const previousEnv = process.env.DATABASE_PATH;
    process.env.DATABASE_PATH = dbPath;
    resetLeaderboardDbForTests();

    try {

        const db = getLeaderboardDb();
        seed(db);

        const res = { statusCode: 200, jsonBody: null, status(c) { this.statusCode = c; return this; }, json(b) { this.jsonBody = b; return this; } };
        getProgressionPodium({ params: { metric: "level" }, session: { user: { steamid: "b" } } }, res);

        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.metric, "level");
        assert.strictEqual(res.jsonBody.top10[0].personaName, "Alice");
        assert.ok(!("steamId" in res.jsonBody.top10[0]));
        assert.strictEqual(res.jsonBody.top10.find(r => r.personaName === "Bob").isMe, true);
        assert.strictEqual(res.jsonBody.loggedIn, true);
        assert.strictEqual(res.jsonBody.me.rank, 2);
        assert.strictEqual(res.jsonBody.totalRanked, 3);

        const badRes = { statusCode: 200, jsonBody: null, status(c) { this.statusCode = c; return this; }, json(b) { this.jsonBody = b; return this; } };
        getProgressionPodium({ params: { metric: "bananas" }, session: {} }, badRes);
        assert.strictEqual(badRes.statusCode, 400);

    } finally {

        resetLeaderboardDbForTests();
        if (previousEnv === undefined) { delete process.env.DATABASE_PATH; } else { process.env.DATABASE_PATH = previousEnv; }
        fs.rmSync(path.dirname(dbPath), { recursive: true, force: true });

    }

});
