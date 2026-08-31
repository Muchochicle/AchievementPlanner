import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/invisible-inc.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 243970 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("invisible-inc");

test("getPlannerData('invisible-inc') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for invisible-inc");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Invisible, Inc. achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Invisible, Inc. achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Invisible, Inc. achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"surprised\" Face", "Beat the Contingency Plan extended Campaign on Expert Plus difficulty"],
        ["Acceptable Host", "Beat the game on Expert Plus difficulty."],
        ["Ant Society", "Beat the game on Experienced difficulty."],
        ["Attention to Detail", "Steal from every safe in a level."],
        ["Contact Re-established", "Survive for 24 Hours."],
        ["Corporate Ladder", "Survive 10 days in Endless mode."],
        ["Daemon Code", "Beat the game with Faust and Brimstone."],
        ["Empire builder", "Survive 20 days in Endless mode with the Contingency Plan DLC"],
        ["Fully Equipped", "Unlock every agent, agent alternate, and starting mainframe program."],
        ["Ghost Moves", "Beat a level without ever being spotted by a guard or camera on Beginner or Expert difficulty."],
        ["Invisible Inc.", "Beat the game on Expert difficulty."],
        ["Meat Machine", "Install 4 augments on an agent."],
        ["Meta-Hacking", "Hack the game itself: back up scripts.zip, edit client/states/state-main-menu.lua to uncomment the KLEIAchievements:achieve( \"META_HACKING\" ) line, blank hashes.dat to 0 bytes, and relaunch. Klei intended this achievement to be earned by modifying the game files."],
        ["Nearing Confidence Threshold", "Survive for 48 Hours."],
        ["Never Look Back", "Beat the game with rewinds set to 0 on Expert difficulty."],
        ["Powerful Toast", "Beat the Contingency Plan extended Campaign on Experienced difficulty"],
        ["Rebuilding the Firm", "Survive 5 days in Endless mode."],
        ["Smooth Operator", "Survive 5 days in Endless Plus mode."],
        ["Target Resolved", "Survive for 72 Hours."],
        ["Technical Macguffin", "Beat the Contingency Plan extended Campaign on Expert difficulty"],
        ["The Limit", "Beat a level after reaching Alarm level 6 in the level on Expert difficulty."],
        ["Time Attack", "Beat the game in Time Attack mode."],
        ["Training Wheels", "Beat the game on Beginner difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
