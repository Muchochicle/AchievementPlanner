import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/we-were-here-too.js";

test("the We Were Here Too guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "we-were-here-too-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "we-were-here-too");

});

test("the We Were Here Too guide has all 3 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Puzzle Rooms, Endings & Co-op",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official We Were Here Too achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Big Hit", "Payline", "Occultist Culling", "Esoteric Etymology", "Step by Step", "Ascending Acuity", "The Pointy End", "Astriction Constriction", "Layer Illustrator", "The Joy of Puzzling", "Maze Jogger", "The Runner Games", "Parallel Peril", "Gordian Knight", "Too Hot To Handle", "Medium-Rare", "Relation Elevation", "Ups and Downs", "Another way..", "Conundrum Comrades"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
