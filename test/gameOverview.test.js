import { test } from "node:test";
import assert from "node:assert";

import { createGameOverview } from "../src/components/game-overview/game-overview.js";

test("createGameOverview renders all four stat cards for a fully-specified game", () => {

    const html = createGameOverview({
        difficulty: 7,
        completionTime: { min: 80, max: 120 },
        missable: true,
        playthroughs: 2
    });

    assert.match(html, /7\/10/);
    assert.match(html, /80-120 h/);
    assert.match(html, /Yes/);
    assert.match(html, />2</);

});

test("createGameOverview does not throw and omits the Time card when completionTime is missing", () => {

    // Regression test: createGameOverview() used to read
    // game.completionTime.min/.max with no guard, even though
    // catalog-card.js and search.js already treat this exact field as
    // optional (gameMapper.js: `planner?.completionTime ?? null`). A
    // catalog entry missing it threw "Cannot read properties of null
    // (reading 'min')" - and since this component's errors aren't caught
    // locally, that took down the entire game page (game.js's outer
    // try/catch replaces the whole planner with a generic error message).
    const game = { difficulty: 3, completionTime: null, missable: false, playthroughs: 1 };

    let html;
    assert.doesNotThrow(() => { html = createGameOverview(game); });

    assert.doesNotMatch(html, /⏱ Time/);
    assert.match(html, /3\/10/, "the other stats must still render correctly");

});

test("createGameOverview omits the Time card when completionTime is missing min/max fields", () => {

    const html = createGameOverview({ difficulty: 3, completionTime: {}, missable: false, playthroughs: 1 });

    assert.doesNotMatch(html, /⏱ Time/);

});

test("createGameOverview shows 'No' for a non-missable game and the playthroughs count", () => {

    const html = createGameOverview({ difficulty: 1, completionTime: { min: 1, max: 2 }, missable: false, playthroughs: 3 });

    assert.match(html, /No/);
    assert.match(html, />3</);

});

// Phase 69 regression: playthroughs is optional the same way completionTime
// is (gameMapper.js: `planner?.playthroughs ?? null`), but only
// completionTime had ever been guarded - this rendered the literal text
// "null" instead of omitting the card.
test("createGameOverview does not throw and omits the Playthroughs card when playthroughs is missing", () => {

    const game = { difficulty: 3, completionTime: { min: 1, max: 2 }, missable: false, playthroughs: null };

    let html;
    assert.doesNotThrow(() => { html = createGameOverview(game); });

    assert.doesNotMatch(html, /🔁 Playthroughs/);
    assert.doesNotMatch(html, />null</);
    assert.match(html, /3\/10/, "the other stats must still render correctly");

});
