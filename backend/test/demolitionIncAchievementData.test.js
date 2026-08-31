import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/demolition-inc.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 98600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("demolition-inc");

test("getPlannerData('demolition-inc') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for demolition-inc");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Demolition Inc. achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Demolition Inc. achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Demolition Inc. achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Amateur Driver", "You drove a car for 10s."],
        ["Back to Work - All Stars", "Got all stars in the Back to Work campaign (Level and Weapon Pack)"],
        ["Back to Work - Complete", "Completed all cities in the Back to Work campaign (Level and Weapon Pack)"],
        ["Back to Work - One City", "Destroyed a city in the Back to Work campaign (Level and Weapon Pack)"],
        ["Barbeque", "You grilled 10 cows."],
        ["Bulldozer", "You bulldozed 10 buildings."],
        ["Car Collector I", "Wrecked 20 cars."],
        ["Car Collector II", "Wrecked 100 cars."],
        ["Car Collector III", "Wrecked 500 cars."],
        ["Car Jump I", "You jumped 400m."],
        ["Car Jump II", "You jumped 500m."],
        ["Car Jump III", "You jumped 600m."],
        ["Chef", "You grilled 30 cows."],
        ["City Dominator", "You levelled every city."],
        ["City Eater", "You levelled a city."],
        ["City Muncher", "You levelled a city with all stars."],
        ["Construction, Inc.", "You created and published your own level to the Steam Workshop"],
        ["Cosmic Bulldozer", "You destroyed 30 buildings."],
        ["Downloading, Inc.", "You downloaded and completed a published Steam Workshop level"],
        ["Drift King", "You drifted with a car 60s."],
        ["Earth Crusher", "You levelled every city with all stars."],
        ["Expert Driver", "You drove a car for 60s."],
        ["First Things First", "You managed to finish your first mission."],
        ["Freshman", "Just started the game."],
        ["Galactic Bulldozer", "You destroyed 100 buildings."],
        ["Gourmet", "You grilled 100 cows."],
        ["Magnetism I", "Earned 50,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)"],
        ["Magnetism II", "Earned 500,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)"],
        ["Magnetism III", "Earned 1,500,000 dollars with Car Magnet while it's active. (Level and Weapon Pack)"],
        ["Oily wheels", "You drifted with a car 10s."],
        ["Professional Driver", "You drove a car for 20s."],
        ["Rainmaker", "Started 10 Asteroid Hails (Level and Weapon Pack)"],
        ["Slider", "You drifted with a car 30s."],
        ["Sophomore", "Second thing done!"],
        ["Squad Leader I", "Drove 3 cars with Car Swarm for 5s. (Level and Weapon Pack)"],
        ["Squad Leader II", "Drove 3 cars with Car Swarm for 10s. (Level and Weapon Pack)"],
        ["Squad Leader III", "Drove 3 cars with Car Swarm for 15s. (Level and Weapon Pack)"],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
