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

    const inProgressIndex = html.indexOf("In Progress");

    return {

        completedHtml: html.slice(0, inProgressIndex === -1 ? html.length : inProgressIndex),
        inProgressHtml: inProgressIndex === -1 ? "" : html.slice(inProgressIndex)

    };

}

function countOccurrences(html, needle) {

    return html.split(needle).length - 1;

}

test("a game present in both completed and inProgress renders only under Completed", () => {

    const html = createProfileGames({

        completed: [game("game-a")],
        inProgress: [game("game-a"), game("game-b")]

    });

    const { completedHtml, inProgressHtml } = splitSections(html);

    assert.match(completedHtml, /data-slug="game-a"/);
    assert.doesNotMatch(inProgressHtml, /data-slug="game-a"/);

    assert.match(inProgressHtml, /data-slug="game-b"/);

    // game-a's card (catalog-card.js renders data-slug on both the
    // article and its button, so 2 occurrences = exactly one card) shows
    // up only inside Completed - zero occurrences in In Progress.
    assert.strictEqual(countOccurrences(completedHtml, 'data-slug="game-a"'), 2);
    assert.strictEqual(countOccurrences(inProgressHtml, 'data-slug="game-a"'), 0);

});

test("reproduces the exact regression scenario: stale local partial progress, game completed on Steam without being reopened here", () => {

    // getInProgressGameSlugs() (localStorage-based, unchanged by this fix)
    // still thinks this game is only partially done, because the user
    // never reopened it in AchievementPlanner after finishing it on
    // Steam. The live Steam scan (completedGameSlugs) already knows
    // better. Completed must win.
    const completed = [game("stale-game")];
    const inProgress = [game("stale-game"), game("still-in-progress-game")];

    const html = createProfileGames({ completed, inProgress });

    const { completedHtml, inProgressHtml } = splitSections(html);

    assert.match(completedHtml, /data-slug="stale-game"/);
    assert.doesNotMatch(inProgressHtml, /data-slug="stale-game"/);
    assert.match(inProgressHtml, /data-slug="still-in-progress-game"/);

    // In Progress count reflects the deduped list, not the raw input.
    assert.match(inProgressHtml, /In Progress\s*<span class="profile-games-count">1<\/span>/);

});

test("when every inProgress game is also completed, In Progress renders its empty state instead of stale duplicates", () => {

    const html = createProfileGames({

        completed: [game("only-game")],
        inProgress: [game("only-game")]

    });

    const { inProgressHtml } = splitSections(html);

    assert.doesNotMatch(inProgressHtml, /data-slug="only-game"/);
    assert.match(inProgressHtml, /No games in progress right now\./);

});

test("non-overlapping completed/inProgress lists are unaffected by the dedup", () => {

    const html = createProfileGames({

        completed: [game("done-game")],
        inProgress: [game("wip-game")]

    });

    const { completedHtml, inProgressHtml } = splitSections(html);

    assert.match(completedHtml, /data-slug="done-game"/);
    assert.match(inProgressHtml, /data-slug="wip-game"/);

});

test("no games at all still renders the top-level empty state", () => {

    const html = createProfileGames({ completed: [], inProgress: [] });

    assert.match(html, /No game progress yet\. Start playing to see your games here\./);

});
