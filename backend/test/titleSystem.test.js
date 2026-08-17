import { test } from "node:test";
import assert from "node:assert";

import { getTitle } from "../../src/utils/player/titles/titleSystem.js";

test("returns Rookie Hunter below level 10", () => {

    assert.strictEqual(getTitle(1), "Rookie Hunter");
    assert.strictEqual(getTitle(9), "Rookie Hunter");

});

test("returns Achievement Seeker at exactly level 10", () => {

    assert.strictEqual(getTitle(10), "Achievement Seeker");
    assert.strictEqual(getTitle(19), "Achievement Seeker");

});

test("returns Veteran Hunter at exactly level 20", () => {

    assert.strictEqual(getTitle(20), "Veteran Hunter");
    assert.strictEqual(getTitle(29), "Veteran Hunter");

});

test("returns Master Hunter at exactly level 30", () => {

    assert.strictEqual(getTitle(30), "Master Hunter");
    assert.strictEqual(getTitle(49), "Master Hunter");

});

test("returns Legendary Hunter at exactly level 50 and above", () => {

    assert.strictEqual(getTitle(50), "Legendary Hunter");
    assert.strictEqual(getTitle(999), "Legendary Hunter");

});
