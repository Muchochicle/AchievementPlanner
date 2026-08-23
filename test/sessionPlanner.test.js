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
