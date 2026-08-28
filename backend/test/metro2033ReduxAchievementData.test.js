import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metro-2033-redux.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 286690 (fetched through this app's own services/steamApi.js).
// 48 of 49 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement(s) ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("metro-2033-redux");

test("getPlannerData('metro-2033-redux') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for metro-2033-redux");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Metro 2033 Redux achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Metro 2033 Redux achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 officially-described Metro 2033 Redux achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "2033_max_33",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Metro 2033 Redux has 1 hidden achievement(s)");

    const officialAchievements = [
        ["Air Bender", "Kill 50 humans with pneumatic weapons."],
        ["Blogger", "Complete all 51 of Artyom's hidden Diary pages."],
        ["Cowboy", "Kill 100 enemies using revolvers."],
        ["Demolitionist", "Blow up the tunnel and airlock at CURSED STATION."],
        ["DJ Artyom", "On the level OUTPOST reach the radio tower and broadcast the commander's message."],
        ["Enlightened", "Find the truth."],
        ["Fire in the hole", "Kill 20 lurkers."],
        ["Fire!", "Kill 30 enemies with flame grenades."],
        ["Generous", "Help the poor, a coin for the kid, medicine for the sick. You help everyone you see."],
        ["Gunman", "Kill 100 enemies with shotguns."],
        ["Heavy Reader", "Kill a librarian."],
        ["Hedge-hopper", "On the level FRONTLINE kill all of the enemy Red Army and Fascist Soldiers."],
        ["Hunter", "Kill 200 Mutants."],
        ["If it's hostile, you kill it.", "Become a true ranger."],
        ["Inquisitor", "Kill 2 demons."],
        ["Invisible man", "Complete FRONTLINE level without killing anyone."],
        ["Ka-Boom!", "Explode 30 enemies."],
        ["Manhattan Project", "Spend 60 seconds in a Radiation Hotspot."],
        ["Marksman", "Kill 15 human enemies with Headshots from at least 30 meters' distance."],
        ["Merciful", "Complete the level BLACK STATION without killing or knocking out any enemies."],
        ["Metro Trader", "Make 30 deals in weapon shops."],
        ["Ninja", "Kill 30 enemies with throwing knives."],
        ["Nosalis hunter", "Kill 100 nosalises."],
        ["Pathoanatomist", "Kill 5 amoebas."],
        ["Pyro", "Kill 30 enemies with a flamethrower."],
        ["Quick Draw", "On the level HUNTER kill the nosalises before they break through the ventilation grilles."],
        ["Raider", "On the level DEPOT silently kill the first guard and break into the Fascist station unnoticed."],
        ["Ranger", "Find all Ranger stashes in Dead City."],
        ["Rescue Ranger", "Save a group of Reds from Fascist captivity."],
        ["Scrooge", "Save 1000 military-grade rounds."],
        ["Shocking", "Get 30 kills with Hellbreath."],
        ["Slice & Dice", "Kill 30 human enemies in close combat."],
        ["Snake", "Stealthily kill 15 Enemies."],
        ["Sniper", "Kill 30 human enemies with headshots."],
        ["Soft Touch", "Disarm 15 wire traps."],
        ["Spartan 2033", "Complete the game in Spartan Mode."],
        ["Spider hunter", "Kill 10 Spiders."],
        ["Stunning", "Knock 30 human enemies out in close combat."],
        ["Survivor 2033", "Complete the game in Survival Mode."],
        ["Tank", "Kill 10 Enemies in a row without taking any damage."],
        ["Thief", "Open 15 locked safe boxes."],
        ["Tonic Man", "Use a Medkit 75 times."],
        ["Trigger Happy", "Kill 100 enemies with assault rifles."],
        ["Warrior", "Kill 100 Human Enemies."],
        ["Watchman hunter", "Kill 50 Watchmen."],
        ["Weaponsmith", "Kill at least one enemy with each weapon available in the game"],
        ["Wheeler-Dealer", "Exchange 500 Military-Grade 5.45 rounds at Exchange kiosks."],
        ["Who goes there?", "Wipe your Gas Mask 20 times."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Metro 2033 Redux achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["2033_max_33", "Toast!"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
