import { test } from "node:test";
import assert from "node:assert";

import { getRecentlyPlayedGames } from "../src/utils/player/statistics/helpers/recentlyPlayed.js";

function game(slug, lastPlayed) {

    return { slug, lastPlayed };

}

test("orders games by lastPlayed, most recent first", () => {

    const games = [
        game("oldest", 1000),
        game("newest", 3000),
        game("middle", 2000)
    ];

    const result = getRecentlyPlayedGames(games);

    assert.deepStrictEqual(result.map(g => g.slug), ["newest", "middle", "oldest"]);

});

test("caps the result at 10 games by default", () => {

    const games = Array.from({ length: 15 }, (_, i) => game(`game-${i}`, i + 1));

    const result = getRecentlyPlayedGames(games);

    assert.strictEqual(result.length, 10);
    // The 10 most recently played, most-recent-first (highest lastPlayed values).
    assert.deepStrictEqual(result.map(g => g.slug), [
        "game-14", "game-13", "game-12", "game-11", "game-10",
        "game-9", "game-8", "game-7", "game-6", "game-5"
    ]);

});

test("respects a custom limit", () => {

    const games = [game("a", 3), game("b", 2), game("c", 1)];

    const result = getRecentlyPlayedGames(games, { limit: 2 });

    assert.deepStrictEqual(result.map(g => g.slug), ["a", "b"]);

});

test("excludes games with no play activity (lastPlayed 0)", () => {

    const games = [game("played", 100), game("never-played", 0)];

    const result = getRecentlyPlayedGames(games);

    assert.deepStrictEqual(result.map(g => g.slug), ["played"]);

});

test("treats a missing lastPlayed field the same as zero - excluded, never throws", () => {

    const games = [{ slug: "no-field" }, game("played", 50)];

    const result = getRecentlyPlayedGames(games);

    assert.deepStrictEqual(result.map(g => g.slug), ["played"]);

});

test("returns an empty array when no games have any play activity", () => {

    const games = [game("a", 0), game("b", 0)];

    assert.deepStrictEqual(getRecentlyPlayedGames(games), []);

});

test("returns an empty array for an empty or missing games list, never throws", () => {

    assert.deepStrictEqual(getRecentlyPlayedGames([]), []);
    assert.deepStrictEqual(getRecentlyPlayedGames(undefined), []);
    assert.deepStrictEqual(getRecentlyPlayedGames(null), []);

});

test("does not mutate the input array", () => {

    const games = [game("a", 1), game("b", 2)];
    const original = [...games];

    getRecentlyPlayedGames(games);

    assert.deepStrictEqual(games, original);

});
