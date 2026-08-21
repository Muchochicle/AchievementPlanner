import { test } from "node:test";
import assert from "node:assert";

import { createGameGuideNotice } from "../src/components/game-guide-notice/game-guide-notice.js";
import { GAME_GUIDES } from "../src/data/guides/index.js";

test("createGameGuideNotice renders nothing when the game has no guide planned at all", () => {

    const html = createGameGuideNotice({ hasGuide: false, slug: "debug-game", name: "Debug Game" });

    assert.strictEqual(html, "");

});

test("createGameGuideNotice renders nothing for a game object with hasGuide missing entirely", () => {

    const html = createGameGuideNotice({ slug: "debug-game", name: "Debug Game" });

    assert.strictEqual(html, "");

});

test("createGameGuideNotice shows an honest 'coming soon' notice when a guide is planned but no real content exists yet", () => {

    // Reflects real production state today: Hollow Knight and Portal 2
    // both declare hasGuide:true (see src/data/games/hollow-knight.json,
    // portal-2.json) but have no entry in GAME_GUIDES yet (see
    // src/data/guides/index.js) - Phase 37 wrote Hades' real guide only,
    // per the approved scope. This is exactly what both of these games
    // currently render, and is the fix for the hasGuide inconsistency
    // flagged in PHASE_36_AUDIT.md.
    const html = createGameGuideNotice({ hasGuide: true, slug: "hollow-knight", name: "Hollow Knight" });

    assert.match(html, /game-guide-notice--planned/);
    assert.match(html, /hasn't been published yet/);
    assert.doesNotMatch(html, /<a /, "must not render a link when there's nothing real to link to");

});

test("createGameGuideNotice links to Hades' real, Phase 37 guide", () => {

    // Unlike the fixture-based test below, this exercises the real
    // production GAME_GUIDES entry (src/data/guides/games/hades.js) - the
    // one game this phase actually wrote content for.
    const html = createGameGuideNotice({ hasGuide: true, slug: "hades", name: "Hades" });

    assert.match(html, /game-guide-notice--available/);
    assert.match(html, /href="guide\.html\?slug=hades-achievement-guide"/);
    assert.doesNotMatch(html, /hasn't been published/);

});

test("createGameGuideNotice links to a real guide once one exists for that game's slug (isolated fixture)", () => {

    // GAME_GUIDES now holds Hades' real Phase 37 guide (see the dedicated
    // test above) - this seeds one additional synthetic, clearly-fake
    // fixture (never a real Hollow Knight/Portal 2 walkthrough) purely to
    // exercise the "real guide available" branch generically, independent
    // of whatever real content exists. Removed by slug afterward (not a
    // blanket `.length = 0`) so it can't wipe out the real Hades entry or
    // leak into any other test.
    const fixture = {
        slug: "test-fixture-guide",
        category: "game",
        gameSlug: "test-fixture-game",
        icon: "🧪",
        title: "Test Fixture Guide",
        summary: "Not real content - test-only.",
        sections: [{ heading: "N/A", body: ["N/A"] }]
    };

    GAME_GUIDES.push(fixture);

    try {

        const html = createGameGuideNotice({ hasGuide: true, slug: "test-fixture-game", name: "Test Fixture Game" });

        assert.match(html, /game-guide-notice--available/);
        assert.match(html, /href="guide\.html\?slug=test-fixture-guide"/);
        assert.doesNotMatch(html, /hasn't been published/);

    } finally {

        const index = GAME_GUIDES.indexOf(fixture);

        if (index !== -1) {

            GAME_GUIDES.splice(index, 1);

        }

    }

});

test("createGameGuideNotice escapes an HTML-injecting game title in the coming-soon message", () => {

    const html = createGameGuideNotice({ hasGuide: true, slug: "x", name: `<script>alert(1)</script>` });

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("createGameGuideNotice falls back to game.title when game.name is missing", () => {

    const html = createGameGuideNotice({ hasGuide: true, slug: "hades", title: "Hades" });

    assert.match(html, /Hades/);

});
