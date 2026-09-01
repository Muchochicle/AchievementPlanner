import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wizardry-proving-grounds-of-the-mad-overlord.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2518960 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wizardry-proving-grounds-of-the-mad-overlord");

test("getPlannerData('wizardry-proving-grounds-of-the-mad-overlord') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for wizardry-proving-grounds-of-the-mad-overlord");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Wizardry: Proving Grounds achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Wizardry: Proving Grounds achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Wizardry: Proving Grounds achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Access", "Collect all key items in the Maze"],
        ["Baker's Dozen", "Recruit 13 Characters"],
        ["Begone!", "Dispel 50 enemies"],
        ["Better Know a Monster", "Fully inspect 20 enemies"],
        ["Boltac's Summer Home", "Spend 50,000 GP at Boltac’s Trading Post"],
        ["Centurion", "Kill 100 enemies with a single character"],
        ["Class Act", "Create or recruit a character of every class"],
        ["Experienced Adventurer", "Reach level 10 with a character"],
        ["Gotta Catch 'Em All", "Fully inspect all enemies"],
        ["Heal Thyself", "Recover 500HP by casting spells"],
        ["It's All Down From Here", "Enter the maze for the first time"],
        ["Master Adventurer", "Reach level 15 with a character"],
        ["Meet and Beat", "Encounter all enemies"],
        ["Novice Adventurer", "Reach level 5 with a character"],
        ["Permanent Resident", "Defeat Murphy's Ghost, a powerful fixed encounter found by searching the hooded-man statue on Floor 1 (around 13E/5N)."],
        ["Personal Growth", "Change the class of a Level 5+ character in the Training Grounds"],
        ["Rod & Ring", "Defeat the fixed Monster Allocation Center encounter on Floor 4, which drops the Rod of Flame and Ring of Death."],
        ["Secret Admirer", "Open 100 secret doors"],
        ["Sleep for a Year", "Stay 52 times at The Adventurers' Inn"],
        ["Stats All, Folks", "Increase all stats of a character to 18"],
        ["Supportive", "Cast party / character buff spells 25 times"],
        ["The Act of Creation", "Create a character in the Training Grounds"],
        ["The Overlord's Honor Guard", "Defeat Werdna and recover the Amulet"],
        ["Tithe is Money", "Donate 40,000 GP amount of gold to Cant"],
        ["TKO", "Put a whole group of enemies to sleep"],
        ["To Fight Another Day", "Run from 10 fights"],
        ["Tricky", "Disarm all trap types"],
        ["Welcome Back", "Raise a character from the dead"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
