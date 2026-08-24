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
const { loadSessionDuration, saveSessionDuration, saveSession } = await import("../src/utils/planner/session/sessionStorage.js");

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

// Phase 64 (PHASE_64_AUDIT.md) - loadSession() (sessionStorage.js) only
// guards against syntactically-invalid JSON, via safeParseJSON's fallback
// to null. Neither loadSession() nor getSession() had ever been tested
// against genuinely corrupted stored data before this phase - these three
// tests close that gap for both the syntax-invalid case (already safe, but
// unverified) and the two shape-invalid cases the new Array.isArray() guard
// in getSession() was specifically added to fix.
test("getSession falls through to a freshly-generated session when the stored value is syntactically invalid JSON, instead of throwing", () => {

    const slug = "session-test-corrupted-syntax";

    localStorage.setItem(`session-${slug}`, "{not valid json!!!");

    const game = makeGame(slug, [71, 72]);

    const session = getSession(game, slug, 45);

    assert.ok(session.length > 0, "corrupted stored JSON should fall back to a freshly-generated session, not throw");
    assert.ok(session.every(a => [71, 72].includes(a.id)));

});

test("getSession falls through to a freshly-generated session when the stored value is syntactically valid JSON but not an array (e.g. a JSON string), instead of crashing on .map()", () => {

    const slug = "session-test-corrupted-shape-string";

    // Valid JSON (a plain string), with a positive .length - previously
    // passed the old `stored.length > 0` check and then crashed on
    // `stored.map(...)`, since strings have no .map method.
    localStorage.setItem(`session-${slug}`, JSON.stringify("not an array"));

    const game = makeGame(slug, [73, 74]);

    const session = getSession(game, slug, 45);

    assert.ok(session.length > 0, "a non-array stored value should fall back to a freshly-generated session, not throw");
    assert.ok(session.every(a => [73, 74].includes(a.id)));

});

test("getSession falls through to a freshly-generated session when the stored value is a JSON object with a positive .length property, instead of crashing on .map()", () => {

    const slug = "session-test-corrupted-shape-object";

    // A plain object with its own numeric "length" field - also passes a
    // bare `.length > 0` check but, like the string case above, has no
    // .map method.
    localStorage.setItem(`session-${slug}`, JSON.stringify({ length: 2 }));

    const game = makeGame(slug, [75, 76]);

    const session = getSession(game, slug, 45);

    assert.ok(session.length > 0, "a non-array stored value should fall back to a freshly-generated session, not throw");
    assert.ok(session.every(a => [75, 76].includes(a.id)));

});

test("getSession regenerates a fresh session once every currently-planned achievement is completed, instead of permanently showing 0 planned (PHASE_48_AUDIT.md Finding 7)", () => {

    // Every achievement below has the same difficulty/estimatedTime (10
    // min, from makeGame's defaults) - a 25-minute session therefore plans
    // exactly the first two (41, 42) and leaves 43 unplanned, mirroring
    // the audit's own reproduction (a curated game with more achievements
    // than fit in one planned session).
    const slug = "session-test-regenerate-after-full-completion";
    const game = makeGame(slug, [41, 42, 43]);

    const original = getSession(game, slug, 25);
    assert.deepStrictEqual(original.map(a => a.id).sort(), [41, 42], "sanity check: only 2 of the 3 achievements should fit in a 25-minute session");

    // Complete both currently-planned achievements - the intended,
    // successful outcome of using the feature - while achievement 43
    // remains open.
    game.mergedAchievements.achievements.find(e => e.ap.id === 41).steamUnlock.achieved = true;
    game.mergedAchievements.achievements.find(e => e.ap.id === 42).steamUnlock.achieved = true;

    const afterCompletion = getSession(game, slug, 25);

    assert.ok(afterCompletion.length > 0, "must regenerate a fresh session from the remaining achievement, not stay stuck on an empty one");
    assert.deepStrictEqual(afterCompletion.map(a => a.id), [43], "the regenerated session must contain the one achievement that was never part of the completed plan");

    // The regeneration must also be persisted, not just returned - a
    // subsequent call/poll must keep reading the new plan back, not
    // regenerate a different one or revert to the stale completed list.
    const readBack = getSession(game, slug, 25);
    assert.deepStrictEqual(readBack.map(a => a.id), [43]);

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

test("getSession returns an empty session (not a crash or a stuck stale list) when every achievement in the whole game - not just the planned subset - is now complete", () => {

    // Extends the "genuinely empty" companion case above to the
    // regeneration path added for Finding 7: once the fallthrough kicks
    // in, createSession() must still correctly reproduce [] (not throw,
    // not loop) when the game truly has nothing left to plan at all.
    const slug = "session-test-regenerate-into-genuinely-empty";
    const game = makeGame(slug, [81, 82]);

    getSession(game, slug, 45);

    game.mergedAchievements.achievements.find(e => e.ap.id === 81).steamUnlock.achieved = true;
    game.mergedAchievements.achievements.find(e => e.ap.id === 82).steamUnlock.achieved = true;

    let session;
    assert.doesNotThrow(() => { session = getSession(game, slug, 45); });
    assert.deepStrictEqual(session, []);

});

// Finding 2 (PHASE_51-54_AUDIT.md) - duration was previously "write-only"
// on a getSession() cache hit (localStorage-backed): once anything was
// persisted, every subsequent call re-filtered for completion but never
// re-validated the stored session's total time against a newly-requested
// (possibly smaller) duration.
test("getSession rebuilds instead of returning a stale persisted session when a smaller duration no longer fits its total time", () => {

    const slug = "session-test-duration-shrink-invalidates-persisted";
    const game = makeGame(slug, [71, 72, 73]);

    // 25-minute target with three 10-minute achievements persists exactly
    // the first two (20 minutes total).
    const original = getSession(game, slug, 25);
    assert.deepStrictEqual(original.map(a => a.id), [71, 72]);

    // Nothing completed - a real user just picked a smaller duration from
    // the dropdown (game.js reads the select's current value on every
    // render, see game.js's renderSession()). The persisted 20-minute
    // session no longer fits a 15-minute target and must be rebuilt.
    const afterShrink = getSession(game, slug, 15);

    assert.deepStrictEqual(afterShrink.map(a => a.id), [71], "must rebuild for the smaller target instead of returning the stale 20-minute persisted session");

    // The rebuild must also be what gets persisted, not just returned -
    // a subsequent call at the same (now smaller) duration must read the
    // rebuilt session back, not regenerate yet again or revert to stale.
    const readBack = getSession(game, slug, 15);
    assert.deepStrictEqual(readBack.map(a => a.id), [71]);

});

test("getSession keeps the persisted session when a new duration still comfortably fits its existing total time", () => {

    const slug = "session-test-duration-still-fits-keeps-persisted";
    const game = makeGame(slug, [91, 92, 93]);

    const original = getSession(game, slug, 25);
    assert.deepStrictEqual(original.map(a => a.id), [91, 92]);

    const afterRecheck = getSession(game, slug, 22);
    assert.deepStrictEqual(afterRecheck.map(a => a.id), [91, 92]);

});

test("session duration round-trips through localStorage, defaulting to 45 when unset or invalid", () => {

    assert.strictEqual(loadSessionDuration("session-test-duration-unset"), 45, "unset duration should default to 45");

    saveSessionDuration("session-test-duration-a", 90);
    assert.strictEqual(loadSessionDuration("session-test-duration-a"), 90);

    // ":" (not "-") between "session-duration" and the slug since Phase 58
    // (PHASE_58_AUDIT.md) - see sessionStorage.js's own comment for why.
    localStorage.setItem("session-duration:session-test-duration-b", "not-a-number");
    assert.strictEqual(loadSessionDuration("session-test-duration-b"), 45, "a corrupted value should fall back to the default");

    localStorage.setItem("session-duration:session-test-duration-c", "999");
    assert.strictEqual(loadSessionDuration("session-test-duration-c"), 45, "a value outside the allowed set (30/45/60/90) should fall back to the default");

});

// Phase 58 (PHASE_58_AUDIT.md) - with the old "session-duration-${slug}"
// key format, a game whose own slug happened to start with "duration-"
// would read/write the exact same localStorage key as a completely
// different game's own saved duration setting, since
// "session-duration-" + "foo" is byte-identical to "session-" +
// "duration-foo". The ":" delimiter makes this structurally impossible
// (no real slug can ever contain a ":").
test("a game whose slug starts with 'duration-' does not collide with another game's saved session duration", () => {

    const slugWithDurationPrefix = "duration-foo";
    const otherSlug = "foo";

    saveSessionDuration(otherSlug, 90);

    // Before the fix, this would have silently written to the exact same
    // key "foo"'s duration was just saved under.
    saveSession(slugWithDurationPrefix, []);

    assert.strictEqual(loadSessionDuration(otherSlug), 90, "the unrelated game's duration setting must survive saving a session for the 'duration-foo' slug");

});
