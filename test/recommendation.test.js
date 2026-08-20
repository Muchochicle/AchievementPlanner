import { test } from "node:test";
import assert from "node:assert";

import { getRecommendedAchievement } from "../src/utils/planner/recommendation/recommendation.js";
import { skipAchievement, clearSkippedAchievements } from "../src/utils/planner/recommendation/skipped.js";

function makeGame(entries) {

    // entries: [{ id, difficulty, estimatedTime, missable, achieved }]
    return {

        achievements: entries.map(e => ({
            id: e.id,
            difficulty: e.difficulty,
            estimatedTime: e.estimatedTime,
            missable: e.missable ?? false
        })),

        mergedAchievements: {
            playerDataAvailable: true,
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

test("getRecommendedAchievement returns null when every achievement is already completed", () => {

    clearSkippedAchievements();

    const game = makeGame([{ id: 1, difficulty: 1, estimatedTime: 5, achieved: true }]);

    assert.strictEqual(getRecommendedAchievement(game), null);

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
