import { test } from "node:test";
import assert from "node:assert";

// resetDevelopmentProgress() reads/writes localStorage via
// localStorage.length/.key(i) (the real Web Storage enumeration API, not
// Object.keys()) - the shim below backs its own-enumerable-property store
// with a `length` getter and `key(i)` method to match, matching the
// existing convention (see test/profileHeader.test.js,
// backend/test/plannerStorage.test.js) but extended for this file's
// actual API surface.
function freshLocalStorage() {

    const store = {};

    const mock = {

        getItem(key) {
            return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
        },

        setItem(key, value) {
            store[key] = String(value);
        },

        removeItem(key) {
            delete store[key];
        },

        get length() {
            return Object.keys(store).length;
        },

        key(index) {
            return Object.keys(store)[index] ?? null;
        }

    };

    globalThis.localStorage = mock;

    return store;

}

globalThis.confirm = () => true;
globalThis.location = { reload: () => {} };

const { resetDevelopmentProgress } = await import("../src/dev/resetProgress.js");
const { getPlayer, addXP, completeAchievement } = await import("../src/utils/player/player.js");
const { ownsItem, addItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { getCurrentAvatar, equipAvatar } = await import("../src/utils/player/avatar/avatarManager.js");
const { CONFIG } = await import("../src/config.js");

test("resetDevelopmentProgress does nothing when the user declines the confirmation", () => {

    const store = freshLocalStorage();
    store["planner-hades"] = JSON.stringify({ a: true });

    const originalConfirm = globalThis.confirm;
    globalThis.confirm = () => false;

    try {

        resetDevelopmentProgress();
        assert.strictEqual(store["planner-hades"], JSON.stringify({ a: true }), "declining the confirm dialog must leave existing progress untouched");

    } finally {

        globalThis.confirm = originalConfirm;

    }

});

test("resetDevelopmentProgress clears per-game planner and session keys", () => {

    const store = freshLocalStorage();
    store["planner-hades"] = JSON.stringify({ a: true });
    store["session-hades"] = JSON.stringify([1, 2]);
    // ":" (not "-") between "session-duration" and the slug since Phase 58
    // (PHASE_58_AUDIT.md) - still starts with "session-", so the sweep
    // below must still clear it.
    store["session-duration:hades"] = "90";
    store["some-unrelated-key"] = "should not be touched";

    resetDevelopmentProgress();

    assert.strictEqual(store["planner-hades"], undefined);
    assert.strictEqual(store["session-hades"], undefined);
    assert.strictEqual(store["session-duration:hades"], undefined);
    assert.strictEqual(store["some-unrelated-key"], "should not be touched", "keys unrelated to planner/session progress must be left alone");

});

test("resetDevelopmentProgress resets XP/level/completion counters", () => {

    freshLocalStorage();

    addXP(500);
    completeAchievement();

    resetDevelopmentProgress();

    const player = getPlayer();
    assert.strictEqual(player.totalXP, 0);
    assert.strictEqual(player.completedAchievements, 0);
    assert.strictEqual(player.level, 1);

});

test("resetDevelopmentProgress also resets owned/equipped avatars and inventory - not just player XP and per-game progress", () => {

    freshLocalStorage();

    const originalDebugFlag = CONFIG.DEBUG_UNLOCK_ALL_AVATARS;
    CONFIG.DEBUG_UNLOCK_ALL_AVATARS = false;

    try {

        addItem("avatars", "veteran");
        equipAvatar("veteran");

        assert.strictEqual(getCurrentAvatar().id, "veteran", "sanity check: the avatar was actually equipped before reset");

        resetDevelopmentProgress();

        assert.strictEqual(
            ownsItem("avatars", "veteran"),
            false,
            "'Reset ALL development progress' must also clear unlocked inventory items (avatars/frames/titles/etc.), not just XP and per-game progress"
        );

        assert.strictEqual(
            getCurrentAvatar().id,
            "default",
            "the equipped avatar must revert to default on a full reset - a previously-equipped, now-unowned avatar must not keep displaying"
        );

    } finally {

        CONFIG.DEBUG_UNLOCK_ALL_AVATARS = originalDebugFlag;

    }

});
