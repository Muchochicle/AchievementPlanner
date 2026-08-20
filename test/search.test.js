import { test } from "node:test";
import assert from "node:assert";

// createSearch() wires a single "input" listener onto a DOM element and
// renders results into another - this minimal stub captures just that
// listener and a settable innerHTML string, enough to drive the actual
// rendering logic (the part with a real bug to catch below) without a
// full DOM library, matching this project's existing "smallest shim that
// does the job" convention (see test/profileHeader.test.js). The later
// `document.querySelectorAll(".search-item")` call (which attaches
// click/keydown handlers to the rendered items) is stubbed to return
// nothing - irrelevant to what's being tested here, and it only runs
// after the rendering this test inspects has already completed.
function buildDom() {

    let inputHandler = null;

    const searchInput = {
        addEventListener(type, handler) {
            if (type === "input") inputHandler = handler;
        }
    };

    const results = {
        innerHTML: "",
        style: { display: "" }
    };

    globalThis.document = {

        querySelector(selector) {
            if (selector === ".hero input") return searchInput;
            if (selector === ".search-results") return results;
            return null;
        },

        querySelectorAll() {
            return [];
        }

    };

    return {
        results,
        fireInput(value) {
            inputHandler({ target: { value } });
        }
    };
}

const { createSearch } = await import("../src/components/search/search.js");

test("createSearch renders difficulty and time for a fully-specified planner game", () => {

    const dom = buildDom();

    createSearch([{
        title: "Hades",
        slug: "hades",
        image: "https://example.com/hades.jpg",
        hasPlanner: true,
        difficulty: 7,
        completionTime: { min: 80, max: 120 }
    }]);

    dom.fireInput("hades");

    assert.match(dom.results.innerHTML, /⭐ 7\/10/);
    assert.match(dom.results.innerHTML, /⏱ 80-120 h/);

});

test("createSearch does not throw and omits the time meta for a planner game missing completionTime", () => {

    // Regression test: gameMapper.js allows completionTime to be null even
    // when hasPlanner is true (`planner?.completionTime ?? null`) -
    // catalog-card.js already guards against this; search.js's meta-line
    // renderer used to assume completionTime.min/.max always existed
    // whenever hasPlanner was true, which would throw
    // "Cannot read properties of null (reading 'min')" for a catalog
    // entry like this one.
    const dom = buildDom();

    createSearch([{
        title: "No Time Data",
        slug: "no-time-data",
        image: "https://example.com/no-time-data.jpg",
        hasPlanner: true,
        difficulty: 3,
        completionTime: null
    }]);

    assert.doesNotThrow(() => dom.fireInput("no time"));

    assert.match(dom.results.innerHTML, /⭐ 3\/10/);
    assert.doesNotMatch(dom.results.innerHTML, /null/);
    assert.doesNotMatch(dom.results.innerHTML, /undefined/);

});

test("createSearch does not throw and omits both meta parts for a planner game missing difficulty and completionTime", () => {

    const dom = buildDom();

    createSearch([{
        title: "No Meta Data",
        slug: "no-meta-data",
        image: "https://example.com/no-meta-data.jpg",
        hasPlanner: true,
        difficulty: null,
        completionTime: null
    }]);

    assert.doesNotThrow(() => dom.fireInput("no meta"));
    assert.doesNotMatch(dom.results.innerHTML, /null/);
    assert.doesNotMatch(dom.results.innerHTML, /undefined/);

});

test("createSearch shows 'Planner coming soon' for a game with no planner at all", () => {

    const dom = buildDom();

    createSearch([{
        title: "Unplanned Game",
        slug: "unplanned-game",
        image: "https://example.com/unplanned-game.jpg",
        hasPlanner: false
    }]);

    dom.fireInput("unplanned");

    assert.match(dom.results.innerHTML, /Planner coming soon/);

});

test("createSearch matches case-insensitively by substring and limits to 5 results", () => {

    const dom = buildDom();

    const games = Array.from({ length: 8 }, (_, i) => ({
        title: `Match Game ${i}`,
        slug: `match-game-${i}`,
        image: "https://example.com/img.jpg",
        hasPlanner: false
    }));

    createSearch(games);
    dom.fireInput("MATCH");

    const matches = dom.results.innerHTML.match(/data-slug="match-game-\d"/g) ?? [];
    assert.strictEqual(matches.length, 5, "results should be capped at 5 even though 8 games match");

});

test("createSearch hides results and clears the container for an empty query", () => {

    const dom = buildDom();

    createSearch([{ title: "Hades", slug: "hades", image: "https://example.com/hades.jpg", hasPlanner: false }]);

    dom.fireInput("hades");
    assert.notStrictEqual(dom.results.innerHTML, "");

    dom.fireInput("   ");
    assert.strictEqual(dom.results.innerHTML, "");
    assert.strictEqual(dom.results.style.display, "none");

});

test("createSearch escapes an HTML-injecting game title", () => {

    const dom = buildDom();

    createSearch([{
        title: `<script>alert(1)</script>`,
        slug: "xss-test",
        hasPlanner: false
    }]);

    dom.fireInput("script");

    assert.doesNotMatch(dom.results.innerHTML, /<script>alert\(1\)<\/script>/);
    assert.match(dom.results.innerHTML, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});
