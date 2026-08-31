import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/legend-of-grimrock.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 207170 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("legend-of-grimrock");

test("getPlannerData('legend-of-grimrock') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for legend-of-grimrock");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Legend of Grimrock achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Legend of Grimrock achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Legend of Grimrock achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice Alchemist", "Mix 10 potions"],
        ["Apprentice Wizard", "Cast 25 spells"],
        ["Archmage", "Cast 500 spells"],
        ["Backstabber", "Backstab a monster"],
        ["Buddies With Toorum", "Give Toorum a hand"],
        ["Checkered Room", "Solve the Checkered room puzzle"],
        ["Dismantler", "Find Dismantler"],
        ["Doin' It Old School", "Complete the game with old school mode"],
        ["Dungeon Hero", "Survive the invasion of white blobs"],
        ["Dungeon Runner", "Finish first level in under 4 minutes"],
        ["Enter The Prison", "Get into the Prison"],
        ["Enter The Vault", "Find entrance to the Vault of Dismantler"],
        ["Go the Extra Mile", "Travel 10000 tiles"],
        ["Hard Boiled", "Complete the game with hard difficulty setting"],
        ["Here's Johnny", "Open all iron doors"],
        ["I Use Gravity As a Weapon", "Kill a monster by dropping or teleporting on it"],
        ["I'm the Bugman!", "Collect and wear full set of chitin armor (4 pieces)"],
        ["Knight in a Shining Armor", "Collect and wear full set of Valor armor (6pieces)"],
        ["Like a Sardine In a Can", "Collect and wear full set of plate mail (5 pieces)"],
        ["Marksman", "Perform 500 ranged weapon attacks"],
        ["Master Alchemist", "Mix 50 potions"],
        ["Master of the Dungeon", "Complete the game"],
        ["Master Wizard", "Cast 250 Spells"],
        ["Monster Killer", "Kill 250 monsters"],
        ["Ninja Style", "Collect and wear lurker's wardrobe (4 pieces)"],
        ["Ogre Slayer", "Kill your first ogre"],
        ["Piece of the Pie", "Find the pie"],
        ["Pitfall", "Jump 25 times into a pit"],
        ["Secret Searcher", "Find 50 secrets"],
        ["Secret Sniffer", "Find 25 secrets"],
        ["Secret Spotter", "Find 10 secrets"],
        ["Seeker of Secrets", "Find all secrets"],
        ["Skill Mastery", "Obtain level 50 in any skill"],
        ["Skull Snatcher", "Find 5 skulls"],
        ["Slimed", "Survive the slimes"],
        ["Stoner", "Throw a rock 100 times"],
        ["Swordsman", "Perform 500 melee weapon attacks"],
        ["Tavern Brawler", "Perform 250 unarmed attacks"],
        ["Treasure Hunter", "Find all treasures"],
        ["Zhandul's Orb", "Find Zhandul's Orb"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
