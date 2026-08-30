import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/automation-empire.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1112790 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 28 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("automation-empire");

test("getPlannerData('automation-empire') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for automation-empire");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Automation Empire achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Automation Empire achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Automation Empire achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Automation Master 1", "Complete 1 scenario without easy mode"],
        ["Automation Master 10", "Complete 10 scenarios without easy mode"],
        ["Automation Master 11", "Complete 11 scenarios without easy mode"],
        ["Automation Master 12", "Complete 12 scenarios without easy mode"],
        ["Automation Master 13", "Complete 13 scenarios without easy mode"],
        ["Automation Master 2", "Complete 2 scenarios without easy mode"],
        ["Automation Master 3", "Complete 3 scenarios without easy mode"],
        ["Automation Master 4", "Complete 4 scenarios without easy mode"],
        ["Automation Master 5", "Complete 5 scenarios without easy mode"],
        ["Automation Master 6", "Complete 6 scenarios without easy mode"],
        ["Automation Master 7", "Complete 7 scenarios without easy mode"],
        ["Automation Master 8", "Complete 8 scenarios without easy mode"],
        ["Automation Master 9", "Complete 9 scenarios without easy mode"],
        ["Medallion 1", "Earn 1 medallion without easy mode"],
        ["Medallion 10", "Earn 10 medallions without easy mode"],
        ["Medallion 11", "Earn 11 medallions without easy mode"],
        ["Medallion 12", "Earn 12 medallions without easy mode"],
        ["Medallion 13", "Earn 13 medallions without easy mode"],
        ["Medallion 2", "Earn 2 medallions without easy mode"],
        ["Medallion 3", "Earn 3 medallions without easy mode"],
        ["Medallion 4", "Earn 4 medallions without easy mode"],
        ["Medallion 5", "Earn 5 medallions without easy mode"],
        ["Medallion 6", "Earn 6 medallions without easy mode"],
        ["Medallion 7", "Earn 7 medallions without easy mode"],
        ["Medallion 8", "Earn 8 medallions without easy mode"],
        ["Medallion 9", "Earn 9 medallions without easy mode"],
        ["Ultimate Automation Master", "Complete 14 scenarios without easy mode"],
        ["Ultimate Medallion Master", "Earn 14 medallions without easy mode"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
