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

// PHASE_50_AUDIT.md Finding 12: every active-filter chip's remove button
// used to share the identical, non-distinguishing aria-label="Remove
// filter" regardless of which filter it removed - a screen-reader user
// with 2+ filters active heard indistinguishable buttons. games.js's
// renderFilterChips() builds each button's label via the small exported
// pure function below, so it's regression-tested directly.
const { buildRemoveFilterLabel } = await import("../src/js/games.js");

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
