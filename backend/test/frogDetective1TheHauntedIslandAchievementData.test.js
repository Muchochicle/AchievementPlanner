import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/frog-detective-1-the-haunted-island.json - 6 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 963000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("frog-detective-1-the-haunted-island");

test("getPlannerData('frog-detective-1-the-haunted-island') returns real planner data with 6 curated achievements", () => {

    assert.ok(game, "expected real planner data for frog-detective-1-the-haunted-island");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 6);

});

test("every Frog Detective 1: The Haunted Island achievement has a unique id from 1 to 6 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 6 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 6);
    assert.strictEqual(new Set(apinames).size, 6);

});

test("every Frog Detective 1: The Haunted Island achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 6 Frog Detective 1: The Haunted Island achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["ANSWERED THE CALL", "Okay this is the end, right?"],
        ["GOT SPOOKED", "Aaaaaaaaah!!!!"],
        ["HUSTLED HARD", "Normal explosive ingredients."],
        ["PICKED A WINNER", "When will this game end?"],
        ["PICKED IT UP", "Good detecting, friend!"],
        ["TRIED TO LEAVE", "You haven't even solved the mystery!"],
    ];

    assert.strictEqual(officialAchievements.length, 6, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
