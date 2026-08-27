import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/limbo.js";

test("the LIMBO guide identifies itself correctly as LIMBO's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "limbo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "limbo");

});

test("the LIMBO guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The 10 Hidden Eggs",
            "Finishing the Story & the Low-Death Run",
            "DING! - The Secret Level",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 13-achievement, 10-eggs fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);
    assert.match(overview, /10 (of the 13|hidden eggs|eggs)/);

});

test("every one of the 13 official LIMBO achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (backend/catalog/games/limbo.json).
    const officialAchievementNames = [
        "Wrong Way", "Altitude is Attitude", "It's Stuck", "Urban Exploration", "Alone in the Dark",
        "Climbing the Cog", "Backtracking", "Guided by Sparks", "Under Ground", "Going Up",
        "Where Credit is Due", "No Point in Dying", "DING!"
    ];

    assert.strictEqual(officialAchievementNames.length, 13, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
