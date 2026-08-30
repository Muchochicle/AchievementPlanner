import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/7-billion-humans.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 792100 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 19 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("7-billion-humans");

test("getPlannerData('7-billion-humans') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for 7-billion-humans");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every 7 Billion Humans achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every 7 Billion Humans achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 7 Billion Humans achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Blue Optimization Award", "Blue path fully optimized."],
        ["Career Milestone 1", "Finish the You're Hired! cutscene."],
        ["Career Milestone 2", "Finish the Intro to Morale Officers cutscene."],
        ["Career Milestone 3", "Finish the Fitness Program cutscene."],
        ["Career Milestone 4", "Finish the Morning Petroleum cutscene."],
        ["Career Milestone 5", "Finish the Mom and Dad of Invention cutscene."],
        ["Excellent Instruction Follower", "All levels complete. Congratulations."],
        ["Glorious Failure: Solution Not Robust", "Your solution fails more than 50% of the time."],
        ["Green Optimization Award", "Green path fully optimized."],
        ["King of Verbosity", "Solve any puzzle with at least 4x the number of commands required by the size challenge."],
        ["Orange Optimization Award", "Orange path fully optimized"],
        ["Queen of Inefficiency", "Solve any puzzle with at least 4x the number of seconds required by the speed challenge."],
        ["Red Optimization Award", "Red path fully optimized."],
        ["Social Engineer", "Listen to all worker thoughts in a level."],
        ["Worker's Comp: Crushing It", "A worker is a crushed by an appliance."],
        ["Worker's Comp: Explosive Failure", "A worker exploded."],
        ["Worker's Comp: Shredding It", "A worker is shredded by a shredder."],
        ["Worker's Comp: Shrieking Steel Blades", "A worker is shredded by a killbot."],
        ["Worker's Comp: Trust Exercise", "A worker fell into an infinite pit."],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
