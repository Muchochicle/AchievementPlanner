import { test } from "node:test";
import assert from "node:assert";

// createSessionPlanner() reads the current session-duration <select> value
// off the DOM directly (document.getElementById("session-duration")) - a
// minimal stub is enough since every test below controls its own request
// by simply never providing that element (?. already falls back to the
// component's own default of 45).
globalThis.document = {
    getElementById() { return null; }
};

const { createSessionPlanner } = await import("../src/components/session-planner/session-planner.js");

function achievement(overrides = {}) {

    return {
        id: 1,
        name: "First Steps",
        difficulty: 2,
        estimatedTime: 10,
        ...overrides
    };

}

function makeGame(entries) {

    return {
        achievements: entries.map(e => ({ id: e.id, difficulty: 1, estimatedTime: 10 })),
        mergedAchievements: {
            playerDataAvailable: true,
            achievements: entries.map(e => ({
                ap: { id: e.id },
                steamUnlock: { achieved: e.achieved ?? false }
            }))
        }
    };

}

test("createSessionPlanner shows the 'no curated data' state when the game has no achievements at all", () => {

    const html = createSessionPlanner([], { achievements: [] });

    assert.match(html, /Curated planner data isn't available/);

});

test("createSessionPlanner renders each session achievement's name and difficulty", () => {

    const game = makeGame([{ id: 1 }]);
    const session = [achievement({ id: 1, name: "First Steps" })];

    const html = createSessionPlanner(session, game);

    assert.match(html, /First Steps/);
    assert.match(html, /Difficulty 2\/5/);
    assert.match(html, /⏱ 10 min/);

});

test("createSessionPlanner escapes an HTML-injecting achievement name", () => {

    // Regression test: this component used to interpolate achievement.name
    // directly, unescaped - the same curated-achievement-name field that
    // steam-achievement-card.js already escapes, and the same bug this
    // pass already found and fixed in recommended-achievement.js.
    const game = makeGame([{ id: 1 }]);
    const session = [achievement({ id: 1, name: `<script>alert(1)</script>` })];

    const html = createSessionPlanner(session, game);

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

});

test("createSessionPlanner computes progress from how many session entries Steam has confirmed complete", () => {

    const game = makeGame([{ id: 1, achieved: true }, { id: 2, achieved: false }]);
    const session = [achievement({ id: 1 }), achievement({ id: 2 })];

    const html = createSessionPlanner(session, game);

    assert.match(html, /1 \/ 2/);
    assert.match(html, /50%/);

});

test("createSessionPlanner handles an empty session (all planned achievements skipped/completed) without dividing by zero", () => {

    const game = makeGame([{ id: 1 }]);

    let html;
    assert.doesNotThrow(() => { html = createSessionPlanner([], game); });

    assert.match(html, /0%/);
    assert.match(html, /0 achievements planned/);

});
