import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sea-of-solitude.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1225590 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sea-of-solitude");

test("getPlannerData('sea-of-solitude') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for sea-of-solitude");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Sea of Solitude achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Sea of Solitude achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Sea of Solitude achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bottled", "Collected all bottles"],
        ["Breakdown", "Finished Level 3"],
        ["Comfy", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Connected", "Connect with mirror Kay for the first time"],
        ["Danger Swimmer", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Deep Dive", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Fire!", "Fired the first flare"],
        ["Flock of Seagulls", "Shooed all Seagulls"],
        ["Human Bait", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Lonely at the top", "Reached top of the Skyscraper"],
        ["Mama and Papa", "Finished Level 2"],
        ["Mermaid", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Moses", "Opened a path through water"],
        ["Raver", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Resolve", "Finished the game"],
        ["Runaway", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Sailor", "Travelled a long distance by boat"],
        ["School's out", "Made it through school"],
        ["Seeker", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Shoo!", "Shooed your first Seagull"],
        ["Sunny", "Finished Level 1"],
        ["Uncorked", "Collected your first Message in a bottle"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
