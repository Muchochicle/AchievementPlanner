import { test } from "node:test";
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
    xpForNextLevel,
    levelFromTotalXP,
    extractProgressionValue,
    PROGRESSION_METRICS
} from "../utils/progressionMetrics.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test("xpForNextLevel matches the level*level*100 curve", () => {

    assert.strictEqual(xpForNextLevel(1), 100);
    assert.strictEqual(xpForNextLevel(2), 400);
    assert.strictEqual(xpForNextLevel(5), 2500);

});

test("levelFromTotalXP matches known boundary values of the frontend curve", () => {

    assert.strictEqual(levelFromTotalXP(0), 1);
    assert.strictEqual(levelFromTotalXP(99), 1);
    assert.strictEqual(levelFromTotalXP(100), 2);     // 100 -> clears level 1
    assert.strictEqual(levelFromTotalXP(499), 2);
    assert.strictEqual(levelFromTotalXP(500), 3);     // 100 + 400
    assert.strictEqual(levelFromTotalXP(1400), 4);    // 100 + 400 + 900

});

test("levelFromTotalXP is defensive against garbage input and never loops unbounded", () => {

    assert.strictEqual(levelFromTotalXP(-50), 1);
    assert.strictEqual(levelFromTotalXP(NaN), 1);
    assert.strictEqual(levelFromTotalXP("nope"), 1);
    assert.ok(levelFromTotalXP(Number.MAX_SAFE_INTEGER) <= 200);

});

// Guards against the backend copy silently drifting from the frontend
// source it is a deliberate duplicate of (Docker build context excludes
// src/ - same pattern as achievementLogicSync.test.js).
test("backend level curve stays byte-compatible with src/utils/player/level/levelSystem.js", () => {

    const frontendSource = readFileSync(
        path.join(__dirname, "..", "..", "src", "utils", "player", "level", "levelSystem.js"),
        "utf8"
    );

    // The frontend defines the same curve as `level * level * 100`.
    assert.match(frontendSource, /level\s*\*\s*level\s*\*\s*100/);

    // And the same accumulate-until-not-enough loop shape.
    assert.match(frontendSource, /remainingXP\s*>=\s*getXPForNextLevel\(level\)/);

});

test("extractProgressionValue('level') reads a non-negative integer totalXP or null", () => {

    assert.strictEqual(extractProgressionValue({ player: { totalXP: 1250 } }, "level"), 1250);
    assert.strictEqual(extractProgressionValue({ player: { totalXP: 0 } }, "level"), 0);
    assert.strictEqual(extractProgressionValue({ player: { totalXP: -5 } }, "level"), null);
    assert.strictEqual(extractProgressionValue({ player: {} }, "level"), null);
    assert.strictEqual(extractProgressionValue({ player: { totalXP: "x" } }, "level"), null);
    assert.strictEqual(extractProgressionValue({}, "level"), null);
    assert.strictEqual(extractProgressionValue(null, "level"), null);

});

test("extractProgressionValue('longest-streak') reads longestStreak or null", () => {

    assert.strictEqual(extractProgressionValue({ player: { longestStreak: 12 } }, "longest-streak"), 12);
    assert.strictEqual(extractProgressionValue({ player: { longestStreak: 0 } }, "longest-streak"), 0);
    assert.strictEqual(extractProgressionValue({ player: { longestStreak: -1 } }, "longest-streak"), null);
    assert.strictEqual(extractProgressionValue({ player: {} }, "longest-streak"), null);

});

test("PROGRESSION_METRICS.level.display maps the raw ranking value (totalXP) to a level", () => {

    assert.strictEqual(PROGRESSION_METRICS["level"].display(500), 3);
    assert.strictEqual(PROGRESSION_METRICS["longest-streak"].display(9), 9);

});

test("extractProgressionValue returns null for an unknown metric", () => {

    assert.strictEqual(extractProgressionValue({ player: { totalXP: 100 } }, "made-up"), null);

});
