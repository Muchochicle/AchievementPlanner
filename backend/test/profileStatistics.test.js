import { test } from "node:test";
import assert from "node:assert";

import { saveProgress } from "../../src/utils/planner/storage.js";
import { getUnlockedAchievements } from "../../src/utils/player/statistics/helpers/achievements.js";
import {
    getPlayedGames,
    getInProgressGameSlugs
} from "../../src/utils/player/statistics/helpers/games.js";
import {
    getCompletedGames,
    getCompletedGameSlugs
} from "../../src/utils/player/statistics/helpers/completedGames.js";

// Node's built-in localStorage is only available behind an experimental
// flag this project doesn't enable, so tests get a minimal same-shape
// mock instead. Storage keys are set as the mock's own enumerable
// properties (matching real Storage semantics) so Object.keys(localStorage)
// - used by plannerProgress.js - behaves the same as it would in a browser.
function freshLocalStorage() {

    const mock = Object.create({

        getItem(key) {

            return Object.prototype.hasOwnProperty.call(this, key)
                ? this[key]
                : null;

        },

        setItem(key, value) {

            this[key] = String(value);

        },

        removeItem(key) {

            delete this[key];

        },

        clear() {

            for (const key of Object.keys(this)) {

                delete this[key];

            }

        }

    });

    globalThis.localStorage = mock;

    return mock;

}

// A single game.mergedAchievements entry. apiname is the Steam identity
// (present for both matched and Steam-only achievements); apId simulates
// a curated planner id (only present for entries the local catalog knows
// about) so tests can build the same "matched vs. Steam-only" shapes
// produced by backend/utils/achievementMerger.js.
function mergedEntry({ apiname = null, apId = null, achieved = false }) {

    return {

        apiname,

        ap: apId ? { id: apId } : null,

        steamUnlock: { achieved, unlocktime: null }

    };

}

function game(slug, { playerDataAvailable = true, entries = [] } = {}) {

    return {

        slug,

        mergedAchievements: {

            playerDataAvailable,

            achievements: entries

        }

    };

}

test("curated game with Steam-only achievements: saveProgress persists the full merged set, not just the curated subset", () => {

    freshLocalStorage();

    const g = game("curated-game", {

        entries: [
            mergedEntry({ apiname: "CURATED_1", apId: "ap-1", achieved: true }),
            mergedEntry({ apiname: "STEAM_ONLY_1", achieved: true }),
            mergedEntry({ apiname: "STEAM_ONLY_2", achieved: false })
        ]

    });

    saveProgress(g, g.slug);

    const stored = JSON.parse(localStorage.getItem("planner-curated-game"));

    assert.deepStrictEqual(stored, {

        CURATED_1: true,
        STEAM_ONLY_1: true,
        STEAM_ONLY_2: false

    });

    assert.strictEqual(getUnlockedAchievements(), 2);
    assert.strictEqual(getPlayedGames(), 1);
    assert.strictEqual(getCompletedGames(), 0);

});

test("non-curated game with Steam achievements: saveProgress persists completion without any curated planner entry", () => {

    freshLocalStorage();

    const g = game("non-curated-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: true }),
            mergedEntry({ apiname: "B", achieved: true }),
            mergedEntry({ apiname: "C", achieved: false })
        ]

    });

    saveProgress(g, g.slug);

    assert.strictEqual(getUnlockedAchievements(), 2);
    assert.strictEqual(getPlayedGames(), 1);
    assert.strictEqual(getCompletedGames(), 0);

});

test("a game with zero unlocked achievements is not counted as played or completed", () => {

    freshLocalStorage();

    const g = game("locked-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: false }),
            mergedEntry({ apiname: "B", achieved: false })
        ]

    });

    saveProgress(g, g.slug);

    assert.strictEqual(getUnlockedAchievements(), 0);
    assert.strictEqual(getPlayedGames(), 0);
    assert.strictEqual(getCompletedGames(), 0);

});

test("a partially completed game counts toward Games but not 100%", () => {

    freshLocalStorage();

    const g = game("partial-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: true }),
            mergedEntry({ apiname: "B", achieved: false })
        ]

    });

    saveProgress(g, g.slug);

    assert.strictEqual(getPlayedGames(), 1);
    assert.strictEqual(getCompletedGames(), 0);
    assert.deepStrictEqual(getInProgressGameSlugs(), ["partial-game"]);

});

test("a fully completed game counts toward both Games and 100%", () => {

    freshLocalStorage();

    const g = game("complete-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: true }),
            mergedEntry({ apiname: "B", achieved: true })
        ]

    });

    saveProgress(g, g.slug);

    assert.strictEqual(getPlayedGames(), 1);
    assert.strictEqual(getCompletedGames(), 1);
    assert.deepStrictEqual(getCompletedGameSlugs(), ["complete-game"]);

});

test("a game with zero achievements available never counts as 100% (total-achievements > 0 guard)", () => {

    freshLocalStorage();

    const g = game("no-achievements-game", { entries: [] });

    saveProgress(g, g.slug);

    assert.strictEqual(getPlayedGames(), 0);
    assert.strictEqual(getCompletedGames(), 0);

});

test("Profile opened before visiting any Game page reports zero stats rather than stale/incorrect data", () => {

    freshLocalStorage();

    // No saveProgress call at all - simulates a fresh session where no
    // game.html page has run yet, i.e. no planner-{slug} key exists.
    assert.strictEqual(getUnlockedAchievements(), 0);
    assert.strictEqual(getPlayedGames(), 0);
    assert.strictEqual(getCompletedGames(), 0);

});

test("aggregates correctly across multiple games, the same way the Profile page sums them", () => {

    freshLocalStorage();

    saveProgress(
        game("game-a", {
            entries: [
                mergedEntry({ apiname: "A1", achieved: true }),
                mergedEntry({ apiname: "A2", achieved: true })
            ]
        }),
        "game-a"
    );

    saveProgress(
        game("game-b", {
            entries: [
                mergedEntry({ apiname: "B1", achieved: true }),
                mergedEntry({ apiname: "B2", achieved: false })
            ]
        }),
        "game-b"
    );

    assert.strictEqual(getUnlockedAchievements(), 3);
    assert.strictEqual(getPlayedGames(), 2);
    assert.strictEqual(getCompletedGames(), 1);

});

test("an entry Steam's schema doesn't recognize (no apiname, unmatched) still gets a unique, non-colliding key", () => {

    freshLocalStorage();

    const g = game("unmatched-game", {

        entries: [
            mergedEntry({ apiname: null, apId: "ap-1", achieved: false }),
            mergedEntry({ apiname: null, apId: "ap-2", achieved: false }),
            mergedEntry({ apiname: "REAL", achieved: true })
        ]

    });

    saveProgress(g, g.slug);

    const stored = JSON.parse(localStorage.getItem("planner-unmatched-game"));

    assert.strictEqual(Object.keys(stored).length, 3);
    assert.strictEqual(getUnlockedAchievements(), 1);

});
