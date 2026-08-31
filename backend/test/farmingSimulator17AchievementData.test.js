import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/farming-simulator-17.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 447020 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("farming-simulator-17");

test("getPlannerData('farming-simulator-17') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for farming-simulator-17");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every Farming Simulator 17 achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every Farming Simulator 17 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 Farming Simulator 17 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...jack", "Cut down 50 trees"],
        ["All That Glitters...", "Find all 100 gold nuggets"],
        ["Breakneck Bankruptcy", "Reach a negative balance on your very first day"],
        ["Bumper Harvest", "Harvest 10 hectares"],
        ["Cowboy", "Breed 20 cows"],
        ["Farmers' Favorite", "Help each farmer at least once"],
        ["Financial Independence", "Pay back an entire bank loan"],
        ["Help a Fella out", "Complete a task for another farmer"],
        ["In for the Long Haul", "Reach 10 hours playing time in a single savegame"],
        ["Into the Soil", "Sow 10 hectares"],
        ["Lumber...", "Cut down a tree"],
        ["Make 'em Grow", "Fertilize 10 hectares"],
        ["Oink Oink!", "Breed 50 pigs"],
        ["Peak Profits", "Own a bank account with 1 million ingame money"],
        ["Preparation Is Key", "Cultivate 10 hectares"],
        ["Sweet Dreams", "Breed 30 sheep"],
        ["Three-Pointer", "Score a three-point field goal in basketball"],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
