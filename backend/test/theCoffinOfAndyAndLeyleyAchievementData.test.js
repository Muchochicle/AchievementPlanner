import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-coffin-of-andy-and-leyley.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2378900 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-coffin-of-andy-and-leyley");

test("getPlannerData('the-coffin-of-andy-and-leyley') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-coffin-of-andy-and-leyley");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every The Coffin of Andy and Leyley achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every The Coffin of Andy and Leyley achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 The Coffin of Andy and Leyley achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["_____ in a Box", "Don't grow a spine."],
        ["Cleared Burial", "Reached the Truest of True-ends ending."],
        ["Decaying Along", "Survived Episode 3: Decay."],
        ["Episode 1 Clear", "Cleared episode 1."],
        ["Episode 2 Clear", "Cleared episode 2."],
        ["Full marks!", "Got full marks on a... test?"],
        ["Happy end!", "The ending you deserve."],
        ["Hitman Wins!", "Found the hitman."],
        ["Little Mathematician", "Did Leyley's homework right."],
        ["No Witnesses", "Left no witnesses."],
        ["Present", "Found a present."],
        ["Prophecy Fulfiller", "Win at tag, just as the prophecy foretold!"],
        ["Shots and Such", "Reached the Shots and Such ending."],
        ["Sister Slaughterer", "Ran out of Ashleys."],
        ["Splat!", "Reached the Deadest of Dead-ends End."],
        ["Time Capsule", "Found a time capsule."],
        ["Undetected", "Left the gas stop relatively unnoticed."],
        ["Unknown Summon", "Summoned an unknown entity."],
        ["Vision Watcher", "Found an unexpected spectator."],
        ["Warden Wins", "Got caught."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
