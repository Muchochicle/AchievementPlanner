import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/oxenfree.js";

test("the Oxenfree guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "oxenfree-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "oxenfree");

});

test("the Oxenfree guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Relationship Choices",
            "Letters & Frequencies",
            "Small One-Off Jokes",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Oxenfree achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/oxenfree.json).
    const officialAchievementNames = [
        "The Strong, Silent Type", "\"This House is Clear\"", "Thicker than Water", "New Beginnings", "Adler Letters, Pt. 1",
        "Adler Letters, Pt. 2", "Adler Letters, Pt. 3", "Ghost Stories", "I'm the Firestarter", "Renjamin Spanklin",
        "It's A Me", "Matchmaker", "You'd just end up hating each other."
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
