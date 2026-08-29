import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/once-human.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2139460 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 36 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("once-human");

test("getPlannerData('once-human') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for once-human");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Once Human achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Once Human achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Once Human achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Arena Master", "Complete an arena leader challenge in the Deviation: Survive, Capture, Preserve scenario."],
        ["Corruption Be Gone", "Defeat the Ravenous Hunter in the Manibus scenario."],
        ["Deep Dreamer Killer", "Defeat a Deep Dreamer once in the Endless Dream scenario."],
        ["Desperate Lone Wolf", "Clear LEA Research Lab in Solo mode in the Manibus scenario."],
        ["Deviation Log", "Register 20+ Deviations in the Symbiosis System (Deviation: Survive, Capture, Preserve scenario)."],
        ["Dream Collector", "Collect 10 Wakeful Sand in the Endless Dream scenario."],
        ["Drift Master", "Complete 10 drifts with any vehicle in the Manibus scenario."],
        ["Electricity Expert", "Reach 80 Watts of Territory Power in the Manibus scenario."],
        ["End the Blight", "Defeat the Treant in the Manibus scenario."],
        ["Era of Deviations", "Enter the Deviation: Survive, Capture, Preserve scenario."],
        ["First Securement", "Capture your first Deviation in the Manibus scenario."],
        ["Frozen Solid", "First time entering The Way of Winter scenario."],
        ["Gimme That!", "Loot another player's supplies once in RaidZone."],
        ["Home Run", "Unlock all other trophies."],
        ["I Remember Now!", "Defeat the Forsaken Giant in the Manibus scenario."],
        ["Legendary Deviation", "Capture a Deviation with Deviant Energy and Activity Rating both at 5 in the Manibus scenario."],
        ["Light Dreamer Killer", "Defeat a Light Dreamer once in the Endless Dream scenario."],
        ["Manufacturing Tycoon", "Build 25 defensive combat facilities in your territory in the Manibus scenario."],
        ["Mod Expert", "Collect 40 different Mods at Lv. 15 or above in the Manibus scenario."],
        ["No Rock Unturned", "Open 10 Mystical Crates in the Manibus scenario."],
        ["Put Down That Dog", "Defeat the Shadow Hound in the Manibus scenario."],
        ["RaidZone Recruit", "First time entering the RaidZone map."],
        ["Raw Chaosium Collector", "Forge 200 Raw Chaosium in the furnace in The Way of Winter scenario."],
        ["Renovation Master", "Achieve a Building Rating of 1,000 in the Manibus scenario."],
        ["Scavenging", "Eliminate 2,000 Deviants in the Manibus scenario."],
        ["Securement Master", "Secure 25 Deviations in the Manibus scenario."],
        ["Securement Silo Explorer", "Complete your first Securement Silo challenge in the Manibus scenario."],
        ["Spark Hoarder", "Craft a Chaosium Lantern in The Way of Winter scenario."],
        ["Spider Nest Purge", "Defeat the Arachsiam in the Manibus scenario."],
        ["Stick Together for Warmth", "Place a Thermal Tower in your territory in The Way of Winter scenario."],
        ["Survival History", "Survive for 60 minutes in RaidZone."],
        ["Sweet Dreams", "First time entering the Endless Dream scenario."],
        ["Time to square off", "Defeat 1 other Meta in RaidZone."],
        ["Treasure Hunter", "Find 5 Vault Crates in the Manibus scenario."],
        ["Ultimate Deviation", "Register 1 S Deviation in Symbiosis System in the Deviation: Survive, Capture, Preserve scenario."],
        ["Veteran Farmer", "Harvest 50 crops from a Planter Box in the Manibus scenario."],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
