import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/frozen-synapse.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 98200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("frozen-synapse");

test("getPlannerData('frozen-synapse') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for frozen-synapse");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Frozen Synapse achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Frozen Synapse achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Frozen Synapse achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Breaking the 4th Wall", "Blow up the 4th wall in a level with a rocket launcher."],
        ["Charger!", "Win a game of Charge."],
        ["Die in a Fire", "Lose a unit to a rocket."],
        ["Disput....er!", "Win a game of Disputed."],
        ["Exterminator!", "Win a game of Extermination."],
        ["He Has a Better Beard Than You, Though", "Defeat 'Bin' in multiplayer."],
        ["Hostage Situationalist!", "Win a game of Hostage."],
        ["If at First You Don't Succeed, You Have Failed", "Lose your first single-player mission."],
        ["Master of Clicking on Stuff", "Finish the tutorial."],
        ["Now I Have A Machine Gun. Ho Ho Ho.", "Play an Instant Skirmish and win with only your machine gunner left alive."],
        ["Old Stancher", "Complete the Single Player Campaign."],
        ["SO MANY LEVELINGS!!", "Get to level 100."],
        ["The 10th Circle", "Get to Level 10."],
        ["The Lament of the Noob", "Lose your first multiplayer game."],
        ["Tinkerings", "Change the map generation settings."],
        ["True Focus Means Ignoring That Which is Irrelevant", "Ignore an enemy."],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
