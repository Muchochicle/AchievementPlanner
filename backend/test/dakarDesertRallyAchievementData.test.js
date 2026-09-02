import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dakar-desert-rally.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1839940 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dakar-desert-rally");

test("getPlannerData('dakar-desert-rally') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for dakar-desert-rally");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Dakar Desert Rally achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Dakar Desert Rally achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Dakar Desert Rally achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AL ULA Winner", "Finish 1st in every stage in DAKAR AL ULA 2020."],
        ["AL WAJH Winner", "Finish 1st in every stage in DAKAR AL WAJH 2020."],
        ["Austrian Endurance", "Get all KTM Bikes in the game."],
        ["Born to be wild", "Drive for 6000Km with a Bike."],
        ["Bremens House", "Get all Bogward cars in the game."],
        ["Careful", "Finish a stage in 1st place without crashing."],
        ["Clean Driving", "Complete an event without taking damage."],
        ["Connoisseur", "Get all Peugeot 3008 DKR cars in the game."],
        ["Cutting Edge", "Get all Husqvarna Bikes in the game."],
        ["Dakar Competitor", "Finish an event in Professional Game Mode."],
        ["Dakar Legend", "Finish an event in Simulation Game Mode."],
        ["Deja Vu", "Drift for more than 5 seconds with any vehicle."],
        ["Desert Autobahn", "Reach 200km/h in any vehicle while driving on sand."],
        ["Desert Plains", "Drive for 6000Km with a Quad."],
        ["Desert Wings", "Get all vehicles sponsored by Red Bull."],
        ["DESERT WINGS Winner", "Finish 1st in every stage in DESERT WINGS RALLY."],
        ["Dune Buggy Aficionado", "Get all MD Optimus Evo 3s in the game."],
        ["First Bike", "Get your first Bike."],
        ["First Car", "Get your first Car."],
        ["First of Many", "Finish a stage in first place."],
        ["First Quad", "Get your first Quad."],
        ["First SxS", "Get your first SxS."],
        ["First Truck", "Get your first Truck."],
        ["For the Motherland", "Get all Kamaz in the game."],
        ["Forever Speedy", "Finish first in all 2020 events playing as Paulo Gonçalves (Sport, Professional, and Simulation)."],
        ["French Collector", "Get all Sodicars BV2 vehicles in the game."],
        ["Full of Energy", "Finish Xtreme, Desert Wings and Train Odyssey Events in First Place (Sport and Professional)"],
        ["Going Places", "Finish your first stage and get qualified."],
        ["Hard Driver", "Drive for 10.000Km."],
        ["Hat Trick", "Win three consecutive stages."],
        ["Highway Star", "Drive for 6000Km with a Car."],
        ["How Legends are born", "Finish a stage in Simulation Game Mode."],
        ["Invincible", "Get all Toyota Hilux in the game."],
        ["Legendary", "Finish a stage in first place in Simulation Game Mode."],
        ["Made in France", "Get all PH-Sport Zephyr SxSs in the game."],
        ["Marseillaise", "Get all Sherco Bikes in the game."],
        ["Monster Claw", "Get all vehicles sponsored by Monster Energy."],
        ["NEOM 2021 Winner", "Finish 1st in every stage in DAKAR NEOM 2021."],
        ["NEOM Winner", "Finish 1st in every stage in DAKAR NEOM 2020."],
        ["Professional Winner", "Finish all stages in 1st place in Professional Game Mode."],
        ["RED SEA Winner", "Finish 1st in every stage in RED SEA RALLY."],
        ["Sheikhen Not Stirred", "Spending more than 100,000 DP buying vehicles."],
        ["Shinning Star", "Get all Polaris vehicles in the game."],
        ["Simulation Winner", "Finish all stages in 1st place in Simulation Game Mode."],
        ["South Bound", "Get all Can-Am vehicles in the game."],
        ["Space Truckin'", "Drive for 6000Km with a Truck."],
        ["Stuntman", "Jump for more than 3 seconds in any bike."],
        ["TABUK Winner", "Finish 1st in every stage in DAKAR TABUK 2021."],
        ["The Navigator", "Complete an entire simulation event without ever missing a waypoint."],
        ["TRAIN ODYSSEY Winner", "Finish 1st in every stage in TRAIN ODYSSEY RALLY"],
        ["V-TEC’ed", "Get all Honda Bikes in the game."],
        ["We all stand together", "Drive for 6000Km with a SxS."],
        ["XTREME Winner", "Finish 1st in every stage in XTREME RALLY."],
        ["YANBU Winner", "Finish 1st in every stage in DAKAR YANBU 2021."],
        ["Zero to Hero", "Get all Hero Bikes in the game."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
