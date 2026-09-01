import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/selaco.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1592280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("selaco");

test("getPlannerData('selaco') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for selaco");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Selaco achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Selaco achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Selaco achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AFK", "Spend 1 hour inside a 'Xen Wellness Center' sauna without interruption"],
        ["Buddy System", "Buddy-up with Jonathan   "],
        ["Crime Averted", "Save a fish from suffocation"],
        ["Daily Bonus", "Claim a free daily drink at the Mall  "],
        ["Death Incarnate", "Kill 1,000 Enemies"],
        ["Death Toll", "Prevent a mutation from happening, by any means necessary."],
        ["DPS LFG", "Obtain 1200 DPS at the Shooting Range in Punching Bag mode"],
        ["Embrace The Chaos", "Complete Chapter 1 in Special Campaign"],
        ["Game Over!", "Complete Chapter 1."],
        ["Gwyn Simp", "Spend at least 5000 Selver in a single Gwyn Machine session"],
        ["Homecoming", "Visit Dawn's home"],
        ["Humanity's Second Chance", "Reach the streets"],
        ["Humiliation!", "Defeat a Juggernaut with your fists"],
        ["It's not a bug, it's a feature!", "Trigger a Trash Tornado"],
        ["Little Plushy Man", "Safely return Wilson the Bear to Dawn's home"],
        ["Marathon Runner", "Take 15,000 steps in a single Campaign save"],
        ["Mozzarella Miracle!", "Get very lucky by finding a full box of pizza"],
        ["Myth, busted!", "Cause a toilet to explode without using explosives"],
        ["NotEvenRemotelyFair.WAD", "Die within 5 seconds of starting a game on Selaco Must Fall difficulty"],
        ["Overkill", "Kill an enemy with your Fists while having a Bunny Hopper, Protein Shake and Confidence Booster active"],
        ["Paper Forever", "Fight through the Liancria Office Complex"],
        ["Power Overwhelming", "Find all 6 Security Cards throughout the game, then enter the Starlight building to obtain the Railgun."],
        ["Pub Brawl", "Start an argument at The Broken Seal  "],
        ["Reporting for duty!", "Suit up"],
        ["Safe Heaven", "Unlock your first Safe Room "],
        ["Save the World, bro!", "Reach Level 10 in SPACE BRO"],
        ["Sharp and Shiny", "Obtain all upgrades for a single weapon"],
        ["Sharp Shooter", "Land a Headshot Kill from at least 70 meters away"],
        ["Strongbox", "Unlock an Encounter Chest in Special Campaign"],
        ["Unionize!", "Get 100 Minimum-Wagers in Burger Flipper"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
