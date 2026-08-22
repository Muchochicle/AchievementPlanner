import { test } from "node:test";
import assert from "node:assert";

// achievementManager.js/gameCompletion.js transitively read/write
// localStorage via player.js - not available in plain Node, so this file
// provides a minimal in-memory shim, matching the existing convention
// established in test/profileHeader.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { syncAchievementCompletion } = await import("../src/utils/planner/achievement/achievementManager.js");
const { checkGameCompletion } = await import("../src/utils/planner/game/gameCompletion.js");
const { getPlayer, resetPlayer, hasClaimedGame } = await import("../src/utils/player/player.js");

function makeGame(slug, entries, { steamOnlyCount } = {}) {

    // entries: [{ id, achieved }]
    // steamOnlyCount: how many achievements Steam's live schema reports
    // outside the curated set (see achievementMerger.js) - omitted by
    // default (undefined), matching what most tests here don't care about.
    return {

        slug,

        achievements: entries.map(e => ({ id: e.id, difficulty: 1, estimatedTime: 10 })),

        mergedAchievements: {
            playerDataAvailable: true,
            steamOnlyCount,
            achievements: entries.map(e => ({
                ap: { id: e.id },
                steamUnlock: { achieved: e.achieved }
            }))
        }

    };

}

test("syncAchievementCompletion grants XP and completion count for a newly Steam-confirmed achievement", () => {

    resetPlayer();

    const game = makeGame("sync-test-a", [{ id: 1, achieved: true }, { id: 2, achieved: false }]);

    syncAchievementCompletion(game, "sync-test-a");

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, 1, "only the Steam-confirmed achievement should count");
    assert.strictEqual(player.totalXP, 50, "one completed achievement should grant exactly 50 XP");

});

test("syncAchievementCompletion is idempotent - running it again for the same achievement grants no additional XP", () => {

    resetPlayer();

    // A second, still-unconfirmed achievement keeps the game itself from
    // being 100%-completed (see gameCompletion.js, also invoked by
    // syncAchievementCompletion) so this test isolates the per-achievement
    // claim's own idempotency from that separate bonus.
    const game = makeGame("sync-test-idempotent", [{ id: 1, achieved: true }, { id: 2, achieved: false }]);

    syncAchievementCompletion(game, "sync-test-idempotent");
    syncAchievementCompletion(game, "sync-test-idempotent");
    syncAchievementCompletion(game, "sync-test-idempotent");

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, 1, "re-running sync for an already-claimed achievement must not re-count it");
    assert.strictEqual(player.totalXP, 50, "re-running sync must not grant duplicate XP");

});

test("syncAchievementCompletion grants nothing when no achievement is Steam-confirmed yet", () => {

    resetPlayer();

    const game = makeGame("sync-test-none", [{ id: 1, achieved: false }, { id: 2, achieved: false }]);

    syncAchievementCompletion(game, "sync-test-none");

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, 0);
    assert.strictEqual(player.totalXP, 0);

});

test("syncAchievementCompletion treats different games' achievement ids independently (claim ledger is keyed by slug:id)", () => {

    resetPlayer();

    // A second, unconfirmed achievement in each game keeps the per-game
    // completion bonus (300 XP + badge) out of the picture, isolating the
    // per-achievement claim ledger's own slug-scoping.
    const gameA = makeGame("sync-test-slugA", [{ id: 1, achieved: true }, { id: 2, achieved: false }]);
    const gameB = makeGame("sync-test-slugB", [{ id: 1, achieved: true }, { id: 2, achieved: false }]);

    syncAchievementCompletion(gameA, "sync-test-slugA");
    syncAchievementCompletion(gameB, "sync-test-slugB");

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, 2, "the same numeric id in two different games must be claimed/counted separately");
    assert.strictEqual(player.totalXP, 100);

});

test("checkGameCompletion awards the completion bonus and badge once all achievements are Steam-confirmed and steamOnlyCount is missing entirely", () => {

    // Edge case: mergedAchievements exists (so completion detection works)
    // but never sets steamOnlyCount at all - a malformed/older merge
    // response shape, not just "explicitly 0". Must fall back to the
    // original "complete" behavior, not silently withhold the bonus.
    resetPlayer();

    const game = makeGame("complete-test-full", [{ id: 1, achieved: true }, { id: 2, achieved: true }]);

    assert.strictEqual(game.mergedAchievements.steamOnlyCount, undefined, "sanity check: this fixture must not set steamOnlyCount");

    const result = checkGameCompletion(game);

    const player = getPlayer();

    assert.strictEqual(result, true);
    assert.strictEqual(player.completedGames, 1);
    assert.strictEqual(player.totalXP, 300);
    assert.ok(player.badges.includes("Perfectionist"));

});

test("checkGameCompletion awards the completion bonus when every achievement is confirmed and Steam confirms nothing else exists (steamOnlyCount === 0)", () => {

    resetPlayer();

    const game = makeGame(
        "complete-test-full-explicit-zero",
        [{ id: 1, achieved: true }, { id: 2, achieved: true }],
        { steamOnlyCount: 0 }
    );

    const result = checkGameCompletion(game);
    const player = getPlayer();

    assert.strictEqual(result, true);
    assert.strictEqual(player.completedGames, 1);
    assert.strictEqual(player.totalXP, 300);
    assert.ok(player.badges.includes("Perfectionist"));

});

test("checkGameCompletion does NOT award the completion bonus when the curated list is exhausted but Steam reports more achievements (steamOnlyCount > 0)", () => {

    // Regression test for the false-completion bug identified in
    // PHASE_43_AUDIT.md: without this guard, a game whose curated set is a
    // subset of Steam's real achievement list (Portal 2's real pre-Phase-40
    // shape: 3 curated achievements, 48 more on Steam) would falsely and
    // *permanently* grant the Perfectionist badge/300 XP/claimGame ledger
    // entry the moment those 3 were confirmed - unlike recommendation.js's
    // equivalent bug (misleading text only), this one can never be
    // corrected after the fact once claimGame() has fired.
    resetPlayer();

    const game = makeGame(
        "complete-test-steam-has-more",
        [{ id: 1, achieved: true }, { id: 2, achieved: true }],
        { steamOnlyCount: 48 }
    );

    const result = checkGameCompletion(game);
    const player = getPlayer();

    assert.strictEqual(result, false, "must not report completion while Steam has achievements outside the curated set");
    assert.strictEqual(player.completedGames, 0, "completedGames must not be incremented");
    assert.strictEqual(player.totalXP, 0, "the 300 XP completion bonus must not be granted");
    assert.ok(!player.badges.includes("Perfectionist"), "the Perfectionist badge must not be unlocked");
    assert.strictEqual(hasClaimedGame("complete-test-steam-has-more"), false, "the game must not be permanently marked claimed - it needs to be re-checkable once the data or Steam catches up");

});

test("checkGameCompletion does not fire when only some achievements are confirmed", () => {

    resetPlayer();

    const game = makeGame("complete-test-partial", [{ id: 1, achieved: true }, { id: 2, achieved: false }]);

    const result = checkGameCompletion(game);

    const player = getPlayer();

    assert.strictEqual(result, false);
    assert.strictEqual(player.completedGames, 0);
    assert.strictEqual(player.totalXP, 0);

});

test("checkGameCompletion does not fire for a game with zero achievements", () => {

    resetPlayer();

    const game = makeGame("complete-test-empty", []);

    const result = checkGameCompletion(game);

    assert.strictEqual(result, false);
    assert.strictEqual(getPlayer().completedGames, 0);

});

test("checkGameCompletion is idempotent - a second call for an already-claimed game awards nothing further", () => {

    resetPlayer();

    const game = makeGame("complete-test-idempotent", [{ id: 1, achieved: true }]);

    checkGameCompletion(game);
    const secondResult = checkGameCompletion(game);

    const player = getPlayer();

    assert.strictEqual(secondResult, false, "an already-claimed game must report no completion on a repeat check");
    assert.strictEqual(player.completedGames, 1, "completedGames must not be double-counted");
    assert.strictEqual(player.totalXP, 300, "the completion bonus must not be granted twice");

});
