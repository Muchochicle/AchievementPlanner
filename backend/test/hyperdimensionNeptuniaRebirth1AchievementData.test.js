import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hyperdimension-neptunia-rebirth1.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 282900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hyperdimension-neptunia-rebirth1");

test("getPlannerData('hyperdimension-neptunia-rebirth1') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for hyperdimension-neptunia-rebirth1");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Hyperdimension Neptunia Re;Birth1 achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Hyperdimension Neptunia Re;Birth1 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Hyperdimension Neptunia Re;Birth1 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...and the story begins", "You started the game"],
        ["Battle Master", "Won 500 fights"],
        ["Blanc Level Max", "Blanc reached level 99"],
        ["Broccoli Level Max", "Broccoli reached level 99"],
        ["Chapter 1 Clear", "Chapter 1 Cleared"],
        ["Chapter 2 Clear", "Chapter 2 Cleared"],
        ["Chapter 3 Clear", "Chapter 3 Cleared"],
        ["Chapter 4 Clear", "Chapter 4 Cleared"],
        ["Chapter 5 Clear", "Chapter 5 Cleared"],
        ["Chapter 6 Clear", "Chapter 6 Cleared"],
        ["Chapter 7 Clear", "Chapter 7 Cleared"],
        ["Chapter 8 Clear", "Chapter 8 Cleared"],
        ["Combo Maker", "You made your first combo"],
        ["Combo Master", "Performed a 100 hit combo"],
        ["Compa Level Max", "Compa reached level 99"],
        ["CyberConnect2 Level Max", "CyberConnect2 reached level 99"],
        ["Falcom Level Max", "Falcom reached level 99"],
        ["First Battle", "You fought your first battle"],
        ["First Quest", "You cleared your first quest"],
        ["Game Creator", "Created your first game disc"],
        ["Game Remake", "Used the remake system"],
        ["Godsized", "Transformed for the first time"],
        ["Hyperdimension Neptunia Re;Birth1 Master", "You played the game so much, you made Neptune folks proud!"],
        ["IF Level Max", "IF reached level 99"],
        ["Item Creator", "Made your first item"],
        ["Item Master", "Made 100 different items"],
        ["MAGES. Level Max", "MAGES. reached level 99"],
        ["Marvelous AQL Level Max", "Marvelous AQL reached level 99"],
        ["Maximum Fire Power", "Inflicted more than 100,000 damage points to an enemy"],
        ["Millionaire", "Obtained 100 Million Credits"],
        ["Nepgear Level Max", "Nepgear reached level 99"],
        ["Nepgear Teams Up", "Nepgear joined the party"],
        ["Neptune Level Max", "Neptune reached level 99"],
        ["Noire Level Max", "Noire reached level 99"],
        ["Normal Ending", "Watched the Normal Ending"],
        ["Overclocked", "Equipped a new processor unit"],
        ["Ram Level Max", "Ram reached level 99"],
        ["Rom and Ram Teams Up", "Rom and Ram joined the party"],
        ["Rom Level Max", "Rom reached level 99"],
        ["Shopping", "You bought items for the first time"],
        ["Tekken Level Max", "Tekken reached level 99"],
        ["True Ending", "Watched the True Ending"],
        ["Uni Level Max", "Uni reached level 99"],
        ["Uni Teams Up", "Uni joined the party"],
        ["Vert Level Max", "Vert reached level 99"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
