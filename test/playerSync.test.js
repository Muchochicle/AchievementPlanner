import { test } from "node:test";
import assert from "node:assert";

// Same "smallest shim that does the job" convention as test/player.test.js/
// test/layout.test.js - playerSync.js pulls in player.js/inventoryStorage.js/
// avatarStorage.js, all of which need localStorage; playerProgressClient.js
// needs fetch.
globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

let requests = [];
let progressResponse = { success: true, state: null, updatedAt: null };

globalThis.fetch = async (url, options = {}) => {

    requests.push({ url: String(url), method: options.method ?? "GET", body: options.body ? JSON.parse(options.body) : null });

    if ((options.method ?? "GET") === "PUT") {

        return { ok: true, json: async () => ({ success: true, updatedAt: "2026-08-25T02:00:00.000Z" }) };

    }

    return { ok: true, json: async () => progressResponse };

};

const { syncPlayerProgressOnLoad } = await import("../src/utils/player/sync/playerSync.js");
const { getPlayer, savePlayer, resetPlayer, addXP } = await import("../src/utils/player/player.js");
const { getInventory, saveInventory, resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { getEquippedAvatar, saveEquippedAvatar, resetEquippedAvatar } = await import("../src/utils/player/avatar/avatarStorage.js");

test.beforeEach(async () => {

    requests = [];
    progressResponse = { success: true, state: null, updatedAt: null };

    resetPlayer();
    resetInventory();
    resetEquippedAvatar();

    // Reset the module-level "is this page's viewer logged in" flag back
    // to false before every test, exactly as if a fresh, logged-out page
    // had just loaded - see playerSync.js's own `syncEnabled`.
    requests = [];
    await syncPlayerProgressOnLoad({ logged: false });
    requests = [];

});

test("syncPlayerProgressOnLoad is a complete no-op for a logged-out session", async () => {

    await syncPlayerProgressOnLoad({ logged: false });

    assert.strictEqual(requests.length, 0);

});

test("syncPlayerProgressOnLoad never throws when fetch itself rejects", async () => {

    const originalFetch = globalThis.fetch;
    globalThis.fetch = async () => { throw new Error("offline"); };

    try {

        await assert.doesNotReject(syncPlayerProgressOnLoad({ logged: true }));

    } finally {

        globalThis.fetch = originalFetch;

    }

});

test("syncPlayerProgressOnLoad seeds the server from local state when this account has no server row yet", async () => {

    savePlayer({ ...getPlayer(), totalXP: 4242 });

    requests = [];
    progressResponse = { success: true, state: null, updatedAt: null };

    await syncPlayerProgressOnLoad({ logged: true });

    assert.strictEqual(requests.length, 2);
    assert.strictEqual(requests[0].method, "GET");
    assert.strictEqual(requests[1].method, "PUT");
    assert.strictEqual(requests[1].body.state.player.totalXP, 4242);

});

test("syncPlayerProgressOnLoad applies an existing server state to local storage without pushing it right back", async () => {

    progressResponse = {

        success: true,
        updatedAt: "2026-08-25T00:00:00.000Z",
        state: {

            player: { level: 1, xp: 0, totalXP: 5000, badges: ["legend"], claimedAchievements: [], claimedGames: [] },
            inventory: { avatars: ["default", "master"] },
            equippedAvatar: "master"

        }

    };

    await syncPlayerProgressOnLoad({ logged: true });

    assert.strictEqual(getPlayer().totalXP, 5000);
    assert.deepStrictEqual(getInventory().avatars, ["default", "master"]);
    assert.strictEqual(getEquippedAvatar(), "master");

    assert.strictEqual(requests.length, 1, "pulling an existing server state must not trigger a follow-up push");

});

test("once synced, saving player/inventory/avatar state each pushes the full current state to the server", async () => {

    progressResponse = { success: true, state: { player: {}, inventory: {}, equippedAvatar: "default" }, updatedAt: "x" };

    await syncPlayerProgressOnLoad({ logged: true });
    requests = [];

    addXP(50);

    assert.strictEqual(requests.length, 1);
    assert.strictEqual(requests[0].method, "PUT");
    assert.strictEqual(requests[0].body.state.player.totalXP, 50);

    saveInventory({ ...getInventory(), avatars: ["default", "rookie"] });

    assert.strictEqual(requests.length, 2);
    assert.deepStrictEqual(requests[1].body.state.inventory.avatars, ["default", "rookie"]);

    saveEquippedAvatar("rookie");

    assert.strictEqual(requests.length, 3);
    assert.strictEqual(requests[2].body.state.equippedAvatar, "rookie");

});

test("saving player state while logged out never calls fetch", async () => {

    addXP(50);

    assert.strictEqual(requests.length, 0);

});
