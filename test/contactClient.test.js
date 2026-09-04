import { test } from "node:test";
import assert from "node:assert";

import { isValidEmail } from "../src/utils/contact/validateEmail.js";
import { submitContactMessage } from "../src/utils/contact/contactClient.js";

function mockFetch(impl) {

    const original = globalThis.fetch;
    globalThis.fetch = impl;
    return () => { globalThis.fetch = original; };

}

function jsonResponse(status, body) {

    return {
        status,
        ok: status >= 200 && status < 300,
        json: async () => body
    };

}

test("isValidEmail accepts ordinary addresses, rejects obvious typos", () => {

    for (const good of ["jordi@example.com", "a.b-c_d@sub.domain.co.uk", "  x@y.zz  "]) {

        assert.strictEqual(isValidEmail(good), true, good);

    }

    for (const bad of ["jordi@", "@x.com", "nodots", "a b@c.com", "", null, 5]) {

        assert.strictEqual(isValidEmail(bad), false, JSON.stringify(bad));

    }

});

test("submitContactMessage: POSTs JSON with credentials and returns {status:'ok'} on success", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/api\/contact$/);
        assert.strictEqual(options.method, "POST");
        assert.strictEqual(options.credentials, "include");
        assert.strictEqual(options.headers["Content-Type"], "application/json");

        const body = JSON.parse(options.body);
        assert.strictEqual(body.message, "hello");
        assert.strictEqual(body.email, "me@example.com");

        return jsonResponse(200, { success: true, id: 7, canReply: true, notified: true, notificationStatus: "sent" });

    });

    try {

        const result = await submitContactMessage({ reason: "Bug report", message: "hello", email: "me@example.com", name: "" });

        assert.deepStrictEqual(result, { status: "ok", id: 7, canReply: true, notificationStatus: "sent", notified: true });

    } finally {

        restore();

    }

});

test("submitContactMessage: passes through notificationStatus:'failed' (message stored, email alert did not go out)", async () => {

    const restore = mockFetch(async () => jsonResponse(200, { success: true, id: 8, canReply: false, notified: false, notificationStatus: "failed" }));

    try {

        const result = await submitContactMessage({ reason: "Other", message: "hi", email: "", name: "" });

        assert.strictEqual(result.status, "ok");
        assert.strictEqual(result.notificationStatus, "failed");
        assert.strictEqual(result.notified, false);

    } finally {

        restore();

    }

});

test("submitContactMessage: an older backend response with no notificationStatus is treated as 'skipped', never implying an email went out", async () => {

    const restore = mockFetch(async () => jsonResponse(200, { success: true, id: 9, canReply: true }));

    try {

        const result = await submitContactMessage({ reason: "Other", message: "hi", email: "me@example.com", name: "" });

        assert.strictEqual(result.status, "ok");
        assert.strictEqual(result.notificationStatus, "skipped");
        assert.strictEqual(result.notified, false);

    } finally {

        restore();

    }

});

test("submitContactMessage: a 400 with a message becomes {status:'invalid'} (shown inline, no fallback)", async () => {

    const restore = mockFetch(async () => jsonResponse(400, { success: false, message: "That email address doesn't look right." }));

    try {

        const result = await submitContactMessage({ reason: "Other", message: "hi", email: "bad@", name: "" });

        assert.strictEqual(result.status, "invalid");
        assert.match(result.message, /email/i);

    } finally {

        restore();

    }

});

test("submitContactMessage: a network throw becomes {status:'error'} so the caller can fall back to mailto:", async () => {

    const restore = mockFetch(async () => { throw new Error("offline"); });

    try {

        const result = await submitContactMessage({ reason: "Other", message: "hi", email: "", name: "" });

        assert.strictEqual(result.status, "error");
        assert.ok(result.error instanceof Error);

    } finally {

        restore();

    }

});

test("submitContactMessage: a 500 becomes {status:'error'} (fallback), not a false success", async () => {

    const restore = mockFetch(async () => jsonResponse(500, { success: false, message: "Something went wrong." }));

    try {

        const result = await submitContactMessage({ reason: "Other", message: "hi", email: "", name: "" });

        assert.strictEqual(result.status, "error");

    } finally {

        restore();

    }

});
