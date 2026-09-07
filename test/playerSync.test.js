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
    removeItem(key) { delete this.data[key]; },
    // Web Storage enumeration API - deleteAccountProgression()'s
    // planner-*/session-* sweep uses localStorage.length/.key(i), same as
    // src/dev/resetProgress.js (see test/resetProgress.test.js's shim).
    get length() { return Object.keys(this.data).length; },
    key(index) { return Object.keys(this.data)[index] ?? null; }

};

let requests = [];
let progressResponse = { success: true, state: null, updatedAt: null };
// Flipped by the DELETE /api/player/progress tests to simulate the server
// being unreachable - deleteAccountProgression() must then leave every
// local key untouched and report the failure rather than reload.
let deleteShouldFail = false;

globalThis.fetch = async (url, options = {}) => {

    requests.push({ url: String(url), method: options.method ?? "GET", body: options.body ? JSON.parse(options.body) : null });

    if ((options.method ?? "GET") === "PUT") {

        return { ok: true, json: async () => ({ success: true, updatedAt: "2026-08-25T02:00:00.000Z" }) };

    }

    if ((options.method ?? "GET") === "DELETE") {

        if (deleteShouldFail) {

            return { ok: false, status: 503, json: async () => ({ success: false, message: "Service Unavailable" }) };

        }

        return { ok: true, json: async () => ({ success: true, deleted: true }) };

    }

    return { ok: true, json: async () => progressResponse };

};

const { syncPlayerProgressOnLoad, deleteAccountProgression } = await import("../src/utils/player/sync/playerSync.js");
const { getPlayer, savePlayer, resetPlayer, addXP } = await import("../src/utils/player/player.js");
const { getInventory, saveInventory, resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { getEquippedAvatar, saveEquippedAvatar, resetEquippedAvatar } = await import("../src/utils/player/avatar/avatarStorage.js");

test.beforeEach(async () => {

    requests = [];
    progressResponse = { success: true, state: null, updatedAt: null };
    deleteShouldFail = false;

    localStorage.data = {};

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

test("deleteAccountProgression sends a DELETE to /api/player/progress with credentials", async () => {

    await syncPlayerProgressOnLoad({ logged: true });
    requests = [];

    const result = await deleteAccountProgression();

    assert.strictEqual(result.status, "ready");
    assert.strictEqual(requests.length, 1);
    assert.strictEqual(requests[0].method, "DELETE");
    assert.match(requests[0].url, /\/api\/player\/progress$/);

});

test("deleteAccountProgression wipes local progression (player, inventory, equipped avatar, planner-*/session-* keys) on success", async () => {

    await syncPlayerProgressOnLoad({ logged: true });

    addXP(900);
    saveInventory({ ...getInventory(), avatars: ["default", "legend"] });
    saveEquippedAvatar("legend");
    localStorage.setItem("planner-hades", JSON.stringify({ a: true }));
    localStorage.setItem("session-hades", JSON.stringify([1, 2]));
    localStorage.setItem("some-unrelated-key", "keep me");

    const result = await deleteAccountProgression();

    assert.strictEqual(result.status, "ready");
    assert.strictEqual(getPlayer().totalXP, 0, "player XP reset");
    assert.strictEqual(getPlayer().currentStreak, 0);
    assert.deepStrictEqual(getInventory().avatars, ["default"], "unlocked avatars reset to default only");
    assert.strictEqual(getEquippedAvatar(), "default", "equipped avatar reset");
    assert.strictEqual(localStorage.getItem("planner-hades"), null, "per-game planner progress cleared");
    assert.strictEqual(localStorage.getItem("session-hades"), null, "planner session state cleared");
    assert.strictEqual(localStorage.getItem("some-unrelated-key"), "keep me", "unrelated keys are left alone");

});

test("deleteAccountProgression does NOT re-push local state to the server after the wipe (row stays deleted)", async () => {

    await syncPlayerProgressOnLoad({ logged: true });

    addXP(120);
    requests = [];

    await deleteAccountProgression();

    // The one DELETE, and nothing else - the resetPlayer/resetInventory/
    // resetEquippedAvatar calls must not trip the syncBus into PUTting the
    // fresh defaults straight back and re-creating the row.
    assert.deepStrictEqual(requests.map(r => r.method), ["DELETE"]);

});

test("deleteAccountProgression leaves everything untouched and reports an error when the server is unreachable", async () => {

    await syncPlayerProgressOnLoad({ logged: true });

    addXP(750);
    saveEquippedAvatar("legend");
    localStorage.setItem("planner-hades", JSON.stringify({ a: true }));
    requests = [];

    deleteShouldFail = true;

    const result = await deleteAccountProgression();

    assert.strictEqual(result.status, "error");
    assert.strictEqual(getPlayer().totalXP, 750, "a failed delete must not wipe local XP");
    assert.strictEqual(getEquippedAvatar(), "legend", "a failed delete must not reset the equipped avatar");
    assert.strictEqual(localStorage.getItem("planner-hades"), JSON.stringify({ a: true }), "a failed delete must not clear planner keys");

});

test("deleteAccountProgression is idempotent - a second call still resolves ready", async () => {

    await syncPlayerProgressOnLoad({ logged: true });

    assert.strictEqual((await deleteAccountProgression()).status, "ready");
    assert.strictEqual((await deleteAccountProgression()).status, "ready");

});
