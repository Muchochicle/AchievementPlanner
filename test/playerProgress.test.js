import { test } from "node:test";
import assert from "node:assert";

// checkPlayerUnlocks()/checkBadgeUnlocks()/reconcileProgressFromProfileStats()
// transitively read/write both the player and inventory localStorage keys -
// not available in plain Node, so this file provides a minimal in-memory
// shim, matching the existing convention established in
// test/profileHeader.test.js / test/avatarManager.test.js / test/player.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const {
    checkPlayerUnlocks,
    checkBadgeUnlocks,
    reconcileProgressFromProfileStats,
    PERFECTIONIST_BADGE
} = await import("../src/utils/player/playerProgress.js");

const { getPlayer, savePlayer, resetPlayer } = await import("../src/utils/player/player.js");
const { ownsItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { getInventory, resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { AVATARS } = await import("../src/data/player/avatars.js");

function resetState() {

    resetPlayer();
    resetInventory();

}

// ---------------------------------------------------------------------
// checkPlayerUnlocks - avatars are gated on completedAchievements ONLY
// ---------------------------------------------------------------------

test("checkPlayerUnlocks does not unlock 'rookie' just below its threshold", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = AVATARS.rookie.requiredAchievements - 1;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), false);

});

test("checkPlayerUnlocks unlocks 'rookie' at exactly its threshold, but not 'explorer' yet", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = AVATARS.rookie.requiredAchievements;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), true);
    assert.strictEqual(ownsItem("avatars", "explorer"), false);

});

test("checkPlayerUnlocks unlocks every avatar whose threshold has been reached, in one pass", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = AVATARS.master.requiredAchievements;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), true);
    assert.strictEqual(ownsItem("avatars", "explorer"), true);
    assert.strictEqual(ownsItem("avatars", "veteran"), true);
    assert.strictEqual(ownsItem("avatars", "master"), true);
    assert.strictEqual(ownsItem("avatars", "legend"), false, "legend's own (higher) threshold must not also be met");

});

test("checkPlayerUnlocks unlocks 'legend' at its threshold", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = AVATARS.legend.requiredAchievements;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "legend"), true);

});

test("checkPlayerUnlocks does NOT unlock any avatar from level or completedGames alone - avatars depend only on completedAchievements", () => {

    resetState();

    const player = getPlayer();
    player.totalXP = 999999; // a very high level
    player.completedGames = 999; // a very high completed-games count
    player.completedAchievements = 0;
    savePlayer(player);

    checkPlayerUnlocks();

    for (const avatar of Object.values(AVATARS)) {

        if (avatar.id === "default") continue;

        assert.strictEqual(
            ownsItem("avatars", avatar.id),
            false,
            `${avatar.id} must not unlock from level/completedGames alone`
        );

    }

});

test("checkPlayerUnlocks is idempotent - calling it twice at the same state does not duplicate an unlocked avatar", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = AVATARS.rookie.requiredAchievements;
    savePlayer(player);

    checkPlayerUnlocks();
    checkPlayerUnlocks();

    const { avatars } = getInventory();
    assert.strictEqual(avatars.filter(id => id === "rookie").length, 1);

});

// ---------------------------------------------------------------------
// checkBadgeUnlocks - badges are gated on streaks (+ the pre-existing
// Perfectionist milestone), never duplicated
// ---------------------------------------------------------------------

test("checkBadgeUnlocks grants no badge with no completed games and no streak", () => {

    resetState();

    checkBadgeUnlocks();

    assert.deepStrictEqual(getPlayer().badges, []);

});

test("checkBadgeUnlocks grants Perfectionist once completedGames is at least 1, regardless of how it got there", () => {

    resetState();

    const player = getPlayer();
    player.completedGames = 1;
    savePlayer(player);

    checkBadgeUnlocks();

    assert.ok(getPlayer().badges.includes(PERFECTIONIST_BADGE));

});

test("checkBadgeUnlocks grants each streak badge exactly at its day threshold", () => {

    resetState();

    const player = getPlayer();
    player.longestStreak = 3;
    savePlayer(player);

    checkBadgeUnlocks();

    assert.ok(getPlayer().badges.includes("Committed"));
    assert.ok(!getPlayer().badges.includes("Dedicated"));
    assert.ok(!getPlayer().badges.includes("Unstoppable"));

});

test("checkBadgeUnlocks grants all lower streak tiers once a higher one is reached", () => {

    resetState();

    const player = getPlayer();
    player.longestStreak = 30;
    savePlayer(player);

    checkBadgeUnlocks();

    const { badges } = getPlayer();
    assert.ok(badges.includes("Committed"));
    assert.ok(badges.includes("Dedicated"));
    assert.ok(badges.includes("Unstoppable"));

});

test("checkBadgeUnlocks is idempotent - calling it twice does not duplicate a badge", () => {

    resetState();

    const player = getPlayer();
    player.longestStreak = 7;
    player.completedGames = 1;
    savePlayer(player);

    checkBadgeUnlocks();
    checkBadgeUnlocks();

    const { badges } = getPlayer();
    assert.strictEqual(badges.filter(name => name === "Dedicated").length, 1);
    assert.strictEqual(badges.filter(name => name === PERFECTIONIST_BADGE).length, 1);

});

// ---------------------------------------------------------------------
// reconcileProgressFromProfileStats - the fix for avatars/XP getting
// stuck far below a player's real, Steam-wide progress
// ---------------------------------------------------------------------

test("reconcileProgressFromProfileStats raises completedAchievements/XP to match a higher live count, and unlocks the matching avatar", () => {

    resetState();

    // Reproduces the reported bug shape: far more real achievements than
    // this device's local per-game-visit counter ever saw.
    reconcileProgressFromProfileStats({ achievements: 1185, completedGames: 3 });

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, 1185);
    assert.strictEqual(player.completedGames, 3);
    assert.strictEqual(player.totalXP, 1185 * 50 + 3 * 300);
    assert.strictEqual(ownsItem("avatars", "master"), true, "1185 achievements clears the 1000 (Elite) threshold");
    assert.strictEqual(ownsItem("avatars", "legend"), false, "1185 achievements does not clear the 2000 (Legend) threshold");
    assert.ok(getPlayer().badges.includes(PERFECTIONIST_BADGE), "3 completed games must also unlock the Perfectionist badge");

});

test("reconcileProgressFromProfileStats never grants XP twice for the same already-counted achievements/games (idempotent)", () => {

    resetState();

    reconcileProgressFromProfileStats({ achievements: 200, completedGames: 2 });
    const afterFirst = getPlayer().totalXP;

    reconcileProgressFromProfileStats({ achievements: 200, completedGames: 2 });
    const afterSecond = getPlayer().totalXP;

    assert.strictEqual(afterFirst, 200 * 50 + 2 * 300);
    assert.strictEqual(afterSecond, afterFirst, "re-reconciling the same live counts must not grant additional XP");

});

test("reconcileProgressFromProfileStats never lowers completedAchievements/completedGames/XP when the live count dips (monotonic)", () => {

    resetState();

    reconcileProgressFromProfileStats({ achievements: 500, completedGames: 5 });
    const highWaterMark = getPlayer();

    // A transient Steam API hiccup reporting fewer achievements than this
    // device already knows about (see gamesWithPlayerDataUnavailable) must
    // never claw back progress already granted.
    reconcileProgressFromProfileStats({ achievements: 10, completedGames: 0 });

    const player = getPlayer();

    assert.strictEqual(player.completedAchievements, highWaterMark.completedAchievements);
    assert.strictEqual(player.completedGames, highWaterMark.completedGames);
    assert.strictEqual(player.totalXP, highWaterMark.totalXP);
    assert.strictEqual(ownsItem("avatars", "veteran"), true, "an avatar already unlocked must remain unlocked");

});

test("reconcileProgressFromProfileStats tolerates a stats object missing achievements/completedGames entirely", () => {

    resetState();

    assert.doesNotThrow(() => reconcileProgressFromProfileStats({}));
    assert.doesNotThrow(() => reconcileProgressFromProfileStats());

    assert.strictEqual(getPlayer().totalXP, 0);

});
