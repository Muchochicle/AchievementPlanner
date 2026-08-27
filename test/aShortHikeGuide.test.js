import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-short-hike.js";

test("the A Short Hike guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-short-hike-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-short-hike");

});

test("the A Short Hike guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Climb & Collectibles",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official A Short Hike achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/a-short-hike.json).
    const officialAchievementNames = [
        "Hawk Peak", "The End", "Feathers Forever", "The Fish Are Biting Today",
        "Parkour Master", "Crispy", "Remember This Day Forever", "Feather Finder",
        "Not A Scratch", "Green Thumb", "Photo Friends", "Only You Can Prevent Campfires"
    ];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
