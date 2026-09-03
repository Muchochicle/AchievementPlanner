import { test } from "node:test";
import assert from "node:assert";

// Same minimal DOM stub convention as test/catalogFilters.test.js - the
// filter functions read checked controls straight off document.
const state = { checkedBySelector: {}, elementsById: {} };

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

function checked(selector, values) {
    state.checkedBySelector[selector] = values.map(value => ({ value }));
}

function box(id, isChecked = true) {
    state.elementsById[id] = { checked: isChecked };
}

const { filterCompletionPercent } = await import("../src/utils/catalog/completion.js");
const { filterPlaytime } = await import("../src/utils/catalog/playtime.js");
const { filterExtras } = await import("../src/utils/catalog/extras.js");

// ---- filterCompletionPercent ----

test("filterCompletionPercent returns games unchanged when no bucket is checked", () => {

    resetDom();
    const games = [{ playerPercent: 42 }];
    assert.deepStrictEqual(filterCompletionPercent(games), games);

});

test("filterCompletionPercent: a 100%-complete game only matches the '100' bucket, never '90-100'", () => {

    resetDom();
    const games = [{ id: "done", playerPercent: 100 }];

    checked(".completion-filter input:checked", ["90-100"]);
    assert.deepStrictEqual(filterCompletionPercent(games), [], "100% must not fall in the 90-99% bucket");

    resetDom();
    checked(".completion-filter input:checked", ["100"]);
    assert.deepStrictEqual(filterCompletionPercent(games).map(g => g.id), ["done"]);

});

test("filterCompletionPercent buckets are half-open [lo, hi) with no gap or overlap", () => {

    resetDom();

    const at = (bucket, percent) => {
        state.checkedBySelector[".completion-filter input:checked"] = [{ value: bucket }];
        return filterCompletionPercent([{ playerPercent: percent }]).length === 1;
    };

    assert.strictEqual(at("0-10", 0), true);
    assert.strictEqual(at("0-10", 9), true);
    assert.strictEqual(at("0-10", 10), false, "10% belongs to 10-20, not 0-10");
    assert.strictEqual(at("10-20", 10), true);
    assert.strictEqual(at("90-100", 90), true);
    assert.strictEqual(at("90-100", 99), true);
    assert.strictEqual(at("90-100", 100), false);

});

test("filterCompletionPercent excludes a game with no player completion data when a bucket is active", () => {

    resetDom();
    checked(".completion-filter input:checked", ["0-10"]);

    assert.deepStrictEqual(filterCompletionPercent([{ id: "unknown" }, { id: "nan", playerPercent: NaN }]), []);

});

test("filterCompletionPercent with multiple buckets is a union", () => {

    resetDom();
    checked(".completion-filter input:checked", ["0-10", "100"]);

    const games = [
        { id: "low", playerPercent: 4 },
        { id: "mid", playerPercent: 55 },
        { id: "done", playerPercent: 100 }
    ];

    assert.deepStrictEqual(filterCompletionPercent(games).map(g => g.id).sort(), ["done", "low"]);

});

// ---- filterPlaytime ----

test("filterPlaytime returns games unchanged when no bucket is checked", () => {

    resetDom();
    const games = [{ playtime: 12 }];
    assert.deepStrictEqual(filterPlaytime(games), games);

});

test("filterPlaytime buckets are half-open, 0 hours is real, 250 means 250+", () => {

    resetDom();

    const at = (bucket, hours) => {
        state.checkedBySelector[".playtime-filter input:checked"] = [{ value: bucket }];
        return filterPlaytime([{ playtime: hours }]).length === 1;
    };

    assert.strictEqual(at("0-5", 0), true);
    assert.strictEqual(at("0-5", 5), false, "5h belongs to 5-10");
    assert.strictEqual(at("5-10", 5), true);
    assert.strictEqual(at("25-50", 25), true);
    assert.strictEqual(at("25-50", 50), false);
    assert.strictEqual(at("250", 249), false);
    assert.strictEqual(at("250", 250), true);
    assert.strictEqual(at("250", 5000), true);

});

test("filterPlaytime excludes a game with no playtime (e.g. an unowned game) when a bucket is active", () => {

    resetDom();
    checked(".playtime-filter input:checked", ["0-5"]);

    assert.deepStrictEqual(filterPlaytime([{ id: "unowned" }]), []);

});

// ---- filterExtras (Task 8 additions) ----

test("filterExtras 'In my Steam library' keeps only owned games", () => {

    resetDom();
    box("filter-owned");

    const games = [{ id: "a", owned: true }, { id: "b", owned: false }, { id: "c" }];
    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["a", "c"]);

});

test("filterExtras 'Completed 100%' keeps only games at >=100% player completion", () => {

    resetDom();
    box("filter-completed");

    const games = [
        { id: "done", playerPercent: 100 },
        { id: "almost", playerPercent: 99 },
        { id: "unknown" }
    ];

    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["done"]);

});

test("filterExtras 'Played in last 2 weeks' uses lastPlayed (epoch seconds)", () => {

    resetDom();
    box("filter-recent");

    const nowSec = Math.floor(Date.now() / 1000);

    const games = [
        { id: "recent", lastPlayed: nowSec - 60 },
        { id: "old", lastPlayed: nowSec - 60 * 60 * 24 * 30 },
        { id: "never", lastPlayed: 0 },
        { id: "missing" }
    ];

    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["recent"]);

});

test("filterExtras 'Has achievements' / 'No achievements' use catalog + Steam + player signals", () => {

    resetDom();
    box("filter-has-achievements");

    const games = [
        { id: "catalog", achievements: [{}, {}] },
        { id: "steam", achievements: [], hasSteamAchievements: true },
        { id: "player", playerTotal: 12 },
        { id: "none", hasSteamAchievements: false },
        { id: "unknown" }
    ];

    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["catalog", "steam", "player"]);

    resetDom();
    box("filter-no-achievements");
    assert.deepStrictEqual(filterExtras(games).map(g => g.id), ["none"]);

});

test("filterExtras leaves everything untouched when none of its controls are checked", () => {

    resetDom();
    const games = [{ id: "a" }, { id: "b", owned: false }];
    assert.deepStrictEqual(filterExtras(games), games);

});
