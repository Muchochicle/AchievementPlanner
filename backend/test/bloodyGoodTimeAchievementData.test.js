import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bloody-good-time.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2450 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bloody-good-time");

test("getPlannerData('bloody-good-time') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for bloody-good-time");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Bloody Good Time achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Bloody Good Time achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Bloody Good Time achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Award Winning Scene", "Commit a perfect murder (boast, 5 star kill, humiliate)"],
        ["Character Actor", "Finish a match as each character"],
        ["Director’s Darling", "Win a match on each level"],
        ["First Blood", "Commit your first murder"],
        ["Hogging the Limelight", "During a Scene Stealer scene, hold onto the statue for 60 seconds without being killed"],
        ["Last Moment Upset", "During an Infected scene, pass on your infection in the final 5 seconds and end the round clean"],
        ["Rising Star", "Earn 200 Stars in your career"],
        ["Screen Legend", "Win a match without being killed"],
        ["Superstar", "Earn 2000 Stars in your career"],
        ["The Great Escapist", "Escape from Security with a 10 Star fine"],
        ["Untouchable", "During a Hunt the Leader scene, survive the whole round as the Leader without being killed"],
        ["V for Vindictive", "During a Hunt or Elimination scene, kill your Hunter 3 times in a single round"],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
