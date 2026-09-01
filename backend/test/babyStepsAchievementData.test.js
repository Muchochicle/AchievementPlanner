import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/baby-steps.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1281040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("baby-steps");

test("getPlannerData('baby-steps') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for baby-steps");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Baby Steps achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Baby Steps achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Baby Steps achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Cassie's Trophy", "Stole Cassie's award for yourself."],
        ["Coolest Hand", "Brought an ice cream to a very hot person."],
        ["Invisible Trophy", "In the Poison Hills' Art Nature walk, find the wide white pillar with sunglasses, put them on, then carefully walk a long stretch of stepping stones without a single misstep to reach an invisible trophy - this becomes unobtainable once you clear the Poison Slopes, so back up your save first."],
        ["Jiminy's Cricket", "Joined the hallowed ranks of the Jiminy's Crickets."],
        ["Mister Falconer", "Retrieved the beloved trophy of a champion falconer."],
        ["Most Careful Person", "Returned the most careful person's vase without breaking it."],
        ["Most Economical", "Measured less than ten thousand steps on the pedometer."],
        ["Most Perceptive Person", "Found and returned the keys of the most perceptive person."],
        ["Most Punctual", "Finished the game on time."],
        ["Most Responsible Person", "Rescued the child of a very responsible parent."],
        ["Ready for a Different Game", "Collect all Achievements in Baby Steps"],
        ["The Greatest", "Beat the designer's time in the gym."],
        ["World's Best Dad", "Return the favorite cup to the World's Best Dad"],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
