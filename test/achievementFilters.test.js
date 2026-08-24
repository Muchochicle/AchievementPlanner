import { test } from "node:test";
import assert from "node:assert";

// applyFilter() (src/utils/planner/filters.js) is the actual show/hide
// logic behind the All/Pending/Completed achievement filter buttons -
// test/achievementFiltersAria.test.js already covers the aria-pressed
// a11y toggle (PHASE_50_AUDIT.md Finding 13), but its own DOM stub
// deliberately returns an empty ".steam-achievement-card" list, so
// applyFilter's actual per-card display branching was never exercised by
// any test (Phase 56 test-coverage sweep). This file targets that gap
// directly, with the smallest shim that does the job - matching this
// project's existing convention (see achievementFiltersAria.test.js,
// test/layout.test.js).

function makeCard(completed) {

    return {

        dataset: { completed: String(completed) },
        style: { display: "" }

    };

}

const { applyFilter } = await import("../src/utils/planner/filters.js");

test("applyFilter('completed') shows only completed cards, hides pending ones", () => {

    const done = makeCard(true);
    const pending = makeCard(false);

    globalThis.document = {
        querySelectorAll: () => [done, pending]
    };

    applyFilter("completed");

    assert.strictEqual(done.style.display, "flex");
    assert.strictEqual(pending.style.display, "none");

});

test("applyFilter('pending') shows only not-yet-completed cards, hides completed ones", () => {

    const done = makeCard(true);
    const pending = makeCard(false);

    globalThis.document = {
        querySelectorAll: () => [done, pending]
    };

    applyFilter("pending");

    assert.strictEqual(done.style.display, "none");
    assert.strictEqual(pending.style.display, "flex");

});

test("applyFilter('all') (and any other/unrecognized value) shows every card, regardless of completion", () => {

    const done = makeCard(true);
    const pending = makeCard(false);

    globalThis.document = {
        querySelectorAll: () => [done, pending]
    };

    applyFilter("all");

    assert.strictEqual(done.style.display, "flex");
    assert.strictEqual(pending.style.display, "flex");

    // The default branch matches an unrecognized filter value too, not
    // just the literal string "all" - initAchievementFilters() falls back
    // to "all" when nothing is active, but applyFilter itself must not
    // depend on that exact string to still show everything.
    applyFilter(undefined);

    assert.strictEqual(done.style.display, "flex");
    assert.strictEqual(pending.style.display, "flex");

});

test("applyFilter does not throw when there are no achievement cards on the page", () => {

    globalThis.document = {
        querySelectorAll: () => []
    };

    assert.doesNotThrow(() => applyFilter("completed"));
    assert.doesNotThrow(() => applyFilter("pending"));
    assert.doesNotThrow(() => applyFilter("all"));

});

test("card.dataset.completed reads Steam-authoritative completion as a string, not a boolean - 'false' must not be mistaken for truthy", () => {

    // Reproduces the exact real-world shape: dataset values are always
    // strings, so a naive `if (card.dataset.completed)` (truthy on the
    // non-empty string "false") would incorrectly treat every card as
    // completed. applyFilter's `=== "true"` comparison must get this right.
    const pending = makeCard(false);

    globalThis.document = {
        querySelectorAll: () => [pending]
    };

    applyFilter("completed");

    assert.strictEqual(pending.style.display, "none", "a card whose dataset.completed is the string 'false' must not be treated as completed");

});
