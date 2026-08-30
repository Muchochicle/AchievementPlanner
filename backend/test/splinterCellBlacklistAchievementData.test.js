import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/splinter-cell-blacklist.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 235600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("splinter-cell-blacklist");

test("getPlannerData('splinter-cell-blacklist') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for splinter-cell-blacklist");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Tom Clancy's Splinter Cell Blacklist achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Tom Clancy's Splinter Cell Blacklist achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Tom Clancy's Splinter Cell Blacklist achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4th Echelon Commendation", "Complete every single player mission on Realistic difficulty"],
        ["4th Echelon Officer", "Complete every single player mission on Perfectionist difficulty"],
        ["4th Echelon Status Confirmed", "Complete the single player campaign"],
        ["Ambush Escaped", "Complete Insurgent Stronghold on any difficulty"],
        ["American Consumption Prevented", "Complete American Consumption on any difficulty"],
        ["American Freedom Averted", "Complete Transit Yards on any difficulty"],
        ["American Fuel Engaged", "Complete LNG Terminal on any difficulty"],
        ["Asset Retrieval", "Complete Safehouse on any difficulty"],
        ["C&C Optimized", "Fully upgrade your headquarters"],
        ["Distraction Tactician", "Call an enemy over, then take them down undetected when they investigate"],
        ["Enhanced Lethality Demonstrated", "Using Mark & Execute, take down 6 enemies in under 14 seconds"],
        ["Evidence Concealed", "Hide 5 bodies in containers"],
        ["Extraction Operator", "Complete all 4th Echelon Missions from Charlie Cole"],
        ["Hostages Secured", "Save the hostages in the Transit Yards"],
        ["Hostile Shield Secured", "Take down a Shielded Infantryman hand to hand and take his shield"],
        ["Hunter Operator", "Complete all 4th Echelon Missions from Andriy Kobin"],
        ["Infiltration Operator", "Complete all 4th Echelon Missions from Anna Grímsdóttir"],
        ["Infiltration/Interrogation", "Complete Detention Facility on any difficulty"],
        ["Iranian Intel Retrieved", "Complete Special Missions HQ on any difficulty"],
        ["Mission Footprint Zero", "Complete a single player mission without being detected during gameplay"],
        ["No Kill Option Engaged", "Complete the single player campaign without killing anyone as Sam Fisher"],
        ["Paladin Restored", "Survive the attack on Paladin"],
        ["Tactical Style: Assault", "Master Assault playstyle on 7 missions"],
        ["Tactical Style: Ghost", "Master Ghost playstyle on 7 missions"],
        ["Tactical Style: Panther", "Master Panther playstyle on 7 missions"],
        ["Terrorist Factor Turned", "Complete Private Estate on any difficulty"],
        ["Tracker Placed", "Complete Abandoned Mill on any difficulty"],
        ["Tri-Rotor Functionality", "Disable a security device using the Tri-Rotor"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
