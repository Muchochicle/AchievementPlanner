import { test } from "node:test";
import assert from "node:assert";

// inventoryStorage.js reads/writes localStorage - not available in plain
// Node, so this file provides a minimal in-memory shim, matching the
// existing convention established in test/profileHeader.test.js /
// test/avatarManager.test.js.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

const { getInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { DEFAULT_INVENTORY } = await import("../src/data/player/inventory/inventory.js");

const STORAGE_KEY = "achievement-planner-inventory";

// Phase 64 (PHASE_64_AUDIT.md) - getInventory() reads through
// safeParseJSON (safeJson.js), the same shared "malformed JSON -> fallback,
// don't throw" guard already directly regression-tested for its other two
// consumers (getPlayer() in test/player.test.js, loadSessionDuration() in
// test/sessionManager.test.js). getInventory() itself had never been
// tested against genuinely corrupted stored data before this phase, even
// though the avatar picker on profile.html reads through it on every page
// load.
test("getInventory recovers safely from corrupted (invalid JSON) stored data, instead of throwing", () => {

    localStorage.setItem(STORAGE_KEY, "{not valid json!!!");

    const inventory = getInventory();

    assert.deepStrictEqual(
        inventory,
        DEFAULT_INVENTORY,
        "a corrupted save should fall back to the default inventory"
    );

});
