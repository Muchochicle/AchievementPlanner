import { test } from "node:test";
import assert from "node:assert";

import { createGameHeader } from "../src/components/game-header/game-header.js";

function baseGame(overrides = {}) {

    return {

        name: "Portal 2",
        image: "https://example.com/portal2.jpg",
        genres: ["Puzzle", "Adventure"],
        difficulty: 3,
        achievements: [],

        ...overrides

    };

}

test("createGameHeader escapes an HTML-injecting game name in both the alt attribute and the heading", () => {

    const html = createGameHeader(baseGame({ name: `<img src=x onerror=alert(1)>` }));

    assert.doesNotMatch(html, /<img src=x onerror=alert\(1\)>/);
    assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);

});

test("createGameHeader prevents an attribute-breakout payload in the header image src", () => {

    const html = createGameHeader(baseGame({ image: `x" onerror="alert(1)` }));

    assert.doesNotMatch(html, /onerror="alert\(1\)"/);
    assert.match(html, /src="x&quot; onerror=&quot;alert\(1\)"/);

});

test("createGameHeader escapes malicious genre text", () => {

    const html = createGameHeader(baseGame({ genres: [`<script>alert(1)</script>`, "Adventure"] }));

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("createGameHeader still renders a normal game correctly", () => {

    const html = createGameHeader(baseGame(), 12);

    assert.match(html, /<h1>Portal 2<\/h1>/);
    assert.match(html, /Puzzle • Adventure/);
    assert.match(html, />12 h<\/strong>/);
    assert.match(html, /⭐ Difficulty/);
    assert.match(html, />3\/10<\/strong>/);

});

// Phase 69 regression: gameMapper.js's `difficulty: planner?.difficulty ??
// null` is genuinely null for any Steam-owned game with no curated catalog
// entry - game.js's "no planner, but Steam still reports achievements"
// branch calls createGameHeader directly for exactly this case. Every
// other component rendering this same field (catalog-card.js, search.js)
// already guards it; this closes the one place that rendered the literal
// text "null/10" instead.
test("createGameHeader omits the Difficulty stat entirely (not a literal 'null/10') when difficulty is null", () => {

    const html = createGameHeader(baseGame({ difficulty: null }));

    assert.doesNotMatch(html, /null\/10/);
    assert.doesNotMatch(html, /⭐ Difficulty/);

});
