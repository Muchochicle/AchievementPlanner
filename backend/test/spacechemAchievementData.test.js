import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/spacechem.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 92800 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("spacechem");

test("getPlannerData('spacechem') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for spacechem");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every SpaceChem achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every SpaceChem achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 SpaceChem achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Chief Executive Officer", "Beat the game!"],
        ["Cost Control Specialist", "Beat the assignment \"Falling\" using two or fewer reactors."],
        ["Director of Moustache Research", "Beat the assignment \"Moustachium 608\"."],
        ["Distinguished Publication Reviewer", "Beat 20 published ResearchNet assignments."],
        ["Efficiency Specialist", "Beat the assignment \"No Ordinary Headache\" using only one reactor."],
        ["Environmental Engineer", "Beat the assignment \"Challenge: Going Green\"."],
        ["Industrial Physicist", "Beat the assignment \"Challenge: Applied Fusion\"."],
        ["Interstellar Transportation Specialist", "Beat the assignment \"Collapsar\" in the 63 Corvi campaign."],
        ["Junior Performance Specialist", "Beat the assignment \"Nothing Works\" in under 1000 cycles."],
        ["Junior Permutation Technician", "Beat the assignment \"Challenge: In-Place Swap\"."],
        ["Junior Publication Reviewer", "Beat 10 published ResearchNet assignments."],
        ["Materials Engineer of the People", "Beat the assignment \"Challenge: KOHCTPYKTOP\"."],
        ["Moustache Research Assistant", "Beat the assignment \"Moustachium 602\"."],
        ["Moustache Scientist", "Beat the assignment \"Moustachium 604\"."],
        ["Performance Specialist", "Beat the assignment \"No Thanks Necessary\" in under 2200 cycles."],
        ["Performance Specialist II", "Beat the assignment \"Gas Works Park\" in under 2700 cycles."],
        ["Polar Expedition", "Reach the south pole of Sernimir IV."],
        ["Science is an Indoor Activity", "Beat 3 published ResearchNet assignments."],
        ["Senior Efficiency Specialist", "Beat the assignment \"Molecular Foundry\" using two or fewer reactors."],
        ["Senior Performance Specialist", "Beat the assignment \"Σ-Ethylene\" in under 6000 cycles."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
