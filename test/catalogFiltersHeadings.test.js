import { test } from "node:test";
import assert from "node:assert";

// PHASE_50_AUDIT.md Finding 14: games.html's static markup has a single h1
// ("Browse Games") and no h2 anywhere; createCatalogFilters()'s 4 filter-
// group headings (Genre/Difficulty/Completion Time/Extras) used to render
// as h3, skipping straight from h1 to h3. They now render as h2, so the
// first heading level encountered after the page's own h1 is h2, not h3 -
// catalog-card.js's per-card h3 titles (unchanged, still h3) then follow
// correctly rather than being the level that causes the skip.
const { createCatalogFilters } = await import("../src/components/catalog-filters/catalog-filters.js");

test("createCatalogFilters renders all 4 filter-group headings as h2, not h3", () => {

    const html = createCatalogFilters("");

    assert.doesNotMatch(html, /<h3/, "no h3 should remain in the filters panel - the level jump this finding fixes");

    const h2Count = (html.match(/<h2>/g) ?? []).length;
    assert.strictEqual(h2Count, 4, "Genre, Difficulty, Completion Time, and Extras should each be an h2");

});

test("createCatalogFilters' h2 headings contain the expected group labels", () => {

    const html = createCatalogFilters("");

    for (const label of ["Genre", "Difficulty", "Completion Time", "Extras"]) {

        assert.match(
            html,
            new RegExp(`<h2>\\s*${label}\\s*</h2>`),
            `expected an h2 containing "${label}"`
        );

    }

});
