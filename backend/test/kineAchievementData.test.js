import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kine.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 824570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kine");

test("getPlannerData('kine') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for kine");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Kine achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Kine achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Kine achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Don't Worry, They're Waterproof", "Take the boat out for the day."],
        ["Fate", "Take matters into your own...hands?"],
        ["No Machine Left Behind", "They actually work well together."],
        ["Okay, Maybe One Obstacle", "You should have seen it coming."],
        ["Sometimes the Job Finds You", "Get a job."],
        ["Thanks for Playing!", "Complete the game."],
        ["The Big Time", "Sign with a record label."],
        ["This is Perfect!", "Find Roo a new instrument."],
        ["Turnt Up", "Get things started on the dance floor"],
        ["Virtuoso", "Complete all levels."],
        ["We Have a Band!", "Bring Quat, Roo, and Euler to the Main Stage."],
        ["What's the Point", "Ruin something beautiful."],
        ["Who's That?", "Discover Euler"],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
