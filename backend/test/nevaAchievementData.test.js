import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/neva.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2420660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("neva");

test("getPlannerData('neva') returns real planner data with 18 curated achievements", () => {

    assert.ok(game, "expected real planner data for neva");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 18);

});

test("every Neva achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Neva achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 18 Neva achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Blossoming", "Find all collectibles"],
        ["Comfort", "Break all the enemy statues in Fall Part 3"],
        ["Curiosity", "Find the hidden birds in Winter Part 1"],
        ["Dormancy", "Finish Fall Part 3."],
        ["Empathy", "Cleanse every corrupted animal you encounter during Fall Part 2."],
        ["Establishment", "Finished Fall Part 1"],
        ["Flowering", "Finish Winter Part 1."],
        ["Germination", "Finished Summer Part 1"],
        ["Growth", "Finished Fall Part 2"],
        ["Longing", "Cry for Neva in Winter Part 2"],
        ["Loving", "Pet Neva twenty times over the course of the playthrough."],
        ["Memories", "In the finale, stand still under the tree without acting - Neva will start singing on her own."],
        ["Mentoring", "Soothe young Neva every time the game offers the chance to during Fall Part 1."],
        ["Pollination", "Finish Winter Part 2."],
        ["Provide", "Feed Neva in Summer Part 1"],
        ["Seed", "Finish the game"],
        ["Sprouting", "Finished Summer Part 2"],
        ["Wily", "Let an enemy strike and kill another enemy (a friendly-fire kill) during Summer Part 2."],
    ];

    assert.strictEqual(officialAchievements.length, 18, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
