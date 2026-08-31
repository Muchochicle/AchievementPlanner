import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/split-fiction.js";

test("the Split Fiction guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "split-fiction-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "split-fiction");

});

test("the Split Fiction guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Progression",
            "Deaths, Secrets & Easter Eggs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Split Fiction achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["BFF's", "Bookworms", "Potion Chef", "Chair the Load", "You Are Not a Robot", "Sisters: A Tale Of Two Besties", "One Bird, Three Stones", "Cold Potato", "Tazed and Confused", "Locked Up", "Huffing and Puffing", "Robot Revolution", "Feed Me", "A Friendly Push", "Rose's Best Friend", "We're Gonna Need a Bigger Boat", "Are We the Baddies?", "The Cake is Not a Lie", "Snaaaaaaaaake", "Goin' Whole Hog"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
