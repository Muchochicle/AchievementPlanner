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
        // fetchWithTimeout (Phase 61, PHASE_61_AUDIT.md) now also passes an
        // AbortSignal alongside every caller-supplied option, so this checks
        // the two meaningful fields individually rather than requiring
        // options to equal only {credentials:"include"}.
        assert.strictEqual(options.credentials, "include");
        assert.ok(options.signal instanceof AbortSignal);

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

// Phase 61 (PHASE_61_AUDIT.md) - fetchWithTimeout means a genuinely
// unresponsive backend now surfaces as this same error state instead of
// leaving the caller awaiting forever with no feedback.
test("fetchPodium reports an error state (not an unhandled hang) when the underlying fetch times out", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const restore = mockFetch((url, options) => new Promise((resolve, reject) => {

        options.signal.addEventListener("abort", () => {

            const abortError = new Error("The operation was aborted");
            abortError.name = "AbortError";

            reject(abortError);

        });

    }));

    try {

        const promise = fetchGamePodium(440);

        const assertion = (async () => {

            const result = await promise;

            assert.strictEqual(result.status, "error");
            assert.strictEqual(result.error.name, "AbortError");

        })();

        t.mock.timers.tick(20000);

        await assertion;

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
