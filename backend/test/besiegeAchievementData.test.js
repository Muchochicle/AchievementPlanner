import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/besiege.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 346010 (fetched through this app's own services/steamApi.js).
// 4 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("besiege");

test("getPlannerData('besiege') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for besiege");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Besiege achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Besiege achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Besiege achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Pirate's Life", "Destroy the cargo ship and collect the strange fragment in Serpent's Crest (DLC)"],
        ["A Swift Siege", "Complete a campaign level under 2 seconds"],
        ["A Whole New World", "Build your first level using the level editor"],
        ["All Under Control", "Put out a burning block using water"],
        ["Aranea Completionist", "Complete every Secondary Objective across The Broken Beyond campaign. (The Broken Beyond DLC)"],
        ["As Mutton", "Hit a sheep with the Standing Stone's laser"],
        ["Atlas' Challenge", "Lift the boulder in Stock Tower 10 units off the ground"],
        ["Autilis Explorer", "Complete All Secondary Objectives in The Splintered Sea (DLC)"],
        ["Automaton", "Complete a level without pressing a key"],
        ["Bandicoot", "Destroy all the crates in Ambush and collect the strange fragment"],
        ["Birbecue", "Kill 100 birds with fire"],
        ["Bomb Battlefield", "Beat Old Howl Battlefield while having blown up all the bombs"],
        ["Bonus Round", "Complete a player-made map"],
        ["Carnage", "Defeat 1000 AI units"],
        ["Chained Chomp", "Lure a shark into the cage in Feeding Frenzy (DLC)"],
        ["Cold as Ice", "Break the strange fragment out of the ice and collect it in Relict Frost"],
        ["Completionist", "Complete All Secondary Objectives in the campaign"],
        ["Conqueror", "Complete the Campaign"],
        ["Demolition Expert", "Complete Kahraz village in less than 30 seconds"],
        ["Duke of the Skies", "Conquer Tolbrynd"],
        ["Emperor of Sand", "Complete Krolmar"],
        ["Freezing Frontier", "Reach enough altitude to freeze your machine"],
        ["Frozen Goods", "Destroy all the crates in The Frozen Path and collect the strange fragment"],
        ["Golden Eye", "Retrieve the strange fragment"],
        ["Gotta Go Fast", "Travel at speeds faster than is sensible"],
        ["Hail Mary", "Land on the planet without taking any damage and without using any aerodynamic blocks. (The Broken Beyond DLC)"],
        ["Hostile Negotiations", "Kill all the knights in The Duke's Plea, except the Duke's diplomat, and collect the strange fragment"],
        ["Ironweaver", "Destroy all the crates in Ironweave Passage and collect the cube fragment (DLC)"],
        ["Leave None Alive", "Kill all the Duke's knights in Aras' Refuge"],
        ["Lord of the Lyre", "Conquer Ipsilon"],
        ["Master of Tides", "Conquer the Splintered Sea (DLC)"],
        ["Mine or Inconvenience", "Open the chests and collect the strange fragment in Webley's Pass (DLC)"],
        ["Mortissimo", "Make the monks in Grand Crystal play a secret melody"],
        ["Piloting 101", "Destroy all the Scout Balloons in Scouts of Tolbrynd"],
        ["Professional Hunchback", "Ring all 3 Awakening Bells at the same time"],
        ["Pyromaniac", "Set yourself on fire"],
        ["Raider", "Locate and collect the strange fragment in The Last Stand"],
        ["Raw Fodder", "Beat Queens Fodder without using fire or explosives"],
        ["Sandworm", "Destroy all the crates in Doon Canyon Run and collect the cube fragment. (The Broken Beyond DLC)"],
        ["Sharing is caring", "Share your machine with the whole world"],
        ["Shell Shock", "Find a way to open the shell in The Devouring Pit and collect strange fragment from inside (DLC)"],
        ["Spawn Camper", "Destroy the entire army in Midland Patrol, without destroying any tents"],
        ["Supply Chop", "Destroy all the supply crates in The Duke's Dear Freighters and collect the strange fragment"],
        ["Sword Buster", "Find a way to retrieve the strange fragment in Argus' Grounds"],
        ["Target Practice", "Get the axe throwers in Penitent Tower to hit one of the training targets"],
        ["The copy-cat", "Subscribe and download someone else's machine"],
        ["The Frozen Monarch", "Conquer Valfross"],
        ["The Handyman", "Complete a level with a machine of 6 block points or less"],
        ["Through and Through", "Complete the Mountain Barrier without explosives"],
        ["Thunderstruck", "Get hit by lightning"],
        ["Tree Hugger", "Complete Tree of Akhmora without using Projectiles"],
        ["Tyrant of The Void", "Conquer The Broken Beyond, the DLC's campaign."],
        ["Up Hill Struggle", "Destroy the monument and collect the strange fragment in Lyre Peak"],
        ["Where's Woolly?", "Destroy the impostor in Solomon's Flock"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 4 hidden Besiege achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Sandworm", "Hail Mary", "Tyrant of The Void", "Aranea Completionist"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
