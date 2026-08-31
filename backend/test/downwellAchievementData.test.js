import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/downwell.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 360740 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("downwell");

test("getPlannerData('downwell') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for downwell");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Downwell achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Downwell achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Downwell achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bye Frogs", "Beat the first area"],
        ["Bye Ghosts", "Beat the second area"],
        ["Bye Squids", "Beat the third area"],
        ["Bye Stuff", "Beat the fourth area"],
        ["Bye Well", "Beat the boss"],
        ["Careful Descent", "Complete a level without taking damage"],
        ["Frugality", "Have more than 5000 gems"],
        ["Ground Allergy", "Complete a level without landing"],
        ["Mottainai", "Complete a level without shooting"],
        ["Pacifist", "Complete a level without killing any enemy"],
        ["Saving Up", "Have more than 3000 gems"],
        ["So Many Frogs", "Beat the first area (hard mode)"],
        ["So Many Ghosts", "Beat the second area (hard mode)"],
        ["So Many Squids", "Beat the third area (hard mode)"],
        ["So Much Stuff", "Beat the fourth area (hard mode)"],
        ["Sugoi Combo", "Land a 100 combo"],
        ["Time Never Stops", "Complete a level without visiting siderooms"],
        ["Well Master", "Beat the boss (hard mode)"],
        ["Whoa Combo", "Land a 30 combo"],
        ["Wow Combo", "Land a 10 combo"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
