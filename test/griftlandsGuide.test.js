import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/griftlands.js";

test("the Griftlands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "griftlands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "griftlands");

});

test("the Griftlands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Deck-Building Restriction Runs",
            "Combat Feats",
            "Relationships",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Griftlands achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/griftlands.json).
    const officialAchievementNames = [
        "Fist 'o Bricks", "No Upgrades", "Soluble Fish", "Just Cards", "Brawler",
        "Beloved", "Archenemy", "Machinist", "Efficiency", "Impervious",
        "To The Oshnudrome!", "Counterplay", "Total Upgrades"
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
