import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rime.js";

test("the RiME guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rime-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rime");

});

test("the RiME guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Collectibles",
            "Story Beats",
            "Side Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official RiME achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/rime.json).
    const officialAchievementNames = [
        "Toyful Child", "Full Wardrobe", "Lost Lullaby", "The Truth", "It's a process",
        "Sweet Memory", "Don't say no", "Unbearable", "Ask for a miracle", "No hope",
        "Letting go", "Without a trace", "Bite the dust", "Jars in the sand", "Lighten up",
        "The path of light", "Ancient treasure", "Happy family", "Reckless cannonball", "That went too far",
        "Careful steps", "Dark and quiet", "What lies in the deep", "Hold your breath", "Funeral flowers",
        "Good intentions", "Blend-in with the surroundings", "From the sky to the abyss", "Wrong direction", "Patience",
        "Racing"
    ];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
