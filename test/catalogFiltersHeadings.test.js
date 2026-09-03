import { test } from "node:test";
import assert from "node:assert";

// PHASE_50_AUDIT.md Finding 14: games.html's static markup has a single h1
// ("Browse Games") and no h2 anywhere; createCatalogFilters()'s filter-
// group headings used to render as h3, skipping straight from h1 to h3.
// They render as h2, so the first heading level after the page's own h1 is
// h2 - catalog-card.js's per-card h3 titles then follow correctly.
//
// Task 8 expanded the panel from 4 groups to 6 (added Achievement
// Completion and Hours Played), all still h2.
const { createCatalogFilters } = await import("../src/components/catalog-filters/catalog-filters.js");

const EXPECTED_GROUP_HEADINGS = [
    "Genre",
    "Difficulty",
    "Completion Time",
    "Achievement Completion",
    "Hours Played",
    "Extras"
];

test("createCatalogFilters renders every filter-group heading as h2, never h3 (no level jump)", () => {

    const html = createCatalogFilters("");

    assert.doesNotMatch(html, /<h3/, "no h3 should remain in the filters panel - the level jump this finding fixes");

    const h2Count = (html.match(/<h2>/g) ?? []).length;
    assert.strictEqual(h2Count, EXPECTED_GROUP_HEADINGS.length);

});

test("createCatalogFilters' h2 headings contain the expected group labels", () => {

    const html = createCatalogFilters("");

    for (const label of EXPECTED_GROUP_HEADINGS) {

        assert.match(
            html,
            new RegExp(`<h2>\\s*${label}\\s*</h2>`),
            `expected an h2 containing "${label}"`
        );

    }

});

test("createCatalogFilters keeps Genre as the FIRST filter-group (filters.js selects it via :first-child)", () => {

    const html = createCatalogFilters("");

    // First .filter-group in document order carries the Genre heading, and
    // it comes before every other group heading.
    assert.match(html, /class="filter-group">\s*<h2>Genre<\/h2>/);
    assert.ok(html.indexOf(">Genre<") < html.indexOf(">Difficulty<"));
    assert.ok(html.indexOf(">Genre<") < html.indexOf(">Extras<"));

});
