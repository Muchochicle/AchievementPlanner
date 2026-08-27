import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/what-remains-of-edith-finch.js";

test("the What Remains of Edith Finch guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "what-remains-of-edith-finch-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "what-remains-of-edith-finch");

});

test("the What Remains of Edith Finch guide has all 3 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Details Inside the Stories",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 9-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /9 Steam achievements/);

});

test("every one of the 9 official What Remains of Edith Finch achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/what-remains-of-edith-finch.json).
    const officialAchievementNames = [
        "The End of Everything", "A Closer Look", "All Roads", "Great Owl", "Let Him Finish",
        "Clear the Table", "G-R-E-G-O-R-Y", "Thanks, Johann!", "Loop-de-loop-de-loop"
    ];

    assert.strictEqual(officialAchievementNames.length, 9, "sanity check on this test's own reference list");

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
