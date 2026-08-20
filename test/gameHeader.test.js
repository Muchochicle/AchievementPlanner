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

});
