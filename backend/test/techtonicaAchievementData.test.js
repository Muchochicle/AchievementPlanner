import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/techtonica.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1457320 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 24 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("techtonica");

test("getPlannerData('techtonica') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for techtonica");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every Techtonica achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Techtonica achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 Techtonica achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Arrhythmia", "Awarded for the recovery of all PULSE Situation Room data."],
        ["Belter Loader", "Awarded for the placement of 100 Conveyor Belts."],
        ["Black Hole Gun, Wontcha Come", "Awarded for construction of the M.O.L.E. Terrain Manipulation Device."],
        ["Blast Radius", "Awarded for the construction of explosive industrial technologies."],
        ["Chasing Waterfalls", "Awarded for discovery of the Central Falls area."],
        ["Circuit Breaker", "Awarded for the construction of 10 Advanced Circuits."],
        ["Cold Cut", "Awarded for enhancing the M.O.L.E with the use of Coolant."],
        ["Concrete Jungle ", "Awarded for the significant deployment of base building assets."],
        ["Cool S", "Awarded for the construction of 20 Cooling Systems."],
        ["Dreaming of Electric Sheep", "Awarded for the construction of 100 Electrical Components."],
        ["Getting the Point", "Awarded for the construction and placement of 10 Mining Drills."],
        ["Greater Goods", "Awarded for the understanding of a greater purpose."],
        ["Groundbreakers, Assemble!", "Awarded for the initial construction and placement of an Assembler."],
        ["Many Hands", "Awarded for the construction and placement of 100 Assemblers."],
        ["Might as Well...", "Awarded for successfully descending out of a facility by the only means available."],
        ["Monumental", "Awarded for the discovery of an unsettling structure."],
        ["Mush Room", "Awarded for discovery of the Fungus Grotto area."],
        ["Overclocked", "Awarded for the construction of 10 Processor Units."],
        ["Peak Performance", "Awarded for the accomplishment of all objectives."],
        ["Square Root", "Awarded for the recovery of key assets in Sector LIMA."],
        ["STEM Program", "Awarded for the successful manufacture of Kindlevine Stems."],
        ["The Butterfly Effect", "Awarded for discovery of the Butterfly Grove area."],
        ["Thresher Refresher", "Awarded for the construction of 10 Plantmatter Frames."],
        ["Twist of Freight", "Awarded for the full establishment of Freight Elevator operations in Sector Victor."],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
