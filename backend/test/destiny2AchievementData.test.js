import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/destiny-2.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1085660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("destiny-2");

test("getPlannerData('destiny-2') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for destiny-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Destiny 2 achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Destiny 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Destiny 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["An Exotic Journey", "Collect 15 Forsaken Exotic weapons or armour pieces."],
        ["Belly Of The Beast", "Complete an Ops Activity on Master difficulty or higher."],
        ["Cayde's Pathfinder", "Acquire each Hunter subclass."],
        ["Challenge Accepted", "Reach Weekly Rewards Rank 20 in the Seasonal Hub."],
        ["Darkness Falls", "Complete \"The Corrupted\" or \"Warden of Nothing\" on Master difficulty or higher."],
        ["Exotique", "Collect 10 Forsaken Exotic weapons or armor."],
        ["Fashion Statement", "Complete a Collections Badge."],
        ["Heart of Darkness", "Complete a Vanguard Ops activity on Master difficulty or higher."],
        ["Heart of the Awoken", "Enter the Dreaming City (accessible from the interplanetary map after the Forsaken campaign)."],
        ["High-Stakes Play", "Win a Gambit match."],
        ["Ikora's Protégé", "Acquire each Warlock subclass."],
        ["In A Flash", "Complete 5 Heroic Public Events."],
        ["Legends Grow", "Earn 5,000 Triumph points."],
        ["Lest Ye Be Judged", "Encounter an Agent of the Nine somewhere in the system."],
        ["Long and Winding Road", "Reach level 20."],
        ["Nothing Left to Say", "Complete the Shattered Throne dungeon in the Dreaming City."],
        ["Seal the Deal", "Complete a Triumph Seal."],
        ["Show Me What You Got", "Complete the \"Light Reforged\" quest."],
        ["The Life Exotic", "Collect 15 Red War exotic weapons or armor."],
        ["The People's Hero", "Complete a Heroic public event."],
        ["The Prestige", "Complete an Ops Activity on Grandmaster difficulty."],
        ["Wishing for the Best", "Complete the \"Last Wish\" Raid."],
        ["Zavala's Lieutenant", "Acquire each Titan subclass."],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
