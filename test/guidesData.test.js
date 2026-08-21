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

test("Phase 37 ships exactly one real Game Guide (Hades) - Hollow Knight/Portal 2 stay 'coming soon'", () => {

    // Per the approved scope: Hades is the first real, sourced Game Guide
    // (see src/data/guides/games/hades.js for its sourcing notes).
    // Hollow Knight and Portal 2 deliberately have no entry here yet -
    // this count should only grow once real, accurate, sourced content is
    // actually authored for another game, never bumped to pad the list.
    assert.strictEqual(GAME_GUIDES.length, 1);
    assert.strictEqual(GAME_GUIDES[0].gameSlug, "hades");
    assert.strictEqual(GAME_GUIDES[0].slug, "hades-achievement-guide");

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

test("getGameGuideForSlug finds Hades' real guide", () => {

    const guide = getGameGuideForSlug("hades");

    assert.ok(guide);
    assert.strictEqual(guide.slug, "hades-achievement-guide");
    assert.strictEqual(guide.category, "game");

});

test("getGameGuideForSlug returns null for the games that still don't have a real guide yet", () => {

    for (const gameSlug of ["hollow-knight", "portal-2", "debug-game"]) {

        assert.strictEqual(getGameGuideForSlug(gameSlug), null);

    }

});
