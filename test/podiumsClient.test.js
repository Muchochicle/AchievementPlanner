import { test } from "node:test";
import assert from "node:assert";

import { fetchGamePodium, fetchGlobalPodium } from "../src/utils/podiums/podiumsClient.js";

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

test("fetchGamePodium returns a ready state with the leaderboard fields on success", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/api\/podiums\/game\/440$/);
        assert.deepStrictEqual(options, { credentials: "include" });

        return jsonResponse(200, {
            success: true,
            top10: [{ steamid: "1" }],
            me: null,
            totalRanked: 42,
            loggedIn: false
        });

    });

    try {

        const result = await fetchGamePodium(440);

        assert.strictEqual(result.status, "ready");
        assert.strictEqual(result.totalRanked, 42);
        assert.strictEqual(result.loggedIn, false);
        assert.deepStrictEqual(result.top10, [{ steamid: "1" }]);

    } finally {

        restore();

    }

});

test("fetchGlobalPodium hits the /global/:category endpoint", async () => {

    const restore = mockFetch(async url => {

        assert.match(url, /\/api\/podiums\/global\/playtime$/);

        return jsonResponse(200, { success: true, top10: [], totalRanked: 0 });

    });

    try {

        const result = await fetchGlobalPodium("playtime");
        assert.strictEqual(result.status, "ready");

    } finally {

        restore();

    }

});

test("fetchPodium reports an error state when the network request itself throws", async () => {

    const restore = mockFetch(async () => {

        throw new Error("network down");

    });

    try {

        const result = await fetchGamePodium(440);

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /network down/);

    } finally {

        restore();

    }

});

test("fetchPodium reports an error state when the backend responds success:false", async () => {

    const restore = mockFetch(async () => jsonResponse(200, { success: false, message: "boom" }));

    try {

        const result = await fetchGamePodium(440);

        assert.strictEqual(result.status, "error");
        assert.strictEqual(result.error.message, "boom");

    } finally {

        restore();

    }

});

test("fetchPodium reports an error state on a non-2xx HTTP status, even with a malformed/empty body", async () => {

    const restore = mockFetch(async () => ({
        status: 500,
        ok: false,
        json: async () => { throw new SyntaxError("Unexpected end of JSON input"); }
    }));

    try {

        const result = await fetchGamePodium(440);

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /status 500/);

    } finally {

        restore();

    }

});
