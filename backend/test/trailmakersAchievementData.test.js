import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trailmakers.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 585420 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("trailmakers");

test("getPlannerData('trailmakers') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for trailmakers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Trailmakers achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Trailmakers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Trailmakers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3-Pointer", "Shoot hoops on Danger Zone"],
        ["Best View In Town", "Land on the lighthouse on Race Island"],
        ["Bring Marshmallows!", "Enter the volcano"],
        ["Car Collector", "Download and load in a vehicle from the Workshop"],
        ["El Capitan", "Reach the top of Danger Zone"],
        ["Gold Rush", "Get gold on Downhill Rush"],
        ["Hot Air", "Crash into the blimp on Race Island"],
        ["Island Hopper", "Land on all the floating islands above Race Island in one session"],
        ["Leonardo da Vinci", "Stay airborne in a zero Power Core vehicle for 60 seconds"],
        ["Man in Black", "Fly through all the rings of fire in Treasure Island one session"],
        ["Moby Dick", "Bump into the whales in Treasure Island"],
        ["Monster!", "Drive over 8 chickens on Treasure Island in one session"],
        ["Pay your respect", "Visit the monument on Treasure Island"],
        ["Power Core Collector", "Find 15 Power Cores in Stranded in Space"],
        ["Problem Solver", "Complete all the ball puzzles on Treasure Island in one session"],
        ["Ready For Takeoff", "Rebuild your spaceship"],
        ["Sharing is Caring", "Upload a vehicle to the Workshop"],
        ["Slide to Win", "Get gold on Sunny Slide"],
        ["So attractive!", "Pick up a piece of Salvage with the Tractor Beam"],
        ["Sonic Boom", "Break the sound barrier"],
        ["To Fly or Not To Fly", "Get gold on Cliff Land"],
        ["Treehugger", "Hug the Tree on the Northeastern Island in Treasure Island"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
