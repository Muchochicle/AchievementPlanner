import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-3.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238820 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("battlefield-3");

test("getPlannerData('battlefield-3') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Battlefield 3 achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Battlefield 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Battlefield 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1st Loser", "2nd MVP in a ranked match"],
        ["AAs revenge", "Destroyed an air vehicle using the AA jeeps"],
        ["Bite your finger", "Found the secret reptile"],
        ["Capture The Flag", "Captured one flag while playing CTF"],
        ["Colonel", "Rank 45 achieved!"],
        ["Complete Warrior", "Got a kill with the following weapons in a single life: Assault Rifle, Jet, Tank"],
        ["Deadly tools", "Without dying, got a kill with a Carbine, Pistol and Rocket Launcher"],
        ["Death from above", "Got one kill with the Gunship"],
        ["Decorated", "Received one of each ribbon in the game"],
        ["Destroyer", "Got 10 kills each with Tank destroyers and Mobile Artilleries"],
        ["Dominator", "Won a round in Conquest Domination"],
        ["Dropship", "Destroyed the Gunship"],
        ["Extreme Hoarder", "Picked up 50 weapons in Scavenger mode"],
        ["Grinding the Crack", "Fall off the edge of the map on the Ziba Tower map (Close Quarters expansion)."],
        ["Gunslinger", "Got 10 kills with each of the ten Back to Karkand weapons"],
        ["Handyman", "Unlocked all xbow parts"],
        ["Heavy Lifter", "Killed an enemy after successfully paradropping a vehicle"],
        ["Home made javelin", "Destroyed an enemy vehicle using the xbow"],
        ["Infantry Efficiency", "Received all 4 weapon efficiency ribbons"],
        ["It's better than nothing!", "3rd MVP in a ranked match"],
        ["Its no sidecar", "Got a kill from the passenger position on a motorcycle"],
        ["Jaws", "Took a swim in the Oman Hotel swimming pool"],
        ["Like a Boss", "Got a kill with the skid loader"],
        ["M.I.A", "Took your first enemy Dog Tag"],
        ["Man of Calibre", "Completed a round of Gun Master"],
        ["Most Valuable Player", "MVP in a ranked match"],
        ["Offroad", "Got one kill with the Quad bike"],
        ["Pocket full of death", "Without dying, got a kill with xbow, primary weapon, and hand grenade"],
        ["Show of Force", "Got 10 kills with all ten CQ weapons"],
        ["Superiority", "Won one round of Tank Superiority"],
        ["Support Efficiency", "Received all 4 support efficiency ribbons"],
        ["Third Tour", "Got a kill with each of the following vehicles: the BTR-90, DPV and F-35."],
        ["Transport Pilot", "Transported a flag carrier in an air vehicle in CTF"],
        ["Vehicle Warfare", "Received all 3 vehicle warfare ribbons"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
