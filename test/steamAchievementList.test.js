import { test } from "node:test";
import assert from "node:assert";

import {
    createSteamAchievementList,
    createSteamAchievementCards
} from "../src/components/steam-achievement-list/steam-achievement-list.js";

// Minimal local-only entries (no `.steam` field) - enough for
// createSteamAchievementCard's own already-tested fallback branch to
// render without crashing, so this file's assertions can stay focused on
// createSteamAchievementList's own status-line branching, not the card's
// rendering (see test/steamAchievementCard.test.js for that).
function makeEntries(count, completedCount = 0) {

    return Array.from({ length: count }, (_, index) => ({

        ap: {
            id: index + 1,
            name: `Achievement ${index + 1}`,
            description: "desc"
        },

        steamUnlock: {
            achieved: index < completedCount
        }

    }));

}

test("createSteamAchievementList shows the empty state when there are no merged achievements at all", () => {

    const html = createSteamAchievementList(
        { mergedAchievements: { achievements: [] } },
        { logged: false }
    );

    assert.match(html, /Achievement list coming soon\.\.\./);
    assert.doesNotMatch(html, /steam-achievement-cards/);
    assert.doesNotMatch(html, /achievement-filters/);

});

test("createSteamAchievementList shows the empty state when mergedAchievements is missing entirely, without crashing", () => {

    assert.doesNotThrow(() => createSteamAchievementList({}, { logged: true }));

    const html = createSteamAchievementList({}, { logged: true });

    assert.match(html, /Achievement list coming soon\.\.\./);

});

test("createSteamAchievementList shows the 'no Steam achievements' message when the schema confirms zero, regardless of login", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(3),
            steamDataAvailable: false,
            playerDataAvailable: false
        }
    };

    const html = createSteamAchievementList(game, { logged: true });

    assert.match(html, /3\s*achievements tracked for this game\./);
    assert.doesNotMatch(html, /Unlocked:/);
    assert.doesNotMatch(html, /Log in with Steam/);

});

test("createSteamAchievementList shows the real unlocked/total count when player data is available", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(4, 3),
            steamDataAvailable: true,
            playerDataAvailable: true
        }
    };

    const html = createSteamAchievementList(game, { logged: true });

    assert.match(html, /Unlocked:/);
    assert.match(html, /<strong>3<\/strong>/);
    assert.match(html, /<strong>4<\/strong>/);

});

test("createSteamAchievementList tells a logged-in visitor their unlock status is unavailable when player data failed", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(5),
            steamDataAvailable: true,
            playerDataAvailable: false
        }
    };

    const html = createSteamAchievementList(game, { logged: true });

    assert.match(html, /5\s*achievements tracked by Steam\./);
    assert.match(html, /Personal unlock status is unavailable right now\./);
    assert.doesNotMatch(html, /Log in with Steam/);

});

test("createSteamAchievementList invites a logged-out visitor to log in when player data is unavailable because they're not logged in", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(2),
            steamDataAvailable: true,
            playerDataAvailable: false
        }
    };

    const html = createSteamAchievementList(game, { logged: false });

    assert.match(html, /2\s*achievements tracked by Steam\./);
    assert.match(html, /Log in with Steam to see your unlock status\./);

});

test("createSteamAchievementList invites a logged-out visitor to log in even with no session object at all", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(1),
            steamDataAvailable: true,
            playerDataAvailable: false
        }
    };

    const html = createSteamAchievementList(game, undefined);

    assert.match(html, /Log in with Steam to see your unlock status\./);

});

test("createSteamAchievementList renders the achievement-filters and one card per entry when the list is non-empty", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(3, 1),
            steamDataAvailable: true,
            playerDataAvailable: true
        }
    };

    const html = createSteamAchievementList(game, { logged: true });

    assert.match(html, /achievement-filters/);
    assert.match(html, /id="steam-achievement-cards"/);
    assert.strictEqual((html.match(/<article class="steam-achievement-card/g) ?? []).length, 3);

});

test("createSteamAchievementCards returns an empty string when there are no merged achievements", () => {

    assert.strictEqual(createSteamAchievementCards({ mergedAchievements: { achievements: [] } }), "");
    assert.strictEqual(createSteamAchievementCards({}), "");

});

test("createSteamAchievementCards renders exactly one card per merged achievement entry", () => {

    const game = {
        mergedAchievements: {
            achievements: makeEntries(5, 2),
            steamDataAvailable: true,
            playerDataAvailable: true
        }
    };

    const html = createSteamAchievementCards(game);

    assert.strictEqual((html.match(/<article class="steam-achievement-card/g) ?? []).length, 5);

});
