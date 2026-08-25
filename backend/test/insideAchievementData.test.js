import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// Phase 72: src/data/games/inside.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 304430 - every name, apiname, AND description here matches that
// response exactly (unlike Celeste, INSIDE's official schema includes a
// real description string for every achievement, so none are curatorial
// annotations). difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this catalog.
const inside = getPlannerData("inside");

test("getPlannerData('inside') returns real planner data with 14 curated achievements", () => {

    assert.ok(inside, "expected real planner data for inside");
    assert.ok(Array.isArray(inside.achievements));
    assert.strictEqual(inside.achievements.length, 14);

});

test("every INSIDE achievement is missable:false, matching the game's own top-level missable field (chapter select covers every secret)", () => {

    assert.strictEqual(inside.missable, false, "sanity check on the game-level field this per-achievement claim is consistent with");

    for (const achievement of inside.achievements) {

        assert.strictEqual(achievement.missable, false, `${achievement.name} should be missable:false`);

    }

});

test("every INSIDE achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = inside.achievements.map(a => a.id);
    const apinames = inside.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every INSIDE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of inside.achievements) {

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

test("every one of the 14 official INSIDE achievement name+description pairs is present, matching the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Murky Waters", "Something's not right down here"],
        ["Field Research", "Unearthing secrets"],
        ["Wee Wee Wee", "They never made it to market"],
        ["Left Behind", "Safe falling and hard landings"],
        ["Obscure Foundations", "Lies beneath the city"],
        ["Friends in low places", "Dislodging derelict in the depths"],
        ["A Tableau", "Skipping stones at the beach"],
        ["Pack Mentality", "Pull together"],
        ["Respite", "Dive back in"],
        ["Unfathomable", "Take a deep breath"],
        ["Clockwork", "Shadows at noon"],
        ["Room for Reflection", "Hanging up"],
        ["Office Space", "Do an elevator pitch"],
        ["The Last One", "It comes together"]
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = inside.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
