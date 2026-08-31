import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/satellite-reign.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 268870 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("satellite-reign");

test("getPlannerData('satellite-reign') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for satellite-reign");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Satellite Reign achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Satellite Reign achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Satellite Reign achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Kills One Explosion", "Get 10 kills with a single explosion"],
        ["10 Stealth Kills in a row", "Kills in a row without being seen being suspicious"],
        ["100 Kills By Hijacked", "Use Hijacked to kill 100 Enemies"],
        ["15 Stealth Kills in a row", "Kills in a row without being seen being suspicious"],
        ["5 Stealth Kills in a row", "Kills in a row without being seen being suspicious"],
        ["CBD Pacifist", "Make it to the CBD without getting blood on your hands"],
        ["Cold War", "Kill 100 Uzy Korps"],
        ["Downtown Pacifist", "Make it to Downtown without getting blood on your hands"],
        ["Dracogenics Pacifist", "Make it to the Dracogenics district without getting blood on your hands"],
        ["Easy Money: CBD", "Place a syphon on every ATM in the CBD"],
        ["Easy Money: Downtown", "Place a syphon on every ATM in the Downtown District"],
        ["Easy Money: Grid", "Place a syphon on every ATM in the Grid District"],
        ["Easy Money: Industrial", "Place a syphon on every ATM in the Industrial District"],
        ["Enter Dracogenics", "Enter Dracogenics"],
        ["Enter the CBD", "Enter the CBD"],
        ["Enter The Grid", "Enter The Grid"],
        ["Enter the Industrial area", "Enter the Industrial area"],
        ["Fire the CEO", "With extreme prejudice."],
        ["First Blood", "Killed a Corp Soldier"],
        ["Fish in a Barrel", "Kill 100 Civilians"],
        ["Grid Pacifist", "Make it to The Grid without getting blood on your hands"],
        ["Holy War", "Kill 100 Eternals"],
        ["I know Kung Fu", "50 Melee Kills"],
        ["Industrial Pacifist", "Make it to the Industrial District without getting blood on your hands"],
        ["Infinite Lives", "Find and capture all 5 Lives devs for cloning"],
        ["Invisible Death", "Kill 20 enemies while cloaked"],
        ["Key Logger", "Access all data terminals in the city"],
        ["Master of Coin", "Place a syphon on every ATM in the city"],
        ["No Big Brother: CBD", "Destroy all CCTV cameras in the CBD"],
        ["No Big Brother: Downtown", "Destroy all CCTV cameras in Downtown"],
        ["No Big Brother: Dracogenics", "Destroy all CCTV cameras in the final boss area"],
        ["No Big Brother: Grid", "Destroy all CCTV cameras in the Grid District"],
        ["No Big Brother: Industrial", "Destroy all CCTV cameras in the Industrial District"],
        ["No Big Brother: Tutorial", "Destroy all cameras in the Tutorial"],
        ["No More Lives", "Found and killed all 5 Lives devs"],
        ["Science, bitch!", "Acquire ten scientists"],
        ["Script Kiddie: CBD", "Access all data terminals in the CBD"],
        ["Script Kiddie: Downtown", "Access all data terminals in the Downtown District"],
        ["Script Kiddie: Grid", "Access all data terminals in the Grid District"],
        ["Script Kiddie: Industrial", "Access all data terminals in the Industrial District"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
