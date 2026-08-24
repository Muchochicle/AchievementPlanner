import { test } from "node:test";
import assert from "node:assert";

import { safeSetItem } from "../../src/utils/storage/safeSetItem.js";

// Finding 2 (PHASE_51-55_AUDIT.md) - every localStorage.setItem call in
// src/ previously ran unguarded; a real quota-exhaustion or
// private/incognito-mode exception would crash whatever render/handler
// triggered the write. safeSetItem is the shared fix, mirroring
// safeParseJSON's sibling "degrade instead of crash" convention for reads.

function withMockedLocalStorage(setItemImpl, run) {

    const original = globalThis.localStorage;

    globalThis.localStorage = { setItem: setItemImpl };

    try {

        return run();

    } finally {

        globalThis.localStorage = original;

    }

}

test("writes the value and returns true on a normal, successful setItem call", () => {

    const calls = [];

    const result = withMockedLocalStorage(

        (key, value) => calls.push([key, value]),

        () => safeSetItem("my-key", "my-value")

    );

    assert.strictEqual(result, true);
    assert.deepStrictEqual(calls, [["my-key", "my-value"]]);

});

test("catches a thrown exception (e.g. quota exceeded) instead of letting it propagate, and returns false", () => {

    const result = withMockedLocalStorage(

        () => { throw new DOMException("QuotaExceededError", "QuotaExceededError"); },

        () => {

            let caught = null;

            let value;

            try {

                value = safeSetItem("my-key", "my-value");

            } catch (error) {

                caught = error;

            }

            assert.strictEqual(caught, null, "safeSetItem must never let the underlying exception propagate to the caller");

            return value;

        }

    );

    assert.strictEqual(result, false, "must return false to signal the write did not persist");

});

test("warns (non-silently) when a write fails, but does not throw", (t) => {

    const warnMock = t.mock.method(console, "warn", () => {});

    const result = withMockedLocalStorage(

        () => { throw new Error("storage restricted"); },

        () => safeSetItem("my-key", "my-value", "test-context")

    );

    assert.strictEqual(result, false);
    assert.strictEqual(warnMock.mock.calls.length, 1);
    assert.match(warnMock.mock.calls[0].arguments[0], /test-context/);

});

test("context defaults to a generic 'storage' label when not provided", (t) => {

    const warnMock = t.mock.method(console, "warn", () => {});

    const result = withMockedLocalStorage(

        () => { throw new Error("boom"); },

        () => safeSetItem("my-key", "my-value")

    );

    assert.strictEqual(result, false);
    assert.match(warnMock.mock.calls[0].arguments[0], /"storage"/);

});
