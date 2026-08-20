import { test } from "node:test";
import assert from "node:assert";

// difficulty.js/time.js/extras.js read the currently-checked filter
// controls straight off the DOM (document.querySelectorAll/getElementById)
// rather than taking them as parameters. This minimal stub answers just
// the two DOM entry points these filters actually call, driven by a
// per-test `state` object, so the actual filtering logic (the part with
// real bugs to catch) can be exercised without pulling in a full DOM
// library - matching this project's existing "smallest shim that does the
// job" testing convention (see test/profileHeader.test.js).
const state = {
    checkedBySelector: {},   // selector -> [{ value }]
    elementsById: {}         // id -> { checked } | undefined
};

globalThis.document = {

    querySelectorAll(selector) {
        return state.checkedBySelector[selector] ?? [];
    },

    getElementById(id) {
        return state.elementsById[id];
    }

};

function resetDom() {
    state.checkedBySelector = {};
    state.elementsById = {};
}

const { getDifficultyLabel, filterDifficulty } = await import("../src/utils/catalog/difficulty.js");
const { filterCompletionTime } = await import("../src/utils/catalog/time.js");
const { filterExtras } = await import("../src/utils/catalog/extras.js");
const { filterGames } = await import("../src/utils/catalog/filters.js");

function checked(selector, values) {
    state.checkedBySelector[selector] = values.map(value => ({ value }));
}

// ---- getDifficultyLabel ----

test("getDifficultyLabel buckets 1-3 Easy, 4-6 Medium, 7+ Hard with no gaps at the boundaries", () => {

    assert.strictEqual(getDifficultyLabel(1), "Easy");
    assert.strictEqual(getDifficultyLabel(3), "Easy");
    assert.strictEqual(getDifficultyLabel(4), "Medium");
    assert.strictEqual(getDifficultyLabel(6), "Medium");
    assert.strictEqual(getDifficultyLabel(7), "Hard");
    assert.strictEqual(getDifficultyLabel(10), "Hard");

});

// ---- filterDifficulty ----

test("filterDifficulty returns every game unchanged when no difficulty checkbox is checked", () => {

    resetDom();

    const games = [{ difficulty: 1 }, { difficulty: 9 }];
    assert.deepStrictEqual(filterDifficulty(games), games);

});

test("filterDifficulty keeps only games whose difficulty label matches a checked box", () => {

    resetDom();
    checked(".difficulty-filter input:checked", ["Easy"]);

    const games = [{ id: "a", difficulty: 2 }, { id: "b", difficulty: 8 }];
    const result = filterDifficulty(games);

    assert.deepStrictEqual(result.map(g => g.id), ["a"]);

});

test("filterDifficulty excludes a game with no difficulty rating at all, even with a filter active", () => {

    resetDom();
    checked(".difficulty-filter input:checked", ["Easy", "Medium", "Hard"]);

    const games = [{ id: "no-rating", difficulty: null }];
    assert.deepStrictEqual(filterDifficulty(games), []);

});

// ---- filterCompletionTime ----

test("filterCompletionTime returns every game unchanged when no time checkbox is checked", () => {

    resetDom();

    const games = [{ completionTime: { max: 5 } }];
    assert.deepStrictEqual(filterCompletionTime(games), games);

});

test("filterCompletionTime excludes a game with no completionTime data, even with a filter active", () => {

    resetDom();
    checked(".time-filter input:checked", ["20"]);

    assert.deepStrictEqual(filterCompletionTime([{ completionTime: null }]), []);

});

test("filterCompletionTime buckets have no gap or overlap at the 20/50/100-hour boundaries", () => {

    resetDom();

    function matches(bucketValue, hours) {

        checked(".time-filter input:checked", [bucketValue]);
        return filterCompletionTime([{ completionTime: { max: hours } }]).length === 1;

    }

    // <20h bucket
    assert.strictEqual(matches("20", 19), true);
    assert.strictEqual(matches("20", 20), false, "exactly 20h belongs to the 20-50h bucket, not <20h");

    // 20-50h bucket
    assert.strictEqual(matches("50", 20), true);
    assert.strictEqual(matches("50", 50), true);
    assert.strictEqual(matches("50", 19), false);
    assert.strictEqual(matches("50", 51), false);

    // 50-100h bucket
    assert.strictEqual(matches("100", 50), false, "exactly 50h belongs to the 20-50h bucket, not 50-100h");
    assert.strictEqual(matches("100", 51), true);
    assert.strictEqual(matches("100", 100), true);
    assert.strictEqual(matches("100", 101), false);

    // >100h bucket
    assert.strictEqual(matches("101", 100), false);
    assert.strictEqual(matches("101", 101), true);

});

test("filterCompletionTime with multiple buckets checked is a union, not an intersection", () => {

    resetDom();
    checked(".time-filter input:checked", ["20", "101"]);

    const games = [
        { id: "short", completionTime: { max: 5 } },
        { id: "medium", completionTime: { max: 30 } },
        { id: "long", completionTime: { max: 200 } }
    ];

    const result = filterCompletionTime(games);
    assert.deepStrictEqual(result.map(g => g.id).sort(), ["long", "short"]);

});

// ---- filterExtras ----

test("filterExtras returns every game unchanged when neither checkbox exists/is checked", () => {

    resetDom();

    const games = [{ hasGuide: false, missable: false }];
    assert.deepStrictEqual(filterExtras(games), games);

});

test("filterExtras 'has guide' keeps only games with hasGuide true", () => {

    resetDom();
    state.elementsById["filter-guide"] = { checked: true };

    const games = [{ id: "a", hasGuide: true }, { id: "b", hasGuide: false }];
    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["a"]);

});

test("filterExtras 'has missable' keeps only games with missable true", () => {

    resetDom();
    state.elementsById["filter-missable"] = { checked: true };

    const games = [{ id: "a", missable: true }, { id: "b", missable: false }];
    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["a"]);

});

test("filterExtras applies both checkboxes together as an AND", () => {

    resetDom();
    state.elementsById["filter-guide"] = { checked: true };
    state.elementsById["filter-missable"] = { checked: true };

    const games = [
        { id: "both", hasGuide: true, missable: true },
        { id: "guide-only", hasGuide: true, missable: false },
        { id: "neither", hasGuide: false, missable: false }
    ];

    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["both"]);

});

// ---- filterGames (the orchestrator games.js actually calls) ----

test("filterGames returns every game unchanged when no genre checkbox is checked", () => {

    resetDom();

    const games = [{ id: "a", genres: ["Action"] }, { id: "b", genres: ["RPG"] }];
    assert.deepStrictEqual(filterGames(games), games);

});

test("filterGames keeps only games whose genres include a checked genre", () => {

    resetDom();
    checked(".filter-group:first-child input:checked", ["Action"]);

    const games = [
        { id: "a", genres: ["Action", "Roguelike"] },
        { id: "b", genres: ["Puzzle"] }
    ];

    assert.deepStrictEqual(filterGames(games).map(g => g.id), ["a"]);

});

test("filterGames does not crash on a game with no genres field, even with a genre filter checked", () => {

    // Regression test: filterGames() used to read game.genres.some(...)
    // with no null-guard, unlike every sibling filter in this file
    // (filterDifficulty/filterCompletionTime/filterExtras, and
    // getGenres() in catalog/genres.js) which all defensively handle a
    // missing field. A game entry with genres undefined/null (schema-
    // permitted, even if the mapper currently always fills in []) would
    // throw "Cannot read properties of undefined (reading 'some')" the
    // moment any genre checkbox was checked.
    resetDom();
    checked(".filter-group:first-child input:checked", ["Action"]);

    const games = [
        { id: "no-genres", genres: undefined },
        { id: "null-genres", genres: null },
        { id: "has-genre", genres: ["Action"] }
    ];

    let result;
    assert.doesNotThrow(() => { result = filterGames(games); });

    assert.deepStrictEqual(result.map(g => g.id), ["has-genre"]);

});

test("filterGames chains genre, difficulty, time, and extras filters together (AND across categories)", () => {

    resetDom();
    checked(".filter-group:first-child input:checked", ["Action"]);
    checked(".difficulty-filter input:checked", ["Easy"]);

    const games = [
        { id: "matches-both", genres: ["Action"], difficulty: 2, completionTime: null, hasGuide: false, missable: false },
        { id: "wrong-genre", genres: ["Puzzle"], difficulty: 2, completionTime: null, hasGuide: false, missable: false },
        { id: "wrong-difficulty", genres: ["Action"], difficulty: 9, completionTime: null, hasGuide: false, missable: false }
    ];

    assert.deepStrictEqual(filterGames(games).map(g => g.id), ["matches-both"]);

});
