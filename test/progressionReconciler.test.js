import { test } from "node:test";
import assert from "node:assert";

// progressionReconciler.js makes the Steam-wide progression reconcile
// (previously fired only from the Profile page) happen on any page, while
// bounding its cost with a localStorage-checkpoint throttle and an
// in-flight single-flight guard. It transitively reads/writes the player
// and inventory localStorage keys and fetches GET /api/profile/stats, so
// this file shims both - matching the repo's "smallest shim that does the
// job" convention (see test/playerProgress.test.js, test/layout.test.js).

globalThis.localStorage = {
    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }
};

let statsFetchCount = 0;
let statsBody = { success: true, achievements: 0, completedGames: 0 };
let statsHttp = { ok: true, status: 200 };

globalThis.fetch = async url => {

    if (String(url).includes("/api/profile/stats")) {

        statsFetchCount++;

        return { ok: statsHttp.ok, status: statsHttp.status, json: async () => statsBody };

    }

    throw new Error(`unexpected fetch: ${url}`);

};

const {
    reconcileProgressionOnLoad,
    reconcileAggregateProgress,
    isReconcileDue,
    markReconciled,
    resetReconcilerState,
    RECONCILE_MIN_INTERVAL_MS
} = await import("../src/utils/player/statistics/progressionReconciler.js");

const { resetProfileStatsShared } = await import("../src/utils/player/statistics/profileStatsShared.js");
const { getPlayer, savePlayer, resetPlayer } = await import("../src/utils/player/player.js");
const { resetInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
const { XP_PER_ACHIEVEMENT, XP_PER_GAME_COMPLETION } = await import("../src/utils/player/xpValues.js");

const LOGGED_IN = { logged: true, user: { steamid: "123" } };

test.beforeEach(() => {

    resetPlayer();
    resetInventory();
    resetReconcilerState();
    resetProfileStatsShared();
    statsFetchCount = 0;
    statsBody = { success: true, achievements: 0, completedGames: 0 };
    statsHttp = { ok: true, status: 200 };

});

// --- throttle primitives ---------------------------------------------------

test("isReconcileDue is true on a fresh browser (no checkpoint) and false right after markReconciled", () => {

    assert.strictEqual(isReconcileDue(), true);

    markReconciled();

    assert.strictEqual(isReconcileDue(), false);

});

test("isReconcileDue becomes true again once the interval has elapsed", () => {

    const now = 1_000_000_000_000;

    markReconciled(now);

    assert.strictEqual(isReconcileDue(now + RECONCILE_MIN_INTERVAL_MS - 1), false);
    assert.strictEqual(isReconcileDue(now + RECONCILE_MIN_INTERVAL_MS), true);

});

// --- first login / never-visited-Profile user ---------------------------

test("first login: a logged-in visitor past the throttle reconciles local progression up to their real Steam totals", async () => {

    statsBody = { success: true, achievements: 40, completedGames: 2 };

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.strictEqual(statsFetchCount, 1);
    assert.deepStrictEqual(result, { status: "ready", changed: true });

    const player = getPlayer();
    assert.strictEqual(player.completedAchievements, 40);
    assert.strictEqual(player.completedGames, 2);
    assert.strictEqual(player.totalXP, 40 * XP_PER_ACHIEVEMENT + 2 * XP_PER_GAME_COMPLETION);

    // Checkpoint now stamped - an immediate re-run is throttled off.
    assert.strictEqual(isReconcileDue(), false);

});

test("returning user with a stale checkpoint reconciles again on the next visit", async () => {

    markReconciled(Date.now() - RECONCILE_MIN_INTERVAL_MS - 1);
    statsBody = { success: true, achievements: 5, completedGames: 0 };

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.strictEqual(statsFetchCount, 1);
    assert.strictEqual(result.status, "ready");
    assert.strictEqual(getPlayer().completedAchievements, 5);

});

// --- throttle + dedup --------------------------------------------------

test("a fresh checkpoint suppresses the reconcile entirely - no fetch", async () => {

    markReconciled();

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.deepStrictEqual(result, { status: "skipped", reason: "throttled" });
    assert.strictEqual(statsFetchCount, 0);

});

test("force:true bypasses the throttle", async () => {

    markReconciled();
    statsBody = { success: true, achievements: 7, completedGames: 1 };

    const result = await reconcileProgressionOnLoad(LOGGED_IN, { force: true });

    assert.strictEqual(statsFetchCount, 1);
    assert.strictEqual(result.status, "ready");

});

test("concurrent reconcile calls in one page load share a single fetch (single-flight)", async () => {

    statsBody = { success: true, achievements: 12, completedGames: 0 };

    const [a, b, c] = await Promise.all([
        reconcileProgressionOnLoad(LOGGED_IN),
        reconcileProgressionOnLoad(LOGGED_IN),
        reconcileProgressionOnLoad(LOGGED_IN)
    ]);

    assert.strictEqual(statsFetchCount, 1, "three callers, one /api/profile/stats request");
    assert.strictEqual(a.status, "ready");
    assert.strictEqual(b.status, "ready");
    assert.strictEqual(c.status, "ready");

});

// --- logged out / failures ------------------------------------------------

test("logged-out session: no fetch, no checkpoint, explicit skipped result", async () => {

    const result = await reconcileProgressionOnLoad({ logged: false });

    assert.deepStrictEqual(result, { status: "skipped", reason: "logged-out" });
    assert.strictEqual(statsFetchCount, 0);
    assert.strictEqual(isReconcileDue(), true, "checkpoint untouched");

});

test("a 401 mid-visit is reported, not treated as zero progress, and does not stamp the checkpoint", async () => {

    savePlayer({ ...getPlayer(), completedAchievements: 100, totalXP: 5000 });
    statsHttp = { ok: false, status: 401 };

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.strictEqual(result.status, "logged-out");
    assert.strictEqual(getPlayer().completedAchievements, 100, "progress not clawed back");
    assert.strictEqual(isReconcileDue(), true, "a failed attempt is retried next load");

});

test("a server error does not stamp the checkpoint", async () => {

    statsBody = { success: false, message: "steam down" };

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.strictEqual(result.status, "error");
    assert.strictEqual(isReconcileDue(), true);

});

// --- monotonic / cross-device ------------------------------------------

test("re-running against equal-or-lower totals is a harmless no-op (device that already pulled synced progress)", async () => {

    // Device B has already applied device A's synced state on load.
    savePlayer({ ...getPlayer(), completedAchievements: 500, completedGames: 5, totalXP: 999999 });
    const before = getPlayer().totalXP;

    statsBody = { success: true, achievements: 500, completedGames: 5 };
    const first = await reconcileProgressionOnLoad(LOGGED_IN, { force: true });

    assert.deepStrictEqual(first, { status: "ready", changed: false });
    assert.strictEqual(getPlayer().totalXP, before, "no XP granted for already-counted progress");

    // And a transient dip never lowers anything.
    statsBody = { success: true, achievements: 3, completedGames: 0 };
    await reconcileProgressionOnLoad(LOGGED_IN, { force: true });

    assert.strictEqual(getPlayer().completedAchievements, 500);
    assert.strictEqual(getPlayer().totalXP, before);

});

// --- Games-page path: reconcile from an already-fetched aggregate --------

test("reconcileAggregateProgress reconciles from the given aggregate with no fetch and stamps the checkpoint", () => {

    const result = reconcileAggregateProgress({ achievements: 25, completedGames: 1 });

    assert.strictEqual(statsFetchCount, 0, "the Games page already had this data - no extra request");
    assert.deepStrictEqual(result, { status: "ready", changed: true });
    assert.strictEqual(getPlayer().completedAchievements, 25);
    assert.strictEqual(isReconcileDue(), false, "checkpoint stamped, so layout.js's background reconcile stands down");

});

test("reconcileAggregateProgress with no usable aggregate does not stamp the checkpoint", () => {

    const result = reconcileAggregateProgress({ achievements: null, completedGames: null });

    assert.strictEqual(result.status, "skipped");
    assert.strictEqual(isReconcileDue(), true, "a later page still gets its chance to reconcile");

});

test("after reconcileAggregateProgress, reconcileProgressionOnLoad is throttled off (no duplicate call on the Games page)", async () => {

    reconcileAggregateProgress({ achievements: 25, completedGames: 1 });

    const result = await reconcileProgressionOnLoad(LOGGED_IN);

    assert.deepStrictEqual(result, { status: "skipped", reason: "throttled" });
    assert.strictEqual(statsFetchCount, 0);

});
