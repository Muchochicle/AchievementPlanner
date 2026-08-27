import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/baba-is-you.js";

test("the Baba Is You guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "baba-is-you-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "baba-is-you");

});

test("the Baba Is You guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Ten Main Areas",
            "Baba Is All - The World Map",
            "Beyond the Map - Hidden Areas",
            "Baba Is End",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 18-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /18 Steam achievements/);

});

test("every one of the 18 official Baba Is You achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/baba-is-you.json).
    const officialAchievementNames = [
        "Water Is Sink", "Box Has Key", "Tree Is Shift", "Lava Is Hot", "Leaf Is Move",
        "Cog Is Push", "Bird Is Float", "Baba Is More", "Rocket Is Dust", "Hedge Is Stop",
        "B A B A", "Baba Is Baba", "Not Baba", "Orb Is Bonus", "Baba Is All",
        "Baba Is End", "The End", "What"
    ];

    assert.strictEqual(officialAchievementNames.length, 18, "sanity check on this test's own reference list");

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
