import { test } from "node:test";
import assert from "node:assert";

// avatarManager.js transitively reads/writes localStorage (equipped
// avatar + inventory ownership) - not available in plain Node, so this
// file provides a minimal in-memory shim, matching the existing
// convention established in test/profileHeader.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { getCurrentAvatar, equipAvatar, getAllAvatars } = await import("../src/utils/player/avatar/avatarManager.js");
const { addItem, ownsItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { AVATARS } = await import("../src/data/player/avatars.js");
const { CONFIG } = await import("../src/config.js");

test("getCurrentAvatar defaults to the 'default' avatar when nothing has ever been equipped", () => {

    localStorage.removeItem("achievement-planner-avatar");

    const avatar = getCurrentAvatar();

    assert.strictEqual(avatar.id, "default");

});

test("getCurrentAvatar falls back to 'default' when the stored id doesn't exist in AVATARS", () => {

    localStorage.setItem("achievement-planner-avatar", "not-a-real-avatar-id");

    const avatar = getCurrentAvatar();

    assert.strictEqual(avatar.id, "default", "a corrupted/unknown stored id must never crash - it should fall back to default");

});

test("equipAvatar rejects an id that doesn't exist in AVATARS at all", () => {

    const result = equipAvatar("totally-made-up-avatar");

    assert.strictEqual(result, false);

});

test("equipAvatar rejects a real but unowned avatar, and does not change the equipped avatar", () => {

    localStorage.setItem("achievement-planner-avatar", "default");
    localStorage.removeItem("achievement-planner-inventory");

    // CONFIG.DEBUG_UNLOCK_ALL_AVATARS ships `false` by default (see
    // test/config.test.js), but is still forced off explicitly here so
    // this test keeps exercising equipAvatar's own ownership gate even if
    // that default ever changes; restored afterwards so it doesn't leak
    // into other tests in this file. See inventoryStorage.js
    // getInventory() for what this flag actually does when enabled.
    const original = CONFIG.DEBUG_UNLOCK_ALL_AVATARS;
    CONFIG.DEBUG_UNLOCK_ALL_AVATARS = false;

    try {

        // "rookie" is a real AVATARS entry (see src/data/player/avatars.js)
        // but is not present in DEFAULT_INVENTORY.avatars - equipping it
        // without first owning it must fail closed.
        const result = equipAvatar("rookie");

        assert.strictEqual(result, false);
        assert.strictEqual(getCurrentAvatar().id, "default", "a rejected equip must not change the currently-equipped avatar");

    } finally {

        CONFIG.DEBUG_UNLOCK_ALL_AVATARS = original;

    }

});

test("equipAvatar succeeds once the avatar has been added to the inventory, and getCurrentAvatar reflects it", () => {

    localStorage.setItem("achievement-planner-avatar", "default");
    localStorage.removeItem("achievement-planner-inventory");

    addItem("avatars", "veteran");

    const result = equipAvatar("veteran");

    assert.strictEqual(result, true);
    assert.strictEqual(getCurrentAvatar().id, "veteran");

});

test("DEBUG_UNLOCK_ALL_AVATARS still force-unlocks every avatar when a developer explicitly re-enables it", () => {

    // Confirms the underlying dev functionality was only defaulted off,
    // not removed: flipping the flag back on (the normal way a developer
    // would opt back into it locally) must still bypass ownership exactly
    // as before.
    localStorage.setItem("achievement-planner-avatar", "default");
    localStorage.removeItem("achievement-planner-inventory");

    const original = CONFIG.DEBUG_UNLOCK_ALL_AVATARS;
    CONFIG.DEBUG_UNLOCK_ALL_AVATARS = true;

    try {

        assert.strictEqual(ownsItem("avatars", "rookie"), true, "every avatar should read as owned while the debug flag is on");

        const result = equipAvatar("rookie");
        assert.strictEqual(result, true);
        assert.strictEqual(getCurrentAvatar().id, "rookie");

    } finally {

        CONFIG.DEBUG_UNLOCK_ALL_AVATARS = original;

    }

});

test("getAllAvatars returns every avatar defined in the catalog, matching AVATARS exactly", () => {

    const all = getAllAvatars();

    assert.strictEqual(all.length, Object.keys(AVATARS).length);
    assert.deepStrictEqual(
        all.map(a => a.id).sort(),
        Object.keys(AVATARS).sort()
    );

});
