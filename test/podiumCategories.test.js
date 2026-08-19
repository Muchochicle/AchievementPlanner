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
