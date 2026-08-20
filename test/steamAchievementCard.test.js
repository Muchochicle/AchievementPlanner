import { test } from "node:test";
import assert from "node:assert";

import { createSteamAchievementCard } from "../src/components/steam-achievement-card/steam-achievement-card.js";

function steamEntry(steamOverrides = {}) {

    return {

        steam: {
            displayName: "Test Achievement",
            description: "A normal description.",
            icon: "https://example.com/icon.jpg",
            icongray: "https://example.com/icon-gray.jpg",
            hidden: false,
            globalPercent: 42,
            ...steamOverrides
        }

    };

}

test("createSteamAchievementCard escapes an HTML-injecting achievement name and description", () => {

    const html = createSteamAchievementCard(
        steamEntry({ displayName: `<script>alert(1)</script>`, description: `<img src=x onerror=alert(2)>` }),
        {}
    );

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.doesNotMatch(html, /<img src=x onerror=alert\(2\)>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
    assert.match(html, /&lt;img src=x onerror=alert\(2\)&gt;/);

});

test("createSteamAchievementCard prevents an attribute-breakout payload in the icon src", () => {

    // icongray must be cleared too: the component prefers icongray over
    // icon for a locked (not completed) achievement - see its own
    // `iconUrl = completed || !steam.icongray ? steam.icon : steam.icongray`
    // selection logic.
    const html = createSteamAchievementCard(
        steamEntry({ icon: `x" onerror="alert(1)`, icongray: null }),
        {}
    );

    assert.doesNotMatch(html, /onerror="alert\(1\)"/);
    assert.match(html, /src="x&quot; onerror=&quot;alert\(1\)"/);

});

test("createSteamAchievementCard escapes the local-only fallback card (no Steam schema match)", () => {

    const html = createSteamAchievementCard(
        { ap: { name: `<script>alert(1)</script>`, description: `<script>alert(2)</script>` } },
        {}
    );

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.doesNotMatch(html, /<script>alert\(2\)<\/script>/);

});

test("createSteamAchievementCard still renders a normal achievement correctly", () => {

    const html = createSteamAchievementCard(steamEntry(), {});

    assert.match(html, /Test Achievement/);
    assert.match(html, /A normal description\./);
    assert.match(html, /42% of players/);

});
