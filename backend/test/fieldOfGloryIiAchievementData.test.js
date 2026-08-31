import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/field-of-glory-ii.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 660160 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("field-of-glory-ii");

test("getPlannerData('field-of-glory-ii') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for field-of-glory-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Field of Glory II achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Field of Glory II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Field of Glory II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Artillerist", "Made a unit drop cohesion from artillery fire"],
        ["Battle Winner", "You won your first battle!"],
        ["Campaigner", "Won a campaign"],
        ["Challenger", "Created a Multiplayer challenge"],
        ["Deity", "Won a battle on Deity difficulty "],
        ["Elephant Bane", "Routed enemy elephants by shooting"],
        ["Emperor", "Won a battle on Emperor difficulty"],
        ["Epic Campaigner", "Won a 15 battle campaign"],
        ["Flanker", "Made an enemy unit autodrop cohesion from a flank charge"],
        ["Freedom Fighter", "Won a battle against Romans on at least Legate difficulty"],
        ["Good Loser", "Fought a losing Multiplayer battle to completion without conceding"],
        ["Hero", "Rallied a routing unit with a general"],
        ["Horse Lord", "Won a battle with a cavalry army on at least Legate difficulty"],
        ["Legate", "Won a battle with Romans on at least Legate difficulty"],
        ["Lucky", "Passed a cohesion test when only double six would have passed"],
        ["Nemesis", "Killed an enemy C-in-C"],
        ["Spartacus", "Won a battle with a Slave Revolt army against Romans"],
        ["Strategos", "Won a battle with a pike army on at least Legate difficulty"],
        ["Unlucky", "Suffered a double cohesion drop which could only occur on a roll of snake eyes"],
        ["Victor", "Won a Multiplayer battle"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
