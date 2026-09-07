import { test } from "node:test";
import assert from "node:assert";

import { fetchWithRetry } from "../src/utils/http/fetchWithRetry.js";

// fetchWithRetry wraps fetchWithTimeout with exactly one silent retry for
// a transient backend blip (a 502/503/504, or a rejected/timed-out fetch),
// used by gameService.js's read-only catalog requests so a Railway cold
// start doesn't surface as the catalog error state. Everything else - a
// normal 4xx, any other 5xx, a second consecutive failure - must behave
// exactly as a bare fetchWithTimeout would. Same globalThis.fetch swap
// convention as fetchWithTimeout.test.js; retryDelayMs:0 keeps the pause
// out of the test's wall-clock.

function withMockedFetch(fn, run) {

    const original = globalThis.fetch;

    globalThis.fetch = fn;

    return run().finally(() => {

        globalThis.fetch = original;

    });

}

function response(status) {

    return { ok: status >= 200 && status < 300, status };

}

function mockFetchSequence(...outcomes) {

    let call = 0;

    const calls = () => call;

    const fetchImpl = async () => {

        const outcome = outcomes[Math.min(call, outcomes.length - 1)];

        call++;

        if (outcome instanceof Error) {

            throw outcome;

        }

        return outcome;

    };

    return { fetchImpl, calls };

}

test("returns the first response and does not retry when it succeeds", async () => {

    const { fetchImpl, calls } = mockFetchSequence(response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 200);
    assert.strictEqual(calls(), 1, "a successful first attempt must not be retried");

});

test("retries once on a 502 and returns the successful second response", async () => {

    const { fetchImpl, calls } = mockFetchSequence(response(502), response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 200);
    assert.strictEqual(calls(), 2);

});

for (const status of [503, 504]) {

    test(`retries once on a ${status} and returns the successful second response`, async () => {

        const { fetchImpl, calls } = mockFetchSequence(response(status), response(200));

        const result = await withMockedFetch(
            fetchImpl,
            () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
        );

        assert.strictEqual(result.status, 200);
        assert.strictEqual(calls(), 2);

    });

}

test("retries once on a rejected fetch (network failure) and returns the successful second response", async () => {

    const { fetchImpl, calls } = mockFetchSequence(new TypeError("Failed to fetch"), response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 200);
    assert.strictEqual(calls(), 2);

});

test("retries once on an AbortError (fetchWithTimeout's timeout) and returns the successful second response", async () => {

    const abortError = new Error("The operation was aborted");
    abortError.name = "AbortError";

    const { fetchImpl, calls } = mockFetchSequence(abortError, response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 200);
    assert.strictEqual(calls(), 2);

});

test("does NOT retry a normal 404 - it is returned from the first attempt untouched", async () => {

    const { fetchImpl, calls } = mockFetchSequence(response(404), response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 404);
    assert.strictEqual(calls(), 1, "a 4xx is a real answer, not a transient failure");

});

test("does NOT retry a 500 - only the 502/503/504 gateway statuses are treated as transient", async () => {

    const { fetchImpl, calls } = mockFetchSequence(response(500), response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 500);
    assert.strictEqual(calls(), 1);

});

test("stops after exactly one retry: a second transient 502 is returned as-is (existing error UI preserved)", async () => {

    const { fetchImpl, calls } = mockFetchSequence(response(502), response(502), response(200));

    const result = await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
    );

    assert.strictEqual(result.status, 502);
    assert.strictEqual(result.ok, false);
    assert.strictEqual(calls(), 2, "at most two attempts total - never a third");

});

test("stops after exactly one retry: a second consecutive rejection propagates unchanged", async () => {

    const first = new TypeError("Failed to fetch");
    const second = new TypeError("still failing");

    const { fetchImpl, calls } = mockFetchSequence(first, second, response(200));

    await assert.rejects(
        withMockedFetch(
            fetchImpl,
            () => fetchWithRetry("https://example.test/api/games", {}, { retryDelayMs: 0 })
        ),
        /still failing/
    );
    assert.strictEqual(calls(), 2);

});

test("passes url and options through to fetch unchanged on both attempts", async () => {

    const seen = [];

    const fetchImpl = async (url, options) => {

        seen.push({ url, credentials: options.credentials });

        return seen.length === 1 ? response(503) : response(200);

    };

    await withMockedFetch(
        fetchImpl,
        () => fetchWithRetry("https://example.test/api/games/popular", { credentials: "include" }, { retryDelayMs: 0 })
    );

    assert.deepStrictEqual(seen, [
        { url: "https://example.test/api/games/popular", credentials: "include" },
        { url: "https://example.test/api/games/popular", credentials: "include" }
    ]);

});
