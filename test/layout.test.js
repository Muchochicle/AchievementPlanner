import { test } from "node:test";
import assert from "node:assert";

// Phase 46 (see PHASE_46_AUDIT.md, Finding 1) - loadNavbar()/refreshPlayerWidget()
// pull in the full navbar component chain (createNavbar -> createPlayerWidget ->
// getPlayer/getCurrentAvatar/getSteamDisplayName), so this stub has to cover
// localStorage, fetch, and window.location, matching this project's existing
// "smallest shim that does the job" convention (see test/app.test.js,
// test/player.test.js). navbarEl.innerHTML is a real getter/setter (not a
// plain string field) so it can simulate the one DOM behavior these tests
// actually depend on: assigning innerHTML destroys whatever #player-widget
// node existed before, forcing a fresh element (and a fresh click listener)
// on every re-render - exactly what would silently break if refreshPlayerWidget
// ever stopped re-attaching the listener on each call.

globalThis.window = {
    location: { pathname: "/game.html", href: "" }
};

globalThis.localStorage = {

    data: {},
    getItem(key) { return this.data[key] ?? null; },
    setItem(key, value) { this.data[key] = String(value); },
    removeItem(key) { delete this.data[key]; }

};

// Phase 71: loadNavbar() now also awaits syncPlayerProgressOnLoad(), which
// calls GET /api/player/progress whenever the resolved session is logged
// in - a second fetch beyond the original /api/me check. sessionFetchCount
// preserves every existing assertion's meaning ("did loadNavbar re-check
// the Steam session"); progressFetchCount is the new call this phase adds.
let sessionFetchCount = 0;
let progressFetchCount = 0;
let logoutFetchCount = 0;
let logoutFetchOptions = null;
let logoutShouldThrow = false;
let fetchSession = { logged: false };
let progressResponse = { success: true, state: null, updatedAt: null };

// Phase (Priority 4): loadNavbar() now also fires a throttled, fire-and-
// forget progression reconcile that GETs /api/profile/stats when logged in
// and past its checkpoint. statsFetchCount tracks it; profileStatsResponse
// defaults to a zero aggregate (nothing to reconcile -> no player-state
// change, no push) so it stays invisible to every pre-existing assertion.
let statsFetchCount = 0;
let profileStatsResponse = { success: true, achievements: 0, completedGames: 0 };

globalThis.fetch = async (url, options) => {

    if (String(url).includes("/auth/steam/logout")) {

        logoutFetchCount++;
        logoutFetchOptions = options;

        if (logoutShouldThrow) throw new Error("network down");

        return { ok: true, json: async () => ({ success: true }) };

    }

    if (String(url).includes("/api/player/progress")) {

        progressFetchCount++;

        return { ok: true, json: async () => progressResponse };

    }

    if (String(url).includes("/api/profile/stats")) {

        statsFetchCount++;

        return { ok: true, status: 200, json: async () => profileStatsResponse };

    }

    sessionFetchCount++;

    return { ok: true, json: async () => fetchSession };

};

function makeWidgetElement() {

    const el = { clicked: 0, handler: null };

    el.addEventListener = (event, handler) => {

        if (event === "click") el.handler = handler;

    };

    // Returns the handler's own return value (a Promise for the async
    // logout-btn handler, undefined for the sync player-widget one) so
    // callers that need to wait for an async handler to finish can
    // `await` this, while every pre-existing sync-handler test that
    // ignores the return value keeps working unchanged.
    el.click = () => {

        el.clicked++;
        return el.handler?.();

    };

    return el;

}

let navbarHTML = "";
let widgetEl = null;
let logoutEl = null;
let toggleEl = null;
let navbarPresent = true;
let navbarClasses = new Set();

// A minimal real Set-backed classList (add/remove/toggle/contains) - the
// same shape layout.js's own nav-toggle click handler actually calls
// (navbar.classList.remove/.toggle), matching this project's existing
// "smallest shim that does the job" convention for every other stubbed
// DOM API in this file.
const navbarClassList = {

    remove(name) { navbarClasses.delete(name); },

    toggle(name) {

        const isPresent = navbarClasses.has(name);

        if (isPresent) navbarClasses.delete(name);
        else navbarClasses.add(name);

        return !isPresent;

    },

    contains(name) { return navbarClasses.has(name); }

};

function makeToggleElement() {

    const el = makeWidgetElement();

    // Starts at "false", matching the real markup's own literal
    // aria-expanded="false" (navbar.js) - this fake element doesn't parse
    // navbarHTML's actual attributes, so its initial state has to be set
    // here to stay honest about what a fresh render actually produces.
    el.attributes = { "aria-expanded": "false" };
    el.setAttribute = (name, value) => { el.attributes[name] = String(value); };
    el.getAttribute = name => el.attributes[name] ?? null;

    return el;

}

const navbarEl = {

    classList: navbarClassList,

    get innerHTML() { return navbarHTML; },

    set innerHTML(value) {

        navbarHTML = value;

        // A real innerHTML assignment tears down every existing child node -
        // any element a caller already fetched via getElementById is now
        // stale, and the next lookup must hand back a brand-new one.
        widgetEl = null;
        logoutEl = null;
        toggleEl = null;

    }

};

globalThis.document = {

    getElementById(id) {

        if (id === "navbar") return navbarPresent ? navbarEl : null;

        if (id === "player-widget") {

            if (!navbarHTML.includes('id="player-widget"')) return null;

            widgetEl ??= makeWidgetElement();

            return widgetEl;

        }

        if (id === "logout-btn") {

            if (!navbarHTML.includes('id="logout-btn"')) return null;

            logoutEl ??= makeWidgetElement();

            return logoutEl;

        }

        if (id === "nav-toggle") {

            if (!navbarHTML.includes('id="nav-toggle"')) return null;

            toggleEl ??= makeToggleElement();

            return toggleEl;

        }

        return null;

    }

};

const { loadNavbar, refreshPlayerWidget } = await import("../src/js/layout.js");
const { resetPlayer, addXP, getPlayer, savePlayer } = await import("../src/utils/player/player.js");
const { resetReconcilerState } = await import("../src/utils/player/statistics/progressionReconciler.js");
const { resetProfileStatsShared } = await import("../src/utils/player/statistics/profileStatsShared.js");

// Lets a test wait for loadNavbar()'s fire-and-forget progression reconcile
// (kicked but not awaited inside loadNavbar) to run to completion.
const flushMicrotasks = () => new Promise(resolve => setTimeout(resolve, 0));

function todayKey() {

    const now = new Date();

    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

}

// loadNavbar() now records the daily-activity streak for a signed-in
// visitor (layout.js), which on the FIRST activity of the day advances the
// streak and pushes it - one extra PUT that would otherwise perturb every
// pre-existing fetch-count assertion below. Stamping lastPlayed to today
// in beforeEach makes recordDailyActivity() a no-op for the tests that
// aren't about the streak; the dedicated streak tests clear it first.
function markActivityRecordedToday() {

    const player = getPlayer();
    player.lastPlayed = todayKey();
    savePlayer(player);

}

function clearActivityRecord() {

    const player = getPlayer();
    player.lastPlayed = null;
    player.currentStreak = 0;
    player.longestStreak = 0;
    savePlayer(player);

}

const STEAM_SESSION = {
    logged: true,
    user: { personaname: "TestHunter", avatarfull: "https://example.com/a.jpg" }
};

test.beforeEach(() => {

    resetPlayer();
    markActivityRecordedToday();
    resetReconcilerState();
    resetProfileStatsShared();
    navbarPresent = true;
    sessionFetchCount = 0;
    progressFetchCount = 0;
    statsFetchCount = 0;
    profileStatsResponse = { success: true, achievements: 0, completedGames: 0 };
    logoutFetchCount = 0;
    logoutFetchOptions = null;
    logoutShouldThrow = false;
    fetchSession = { logged: false };
    // A non-null-but-empty state: exercises the normal "server already has
    // a row, pull it" path (a single GET, no seed-push) without matching
    // any of applyRemoteState's recognized sub-keys - keeps these
    // pre-existing tests' fetch-count assertions about session-checking
    // behavior unaffected by the new sync call. The "no server row yet"
    // (state: null) seed-push path gets its own dedicated test below.
    progressResponse = { success: true, state: {}, updatedAt: "2026-08-01T00:00:00.000Z" };
    navbarHTML = "";
    widgetEl = null;
    logoutEl = null;
    toggleEl = null;
    navbarClasses = new Set();

});

test("loadNavbar renders the logged-out state first, then the resolved session, and returns it", async () => {

    fetchSession = STEAM_SESSION;

    const session = await loadNavbar();

    assert.deepStrictEqual(session, STEAM_SESSION);
    assert.match(navbarHTML, /id="player-widget"/);
    assert.match(navbarHTML, /TestHunter/);
    assert.strictEqual(sessionFetchCount, 1);
    assert.strictEqual(progressFetchCount, 1, "a logged-in session must trigger exactly one progress sync fetch");

});

test("loadNavbar's click listener on the resolved player-widget navigates to profile.html", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    document.getElementById("player-widget").click();

    assert.strictEqual(window.location.href, "profile.html");

});

test("loadNavbar returns {logged:false} immediately and never calls fetch when #navbar is absent from the page", async () => {

    navbarPresent = false;

    const session = await loadNavbar();

    assert.deepStrictEqual(session, { logged: false });
    assert.strictEqual(sessionFetchCount, 0);
    assert.strictEqual(progressFetchCount, 0);

});

test("refreshPlayerWidget re-renders the widget from the latest player state, with no extra session fetch", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    assert.match(navbarHTML, /Lv\. 1/);

    addXP(150); // levels up to 2 (100 XP needed for level 1->2), 50 XP into level 2

    refreshPlayerWidget(STEAM_SESSION);

    assert.match(navbarHTML, /Lv\. 2/);
    assert.match(navbarHTML, /50\/400 XP/); // getXPForNextLevel(2) = 2*2*100 = 400
    assert.strictEqual(sessionFetchCount, 1, "refreshPlayerWidget must never re-check the Steam session itself");

});

test("loadNavbar seeds the server from local progress when this account has no server row yet (state: null)", async () => {

    fetchSession = STEAM_SESSION;
    progressResponse = { success: true, state: null, updatedAt: null };

    await loadNavbar();

    assert.strictEqual(progressFetchCount, 2, "a null server state must trigger a GET, then a seed PUT");

});

test("loadNavbar applies the server's player/inventory/avatar state over local storage when a server row exists", async () => {

    fetchSession = STEAM_SESSION;
    progressResponse = {

        success: true,
        updatedAt: "2026-08-01T00:00:00.000Z",
        state: {

            // lastPlayed = today: a real server row for an active player
            // carries it, so loadNavbar's daily-activity record is a
            // same-day no-op here and this stays a pure "apply, don't
            // push back" test.
            player: { level: 1, xp: 0, totalXP: 999999, badges: [], claimedAchievements: [], claimedGames: [], lastPlayed: todayKey() },
            inventory: { avatars: ["default", "legend"] },
            equippedAvatar: "legend"

        }

    };

    await loadNavbar();

    const { getPlayer } = await import("../src/utils/player/player.js");
    const { getInventory } = await import("../src/utils/player/inventory/inventoryStorage.js");
    const { getEquippedAvatar } = await import("../src/utils/player/avatar/avatarStorage.js");

    assert.strictEqual(getPlayer().totalXP, 999999);
    assert.deepStrictEqual(getInventory().avatars, ["default", "legend"]);
    assert.strictEqual(getEquippedAvatar(), "legend");
    assert.strictEqual(progressFetchCount, 1, "applying an existing server state must not immediately push it right back");

});

test("refreshPlayerWidget reflects each successive player-state change across repeated calls (simulated poll cycles)", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    addXP(50);
    refreshPlayerWidget(STEAM_SESSION);
    assert.match(navbarHTML, /50\/100 XP/);

    addXP(60); // total 110 -> level 2, 10 XP into it
    refreshPlayerWidget(STEAM_SESSION);
    assert.match(navbarHTML, /Lv\. 2/);
    assert.match(navbarHTML, /10\/400 XP/);

    addXP(500); // total 610 -> level1 needs 100 (610-100=510,lvl2), level2 needs 400 (510-400=110,lvl3), level3 needs 900 (110<900, stop)
    refreshPlayerWidget(STEAM_SESSION);
    assert.match(navbarHTML, /Lv\. 3/);
    assert.match(navbarHTML, /110\/900 XP/);

});

test("refreshPlayerWidget's click listener still works correctly after multiple re-renders (no lost/duplicated listener)", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    addXP(10);
    refreshPlayerWidget(STEAM_SESSION);

    addXP(10);
    refreshPlayerWidget(STEAM_SESSION);

    const widget = document.getElementById("player-widget");

    widget.click();

    assert.strictEqual(widget.clicked, 1);
    assert.strictEqual(window.location.href, "profile.html");

});

test("refreshPlayerWidget is a no-op for a logged-out session - the widget must not appear or be rebuilt", async () => {

    fetchSession = { logged: false };

    await loadNavbar();

    const before = navbarHTML;

    refreshPlayerWidget({ logged: false });

    assert.strictEqual(navbarHTML, before);
    assert.doesNotMatch(navbarHTML, /id="player-widget"/);

});

test("refreshPlayerWidget does not throw when #navbar is absent from the page", async () => {

    navbarPresent = false;

    assert.doesNotThrow(() => refreshPlayerWidget(STEAM_SESSION));

});

// Logout moved out of the navbar entirely and into the Profile page's own
// Settings section (see test/profileSettings.test.js for its coverage) -
// this is now a regression guard that the navbar never grows the control
// back, for any session state.
test("the navbar never renders a logout button, logged in or out", async () => {

    fetchSession = { logged: false };

    await loadNavbar();

    assert.doesNotMatch(navbarHTML, /id="logout-btn"/);

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    assert.doesNotMatch(navbarHTML, /id="logout-btn"/);
    assert.strictEqual(logoutFetchCount, 0, "the navbar itself must never call the logout endpoint");

});

test("the mobile nav-toggle button renders in both logged-in and logged-out states, and starts collapsed", async () => {

    await loadNavbar();

    const toggle = document.getElementById("nav-toggle");

    assert.ok(toggle, "nav-toggle should render even when logged out");
    assert.strictEqual(toggle.getAttribute("aria-expanded"), "false");

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    assert.strictEqual(document.getElementById("nav-toggle").getAttribute("aria-expanded"), "false");

});

test("clicking nav-toggle opens the mobile menu (adds .nav-open, flips aria-expanded to true), and a second click closes it again", async () => {

    await loadNavbar();

    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("nav-toggle");

    toggle.click();

    assert.ok(navbar.classList.contains("nav-open"), "first click should open the menu");
    assert.strictEqual(toggle.getAttribute("aria-expanded"), "true");

    toggle.click();

    assert.ok(!navbar.classList.contains("nav-open"), "second click should close the menu again");
    assert.strictEqual(toggle.getAttribute("aria-expanded"), "false");

});

test("re-rendering the navbar (e.g. refreshPlayerWidget) always starts with the mobile menu collapsed, even if it was left open", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    document.getElementById("nav-toggle").click();

    const navbar = document.getElementById("navbar");

    assert.ok(navbar.classList.contains("nav-open"), "sanity check: menu is open before the re-render");

    refreshPlayerWidget(STEAM_SESSION);

    assert.ok(!navbar.classList.contains("nav-open"), "a re-render must not leave a stale open menu behind a freshly-collapsed toggle button");
    assert.strictEqual(document.getElementById("nav-toggle").getAttribute("aria-expanded"), "false");

});

// --- Priority 4: background progression reconcile ----------------------

test("loadNavbar fires a throttled progression reconcile for a logged-in visitor and refreshes the widget when it raises XP", async () => {

    fetchSession = STEAM_SESSION;
    // Real Steam-wide totals far above this fresh browser's local 0.
    profileStatsResponse = { success: true, status: "ready", achievements: 40, completedGames: 2 };

    await loadNavbar();
    await flushMicrotasks();

    assert.strictEqual(statsFetchCount, 1, "exactly one /api/profile/stats reconcile fetch");

    const player = getPlayer();
    assert.strictEqual(player.completedAchievements, 40, "local counter caught up to the live total");
    assert.strictEqual(player.completedGames, 2);
    assert.strictEqual(player.totalXP, 40 * 50 + 2 * 300, "XP granted for the newly-reconciled progress");
    assert.match(navbarHTML, /TestHunter/, "widget re-rendered after the reconcile");

});

test("loadNavbar's reconcile is skipped entirely while the throttle checkpoint is still fresh", async () => {

    fetchSession = STEAM_SESSION;
    profileStatsResponse = { success: true, status: "ready", achievements: 40, completedGames: 2 };

    await loadNavbar();
    await flushMicrotasks();
    assert.strictEqual(statsFetchCount, 1);

    // A second page load moments later. resetProfileStatsShared() simulates
    // the real per-navigation module reset; the throttle checkpoint lives
    // in localStorage, so it survives - and must suppress the second fetch.
    resetProfileStatsShared();
    navbarHTML = "";
    await loadNavbar();
    await flushMicrotasks();

    assert.strictEqual(statsFetchCount, 1, "the 30-minute throttle suppressed the second reconcile fetch");

});

test("loadNavbar({ reconcileProgression: false }) never fires the reconcile fetch (the caller owns it)", async () => {

    fetchSession = STEAM_SESSION;
    profileStatsResponse = { success: true, status: "ready", achievements: 40, completedGames: 2 };

    await loadNavbar({ reconcileProgression: false });
    await flushMicrotasks();

    assert.strictEqual(statsFetchCount, 0);
    assert.strictEqual(getPlayer().completedAchievements, 0, "no reconcile happened here");

});

test("loadNavbar's reconcile is a no-op for a logged-out visitor - no fetch, no checkpoint", async () => {

    fetchSession = { logged: false };

    await loadNavbar();
    await flushMicrotasks();

    assert.strictEqual(statsFetchCount, 0);

});

test("a failed reconcile fetch leaves the checkpoint unset so the next page load retries", async () => {

    fetchSession = STEAM_SESSION;
    profileStatsResponse = { success: false, message: "steam down" };

    await loadNavbar();
    await flushMicrotasks();
    assert.strictEqual(statsFetchCount, 1);

    // Now a healthy response on the next navigation: it must try again, not
    // stay suppressed by a checkpoint that was never stamped.
    resetProfileStatsShared();
    profileStatsResponse = { success: true, status: "ready", achievements: 12, completedGames: 0 };
    navbarHTML = "";
    await loadNavbar();
    await flushMicrotasks();

    assert.strictEqual(statsFetchCount, 2, "the failed attempt did not consume the throttle window");
    assert.strictEqual(getPlayer().completedAchievements, 12);

});

test("loadNavbar records today's AchievementPlanner daily activity for a signed-in visitor (any page, not only Profile)", async () => {

    fetchSession = STEAM_SESSION;
    clearActivityRecord();

    assert.strictEqual(getPlayer().currentStreak, 0, "starts with no streak");
    assert.strictEqual(getPlayer().lastPlayed, null);

    await loadNavbar();

    const player = getPlayer();

    assert.strictEqual(player.currentStreak, 1, "first activity of the day starts a streak of 1");
    assert.strictEqual(player.longestStreak, 1);
    assert.ok(player.lastPlayed, "today's date is stamped");

});

test("loadNavbar records daily activity at most once per calendar day (idempotent across page loads)", async () => {

    fetchSession = STEAM_SESSION;
    clearActivityRecord();

    await loadNavbar();
    navbarHTML = "";
    await loadNavbar();
    navbarHTML = "";
    await loadNavbar();

    // Three page loads on the same day must not inflate the streak past 1.
    assert.strictEqual(getPlayer().currentStreak, 1);
    assert.strictEqual(getPlayer().longestStreak, 1);

});

test("loadNavbar does NOT record daily activity for a signed-out visitor", async () => {

    fetchSession = { logged: false };
    clearActivityRecord();

    await loadNavbar();

    const player = getPlayer();

    assert.strictEqual(player.currentStreak, 0, "a signed-out visitor accrues no streak");
    assert.strictEqual(player.lastPlayed, null);

});
