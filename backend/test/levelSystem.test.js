import { test } from "node:test";
import assert from "node:assert";

import {
    getXPForNextLevel,
    calculateLevel,
    calculateCurrentXP
} from "../../src/utils/player/level/levelSystem.js";

test("getXPForNextLevel follows level*level*100", () => {

    assert.strictEqual(getXPForNextLevel(1), 100);
    assert.strictEqual(getXPForNextLevel(2), 400);
    assert.strictEqual(getXPForNextLevel(4), 1600);

});

test("calculateLevel returns 1 for zero XP", () => {

    assert.strictEqual(calculateLevel(0), 1);
    assert.strictEqual(calculateCurrentXP(0), 0);

});

test("calculateLevel advances exactly at each threshold", () => {

    // Hand-verified against the formula (level*level*100 per level) and
    // cross-checked against real observed app data (a totalXP of 1400 has
    // been repeatedly observed in this project as "Level 4, 0/1600 XP").
    assert.strictEqual(calculateLevel(99), 1);
    assert.strictEqual(calculateLevel(100), 2);
    assert.strictEqual(calculateLevel(150), 2);
    assert.strictEqual(calculateLevel(500), 3);
    assert.strictEqual(calculateLevel(1400), 4);

});

test("calculateCurrentXP is the remainder after calculateLevel's full levels are subtracted", () => {

    assert.strictEqual(calculateCurrentXP(150), 50);
    assert.strictEqual(calculateCurrentXP(1400), 0);

});

test("calculateLevel and calculateCurrentXP agree on the same totalXP", () => {

    const totalXP = 1450;
    const level = calculateLevel(totalXP);
    const currentXP = calculateCurrentXP(totalXP);

    // Reconstructing totalXP from (level, currentXP) via the same formula
    // must round-trip back to the original value.
    let reconstructed = currentXP;

    for (let l = 1; l < level; l++) {

        reconstructed += getXPForNextLevel(l);

    }

    assert.strictEqual(reconstructed, totalXP);

});
