import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/vernal-edge.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1546710 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("vernal-edge");

test("getPlannerData('vernal-edge') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for vernal-edge");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Vernal Edge achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Vernal Edge achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Vernal Edge achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Spender", "Purchase every item from every shop"],
        ["Deeply Rooted", "Discover your roots."],
        ["Ending", "Beat the game"],
        ["Fisher Queen", "Win the fishing minigame"],
        ["Green Thumb", "Tend to the lonely flower"],
        ["Hello George", "Meet Chervil's new friend."],
        ["Knocked Around The Clock", "Become a one-note wonder"],
        ["New Look", "Find the hidden palette"],
        ["Pacifist", "Acquire Pacifist's Curse"],
        ["Parry Master", "Parry 8 hits without taking damage"],
        ["Pyramid Master", "Complete the Pyramid without using the shortcut"],
        ["Slime Time", "Use Pulse Fly to reach the rift and enter it to discover the hidden area, Slime's Summit."],
        ["Slugger", "Win the baseball minigame"],
        ["Treasure Hunter", "Acquire Treasure Sense"],
        ["Unreal", "Enter Unreality of your own accord."],
        ["Vicious", "Beat the game on Vicious difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
