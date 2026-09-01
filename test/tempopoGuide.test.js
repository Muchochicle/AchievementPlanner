import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tempopo.js";

test("the Tempopo guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tempopo-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tempopo");

});

test("the Tempopo guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Seasons & Challenge Islands",
            "Clever Puzzle Solutions",
            "Tandem Tricks & Special Clears",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Tempopo achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Blooming Roses", "Dancing Fireflies", "Falling Leaves", "Shimmering Lights", "Green Thumb", "Free Thinker", "Spring Challenge Champion", "Summer Challenge Champion", "Autumn Challenge Champion", "Winter Challenge Champion", "Keep the Beat", "Contrarian", "Ostinato", "A Foolproof Plan", "Tiiimber", "Crucial Cargo", "Pushing Through", "Beautiful Bouquet", "Redirected Force", "Tandem Teamwork", "Matched Momentum", "Overengineered", "Misdirection", "The Only Way Is Up", "Solo Performance"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
