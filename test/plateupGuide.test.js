import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/plateup.js";

test("the PlateUp! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "plateup-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "plateup");

});

test("the PlateUp! guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dishes",
            "Kitchen Chaos & Feats",
            "Progression & Challenge Days",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official PlateUp! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Steaks Were Made", "Stirring Things Up", "Piece of the Action", "A New Leaf", "Soggy Bottom",
        "Something Fishy", "Man's Best Friend?", "Least Important Meal", "Burger Prince", "This Is Fine",
        "Fireman", "Flawless Timing", "Health Inspector?", "Oh No", "Charcoal Factory",
        "Safety Last", "Circle Line", "Chef School", "New Chef Plus", "Overtime 5",
        "Overtime 10", "Overtime 15", "Learning By Doing", "Anti-social", "Work Smart",
        "Please Wait",
    ];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
