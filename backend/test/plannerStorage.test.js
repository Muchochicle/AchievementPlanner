import { test } from "node:test";
import assert from "node:assert";

import { saveProgress } from "../../src/utils/planner/storage.js";

// Node's built-in localStorage is only available behind an experimental
// flag this project doesn't enable, so tests get a minimal same-shape
// mock instead. Storage keys are set as the mock's own enumerable
// properties (matching real Storage semantics).
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

function stored(slug) {

    return JSON.parse(localStorage.getItem(`planner-${slug}`));

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

    assert.deepStrictEqual(stored(g.slug), {

        CURATED_1: true,
        STEAM_ONLY_1: true,
        STEAM_ONLY_2: false

    });

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

    assert.deepStrictEqual(stored(g.slug), {

        A: true,
        B: true,
        C: false

    });

});

test("a game with every achievement still locked still persists a full progress map, every entry false", () => {

    freshLocalStorage();

    const g = game("locked-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: false }),
            mergedEntry({ apiname: "B", achieved: false })
        ]

    });

    saveProgress(g, g.slug);

    assert.deepStrictEqual(stored(g.slug), {

        A: false,
        B: false

    });

});

test("a fully completed game persists every entry as true", () => {

    freshLocalStorage();

    const g = game("complete-game", {

        entries: [
            mergedEntry({ apiname: "A", achieved: true }),
            mergedEntry({ apiname: "B", achieved: true })
        ]

    });

    saveProgress(g, g.slug);

    assert.deepStrictEqual(stored(g.slug), {

        A: true,
        B: true

    });

});

test("a game with zero achievements available persists an empty progress object, not an error", () => {

    freshLocalStorage();

    const g = game("no-achievements-game", { entries: [] });

    saveProgress(g, g.slug);

    assert.deepStrictEqual(stored(g.slug), {});

});

test("saveProgress for one game does not touch another game's stored entry", () => {

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

    assert.deepStrictEqual(stored("game-a"), { A1: true, A2: true });
    assert.deepStrictEqual(stored("game-b"), { B1: true, B2: false });

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

    const result = stored(g.slug);

    assert.strictEqual(Object.keys(result).length, 3);
    assert.strictEqual(result.REAL, true);

});
