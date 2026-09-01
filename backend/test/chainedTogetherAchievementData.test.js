import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chained-together.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2567870 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("chained-together");

test("getPlannerData('chained-together') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for chained-together");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Chained Together achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Chained Together achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Chained Together achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Wings", "Collect 10 Wings of Freedom scattered throughout the level"],
        ["Climb faster", "Reach the summit of the game in less than 1 hour and 50 minutes."],
        ["Hell Cliffs", "Reach The Hell Cliffs"],
        ["Lava mode", "Finish the lava mode"],
        ["Over The Buildings", "Reach The Rooftops"],
        ["The Asian Shrine", "Reach The Asian Shrine"],
        ["The Car Race", "Reach The Car Race"],
        ["The City", "Reach The City"],
        ["The Deities", "Reach The Deities"],
        ["The Garden", "Reach The Garden"],
        ["The Harbor", "Reach The Harbor"],
        ["The Mysterious Cave", "Reach The Mysterious Cave"],
        ["The Subway Station", "Reach The Subway Station"],
        ["The Temple", "Reach The Temple"],
        ["The Warehouse", "Reach The Warehouse"],
        ["Underworld", "Reach The Underworld"],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
