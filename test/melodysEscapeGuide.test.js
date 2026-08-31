import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/melodys-escape.js";

test("the Melody's Escape guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "melodys-escape-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "melodys-escape");

});

test("the Melody's Escape guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scores & Perfect Chains",
            "Track Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 8-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /8 Steam achievements/);

});

test("every one of the 8 official Melody's Escape achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Warming Up", "Runner's High", "Self-Actualizer", "Transcendence", "A First Taste of Escape", "Escape Artist", "Lucid Dreamer", "Synesthesia"];

    assert.strictEqual(officialAchievementNames.length, 8, "sanity check on this test's own reference list");

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
