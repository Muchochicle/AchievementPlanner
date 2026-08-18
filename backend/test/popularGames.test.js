import { test } from "node:test";
import assert from "node:assert";

import { selectPopularGames } from "../utils/popularGames.js";

test("ranks games by player count descending", () => {

    const games = [
        { slug: "a", appid: 1 },
        { slug: "b", appid: 2 },
        { slug: "c", appid: 3 }
    ];

    const playerCounts = new Map([
        [1, 100],
        [2, 500],
        [3, 250]
    ]);

    const result = selectPopularGames(games, playerCounts);

    assert.deepStrictEqual(
        result.map(game => game.slug),
        ["b", "c", "a"]
    );

    assert.strictEqual(result[0].playerCount, 500);

});

test("drops games with no numeric player count instead of fabricating one", () => {

    const games = [
        { slug: "a", appid: 1 },
        { slug: "b", appid: 2 },
        { slug: "c", appid: 3 }
    ];

    const playerCounts = new Map([
        [1, 100],
        [2, null]
        // appid 3 never even attempted (missing from the map)
    ]);

    const result = selectPopularGames(games, playerCounts);

    assert.deepStrictEqual(
        result.map(game => game.slug),
        ["a"]
    );

});

test("excludes games with no appid or a non-positive appid", () => {

    const games = [
        { slug: "no-appid" },
        { slug: "zero-appid", appid: 0 },
        { slug: "negative-appid", appid: -1 },
        { slug: "real", appid: 42 }
    ];

    const playerCounts = new Map([
        [42, 10],
        [0, 999],
        [-1, 999]
    ]);

    const result = selectPopularGames(games, playerCounts);

    assert.deepStrictEqual(
        result.map(game => game.slug),
        ["real"]
    );

});

test("respects the limit and keeps only the top entries", () => {

    const games = [
        { slug: "a", appid: 1 },
        { slug: "b", appid: 2 },
        { slug: "c", appid: 3 }
    ];

    const playerCounts = new Map([
        [1, 10],
        [2, 30],
        [3, 20]
    ]);

    const result = selectPopularGames(games, playerCounts, 2);

    assert.deepStrictEqual(
        result.map(game => game.slug),
        ["b", "c"]
    );

});

test("defaults to a limit of 12", () => {

    const games = Array.from({ length: 20 }, (_, i) => ({
        slug: `game-${i}`,
        appid: i + 1
    }));

    const playerCounts = new Map(
        games.map(game => [game.appid, game.appid])
    );

    const result = selectPopularGames(games, playerCounts);

    assert.strictEqual(result.length, 12);

});

test("returns an empty list when no games have a reliable player count", () => {

    const games = [
        { slug: "a", appid: 1 },
        { slug: "b", appid: 2 }
    ];

    const playerCounts = new Map([
        [1, null],
        [2, null]
    ]);

    assert.deepStrictEqual(selectPopularGames(games, playerCounts), []);

});

test("handles missing/empty input gracefully", () => {

    assert.deepStrictEqual(selectPopularGames(null, new Map()), []);
    assert.deepStrictEqual(selectPopularGames([], new Map()), []);
    assert.deepStrictEqual(selectPopularGames([{ slug: "a", appid: 1 }], null), []);

});

test("preserves the rest of each game's fields alongside the added playerCount", () => {

    const games = [
        { slug: "a", appid: 1, title: "Game A", hasPlanner: true }
    ];

    const playerCounts = new Map([[1, 42]]);

    const result = selectPopularGames(games, playerCounts);

    assert.deepStrictEqual(result[0], {
        slug: "a",
        appid: 1,
        title: "Game A",
        hasPlanner: true,
        playerCount: 42
    });

});
