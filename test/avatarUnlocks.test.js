import { test } from "node:test";
import assert from "node:assert";

// unlockAvatar() transitively reads/writes localStorage via
// inventoryStorage.js - not available in plain Node, so this file
// provides a minimal in-memory shim, matching the existing convention
// established in test/profileHeader.test.js / test/avatarManager.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { unlockAvatar } = await import("../src/utils/player/avatar/avatarUnlocks.js");
const { ownsItem } = await import("../src/utils/player/inventory/inventoryManager.js");
const { getInventory, resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");

test("unlockAvatar grants a not-yet-owned avatar and reports success", () => {

    resetInventory();

    assert.strictEqual(ownsItem("avatars", "veteran"), false);

    const result = unlockAvatar("veteran");

    assert.strictEqual(result, true);
    assert.strictEqual(ownsItem("avatars", "veteran"), true);

});

test("unlockAvatar on an already-owned avatar reports failure and does not duplicate the entry", () => {

    resetInventory();

    unlockAvatar("master");

    const result = unlockAvatar("master");

    assert.strictEqual(result, false);

    const { avatars } = getInventory();
    assert.strictEqual(avatars.filter(id => id === "master").length, 1);

});

test("unlockAvatar for one avatar id does not affect ownership of a different avatar id", () => {

    resetInventory();

    unlockAvatar("legend");

    assert.strictEqual(ownsItem("avatars", "legend"), true);
    assert.strictEqual(ownsItem("avatars", "explorer"), false);

});
