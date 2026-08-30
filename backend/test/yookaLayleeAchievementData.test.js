import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yooka-laylee.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 360830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("yooka-laylee");

test("getPlannerData('yooka-laylee') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for yooka-laylee");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Yooka-Laylee achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Yooka-Laylee achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Yooka-Laylee achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["BAR STAR", "Collect all 6 power extender items"],
        ["BOOK SPOOK", "Collect your first Ghost Writer "],
        ["BOTTOM'S UP", "Unlock and equip a Tonic "],
        ["CAPTAIN'S CACHE", "Find all five of the pirate treasure items"],
        ["CREEP FROM THE DEEP", "Defeat the World 3 boss "],
        ["FITS THE QUILL", "Collect 500 Quills "],
        ["FROM SOMEONE ELSE'S BOOK", "Collect all 145 Pagies "],
        ["GRABBED THE GHOULS", "Collect every Ghost Writer in the Grand Tome worlds "],
        ["HAD ONE'S QUILL", "Collect all 1,010 Quills "],
        ["KARTOS RETURNS", "Complete one of Kartos’s minecart challenges "],
        ["KNOCKING DOWN WALLS", "Defeat the World 2 boss "],
        ["LICENSE TO QUILL", "Collect your first 200 Quills "],
        ["OBSOLETE", "Defeat the World 4 boss "],
        ["OPEN BOOKS", "Unlock every Grand Tome world "],
        ["OUT OF BUSINESS", "Defeat Capital B at the end of the game "],
        ["PAGIE RAMPAGIE", "Collect 30 Pagies "],
        ["PETTY VANDALISM", "Disrespect the Idol"],
        ["PLANETARY ANNIHILATION", "Defeat the World 5 boss "],
        ["POTION COMMOTION", "Unlock 15 Tonics "],
        ["PRIVATE PILLAGE", "Find any one of the pirate treasure items"],
        ["QUACKERS", "Complete one of Dr. Quack’s Quackfire Quizzes "],
        ["RAISING THE BAR", "Collect all 6 health extender items"],
        ["SECRET SALVAGE", "Find any three of the pirate treasure items"],
        ["SIZE MATTERS", "Expand a Grand Tome world "],
        ["SLIPPERY SLOPE", "Defeat the World 1 boss "],
        ["SQUID'S IN", "Get transformed by Dr. Puzz for the first time "],
        ["SSSMASHING", "Purchase all of Trowzer’s moves "],
        ["SSSSERPENT SSSSENPAI", "Purchase a move from Trowzer "],
        ["SUPER SIZED", "Expand all five Grand Tome worlds"],
        ["THE ADVENTURE BEGINS", "Unlock the first Grand Tome world "],
        ["THE AGIE OF PAGIE", "Collect 75 Pagies "],
        ["THINKING BIG", "Expand three Grand Tome worlds"],
        ["TURNING A PAGIE", "Collect your first Pagie"],
        ["WHAT'S A LEADERBOARD?", "Get the high score in one of Rextro's Arcade Games"],
        ["WHEN I'M 64", "Successfully complete one of Rextro’s arcade games "],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
