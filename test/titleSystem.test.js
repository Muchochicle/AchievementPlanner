import { test } from "node:test";
import assert from "node:assert";

import { getTitle } from "../src/utils/player/titles/titleSystem.js";

// getTitle(level) (src/utils/player/titles/titleSystem.js) is a pure
// level -> title-string mapping with four ascending thresholds:
//
//   level >= 50 -> "Legendary Hunter"
//   level >= 30 -> "Master Hunter"
//   level >= 20 -> "Veteran Hunter"
//   level >= 10 -> "Achievement Seeker"
//   otherwise   -> "Rookie Hunter"   (the first title and the fallback)
//
// It's called on every player-state read (src/utils/player/player.js's
// getPlayer, with player.level from calculateLevel) and had no direct test
// coverage before this file. These tests pin every threshold plus the
// integers immediately below/above it, the first and highest titles, the
// unbounded top tier, and the fallback for out-of-range / non-numeric
// input - as regression guards, NOT as a spec change (the thresholds
// above are the existing rules, copied here only to make the boundary
// table explicit).

const ROOKIE = "Rookie Hunter";
const SEEKER = "Achievement Seeker";
const VETERAN = "Veteran Hunter";
const MASTER = "Master Hunter";
const LEGENDARY = "Legendary Hunter";

// [level, expected title] - each threshold and the value on each side of
// it, walked end to end.
const BOUNDARY_CASES = [
    [1, ROOKIE],   // first possible level
    [2, ROOKIE],
    [9, ROOKIE],   // just below the first threshold
    [10, SEEKER],  // exactly the first threshold
    [11, SEEKER],
    [19, SEEKER],  // just below
    [20, VETERAN], // exactly
    [21, VETERAN],
    [29, VETERAN], // just below
    [30, MASTER],  // exactly
    [31, MASTER],
    [40, MASTER],  // mid-gap: no hidden tier between 30 and 50
    [49, MASTER],  // just below the top threshold
    [50, LEGENDARY], // exactly the top threshold
    [51, LEGENDARY]
];

for (const [level, expected] of BOUNDARY_CASES) {

    test(`getTitle(${level}) === ${JSON.stringify(expected)}`, () => {

        assert.strictEqual(getTitle(level), expected);

    });

}

test("the first title is 'Rookie Hunter' - a brand-new level-1 player", () => {

    assert.strictEqual(getTitle(1), ROOKIE);

});

test("each threshold flips the title on exactly the boundary integer, never one early or one late", () => {

    for (const [threshold, below, atOrAbove] of [
        [10, ROOKIE, SEEKER],
        [20, SEEKER, VETERAN],
        [30, VETERAN, MASTER],
        [50, MASTER, LEGENDARY]
    ]) {

        assert.strictEqual(getTitle(threshold - 1), below, `level ${threshold - 1} must still be "${below}"`);
        assert.strictEqual(getTitle(threshold), atOrAbove, `level ${threshold} must be "${atOrAbove}"`);

    }

});

test("the highest title 'Legendary Hunter' has no upper bound", () => {

    assert.strictEqual(getTitle(50), LEGENDARY);
    assert.strictEqual(getTitle(100), LEGENDARY);
    assert.strictEqual(getTitle(9999), LEGENDARY);
    assert.strictEqual(getTitle(Number.MAX_SAFE_INTEGER), LEGENDARY);
    assert.strictEqual(getTitle(Infinity), LEGENDARY);

});

test("levels below the first threshold all fall back to the first title", () => {

    for (let level = 1; level < 10; level++) {

        assert.strictEqual(getTitle(level), ROOKIE, `level ${level} should be "${ROOKIE}"`);

    }

});

test("a non-positive level falls back to 'Rookie Hunter' rather than producing a stranger result", () => {

    assert.strictEqual(getTitle(0), ROOKIE);
    assert.strictEqual(getTitle(-1), ROOKIE);
    assert.strictEqual(getTitle(-Infinity), ROOKIE);

});

test("a fractional level is bucketed by its threshold comparisons, same as the equivalent integer range", () => {

    assert.strictEqual(getTitle(9.99), ROOKIE);
    assert.strictEqual(getTitle(10.01), SEEKER);
    assert.strictEqual(getTitle(19.999), SEEKER);
    assert.strictEqual(getTitle(29.5), VETERAN);
    assert.strictEqual(getTitle(49.999), MASTER);
    assert.strictEqual(getTitle(50.0001), LEGENDARY);

});

test("a missing / non-numeric level falls back to 'Rookie Hunter', never throws", () => {

    assert.strictEqual(getTitle(undefined), ROOKIE);
    assert.strictEqual(getTitle(null), ROOKIE);
    assert.strictEqual(getTitle(NaN), ROOKIE);
    assert.strictEqual(getTitle(), ROOKIE);

});

test("every title in the ladder is reachable from some level (no tier is dead code)", () => {

    const reached = new Set();

    for (let level = 1; level <= 60; level++) {

        reached.add(getTitle(level));

    }

    assert.deepStrictEqual(
        [...reached].sort(),
        [SEEKER, LEGENDARY, MASTER, ROOKIE, VETERAN].sort()
    );

});

// One end-to-end check that the real XP curve actually lands a player on a
// title boundary - ties calculateLevel (levelSystem.js) to getTitle so a
// change to either that broke the composition would be caught here, not
// just in isolation. Cumulative XP to reach level 10 under the current
// curve (100 for level 1->2, then level*150) is 75*10*9 - 50 = 6700.
test("a player with exactly the XP for level 10 reads as 'Achievement Seeker'; one XP short stays 'Rookie Hunter'", async () => {

    const { calculateLevel } = await import("../src/utils/player/level/levelSystem.js");

    assert.strictEqual(calculateLevel(6700), 10);
    assert.strictEqual(getTitle(calculateLevel(6700)), SEEKER);

    assert.strictEqual(calculateLevel(6699), 9);
    assert.strictEqual(getTitle(calculateLevel(6699)), ROOKIE);

});
