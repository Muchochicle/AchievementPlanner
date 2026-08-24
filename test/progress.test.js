import { test } from "node:test";
import assert from "node:assert";

// Phase 52 / Finding 17 - before this phase, the "Hours Played" header stat
// (#hours-played, see game-header.js) was only ever set once from the
// initial page-load fetch, and updateProgress() - the function game.js's
// refresh() calls on every poll tick to re-confirm the other three header
// stats (#progress-fill/#progress-counter/#progress-text) - never touched
// it. These tests prove updateProgress() now re-confirms #hours-played from
// the same `game` object on every call, using this project's existing
// "smallest shim that does the job" document stub convention (see
// test/app.test.js, test/layout.test.js) rather than a full DOM library.

function makeProgressBar() {

    return {
        style: { width: "" },
        attrs: {},
        setAttribute(name, value) { this.attrs[name] = value; }
    };

}

function makeElements() {

    const elements = {
        "progress-fill": { style: { width: "" } },
        "progress-counter": { textContent: "" },
        "progress-text": { textContent: "" },
        "progress-bar": makeProgressBar(),
        "hours-played": { textContent: "" }
    };

    globalThis.document = {
        getElementById: id => elements[id] ?? null
    };

    return elements;

}

function gameWith({ playtime, achievements = [], playerDataAvailable = true }) {

    return {

        playtime,

        mergedAchievements: {

            playerDataAvailable,

            achievements

        }

    };

}

const { updateProgress } = await import("../src/utils/planner/progress.js");

test("updateProgress sets #hours-played from game.playtime, alongside the existing progress stats", () => {

    const elements = makeElements();

    updateProgress(gameWith({
        playtime: 42,
        achievements: [
            { ap: { id: "a" }, steamUnlock: { achieved: true } },
            { ap: { id: "b" }, steamUnlock: { achieved: false } }
        ]
    }));

    assert.strictEqual(elements["hours-played"].textContent, "42 h");
    assert.strictEqual(elements["progress-counter"].textContent, "1 / 2");
    assert.strictEqual(elements["progress-text"].textContent, "50% completed");
    assert.strictEqual(elements["progress-fill"].style.width, "50%");

});

test("updateProgress re-confirms #hours-played on a later call with a fresh (polled) game object - proving it does not go stale after the first update", () => {

    const elements = makeElements();

    updateProgress(gameWith({ playtime: 10, achievements: [] }));

    assert.strictEqual(elements["hours-played"].textContent, "10 h");

    // Simulates a poll tick that observed real new Steam playtime (see
    // game.js's poller callback: `game = freshGame; ...; refresh();`) -
    // updateProgress must be called again with the new object and update
    // the same element, exactly like #progress-counter/#progress-text
    // already do.
    updateProgress(gameWith({ playtime: 11, achievements: [] }));

    assert.strictEqual(elements["hours-played"].textContent, "11 h");

});

test("updateProgress treats a missing playtime as 0 h, matching game-header.js's own initial-render fallback", () => {

    const elements = makeElements();

    updateProgress(gameWith({ playtime: undefined, achievements: [] }));

    assert.strictEqual(elements["hours-played"].textContent, "0 h");

});
