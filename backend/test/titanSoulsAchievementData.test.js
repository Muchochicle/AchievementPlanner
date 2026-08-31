import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/titan-souls.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 297130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("titan-souls");

test("getPlannerData('titan-souls') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for titan-souls");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Titan Souls achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Titan Souls achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Titan Souls achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Into the Fire", "Open the second Sealed Gate"],
        ["A Collision of Souls", "Knock yourself out in the battle for the Titan Soul"],
        ["Aerodynamics", "Beat the game in under 20 minutes"],
        ["Beating the Yeti", "Finish in under 10 seconds..."],
        ["Bomberman", "Drop a bomb on the Lava Blob Titan's head"],
        ["Brain Freeze", "Kill the Brain with a flaming arrow"],
        ["Ca$h Mon£y", "Produce 50 coins in the Chest fight"],
        ["COME AT ME BRO", "Kill the Rolling Titan in under 5 seconds"],
        ["Demo Man", "Kill the Knight after destroying all pillars"],
        ["Dental Plan", "Remove all teeth from the Mountain Titan then kill it"],
        ["Drug Trial", "Succumb to the effect of spores for 30 seconds total"],
        ["First Blood", "Slay a Titan"],
        ["Hard Bizkit", "Beat the game without rolling rolling rolling (in No Roll mode)"],
        ["Iron God", "Slay all Titans in Iron Mode"],
        ["Iron Human", "Beat the game in Iron Mode"],
        ["Iron Titan", "Beat the game in Iron Mode with New Game+"],
        ["Laser Eye Surgery", "Kill the Eye Cube while pulling back the arrow"],
        ["Leak Spin", "Kill the Skull Titan as it spins"],
        ["New Game+", "Beat Hard Mode"],
        ["Out of the Frying Pan...", "Open the first Sealed Gate"],
        ["Shadow of the Colossus", "Kill the Broken Statue Titan while pulling back the arrow"],
        ["Short Back and Sides", "Cut all the vines off the Plant Titan"],
        ["Slimeball", "Kill the Sludge titan with no more possible divisions"],
        ["The Switch", "Trigger the Guardian's switches with the wrong hands and kill it"],
        ["Titan Soul", "Beat the Game"],
        ["Titanic", "Destroy all icebergs"],
        ["TRUTH", "???"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
