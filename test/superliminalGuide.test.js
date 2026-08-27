import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/superliminal.js";

test("the Superliminal guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "superliminal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "superliminal");

});

test("the Superliminal guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Speed",
            "World Interactions",
            "Blueprints, Chess Pieces & the Trophy",
            "Stars Align",
            "Challenge Mode, Commentary & the Workshop",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Superliminal achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/superliminal.json).
    const officialAchievementNames = [
        "Son of Man", "Sugar Crash", "Please Use Other Door", "Fire Safety Achieved", "Fire Alarmist",
        "Environment Saved!", "Please Recycle", "Take Your Trash Elsewhere", "Fires Extinguished", "Feeling Blue",
        "Chess Master", "Soda Connaisseur", "Wake Up", "Superluminal", "Speed Runner",
        "Vaguely Activated Achievement", "Why Are You Like This?", "Polite Recognition", "Expert Fire Alarmist", "Kasparov",
        "Stars Align", "Biggest Fan", "Mindful", "Dr. Pierce's Protege", "Contraband",
        "Dream within a Dream", "Dream Sculptor"
    ];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
