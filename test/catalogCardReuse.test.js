import { test } from "node:test";
import assert from "node:assert";

import {
    reconcileCatalogCards,
    resetCatalogCardCache,
    renderGames
} from "../src/utils/gamesCatalog.js";

// Regression cover for the Games-page "duplicate image fetching" fix
// (Priority 3): renderGames() used to rebuild the whole grid with
// `innerHTML` on every keystroke / sort flip / filter toggle / "Show more"
// / player-stats merge, discarding and recreating every
// `<img class="catalog-image">` and making the browser re-request the same
// Steam CDN cover art each time. It now reuses one cached element node per
// game slug, only reordering them, so an already-loaded image is never
// fetched again. These tests pin the reuse + ordering + windowing
// behaviour, using this repo's "smallest shim that does the job" DOM stub
// convention (see test/app.test.js, test/podiumsPage.test.js).

// --- reconcileCatalogCards: pure, no DOM needed --------------------------

test("reconcileCatalogCards builds each slug once and reuses the node on later calls", () => {

    const cache = new Map();
    let builds = 0;
    const create = game => ({ slug: game.slug, build: ++builds });
    const g = slug => ({ slug });

    const first = reconcileCatalogCards([g("a"), g("b")], create, cache);

    assert.deepStrictEqual(first.map(n => n.slug), ["a", "b"]);
    assert.strictEqual(builds, 2);

    const second = reconcileCatalogCards([g("b"), g("a"), g("c")], create, cache);

    // Only the genuinely new slug ("c") is built.
    assert.strictEqual(builds, 3);
    // "a" and "b" are the very same node instances, just reordered.
    assert.strictEqual(second[0], first[1], "b node reused in new position");
    assert.strictEqual(second[1], first[0], "a node reused in new position");
    assert.strictEqual(second[2].slug, "c");

});

test("reconcileCatalogCards keeps a node cached even while its slug is filtered out of the window", () => {

    const cache = new Map();
    let builds = 0;
    const create = game => ({ slug: game.slug, build: ++builds });
    const g = slug => ({ slug });

    const first = reconcileCatalogCards([g("a"), g("b")], create, cache);

    // "a" drops out of the result window entirely...
    reconcileCatalogCards([g("b")], create, cache);
    // ...then comes back - still the original node, no rebuild.
    const back = reconcileCatalogCards([g("a"), g("b")], create, cache);

    assert.strictEqual(builds, 2);
    assert.strictEqual(back[0], first[0]);
    assert.strictEqual(back[1], first[1]);

});

test("reconcileCatalogCards preserves the exact order it is given", () => {

    const cache = new Map();
    const create = game => ({ slug: game.slug });
    const order = ["d", "a", "c", "b"].map(slug => ({ slug }));

    const result = reconcileCatalogCards(order, create, cache);

    assert.deepStrictEqual(result.map(n => n.slug), ["d", "a", "c", "b"]);

});

test("resetCatalogCardCache forces the next reconcile against the module cache to rebuild", () => {

    resetCatalogCardCache();

    let builds = 0;
    const create = game => ({ slug: game.slug, build: ++builds });

    reconcileCatalogCards([{ slug: "z" }], create);
    reconcileCatalogCards([{ slug: "z" }], create);
    assert.strictEqual(builds, 1, "second call reuses the cached node");

    resetCatalogCardCache();
    reconcileCatalogCards([{ slug: "z" }], create);
    assert.strictEqual(builds, 2, "reset dropped the cache, so it rebuilt");

});

// --- renderGames: thin DOM stub ----------------------------------------

function installTemplateStub() {

    globalThis.document = {

        createElement(tag) {

            if (tag !== "template") {

                throw new Error(`unexpected document.createElement(${tag})`);

            }

            return {
                _html: "",
                set innerHTML(value) { this._html = value; },
                get innerHTML() { return this._html; },
                get content() {

                    const html = this._html;
                    const slug = (html.match(/data-slug="([^"]*)"/) ?? [])[1] ?? null;

                    return {
                        // A fresh identity per built card, tagged with its
                        // slug so tests can assert which node was reused.
                        firstElementChild: { tagName: "ARTICLE", slug, html }
                    };

                }
            };

        }

    };

}

function makeContainer() {

    return {
        _html: "",
        children: [],
        set innerHTML(value) { this._html = value; this.children = []; },
        get innerHTML() { return this._html; },
        replaceChildren(...kids) { this.children = kids; this._html = ""; }
    };

}

const CATALOG = [
    { slug: "aaa", title: "Aaa", image: "https://cdn.example/aaa.jpg", hasPlanner: false },
    { slug: "bbb", title: "Bbb", image: "https://cdn.example/bbb.jpg", hasPlanner: false },
    { slug: "ccc", title: "Ccc", image: "https://cdn.example/ccc.jpg", hasPlanner: false }
];

test("renderGames paints one node per windowed game and reuses them across a re-sort", () => {

    installTemplateStub();
    resetCatalogCardCache();

    const container = makeContainer();

    renderGames(CATALOG, container, { shown: 3 });
    const firstPass = [...container.children];

    assert.strictEqual(firstPass.length, 3);
    assert.deepStrictEqual(firstPass.map(n => n.slug), ["aaa", "bbb", "ccc"]);

    // A sort flip: same games, reversed order.
    renderGames([CATALOG[2], CATALOG[1], CATALOG[0]], container, { shown: 3 });
    const secondPass = [...container.children];

    assert.strictEqual(secondPass.length, 3);
    assert.deepStrictEqual(secondPass.map(n => n.slug), ["ccc", "bbb", "aaa"]);
    // Crucially: the very same element instances, just reordered - no new
    // <img> nodes, so no re-fetch.
    assert.strictEqual(secondPass[0], firstPass[2]);
    assert.strictEqual(secondPass[1], firstPass[1]);
    assert.strictEqual(secondPass[2], firstPass[0]);

});

test("renderGames honours the `shown` window and reuses nodes when it grows", () => {

    installTemplateStub();
    resetCatalogCardCache();

    const container = makeContainer();

    renderGames(CATALOG, container, { shown: 2 });
    const windowed = [...container.children];

    assert.deepStrictEqual(windowed.map(n => n.slug), ["aaa", "bbb"]);

    // "Show more" widens the window; the first two nodes are the same
    // instances already on screen.
    renderGames(CATALOG, container, { shown: 3 });
    const widened = [...container.children];

    assert.deepStrictEqual(widened.map(n => n.slug), ["aaa", "bbb", "ccc"]);
    assert.strictEqual(widened[0], windowed[0]);
    assert.strictEqual(widened[1], windowed[1]);

});

test("renderGames shows the no-match message for an empty list without touching the cache", () => {

    installTemplateStub();
    resetCatalogCardCache();

    const container = makeContainer();

    renderGames(CATALOG, container, { shown: 3 });
    const built = [...container.children];

    renderGames([], container, { shown: 3 });

    assert.match(container.innerHTML, /No games match your search or filters/);
    assert.strictEqual(container.children.length, 0);

    // Coming back from empty reuses the exact same nodes.
    renderGames(CATALOG, container, { shown: 3 });
    const back = [...container.children];

    assert.strictEqual(back[0], built[0]);
    assert.strictEqual(back[1], built[1]);
    assert.strictEqual(back[2], built[2]);

});
