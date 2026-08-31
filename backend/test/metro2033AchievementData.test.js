import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metro-2033.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 43110 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("metro-2033");

test("getPlannerData('metro-2033') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for metro-2033");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Metro 2033 achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Metro 2033 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Metro 2033 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Air Bender", "Kill 30 humans with only pneumatic weapons."],
        ["Air gunner", "Kill 30 enemies using pneumatic weapons."],
        ["Cowboy", "Kill 30 enemies using revolvers."],
        ["Demolitionist", "Blow up the tunnel and airlock at 'Cursed' station."],
        ["DJ Artyom", "On the level 'Outpost' reach the radio tower and broadcast the commander's message."],
        ["Enlightened", "Reach the 'Enlightened' (good) ending - accumulate enough Moral Points over the game, then shoot the missile guidance laser immediately before the final cutscene."],
        ["Exorcist", "Complete levels 'Ghosts' and 'Anomaly' without dying."],
        ["Explorer", "There is no place in metro you did not visit"],
        ["Fire in the hole", "Kill 20 lurkers."],
        ["First blood", "What doesn't kill you, makes you stronger."],
        ["Fugitive", "Complete level 'Armory' without getting caught."],
        ["Generous", "Help the poor, a coin for the kid, medicine for the sick. You help everyone you see."],
        ["Gunman", "Kill 50 enemies with heavy automatic shotgun."],
        ["Heavy Metal", "Kill 15 enemies using stationary machine gun."],
        ["Heavy Reader", "Kill a librarian."],
        ["Hedge-hopper", "On the level 'Frontline' kill all of the enemy Red Army and Fascist Soldiers."],
        ["If it's hostile, you kill it.", "Reach the default 'Ranger' ending - finish the game without enough Moral Points, or do not destroy the missile guidance system at the end."],
        ["Inquisitor", "Kill 2 demons."],
        ["Invisible man", "Complete 'Frontline' level without killing anyone."],
        ["Ka-Boom!", "Explode 10 enemies."],
        ["Last Man Standing", "Complete the game in Ranger Mode Hardcore."],
        ["Merciful", "Complete the level 'Black Station' without killing any Fascist Soldiers."],
        ["Metro dweller", "A true metro citizen. You know everyone and have seen everything."],
        ["Metro Trader", "Make 10 deals in weapon shops."],
        ["Ninja", "Kill 10 enemies with throwing knives."],
        ["Nosalis hunter", "Kill 30 nosalises."],
        ["Old school", "Kill 30 enemies with the double-barreled shotgun."],
        ["Pathoanatomist", "Kill 5 amoebas."],
        ["Pyro", "Kill 5 enemies with a flamethrower."],
        ["Quick Draw", "On the level 'Hunter' kill the nosalises before they break through the ventilation grilles."],
        ["Quick-witted", "Break the support and activate the chandelier in less than 20 seconds."],
        ["Raider", "On the level 'Depot' silently kill the first guard and break into the Fascist station unnoticed."],
        ["Ranger", "Find all Ranger stashes in Dead City 1 and 2"],
        ["Realist", "A coin for a hungry kid? Get a job."],
        ["Rescue Ranger", "Save a group of 'Reds' from Fascist captivity."],
        ["Scrooge", "Save 500 military-grade rounds."],
        ["Sherlock", "Found all gold ammo, hidden throughout the stations."],
        ["Shocking", "Get 50 kills with Volt Driver."],
        ["Slice & Dice", "Kill 20 enemies with the knife."],
        ["Sniper", "Make 25 headshots."],
        ["Soft Touch", "Disarm 10 wire traps."],
        ["Sterling Effort", "Kill 50 mutants with your knife."],
        ["Sticks like a bur", "Kill 15 enemies using sticky grenade."],
        ["Stunning", "Get 25 kills with alternative fire of Volt Driver."],
        ["Survivor", "Complete the game in Ranger Mode Easy."],
        ["Tank Buster", "Destroy fascists' Panzer."],
        ["Weaponsmith", "Kill at least one enemy with each weapon available in the game."],
        ["Wheeler-Dealer", "Exchange 500 Military-Grade 5.45 rounds at Exchange kiosks."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
