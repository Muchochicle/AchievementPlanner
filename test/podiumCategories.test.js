import { test } from "node:test";
import assert from "node:assert";

import { GLOBAL_PODIUM_CATEGORIES, GAME_PODIUM_CATEGORY, formatHours } from "../src/utils/podiums/podiumCategories.js";

test("GLOBAL_PODIUM_CATEGORIES has exactly the five agreed categories, keyed to match the backend whitelist", () => {

    const keys = GLOBAL_PODIUM_CATEGORIES.map(category => category.key);

    assert.deepStrictEqual(
        new Set(keys),
        new Set(["games-owned", "games-played", "total-playtime", "achievements", "completed-games"])
    );

});

test("GLOBAL_PODIUM_CATEGORIES orders the four core categories first, with the bonus 'games played' category last", () => {

    const keys = GLOBAL_PODIUM_CATEGORIES.map(category => category.key);

    assert.deepStrictEqual(
        keys,
        ["games-owned", "total-playtime", "achievements", "completed-games", "games-played"]
    );

});

test("every category has a non-empty title/icon/description and a working formatValue", () => {

    for (const category of GLOBAL_PODIUM_CATEGORIES) {

        assert.ok(category.title.length > 0);
        assert.ok(category.icon.length > 0);
        assert.ok(category.description.length > 0);
        assert.strictEqual(typeof category.formatValue(42), "string");

    }

});

test("every category key is unique (each maps to exactly one DOM anchor/section)", () => {

    const keys = GLOBAL_PODIUM_CATEGORIES.map(category => category.key);

    assert.strictEqual(new Set(keys).size, keys.length);

});

test("formatHours converts minutes to whole hours with correct singular/plural", () => {

    assert.strictEqual(formatHours(60), "1 hr");
    assert.strictEqual(formatHours(120), "2 hrs");
    assert.strictEqual(formatHours(0), "0 hrs");
    assert.strictEqual(formatHours(90), "2 hrs");

});

test("GAME_PODIUM_CATEGORY reuses the same hours formatting as the global total-playtime category", () => {

    assert.strictEqual(GAME_PODIUM_CATEGORY.formatValue(120), "2 hrs");

});

// ---- Task 6: progression leaderboards ----

import {
    PROGRESSION_PODIUM_CATEGORIES,
    ALL_PODIUM_CATEGORIES
} from "../src/utils/podiums/podiumCategories.js";

test("PROGRESSION_PODIUM_CATEGORIES is exactly [level, longest-streak], keyed to match the backend metric whitelist", () => {

    assert.deepStrictEqual(
        PROGRESSION_PODIUM_CATEGORIES.map(c => c.key),
        ["level", "longest-streak"]
    );

    for (const c of PROGRESSION_PODIUM_CATEGORIES) {

        assert.strictEqual(c.kind, "progression");
        assert.strictEqual(c.group, "Your Progression");
        assert.ok(c.title && c.icon && c.description);
        assert.strictEqual(typeof c.formatValue, "function");

    }

});

test("the level category formats the raw XP total as the Profile-curve level", () => {

    const level = PROGRESSION_PODIUM_CATEGORIES.find(c => c.key === "level");

    // 500 XP = 100 (lvl 1) + 400 (lvl 2) -> level 3, matching levelSystem.js
    assert.strictEqual(level.formatValue(500), "Level 3");
    assert.strictEqual(level.formatValue(0), "Level 1");
    assert.strictEqual(level.formatValue(null), "Level 1");

});

test("the longest-streak category formats a day count with correct pluralisation", () => {

    const streak = PROGRESSION_PODIUM_CATEGORIES.find(c => c.key === "longest-streak");

    assert.strictEqual(streak.formatValue(1), "1 day");
    assert.strictEqual(streak.formatValue(9), "9 days");
    assert.strictEqual(streak.formatValue(0), "0 days");
    assert.strictEqual(streak.formatValue(null), "0 days");

});

test("ALL_PODIUM_CATEGORIES is the 5 Steam categories (tagged global/Steam) then the 2 progression ones, order preserved", () => {

    assert.strictEqual(ALL_PODIUM_CATEGORIES.length, 7);

    assert.deepStrictEqual(
        ALL_PODIUM_CATEGORIES.slice(0, 5).map(c => [c.kind, c.group]),
        Array(5).fill(["global", "Steam"])
    );

    assert.deepStrictEqual(
        ALL_PODIUM_CATEGORIES.slice(5).map(c => c.key),
        ["level", "longest-streak"]
    );

    // Every entry keeps a unique key and a usable formatValue.
    const keys = ALL_PODIUM_CATEGORIES.map(c => c.key);
    assert.strictEqual(new Set(keys).size, keys.length);

});
