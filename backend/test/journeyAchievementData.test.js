import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/journey.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 638230 (fetched through this app's own services/steamApi.js). 0 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("journey");

test("getPlannerData('journey') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for journey");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Journey achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Journey achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Journey achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventure", "Pass through 15 gates while surfing through the sunken city."],
        ["Ancestors", "Find a mysterious creature hidden in the temple."],
        ["Companion", "Finish the game with the same partner for the majority of the journey and return to the beginning."],
        ["Crossing", "Reach the summit with a companion and return to the beginning."],
        ["Explore", "Discover all cloth creatures in the desert."],
        ["History", "Uncover all 10 ancient glyphs."],
        ["Mirage", "Find the hidden desert flower."],
        ["Rebirth", "Finish the game and return to the beginning."],
        ["Reflection", "Sit and meditate with another player for more than 20 seconds."],
        ["Return", "Start the journey again after a week long break."],
        ["Threshold", "Cross the broken bridge without completely rebuilding it."],
        ["Transcendence", "Collect all unique glowing symbols across one or more journeys."],
        ["Trials", "Sneak through the underground passage without tearing your scarf."],
        ["Wonder", "Meet 10 or more unique travelers."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
