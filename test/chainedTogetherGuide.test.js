import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chained-together.js";

test("the Chained Together guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chained-together-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chained-together");

});

test("the Chained Together guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Summit & Modes",
            "Biomes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Chained Together achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["10 Wings", "Climb faster", "Lava mode", "Underworld", "Hell Cliffs", "The Car Race", "The Mysterious Cave", "The Subway Station", "The City", "Over The Buildings", "The Warehouse", "The Harbor", "The Temple", "The Asian Shrine", "The Deities", "The Garden"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

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
