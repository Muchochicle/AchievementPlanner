import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/braid.json - 12 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 26800
// (fetched through this app's own services/steamApi.js) - every name,
// apiname, AND description here matches that response exactly.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const braid = getPlannerData("braid");

test("getPlannerData('braid') returns real planner data with 12 curated achievements", () => {

    assert.ok(braid, "expected real planner data for braid");
    assert.ok(Array.isArray(braid.achievements));
    assert.strictEqual(braid.achievements.length, 12);

});

test("every Braid achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = braid.achievements.map(a => a.id);
    const apinames = braid.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Braid achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of braid.achievements) {

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

test("every one of the 12 official Braid achievement name+description pairs is present, matching the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Traversed World 2", "Travel all the way across World 2."],
        ["Traversed World 3", "Travel all the way across World 3."],
        ["Traversed World 4", "Travel all the way across World 4."],
        ["Traversed World 5", "Travel all the way across World 5."],
        ["Traversed World 6", "Travel all the way across World 6."],
        ["Solved World 2", "Fit together all the world 2 puzzle pieces and align the puzzle in its frame."],
        ["Solved World 3", "Fit together all the world 3 puzzle pieces and align the puzzle in its frame."],
        ["Solved World 4", "Fit together all the world 4 puzzle pieces and align the puzzle in its frame."],
        ["Solved World 5", "Fit together all the world 5 puzzle pieces and align the puzzle in its frame."],
        ["Solved World 6", "Fit together all the world 6 puzzle pieces and align the puzzle in its frame."],
        ["Closure", "Complete the game."],
        ["Speed Run", "Complete a full speed run, beating the challenge time."]
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = braid.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
