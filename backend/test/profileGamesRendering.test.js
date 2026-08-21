import { test } from "node:test";
import assert from "node:assert";

import { createProfileGames } from "../../src/components/profile-games/profile-games.js";

function game(slug, title = slug) {

    return { slug, title, image: null };

}

// Splits the rendered "Your Games" HTML into its two group blocks so tests
// can assert which section a given game actually rendered under, not just
// whether its slug appears anywhere in the page.
function splitSections(html) {

    const recentIndex = html.indexOf("Recently Played");

    return {

        completedHtml: html.slice(0, recentIndex === -1 ? html.length : recentIndex),
        recentlyPlayedHtml: recentIndex === -1 ? "" : html.slice(recentIndex)

    };

}

function countOccurrences(html, needle) {

    return html.split(needle).length - 1;

}

test("a completed game also appears under Recently Played when it has real play activity - Completed and Recently Played are not mutually exclusive", () => {

    const html = createProfileGames({

        completed: [game("game-a")],
        recentlyPlayed: [game("game-a"), game("game-b")]

    });

    const { completedHtml, recentlyPlayedHtml } = splitSections(html);

    assert.match(completedHtml, /data-slug="game-a"/);
    assert.match(recentlyPlayedHtml, /data-slug="game-a"/, "a 100%-complete game the player keeps returning to is still legitimately 'recently played'");
    assert.match(recentlyPlayedHtml, /data-slug="game-b"/);

});

test("Completed itself is deduplicated by slug (e.g. a rare derived-slug collision) - the same completed game never renders twice", () => {

    const html = createProfileGames({

        completed: [game("dup-game"), game("dup-game")],
        recentlyPlayed: []

    });

    const { completedHtml } = splitSections(html);

    assert.strictEqual(countOccurrences(completedHtml, 'data-slug="dup-game"'), 2, "exactly one card (data-slug appears on both the article and its button)");
    assert.match(completedHtml, /Completed\s*<span class="profile-games-count">1<\/span>/);

});

test("Recently Played renders a 'View all ->' link to the Games page, even when the list is non-empty", () => {

    const html = createProfileGames({

        completed: [],
        recentlyPlayed: [game("game-a")]

    });

    assert.match(html, /<a class="profile-games-view-all" href="games\.html">View all/);

});

test("Recently Played renders the 'View all ->' link in its empty state too", () => {

    const html = createProfileGames({

        completed: [game("done-game")],
        recentlyPlayed: []

    });

    const { recentlyPlayedHtml } = splitSections(html);

    assert.match(recentlyPlayedHtml, /No recent play activity found\./);
    assert.match(recentlyPlayedHtml, /class="profile-games-view-all"/);

});

test("non-overlapping completed/recentlyPlayed lists render independently", () => {

    const html = createProfileGames({

        completed: [game("done-game")],
        recentlyPlayed: [game("wip-game")]

    });

    const { completedHtml, recentlyPlayedHtml } = splitSections(html);

    assert.match(completedHtml, /data-slug="done-game"/);
    assert.match(recentlyPlayedHtml, /data-slug="wip-game"/);

});

test("no games at all still renders the top-level empty state", () => {

    const html = createProfileGames({ completed: [], recentlyPlayed: [] });

    assert.match(html, /No game progress yet\. Start playing to see your games here\./);

});
