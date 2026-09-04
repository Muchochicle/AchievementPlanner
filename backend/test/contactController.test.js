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

// Default notifier: pretends the provider accepted the email. Individual
// tests pass their own to exercise skipped / failed / threw.
function withDeps(db, sendContactNotification = async () => ({ status: "sent", id: "email_test_1" })) {

    return { getLeaderboardDb: () => db, saveContactMessage, sendContactNotification };

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

test("postContact surfaces an unexpected store error as a generic 500, never throwing, and never attempts to notify", async () => {

    const res = createMockRes();

    let notifyCalled = false;

    const brokenDeps = {
        getLeaderboardDb: () => { throw new Error("db down"); },
        saveContactMessage,
        sendContactNotification: async () => { notifyCalled = true; return { status: "sent" }; }
    };

    await assert.doesNotReject(
        postContactWithDeps(mockReq({ body: { message: "hi" } }), res, brokenDeps)
    );

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);
    assert.strictEqual(notifyCalled, false, "must not try to email a message that was never stored");

});

// --- Email notification outcomes (Task 10) -------------------------------

test("postContact reports notificationStatus:'sent' and passes the stored id/timestamp + validated fields to the notifier", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        let received = null;

        const notifier = async fields => {

            received = fields;
            return { status: "sent", id: "re_123" };

        };

        await postContactWithDeps(
            mockReq({
                body: { reason: "Bug report", message: "boom", email: "you@example.com", name: "Jo" },
                steamId: "77"
            }),
            res,
            withDeps(db, notifier)
        );

        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.notified, true);
        assert.strictEqual(res.jsonBody.notificationStatus, "sent");

        const [row] = getRecentContactMessages(db);
        assert.strictEqual(received.id, row.id, "notifier gets the real stored row id");
        assert.strictEqual(received.createdAt, res.jsonBody.receivedAt);
        assert.strictEqual(received.reason, "Bug report");
        assert.strictEqual(received.message, "boom");
        assert.strictEqual(received.replyEmail, "you@example.com");
        assert.strictEqual(received.name, "Jo");
        assert.strictEqual(received.steamId, "77");

    } finally {

        db.close();

    }

});

test("postContact still returns success (message stored) when notifications are not configured (skipped)", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({ body: { message: "no key configured" } }),
            res,
            withDeps(db, async () => ({ status: "skipped", reason: "not-configured" }))
        );

        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.notified, false);
        assert.strictEqual(res.jsonBody.notificationStatus, "skipped");
        assert.strictEqual(getRecentContactMessages(db).length, 1, "message is stored even with no notifier configured");

    } finally {

        db.close();

    }

});

test("postContact still returns success (message stored) when the provider rejects/was unreachable (failed)", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await postContactWithDeps(
            mockReq({ body: { message: "provider down" } }),
            res,
            withDeps(db, async () => ({ status: "failed", error: new Error("HTTP 422") }))
        );

        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.notified, false);
        assert.strictEqual(res.jsonBody.notificationStatus, "failed");
        assert.strictEqual(getRecentContactMessages(db).length, 1);

    } finally {

        db.close();

    }

});

test("postContact does not turn a stored message into a 500 if the notifier itself throws", async () => {

    const db = createLeaderboardDb(":memory:");

    try {

        const res = createMockRes();

        await assert.doesNotReject(
            postContactWithDeps(
                mockReq({ body: { message: "notifier is buggy" } }),
                res,
                withDeps(db, async () => { throw new Error("unexpected bug in notifier"); })
            )
        );

        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(res.jsonBody.success, true);
        assert.strictEqual(res.jsonBody.notificationStatus, "failed");
        assert.strictEqual(getRecentContactMessages(db).length, 1);

    } finally {

        db.close();

    }

});
