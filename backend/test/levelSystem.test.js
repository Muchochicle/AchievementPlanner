import { test } from "node:test";
import assert from "node:assert";

import {
    getXPForNextLevel,
    calculateLevel,
    calculateCurrentXP
} from "../../src/utils/player/level/levelSystem.js";

// Curve (progression redesign): level 1 -> 2 costs 100 XP (kept from the
// old level*level*100 curve so nobody de-levels), every level from 2
// onward costs level * 150 XP.
test("getXPForNextLevel: 100 for level 1, then level*150", () => {

    assert.strictEqual(getXPForNextLevel(1), 100);
    assert.strictEqual(getXPForNextLevel(2), 300);
    assert.strictEqual(getXPForNextLevel(3), 450);
    assert.strictEqual(getXPForNextLevel(4), 600);
    assert.strictEqual(getXPForNextLevel(10), 1500);
    assert.strictEqual(getXPForNextLevel(20), 3000);
    assert.strictEqual(getXPForNextLevel(50), 7500);

});

test("calculateLevel returns 1 for zero XP", () => {

    assert.strictEqual(calculateLevel(0), 1);
    assert.strictEqual(calculateCurrentXP(0), 0);

});

// Cumulative XP required to *reach* each level under the current curve.
// reach(2) = 100; reach(L>=2) = 100 + sum(150*k for k in 2..L-1)
//          = 75*L*(L-1) - 50.
// Hand-verified by incremental summation of getXPForNextLevel.
const REACH = {
    2: 100,
    3: 400,
    4: 850,
    9: 5350,
    10: 6700,
    19: 25600,
    20: 28450,
    29: 60850,
    30: 65200,
    49: 176350,
    50: 183700
};

for (const [levelStr, cumXP] of Object.entries(REACH)) {

    const level = Number(levelStr);

    test(`calculateLevel boundary: exactly ${cumXP} XP => level ${level}, one XP short => level ${level - 1}`, () => {

        assert.strictEqual(calculateLevel(cumXP), level);
        assert.strictEqual(calculateLevel(cumXP - 1), level - 1);

        // calculateCurrentXP resets to 0 at the exact boundary and is
        // (cost of the previous level - 1) one XP short of it.
        assert.strictEqual(calculateCurrentXP(cumXP), 0);
        assert.strictEqual(calculateCurrentXP(cumXP - 1), getXPForNextLevel(level - 1) - 1);

    });

}

// Explicit regression guard for the one value the product decision was
// built around: a player with exactly 100 XP (two Steam-confirmed
// achievements, no 100% game) must still read as Level 2, never Level 1.
test("a player with exactly 100 XP is Level 2 (no de-levelling from the old curve)", () => {

    assert.strictEqual(calculateLevel(100), 2);
    assert.strictEqual(calculateCurrentXP(100), 0);
    assert.strictEqual(calculateLevel(99), 1);

});

test("calculateCurrentXP is the remainder after calculateLevel's full levels are subtracted", () => {

    // 150 XP: 100 clears level 1, 50 into level 2.
    assert.strictEqual(calculateLevel(150), 2);
    assert.strictEqual(calculateCurrentXP(150), 50);

    // 1400 XP: 100 + 300 + 450 = 850 clears level 4, 550 into level 4->5
    // (which costs 600), so still level 4.
    assert.strictEqual(calculateLevel(1400), 4);
    assert.strictEqual(calculateCurrentXP(1400), 550);

});

test("calculateLevel and calculateCurrentXP agree on the same totalXP (round-trips through the curve)", () => {

    for (const totalXP of [1, 99, 100, 250, 1450, 6700, 28450, 200000]) {

        const level = calculateLevel(totalXP);
        const currentXP = calculateCurrentXP(totalXP);

        let reconstructed = currentXP;

        for (let l = 1; l < level; l++) {

            reconstructed += getXPForNextLevel(l);

        }

        assert.strictEqual(reconstructed, totalXP, `round-trip failed for totalXP ${totalXP}`);

    }

});

// The new curve's cumulative cost to reach any level is <= the old
// (level*level*100) curve's for every level, so every stored totalXP maps
// to a level >= the one the old curve produced. Spot-check against
// hand-computed old-curve levels.
test("no stored totalXP produces a lower level than the old level*level*100 curve did", () => {

    const OLD_CURVE_LEVELS = [
        [0, 1],
        [99, 1],
        [100, 2],       // old reach(2) = 100
        [500, 3],       // old reach(3) = 500
        [1400, 4],      // old reach(4) = 1400
        [3000, 5],      // old reach(5) = 3000
        [28500, 10],    // old reach(10) = 28500
        [247000, 20]    // old reach(20) = 247000
    ];

    for (const [totalXP, oldLevel] of OLD_CURVE_LEVELS) {

        assert.ok(
            calculateLevel(totalXP) >= oldLevel,
            `totalXP ${totalXP}: new level ${calculateLevel(totalXP)} must be >= old level ${oldLevel}`
        );

    }

});

// Highest realistic Steam achievement counts: a top-tier completionist
// (~5,000 achievements = 250,000 XP) and one of the very highest hunters
// on Steam globally (~90,000 achievements = 4,500,000 XP). The curve must
// stay well-defined, monotonic and terminate fast.
test("extreme-but-real achievement totals map to sane, monotonic levels", () => {

    const completionist = 5000 * 50;      // 250,000 XP
    const worldTopHunter = 90000 * 50;    // 4,500,000 XP

    const lvlCompletionist = calculateLevel(completionist);
    const lvlWorldTop = calculateLevel(worldTopHunter);

    assert.ok(lvlCompletionist >= 50, `~5,000 achievements should be well past Legendary (got ${lvlCompletionist})`);
    assert.ok(lvlWorldTop > lvlCompletionist, "more achievements must never mean a lower level");
    assert.ok(Number.isFinite(lvlWorldTop) && lvlWorldTop < 1000, "loop must terminate at a sane bound");

    // currentXP stays within the current level's cost.
    assert.ok(calculateCurrentXP(worldTopHunter) < getXPForNextLevel(lvlWorldTop));

});

test("calculateLevel stays at level 1 for non-positive / non-numeric input", () => {

    assert.strictEqual(calculateLevel(-50), 1);
    assert.strictEqual(calculateLevel(NaN), 1);
    assert.strictEqual(calculateCurrentXP(0), 0);

});
