import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-musical-story.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1546100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("a-musical-story");

test("getPlannerData('a-musical-story') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for a-musical-story");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every A Musical Story achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every A Musical Story achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 A Musical Story achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bigger Band", "Finish Chapter 12"],
        ["A Musical Pause", "Finish Chapter 8"],
        ["All Apologies", "Perfectly Finish Chapter 20"],
        ["Alone Together", "Finish Chapter 14"],
        ["As the Crow Flies", "Perfectly Finish Chapter 9"],
        ["Assembly Line Work", "Finish Chapter 3"],
        ["Bad Trip", "Finish Chapter 18"],
        ["Big City Music", "Perfectly Finish Chapter 2"],
        ["Briget's", "Finish Chapter 9"],
        ["Carry On", "Perfectly Finish Chapter 22"],
        ["Chase the Crow", "Finish Chapter 19"],
        ["Closer", "Perfectly Finish Chapter 21"],
        ["Daily Life", "Finish Chapter 2"],
        ["Dreamers", "Perfectly Finish Chapter 5"],
        ["ECG", "Finish Chapter 0"],
        ["First Kiss", "Finish Chapter 11"],
        ["Flat Tire", "Finish Chapter 16"],
        ["Flight of the Bumblebee", "Perfectly Finish Chapter 8"],
        ["Fuel", "Finish Chapter 13"],
        ["Gasoline", "Perfectly Finish Chapter 13"],
        ["Here we go again!", "Finish Chapter 22"],
        ["Hospital Flowers", "Perfectly Finish Chapter 24"],
        ["Killer Cars", "Perfectly Finish Chapter 23"],
        ["Love", "Finish Chapter 21"],
        ["Love at First Sight", "Finish Chapter 10"],
        ["Love is All", "Perfectly finish the secret Bonus Chapter."],
        ["Milk and Alcohol", "Perfectly Finish Chapter 10"],
        ["On the Road Again", "Perfectly Finish Chapter 12"],
        ["Pinewood", "Finish the secret Bonus Chapter."],
        ["Pinewood, Here we come!", "Finish Chapter 5"],
        ["Purple Haze", "Perfectly Finish Chapter 18"],
        ["Regrets", "Finish Chapter 20"],
        ["Rehearsal", "Finish Chapter 1"],
        ["Riders on the Storm", "Perfectly Finish Chapter 15"],
        ["Road-Trip", "Finish Chapter 7"],
        ["Solitude", "Finish Chapter 4"],
        ["Sound of Noise", "Perfectly Finish Chapter 3"],
        ["Stairway to Heaven", "Unlock the secret Bonus Chapter."],
        ["Symbiosis", "Perfectly Finish Chapter 1"],
        ["The Accident", "Finish Chapter 23"],
        ["The Awakening", "Finish Chapter 24"],
        ["The Clash", "Finish Chapter 17"],
        ["The Fight Song", "Perfectly Finish Chapter 17"],
        ["The Fix", "Perfectly Finish Chapter 6"],
        ["The Mountains, The Valleys", "Perfectly Finish Chapter 7"],
        ["The Show Must Go On", "Perfectly Finish Chapter 19"],
        ["The Van", "Finish Chapter 6"],
        ["Threatening Nature", "Finish Chapter 15"],
        ["Time", "Perfectly Finish Chapter 0"],
        ["TV Dreams", "Perfectly Finish Chapter 4"],
        ["Under my Wheels", "Perfectly Finish Chapter 16"],
        ["Under the Bridge", "Perfectly Finish Chapter 14"],
        ["Unintended", "Perfectly Finish Chapter 11"],
        ["Voodoo  Child", "Perfectly Finish all the Chapters"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
