import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// Phase 72: src/data/games/celeste.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 504230 (the backend's own configured STEAM_API_KEY, the exact call
// getSchemaForGame makes in production) - every name and apiname here
// matches that response exactly. Most Celeste achievements ship with no
// official Steam description at all (only "Celeste"/CH7 and "1UP!"/ONEUP
// do); every other description is a curatorial annotation grounded in the
// apiname's own naming convention (CH1-7 = chapter A-Side clear,
// HEART1-8/BSIDE1-8 = per-chapter Crystal Heart/B-Side, matching this
// codebase's existing convention that difficulty/estimatedTime are
// curatorial judgments, not sourced facts - see hadesAchievementData.test.js.
const celeste = getPlannerData("celeste");

test("getPlannerData('celeste') returns real planner data with 32 curated achievements", () => {

    assert.ok(celeste, "expected real planner data for celeste");
    assert.ok(Array.isArray(celeste.achievements));
    assert.strictEqual(celeste.achievements.length, 32);

});

test("every Celeste achievement is missable:false, matching the game's own top-level missable field (full chapter select)", () => {

    assert.strictEqual(celeste.missable, false, "sanity check on the game-level field this per-achievement claim is consistent with");

    for (const achievement of celeste.achievements) {

        assert.strictEqual(achievement.missable, false, `${achievement.name} should be missable:false`);

    }

});

test("every Celeste achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = celeste.achievements.map(a => a.id);
    const apinames = celeste.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every Celeste achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of celeste.achievements) {

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

test("every one of the 32 official Celeste achievement names is present, matching the live GetSchemaForGame response", () => {

    const officialAchievementNames = [
        "Celeste", "Forsaken", "Archaeology", "Checking Out", "Breathe", "In the Mirror", "Reflection",
        "Strawberry Badge", "Strawberry Medal", "Impress Your Friends", "Gateway", "1UP!", "Real Gamer",
        "Pointless Machines", "Sever the Skyline", "Resurrections", "Black Moonrise", "Scattered and Lost",
        "Good Karma", "Eye of the Storm", "Golden Feather", "Quiet and Falling", "Mirror Magic",
        "Heavy and Frail", "Center of the Earth", "Pink Sunrise", "No More Running", "Heart of the Mountain",
        "Say Goodbye", "Thanks For Playing", "Farewell", "Wow"
    ];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

    const dataNames = celeste.achievements.map(a => a.name).sort();

    assert.deepStrictEqual(dataNames, [...officialAchievementNames].sort());

});

test("every one of the 32 official Celeste apinames is present, matching the live GetSchemaForGame response", () => {

    const officialApinames = [
        "CH1", "CH2", "CH3", "CH4", "CH5", "CH6", "CH7",
        "HEART1", "HEART2", "HEART3", "HEART4", "HEART5", "HEART6", "HEART7", "HEART8",
        "BSIDE1", "BSIDE2", "BSIDE3", "BSIDE4", "BSIDE5", "BSIDE6", "BSIDE7", "BSIDE8",
        "STRB1", "STRB2", "STRB3", "CASS", "ONEUP", "PICO8", "CSIDES", "FAREWELL", "WOW"
    ];

    assert.strictEqual(officialApinames.length, 32, "sanity check on this test's own reference list");

    const dataApinames = celeste.achievements.map(a => a.apiname).sort();

    assert.deepStrictEqual(dataApinames, [...officialApinames].sort());

});
