import { test } from "node:test";
import assert from "node:assert";

import { sortGames, SORT_KEYS } from "../src/utils/gamesCatalog.js";

const slugs = list => list.map(g => g.slug);

test("every sort key declares a natural direction and a value extractor", () => {

    for (const [key, cfg] of Object.entries(SORT_KEYS)) {

        assert.ok(["asc", "desc"].includes(cfg.naturalDirection), key);
        assert.strictEqual(typeof cfg.value, "function", key);

    }

});

test("back-compat: sortGames(games, 'difficulty') still puts hardest first, missing last", () => {

    const games = [
        { slug: "none", title: "none", difficulty: null },
        { slug: "hard", title: "hard", difficulty: 9 },
        { slug: "easy", title: "easy", difficulty: 2 }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "difficulty")), ["hard", "easy", "none"]);

});

test("back-compat: sortGames(games, 'time') still puts shortest first, missing last", () => {

    const games = [
        { slug: "unknown", title: "unknown", completionTime: null },
        { slug: "long", title: "long", completionTime: { min: 50 } },
        { slug: "short", title: "short", completionTime: { min: 5 } }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "time")), ["short", "long", "unknown"]);

});

test("unknown key falls back to alphabetical by title", () => {

    const games = [{ slug: "z", title: "Zed" }, { slug: "a", title: "Ada" }];
    assert.deepStrictEqual(slugs(sortGames(games, "whatever")), ["a", "z"]);

});

test("name key honours an explicit direction", () => {

    const games = [{ slug: "b", title: "B" }, { slug: "a", title: "A" }, { slug: "c", title: "C" }];

    assert.deepStrictEqual(slugs(sortGames(games, "name", "asc")), ["a", "b", "c"]);
    assert.deepStrictEqual(slugs(sortGames(games, "name", "desc")), ["c", "b", "a"]);

});

test("playtime sorts by hours, natural direction desc, missing sinks to the bottom in BOTH directions", () => {

    const games = [
        { slug: "none", title: "n", playtime: undefined },
        { slug: "lots", title: "l", playtime: 200 },
        { slug: "some", title: "s", playtime: 10 },
        { slug: "zero", title: "z", playtime: 0 }
    ];

    // natural (desc)
    assert.deepStrictEqual(slugs(sortGames(games, "playtime")), ["lots", "some", "zero", "none"]);
    // explicit asc - zero is a real value and leads; "none" still last
    assert.deepStrictEqual(slugs(sortGames(games, "playtime", "asc")), ["zero", "some", "lots", "none"]);

});

test("completion-percent: 0 is a real value, missing player data always sinks last", () => {

    const games = [
        { slug: "half", title: "h", playerPercent: 50 },
        { slug: "done", title: "d", playerPercent: 100 },
        { slug: "unknown", title: "u" },
        { slug: "none", title: "n", playerPercent: 0 }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "completion-percent")), ["done", "half", "none", "unknown"]);
    assert.deepStrictEqual(slugs(sortGames(games, "completion-percent", "asc")), ["none", "half", "done", "unknown"]);

});

test("completion-status ranks 100%-complete games first, then the rest, unknowns last", () => {

    const games = [
        { slug: "a", title: "a", playerPercent: 100 },
        { slug: "b", title: "b", playerPercent: 30 },
        { slug: "c", title: "c" },
        { slug: "d", title: "d", playerPercent: 100 }
    ];

    const result = slugs(sortGames(games, "completion-status"));
    assert.deepStrictEqual(result.slice(0, 2).sort(), ["a", "d"]);
    assert.strictEqual(result[2], "b");
    assert.strictEqual(result[3], "c");

});

test("achievements-total prefers the player's real total, else the catalog achievement count", () => {

    const games = [
        { slug: "player", title: "p", playerTotal: 80, achievements: [{}, {}] },
        { slug: "catalog", title: "c", achievements: new Array(40).fill({}) },
        { slug: "none", title: "n", achievements: [] }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "achievements-total")), ["player", "catalog", "none"]);

});

test("achievements-completed sorts by player unlocked count, unknowns last", () => {

    const games = [
        { slug: "many", title: "m", playerUnlocked: 40 },
        { slug: "few", title: "f", playerUnlocked: 3 },
        { slug: "unknown", title: "u" }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "achievements-completed")), ["many", "few", "unknown"]);

});

test("sortGames never mutates its input", () => {

    const games = [{ slug: "b", title: "B" }, { slug: "a", title: "A" }];
    const snapshot = JSON.stringify(games);

    sortGames(games, "name", "desc");

    assert.strictEqual(JSON.stringify(games), snapshot);

});

test("sortGames tolerates a huge value and zero without NaN/overflow surprises", () => {

    const games = [
        { slug: "huge", title: "h", playtime: Number.MAX_SAFE_INTEGER },
        { slug: "zero", title: "z", playtime: 0 },
        { slug: "mid", title: "m", playtime: 100 }
    ];

    assert.deepStrictEqual(slugs(sortGames(games, "playtime", "desc")), ["huge", "mid", "zero"]);

});
