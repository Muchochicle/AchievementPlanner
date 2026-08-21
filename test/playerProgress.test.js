import { test } from "node:test";
import assert from "node:assert";

// checkPlayerUnlocks() transitively reads/writes both the player and
// inventory localStorage keys - not available in plain Node, so this file
// provides a minimal in-memory shim, matching the existing convention
// established in test/profileHeader.test.js / test/avatarManager.test.js /
// test/player.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { checkPlayerUnlocks } = await import("../src/utils/player/playerProgress.js");
const { getPlayer, savePlayer, resetPlayer } = await import("../src/utils/player/player.js");
const { ownsItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { getInventory, resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { getXPForNextLevel } = await import("../src/utils/player/level/levelSystem.js");

// The exact totalXP required to reach a given level, derived from the same
// production formula (getXPForNextLevel) checkPlayerUnlocks' own
// level-threshold branches depend on via getPlayer() - avoids hardcoding a
// separate/duplicated XP curve that could silently drift from the real one.
function xpForLevel(targetLevel) {

    let xp = 0;

    for (let level = 1; level < targetLevel; level++) {

        xp += getXPForNextLevel(level);

    }

    return xp;

}

function resetState() {

    resetPlayer();
    resetInventory();

}

test("checkPlayerUnlocks does not unlock 'rookie' just below level 5", () => {

    resetState();

    const player = getPlayer();
    player.totalXP = xpForLevel(5) - 1;
    savePlayer(player);

    assert.strictEqual(getPlayer().level, 4, "sanity check: totalXP just below the level-5 threshold must resolve to level 4");

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), false);

});

test("checkPlayerUnlocks unlocks 'rookie' at exactly level 5, but not 'explorer' yet", () => {

    resetState();

    const player = getPlayer();
    player.totalXP = xpForLevel(5);
    savePlayer(player);

    assert.strictEqual(getPlayer().level, 5, "sanity check: totalXP must resolve to exactly level 5");

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), true);
    assert.strictEqual(ownsItem("avatars", "explorer"), false);

});

test("checkPlayerUnlocks unlocks both 'rookie' and 'explorer' at exactly level 10", () => {

    resetState();

    const player = getPlayer();
    player.totalXP = xpForLevel(10);
    savePlayer(player);

    assert.strictEqual(getPlayer().level, 10, "sanity check: totalXP must resolve to exactly level 10");

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "rookie"), true);
    assert.strictEqual(ownsItem("avatars", "explorer"), true);

});

test("checkPlayerUnlocks does not unlock 'veteran' at completedGames == 4", () => {

    resetState();

    const player = getPlayer();
    player.completedGames = 4;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "veteran"), false);

});

test("checkPlayerUnlocks unlocks 'veteran' at completedGames == 5, independently of level", () => {

    resetState();

    const player = getPlayer();
    player.completedGames = 5;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "veteran"), true);
    assert.strictEqual(ownsItem("avatars", "rookie"), false, "level is still 1 here - veteran must not imply the level-based unlocks");

});

test("checkPlayerUnlocks does not unlock 'master' at completedAchievements == 99", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = 99;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "master"), false);

});

test("checkPlayerUnlocks unlocks 'master' at completedAchievements == 100, but not 'legend' yet", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = 100;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "master"), true);
    assert.strictEqual(ownsItem("avatars", "legend"), false);

});

test("checkPlayerUnlocks unlocks 'legend' at completedAchievements == 500 (and 'master' too, since 500 >= 100)", () => {

    resetState();

    const player = getPlayer();
    player.completedAchievements = 500;
    savePlayer(player);

    checkPlayerUnlocks();

    assert.strictEqual(ownsItem("avatars", "legend"), true);
    assert.strictEqual(ownsItem("avatars", "master"), true);

});

test("checkPlayerUnlocks is idempotent - calling it twice at the same state does not duplicate an unlocked avatar", () => {

    resetState();

    const player = getPlayer();
    player.completedGames = 5;
    savePlayer(player);

    checkPlayerUnlocks();
    checkPlayerUnlocks();

    const { avatars } = getInventory();
    assert.strictEqual(avatars.filter(id => id === "veteran").length, 1);

});
