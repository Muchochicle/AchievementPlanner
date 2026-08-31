import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-5.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238810 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("battlefield-5");

test("getPlannerData('battlefield-5') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Battlefield V achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Battlefield V achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Battlefield V achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Call ’em in!", "In Multiplayer, as a squad leader call in 2 reinforcements in a round"],
        ["Combat Engineer", "In Multiplayer, build 10 fortifications in a round"],
        ["Death from Above", "In Multiplayer, destroy 5 manned stationary weapons with a Airplane"],
        ["Eager Beaver", "Earn 150,000 score as a Player"],
        ["Elite", "Earn 500,000 score as a Player"],
        ["Enemy Attrition", "In Multiplayer, get 10 kills in a round"],
        ["Fender Bender", "In Multiplayer, roadkill 5 enemies"],
        ["Globetrotter", "Play a round of Conquest on each of the launch maps"],
        ["Grim Reaper", "In Multiplayer, kill 30 enemies "],
        ["Heads Down", "In Multiplayer, fully suppress 5 enemies"],
        ["Hoist the Flag", "In Multiplayer, capture 10 flags in Frontlines"],
        ["Jack of All Trades", "Earn 100,000 score as an Assault, Medic, Support and Recon"],
        ["Last Man Standing", "In Multiplayer, have 3 squad members spawn on you"],
        ["Lovely", "Complete Under No Flag War Story"],
        ["Not On My Watch", "In Multiplayer, perform 10 squad revives"],
        ["Off-hand", "In Multiplayer, kill 10 enemies with secondary weapons in a round "],
        ["Ou La Mort", "Complete Tirailleur War Story"],
        ["Sins of the Fathers", "Complete the War Stories Under No Flag, Nordlys & Tirailleur on Hardcore "],
        ["Store fuglar fanga ingi flugor", "Complete Nordlys War Story"],
        ["Storyteller", "Complete the War Stories Under No Flag, Nordlys & Tirailleur on Medium "],
        ["Veteran", "Complete the War Stories Under No Flag, Nordlys & Tirailleur on Hard "],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
