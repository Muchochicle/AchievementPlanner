import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/limbo.json - 13 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 48000
// (fetched through this app's own services/steamApi.js) - independently
// cross-checked against Steam's public community achievement stats page
// for appid 48000. 12 of the 13 ship a real, official Steam description;
// DING! is a hidden achievement whose description Steam never exposes
// publicly (confirmed on both sources) - its description here is a
// curatorial summary of its real, community-documented unlock condition
// (find all 10 eggs, then complete the hidden secret level), same
// "curatorial description for a Steam-silent achievement" precedent as
// this catalog's Celeste entry. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time field
// in this catalog.
const limbo = getPlannerData("limbo");

test("getPlannerData('limbo') returns real planner data with 13 curated achievements", () => {

    assert.ok(limbo, "expected real planner data for limbo");
    assert.ok(Array.isArray(limbo.achievements));
    assert.strictEqual(limbo.achievements.length, 13);

});

test("every LIMBO achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = limbo.achievements.map(a => a.id);
    const apinames = limbo.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every LIMBO achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of limbo.achievements) {

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

test("every one of the 12 officially-described LIMBO achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // DING! (id 13) is excluded here - Steam never exposes a public
    // description for it (confirmed via both GetSchemaForGame and Steam's
    // community stats page), so it's covered by its own dedicated test
    // below instead of this exact-match check.
    const officialAchievements = [
        ["Wrong Way", "That's not right"],
        ["Altitude is Attitude", "Exploration off the ground"],
        ["It's Stuck", "Prepare a dry landing"],
        ["Urban Exploration", "Involves heavy lifting"],
        ["Alone in the Dark", "Beneath the arthropod"],
        ["Climbing the Cog", "Don't pull the lever just because you can"],
        ["Backtracking", "Ride the crates"],
        ["Guided by Sparks", "The crate is key"],
        ["Under Ground", "Vertical passageway"],
        ["Going Up", "Don't let gravity keep you down"],
        ["Where Credit is Due", "Perseverance has its own reward"],
        ["No Point in Dying", "Complete the game in one sitting with five or less deaths"]
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = limbo.achievements
        .filter(a => a.name !== "DING!")
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("DING! (Steam-silent achievement) still has its own real name and a non-empty curatorial description", () => {

    const ding = limbo.achievements.find(a => a.apiname === "ACH_13");

    assert.ok(ding, "expected an achievement with apiname ACH_13");
    assert.strictEqual(ding.name, "DING!");
    assert.ok(ding.description.length > 0);

});
