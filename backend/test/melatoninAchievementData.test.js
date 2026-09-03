import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/melatonin.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1585220 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("melatonin");

test("getPlannerData('melatonin') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for melatonin");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Melatonin achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Melatonin achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Melatonin achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Creator", "Finish a custom edited level"],
        ["Go to bed", "Get all perfect scores"],
        ["Honor roll", "Perfect the tutorial"],
        ["Indulgence", "Play through Night 1."],
        ["Meditation", "Play through Night 3."],
        ["New day", "Play through to the morning - finish the game."],
        ["Ring collector", "Collect all rings in the game"],
        ["Ring perfectionist", "Get a perfect score in hard mode"],
        ["Ring precision", "Score 3 rings in a level"],
        ["Setbacks", "Play through Night 4."],
        ["Star perfectionist", "Get a perfect score in scored mode"],
        ["Star precision", "Score 3 stars in a level"],
        ["Stargazer", "Collect all stars in the game"],
        ["Under pressure", "Play through Night 2."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
