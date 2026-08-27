import { test } from "node:test";
import assert from "node:assert";

import {
    APP_GUIDES,
    GAME_GUIDES,
    ALL_GUIDES,
    getGuideBySlug,
    getGameGuideForSlug
} from "../src/data/guides/index.js";

test("Phase 37 ships exactly the 9 approved App Guides (5 rewritten + 4 new)", () => {

    assert.strictEqual(APP_GUIDES.length, 9);

    assert.deepStrictEqual(
        APP_GUIDES.map(guide => guide.slug).sort(),
        [
            "achievement-completion-and-tracking",
            "catalog-and-filters",
            "getting-started",
            "player-progress",
            "podiums-and-leaderboards",
            "profile-and-statistics",
            "session-planner-and-recommendations",
            "steam-login-and-your-data",
            "understanding-achievement-availability"
        ]
    );

});

test("every real catalog game has a real, sourced Game Guide", () => {

    // Per the approved scope: every non-debug game in this app's catalog
    // (backend/catalog/games/*.json) has real, sourced content here - see
    // each game's own guides/games/<slug>.js for its sourcing notes. This
    // count should only grow further once a new game is added to the
    // catalog and its guide is actually authored, never bumped to pad the
    // list ahead of that.
    assert.strictEqual(GAME_GUIDES.length, 15);

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.gameSlug).sort(),
        ["a-short-hike", "braid", "celeste", "cuphead", "hades", "hollow-knight", "hyper-light-drifter", "inside", "limbo", "ori-and-the-blind-forest", "portal", "portal-2", "return-of-the-obra-dinn", "stardew-valley", "what-remains-of-edith-finch"]
    );

    assert.deepStrictEqual(
        GAME_GUIDES.map(guide => guide.slug).sort(),
        [
            "a-short-hike-achievement-guide",
            "braid-achievement-guide",
            "celeste-achievement-guide",
            "cuphead-achievement-guide",
            "hades-achievement-guide",
            "hollow-knight-achievement-guide",
            "hyper-light-drifter-achievement-guide",
            "inside-achievement-guide",
            "limbo-achievement-guide",
            "ori-and-the-blind-forest-achievement-guide",
            "portal-2-achievement-guide",
            "portal-achievement-guide",
            "return-of-the-obra-dinn-achievement-guide",
            "stardew-valley-achievement-guide",
            "what-remains-of-edith-finch-achievement-guide"
        ]
    );

});

test("every guide has a unique slug across App and Game guides combined", () => {

    const slugs = ALL_GUIDES.map(guide => guide.slug);

    assert.strictEqual(new Set(slugs).size, slugs.length);

});

test("every guide has a non-empty title, summary, icon, and at least one section", () => {

    for (const guide of ALL_GUIDES) {

        assert.ok(guide.title?.length > 0, `${guide.slug} is missing a title`);
        assert.ok(guide.summary?.length > 0, `${guide.slug} is missing a summary`);
        assert.ok(guide.icon?.length > 0, `${guide.slug} is missing an icon`);
        assert.ok(Array.isArray(guide.sections) && guide.sections.length > 0, `${guide.slug} has no sections`);

    }

});

test("every section has a non-empty heading and at least one non-empty body paragraph", () => {

    for (const guide of ALL_GUIDES) {

        for (const section of guide.sections) {

            assert.ok(section.heading?.length > 0, `${guide.slug} has a section with no heading`);
            assert.ok(Array.isArray(section.body) && section.body.length > 0, `${guide.slug}'s "${section.heading}" section has no body`);

            for (const paragraph of section.body) {

                assert.ok(paragraph?.length > 0, `${guide.slug}'s "${section.heading}" section has an empty paragraph`);

            }

        }

    }

});

test("every guide's relatedSlugs resolves to a real, existing guide (no typos/dangling references)", () => {

    for (const guide of ALL_GUIDES) {

        for (const relatedSlug of guide.relatedSlugs ?? []) {

            const related = getGuideBySlug(relatedSlug);

            assert.ok(related, `${guide.slug} references a related guide "${relatedSlug}" that doesn't exist`);
            assert.notStrictEqual(related.slug, guide.slug, `${guide.slug} lists itself as a related guide`);

        }

    }

});

test("getGuideBySlug finds an existing App Guide by slug", () => {

    const guide = getGuideBySlug("getting-started");

    assert.ok(guide);
    assert.strictEqual(guide.title, "Getting Started");
    assert.strictEqual(guide.category, "app");

});

test("getGuideBySlug returns null for an unknown slug", () => {

    assert.strictEqual(getGuideBySlug("this-guide-does-not-exist"), null);

});

test("getGameGuideForSlug finds each real game's guide", () => {

    const expected = {
        "hades": "hades-achievement-guide",
        "portal-2": "portal-2-achievement-guide",
        "hollow-knight": "hollow-knight-achievement-guide",
        "celeste": "celeste-achievement-guide",
        "inside": "inside-achievement-guide"
    };

    for (const [gameSlug, guideSlug] of Object.entries(expected)) {

        const guide = getGameGuideForSlug(gameSlug);

        assert.ok(guide, `expected a real guide for ${gameSlug}`);
        assert.strictEqual(guide.slug, guideSlug);
        assert.strictEqual(guide.category, "game");

    }

});

test("getGameGuideForSlug returns null for a game that has no guide at all (debug-game)", () => {

    assert.strictEqual(getGameGuideForSlug("debug-game"), null);

});
