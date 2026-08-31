import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/carx-drift-racing-online.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 635260 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("carx-drift-racing-online");

test("getPlannerData('carx-drift-racing-online') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for carx-drift-racing-online");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every CarX Drift Racing Online achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every CarX Drift Racing Online achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 CarX Drift Racing Online achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Drifting? No, Never Heard of It", "Drift 300 km"],
        ["#Drift4life", "Drift 150 km"],
        ["#OnwardToVictory", "Get a gold cup on each track in single-player"],
        ["#Winner", "Earn a gold cup 50 times in single-player"],
        ["And the weather is not an obstacle...", "Win in 5 duels at Castle Road"],
        ["Awesome angle", "Earn 200000 DP in the Awesome angle event"],
        ["Backward", "Earn 500000 DP in the Backward event"],
        ["Champion", "Reach the maximum level in the game"],
        ["Clipping Point Master", "Earn 650000 DP in the Clipping Point event"],
        ["Clipping Zone Master", "Earn 650000 DP in the Clipping Zone event"],
        ["Did You See That?", "Win 150 multiplayer races"],
        ["DP-Man", "Earn 25,000 drift points"],
        ["Drawn-out Drift", "Earn 500000 DP in the Drawn-out Drift event"],
        ["Drift guardian", "Earn 500,000 Drift Points on a Hornet GT"],
        ["DriftKing", "Earn 100,000 drift points"],
        ["Eat Dust Gringo", "Win 25 multiplayer races"],
        ["Entry Master", "Earn 150000 DP in the Fast Entry event"],
        ["Gold", "Earn a gold cup in single-player"],
        ["Half a Step to Victory", "Earn a silver cup in single-player"],
        ["Master of Drift", "Earn 75,000 drift points"],
        ["Masterful Race", "Earn 350000 DP in the Pure Drift event"],
        ["Newcomer", "Drive 1500 kilometers"],
        ["No Limits", "Reach level 25"],
        ["Nothing Personal", "Beat 5 friends in multiplayer races"],
        ["On the Path to Glory", "Earn 50,000 drift points"],
        ["On the Rise", "Reach level 15"],
        ["Pilgrim", "Drive 2500 kilometers"],
        ["Pioneer", "Reach level 10"],
        ["Prizewinner", "Earn a bronze cup in single-player"],
        ["Quantity and quality", "Win in any 20 competition at Castle Road"],
        ["Stylish drift", "Buy any body kit on 5 different cars"],
        ["Transition Master", "Earn 150000 DP in the Fast Transition event"],
        ["Traveler", "Drive 4000 kilometers"],
        ["Voodoo", "Earn 500,000 Drift Points on a Voodoo"],
        ["Winter Drift", "Earn 1,000,000 Drift Points on Castle Road"],
        ["Wolf Amid Sheep", "Win 1000 multiplayer races"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
