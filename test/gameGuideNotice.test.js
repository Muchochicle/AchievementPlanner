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

test("createGameGuideNotice shows an honest 'coming soon' notice for a game with a planned guide but no real content (debug-game, if it ever declared hasGuide)", () => {

    // Phase 73 completed real guides for every actual catalog game (see
    // src/data/guides/index.js) - the "planned but not written yet" branch
    // is no longer reachable through any real game, so this is exercised
    // via a synthetic fixture slug that deliberately has no GAME_GUIDES
    // entry, to keep the branch itself covered.
    const html = createGameGuideNotice({ hasGuide: true, slug: "no-guide-yet-fixture", name: "Some Game" });

    assert.match(html, /game-guide-notice--planned/);
    assert.match(html, /hasn't been published yet/);
    assert.doesNotMatch(html, /<a /, "must not render a link when there's nothing real to link to");

});

test("createGameGuideNotice links to each real game's real guide", () => {

    // Exercises every real production GAME_GUIDES entry (Phase 73
    // completed the full set - see src/data/guides/index.js).
    const expected = {
        "hades": "hades-achievement-guide",
        "portal-2": "portal-2-achievement-guide",
        "hollow-knight": "hollow-knight-achievement-guide",
        "celeste": "celeste-achievement-guide",
        "inside": "inside-achievement-guide"
    };

    for (const [slug, guideSlug] of Object.entries(expected)) {

        const html = createGameGuideNotice({ hasGuide: true, slug, name: slug });

        assert.match(html, /game-guide-notice--available/);
        assert.match(html, new RegExp(`href="guide\\.html\\?slug=${guideSlug}"`));
        assert.doesNotMatch(html, /hasn't been published/);

    }

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
