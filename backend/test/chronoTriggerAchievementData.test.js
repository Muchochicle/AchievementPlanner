import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chrono-trigger.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 613830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("chrono-trigger");

test("getPlannerData('chrono-trigger') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for chrono-trigger");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Chrono Trigger achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Chrono Trigger achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Chrono Trigger achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beyond Time", "Beyond Time"],
        ["Dino Age", "Dino Age"],
        ["Dream's Epilogue", "Dream's Epilogue"],
        ["Good Night", "Good Night"],
        ["Memory Lane", "Memory Lane"],
        ["People of the Times", "People of the Times"],
        ["Reunion", "Reunion"],
        ["The Dream Project", "The Dream Project"],
        ["The Legendary Hero", "The Legendary Hero"],
        ["The Oath", "The Oath"],
        ["The Successor of Guardia", "The Successor of Guardia"],
        ["The Unknown Past", "The Unknown Past"],
        ["What the Prophet Seeks", "What the Prophet Seeks"],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
