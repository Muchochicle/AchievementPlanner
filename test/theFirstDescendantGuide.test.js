import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-first-descendant.js";

test("the The First Descendant guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-first-descendant-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-first-descendant");

});

test("the The First Descendant guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Void Intercept",
            "Modules & Weapons",
            "Descendants, Research & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official The First Descendant achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Ready to Move On?", "First Sweep Operation", "Hope Within the Dust", "Knock, Knock! Who is it? ", "Pre-emptive Strike for the Future",
        "I Can See the Future of the Colossi", "Power! O, Infinite Power!", "Is This How You Insert it?", "This Is Great, Sevenfold", "And Combining, to Boot",
        "Execute Order 77", "Slot Maketh Module", "Place for Something Special", "Modules Maketh Descendant", "Ready, Extract, Complete",
        "Growing Possibility", "Out of Weapons", "This Reaction's a First", "The Sensible Life of Research", "No Hope for the Vulgus",
        "Descendants, Assemble", "What Was Always Expected", "Special Operation Task Squad", "Good Things Happen Twice",
    ];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
