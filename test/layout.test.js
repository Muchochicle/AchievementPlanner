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

let fetchCallCount = 0;
let fetchSession = { logged: false };

globalThis.fetch = async () => {

    fetchCallCount++;

    return { json: async () => fetchSession };

};

function makeWidgetElement() {

    const el = { clicked: 0, handler: null };

    el.addEventListener = (event, handler) => {

        if (event === "click") el.handler = handler;

    };

    el.click = () => {

        el.handler?.();
        el.clicked++;

    };

    return el;

}

let navbarHTML = "";
let widgetEl = null;
let navbarPresent = true;

const navbarEl = {

    get innerHTML() { return navbarHTML; },

    set innerHTML(value) {

        navbarHTML = value;

        // A real innerHTML assignment tears down every existing child node -
        // any element a caller already fetched via getElementById is now
        // stale, and the next lookup must hand back a brand-new one.
        widgetEl = null;

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
    fetchCallCount = 0;
    fetchSession = { logged: false };
    navbarHTML = "";
    widgetEl = null;

});

test("loadNavbar renders the logged-out state first, then the resolved session, and returns it", async () => {

    fetchSession = STEAM_SESSION;

    const session = await loadNavbar();

    assert.deepStrictEqual(session, STEAM_SESSION);
    assert.match(navbarHTML, /id="player-widget"/);
    assert.match(navbarHTML, /TestHunter/);
    assert.strictEqual(fetchCallCount, 1);

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
    assert.strictEqual(fetchCallCount, 0);

});

test("refreshPlayerWidget re-renders the widget from the latest player state, with no extra session fetch", async () => {

    fetchSession = STEAM_SESSION;

    await loadNavbar();

    assert.match(navbarHTML, /Lv\. 1/);

    addXP(150); // levels up to 2 (100 XP needed for level 1->2), 50 XP into level 2

    refreshPlayerWidget(STEAM_SESSION);

    assert.match(navbarHTML, /Lv\. 2/);
    assert.match(navbarHTML, /50\/400 XP/); // getXPForNextLevel(2) = 2*2*100 = 400
    assert.strictEqual(fetchCallCount, 1, "refreshPlayerWidget must never re-check the Steam session itself");

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
