import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/vvvvvv.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 70300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("vvvvvv");

test("getPlannerData('vvvvvv') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for vvvvvv");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every VVVVVV achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every VVVVVV achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 19 VVVVVV achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Final Level Mastered", "Obtain a V Rank in this Time Trial."],
        ["Flip Mode Complete", "Complete the game in flip mode (any number of trinkets)"],
        ["Game Complete", "Complete the game (any number of trinkets)"],
        ["Laboratory Mastered", "Obtain a V Rank in this Time Trial."],
        ["Less than 100 deaths", "Complete the game with less than 100 deaths."],
        ["Less than 250 deaths", "Complete the game with less than 250 deaths."],
        ["Less than 50 deaths", "Complete the game with less than 50 deaths."],
        ["Less than 500 deaths", "Complete the game with less than 500 deaths."],
        ["Master of the universe", "Complete the game in no death mode."],
        ["Space Station 1 Mastered", "Obtain a V Rank in this Time Trial."],
        ["Space Station 2 Mastered", "Obtain a V Rank in this Time Trial."],
        ["Super Gravitron: 1 minute", "Last 1 minute on the Super Gravitron."],
        ["Super Gravitron: 10 seconds", "Last 10 seconds on the Super Gravitron."],
        ["Super Gravitron: 15 Seconds", "Last 15 seconds on the Super Gravitron."],
        ["Super Gravitron: 20 seconds", "Last 20 seconds on the Super Gravitron."],
        ["Super Gravitron: 30 seconds", "Last 30 seconds on the Super Gravitron."],
        ["Super Gravitron: 5 Seconds", "Last 5 seconds on the Super Gravitron."],
        ["The Tower Mastered", "Obtain a V Rank in this Time Trial."],
        ["Warp Zone Mastered", "Obtain a V Rank in this Time Trial."],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
