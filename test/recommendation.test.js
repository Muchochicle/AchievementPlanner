import { test } from "node:test";
import assert from "node:assert";

import { getRecommendedAchievement } from "../src/utils/planner/recommendation/recommendation.js";
import { skipAchievement, clearSkippedAchievements } from "../src/utils/planner/recommendation/skipped.js";

function makeGame(entries, { steamOnlyCount } = {}) {

    // entries: [{ id, difficulty, estimatedTime, missable, achieved }]
    // steamOnlyCount: how many achievements Steam's live schema reports
    // outside the curated set (see achievementMerger.js) - omitted by
    // default (undefined), matching what most tests here don't care about.
    return {

        achievements: entries.map(e => ({
            id: e.id,
            difficulty: e.difficulty,
            estimatedTime: e.estimatedTime,
            missable: e.missable ?? false
        })),

        mergedAchievements: {
            playerDataAvailable: true,
            steamOnlyCount,
            achievements: entries.map(e => ({
                ap: { id: e.id },
                steamUnlock: { achieved: e.achieved ?? false }
            }))
        }

    };

}

test("getRecommendedAchievement reports empty for a game with no curated achievements at all", () => {

    const game = { achievements: [] };

    assert.deepStrictEqual(getRecommendedAchievement(game), { empty: true });

});

test("getRecommendedAchievement reports empty (not a crash) for a game with a missing achievements field", () => {

    // Regression test: this used to read game.achievements.length with no
    // optional chaining, inconsistent with session-planner.js's own guard
    // for the identical field (game?.achievements?.length). Both render
    // from the same game.js refresh() cycle, so a game object missing
    // achievements entirely (schema-permitted, even though the mapper
    // currently always fills in []) would throw "Cannot read properties
    // of undefined (reading 'length')" and take down the whole game page.
    const game = { achievements: undefined };

    assert.deepStrictEqual(getRecommendedAchievement(game), { empty: true });

});

test("getRecommendedAchievement returns null when every achievement is already completed and steamOnlyCount is missing entirely", () => {

    // Edge case: mergedAchievements exists (so completion detection works)
    // but never sets steamOnlyCount at all - a malformed/older merge
    // response shape, not just "explicitly 0". Must fall back to the
    // original "complete" behavior (null), not silently claim there's
    // more to do.
    clearSkippedAchievements();

    const game = makeGame([{ id: 1, difficulty: 1, estimatedTime: 5, achieved: true }]);

    assert.strictEqual(game.mergedAchievements.steamOnlyCount, undefined, "sanity check: this fixture must not set steamOnlyCount");
    assert.strictEqual(getRecommendedAchievement(game), null);

});

test("getRecommendedAchievement returns null (true 100% completion) when every achievement is completed and Steam confirms nothing else exists (steamOnlyCount === 0)", () => {

    clearSkippedAchievements();

    const game = makeGame(
        [{ id: 1, difficulty: 1, estimatedTime: 5, achieved: true }],
        { steamOnlyCount: 0 }
    );

    assert.strictEqual(getRecommendedAchievement(game), null);

});

test("getRecommendedAchievement does NOT claim 100% completion when the curated list is exhausted but Steam reports more achievements (steamOnlyCount > 0)", () => {

    // Regression test for the false-completion bug identified in
    // PHASE_42_AUDIT.md: Phase 40 fixed this concretely for Portal 2 by
    // completing its curated data, but the underlying check never
    // cross-referenced Steam's live total, so the same false claim would
    // silently reappear for any game whose curated set becomes a subset of
    // Steam's real achievement list again (a future DLC/update, or a
    // future catalog game shipped with partial data).
    clearSkippedAchievements();

    const game = makeGame(
        [{ id: 1, difficulty: 1, estimatedTime: 5, achieved: true }],
        { steamOnlyCount: 5 }
    );

    const result = getRecommendedAchievement(game);

    assert.notStrictEqual(result, null, "must not fall back to the true-100%-completion null state");
    assert.deepStrictEqual(result, { curatedComplete: true, steamOnlyCount: 5 });

});

test("getRecommendedAchievement returns a normal recommendation unaffected by steamOnlyCount when incomplete achievements remain", () => {

    // steamOnlyCount only matters once the curated list is exhausted
    // (achievements.length === 0) - it must have no effect at all while
    // there's still a real curated achievement to recommend.
    clearSkippedAchievements();

    const game = makeGame(
        [{ id: 1, difficulty: 1, estimatedTime: 5 }],
        { steamOnlyCount: 12 }
    );

    const result = getRecommendedAchievement(game);

    assert.strictEqual(result.id, 1);
    assert.strictEqual(result.curatedComplete, undefined);

});

test("getRecommendedAchievement excludes a skipped achievement even though it isn't completed", () => {

    clearSkippedAchievements();

    const game = makeGame([
        { id: 1, difficulty: 1, estimatedTime: 5 },
        { id: 2, difficulty: 5, estimatedTime: 60 }
    ]);

    skipAchievement(1);

    const result = getRecommendedAchievement(game);

    assert.strictEqual(result.id, 2, "the skipped achievement (id 1) must never be recommended, even though it would otherwise score highest");

    clearSkippedAchievements();

});

test("getRecommendedAchievement prefers easy, non-missable, quick achievements over hard/slow/missable ones", () => {

    clearSkippedAchievements();

    const game = makeGame([
        { id: 1, difficulty: 5, estimatedTime: 90, missable: true },  // score 0
        { id: 2, difficulty: 1, estimatedTime: 5, missable: false }   // score 3+2+2 = 7
    ]);

    const result = getRecommendedAchievement(game);

    assert.strictEqual(result.id, 2);
    assert.ok(result.reasons.includes("Very easy achievement"));
    assert.ok(result.reasons.includes("Cannot be missed"));
    assert.ok(result.reasons.includes("Quick to complete"));

});

test("getRecommendedAchievement's reasons omit criteria the top pick doesn't actually meet", () => {

    clearSkippedAchievements();

    const game = makeGame([{ id: 1, difficulty: 5, estimatedTime: 90, missable: true }]);

    const result = getRecommendedAchievement(game);

    assert.strictEqual(result.reasons.includes("Very easy achievement"), false);
    assert.strictEqual(result.reasons.includes("Cannot be missed"), false);
    assert.strictEqual(result.reasons.includes("Quick to complete"), false);

});
