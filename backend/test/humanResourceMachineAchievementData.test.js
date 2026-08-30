import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/human-resource-machine.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 375820 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 16 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("human-resource-machine");

test("getPlannerData('human-resource-machine') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for human-resource-machine");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Human Resource Machine achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Human Resource Machine achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Human Resource Machine achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Blue Optimization Award", "blue path fully optimized"],
        ["Career Milestone 1", "coffee time"],
        ["Career Milestone 2", "employee morale insertion"],
        ["Career Milestone 3", "sabbatical beach"],
        ["Career Milestone 4", "midnight petroleum"],
        ["Career Milestone 5", "where's carol?"],
        ["Career Milestone 6", "end program"],
        ["Excellent Instruction Follower", "all levels complete. congratulations."],
        ["Glorious Failure: Out of Bounds", "attempt to read or write with a tile on the floor that does not exist"],
        ["Glorious Failure: Overflow", "attempt to generate a number that is too big to store in green boxes"],
        ["Glorious Failure: Solution Not Robust", "solve a puzzle for a specific set of inputs, while still failing with other possible inputs"],
        ["Green Optimization Award", "green path fully optimized"],
        ["King of Verbosity", "solve any puzzle with at least 4x the number of commands required by the size challenge"],
        ["Orange Optimization Award", "orange path fully optimized"],
        ["Queen of Inefficiency", "solve any puzzle with at least 4x the number of steps required by the speed challenge"],
        ["Social Engineer", "ask all bosses to tell you more"],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
