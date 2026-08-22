import { test } from "node:test";
import assert from "node:assert";

// sessionManager.js/sessionPlanner.js transitively read/write
// localStorage - not available in plain Node, so this file provides a
// minimal in-memory shim, matching the existing convention established in
// test/profileHeader.test.js. No production code is affected by this
// shim - it only exists in this test file's own process.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { getSession, regenerateSession } = await import("../src/utils/planner/sessionManager.js");
const { loadSessionDuration, saveSessionDuration } = await import("../src/utils/planner/session/sessionStorage.js");

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

test("getSession builds a non-empty session for a brand-new game from its own achievements", () => {

    const gameA = makeGame("session-test-game-a", [1, 2, 3]);

    const session = getSession(gameA, "session-test-game-a", 45);

    assert.ok(session.length > 0, "a freshly-generated session should contain achievements");
    assert.ok(session.every(a => [1, 2, 3].includes(a.id)));

});

test("getSession for a second, unrelated game is not contaminated by the first game's in-memory session cache", () => {

    // Regression test: sessionPlanner.js's createSession() used to cache
    // the last-generated session in a single, ungated module-level
    // variable (not keyed by game/slug). Calling getSession() for gameA
    // and then, in the same process, for a completely different gameB
    // (still uncached in localStorage) hit that stale cache: gameB's own
    // achievement ids never matched gameA's cached ids, so every entry
    // was filtered out and gameB silently got an empty session instead of
    // one generated from its own achievement list.
    const gameA = makeGame("session-test-contamination-a", [101, 102]);
    getSession(gameA, "session-test-contamination-a", 45);

    const gameB = makeGame("session-test-contamination-b", [201, 202, 203]);
    const sessionB = getSession(gameB, "session-test-contamination-b", 45);

    assert.ok(sessionB.length > 0, "gameB should get its own freshly-generated session, not an empty one contaminated by gameA's cache");
    assert.ok(sessionB.every(a => [201, 202, 203].includes(a.id)), "every entry in gameB's session must actually belong to gameB");

});

test("getSession persists the generated session and returns the same achievements on a second call (same game)", () => {

    const game = makeGame("session-test-persist", [11, 12, 13, 14]);

    const first = getSession(game, "session-test-persist", 45);
    const second = getSession(game, "session-test-persist", 45);

    assert.deepStrictEqual(
        second.map(a => a.id).sort(),
        first.map(a => a.id).sort(),
        "a second call for the same game/slug should return the persisted session, not regenerate a new one"
    );

});

test("getSession drops an entry from a persisted session once Steam confirms it completed", () => {

    const slug = "session-test-completion-drop";
    const game = makeGame(slug, [21, 22]);

    const original = getSession(game, slug, 45);
    assert.ok(original.some(a => a.id === 21));

    // Simulate Steam confirming achievement 21 as completed since the
    // session was first generated.
    game.mergedAchievements.achievements.find(e => e.ap.id === 21).steamUnlock.achieved = true;

    const afterCompletion = getSession(game, slug, 45);

    assert.ok(!afterCompletion.some(a => a.id === 21), "a completed achievement must be dropped from an already-generated session");

});

test("regenerateSession clears the previous session and builds a fresh one from the current achievement list", () => {

    const slug = "session-test-regenerate";
    const game = makeGame(slug, [31, 32, 33]);

    getSession(game, slug, 45);

    const regenerated = regenerateSession(game, slug, 45);

    assert.ok(regenerated.length > 0);
    assert.ok(regenerated.every(a => [31, 32, 33].includes(a.id)));

    // The regenerated session must also be what a subsequent getSession()
    // call reads back (proving it was actually persisted, not just
    // returned in-memory).
    const readBack = getSession(game, slug, 45);
    assert.deepStrictEqual(readBack.map(a => a.id).sort(), regenerated.map(a => a.id).sort());

});

test("regenerateSession for one game does not leak into a differently-slugged session created right after", () => {

    const slugA = "session-test-regen-contamination-a";
    const gameA = makeGame(slugA, [41, 42]);

    getSession(gameA, slugA, 45);
    regenerateSession(gameA, slugA, 45);

    const slugB = "session-test-regen-contamination-b";
    const gameB = makeGame(slugB, [51, 52, 53]);

    const sessionB = getSession(gameB, slugB, 45);

    assert.ok(sessionB.length > 0);
    assert.ok(sessionB.every(a => [51, 52, 53].includes(a.id)));

});

test("getSession does not crash on first build when the game's achievements field is missing", () => {

    // Regression test: sessionPlanner.js's createSession() used to read
    // game.achievements.filter(...) with no guard, inconsistent with
    // session-planner.js (the component)'s own game?.achievements?.length
    // check for the identical field. A game object missing achievements
    // entirely (schema-permitted, even though the mapper currently always
    // fills in []) threw "Cannot read properties of undefined (reading
    // 'filter')" on the very first session build.
    const game = { slug: "session-test-missing-achievements", achievements: undefined, mergedAchievements: null };

    let session;
    assert.doesNotThrow(() => { session = getSession(game, "session-test-missing-achievements", 45); });

    assert.deepStrictEqual(session, []);

});

test("getSession does not crash reading back an already-stored session when the game's achievements field is missing", () => {

    // Same regression as above, but for the "stored" read-back branch in
    // sessionManager.js itself (game.achievements.find(...)), which is
    // actually the path hit on every refresh/poll once a session exists -
    // simulates a later getGame() response coming back malformed after an
    // earlier, well-formed one already created a session.
    const slug = "session-test-missing-achievements-stored";
    const goodGame = makeGame(slug, [1, 2]);

    getSession(goodGame, slug, 45);

    const malformedGame = { slug, achievements: undefined, mergedAchievements: null };

    let session;
    assert.doesNotThrow(() => { session = getSession(malformedGame, slug, 45); });

    assert.deepStrictEqual(session, []);

});

test("getSession regenerates from real achievements after a stale, previously-empty stored session (Phase 41 regression)", () => {

    // Regression test: getSession() used to trust ANY stored value,
    // including a persisted [] - which is exactly what saveSession()
    // legitimately writes the first time a game with 0 curated
    // achievements is visited (see recommendation.js's identical
    // game.achievements?.length guard for the same "no curated data yet"
    // case). Once that game's catalog data later goes from an empty
    // achievements[] to a real one (Hollow Knight: Phase 41 - see
    // PHASE_41_AUDIT.md), a returning visitor's browser still has that
    // stale [] on disk. Without this fix, getSession() would keep serving
    // the stale empty session forever - the Session Planner would show "0
    // achievements planned" even though the game now has real curated
    // achievements to plan.
    const slug = "session-test-stale-empty-then-populated";

    localStorage.setItem(`session-${slug}`, "[]");

    const game = makeGame(slug, [61, 62, 63]);

    const session = getSession(game, slug, 45);

    assert.ok(session.length > 0, "a game that now has real achievements must not stay stuck on a stale, previously-empty persisted session");
    assert.ok(session.every(a => [61, 62, 63].includes(a.id)));

});

test("getSession still returns an empty session (not an error) when a game genuinely has no achievements left to plan", () => {

    // Companion case for the fix above: a stored [] must still resolve to
    // [] when regeneration legitimately produces nothing too (e.g. every
    // achievement is already completed) - the fix must not turn "correctly
    // empty" into an infinite regeneration loop or a crash.
    const slug = "session-test-genuinely-empty";

    const game = makeGame(slug, []);

    const session = getSession(game, slug, 45);

    assert.deepStrictEqual(session, []);

});

test("session duration round-trips through localStorage, defaulting to 45 when unset or invalid", () => {

    assert.strictEqual(loadSessionDuration("session-test-duration-unset"), 45, "unset duration should default to 45");

    saveSessionDuration("session-test-duration-a", 90);
    assert.strictEqual(loadSessionDuration("session-test-duration-a"), 90);

    localStorage.setItem("session-duration-session-test-duration-b", "not-a-number");
    assert.strictEqual(loadSessionDuration("session-test-duration-b"), 45, "a corrupted value should fall back to the default");

    localStorage.setItem("session-duration-session-test-duration-c", "999");
    assert.strictEqual(loadSessionDuration("session-test-duration-c"), 45, "a value outside the allowed set (30/45/60/90) should fall back to the default");

});
