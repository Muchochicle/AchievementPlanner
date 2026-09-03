import { test } from "node:test";
import assert from "node:assert";

// games.js self-invokes init() on import - this minimal stub lets that
// happen safely (no #navbar -> loadNavbar short-circuits with no fetch;
// #games-container -> a plain settable-innerHTML object, so a subsequent
// fetch failure inside init()'s own try/catch just renders the existing
// error state, matching this project's "smallest shim that does the job"
// convention (see test/layout.test.js)) without needing to drive the whole
// page-init flow just to reach the one pure function under test here.
globalThis.document = {
    getElementById(id) {

        if (id === "games-container") return { innerHTML: "" };
        return null; // no #navbar -> loadNavbar() returns immediately

    }
};

// init()'s catalog fetch would otherwise attempt a real localhost network
// call that resolves after this (pure-function) test has already ended,
// tripping the runner's "async activity after the test" guard. A stub
// rejection keeps that failure entirely inside init()'s own try/catch.
globalThis.fetch = () => Promise.reject(new Error("no network in this unit test"));

// PHASE_50_AUDIT.md Finding 12: every active-filter chip's remove button
// used to share the identical, non-distinguishing aria-label="Remove
// filter" regardless of which filter it removed - a screen-reader user
// with 2+ filters active heard indistinguishable buttons. games.js's
// renderFilterChips() builds each button's label via the small exported
// pure function below, so it's regression-tested directly.
const { buildRemoveFilterLabel, buildFilterChipHtml } = await import("../src/js/games.js");

test("buildRemoveFilterLabel embeds the specific filter's own text, not a generic label", () => {

    assert.strictEqual(
        buildRemoveFilterLabel("Action"),
        "Remove Action filter"
    );

});

test("buildRemoveFilterLabel produces distinct labels for two different filters", () => {

    const genreLabel = buildRemoveFilterLabel("Action");
    const difficultyLabel = buildRemoveFilterLabel("Easy (1-3)");

    assert.notStrictEqual(genreLabel, difficultyLabel);
    assert.match(genreLabel, /Action/);
    assert.match(difficultyLabel, /Easy \(1-3\)/);

});

// Phase 66 regression: renderFilterChips() used to interpolate filterText
// (read via .textContent from a filter checkbox's own label, which decodes
// HTML entities back to raw characters) straight into innerHTML, both as
// element content and inside an unescaped aria-label attribute value - no
// escapeHtml() call, unlike genres.js's own createGenresHTML() (the
// upstream source of this same genre-label text), which already escapes
// "to close the gap if genre data is ever sourced dynamically in the
// future." This is the one consumer of that data the earlier fix missed.
test("buildFilterChipHtml escapes an HTML-injecting filter label", () => {

    const html = buildFilterChipHtml(`<script>alert(1)</script>`);

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("buildFilterChipHtml escapes a double-quote-breakout attempt in the aria-label attribute", () => {

    const html = buildFilterChipHtml(`Action" onmouseover="alert(1)`);

    assert.doesNotMatch(html, /aria-label="Remove Action" onmouseover="alert\(1\)/);
    assert.match(html, /&quot;/);

});

test("buildFilterChipHtml renders a normal filter label correctly", () => {

    const html = buildFilterChipHtml("Action");

    assert.match(html, /<span>\s*Action\s*<\/span>/);
    assert.match(html, /aria-label="Remove Action filter"/);

});
