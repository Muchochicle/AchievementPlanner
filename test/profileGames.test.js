import { test } from "node:test";
import assert from "node:assert";

import { createProfileGames } from "../src/components/profile-games/profile-games.js";

// Phase 69: createProfileGames() had no direct test at all before this
// phase, despite real, non-trivial branch logic (slug-based dedup, three
// distinct empty states, an optional headerExtra link) - closing that gap.

function game(slug, overrides = {}) {

    return {
        slug,
        title: `Game ${slug}`,
        image: "https://example.com/cover.jpg",
        owned: true,
        hasPlanner: false,
        ...overrides
    };

}

test("createProfileGames shows the top-level empty state when both groups are empty", () => {

    const html = createProfileGames({ completed: [], recentlyPlayed: [] });

    assert.match(html, /No game progress yet\. Start playing to see your games here\./);
    assert.doesNotMatch(html, /profile-games-group/);

});

test("createProfileGames defaults to the top-level empty state when called with no argument at all", () => {

    const html = createProfileGames();

    assert.match(html, /No game progress yet\./);

});

test("createProfileGames shows each group's own empty message when only one group has games", () => {

    const html = createProfileGames({
        completed: [game("a")],
        recentlyPlayed: []
    });

    assert.match(html, /No recent play activity found\./);
    assert.doesNotMatch(html, /No fully completed games yet\./, "Completed has a real game, so its own empty message must not show");
    assert.doesNotMatch(html, /No game progress yet\./, "the top-level empty state must not show once either group has a game");

});

// catalog-card.js emits data-slug twice per card (once on the <article>,
// once on the inner "View Planner" <button>) - counting raw data-slug
// matches would overcount by 2x. Matching the whole opening <article> tag
// instead avoids that: it's the one element created exactly once per
// rendered card.
function articleCount(html, slug) {

    return (html.match(new RegExp(`<article\\s+class="catalog-card[^"]*"\\s+data-slug="${slug}"`, "g")) ?? []).length;

}

test("createProfileGames deduplicates the Completed group by slug", () => {

    // reduceProfileStats' completedGameSlugs is built straight from owned
    // games' slugs, which could in principle collide (two different Steam
    // appids deriving the same slug) - without the dedup, the same game
    // would render twice.
    const html = createProfileGames({
        completed: [game("dup"), game("dup"), game("unique")],
        recentlyPlayed: []
    });

    assert.strictEqual(articleCount(html, "dup"), 1, "a duplicate slug in Completed must only render once");
    assert.strictEqual(articleCount(html, "unique"), 1);

    // The count badge must reflect the deduplicated total, not the raw
    // input length.
    assert.match(html, /<span class="profile-games-count">2<\/span>/);

});

test("createProfileGames does NOT deduplicate a game that appears in both Completed and Recently Played", () => {

    // A fully completed game the player keeps returning to is legitimately
    // both 100% complete and recently played - unlike the old mutually-
    // exclusive Completed/In-Progress split, these two groups are allowed
    // to overlap.
    const html = createProfileGames({
        completed: [game("both")],
        recentlyPlayed: [game("both")]
    });

    assert.strictEqual(articleCount(html, "both"), 2, "the same game must render once per group when it belongs to both");

});

test("createProfileGames renders the 'View all' link on Recently Played but never on Completed", () => {

    const html = createProfileGames({
        completed: [game("a")],
        recentlyPlayed: [game("b")]
    });

    const viewAllLinks = html.match(/profile-games-view-all/g) ?? [];
    assert.strictEqual(viewAllLinks.length, 1, "expected exactly one View all link, attached to Recently Played only");

});
