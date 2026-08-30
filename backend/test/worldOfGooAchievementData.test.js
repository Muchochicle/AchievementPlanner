import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/world-of-goo.json - 8 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 22000 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 8 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("world-of-goo");

test("getPlannerData('world-of-goo') returns real planner data with 8 curated achievements", () => {

    assert.ok(game, "expected real planner data for world-of-goo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 8);

});

test("every World of Goo achievement has a unique id from 1 to 8 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 8 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 8);
    assert.strictEqual(new Set(apinames).size, 8);

});

test("every World of Goo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 8 World of Goo achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Engineer of Goo I", "All OCD Flags in Chapter 1"],
        ["Engineer of Goo II", "All OCD Flags in Chapter 2"],
        ["Engineer of Goo III", "All OCD Flags in Chapter 3"],
        ["Engineer of Goo IV", "All OCD Flags in Chapter 4"],
        ["Engineer of Goo V", "All OCD Flags in Chapter 5"],
        ["Executive Producer of Goo Product", "All Levels Complete"],
        ["Subversive Traveler", "there is a secret"],
        ["The Architect of Goo", "All OCD Flags"],
    ];

    assert.strictEqual(officialAchievements.length, 8, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
