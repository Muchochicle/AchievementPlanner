import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/colony-survival.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 366090 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("colony-survival");

test("getPlannerData('colony-survival') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for colony-survival");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Colony Survival achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Colony Survival achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Colony Survival achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A King Among Lords", "Complete Prestige I Science"],
        ["A Medium-Sized Town", "Recruit 500 Colonists"],
        ["A Network Of Towns", "Build 4 Outposts"],
        ["A Small Tribe", "Recruit 10 colonists"],
        ["A Small Village", "Recruit 100 colonists"],
        ["Amazing Arsenal", "Produce 1000 Crossbow Bolts in 24 hours"],
        ["An Emperor Among Kings", "Complete Prestige V Science"],
        ["Big Data", "Place a Statistics Board"],
        ["Craft Isn't Mine, It's For Colonists", "Recruit a Tinkerer"],
        ["Crunch Those Numbers", "Recruit 1 Tabulating Machine Operator"],
        ["Danger Zone", "Reach Threat Level 1500"],
        ["Dibs", "Upgrade Banner Safe Zone Radius to the maximum"],
        ["Divine Deliciousness", "Hold 1+ Sacred Chicken Meal in the stockpile"],
        ["Divine Saviour", "Hold 10+ Sanctity Points"],
        ["Escalating Requirements", "Recruit 1 Chestmaker"],
        ["Exponential Data Increase", "Recruit 1 Printing Press Operator"],
        ["Fire At Will", "Recruit 1 Handcannon Guard"],
        ["Fixing The Modern World", "Hold 5 Machine Tools"],
        ["Freeze!", "Hold 1 Rope Trap in the stockpile"],
        ["Horn of Plenty", "Hold 100 Colony Points"],
        ["How Hemp Is Meant To Be Used", "Hold 1+ Rope in the stockpile"],
        ["It's a Trap!", "Place a Trapfixer"],
        ["Labor Shortage", "Reach -50 Unemployed Colonists"],
        ["Lazy Colonists", "Reach 50 Unemployed Colonists"],
        ["Lockbox Time", "Hold 101+ Colony Points"],
        ["Magnum Opus", "Kill the strongest monster"],
        ["Mix And Match", "Hold 1 Luxury Garments in the stockpile"],
        ["Modern Solutions", "Hold 1+ Eyeglasses in the stockpile"],
        ["Modern Texts", "Hold 1+ Book of Knowledge in the stockpile"],
        ["Money Money Money", "Hold 10.000 Colony Points"],
        ["More Dakka", "Consume 50 Lead Ingots in 24 hours"],
        ["Mystical Forces", "Consume 100 Candles in 24 hours"],
        ["Not All Those Who Wander Are Lost", "Hold 1+ Astrolabe in the stockpile"],
        ["Rising Threat", "Unlocked the Merchant's Hub"],
        ["Settlers", "Start an Outpost"],
        ["Speed It Up", "Hold 1 Steel Tools in the stockpile"],
        ["The Bronze Age", "Unlock the Bronze Age"],
        ["The Cost Of Copper", "Consume 500 Copper Ingots in 24 hours"],
        ["The Fires of Industry", "Consume 1500 Firewood in 24 hours"],
        ["The Miracle of Explosions", "Hold 1 Launched Steel Glider in the stockpile"],
        ["The Miracle of Flight", "Place a Glider Launcher"],
        ["The Most Important Goal", "Recruit 1000 Colonists"],
        ["The Very First Step", "Place a banner and start a colony"],
        ["Things Get Complex", "Hold 1+ Vial of Mineral Oil in the stockpile"],
        ["Time For Wisdom", "Hold 1+ Tablet of Ancient Wisdom in the stockpile"],
        ["Time Goes By", "Reach Day 100"],
        ["Tremendous Threat", "Reach Threat Level 500"],
        ["Ups and Downs", "Hold 10 Elevator Shafts in the stockpile"],
        ["Watch The Clock", "Reach Day 250"],
        ["You'll Never Go Hungry Again", "Reach 2500 Total Meals"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
