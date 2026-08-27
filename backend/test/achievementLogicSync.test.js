import { test } from "node:test";
import assert from "node:assert";

// backend/utils/achievementAvailability.js and achievementCompletion.js are
// deliberate duplicates of the frontend's src/utils/planner/achievement/*.js
// (see those backend files' own header comments for why: this backend is
// deployed as a standalone Docker image whose build context can't reach
// outside backend/). This test is the mechanical guard that replaces the
// "single shared file" guarantee those frontend files' own comments
// describe - if either side changes without the other, one of the
// assertions below fails.
import {
    classifyAchievementAvailability as backendClassify,
    ACHIEVEMENT_AVAILABILITY_LABELS as backendLabels
} from "../utils/achievementAvailability.js";

import {
    findMergedEntry as backendFindMergedEntry,
    isEntryCompleted as backendIsEntryCompleted,
    getMergedAchievementStats as backendGetStats
} from "../utils/achievementCompletion.js";

import {
    classifyAchievementAvailability as frontendClassify,
    ACHIEVEMENT_AVAILABILITY_LABELS as frontendLabels
} from "../../src/utils/planner/achievement/availability.js";

import {
    findMergedEntry as frontendFindMergedEntry,
    isEntryCompleted as frontendIsEntryCompleted,
    getMergedAchievementStats as frontendGetStats
} from "../../src/utils/planner/achievement/completion.js";

const AVAILABILITY_CASES = [
    { schemaStatus: "unavailable", hasAchievements: true, playerDataStatus: "available", hasPlanner: true },
    { schemaStatus: "available", hasAchievements: false },
    { schemaStatus: "available", hasAchievements: false, hasPlanner: false },
    { schemaStatus: "available", hasAchievements: true, playerDataStatus: "unavailable" },
    { schemaStatus: "available", hasAchievements: true, playerDataStatus: "transient" },
    { schemaStatus: "available", hasAchievements: true, playerDataStatus: "available", hasPlanner: false },
    { schemaStatus: "available", hasAchievements: true, playerDataStatus: null, hasPlanner: false },
    { schemaStatus: "available", hasAchievements: true, playerDataStatus: "available", hasPlanner: true },
    undefined
];

test("classifyAchievementAvailability: backend copy agrees with the frontend original on every case", () => {

    for (const input of AVAILABILITY_CASES) {

        assert.strictEqual(
            backendClassify(input),
            frontendClassify(input),
            `mismatch for input ${JSON.stringify(input)}`
        );

    }

});

test("ACHIEVEMENT_AVAILABILITY_LABELS: backend copy is identical to the frontend original", () => {

    assert.deepStrictEqual(backendLabels, frontendLabels);

});

const COMPLETION_GAMES = [
    null,
    undefined,
    { mergedAchievements: undefined },
    { mergedAchievements: { achievements: [] } },
    {
        mergedAchievements: {
            playerDataAvailable: true,
            achievements: [
                { ap: { id: "a1" }, steamUnlock: { achieved: true } },
                { ap: { id: "a2" }, steamUnlock: { achieved: false } },
                { ap: { id: "a3" }, steamUnlock: null }
            ]
        }
    },
    {
        mergedAchievements: {
            playerDataAvailable: false,
            achievements: [
                { ap: { id: "a1" }, steamUnlock: { achieved: true } }
            ]
        }
    }
];

test("getMergedAchievementStats: backend copy agrees with the frontend original on every case", () => {

    for (const game of COMPLETION_GAMES) {

        assert.deepStrictEqual(
            backendGetStats(game),
            frontendGetStats(game),
            `mismatch for game ${JSON.stringify(game)}`
        );

    }

});

test("findMergedEntry and isEntryCompleted: backend copy agrees with the frontend original", () => {

    const game = COMPLETION_GAMES[4];
    const merged = game.mergedAchievements;

    for (const id of ["a1", "a2", "a3", "missing"]) {

        // Both copies search the exact same `game` object, so a found
        // entry is the same object reference either way, and a miss is
        // null either way - strictEqual covers both without special-casing.
        assert.strictEqual(
            backendFindMergedEntry(game, id),
            frontendFindMergedEntry(game, id)
        );

    }

    for (const entry of merged.achievements) {

        assert.strictEqual(
            backendIsEntryCompleted(merged, entry),
            frontendIsEntryCompleted(merged, entry)
        );

    }

});
