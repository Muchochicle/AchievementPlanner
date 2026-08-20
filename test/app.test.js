import { test } from "node:test";
import assert from "node:assert";

// app.js calls init() as a side effect of being imported (no explicit
// export/invocation hook exists to defer it - see the bottom of the
// file), so a minimal document/fetch stub has to be in place *before* the
// one import below, purely so that first, unavoidable init() run
// completes without throwing. It isn't meant to be realistic; every actual
// test below calls the exported render functions directly afterwards,
// with their own fresh fake elements/arguments - matching this project's
// existing "smallest shim that does the job" convention (see
// test/search.test.js, test/profileHeader.test.js).
function makeElement() {

    return {
        innerHTML: "",
        textContent: "",
        hidden: undefined,
        disabled: undefined,
        addEventListener() {}
    };

}

globalThis.document = {

    getElementById(id) {

        if (id === "games-container" || id === "catalog-error") {

            return makeElement();

        }

        return null;

    },

    querySelector() { return null; },
    querySelectorAll() { return []; }

};

globalThis.fetch = async () => ({ ok: true, json: async () => ({ games: [] }) });

const {
    renderHeroStats,
    showHeroStatsUnavailable,
    renderPopularGames,
    POPULAR_GAMES_UNAVAILABLE_MESSAGE
} = await import("../src/js/app.js");

test("renderHeroStats shows the total game count and how many of them have a planner", () => {

    const gamesEl = { textContent: "" };
    const plannersEl = { textContent: "" };

    document.getElementById = id => ({
        "hero-stat-games": gamesEl,
        "hero-stat-planners": plannersEl
    }[id] ?? null);

    renderHeroStats([
        { slug: "a", hasPlanner: true },
        { slug: "b", hasPlanner: true },
        { slug: "c", hasPlanner: false }
    ]);

    assert.strictEqual(gamesEl.textContent, "3+");
    assert.strictEqual(plannersEl.textContent, "2+");

});

test("renderHeroStats shows 0+ for an empty catalog, not a crash or blank state", () => {

    const gamesEl = { textContent: "" };
    const plannersEl = { textContent: "" };

    document.getElementById = id => ({
        "hero-stat-games": gamesEl,
        "hero-stat-planners": plannersEl
    }[id] ?? null);

    assert.doesNotThrow(() => renderHeroStats([]));

    assert.strictEqual(gamesEl.textContent, "0+");
    assert.strictEqual(plannersEl.textContent, "0+");

});

test("renderHeroStats tolerates the hero stat elements being absent from the DOM", () => {

    document.getElementById = () => null;

    assert.doesNotThrow(() => renderHeroStats([{ slug: "a", hasPlanner: true }]));

});

test("showHeroStatsUnavailable shows an explicit unavailable marker, distinct from the loading state", () => {

    const gamesEl = { textContent: "…" };
    const plannersEl = { textContent: "…" };

    document.getElementById = id => ({
        "hero-stat-games": gamesEl,
        "hero-stat-planners": plannersEl
    }[id] ?? null);

    showHeroStatsUnavailable();

    assert.strictEqual(gamesEl.textContent, "—");
    assert.strictEqual(plannersEl.textContent, "—");

});

test("renderPopularGames renders a catalog card per game on success", () => {

    const container = { innerHTML: "" };

    renderPopularGames([
        { slug: "hades", title: "Hades", image: "https://example.com/hades.jpg", owned: true, hasPlanner: true },
        { slug: "portal-2", title: "Portal 2", image: "https://example.com/portal-2.jpg", owned: true, hasPlanner: true }
    ], container);

    assert.match(container.innerHTML, /Hades/);
    assert.match(container.innerHTML, /Portal 2/);
    assert.match(container.innerHTML, /data-slug="hades"/);
    assert.match(container.innerHTML, /data-slug="portal-2"/);

});

test("renderPopularGames shows the honest unavailable message for an empty list - not a fabricated grid or silence", () => {

    const container = { innerHTML: "existing content" };

    renderPopularGames([], container);

    assert.match(container.innerHTML, new RegExp(POPULAR_GAMES_UNAVAILABLE_MESSAGE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.doesNotMatch(container.innerHTML, /existing content/, "the previous (e.g. loading) content must be fully replaced, not left alongside the message");

});

test("renderPopularGames treats a missing/null games value the same as empty, rather than throwing", () => {

    const container = { innerHTML: "" };

    assert.doesNotThrow(() => renderPopularGames(null, container));
    assert.match(container.innerHTML, /state-message/);

});
