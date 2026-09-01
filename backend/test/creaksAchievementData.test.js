import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/creaks.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 956030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("creaks");

test("getPlannerData('creaks') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for creaks");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Creaks achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Creaks achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Creaks achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art Collector", "Find a painting."],
        ["Art Lover", "Collect all paintings."],
        ["Backstage", "Find this secret room."],
        ["Behind the Curtain", "Find this secret room."],
        ["Behind the Trophies", "Find this secret room."],
        ["Cat’s Back", "Find and complete this interactive painting."],
        ["Dancer", "Find and complete this interactive painting."],
        ["Dark Corner", "Find this secret room."],
        ["Gazebo", "Find this secret room."],
        ["Good Boy", "Find and complete this interactive painting."],
        ["Home Sweet Home", "Find and complete this interactive painting."],
        ["Hurry Up!", "Find this secret room."],
        ["In the Deep", "Find this secret room."],
        ["Meadow Song", "Find and complete this interactive painting."],
        ["Old Bones", "Find this secret room."],
        ["Scrolls", "Find this secret room."],
        ["Secret Room Discovered!", "Find the first secret room."],
        ["Shed", "Find this secret room."],
        ["Stalactites", "Find this secret room."],
        ["Sunrise", "Find and complete this interactive painting."],
        ["Swimmers", "Find and complete this interactive painting."],
        ["The Amazing Magician", "Find and complete this interactive painting."],
        ["The Blue Library", "Find this secret room."],
        ["The Egyptian", "Find this secret room."],
        ["The Exceptional Singer", "Find and complete this interactive painting."],
        ["The Knight", "Find and complete this interactive painting."],
        ["Through the Night", "Complete the story."],
        ["Time for Tea", "Find and complete this interactive painting."],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
