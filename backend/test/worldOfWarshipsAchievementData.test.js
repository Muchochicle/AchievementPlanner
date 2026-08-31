import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/world-of-warships.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 552990 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("world-of-warships");

test("getPlannerData('world-of-warships') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for world-of-warships");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every World of Warships achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every World of Warships achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 World of Warships achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Honorable Service\"", "Complete the final task of the Campaign"],
        ["\"Honorable Service\" with Honors", "Complete all tasks of the Campaign"],
        ["\"Science of Victory\"", "Complete the final task of the Campaign"],
        ["\"Science of Victory\" with Honors", "Complete all tasks of the Campaign"],
        ["\"Yamamoto Isoroku\"", "Complete the entire \"Yamamoto Isoroku\" collection"],
        ["\"Yamamoto Isoroku\"", "Complete the final task of the Campaign"],
        ["\"Yamamoto Isoroku\" with Honors", "Complete all tasks of the Campaign"],
        ["Amateur", "Win 10 Random Battles."],
        ["American Cruisers", "Complete the entire \"American Cruisers\" collection."],
        ["Bane of the Oceans", "Receive any 100 heroic achievements."],
        ["Battle Hero", "Receive any 10 heroic achievements."],
        ["Business Magnate", "Earn 10 000 000 credits in battles."],
        ["Chief Naval Architect", "Research 50 ships."],
        ["Experienced One", "Successfully complete 250 operations."],
        ["Exterminator", "Destroy 25 key ships and auxiliary ships in operations."],
        ["Guardian", "Have 60 allied ships survive in operations."],
        ["Hit Hard! Hit Fast! Hit Often!", "Complete the final task of the Campaign."],
        ["Hit Hard! Hit Fast! Hit Often! with Honors", "Complete all tasks of the Campaign."],
        ["Important Missions", "Complete 150 secondary tasks in operations."],
        ["Initial Capital", "Earn 100 000 credits in battles."],
        ["Junior Naval Designer", "Research a new ship."],
        ["Junior Supply Officer", "Open 10 containers."],
        ["Legend of the Seas", "Receive any 50 heroic achievements."],
        ["Moneybags", "Earn 1 000 000 credits in battles."],
        ["Naval Constructor", "Research 10 ships."],
        ["Naval Warfare. Arson", "Destroy an enemy ship by setting her on fire."],
        ["Naval Warfare. Flooding", "Destroy an enemy ship by flooding."],
        ["Naval Warfare. Ramming", "Destroy an enemy ship by ramming."],
        ["Naval Warfare. Tactics", "Capture a Key Area or the enemy base."],
        ["Naval Warfare. Weaponry Basics", "Cause 1 000 000 HP of damage to enemy ships."],
        ["Old-Timer", "Successfully complete 125 operations."],
        ["Protector", "Have 120 ships survive in operations."],
        ["Raider", "Destroy 75 key ships and auxiliary ships in operations."],
        ["Ravager", "Destroy 150 key ships and auxiliary ships in operations."],
        ["Secret Instructions", "Complete 900 secondary tasks in operations."],
        ["Senior Supply Officer", "Open 1000 containers."],
        ["Shield", "Have 20 allied ships survive in operations."],
        ["Smooth Supply", "Open at least 1 container a day for 5 days in a row."],
        ["Special Orders", "Complete 450 secondary tasks in operations."],
        ["Supply Officer", "Open 100 containers."],
        ["Veteran", "Win 100 Random Battles."],
        ["Warrior", "Win 50 Random Battles."],
        ["Weather Beaten", "Successfully complete 50 operations."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
