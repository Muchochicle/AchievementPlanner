import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crysis-3-remastered.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2096610 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crysis-3-remastered");

test("getPlannerData('crysis-3-remastered') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for crysis-3-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Crysis 3 Remastered achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Crysis 3 Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Crysis 3 Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Flawless Getaway", "Complete Welcome to the Jungle"],
        ["Arrow to the Knee!", "Kill an enemy with an arrow to the leg - a Skyrim reference."],
        ["Bang For The Buck", "Kill a deer using an explosive arrow."],
        ["Be a Pro, use a Bow!", "Kill 10 enemies with every arrow type"],
        ["Belly of the Beast", "Complete Only Human"],
        ["Breaking the Lore", "Retrieve all CELL Intel"],
        ["Bring it On", "Complete the campaign on Veteran difficulty"],
        ["Brink of Apocalypse", "Complete Red Star Rising"],
        ["Can You Hear Me Now", "Disable the Nanosuit Jammer in the mission 'Welcome to the Jungle'."],
        ["Clever Girl!", "Stealth-kill a Ceph Stalker."],
        ["Geared-up", "Unlock all weapon attachments"],
        ["Halfway to Hell", "Complete 3 of 7 levels on Supersoldier difficulty"],
        ["Hunter-Gatherer", "Retrieve 10 arrows from pinned enemies"],
        ["I'll Have That!", "Rip off and use all alien weapon types"],
        ["Improviser", "Kill two enemies in one strike using the environment."],
        ["Inside Job", "Kill 10 enemies using hacked sentry guns"],
        ["Maximum Strength", "Kill 25 enemies using only the Nanosuit's enhanced powers instead of guns"],
        ["Nanosuit Ninja", "Perform 20 stealth kills without alerting nearby enemies."],
        ["Nanosuit Veteran", "Complete 3 of 7 levels on Veteran difficulty"],
        ["Off the Grid", "Complete The Root of All Evil"],
        ["Perk Of The Job", "Save a Nanosuit module package"],
        ["Ping Pong!", "Kill all the Pingers in the mission 'Only Human'."],
        ["Poltergeist", "Kill 10 enemies with thrown objects without being detected."],
        ["Post-Human Warrior", "Kill 10 enemies in a single Supercharge boost"],
        ["Professional Superhero", "Complete the campaign on Supersoldier difficulty"],
        ["Roadkill", "Crush 5 enemies with the Buggy in the mission 'Red Star Rising'."],
        ["Staying Sharp", "Complete Tutorial"],
        ["Stick Around", "Pin 10 enemies to walls with Predator Bow arrows."],
        ["Suited-up", "Upgrade all Nanosuit modules to Maximum level"],
        ["Taste Of Your Own Medicine", "Kill 25 enemies while supercharged"],
        ["The Gibson", "Complete 20 hacking challenges"],
        ["The True Measure of a Hero", "Complete Gods and Monsters"],
        ["Turning the Tide", "Complete Safeties Off"],
        ["Welcome to the Jungle!", "Complete Post-Human"],
        ["White Rider", "Surf a donut down the river for 20 seconds in the mission 'The Root of All Evil'."],
        ["Who Needs Rockets?", "Take out an attack helicopter with the Predator Bow in the mission 'Post-Human'."],
        ["World Saver", "Finish the campaign in any difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
