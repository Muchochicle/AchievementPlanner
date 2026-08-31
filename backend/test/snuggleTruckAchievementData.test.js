import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/snuggle-truck.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 111100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("snuggle-truck");

test("getPlannerData('snuggle-truck') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for snuggle-truck");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Snuggle Truck achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Snuggle Truck achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Snuggle Truck achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Fuzzy Catcher", "Catch 10 fuzzies!"],
        ["100 Medals", "Earn 100 medals."],
        ["200 Fuzzy Catcher", "Catch 200 fuzzies!"],
        ["50 Fuzzy Catcher", "Catch 50 fuzzies!"],
        ["50 Medals", "Earn 50 medals."],
        ["All Medals", "Earn ALL THE MEDALS :)"],
        ["Fuzzy Run", "Get 12 or more passengers safely to the zoo in one run."],
        ["High Flier", "Catch a high flying passenger."],
        ["Horrible Driver", "Commit unspeakable driving atrocities."],
        ["Truck Flip", "Do a barrel roll!"],
        ["Wheelie Master", "Do an extra long wheelie!"],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
