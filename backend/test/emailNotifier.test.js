import { test } from "node:test";
import assert from "node:assert";

import {
    sendContactNotificationWithDeps,
    DEFAULT_CONTACT_TO,
    DEFAULT_CONTACT_FROM
} from "../services/emailNotifier.js";

const SAMPLE = {
    id: 42,
    createdAt: "2026-09-04T09:00:00.000Z",
    reason: "Bug report",
    name: "Ada",
    replyEmail: "ada@example.com",
    message: "The Games page sort is stuck.\nHappens on mobile only.",
    steamId: "9001",
    userAgent: "UA/2.0"
};

function okResponse(body = { id: "re_abc123" }) {

    return { ok: true, status: 200, json: async () => body };

}

function errorResponse(status, body) {

    return { ok: false, status, json: async () => body };

}

test("returns {status:'skipped'} and never calls fetch when RESEND_API_KEY is absent", async () => {

    let fetchCalled = false;

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => { fetchCalled = true; return okResponse(); },
        env: {}
    });

    assert.deepStrictEqual(result, { status: "skipped", reason: "not-configured" });
    assert.strictEqual(fetchCalled, false);

});

test("posts to the Resend API with bearer auth and a payload carrying every required field", async () => {

    let captured = null;

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async (url, options) => {

            captured = { url, options, body: JSON.parse(options.body) };
            return okResponse({ id: "re_xyz" });

        },
        env: { RESEND_API_KEY: "re_secret" }
    });

    assert.deepStrictEqual(result, { status: "sent", id: "re_xyz" });

    assert.strictEqual(captured.url, "https://api.resend.com/emails");
    assert.strictEqual(captured.options.method, "POST");
    assert.strictEqual(captured.options.headers.Authorization, "Bearer re_secret");
    assert.strictEqual(captured.options.headers["Content-Type"], "application/json");

    const body = captured.body;
    assert.strictEqual(body.from, DEFAULT_CONTACT_FROM);
    assert.deepStrictEqual(body.to, [DEFAULT_CONTACT_TO]);
    assert.strictEqual(body.reply_to, "ada@example.com");
    assert.match(body.subject, /Bug report/);
    assert.match(body.subject, /ref #42/);

    // Text body must contain each field the brief asks for.
    for (const needle of [
        "Bug report",           // reason
        "Ada",                  // name
        "ada@example.com",      // user email
        "The Games page sort",  // message
        "ref #42",              // reference id
        "2026-09-04T09:00:00.000Z", // timestamp
        "9001"                  // steam id (aids triage)
    ]) {

        assert.ok(body.text.includes(needle), `text body should mention "${needle}"`);

    }

    // HTML alternative present and escaped.
    assert.ok(body.html.includes("ada@example.com"));

});

test("omits reply_to entirely when the sender gave no email", async () => {

    let body = null;

    await sendContactNotificationWithDeps(
        { ...SAMPLE, replyEmail: null, name: null },
        {
            fetch: async (url, options) => { body = JSON.parse(options.body); return okResponse(); },
            env: { RESEND_API_KEY: "re_secret" }
        }
    );

    assert.ok(!("reply_to" in body), "no reply_to when there is no reply address");
    assert.ok(body.text.includes("(not provided"), "body still notes the absence explicitly");

});

test("honours CONTACT_EMAIL_TO / CONTACT_EMAIL_FROM overrides", async () => {

    let body = null;

    await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async (url, options) => { body = JSON.parse(options.body); return okResponse(); },
        env: {
            RESEND_API_KEY: "re_secret",
            CONTACT_EMAIL_TO: "ops@achievementplanner.dev",
            CONTACT_EMAIL_FROM: "AP <support@achievementplanner.dev>"
        }
    });

    assert.deepStrictEqual(body.to, ["ops@achievementplanner.dev"]);
    assert.strictEqual(body.from, "AP <support@achievementplanner.dev>");

});

test("returns {status:'failed'} with the provider's message on a non-2xx response, and does NOT throw", async () => {

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => errorResponse(422, { message: "The from address is not verified." }),
        env: { RESEND_API_KEY: "re_secret" }
    });

    assert.strictEqual(result.status, "failed");
    assert.ok(result.error instanceof Error);
    assert.match(result.error.message, /not verified/);

});

test("returns {status:'failed'} when fetch itself rejects (network / DNS / abort), and does NOT throw", async () => {

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => { throw new Error("ECONNREFUSED"); },
        env: { RESEND_API_KEY: "re_secret" }
    });

    assert.strictEqual(result.status, "failed");
    assert.match(result.error.message, /ECONNREFUSED/);

});

test("tolerates a non-2xx response whose body is not JSON", async () => {

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => ({ ok: false, status: 503, json: async () => { throw new Error("not json"); } }),
        env: { RESEND_API_KEY: "re_secret" }
    });

    assert.strictEqual(result.status, "failed");
    assert.match(result.error.message, /503/);

});

test("tolerates a 2xx response with no id field", async () => {

    const result = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => ({ ok: true, status: 200, json: async () => { throw new Error("no body"); } }),
        env: { RESEND_API_KEY: "re_secret" }
    });

    assert.deepStrictEqual(result, { status: "sent", id: null });

});

test("trims whitespace around the API key and treats a blank key as not-configured", async () => {

    const blank = await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async () => okResponse(),
        env: { RESEND_API_KEY: "   " }
    });

    assert.strictEqual(blank.status, "skipped");

    let seenAuth = null;

    await sendContactNotificationWithDeps(SAMPLE, {
        fetch: async (url, options) => { seenAuth = options.headers.Authorization; return okResponse(); },
        env: { RESEND_API_KEY: "  re_padded  " }
    });

    assert.strictEqual(seenAuth, "Bearer re_padded");

});
