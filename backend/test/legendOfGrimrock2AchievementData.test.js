import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/legend-of-grimrock-2.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 251730 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("legend-of-grimrock-2");

test("getPlannerData('legend-of-grimrock-2') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for legend-of-grimrock-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Legend of Grimrock 2 achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Legend of Grimrock 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Legend of Grimrock 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice Alchemist", "Mix a total of 10 potions"],
        ["Apprentice Wizard", "Cast 25 spells"],
        ["Archmage", "Cast 500 spells"],
        ["Backstabber", "Defeat a monster with a backstab attack"],
        ["Booty Addict", "Dig up three treasure chests"],
        ["Cartographer", "Visit all levels"],
        ["Castle Crasher", "Enter the Castle"],
        ["Chop Chop", "Find Bane"],
        ["Code Cracker", "Open the door to the Archives"],
        ["Doin’ It Old School", "Complete the game with old school mode"],
        ["Dragon Slayer", "Defeat the Lindworm"],
        ["Elementary", "Collect an elemental essence"],
        ["Enlightenment", "Enter the Shrine of Balance"],
        ["Expert", "Max out a skill"],
        ["Explorer", "Visit 10 levels"],
        ["Extreme Gardening", "Defeat the Viper Roots"],
        ["Fist Fighter", "Deal a killing blow with unarmed attack"],
        ["Full Monty", "Kill a monster by throwing pants at it"],
        ["Fumigation", "Defeat Herder's Den"],
        ["Gluttony", "Reach level 10 with a farmer"],
        ["Go the Extra Mile", "Travel 10000 tiles"],
        ["Golden Boy", "Open 5 gold locks"],
        ["Gotta Go Fast", "Summon the Viper Roots in under 6 minutes"],
        ["Guru", "Max out three skills"],
        ["Hallowed Ground", "Open the gate to the Cemetery"],
        ["Hard as a Rock", "Collect and wear full set of Meteor armor (6 pieces)"],
        ["Hard Boiled", "Complete the game with hard difficulty setting"],
        ["Having a Gneiss Time", "Defeat the Summon Stones"],
        ["Holy Diver", "Dive 250 tiles"],
        ["I Have the Power!", "Collect and wear archmage's uniform (4 pieces)"],
        ["Identity Crisis", "Polymorph 10 times"],
        ["Insane Ironman", "Complete the game with Ironman and Single-use Crystals modes turned on"],
        ["Island Master", "Enter the Nexus"],
        ["Like a Shadow", "Collect and wear rogue's wardrobe (5 pieces)"],
        ["Marksman", "Perform 500 missile or throwing weapon attacks"],
        ["Master Alchemist", "Mix a total of 50 potions"],
        ["Master of the Elements", "Collect four elemental essences"],
        ["Master Wizard", "Cast 250 Spells"],
        ["Mine Sweeper", "Enter the Crystal Mines"],
        ["Monster Killer", "Kill 250 monsters"],
        ["Pest Control", "Defeat the Ratling Boss"],
        ["Piece of the Pie", "Find the pie"],
        ["Relic", "Dig three times on a single hidden spot in the Barren Desert to unearth the Cube relic - it also counts as a secret, and the clue is shown in one of the ending cinematics."],
        ["Rest in Peace", "Defeat the Wormbound brothers"],
        ["Rodman", "Catch 25 fish"],
        ["Sage", "Learn 15 spells"],
        ["Secret Searcher", "Find 50 secrets"],
        ["Secret Sniffer", "Find 25 secrets"],
        ["Secret Spotter", "Find 10 secrets"],
        ["Seeker of Secrets", "Find all secrets"],
        ["Shiniest Knight of Them All", "Collect and wear full set of Crystal armor (6 pieces)"],
        ["Skull Snatcher", "Find 8 skulls"],
        ["Snake Charmer", "Enter the Pyramid of Umas"],
        ["Specialist", "Perform 100 power attacks"],
        ["Swordsman", "Perform 500 melee weapon attacks"],
        ["Telefragged", "Kill a monster by teleporting on it"],
        ["Treasure Hunter", "Dig up all treasure chests"],
        ["Turn off the Heat", "Defeat a Magma Golem"],
        ["Unstoppable", "Kill a monster with a single blow"],
        ["Watcher of the Skies", "Assemble the Meteor Hammer"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
