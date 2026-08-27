import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/what-remains-of-edith-finch.json - 9 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 501300 (fetched through this app's own
// services/steamApi.js) - every name, apiname, AND description here
// matches that response exactly; all 9 ship a real, non-hidden Steam
// description. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const edithFinch = getPlannerData("what-remains-of-edith-finch");

test("getPlannerData('what-remains-of-edith-finch') returns real planner data with 9 curated achievements", () => {

    assert.ok(edithFinch, "expected real planner data for what-remains-of-edith-finch");
    assert.ok(Array.isArray(edithFinch.achievements));
    assert.strictEqual(edithFinch.achievements.length, 9);

});

test("every What Remains of Edith Finch achievement has a unique id from 1 to 9 and a unique apiname", () => {

    const ids = edithFinch.achievements.map(a => a.id);
    const apinames = edithFinch.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 9 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 9);
    assert.strictEqual(new Set(apinames).size, 9);

});

test("every What Remains of Edith Finch achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of edithFinch.achievements) {

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

test("every one of the 9 official What Remains of Edith Finch achievement name+description pairs is present, matching the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["The End of Everything", "Finish all stories"],
        ["A Closer Look", "Look in all peepholes and telescopes long enough to hear Edith's commentary"],
        ["All Roads", "Take both paths to the house"],
        ["Great Owl", "Catch 2 rabbits with only 2 swoops"],
        ["Let Him Finish", "Let the drunken sailor finish his song"],
        ["Clear the Table", "Clear all balls off the pool table"],
        ["G-R-E-G-O-R-Y", "Knock all the letters of Gregory's name into the bathtub"],
        ["Thanks, Johann!", "See Johann's name in the ending credits"],
        ["Loop-de-loop-de-loop", "Play Calvin's story again"]
    ];

    assert.strictEqual(officialAchievements.length, 9, "sanity check on this test's own reference list");

    const dataPairs = edithFinch.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
