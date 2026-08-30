import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/firewatch.json - 10 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 383870 (fetched through this app's own services/steamApi.js). 5 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("firewatch");

test("getPlannerData('firewatch') returns real planner data with 10 curated achievements", () => {

    assert.ok(game, "expected real planner data for firewatch");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 10);

});

test("every Firewatch achievement has a unique id from 1 to 10 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 10 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 10);
    assert.strictEqual(new Set(apinames).size, 10);

});

test("every Firewatch achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 10 Firewatch achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Back to work.\"", "Complete Day 2, your first full day as a fire lookout."],
        ["\"Burn the place down.\"", "Complete Day 77, in the aftermath of the fire."],
        ["\"Good first day.\"", "Complete Day 1, the prologue at your Two Forks lookout tower."],
        ["\"Someone's out here.\"", "Complete Day 76, as the mystery in Shoshone National Forest comes to a head."],
        ["Bee Plot", "Got stung by a bee. It happens."],
        ["Firewatch", "Complete Day 79, the story's final day, finishing Firewatch."],
        ["Love Turts", "Adopted a turtle as a pet. The average lifespan of a box turtle is fifty years. It will outlive you."],
        ["Ol' Shoshone", "Listened to the tape of \"Ol' Shoshone.\" Cavorted among the aspens."],
        ["Shutter Bug", "Filled a disposable camera with photos."],
        ["The Life and Times of Raccoon Carter", "Got attacked by a raccoon; probably didn't get rabies."],
    ];

    assert.strictEqual(officialAchievements.length, 10, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
