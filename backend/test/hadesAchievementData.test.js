import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// Phase 39: src/data/games/hades.json's `achievements` array went from
// empty to 49 real, sourced entries - this is what actually powers the
// Session Planner/Recommended Achievement, which the Hades Game Guide
// (src/data/guides/games/hades.js, Phase 37) had nothing behind until now.
// Every name/description/apiname here was cross-checked against a live
// ISteamUserStats/GetSchemaForGame response for appid 1145360 (fetched
// with the backend's own configured STEAM_API_KEY - the exact call
// getSchemaForGame makes in production) - zero mismatches, zero missing,
// zero extra. difficulty/estimatedTime are explicit curatorial judgments,
// not sourced facts (same as every other planner difficulty/time field in
// this catalog).
const hades = getPlannerData("hades");

test("getPlannerData('hades') returns real planner data with 49 curated achievements", () => {

    assert.ok(hades, "expected real planner data for hades");
    assert.ok(Array.isArray(hades.achievements));
    assert.strictEqual(hades.achievements.length, 49);

});

test("every Hades achievement is missable:false, matching the game's own top-level missable field", () => {

    assert.strictEqual(hades.missable, false, "sanity check on the game-level field this per-achievement claim is consistent with");

    for (const achievement of hades.achievements) {

        assert.strictEqual(achievement.missable, false, `${achievement.name} should be missable:false`);

    }

});

test("every Hades achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = hades.achievements.map(a => a.id);
    const apinames = hades.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Hades achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of hades.achievements) {

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

test("every one of the 49 official Hades achievement names is present, matching the same official list the Game Guide is built from", () => {

    // Same reference list as test/hadesGuide.test.js (independently
    // maintained here since this test validates the data file, not the
    // guide) - both ultimately trace to the same Steam source, so keeping
    // both checks catches a drift between the guide and the actual
    // planner data, not just a drift from Steam.
    const officialAchievementNames = [
        "Escaped Tartarus", "Escaped Asphodel", "Arms Collector", "Friends in High Places",
        "Escaped Elysium", "Chthonic Colleagues", "Is There No Escape?", "Death Dealer",
        "Skelly Slayer", "Well Stocked", "Three-Headed Boy", "Day-or-Night Trader",
        "Back to Work", "Blessed by the Gods", "Blood Bound", "Urge to Sing",
        "Grown Close", "River Denizens", "Home Makeover", "The Family Secret",
        "To Charon's Credit", "Had to Happen", "Tools of the Architect", "Rare Collectible",
        "Master of Arms", "Weapon of Fate", "Something From Everyone", "Hold the Onions",
        "Well Versed", "War-God's Bloodlust", "Champion of Elysium", "Musician and Muse",
        "Haste of Hermes", "Bad Call", "The Useless Trinket", "Thanks, But No Thanks",
        "Slashed Benefits", "Nyx's Mirror", "Night and Darkness", "End to Torment",
        "Infernal Arms", "Dark Reflections", "Divided by Death", "One for the Ages",
        "Harsh Conditions", "Skelly's Last Lamentations", "Thorn of Thanatos", "Complete Set",
        "Friends Forever"
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

    const dataNames = hades.achievements.map(a => a.name).sort();

    assert.deepStrictEqual(dataNames, [...officialAchievementNames].sort());

});
