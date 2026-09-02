import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/delta-force.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2507950 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("delta-force");

test("getPlannerData('delta-force') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for delta-force");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Delta Force achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Delta Force achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Delta Force achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ace Sniper", "Kill an enemy from beyond 400m in Warfare."],
        ["An Eye for an Eye", "Revenge 500 times in Warfare."],
        ["Battlefield Angel", "Rescue 5,000 allies in Warfare."],
        ["Bone Collector", "Make 1,000 headshot kills in Warfare."],
        ["Brickyard Supervisor", "Decode 1 MandelBrick in Operations."],
        ["Cleaner Bot", "Extract with 1 Robot Cleaner from Operations."],
        ["D-wolf - Operations", "Deal 100,000 damage as D-wolf in Operations."],
        ["D-wolf - Warfare", "Deal 200,000 damage as D-wolf in Warfare."],
        ["Endless Barrage", "Resupply squadmates 40 times via Ammo Crate in a single Warfare match."],
        ["Everlasting Heart", "Extract with 1 Heart of Africa from Operations."],
        ["Field Half-Marathon", "Move 21.97km in Warfare."],
        ["Field Marathon", "Move 42.195km in Warfare."],
        ["Field Marshal ", "Reach max Warfare level."],
        ["Field Vanguard", "Reach Warfare Lv.25."],
        ["First Victory", "Win 1 Warfare match."],
        ["Ghost in the Halls", "Kill Saeed 5 times in Operations."],
        ["Hackclaw - Operations", "Deal 100,000 damage as Hackclaw in Operations."],
        ["Hackclaw - Warfare", "Deal 200,000 damage as Hackclaw in Warfare."],
        ["Headshot Expert", "Make 25 headshot kills in a single Warfare match."],
        ["Heavy Barrage", "Destroy 500 vehicles in Warfare."],
        ["Hotel Ownership Transfer Notice", "Kill Reis 5 times in Operations."],
        ["Killing Machine", "Kill more than 120 enemies in a single Warfare match."],
        ["Luna - Operations", "Deal 100,000 damage as Luna in Operations."],
        ["Luna - Warfare", "Deal 200,000 damage as Luna in Warfare."],
        ["Mechanical Cardio", "Extract with 1 Medical Ventilator from Operations."],
        ["Military Enthusiast", "Extract with 1 Battle Tank Model from Operations."],
        ["Multi-Core Processing", "Extract with 1 MandelBrick Supercomputing Unit from Operations."],
        ["My Turf", "Kill 8 enemy operators in an Operations match."],
        ["Next-Gen Material", "Extract with 1 Reinforced Carbon Fiberboard from Operations."],
        ["Nuclear Strike", "Score more than 4,000 using a Guided Missile in a single Warfare match."],
        ["On the Scope", "Kill Desmoulins 5 times in Operations."],
        ["Physical Hacker", "Extract with 1 Top Secret Server from Operations."],
        ["Pistol Cleaner", "Kill 30 enemies using a pistol in a single Warfare match."],
        ["Precise Detection", "Extract with 1 Portable Military Radar from Operations."],
        ["Rescue More!", "Rescue more than 75 allies in a single Warfare match."],
        ["Shepherd - Operations", "Deal 100,000 damage as Shepherd in Operations."],
        ["Shepherd - Warfare", "Deal 200,000 damage as Shepherd in Warfare."],
        ["Sineva - Operations", "Deal 100,000 damage as Sineva in Operations."],
        ["Sineva - Warfare", "Deal 200,000 damage as Sineva in Warfare."],
        ["Stinger - Operations", "Deal 100,000 damage as Stinger in Operations."],
        ["Stinger - Warfare", "Deal 200,000 damage as Stinger in Warfare."],
        ["Tank Terminator", "Destroy more than 3 vehicles in a single Warfare match."],
        ["The Butcher", "Kill 10,000 enemies in Warfare."],
        ["Top Agent", "Reach max Operations level."],
        ["Toxik - Operations", "Deal 100,000 damage as Toxik in Operations."],
        ["Toxik - Warfare", "Deal 200,000 damage as Toxik in Warfare."],
        ["Ultimate Stash", "Upgrade the Black Site Stash to max level in Operations."],
        ["Uluru - Operations", "Deal 100,000 damage as Uluru in Operations."],
        ["Uluru - Warfare", "Deal 200,000 damage as Uluru in Warfare."],
        ["Veteran Operator", "Reach Operations Lv.30."],
        ["Vyron - Operations", "Deal 100,000 damage as Vyron in Operations."],
        ["Vyron - Warfare", "Deal 200,000 damage as Vyron in Warfare."],
        ["Welding Warlord", "Score more than 1,000 from repairing in a single Warfare match."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
