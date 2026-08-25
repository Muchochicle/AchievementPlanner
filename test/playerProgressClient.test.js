import { test } from "node:test";
import assert from "node:assert";

import { fetchPlayerProgress, savePlayerProgressRemote } from "../src/utils/player/sync/playerProgressClient.js";

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

test("fetchPlayerProgress returns a ready state with the server's state/updatedAt on success", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/api\/player\/progress$/);
        assert.strictEqual(options.credentials, "include");
        assert.ok(options.signal instanceof AbortSignal);

        return jsonResponse(200, { success: true, state: { player: { level: 2 } }, updatedAt: "2026-08-25T00:00:00.000Z" });

    });

    try {

        const result = await fetchPlayerProgress();

        assert.strictEqual(result.status, "ready");
        assert.deepStrictEqual(result.state, { player: { level: 2 } });
        assert.strictEqual(result.updatedAt, "2026-08-25T00:00:00.000Z");

    } finally {

        restore();

    }

});

test("fetchPlayerProgress returns an error state on a 401 (not logged in)", async () => {

    const restore = mockFetch(async () => jsonResponse(401, { success: false, message: "Not logged in" }));

    try {

        const result = await fetchPlayerProgress();

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /Not logged in/);

    } finally {

        restore();

    }

});

test("fetchPlayerProgress returns an error state when fetch itself rejects (network failure)", async () => {

    const restore = mockFetch(async () => { throw new Error("network down"); });

    try {

        const result = await fetchPlayerProgress();

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /network down/);

    } finally {

        restore();

    }

});

test("savePlayerProgressRemote sends a PUT with the state wrapped in {state}, credentials included", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/api\/player\/progress$/);
        assert.strictEqual(options.method, "PUT");
        assert.strictEqual(options.credentials, "include");
        assert.strictEqual(options.headers["Content-Type"], "application/json");
        assert.deepStrictEqual(JSON.parse(options.body), { state: { player: { level: 3 } } });

        return jsonResponse(200, { success: true, updatedAt: "2026-08-25T01:00:00.000Z" });

    });

    try {

        const result = await savePlayerProgressRemote({ player: { level: 3 } });

        assert.strictEqual(result.status, "ready");
        assert.strictEqual(result.updatedAt, "2026-08-25T01:00:00.000Z");

    } finally {

        restore();

    }

});

test("savePlayerProgressRemote returns an error state on a non-success response", async () => {

    const restore = mockFetch(async () => jsonResponse(413, { success: false, message: "State payload too large" }));

    try {

        const result = await savePlayerProgressRemote({ huge: "blob" });

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /too large/);

    } finally {

        restore();

    }

});
