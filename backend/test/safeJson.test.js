import { test } from "node:test";
import assert from "node:assert";

import { safeParseJSON } from "../../src/utils/storage/safeJson.js";

test("returns the fallback when raw is null", () => {

    assert.strictEqual(safeParseJSON(null, "fallback"), "fallback");

});

test("returns the fallback when raw is undefined", () => {

    assert.strictEqual(safeParseJSON(undefined, "fallback"), "fallback");

});

test("parses valid JSON correctly", () => {

    assert.deepStrictEqual(
        safeParseJSON('{"a":1}', null),
        { a: 1 }
    );

});

test("returns the fallback (does not throw) for malformed JSON", () => {

    assert.strictEqual(
        safeParseJSON("{not valid json", "fallback"),
        "fallback"
    );

});

test("returns the fallback for an empty string, which is not valid JSON", () => {

    assert.strictEqual(safeParseJSON("", "fallback"), "fallback");

});

test("warns (non-silently) when JSON is malformed, but still returns the fallback", (t) => {

    const warnMock = t.mock.method(console, "warn", () => {});

    const result = safeParseJSON("{broken", "fallback", "test-context");

    assert.strictEqual(result, "fallback");
    assert.strictEqual(warnMock.mock.calls.length, 1);

});
