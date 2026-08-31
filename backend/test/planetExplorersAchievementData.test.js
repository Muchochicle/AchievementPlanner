import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/planet-explorers.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 237870 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("planet-explorers");

test("getPlannerData('planet-explorers') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for planet-explorers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Planet Explorers achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Planet Explorers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Planet Explorers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Destroy Everything", "Destroy all the towns"],
        ["Dung Beetle", "Collect 50 monster feces"],
        ["Follower", "First recruitment"],
        ["Incredible Wealth", "Collect 1000 currency"],
        ["Knight on the Monster", "First ride on the monster"],
        ["Newton Continental", "Complete the mission Finding Malik "],
        ["Old and Sick", "Complete Escort Mission"],
        ["Peace Ambassador", "Achieve Cordial in each party"],
        ["Planet Explorer", "Gain all the achievements"],
        ["Rest in Piece", "Complete the mission Bury the Dead "],
        ["Survive", "Complete the mission A World at War "],
        ["Take a Flight", "Survive to the last minute"],
        ["The Barrens", "Complete the mission Into the Desert "],
        ["The Forest", "Take over the mission The Forest  "],
        ["World Peace", "Nuclear explosion"],
        ["Your Own Colony", "Complete the mission Set up a BaseCamp "],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
