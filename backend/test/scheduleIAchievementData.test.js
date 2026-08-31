import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/schedule-i.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3164500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("schedule-i");

test("getPlannerData('schedule-i') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for schedule-i");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Schedule I achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Schedule I achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Schedule I achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bigwig", "Attain a net worth of $1,000,000."],
        ["Businessman", "Attain a net worth of $100,000."],
        ["Dodgy Dealing", "Recruit your first dealer."],
        ["Finishing the Job", "Complete the 'Finishing the Job' questline: unlock every region of Hyland Point with good reputation, become hostile to the Benzies family, then work through Uncle Nelson, Billy, Stan and Sam to bomb Hyland Manor via the tunnel."],
        ["Indian Dealer", "Sell something to a customer, then pickpocket it back."],
        ["Left in the Dust", "Complete the prologue."],
        ["Magnate", "Attain a net worth of $10,000,000."],
        ["Master Chef", "Manufacture a product worth at least $100."],
        ["Rolling in Style", "Purchase a golden skateboard."],
        ["The Long Arm of the Law", "Get arrested."],
        ["Upstanding Citizen", "Dispose of 500 pieces of trash at the Cash for Trash machines."],
        ["Urban Artist", "Graffiti 25 surfaces in a single save."],
        ["Welcome to Hyland Point", "Encounter an unexpected setback."],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
