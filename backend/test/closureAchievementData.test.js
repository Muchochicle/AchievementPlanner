import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/closure.json - 8 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 72000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("closure");

test("getPlannerData('closure') returns real planner data with 8 curated achievements", () => {

    assert.ok(game, "expected real planner data for closure");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 8);

});

test("every Closure achievement has a unique id from 1 to 8 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 8 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 8);
    assert.strictEqual(new Set(apinames).size, 8);

});

test("every Closure achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 8 Closure achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Closure", "Complete the game 100%"],
        ["Flight of the Moth", "Find a Silver Moth"],
        ["Moth Trove", "Locate the Moth Cave"],
        ["Over in a Flash", "Complete the Hospital"],
        ["Playtime is Over", "Complete the Circus"],
        ["The River", "Complete the Tutorial"],
        ["Welcome to Purgatory", "Complete the Main Game"],
        ["Working Overtime", "Complete the Factory"],
    ];

    assert.strictEqual(officialAchievements.length, 8, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
