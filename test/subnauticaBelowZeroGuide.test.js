import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/subnautica-below-zero.js";

test("the Subnautica: Below Zero guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "subnautica-below-zero-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "subnautica-below-zero");

});

test("the Subnautica: Below Zero guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Arrival & Early Survival",
            "Al-An & Region Exploration",
            "Endgame & Leaving 4546B",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Subnautica: Below Zero achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Drop in the Ocean", "Like Riding a Bike", "Truckin'", "Jukebox Hero", "Dressed For The Weather",
        "Spy Pengling", "Necessary Repairs", "Xenobiology", "Finding the Cure", "Another Survivor",
        "Pirate Radio", "Out of Mind", "Into the Unknown",
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
