import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assemble-with-care.js";

test("the Assemble with Care guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assemble-with-care-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assemble-with-care");

});

test("the Assemble with Care guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Levels",
            "Later Levels & Epilogue",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official Assemble with Care achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Bellariva", "Goodnight, My Darling", "Statue of Limitations", "Call Me", "Life Through a Lens", "Everything is Illuminated", "Game Over", "A Fix in Time", "Slide Away", "Hello, Master Chef", "Turning the Tables", "Thank You for the Music", "Only a Phonecall Away", "Coffee Break"];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

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
