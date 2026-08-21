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

// Area 4 (PHASE_33_AUDIT.md): a game without a curated planner must show
// one of the 3 real, Steam-data-backed achievement-availability states
// (see src/utils/planner/achievement/availability.js), not always the same
// generic "Planner coming soon" text.

test("createCatalogCard shows 'No Steam achievements' for an owned, planner-less game Steam confirms has zero achievements", () => {

    const html = createCatalogCard({
        slug: "no-ach-game",
        title: "No Achievements Game",
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false,
        playtime: 12,
        achievementAvailability: "no-achievements"
    });

    assert.match(html, /No Steam achievements/);
    assert.doesNotMatch(html, /Planner coming soon/);
    assert.match(html, /12 h played/);

});

test("createCatalogCard shows 'Steam achievement data unavailable' when the schema fetch itself failed", () => {

    const html = createCatalogCard({
        slug: "unavailable-game",
        title: "Unavailable Game",
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false,
        achievementAvailability: "schema-unavailable"
    });

    assert.match(html, /Steam achievement data unavailable/);

});

test("createCatalogCard shows 'Planner not available yet' when Steam confirms achievements exist but there's no curated planner", () => {

    const html = createCatalogCard({
        slug: "needs-planner-game",
        title: "Needs Planner Game",
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false,
        achievementAvailability: "planner-unavailable"
    });

    assert.match(html, /Planner not available yet/);

});

test("createCatalogCard falls back to 'Planner coming soon' when no achievement-availability state was computed at all", () => {

    const html = createCatalogCard({
        slug: "no-availability-info",
        title: "No Availability Info",
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false
    });

    assert.match(html, /Planner coming soon/);

});

test("createCatalogCard shows hours played only for owned games with a numeric playtime", () => {

    const owned = createCatalogCard({
        slug: "owned-game",
        title: "Owned Game",
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false,
        playtime: 0,
        achievementAvailability: "no-achievements"
    });

    assert.match(owned, /0 h played/);

    const unowned = createCatalogCard({
        slug: "unowned-game",
        title: "Unowned Game",
        image: "https://example.com/cover.jpg",
        owned: false,
        hasPlanner: true
    });

    assert.doesNotMatch(unowned, /h played/);

});
