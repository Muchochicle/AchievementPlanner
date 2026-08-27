import { test } from "node:test";
import assert from "node:assert";

// env.js computes ENV.API_BASE_URL once, at module import time, from
// `window.location.hostname` (Phase 73 - see src/env.js's own comment for
// why this replaced a hardcoded "http://localhost:3000" that would have
// broken every real production visitor). Each scenario below needs its own
// fresh module instance (a cache-busting query string forces a new ESM
// module registration) since re-importing the same specifier would just
// return the first run's already-computed, cached ENV object.

test("ENV.API_BASE_URL defaults to localhost:3000 when there is no window (Node/test context)", async () => {

    delete globalThis.window;

    const { ENV } = await import(`../src/env.js?no-window-${Date.now()}`);

    assert.strictEqual(ENV.API_BASE_URL, "http://localhost:3000");

});

test("ENV.API_BASE_URL resolves to localhost:3000 when served from localhost or 127.0.0.1 (local dev)", async () => {

    for (const hostname of ["localhost", "127.0.0.1"]) {

        globalThis.window = { location: { hostname } };

        const { ENV } = await import(`../src/env.js?dev-${hostname}-${Date.now()}`);

        assert.strictEqual(ENV.API_BASE_URL, "http://localhost:3000");

    }

    delete globalThis.window;

});

test("ENV.API_BASE_URL resolves to the configured split-origin backend for a real production hostname", async () => {

    globalThis.window = { location: { hostname: "achievementplanner.example.com" } };

    const { ENV } = await import(`../src/env.js?prod-${Date.now()}`);

    assert.strictEqual(ENV.API_BASE_URL, "https://achievementplanner-production.up.railway.app");

    delete globalThis.window;

});
