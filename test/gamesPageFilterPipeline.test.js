import { test } from "node:test";
import assert from "node:assert";

// games.js's refresh() chains these three real, independently-tested
// functions in this exact order on every keystroke/filter change:
// searchGames -> filterGames -> sortGames. Each is already unit-tested in
// isolation (test/gamesCatalog.test.js, test/catalogFilters.test.js), but
// nothing exercised the actual composition/order games.js relies on -
// this file does, using a minimal document stub for filterGames' checked-
// checkbox reads (matching test/catalogFilters.test.js's convention).
const state = {
    checkedBySelector: {},
    elementsById: {}
};

globalThis.document = {
    querySelectorAll(selector) {
        return state.checkedBySelector[selector] ?? [];
    },
    getElementById(id) {
        return state.elementsById[id] ?? null;
    }
};

function resetDom() {
    state.checkedBySelector = {};
    state.elementsById = {};
}

function checked(selector, values) {
    state.checkedBySelector[selector] = values.map(value => ({ value }));
}

const { searchGames, sortGames } = await import("../src/utils/gamesCatalog.js");
const { filterGames } = await import("../src/utils/catalog/filters.js");

function runPipeline(games, { search = "", sortMode = "name" } = {}) {

    let result = searchGames(games, search);
    result = filterGames(result);
    result = sortGames(result, sortMode);
    return result;

}

const CATALOG = [
    { title: "Hades", slug: "hades", genres: ["Action", "Roguelike"], difficulty: 7, completionTime: { min: 80, max: 120 } },
    { title: "Hollow Knight", slug: "hollow-knight", genres: ["Metroidvania", "Action"], difficulty: 8, completionTime: { min: 60, max: 90 } },
    { title: "Portal 2", slug: "portal-2", genres: ["Puzzle", "Adventure"], difficulty: 3, completionTime: { min: 20, max: 25 } }
];

test("pipeline: search alone narrows to the matching title, alphabetically sorted", () => {

    resetDom();

    const result = runPipeline(CATALOG, { search: "ho" });

    assert.deepStrictEqual(result.map(g => g.slug), ["hollow-knight"]);

});

test("pipeline: genre filter alone narrows to games sharing that genre", () => {

    resetDom();
    checked(".filter-group:first-child input:checked", ["Action"]);

    const result = runPipeline(CATALOG);

    assert.deepStrictEqual(result.map(g => g.slug).sort(), ["hades", "hollow-knight"]);

});

test("pipeline: search AND genre filter together narrow to the intersection, not the union", () => {

    resetDom();
    checked(".filter-group:first-child input:checked", ["Action"]);

    // "ho" alone would match only Hollow Knight; "Action" alone matches
    // Hades + Hollow Knight. Combined, only Hollow Knight satisfies both.
    const result = runPipeline(CATALOG, { search: "ho" });

    assert.deepStrictEqual(result.map(g => g.slug), ["hollow-knight"]);

});

test("pipeline: search AND genre filter combine to an empty result when nothing satisfies both", () => {

    resetDom();
    checked(".filter-group:first-child input:checked", ["Puzzle"]);

    // "Puzzle" only matches Portal 2, but searching "hades" excludes it.
    const result = runPipeline(CATALOG, { search: "hades" });

    assert.deepStrictEqual(result, []);

});

test("pipeline: difficulty filter narrows correctly and the result is still sorted by the requested mode", () => {

    resetDom();
    checked(".difficulty-filter input:checked", ["Hard"]);

    const result = runPipeline(CATALOG, { sortMode: "difficulty" });

    // Hard = 7-10: Hades (7) and Hollow Knight (8) qualify, Portal 2 (3) doesn't.
    // Sorted by difficulty descending: Hollow Knight (8) before Hades (7).
    assert.deepStrictEqual(result.map(g => g.slug), ["hollow-knight", "hades"]);

});

test("pipeline: an empty search term with no filters returns the full catalog, sorted", () => {

    resetDom();

    const result = runPipeline(CATALOG, { sortMode: "time" });

    // Sorted by completion time ascending: Portal 2 (20) < Hollow Knight (60) < Hades (80).
    assert.deepStrictEqual(result.map(g => g.slug), ["portal-2", "hollow-knight", "hades"]);

});

test("pipeline: clearing the search term after a narrowing search restores the full (filtered) result set", () => {

    resetDom();

    const narrowed = runPipeline(CATALOG, { search: "hades" });
    assert.deepStrictEqual(narrowed.map(g => g.slug), ["hades"]);

    const cleared = runPipeline(CATALOG, { search: "" });
    assert.strictEqual(cleared.length, 3, "clearing the search must restore every game, not stay narrowed");

});
