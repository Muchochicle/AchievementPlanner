import { test } from "node:test";
import assert from "node:assert";

// recordDailyActivity() transitively reads/writes both the player and
// inventory localStorage keys (via checkBadgeUnlocks) - not available in
// plain Node, so this file provides a minimal in-memory shim, matching the
// existing convention established in test/profileHeader.test.js /
// test/playerProgress.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { recordDailyActivity } = await import("../src/utils/player/streak/streakManager.js");
const { getPlayer, savePlayer, resetPlayer } = await import("../src/utils/player/player.js");
const { resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { ownsItem } = await import("../src/utils/player/inventory/inventoryManager.js");

function resetState() {

    resetPlayer();
    resetInventory();

}

function daysAgoKey(days) {

    const date = new Date();
    date.setDate(date.getDate() - days);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;

}

test("recordDailyActivity starts a streak of 1 on first-ever activity", () => {

    resetState();

    recordDailyActivity();

    const player = getPlayer();
    assert.strictEqual(player.currentStreak, 1);
    assert.strictEqual(player.longestStreak, 1);

});

test("recordDailyActivity is a no-op when called again the same day", () => {

    resetState();

    recordDailyActivity();
    recordDailyActivity();
    recordDailyActivity();

    assert.strictEqual(getPlayer().currentStreak, 1);

});

test("recordDailyActivity extends the streak when the previous activity was exactly yesterday", () => {

    resetState();

    const player = getPlayer();
    player.lastPlayed = daysAgoKey(1);
    player.currentStreak = 4;
    player.longestStreak = 4;
    savePlayer(player);

    recordDailyActivity();

    const updated = getPlayer();
    assert.strictEqual(updated.currentStreak, 5);
    assert.strictEqual(updated.longestStreak, 5);

});

test("recordDailyActivity resets the streak to 1 after a gap of more than one day", () => {

    resetState();

    const player = getPlayer();
    player.lastPlayed = daysAgoKey(5);
    player.currentStreak = 10;
    player.longestStreak = 10;
    savePlayer(player);

    recordDailyActivity();

    const updated = getPlayer();
    assert.strictEqual(updated.currentStreak, 1, "a broken streak restarts at 1");
    assert.strictEqual(updated.longestStreak, 10, "the best-ever streak is never lowered by a reset");

});

test("recordDailyActivity grants the matching streak badge once the threshold is reached, and it persists through a later reset", () => {

    resetState();

    const player = getPlayer();
    player.lastPlayed = daysAgoKey(1);
    player.currentStreak = 2;
    player.longestStreak = 2;
    savePlayer(player);

    recordDailyActivity(); // currentStreak becomes 3 -> "Committed" (3-day) unlocks

    assert.ok(getPlayer().badges.includes("Committed"));
    assert.strictEqual(ownsItem("avatars", "rookie"), false, "a streak must never unlock an achievement-gated avatar");

    // Break the streak with a large gap - the badge, once earned, must
    // remain even though longestStreak no longer equals currentStreak.
    const broken = getPlayer();
    broken.lastPlayed = daysAgoKey(10);
    savePlayer(broken);

    recordDailyActivity();

    assert.strictEqual(getPlayer().currentStreak, 1);
    assert.ok(getPlayer().badges.includes("Committed"), "an already-earned streak badge must survive a later streak reset");

});
