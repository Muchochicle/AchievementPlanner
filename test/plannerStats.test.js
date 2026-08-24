import { test } from "node:test";
import assert from "node:assert";

// updatePlannerStats() (src/utils/planner/stats.js) had zero test coverage
// anywhere in the repo before this file (Phase 56 test-coverage sweep) -
// real aggregation logic (remaining time/missable count over only
// incomplete achievements, average difficulty over all of them) called on
// every planner render (src/js/game.js's refresh()), with no automated
// regression protection at all. Uses this project's existing "smallest
// shim that does the job" document stub convention (see test/app.test.js).

function makeElements() {

    const elements = {
        "remaining-time": { textContent: "" },
        "average-difficulty": { textContent: "" },
        "missable-remaining": { textContent: "" }
    };

    globalThis.document = {
        getElementById: id => elements[id] ?? null
    };

    return elements;

}

function achievement(id, { estimatedTime, difficulty, missable = false }) {

    return { id, estimatedTime, difficulty, missable };

}

function gameWith(achievements, completedIds = []) {

    return {

        achievements,

        mergedAchievements: {

            playerDataAvailable: true,

            achievements: achievements.map(a => ({

                ap: { id: a.id },
                steamUnlock: { achieved: completedIds.includes(a.id) }

            }))

        }

    };

}

const { updatePlannerStats } = await import("../src/utils/planner/stats.js");

test("shows the placeholder '-' state when the game has no curated achievements at all", () => {

    const elements = makeElements();

    updatePlannerStats({ achievements: [] });

    assert.strictEqual(elements["remaining-time"].textContent, "- min");
    assert.strictEqual(elements["average-difficulty"].textContent, "- / 5");
    assert.strictEqual(elements["missable-remaining"].textContent, "-");

});

test("sums remaining time and missable count only over incomplete achievements, but averages difficulty over every achievement", () => {

    const elements = makeElements();

    const achievements = [

        achievement(1, { estimatedTime: 30, difficulty: 2, missable: true }),   // completed - excluded from time/missable
        achievement(2, { estimatedTime: 20, difficulty: 4, missable: true }),   // pending - included
        achievement(3, { estimatedTime: 10, difficulty: 3, missable: false })   // pending - included, not missable

    ];

    const game = gameWith(achievements, [1]);

    updatePlannerStats(game);

    assert.strictEqual(elements["remaining-time"].textContent, "30 min", "only the two incomplete achievements' estimatedTime (20+10) should count, not the completed one's 30");
    assert.strictEqual(elements["missable-remaining"].textContent, 1, "only achievement 2 is both incomplete and missable - achievement 1 is missable but already completed");

    // Average difficulty is (2+4+3)/3 = 3.0, over ALL achievements
    // (completed ones included) - this is intentional (the UI label is
    // plain "Average Difficulty" with no "remaining" qualifier), not a bug.
    assert.strictEqual(elements["average-difficulty"].textContent, "3.0 / 5");

});

test("remaining time/missable are both 0 once every achievement is completed, but average difficulty still reflects the full curated set", () => {

    const elements = makeElements();

    const achievements = [

        achievement(1, { estimatedTime: 15, difficulty: 1, missable: true }),
        achievement(2, { estimatedTime: 45, difficulty: 5, missable: false })

    ];

    const game = gameWith(achievements, [1, 2]);

    updatePlannerStats(game);

    assert.strictEqual(elements["remaining-time"].textContent, "0 min");
    assert.strictEqual(elements["missable-remaining"].textContent, 0);
    assert.strictEqual(elements["average-difficulty"].textContent, "3.0 / 5", "average difficulty must not read '-' just because nothing remains - the curated set itself isn't empty");

});

test("average difficulty rounds to one decimal place (toFixed(1)) rather than showing a long float", () => {

    const elements = makeElements();

    const achievements = [

        achievement(1, { estimatedTime: 10, difficulty: 1, missable: false }),
        achievement(2, { estimatedTime: 10, difficulty: 2, missable: false }),
        achievement(3, { estimatedTime: 10, difficulty: 2, missable: false })

    ];

    updatePlannerStats(gameWith(achievements, []));

    // (1+2+2)/3 = 1.666... -> "1.7"
    assert.strictEqual(elements["average-difficulty"].textContent, "1.7 / 5");

});

test("an achievement with no merged entry at all (not yet Steam-confirmed) is treated as incomplete, not skipped", () => {

    const elements = makeElements();

    // No mergedAchievements.achievements entry for id 1 at all - findMergedEntry
    // returns null, so `completed` must fall back to false, not throw or
    // silently exclude this achievement's time from the total.
    const game = {

        achievements: [achievement(1, { estimatedTime: 25, difficulty: 3, missable: false })],

        mergedAchievements: { playerDataAvailable: true, achievements: [] }

    };

    updatePlannerStats(game);

    assert.strictEqual(elements["remaining-time"].textContent, "25 min");

});
