import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sonic-mania.js";

test("the Sonic Mania guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sonic-mania-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sonic-mania");

});

test("the Sonic Mania guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chaos Emeralds & Completion",
            "Per-Zone Secret Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 18-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /18 Steam achievements/);

});

test("every one of the 18 official Sonic Mania achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No Way? No Way!", "Full Medal Jacket", "Magnificent Seven", "See You Next Game", "Superstar", "That's a Two-fer", "Now It Can't Hurt You Anymore", "Triple Trouble", "The Most Famous Hedgehog in the World", "Window Shopping", "Crate Expectations", "King of Speed", "Boat Enthusiast", "The Password is \"Special Stage\"", "Secret Sub", "Without a Trace", "Collect 'Em All", "Professional Hedgehog"];

    assert.strictEqual(officialAchievementNames.length, 18, "sanity check on this test's own reference list");

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
