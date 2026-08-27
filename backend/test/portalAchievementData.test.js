import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/portal.json - 15 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 400 (fetched
// through this app's own services/steamApi.js) - every name, apiname, AND
// description here matches that response exactly, independently
// cross-checked against Steam's public community achievement stats page
// for appid 400. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const portal = getPlannerData("portal");

test("getPlannerData('portal') returns real planner data with 15 curated achievements", () => {

    assert.ok(portal, "expected real planner data for portal");
    assert.ok(Array.isArray(portal.achievements));
    assert.strictEqual(portal.achievements.length, 15);

});

test("every Portal achievement is missable:false, matching the game's own top-level missable field (chapter select, Advanced Maps, and Challenge Mode all stay available forever)", () => {

    assert.strictEqual(portal.missable, false, "sanity check on the game-level field this per-achievement claim is consistent with");

    for (const achievement of portal.achievements) {

        assert.strictEqual(achievement.missable, false, `${achievement.name} should be missable:false`);

    }

});

test("every Portal achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = portal.achievements.map(a => a.id);
    const apinames = portal.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Portal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of portal.achievements) {

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

test("every one of the 15 official Portal achievement name+description pairs is present, matching the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Lab Rat", "Acquire the fully powered Aperture Science Handheld Portal Device."],
        ["Fratricide", "Do whatever it takes to survive."],
        ["Partygoer", "Make the correct party escort submission position decision."],
        ["Heartbreaker", "Complete Portal."],
        ["Terminal Velocity", "Fall 30,000 feet."],
        ["Long Jump", "Jump 300 feet."],
        ["Cupcake", "Beat two Portal advanced maps."],
        ["Fruitcake", "Beat four Portal advanced maps."],
        ["Vanilla Crazy Cake", "Beat all six Portal advanced maps."],
        ["Basic Science", "Earn bronze medals on all Portal challenges."],
        ["Rocket Science", "Earn silver medals on all Portal challenges."],
        ["Aperture Science", "Earn gold medals on all Portal challenges."],
        ["Camera Shy", "Detach security cameras from the walls."],
        ["Friendly Fire", "Knock down a turret with another turret."],
        ["Transmission Received", "..?"]
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = portal.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
