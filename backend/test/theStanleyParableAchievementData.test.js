import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-stanley-parable.json - 10 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 221910 (fetched through this app's own services/steamApi.js) -
// all 10 ship a real, official Steam description (The Stanley Parable,
// like RiME and A Hat in Time, has zero hidden achievements - the game's
// achievement list is itself part of its joke about achievement systems,
// so nothing is concealed). difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog.
const theStanleyParable = getPlannerData("the-stanley-parable");

test("getPlannerData('the-stanley-parable') returns real planner data with 10 curated achievements", () => {

    assert.ok(theStanleyParable, "expected real planner data for the-stanley-parable");
    assert.ok(Array.isArray(theStanleyParable.achievements));
    assert.strictEqual(theStanleyParable.achievements.length, 10);

});

test("every The Stanley Parable achievement has a unique id from 1 to 10 and a unique apiname", () => {

    const ids = theStanleyParable.achievements.map(a => a.id);
    const apinames = theStanleyParable.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 10 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 10);
    assert.strictEqual(new Set(apinames).size, 10);

});

test("every The Stanley Parable achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of theStanleyParable.achievements) {

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

test("every one of the 10 official The Stanley Parable achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Like RiME and A Hat in Time, The Stanley Parable has zero hidden
    // achievements - the full list is checked here in one pass.
    const officialAchievements = [
        ["Beat the game", "Complete The Stanley Parable."],
        ["Achievement", "This is an achievement."],
        ["Click on door 430 five times.", "Click on door 430 five times."],
        ["You can't jump", "No seriously, we disabled it."],
        ["8888888888888888", "888888888888888888888888888888888888888888888888"],
        ["Welcome back!", "Quit the game and then start it again."],
        ["Speed run", "Complete The Stanley Parable in under 4 minutes 22 seconds (not including load times)"],
        ["Commitment", "Play The Stanley Parable for the entire duration of a Tuesday."],
        ["Go outside", "Don't play The Stanley Parable for five years."],
        ["Unachievable", "It is impossible to get this achievement."]
    ];

    assert.strictEqual(officialAchievements.length, 10, "sanity check on this test's own reference list");

    const dataPairs = theStanleyParable.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
