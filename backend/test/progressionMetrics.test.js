import { test } from "node:test";
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

import {
    xpForNextLevel,
    levelFromTotalXP,
    extractProgressionValue,
    PROGRESSION_METRICS,
    authoritativeLevelValue,
    clampSubmittedStreak,
    XP_PER_ACHIEVEMENT,
    XP_PER_GAME_COMPLETION,
    FIRST_SYNC_STREAK_CEILING
} from "../utils/progressionMetrics.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test("xpForNextLevel is 100 for level 1, then level*150", () => {

    assert.strictEqual(xpForNextLevel(1), 100);
    assert.strictEqual(xpForNextLevel(2), 300);
    assert.strictEqual(xpForNextLevel(3), 450);
    assert.strictEqual(xpForNextLevel(5), 750);
    assert.strictEqual(xpForNextLevel(50), 7500);

});

test("levelFromTotalXP matches known boundary values of the frontend curve", () => {

    assert.strictEqual(levelFromTotalXP(0), 1);
    assert.strictEqual(levelFromTotalXP(99), 1);
    assert.strictEqual(levelFromTotalXP(100), 2);     // 100 -> clears level 1
    assert.strictEqual(levelFromTotalXP(399), 2);
    assert.strictEqual(levelFromTotalXP(400), 3);     // 100 + 300
    assert.strictEqual(levelFromTotalXP(849), 3);
    assert.strictEqual(levelFromTotalXP(850), 4);     // 100 + 300 + 450
    assert.strictEqual(levelFromTotalXP(6700), 10);   // 75*10*9 - 50

});

test("levelFromTotalXP never returns a lower level than the old level*level*100 curve did", () => {

    // Old cumulative reach points: reach(3)=500, reach(5)=3000,
    // reach(10)=28500, reach(20)=247000.
    assert.ok(levelFromTotalXP(100) >= 2);
    assert.ok(levelFromTotalXP(500) >= 3);
    assert.ok(levelFromTotalXP(3000) >= 5);
    assert.ok(levelFromTotalXP(28500) >= 10);
    assert.ok(levelFromTotalXP(247000) >= 20);

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

    // The frontend defines the same curve: 100 XP for level 1, else level*150.
    assert.match(frontendSource, /level\s*===\s*1\s*\?\s*100\s*:\s*level\s*\*\s*150/);

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

test("authoritativeLevelValue computes XP from Steam-verified counts, ignoring any client blob", () => {

    assert.strictEqual(
        authoritativeLevelValue({ achievementsUnlocked: 10, gamesCompleted100: 2, achievementsStatus: "available" }),
        10 * XP_PER_ACHIEVEMENT + 2 * XP_PER_GAME_COMPLETION
    );

    assert.strictEqual(
        authoritativeLevelValue({ achievementsUnlocked: 0, gamesCompleted100: 0, achievementsStatus: "partial" }),
        0
    );

});

test("authoritativeLevelValue returns null for unqualifying/invalid rows, matching the Steam-verified podiums' own stance", () => {

    assert.strictEqual(authoritativeLevelValue({ achievementsUnlocked: 5, gamesCompleted100: 0, achievementsStatus: "unknown" }), null);
    assert.strictEqual(authoritativeLevelValue({ achievementsUnlocked: null, gamesCompleted100: 0, achievementsStatus: "available" }), null);
    assert.strictEqual(authoritativeLevelValue({ achievementsUnlocked: -1, gamesCompleted100: 0, achievementsStatus: "available" }), null);
    assert.strictEqual(authoritativeLevelValue({}), null);
    assert.strictEqual(authoritativeLevelValue(), null);

});

test("clampSubmittedStreak caps a brand-new account's first-ever submission at FIRST_SYNC_STREAK_CEILING", () => {

    assert.strictEqual(
        clampSubmittedStreak({ submittedStreak: 99999, previousStreak: null, previousUpdatedAt: null }),
        FIRST_SYNC_STREAK_CEILING
    );

    // A genuinely modest first-sync value (e.g. real pre-existing local/
    // anonymous play) passes through unclamped.
    assert.strictEqual(
        clampSubmittedStreak({ submittedStreak: 5, previousStreak: null, previousUpdatedAt: null }),
        5
    );

});

test("clampSubmittedStreak lets honest day-by-day growth through untouched", () => {

    const previousUpdatedAt = new Date("2026-01-01T00:00:00.000Z");
    const now = new Date("2026-01-02T00:00:00.000Z"); // exactly 1 real day later

    assert.strictEqual(
        clampSubmittedStreak({ submittedStreak: 8, previousStreak: 7, previousUpdatedAt, now }),
        8
    );

});

test("clampSubmittedStreak rejects a DevTools-style jump far beyond what real elapsed time could explain", () => {

    const previousUpdatedAt = new Date("2026-01-01T00:00:00.000Z");
    const now = new Date("2026-01-01T02:00:00.000Z"); // 2 hours later, same day

    const clamped = clampSubmittedStreak({ submittedStreak: 99999, previousStreak: 7, previousUpdatedAt, now });

    // Only 2 real hours elapsed (well under the clock-skew grace window),
    // so zero extra growth is plausible - clamped straight back to previous.
    assert.strictEqual(clamped, 7);
    assert.ok(clamped < 99999);

});

test("clampSubmittedStreak cannot be gamed by calling it repeatedly with ~0 elapsed time between calls", () => {

    const previousUpdatedAt = new Date("2026-01-01T00:00:00.000Z");
    const now = new Date("2026-01-01T00:00:00.010Z"); // 10ms later

    // Simulate a script looping this call many times in immediate
    // succession, each time re-feeding the previous call's clamped result
    // back in as `previousStreak` (exactly what the controller does, since
    // it re-reads the just-stored row on every request).
    let streak = 7;

    for (let i = 0; i < 50; i++) {

        streak = clampSubmittedStreak({ submittedStreak: 99999, previousStreak: streak, previousUpdatedAt, now });

    }

    assert.strictEqual(streak, 7, "50 rapid-fire calls must not accumulate any growth beyond the real elapsed time");

});

test("clampSubmittedStreak never regresses an existing streak after a real gap (streak is a high-water mark)", () => {

    const previousUpdatedAt = new Date("2026-01-01T00:00:00.000Z");
    const now = new Date("2026-01-10T00:00:00.000Z"); // 9 real days of inactivity

    // The client never sends a smaller longestStreak than it already had -
    // confirm the bound doesn't accidentally clamp below the resubmitted
    // (unchanged) previous value either.
    assert.strictEqual(
        clampSubmittedStreak({ submittedStreak: 7, previousStreak: 7, previousUpdatedAt, now }),
        7
    );

});

test("clampSubmittedStreak treats a non-positive/non-numeric submission as 0", () => {

    assert.strictEqual(clampSubmittedStreak({ submittedStreak: 0, previousStreak: 5, previousUpdatedAt: new Date() }), 0);
    assert.strictEqual(clampSubmittedStreak({ submittedStreak: -3, previousStreak: 5, previousUpdatedAt: new Date() }), 0);
    assert.strictEqual(clampSubmittedStreak({ submittedStreak: "nope", previousStreak: 5, previousUpdatedAt: new Date() }), 0);

});
