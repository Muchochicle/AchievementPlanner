import { test } from "node:test";
import assert from "node:assert";

import { fetchProfileStats } from "../src/utils/player/statistics/profileStatsClient.js";

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

test("fetchProfileStats returns a ready state with every field from a successful response", async () => {

    const restore = mockFetch(async (url, options) => {

        assert.match(url, /\/api\/profile\/stats$/);
        // fetchWithTimeout (Phase 61, PHASE_61_AUDIT.md) now also passes an
        // AbortSignal alongside every caller-supplied option, so this checks
        // the two meaningful fields individually rather than requiring
        // options to equal only {credentials:"include"}.
        assert.strictEqual(options.credentials, "include");
        assert.ok(options.signal instanceof AbortSignal);

        return jsonResponse(200, {
            success: true,
            gamesOwned: 10,
            gamesPlayed: 5,
            achievements: 42,
            gamesWithUnlockedAchievements: 4,
            gamesWithAchievements: 7,
            completedGames: 2,
            completedGameSlugs: ["hades"],
            gamesConsidered: 10,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0
        });

    });

    try {

        const result = await fetchProfileStats();

        assert.strictEqual(result.status, "ready");
        assert.strictEqual(result.achievements, 42);
        assert.strictEqual(result.gamesWithAchievements, 7);
        assert.deepStrictEqual(result.completedGameSlugs, ["hades"]);

    } finally {

        restore();

    }

});

test("fetchProfileStats maps a 401 to logged-out (not error)", async () => {

    const restore = mockFetch(async () => jsonResponse(401, { success: false, message: "Not logged in" }));

    try {

        const result = await fetchProfileStats();

        assert.deepStrictEqual(result, { status: "logged-out" });

    } finally {

        restore();

    }

});

test("fetchProfileStats reports an error state when the network request itself throws", async () => {

    const restore = mockFetch(async () => { throw new Error("offline"); });

    try {

        const result = await fetchProfileStats();

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /offline/);

    } finally {

        restore();

    }

});

test("fetchProfileStats reports an error state on a non-401 non-2xx status", async () => {

    const restore = mockFetch(async () => jsonResponse(500, {}));

    try {

        const result = await fetchProfileStats();

        assert.strictEqual(result.status, "error");
        assert.match(result.error.message, /status 500/);

    } finally {

        restore();

    }

});

test("fetchProfileStats reports an error state when the backend responds success:false", async () => {

    const restore = mockFetch(async () => jsonResponse(200, { success: false, message: "backend exploded" }));

    try {

        const result = await fetchProfileStats();

        assert.strictEqual(result.status, "error");
        assert.strictEqual(result.error.message, "backend exploded");

    } finally {

        restore();

    }

});

test("fetchProfileStats reports an error state on a malformed (non-JSON) 200 body", async () => {

    const restore = mockFetch(async () => ({
        status: 200,
        ok: true,
        json: async () => { throw new SyntaxError("Unexpected token"); }
    }));

    try {

        const result = await fetchProfileStats();

        assert.strictEqual(result.status, "error");

    } finally {

        restore();

    }

});
