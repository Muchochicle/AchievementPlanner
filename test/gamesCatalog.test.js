import { test } from "node:test";
import assert from "node:assert";

import { searchGames, sortGames } from "../src/utils/gamesCatalog.js";

test("searchGames returns every game unchanged for an empty/whitespace-only query", () => {

    const games = [{ title: "Hades" }, { title: "Portal 2" }];

    assert.deepStrictEqual(searchGames(games, ""), games);
    assert.deepStrictEqual(searchGames(games, "   "), games);

});

test("searchGames matches case-insensitively and by substring", () => {

    const games = [{ title: "Hollow Knight" }, { title: "Hades" }, { title: "Portal 2" }];

    assert.deepStrictEqual(searchGames(games, "ho").map(g => g.title), ["Hollow Knight"]);
    assert.deepStrictEqual(searchGames(games, "HADES").map(g => g.title), ["Hades"]);
    assert.deepStrictEqual(searchGames(games, "  portal  ").map(g => g.title), ["Portal 2"]);

});

test("searchGames returns an empty array when nothing matches", () => {

    const games = [{ title: "Hades" }];
    assert.deepStrictEqual(searchGames(games, "nonexistent-game-xyz"), []);

});

test("searchGames does not crash on a game with a missing title, even when a search term is entered", () => {

    // Regression test: searchGames() used to call game.title.toLowerCase()
    // with no null-guard, inconsistent with sortGames()'s own default
    // (alphabetical) comparator in this same file, which already defends
    // the identical field with `(a.title ?? "")`. A malformed entry with
    // title undefined/null (schema-permitted, even though the mapper
    // currently always fills in a fallback title) would throw "Cannot
    // read properties of undefined (reading 'toLowerCase')" the moment a
    // visitor typed anything into the games-page search box.
    const games = [
        { title: undefined },
        { title: null },
        { title: "Hades" }
    ];

    let result;
    assert.doesNotThrow(() => { result = searchGames(games, "hades"); });

    assert.deepStrictEqual(result.map(g => g.title), ["Hades"]);

});

test("sortGames defaults to alphabetical order by title", () => {

    const games = [{ title: "Zelda" }, { title: "Ape Out" }, { title: "Mario" }];

    assert.deepStrictEqual(
        sortGames(games, "unknown-mode").map(g => g.title),
        ["Ape Out", "Mario", "Zelda"]
    );

});

test("sortGames 'difficulty' sorts hardest first, treating a missing rating as easiest", () => {

    const games = [
        { title: "no-rating", difficulty: null },
        { title: "hard", difficulty: 9 },
        { title: "easy", difficulty: 2 }
    ];

    assert.deepStrictEqual(
        sortGames(games, "difficulty").map(g => g.title),
        ["hard", "easy", "no-rating"]
    );

});

test("sortGames 'time' sorts shortest completion time first, treating missing data as longest", () => {

    const games = [
        { title: "unknown", completionTime: null },
        { title: "long", completionTime: { min: 50 } },
        { title: "short", completionTime: { min: 5 } }
    ];

    assert.deepStrictEqual(
        sortGames(games, "time").map(g => g.title),
        ["short", "long", "unknown"]
    );

});

test("sortGames does not mutate the input array", () => {

    const games = [{ title: "Zelda" }, { title: "Ape Out" }];
    const original = [...games];

    sortGames(games, "title");

    assert.deepStrictEqual(games, original, "sortGames must return a new sorted array, not sort the caller's array in place");

});
