import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/techtonica.js";

test("the Techtonica guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "techtonica-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "techtonica");

});

test("the Techtonica guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Assembly & Production Milestones",
            "Exploration & Discovery",
            "Story & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Techtonica achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Groundbreakers, Assemble!", "Many Hands", "Getting the Point", "Dreaming of Electric Sheep", "Overclocked",
        "Cool S", "Circuit Breaker", "Belter Loader", "Monumental", "Twist of Freight",
        "The Butterfly Effect", "Chasing Waterfalls", "Mush Room", "Thresher Refresher", "Black Hole Gun, Wontcha Come",
        "Cold Cut", "Might as Well...", "Square Root", "STEM Program", "Concrete Jungle ",
        "Blast Radius", "Arrhythmia", "Greater Goods", "Peak Performance",
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
