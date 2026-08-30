import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/art-of-rally.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 550320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("art-of-rally");

test("getPlannerData('art-of-rally') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for art-of-rally");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every art of rally achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every art of rally achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 art of rally achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["absolute drift", "finish a stage driving the original at night in japan"],
        ["antilag", "complete all group a seasons"],
        ["autopilot", "spend 5 minutes airborne"],
        ["barely keeping it together", "complete a stage with a near totalled car"],
        ["bicycle race", "drive on 2 wheels for 3 seconds"],
        ["brail", "dirty a vehicle to the fullest extent"],
        ["car wash", "go through the car wash"],
        ["comfy seats", "drive 500km with one vehicle"],
        ["espresso", "find all collectibles in san pietro island"],
        ["eurobeat", "find all collectibles in kanto mountains"],
        ["food tour: pasta", "drive an italian car in italy"],
        ["food tour: pretzel", "drive a german car in germany"],
        ["good drivers have dead flies on the side windows", "spend 5 minutes sliding"],
        ["grocery-getter", "complete all group 2 seasons"],
        ["group b", "finish a race while on fire"],
        ["if everything seems under control, you're not going fast enough", "complete 1000 stages"],
        ["if in doubt, flat out!", "hold the accelerator for 60 seconds"],
        ["in like a lamb, out like a lion", "complete a daily event"],
        ["keep it tidy", "complete a stage without damaging the car"],
        ["light attack", "reach 100 km/h"],
        ["master of rally", "complete the game"],
        ["maximum attack", "reach 200 km/h"],
        ["medium attack", "reach 150 km/h"],
        ["mittens", "finish a stage while it's snowing"],
        ["monster", "complete all group b seasons"],
        ["night ride", "finish a stage at night"],
        ["oktoberfest", "find all collectibles in mannebach"],
        ["parallel universe", "complete all group s seasons"],
        ["parking lot", "unlock all bonuses in career"],
        ["perkele", "find all collectibles in korkatti lakes"],
        ["podium", "win your first season"],
        ["real roads, real fast", "complete a weekly event"],
        ["rwd only", "complete all group 3 seasons"],
        ["samir", "get terminal damage"],
        ["simulator", "win a rally against master ai with severe damage simulation"],
        ["snorkel", "finish a stage during rain"],
        ["the artist", "go through the paint booth"],
        ["to finish first, first you must finish", "complete 20 rallies"],
        ["turbo", "complete all group 4 seasons"],
        ["viking", "find all collectibles in gimsøymyrene"],
        ["where is the stage?", "finish a stage during fog"],
        ["you can't treat a car like a human being. a car requires love", "roll 30 times"],
        ["you're here for a good time, not a long time", "drive the fujin for 555km"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
