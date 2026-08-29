import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-40k-boltgun.js";

test("the Warhammer 40,000: Boltgun guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-40k-boltgun-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-40k-boltgun");

});

test("the Warhammer 40,000: Boltgun guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Campaign",
            "Forges of Corruption (Expansion)",
            "Horde Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Warhammer 40,000: Boltgun achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Chapter I - Complete", "Chapter II - Complete", "Chapter III - Complete", "The Emperor Protects", "My Armour is Contempt",
        "Emperor’s Mercy", "Exterminatus", "Defeat a Lord of Change", "Defeat a Great Unclean One", "Find all Secrets - Chapter 1",
        "Find all Secrets - Chapter 2", "Find all Secrets - Chapter 3", "The Emperor Still Protects", "Contempt Maintained", "Mercy Extended",
        "There Is Only War", "Rage Incarnate", "Find All Secrets - Forges of Corruption", "Let None Survive", "Duty Fulfilled",
        "For the Emperor!",
    ];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
