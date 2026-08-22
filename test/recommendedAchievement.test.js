import { test } from "node:test";
import assert from "node:assert";

import { createRecommendedAchievement } from "../src/components/recommended-achievement/recommended-achievement.js";

function makeAchievement(overrides = {}) {

    return {
        id: 1,
        name: "First Steps",
        description: "Complete the tutorial.",
        difficulty: 2,
        estimatedTime: 10,
        reasons: ["Very easy achievement", "Quick to complete"],
        ...overrides
    };

}

test("createRecommendedAchievement renders the achievement's name, description, and reasons", () => {

    const html = createRecommendedAchievement(makeAchievement());

    assert.match(html, /First Steps/);
    assert.match(html, /Complete the tutorial\./);
    assert.match(html, /Very easy achievement/);
    assert.match(html, /Quick to complete/);
    assert.match(html, /data-id="1"/);

});

test("createRecommendedAchievement escapes an HTML-injecting achievement name and description", () => {

    // Regression test: this component used to interpolate achievement.name
    // and achievement.description directly, unescaped - inconsistent with
    // steam-achievement-card.js's "local-only fallback" card, which already
    // escapes the exact same curated-achievement name/description fields
    // (ap.name/ap.description) sourced from the same catalog JSON files.
    const html = createRecommendedAchievement(makeAchievement({
        name: `<script>alert(1)</script>`,
        description: `<img src=x onerror="alert(2)">`
    }));

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/);
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);

    assert.doesNotMatch(html, /<img src=x onerror="alert\(2\)">/);
    assert.match(html, /&lt;img src=x onerror=&quot;alert\(2\)&quot;&gt;/);

});

test("createRecommendedAchievement shows the 'no planner data' state for an empty result", () => {

    const html = createRecommendedAchievement({ empty: true });

    assert.match(html, /No Planner Data Yet/);

});

test("createRecommendedAchievement shows the 'all completed' state for a null/no-more-achievements result", () => {

    const html = createRecommendedAchievement(null);

    assert.match(html, /All achievements completed/);

});

test("createRecommendedAchievement shows an honest 'curated list complete' state instead of a false 100% claim when Steam has more achievements", () => {

    // Regression test for the false-completion bug identified in
    // PHASE_42_AUDIT.md - see the matching recommendation.js test for the
    // logic side of this fix.
    const html = createRecommendedAchievement({ curatedComplete: true, steamOnlyCount: 5 });

    assert.doesNotMatch(html, /100% completion/);
    assert.match(html, /completed every curated achievement/);
    assert.match(html, /5 more achievements/);

});

test("createRecommendedAchievement's 'curated list complete' message uses singular 'achievement' for a count of exactly 1", () => {

    const html = createRecommendedAchievement({ curatedComplete: true, steamOnlyCount: 1 });

    assert.match(html, /1 more achievement for this game/);
    assert.doesNotMatch(html, /1 more achievements/);

});
