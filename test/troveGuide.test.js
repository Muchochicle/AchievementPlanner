import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trove.js";

test("the Trove guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trove-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trove");

});

test("the Trove guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Shadow Tower Bosses",
            "Subclasses, Gems & Geode",
            "Bomber Royale & Gardening",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official Trove achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Unleash the Hydrakken!", "Vanquish the Hydrakken! ", "Burninate the Hydrakken!", "The Doctor is In!", "The Prescription is Pain!", "A Trovian a Day!", "Stay Subclassy!", "The Gem Forger", "A Builder's Focus", "Perfection!", "The Next Step", "Further Heights", "Starting Spelunker", "Super Spelunker", "Top Bomber", "Beaucoup Bombs", "Plant's Best Friend", "Reap what you Sow", "Reduce, Reuse, Recompost"];

    assert.strictEqual(officialAchievementNames.length, 19, "sanity check on this test's own reference list");

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
