import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-gardens-between.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 600990 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-gardens-between");

test("getPlannerData('the-gardens-between') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-gardens-between");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every The Gardens Between achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every The Gardens Between achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 The Gardens Between achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["An Expedition Goes Down The Drain", "A Garden Friend gums up the pipes."],
        ["Don't touch that!", "In level 8's second screen, stop with Arina behind the green-screened device and wait until lightning strikes it."],
        ["Found You!", "In level 7-2, find and release the hidden Garden Friend."],
        ["Friendly Fire", "In the lounge level, move Arina's button back and forth to throw popcorn at Frendt 5 times."],
        ["Game Over", "Super Silly Crow is defeated."],
        ["Gone Fishing", "Arina’s at the end of her rope."],
        ["Great Catch!", "What's under the table cloth?"],
        ["Mischievous Discoveries", "A Garden Friend follows on a school trip."],
        ["Moving In", "A sneaky stowaway Garden Friend."],
        ["New Friends", "A Garden Friend is hiding in the Esky."],
        ["Our Secret Clubhouse", "A Garden Friend sneaks a look."],
        ["Reach For The Sky", "Pluck the moon right out of the sky."],
        ["Reset The Dominos", "Restore the board to a clean state."],
        ["Saw Through Time", "Saw the plank. Next, get a hammer."],
        ["Stargazing", "A Cosmic Garden Friend phones home."],
        ["Staying Up Late", "Super Silly Crow escapes the TV."],
        ["The Gardens Complete", "Friends apart, memories remain."],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
