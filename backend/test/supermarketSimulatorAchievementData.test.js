import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/supermarket-simulator.json - 15 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2670630 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("supermarket-simulator");

test("getPlannerData('supermarket-simulator') returns real planner data with 15 curated achievements", () => {

    assert.ok(game, "expected real planner data for supermarket-simulator");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 15);

});

test("every Supermarket Simulator achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Supermarket Simulator achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 15 Supermarket Simulator achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And the best store in town is...", "Change Store Name"],
        ["CEO of Organization", "Place 3 Category Sign"],
        ["Don't Get Tired", "Hire 4 Restockers"],
        ["Economy 101", "Take A Loan From The Bank"],
        ["Elevator", "Play a Song from Music Player"],
        ["Finally", "Pay Off a Loan Debt to The Bank in Full"],
        ["Good for Eye", "Paint 30 Walls"],
        ["Hardworking Cashier", "Completed 50 checkouts. That's a lot of change giving"],
        ["Looking Good", "Change Front Style of The Door"],
        ["That's a Big Change", "Change Door Position"],
        ["The greatest!", "Purchased all expandings."],
        ["These Floors Are Made For Walking", "Replace 30 Floor"],
        ["They Know How To Count", "Hire 4 Cashiers"],
        ["You need a cashier", "Completed 100 checkouts all on your own. Consider hiring a cashier or two."],
        ["You Want It? We Got It!", "Own 4 Product Licence"],
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
