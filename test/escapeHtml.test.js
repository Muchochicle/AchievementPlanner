import { test } from "node:test";
import assert from "node:assert";

import { escapeHtml } from "../src/utils/format/escapeHtml.js";

test("escapeHtml escapes ampersand", () => {

    assert.strictEqual(escapeHtml("a & b"), "a &amp; b");

});

test("escapeHtml escapes angle brackets", () => {

    assert.strictEqual(escapeHtml("<script>"), "&lt;script&gt;");

});

test("escapeHtml escapes double quotes", () => {

    assert.strictEqual(escapeHtml(`x" onerror="alert(1)`), "x&quot; onerror=&quot;alert(1)");

});

test("escapeHtml escapes a combined payload without double-escaping the ampersand", () => {

    // & must be replaced first (see escapeHtml.js) - if the other
    // replacements ran first and inserted new "&"-containing entities
    // (e.g. "&lt;"), a naive implementation could double-escape them into
    // "&amp;lt;". This confirms that doesn't happen.
    assert.strictEqual(
        escapeHtml(`<img src="x" onerror="alert(1)">&`),
        "&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;&amp;"
    );

});

test("escapeHtml leaves a string with no special characters unchanged", () => {

    assert.strictEqual(escapeHtml("Perfectionist"), "Perfectionist");

});

test("escapeHtml coerces a non-string value to a string before escaping", () => {

    assert.strictEqual(escapeHtml(42), "42");
    assert.strictEqual(escapeHtml(null), "null");
    assert.strictEqual(escapeHtml(undefined), "undefined");

});
