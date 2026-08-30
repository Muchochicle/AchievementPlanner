import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/distant-worlds-universe.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 261470 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("distant-worlds-universe");

test("getPlannerData('distant-worlds-universe') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for distant-worlds-universe");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Distant Worlds: Universe achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Distant Worlds: Universe achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Distant Worlds: Universe achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A House Divided", "Empire Splits (Civil War)"],
        ["Ancient Order", "Change Government to Way of the Ancients"],
        ["Assassin", "Eliminate 20 Enemy Characters"],
        ["Assassin", "Eliminate 50 Enemy Characters"],
        ["Assassin", "Eliminate 100 Enemy Characters"],
        ["Backstabber", "Break 20 Treaties"],
        ["Behold the Power!", "Own an operational Planet Destroyer"],
        ["Cloak and Blaster", "25 Successful Espionage and Sabotage Missions"],
        ["Cloak and Blaster", "100 Successful Espionage and Sabotage Missions"],
        ["Cloak and Blaster", "1000 Successful Espionage and Sabotage Missions"],
        ["Conqueror", "Conquer 10 Enemy Colonies"],
        ["Conqueror", "Conquer 50 Enemy Colonies"],
        ["Conqueror", "Conquer 100 Enemy Colonies"],
        ["Dark Times", "Change Government to Way of Darkness"],
        ["Disassembler", "Destroy 10 SilverMists"],
        ["Disassembler", "Destroy 50 SilverMists"],
        ["Disassembler", "Destroy 100 SilverMists"],
        ["Don't Tell me the Odds", "Defeat the Legendary Pirates"],
        ["Free Trader", "Highest Trade Volume"],
        ["Galactic Downfall", "Defeat the Ancient Guardians"],
        ["Galaxy in Flames", "Spend at least 90% of time at War"],
        ["I am the Law", "Eliminate 5 Pirate Factions"],
        ["I am the Law", "Eliminate 10 Pirate Factions"],
        ["I am the Law", "Eliminate 20 Pirate Factions"],
        ["If You Can't Beat 'Em", "Join the Shakturi (Mutual Defense Pact)"],
        ["Marauder", "Destroy 50 Enemy Civilian Ships and Bases"],
        ["Marauder", "Destroy 100 Enemy Civilian Ships and Bases"],
        ["Marauder", "Destroy 1000 Enemy Civilian Ships and Bases"],
        ["Minecrafter", "Mine Most Resources"],
        ["Monster Hunter", "Destroy 20 Space Monsters"],
        ["Monster Hunter", "Destroy 50 Space Monsters"],
        ["Monster Hunter", "Destroy 100 Space Monsters"],
        ["New Galactic Order", "Eliminate 1 Enemy Empires"],
        ["New Galactic Order", "Eliminate 5 Enemy Empires"],
        ["New Galactic Order", "Eliminate 10 Enemy Empires"],
        ["Peace through Peace", "Spend 0% of time at War"],
        ["Planetary Warfare", "Destroy 50 Enemy Troops"],
        ["Planetary Warfare", "Destroy 100 Enemy Troops"],
        ["Planetary Warfare", "Destroy 1000 Enemy Troops"],
        ["Raider", "10 Successful Raids against enemy colonies and bases"],
        ["Raider", "50 Successful Raids against enemy colonies and bases"],
        ["Raider", "100 Successful Raids against enemy colonies and bases"],
        ["The Final War", "Defeat the Shakturi"],
        ["Veteran of the Galactic War", "Destroy 50 Enemy Military Ships and Bases"],
        ["Veteran of the Galactic War", "Destroy 100 Enemy Military Ships and Bases"],
        ["Veteran of the Galactic War", "Destroy 1000 Enemy Military Ships and Bases"],
        ["Warmonger", "Start 20 Wars"],
        ["We Want You", "Join the Freedom Alliance"],
        ["What's Yours is Mine", "Capture 10 Enemy Ships and Bases"],
        ["What's Yours is Mine", "Capture 50 Enemy Ships and Bases"],
        ["What's Yours is Mine", "Capture 100 Enemy Ships and Bases"],
        ["Wunderworld", "Build 1 Galactic Wonders"],
        ["Wunderworld", "Build 5 Galactic Wonders"],
        ["Wunderworld", "Build 10 Galactic Wonders"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
