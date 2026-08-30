import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/huntdown.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 598550 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("huntdown");

test("getPlannerData('huntdown') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for huntdown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every Huntdown achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every Huntdown achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 Huntdown achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ain't got time to bleed", "Kill a bounty while having one health point left"],
        ["Assassin", "Get 100% completion in Badass Mode"],
        ["Baseball Fury", "Kill 10 enemies with a Baseball Bat on one level"],
        ["Cannonball Run", "Destroy 5 cars at the Overseer's Fume Pit without dying"],
        ["Contract Killer", "Get 100% completion in Hard Mode"],
        ["Duck Hunt", "Kick and shoot 10 enemies with a Shotgun before they hit the ground on one level"],
        ["Everlasting Patience", "Watch all of Wolfmother's briefs without pressing skip"],
        ["Hunter", "Defeat the Shogun"],
        ["I can do better", "Press the retry button after completing a level"],
        ["I'll be back", "Restart more than 5 times during a fight with a bounty"],
        ["Looks that Kill", "Trash a guitar on Sid Handsome"],
        ["Loyal Customer", "Get kicked out by Tony 5 times at the same checkpoint"],
        ["Mercenary", "Get 100% completion in Normal Mode"],
        ["Nose for Easter Eggs", "Find at least 5 secret locations"],
        ["Play Fetch", "Kill a dog by making it fetch a grenade"],
        ["Slap Shot", "Get hit by Nadja Drago's hockey stick and land in the goal"],
        ["Taste of her own medicine", "Make Suki the Sniper kill herself with her own missile"],
        ["This is my boom-stick!", "Kill 10 enemies at close range with a Sawed-off on one level"],
        ["Yippee Ki Yay", "Complete a level without picking up any weapons"],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
