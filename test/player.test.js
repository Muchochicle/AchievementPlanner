import { test } from "node:test";
import assert from "node:assert";

globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const {
    getPlayer,
    savePlayer,
    resetPlayer,
    addXP,
    completeAchievement,
    completeGame,
    unlockBadge,
    hasClaimedAchievement,
    claimAchievement,
    hasClaimedGame,
    claimGame
} = await import("../src/utils/player/player.js");

const STORAGE_KEY = "achievement-planner-player";

test("getPlayer with nothing stored returns a fresh level-1 player", () => {

    localStorage.removeItem(STORAGE_KEY);

    const player = getPlayer();

    assert.strictEqual(player.level, 1);
    assert.strictEqual(player.xp, 0);
    assert.strictEqual(player.title, "Rookie Hunter");
    assert.deepStrictEqual(player.badges, []);
    assert.deepStrictEqual(player.claimedAchievements, []);
    assert.deepStrictEqual(player.claimedGames, []);

});

test("getPlayer recovers safely from corrupted (invalid JSON) stored data, instead of throwing", () => {

    localStorage.setItem(STORAGE_KEY, "{not valid json!!!");

    assert.doesNotThrow(() => getPlayer());

    const player = getPlayer();
    assert.strictEqual(player.level, 1, "a corrupted save should fall back to a fresh default player");

});

test("getPlayer recovers safely from a syntactically-valid-but-wrong-shape stored value, instead of throwing", () => {

    // Phase 66 regression: "null"/"42"/"[]" are all syntactically valid
    // JSON, so safeParseJSON's syntax-only guard let them through
    // untouched - getPlayer() then crashed on the very next line
    // (`player.claimedAchievements ??= []` throws when player is null/a
    // primitive/an array), taking down every page that renders player
    // state on load.
    for (const badValue of ["null", "42", "[]", `"a string"`]) {

        localStorage.setItem(STORAGE_KEY, badValue);

        assert.doesNotThrow(() => getPlayer(), `getPlayer() should not throw for stored value ${badValue}`);

        const player = getPlayer();
        assert.strictEqual(player.level, 1, `stored value ${badValue} should fall back to a fresh default player`);

    }

});

test("getPlayer fills in missing fields on a legacy/partial saved object without crashing", () => {

    // Simulates a player object saved by an older version of the app,
    // before claimedGames/badges/totalXP/hoursPlayed/completionRate/
    // lastPlayed existed.
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ totalXP: 250 }));

    const player = getPlayer();

    assert.deepStrictEqual(player.claimedAchievements, []);
    assert.deepStrictEqual(player.claimedGames, []);
    assert.deepStrictEqual(player.badges, []);
    assert.strictEqual(player.hoursPlayed, 0);
    assert.strictEqual(player.completionRate, 0);
    assert.strictEqual(player.lastPlayed, null);
    assert.strictEqual(player.level, 2, "the legacy totalXP value should still be honored for level calculation");

});

test("addXP accumulates totalXP across multiple calls", () => {

    resetPlayer();

    addXP(30);
    addXP(20);

    assert.strictEqual(getPlayer().totalXP, 50);

});

test("completeAchievement/completeGame increment their own counters independently", () => {

    resetPlayer();

    completeAchievement();
    completeAchievement();
    completeGame();

    const player = getPlayer();
    assert.strictEqual(player.completedAchievements, 2);
    assert.strictEqual(player.completedGames, 1);

});

test("unlockBadge is idempotent - adding the same badge twice does not duplicate it", () => {

    resetPlayer();

    unlockBadge("Perfectionist");
    unlockBadge("Perfectionist");

    const player = getPlayer();
    assert.deepStrictEqual(player.badges, ["Perfectionist"]);

});

test("claimAchievement returns true exactly once for a given slug:id pair, and hasClaimedAchievement reflects it", () => {

    resetPlayer();

    assert.strictEqual(hasClaimedAchievement("hades", 1), false);

    assert.strictEqual(claimAchievement("hades", 1), true, "the first claim should succeed");
    assert.strictEqual(claimAchievement("hades", 1), false, "a repeat claim of the same slug:id must be rejected");

    assert.strictEqual(hasClaimedAchievement("hades", 1), true);

});

test("claimAchievement distinguishes the same numeric id across different game slugs", () => {

    resetPlayer();

    assert.strictEqual(claimAchievement("hades", 1), true);
    assert.strictEqual(claimAchievement("portal-2", 1), true, "the same id in a different game must be claimable independently");

});

test("claimGame returns true exactly once per slug, and hasClaimedGame reflects it", () => {

    resetPlayer();

    assert.strictEqual(hasClaimedGame("hades"), false);
    assert.strictEqual(claimGame("hades"), true);
    assert.strictEqual(claimGame("hades"), false, "a repeat claim of the same game must be rejected");
    assert.strictEqual(hasClaimedGame("hades"), true);

});

test("resetPlayer restores every field to its default value", () => {

    addXP(1000);
    completeAchievement();
    claimGame("hades");
    unlockBadge("Perfectionist");

    resetPlayer();

    const player = getPlayer();
    assert.strictEqual(player.totalXP, 0);
    assert.strictEqual(player.completedAchievements, 0);
    assert.deepStrictEqual(player.claimedGames, []);
    assert.deepStrictEqual(player.badges, []);

});

test("savePlayer/getPlayer round-trip a fully custom player object", () => {

    savePlayer({
        level: 1,
        xp: 0,
        totalXP: 100,
        completedAchievements: 3,
        completedGames: 1,
        currentStreak: 2,
        longestStreak: 5,
        badges: ["Perfectionist"],
        title: "irrelevant - recomputed on read",
        claimedAchievements: ["hades:1"],
        claimedGames: ["hades"],
        hoursPlayed: 12,
        completionRate: 50,
        lastPlayed: "2026-01-01"
    });

    const player = getPlayer();

    assert.strictEqual(player.totalXP, 100);
    assert.deepStrictEqual(player.claimedAchievements, ["hades:1"]);
    assert.strictEqual(player.hoursPlayed, 12);
    assert.strictEqual(player.title, "Rookie Hunter", "title must always be recomputed from level on read, never trusted from storage");

});

// Finding 2 (PHASE_51-55_AUDIT.md) - savePlayer's underlying
// localStorage.setItem previously ran unguarded; a quota-exceeded or
// private-mode exception would propagate straight out of savePlayer and
// crash whatever XP/badge/claim flow triggered it (every function above
// that mutates player state ends by calling savePlayer). Now routed
// through safeSetItem, which must degrade instead of throwing.
test("savePlayer does not throw when the underlying localStorage.setItem fails (e.g. quota exceeded)", () => {

    const originalSetItem = localStorage.setItem;

    localStorage.setItem = () => { throw new Error("QuotaExceededError"); };

    try {

        assert.doesNotThrow(() => savePlayer({ ...getPlayer(), totalXP: 999 }));

    } finally {

        localStorage.setItem = originalSetItem;

    }

});
