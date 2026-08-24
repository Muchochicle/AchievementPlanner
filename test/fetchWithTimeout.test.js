import { test } from "node:test";
import assert from "node:assert";

import { fetchWithTimeout } from "../src/utils/http/fetchWithTimeout.js";

// Phase 61 (PHASE_61_AUDIT.md) - none of this app's frontend fetch calls to
// its own backend previously bounded how long a request could hang.
// Mirrors backend/services/steamAuth.js's own validateSteamResponse timeout
// test convention (Phase 53, PHASE_53_AUDIT.md) - swap globalThis.fetch for
// the test, use t.mock.timers to advance past the timeout deterministically
// instead of a real wait.

function withMockedFetch(fn, run) {

    const original = globalThis.fetch;

    globalThis.fetch = fn;

    return run().finally(() => {

        globalThis.fetch = original;

    });

}

test("fetchWithTimeout resolves normally when the underlying fetch completes before the timeout", async () => {

    const fakeResponse = { ok: true };

    const result = await withMockedFetch(

        async (url, options) => {

            assert.strictEqual(url, "https://example.test/api");
            assert.strictEqual(options.credentials, "include");
            assert.ok(options.signal instanceof AbortSignal, "a real AbortSignal must always be passed through");

            return fakeResponse;

        },

        () => fetchWithTimeout("https://example.test/api", { credentials: "include" })

    );

    assert.strictEqual(result, fakeResponse);

});

test("fetchWithTimeout aborts (rejects) instead of hanging forever once the timeout elapses", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const hangingFetch = (url, options) => new Promise((resolve, reject) => {

        options.signal.addEventListener("abort", () => {

            const abortError = new Error("The operation was aborted");
            abortError.name = "AbortError";

            reject(abortError);

        });

    });

    const promise = withMockedFetch(hangingFetch, () => fetchWithTimeout("https://example.test/api"));

    // Attach the rejection assertion before advancing the mocked clock, so
    // there is no unhandled-rejection window between the abort firing and
    // the assertion being registered.
    const assertion = assert.rejects(promise, { name: "AbortError" });

    t.mock.timers.tick(20000);

    await assertion;

});

test("fetchWithTimeout's default timeout never fires for a response that resolves well before it elapses", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const result = await withMockedFetch(

        async () => ({ ok: true, fromFastResponse: true }),

        () => fetchWithTimeout("https://example.test/api")

    );

    assert.strictEqual(result.fromFastResponse, true);

});

test("a custom timeoutMs overrides the 20s default", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const hangingFetch = (url, options) => new Promise((resolve, reject) => {

        options.signal.addEventListener("abort", () => {

            const abortError = new Error("aborted");
            abortError.name = "AbortError";

            reject(abortError);

        });

    });

    const promise = withMockedFetch(hangingFetch, () => fetchWithTimeout("https://example.test/api", {}, 5000));

    const assertion = assert.rejects(promise, { name: "AbortError" });

    t.mock.timers.tick(5000);

    await assertion;

});
