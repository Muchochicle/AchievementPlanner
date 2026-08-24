import { test } from "node:test";
import assert from "node:assert";

import { safeParseJSON } from "../src/utils/storage/safeJson.js";

// Phase 64 (PHASE_64_AUDIT.md) - safeParseJSON is the single shared guard
// behind every localStorage JSON read in this app (player.js, sessionStorage.js,
// inventoryStorage.js), but had never been unit-tested directly in
// isolation - only indirectly, through some (not all) of its consumers.
// These tests exercise the function itself.

test("safeParseJSON returns the fallback when raw is null", () => {

    assert.strictEqual(safeParseJSON(null, "fallback-value"), "fallback-value");

});

test("safeParseJSON returns the fallback when raw is undefined", () => {

    assert.strictEqual(safeParseJSON(undefined, "fallback-value"), "fallback-value");

});

test("safeParseJSON parses and returns valid JSON, ignoring the fallback", () => {

    const result = safeParseJSON('{"a":1,"b":[2,3]}', "fallback-value");

    assert.deepStrictEqual(result, { a: 1, b: [2, 3] });

});

test("safeParseJSON returns the fallback (not a throw) on malformed JSON, and logs a warning naming the context", () => {

    const originalWarn = console.warn;
    const warnCalls = [];
    console.warn = (...args) => { warnCalls.push(args); };

    try {

        const result = safeParseJSON("{not valid json!!!", { safe: true }, "my-context");

        assert.deepStrictEqual(result, { safe: true });

        assert.strictEqual(warnCalls.length, 1);
        assert.match(warnCalls[0][0], /my-context/, "the warning should name the context that failed to parse");

    } finally {

        console.warn = originalWarn;

    }

});

test("safeParseJSON defaults the context label to \"storage\" when none is given", () => {

    const originalWarn = console.warn;
    const warnCalls = [];
    console.warn = (...args) => { warnCalls.push(args); };

    try {

        safeParseJSON("not json", "fallback-value");

        assert.match(warnCalls[0][0], /storage/);

    } finally {

        console.warn = originalWarn;

    }

});
