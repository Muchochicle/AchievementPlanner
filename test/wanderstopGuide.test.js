import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wanderstop.js";

test("the Wanderstop guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wanderstop-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wanderstop");

});

test("the Wanderstop guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Chapters",
            "Later Chapters & Ending",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Wanderstop achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Her Gift", "So Much Time", "Satisfactory", "Unyielding Yes", "Noble and Futile", "At Long Last.", "Rewarded", "Both Pieces", "Your Moment", "Inward", "What is Needed"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
