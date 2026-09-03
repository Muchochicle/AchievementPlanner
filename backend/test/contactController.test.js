import { test } from "node:test";
import assert from "node:assert";

import { postContactWithDeps } from "../controllers/contactController.js";
import { createLeaderboardDb } from "../services/leaderboardDb.js";
import { saveContactMessage, getRecentContactMessages } from "../services/contactStore.js";

function createMockRes() {

    return {
        statusCode: 200,
        jsonBody: null,
        status(code) { this.statusCode = code; return this; },
        json(body) { this.jsonBody = body; return this; }
    };

}

function mockReq({ body, steamId, userAgent } = {}) {

    return {
        body,
        session: { user: steamId ? { steamid: steamId } : undefined },
        get: name => (name.toLowerCase() === "user-agent" ? userAgent : undefined),
        headers: { "user-agent": userAgent }
    };

}

function withDeps(db) {

    return { getLeaderboardDb: () => db, saveContactMessage };

}

test("postContact stores a valid message and returns a real reference id + canReply", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({
                body: { reason: "Bug report", message: "Something broke", email: "me@example.com" },
                steamId: "123",
                userAgent: "UA/1.0"
            }),
            res,
            withDeps(db)
        );

        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(typeof res.jsonBody.id, "number");
        assert.strictEqual(typeof res.jsonBody.receivedAt, "string");
        assert.strictEqual(res.jsonBody.canReply, true);

        const [row] = getRecentContactMessages(db);
        assert.strictEqual(row.message, "Something broke");
        assert.strictEqual(row.steamId, "123");

    } finally {

        db.close();

    }

});

test("postContact accepts a message with no email and reports canReply:false", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({ body: { reason: "Suggestion / feedback", message: "Please add dark mode" } }),
            res,
            withDeps(db)
        );

        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.canReply, false);

    } finally {

        db.close();

    }

});

test("postContact returns 400 (and stores nothing) for an empty message", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(mockReq({ body: { message: "   " } }), res, withDeps(db));

        assert.strictEqual(res.statusCode, 400);
        assert.strictEqual(res.jsonBody.success, false);
        assert.strictEqual(getRecentContactMessages(db).length, 0);

    } finally {

        db.close();

    }

});

test("postContact returns 400 for a provided-but-invalid email and stores nothing", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({ body: { message: "hi", email: "broken@" } }),
            res,
            withDeps(db)
        );

        assert.strictEqual(res.statusCode, 400);
        assert.match(res.jsonBody.message, /email/i);
        assert.strictEqual(getRecentContactMessages(db).length, 0);

    } finally {

        db.close();

    }

});

test("postContact works for a logged-out visitor (steamId null)", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({ body: { reason: "Other", message: "anon bug report" } }),
            res,
            withDeps(db)
        );

        assert.strictEqual(res.jsonBody.success, true);
        const [row] = getRecentContactMessages(db);
        assert.strictEqual(row.steamId, null);

    } finally {

        db.close();

    }

});

test("postContact surfaces an unexpected store error as a generic 500, never throwing", async () => {

    const res = createMockRes();

    const brokenDeps = {
        getLeaderboardDb: () => { throw new Error("db down"); },
        saveContactMessage
    };

    await assert.doesNotReject(
        postContactWithDeps(mockReq({ body: { message: "hi" } }), res, brokenDeps)
    );

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);

});
