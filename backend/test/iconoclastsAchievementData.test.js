import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/iconoclasts.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 393520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("iconoclasts");

test("getPlannerData('iconoclasts') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for iconoclasts");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Iconoclasts achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Iconoclasts achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Iconoclasts achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beaucoup Booty", "Get all chests in one playthrough."],
        ["Coloring Agent", "Survive the encounter with an agent."],
        ["Feature Creep", "Made a tweak."],
        ["Life Experience", "Complete the game."],
        ["Melodrama", "Defeat the optional boss Fitzroy - found by talking to the NPC Letícia across five locations (Blockrock, Share Wastelands, Ferrier Shockwood, Isilugar and Darland Ascent), then diving deep on the right side of the Glass Strait (at least one Breathless tweak recommended)."],
        ["Multitool", "Make all main tweaks."],
        ["One-Hit Wonder", "Beat Challenge mode."],
        ["Parrying Mechanic", "Use the wrench to deflect danger."],
        ["Pearly Gates", "Reach the city."],
        ["Pitch Black", "Protect the rocket."],
        ["Psychopomps", "Defeat the optional boss Mother's Corners."],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
