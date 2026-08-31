import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-case-of-the-golden-idol.js";

test("the The Case of the Golden Idol guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-case-of-the-golden-idol-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-case-of-the-golden-idol");

});

test("the The Case of the Golden Idol guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game Cases 1-11",
            "DLC: Spider of Lanka & Lemurian Vampire",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official The Case of the Golden Idol achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Case Solved", "Second Case Solved", "Third Case Solved", "Fourth Case Solved", "Fifth Case Solved", "Sixth Case Solved", "Seventh Case Solved", "Eight Case Solved", "Ninth Case Solved", "Tenth Case Solved", "Eleventh Case Solved", "The Spider of Lanka 1st Case Solved", "The Spider of Lanka 2nd Case Solved", "The Spider of Lanka 3rd Case Solved", "The Lemurian Vampire 1st Case Solved", "The Lemurian Vampire 2nd Case Solved", "The Lemurian Vampire 3rd Case Solved"];

    assert.strictEqual(officialAchievementNames.length, 17, "sanity check on this test's own reference list");

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
