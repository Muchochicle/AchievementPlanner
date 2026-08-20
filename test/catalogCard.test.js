import { test } from "node:test";
import assert from "node:assert";

import { createCatalogCard } from "../src/components/catalog-card/catalog-card.js";

// Steam game titles/images are publisher-authored content fetched via the
// Steam API (GetOwnedGames' include_appinfo), not curated by this project -
// treated as untrusted external input the same way Steam persona names
// already are (see podium.js), even though the realistic bar to inject a
// malicious payload here (compromising a Steam Store listing) is far
// higher than "anyone can set their own display name."
const XSS_PAYLOAD = `<script>alert(1)</script>`;
const ATTR_BREAKOUT_PAYLOAD = `x" onerror="alert(1)`;

test("createCatalogCard escapes an HTML-injecting game title in both the heading and the aria-label", () => {

    const html = createCatalogCard({
        slug: "evil-game",
        title: XSS_PAYLOAD,
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false
    });

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("createCatalogCard prevents an attribute-breakout payload in the image src from escaping its quotes", () => {

    const html = createCatalogCard({
        slug: "evil-game",
        title: "Normal Title",
        image: ATTR_BREAKOUT_PAYLOAD,
        owned: true,
        hasPlanner: false
    });

    assert.doesNotMatch(html, /onerror="alert\(1\)"/);
    assert.match(html, /src="x&quot; onerror=&quot;alert\(1\)"/);

});

test("createCatalogCard still renders a normal game correctly (escaping doesn't corrupt legitimate content)", () => {

    const html = createCatalogCard({
        slug: "portal-2",
        title: "Portal 2",
        image: "https://example.com/portal2.jpg",
        owned: true,
        hasPlanner: true,
        difficulty: 3,
        completionTime: { min: 20, max: 25 }
    });

    assert.match(html, /<h3>Portal 2<\/h3>/);
    assert.match(html, /data-slug="portal-2"/);

});
