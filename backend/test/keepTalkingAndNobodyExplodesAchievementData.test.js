import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/keep-talking-and-nobody-explodes.json - 10 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 341800 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("keep-talking-and-nobody-explodes");

test("getPlannerData('keep-talking-and-nobody-explodes') returns real planner data with 10 curated achievements", () => {

    assert.ok(game, "expected real planner data for keep-talking-and-nobody-explodes");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 10);

});

test("every Keep Talking and Nobody Explodes achievement has a unique id from 1 to 10 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 10 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 10);
    assert.strictEqual(new Set(apinames).size, 10);

});

test("every Keep Talking and Nobody Explodes achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 10 Keep Talking and Nobody Explodes achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Action Hero", "Defuse \"The First Bomb\"."],
        ["All in Moderation", "Defuse all bombs in the \"Moderate\" section."],
        ["Bomb Defusing 101", "Defuse all bombs in \"The Basics\" section."],
        ["Bomb Squad", "Defuse 100 bombs."],
        ["Challenge Accepted", "Defuse all bombs in the \"Challenging\" section."],
        ["Experience is the Best Teacher", "Disarm each type of module at least once."],
        ["Multitasker", "Defuse all bombs in the \"Needy\" section."],
        ["Seasoned Traveller", "Defuse all bombs in the \"Exotic\" section."],
        ["To the Extreme!", "Defuse all bombs in the \"Extreme\" section."],
        ["Trust the Expert", "Disarm 100 modules."],
    ];

    assert.strictEqual(officialAchievements.length, 10, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
