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
let navbarPresent = true;

const navbarEl = {

    get innerHTML() { return navbarHTML; },

    set innerHTML(value) {

        navbarHTML = value;

        // A real innerHTML assignment tears down every existing child node -
        // any element a caller already fetched via getElementById is now
        // stale, and the next lookup must hand back a brand-new one.
        widgetEl = null;
        logoutEl = null;

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

        return null;

    }

};

const { loadNavbar, refreshPlayerWidget } = await import("../src/js/layout.js");
const { resetPlayer, addXP } = await import("../src/utils/player/player.js");

const STEAM_SESSION = {
    logged: true,
    user: { personaname: "TestHunter", avatarfull: "https://example.com/a.jpg" }
};

test.beforeEach(() => {

    resetPlayer();
    navbarPresent = true;
    sessionFetchCount = 0;
    progressFetchCount = 0;
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

            player: { level: 1, xp: 0, totalXP: 999999, badges: [], claimedAchievements: [], claimedGames: [] },
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

test("the logout button renders only for a logged-in session", async () => {

    fetchSession = { logged: false };

    await loadNavbar();

    assert.doesNotMatch(navbarHTML, /id="logout-btn"/);

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    assert.match(navbarHTML, /id="logout-btn"/);

});

test("clicking the logout button POSTs to /auth/steam/logout with credentials, then redirects to index.html", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    window.location.href = "";

    await document.getElementById("logout-btn").click();

    assert.strictEqual(logoutFetchCount, 1);
    assert.strictEqual(logoutFetchOptions.method, "POST");
    assert.strictEqual(logoutFetchOptions.credentials, "include");
    assert.strictEqual(window.location.href, "index.html");

});

test("clicking the logout button still redirects to index.html even when the logout request fails (best-effort)", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    window.location.href = "";
    logoutShouldThrow = true;

    await document.getElementById("logout-btn").click();

    assert.strictEqual(window.location.href, "index.html");

});
