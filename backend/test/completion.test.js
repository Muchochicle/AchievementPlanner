import { test } from "node:test";
import assert from "node:assert";

import {
    findMergedEntry,
    isEntryCompleted,
    getMergedAchievementStats
} from "../utils/achievementCompletion.js";

test("findMergedEntry finds the entry matching ap.id", () => {

    const game = {
        mergedAchievements: {
            achievements: [
                { ap: { id: "a1" } },
                { ap: { id: "a2" } }
            ]
        }
    };

    assert.strictEqual(findMergedEntry(game, "a2"), game.mergedAchievements.achievements[1]);

});

test("findMergedEntry returns null when no entry matches the id", () => {

    const game = {
        mergedAchievements: {
            achievements: [
                { ap: { id: "a1" } }
            ]
        }
    };

    assert.strictEqual(findMergedEntry(game, "missing"), null);

});

test("findMergedEntry returns null when mergedAchievements is missing", () => {

    assert.strictEqual(findMergedEntry({}, "a1"), null);

});

test("findMergedEntry returns null when game itself is missing", () => {

    assert.strictEqual(findMergedEntry(null, "a1"), null);
    assert.strictEqual(findMergedEntry(undefined, "a1"), null);

});

test("isEntryCompleted is true only when playerDataAvailable and steamUnlock.achieved are both true", () => {

    const merged = { playerDataAvailable: true };
    const entry = { steamUnlock: { achieved: true } };

    assert.strictEqual(isEntryCompleted(merged, entry), true);

});

test("isEntryCompleted is false when playerDataAvailable is false", () => {

    const merged = { playerDataAvailable: false };
    const entry = { steamUnlock: { achieved: true } };

    assert.strictEqual(isEntryCompleted(merged, entry), false);

});

test("isEntryCompleted is false when steamUnlock.achieved is false", () => {

    const merged = { playerDataAvailable: true };
    const entry = { steamUnlock: { achieved: false } };

    assert.strictEqual(isEntryCompleted(merged, entry), false);

});

test("isEntryCompleted is false when steamUnlock is missing", () => {

    const merged = { playerDataAvailable: true };
    const entry = {};

    assert.strictEqual(isEntryCompleted(merged, entry), false);

});

test("isEntryCompleted is false when entry itself is missing", () => {

    const merged = { playerDataAvailable: true };

    assert.strictEqual(isEntryCompleted(merged, null), false);

});

test("isEntryCompleted is false when merged itself is missing", () => {

    const entry = { steamUnlock: { achieved: true } };

    assert.strictEqual(isEntryCompleted(null, entry), false);

});

test("getMergedAchievementStats computes total/completed/percentage", () => {

    const game = {
        mergedAchievements: {
            playerDataAvailable: true,
            achievements: [
                { steamUnlock: { achieved: true } },
                { steamUnlock: { achieved: true } },
                { steamUnlock: { achieved: false } },
                { steamUnlock: { achieved: false } }
            ]
        }
    };

    const stats = getMergedAchievementStats(game);

    assert.deepStrictEqual(stats, { total: 4, completed: 2, percentage: 50 });

});

test("getMergedAchievementStats reports zero completed when playerDataAvailable is false", () => {

    const game = {
        mergedAchievements: {
            playerDataAvailable: false,
            achievements: [
                { steamUnlock: { achieved: true } },
                { steamUnlock: { achieved: true } }
            ]
        }
    };

    const stats = getMergedAchievementStats(game);

    assert.deepStrictEqual(stats, { total: 2, completed: 0, percentage: 0 });

});

test("getMergedAchievementStats returns percentage 0 (not NaN) when there are zero achievements", () => {

    const game = {
        mergedAchievements: {
            playerDataAvailable: true,
            achievements: []
        }
    };

    const stats = getMergedAchievementStats(game);

    assert.deepStrictEqual(stats, { total: 0, completed: 0, percentage: 0 });

});

test("getMergedAchievementStats handles a missing mergedAchievements gracefully", () => {

    const stats = getMergedAchievementStats({});

    assert.deepStrictEqual(stats, { total: 0, completed: 0, percentage: 0 });

});
