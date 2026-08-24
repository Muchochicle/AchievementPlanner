import { test } from "node:test";
import assert from "node:assert";

import { createSession, resetSession } from "../src/utils/planner/sessionPlanner.js";

// Direct, isolated coverage of sessionPlanner.js's own in-memory cache -
// sessionManager.test.js already exercises this indirectly through
// getSession() (which is how a real page actually reaches it), but this
// file targets createSession()'s cache-hit branch specifically so its
// PHASE_48_AUDIT.md Finding 7 fallthrough fix is proven correct on its own,
// independent of sessionManager.js's own behavior.

function makeGame(slug, achievementIds) {

    return {

        slug,

        achievements: achievementIds.map(id => ({
            id,
            difficulty: 1,
            estimatedTime: 10
        })),

        mergedAchievements: {
            playerDataAvailable: true,
            achievements: achievementIds.map(id => ({
                ap: { id },
                steamUnlock: { achieved: false }
            }))
        }

    };

}

test("createSession regenerates from the remaining pool once every cached achievement is complete, instead of permanently returning [] (PHASE_48_AUDIT.md Finding 7)", () => {

    resetSession();

    const slug = "session-planner-test-regenerate-after-full-completion";
    const game = makeGame(slug, [201, 202, 203]);

    // A 25-minute target with 3 equal (10-minute) achievements plans
    // exactly the first two, same construction as sessionManager.test.js's
    // equivalent case.
    const original = createSession(game, 25);
    assert.deepStrictEqual(original.map(a => a.id).sort(), [201, 202]);

    // Complete both cached achievements while 203 remains open.
    game.mergedAchievements.achievements.find(e => e.ap.id === 201).steamUnlock.achieved = true;
    game.mergedAchievements.achievements.find(e => e.ap.id === 202).steamUnlock.achieved = true;

    const afterCompletion = createSession(game, 25);

    assert.ok(afterCompletion.length > 0, "must rebuild from the remaining pool, not stay stuck returning []");
    assert.deepStrictEqual(afterCompletion.map(a => a.id), [203]);

});

test("createSession still correctly returns [] (not a crash or an infinite fallthrough) when every achievement in the whole game is complete, not just the cached subset", () => {

    resetSession();

    const slug = "session-planner-test-regenerate-into-genuinely-empty";
    const game = makeGame(slug, [211, 212]);

    createSession(game, 45);

    game.mergedAchievements.achievements.find(e => e.ap.id === 211).steamUnlock.achieved = true;
    game.mergedAchievements.achievements.find(e => e.ap.id === 212).steamUnlock.achieved = true;

    let session;
    assert.doesNotThrow(() => { session = createSession(game, 45); });
    assert.deepStrictEqual(session, []);

});

test("createSession's regenerated cache is itself usable on a subsequent call - the new session, not the stale one, is what gets re-filtered next", () => {

    resetSession();

    const slug = "session-planner-test-regenerated-cache-reused";
    const game = makeGame(slug, [221, 222, 223]);

    createSession(game, 25);

    game.mergedAchievements.achievements.find(e => e.ap.id === 221).steamUnlock.achieved = true;
    game.mergedAchievements.achievements.find(e => e.ap.id === 222).steamUnlock.achieved = true;

    const regenerated = createSession(game, 25);
    assert.deepStrictEqual(regenerated.map(a => a.id), [223]);

    // A third call, with nothing new completed, must keep reading the
    // regenerated cache back - not re-derive from stale ids 221/222 again.
    const readBack = createSession(game, 25);
    assert.deepStrictEqual(readBack.map(a => a.id), [223]);

});

// Finding 2 (PHASE_51-54_AUDIT.md) - targetMinutes was previously
// "write-only" on a cache hit: once anything was cached, every subsequent
// call re-filtered for completion but never re-validated the cached
// session's total time against a newly-requested (possibly smaller)
// duration, silently returning a session sized for the wrong budget.
test("createSession rebuilds instead of returning a stale cache when a smaller duration no longer fits the previously-cached session's total time", () => {

    resetSession();

    const slug = "session-planner-test-duration-shrink-invalidates-cache";
    const game = makeGame(slug, [231, 232, 233]);

    // 25-minute target with three 10-minute achievements caches exactly
    // the first two (20 minutes total) - the third doesn't fit (30 > 25).
    const original = createSession(game, 25);
    assert.deepStrictEqual(original.map(a => a.id), [231, 232]);

    // Nothing completed - a real user just picked a smaller duration from
    // the dropdown. The cached 20-minute session no longer fits a
    // 15-minute target and must be rebuilt, not returned as-is.
    const afterShrink = createSession(game, 15);

    assert.deepStrictEqual(afterShrink.map(a => a.id), [231], "must rebuild for the smaller target instead of returning the stale 20-minute cache");

    const afterShrinkTotal = afterShrink.reduce((sum, a) => sum + a.estimatedTime, 0);
    assert.ok(afterShrinkTotal <= 15, `rebuilt session's total time (${afterShrinkTotal}) must fit the requested 15-minute target`);

});

test("createSession keeps returning the cached session when a new duration still comfortably fits its existing total time", () => {

    resetSession();

    const slug = "session-planner-test-duration-still-fits-keeps-cache";
    const game = makeGame(slug, [241, 242, 243]);

    const original = createSession(game, 25);
    assert.deepStrictEqual(original.map(a => a.id), [241, 242]);

    // A new duration (22) that the existing 20-minute cached total still
    // fits inside of - must keep returning the same cached session rather
    // than needlessly rebuilding, proving the cache-hit path isn't
    // bypassed unnecessarily when the cache is still perfectly valid.
    const afterRecheck = createSession(game, 22);

    assert.deepStrictEqual(afterRecheck.map(a => a.id), [241, 242]);

});
