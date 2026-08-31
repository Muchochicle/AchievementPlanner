import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/savage-lands.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 307880 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("savage-lands");

test("getPlannerData('savage-lands') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for savage-lands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Savage Lands achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Savage Lands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Savage Lands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4 Walls and a Roof", "Build a Wooden Shack."],
        ["A Wolf's Bane", "Craft Wolfsbane Sword."],
        ["Brittle Bones", "Kill 5 Skeletons."],
        ["Canine Conundrum", "Kill 5 Wolves."],
        ["Clobbering Time", "Craft your first weapon."],
        ["Die Hard the Hunter", "Kill 25 creatures."],
        ["Entering the Unknown", "Join any Hostile or Friendly Server."],
        ["FIRE!", "Build your first campfire."],
        ["First Blood", "Kill 1 creature."],
        ["Guardian of the Isle", "Kill 4 Forest Giants."],
        ["Lumberjack That!", "Chop down 10 trees."],
        ["Master Craftsman", "Build a Forge."],
        ["Oh Deer!", "Kill 5 Deer."],
        ["Plagued by Wolves", "Kill 3 Large Dire Wolves."],
        ["Prospector", "Mine 25 items from any rock."],
        ["Task Master", "Complete all Day 1 Tasks."],
        ["The Basics", "Build a Leanto."],
        ["They Mostly Come at Night... Mostly.", "Kill 10 Undead Furies."],
        ["Which Way is North?", "Craft a compass."],
        ["Who Runs Barter Town?", "Build a Town Hall."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
