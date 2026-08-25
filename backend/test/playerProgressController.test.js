import { test } from "node:test";
import assert from "node:assert";

import { getProgressWithDeps, putProgressWithDeps } from "../controllers/playerProgressController.js";
import { getPlayerProgress, savePlayerProgress } from "../services/playerProgressStore.js";
import { createLeaderboardDb } from "../services/leaderboardDb.js";

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

function mockReq(steamId, body) {

    return {

        session: { user: steamId ? { steamid: steamId } : undefined },
        body

    };

}

// Every test gets its own isolated in-memory database via deps injection -
// mirrors profileStatsController.test.js/podiumController.test.js's
// convention of never touching the real leaderboard singleton from a unit
// test.
function withDeps(db) {

    return { getLeaderboardDb: () => db, getPlayerProgress, savePlayerProgress };

}

test("getProgress returns 401 when there is no logged-in session", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await getProgressWithDeps(mockReq(null), res, withDeps(db));

        assert.strictEqual(res.statusCode, 401);
        assert.strictEqual(res.jsonBody.success, false);

    } finally {

        db.close();

    }

});

test("getProgress returns state: null for an account that has never synced before", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await getProgressWithDeps(mockReq("1"), res, withDeps(db));

        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.state, null);
        assert.strictEqual(res.jsonBody.updatedAt, null);

    } finally {

        db.close();

    }

});

test("putProgress returns 401 when there is no logged-in session", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await putProgressWithDeps(mockReq(null, { state: { player: {} } }), res, withDeps(db));

        assert.strictEqual(res.statusCode, 401);

    } finally {

        db.close();

    }

});

test("putProgress rejects a non-object state payload (null, array, string) with 400", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        for (const badState of [null, [1, 2, 3], "not-an-object", 42]) {

            const res = createMockRes();

            await putProgressWithDeps(mockReq("1", { state: badState }), res, withDeps(db));

            assert.strictEqual(res.statusCode, 400, `expected 400 for state=${JSON.stringify(badState)}`);
            assert.strictEqual(res.jsonBody.success, false);

        }

    } finally {

        db.close();

    }

});

test("putProgress rejects a missing state field with 400", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await putProgressWithDeps(mockReq("1", {}), res, withDeps(db));

        assert.strictEqual(res.statusCode, 400);

    } finally {

        db.close();

    }

});

test("putProgress rejects an oversized state payload with 413", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();
        const hugeState = { blob: "x".repeat(200_001) };

        await putProgressWithDeps(mockReq("1", { state: hugeState }), res, withDeps(db));

        assert.strictEqual(res.statusCode, 413);

    } finally {

        db.close();

    }

});

test("putProgress then getProgress round-trips the same state for the same steamId", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const state = { player: { level: 5, totalXP: 1200 }, equippedAvatar: "veteran" };

        const putRes = createMockRes();
        await putProgressWithDeps(mockReq("1", { state }), putRes, withDeps(db));

        assert.strictEqual(putRes.jsonBody.success, true);
        assert.strictEqual(typeof putRes.jsonBody.updatedAt, "string");

        const getRes = createMockRes();
        await getProgressWithDeps(mockReq("1"), getRes, withDeps(db));

        assert.deepStrictEqual(getRes.jsonBody.state, state);
        assert.strictEqual(getRes.jsonBody.updatedAt, putRes.jsonBody.updatedAt);

    } finally {

        db.close();

    }

});

test("putProgress for one steamId never affects another steamId's progress", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        await putProgressWithDeps(mockReq("1", { state: { player: { level: 1 } } }), createMockRes(), withDeps(db));
        await putProgressWithDeps(mockReq("2", { state: { player: { level: 99 } } }), createMockRes(), withDeps(db));

        const res1 = createMockRes();
        await getProgressWithDeps(mockReq("1"), res1, withDeps(db));

        const res2 = createMockRes();
        await getProgressWithDeps(mockReq("2"), res2, withDeps(db));

        assert.strictEqual(res1.jsonBody.state.player.level, 1);
        assert.strictEqual(res2.jsonBody.state.player.level, 99);

    } finally {

        db.close();

    }

});

test("getProgress surfaces an unexpected store error as a generic 500 instead of throwing", async () => {

    const res = createMockRes();

    const brokenDeps = {

        getLeaderboardDb: () => { throw new Error("db unavailable"); },
        getPlayerProgress

    };

    await assert.doesNotReject(getProgressWithDeps(mockReq("1"), res, brokenDeps));

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);

});
