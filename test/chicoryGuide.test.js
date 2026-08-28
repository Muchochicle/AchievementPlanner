import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chicory.js";

test("the Chicory: A Colorful Tale guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chicory-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chicory");

});

test("the Chicory: A Colorful Tale guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Wielder Trials",
            "Collectible Sets",
            "Sidequests & Favors",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Chicory: A Colorful Tale achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/chicory.json).
    const officialAchievementNames = [
        "Helpful", "Meet Your Hero", "Phone Call", "Muse", "Ancient Beast of the Darkness",
        "Apprenticeship", "Standing on the Mountain Top", "Honored History", "More Than Myself", "Respect",
        "Something New", "End of an Era", "Clothing Curious", "Clothing Collector", "Clothing Hunter",
        "Trash Mammal", "Good Samaritan", "Ultimate Samaritan", "Casual Decorator", "Serious Decorator",
        "Master Decorator", "Stylist", "Style Pro", "Kitten Caboodle", "Lost and Found",
        "Graduate", "Postal Service", "Such Great Heights", "Explorer", "Cartographer",
        "Picture Perfect", "Turnabout Squeeze", "Passion for Fashion"
    ];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
