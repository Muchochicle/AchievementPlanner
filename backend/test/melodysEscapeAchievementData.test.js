import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/melodys-escape.json - 8 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 270210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("melodys-escape");

test("getPlannerData('melodys-escape') returns real planner data with 8 curated achievements", () => {

    assert.ok(game, "expected real planner data for melodys-escape");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 8);

});

test("every Melody's Escape achievement has a unique id from 1 to 8 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 8 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 8);
    assert.strictEqual(new Set(apinames).size, 8);

});

test("every Melody's Escape achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 8 Melody's Escape achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A First Taste of Escape", "Play one track"],
        ["Escape Artist", "Play 10 tracks"],
        ["Lucid Dreamer", "Play 100 tracks"],
        ["Runner's High", "Score 5 hearts on a track in any difficulty"],
        ["Self-Actualizer", "Get a Perfect Chain Score in any difficulty"],
        ["Synesthesia", "Get a Perfect Chain Score in Intense difficulty 10 times"],
        ["Transcendence", "Get a perfect Chain Score in Intense difficulty"],
        ["Warming Up", "Score at least 3 hearts in any difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 8, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
