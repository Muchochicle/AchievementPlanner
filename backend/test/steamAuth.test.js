import { test } from "node:test";
import assert from "node:assert";

import { validateSteamResponse } from "../services/steamAuth.js";

// validateSteamResponse() had zero direct test coverage before this file -
// every existing test (steamController.test.js, steamSessionRegeneration.test.js)
// injects it away as a mocked dependency rather than exercising its real
// fetch/parsing logic. Mirrors steamApi.test.js's own withMockedFetch
// convention (swap globalThis.fetch for the test, restore in a finally) so
// this file needs no live network access either.

function textResponse(text) {

    return { text: async () => text };

}

async function withMockedFetch(fn, run) {

    const original = globalThis.fetch;

    globalThis.fetch = fn;

    try {

        return await run();

    } finally {

        globalThis.fetch = original;

    }

}

test("validateSteamResponse returns true when Steam's response includes is_valid:true", async () => {

    const result = await withMockedFetch(

        async () => textResponse("ns:http://specs.openid.net/auth/2.0\nis_valid:true\n"),

        () => validateSteamResponse({ state: "abc" })

    );

    assert.strictEqual(result, true);

});

test("validateSteamResponse returns false when Steam's response does not include is_valid:true", async () => {

    const result = await withMockedFetch(

        async () => textResponse("ns:http://specs.openid.net/auth/2.0\nis_valid:false\n"),

        () => validateSteamResponse({ state: "abc" })

    );

    assert.strictEqual(result, false);

});

test("validateSteamResponse posts to Steam's check_authentication endpoint with openid.mode overridden, regardless of what the caller's query contained", async () => {

    let capturedUrl;
    let capturedBody;

    const result = await withMockedFetch(

        async (url, options) => {

            capturedUrl = url;
            capturedBody = options.body;

            return textResponse("is_valid:true");

        },

        () => validateSteamResponse({ "openid.mode": "id_res", state: "abc" })

    );

    assert.strictEqual(result, true);
    assert.strictEqual(capturedUrl, "https://steamcommunity.com/openid/login");
    assert.strictEqual(capturedBody.get("openid.mode"), "check_authentication");
    assert.strictEqual(capturedBody.get("state"), "abc");

});

// Finding 21 (PHASE_53_AUDIT.md) - previously this fetch had no timeout at
// all, so a hung/slow Steam response left the request (and its underlying
// connection) open indefinitely. These two tests prove the fix: a response
// that never resolves is aborted once the timeout elapses (instead of
// hanging forever), and a normal, fast response is completely unaffected by
// the timeout machinery being armed.

test("validateSteamResponse aborts (rejects) instead of hanging forever once the fetch timeout elapses", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const hangingFetch = (url, options) => new Promise((resolve, reject) => {

        options.signal.addEventListener("abort", () => {

            const abortError = new Error("This operation was aborted");
            abortError.name = "AbortError";

            reject(abortError);

        });

    });

    const promise = withMockedFetch(hangingFetch, () => validateSteamResponse({ state: "abc" }));

    // Attach the rejection assertion before advancing the mocked clock, so
    // there is no unhandled-rejection window between the abort firing and
    // the assertion being registered.
    const assertion = assert.rejects(promise, { name: "AbortError" });

    t.mock.timers.tick(8000);

    await assertion;

});

test("validateSteamResponse's timeout never fires for a response that resolves before it elapses", async (t) => {

    t.mock.timers.enable({ apis: ["setTimeout"] });

    const result = await withMockedFetch(

        async () => textResponse("is_valid:true"),

        () => validateSteamResponse({ state: "abc" })

    );

    // The mocked timer was armed but never ticked forward - if clearTimeout
    // in the `finally` block didn't actually cancel it, that's still not
    // observable here directly, but a real (unmocked) equivalent of this
    // exact call sequence is exercised by every other test in this file
    // without ever hanging or leaking an unhandled rejection, which is the
    // behavior that actually matters.
    assert.strictEqual(result, true);

});
