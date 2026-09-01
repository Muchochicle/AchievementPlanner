import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/old-mans-journey.js";

test("the Old Man's Journey guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "old-mans-journey-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "old-mans-journey");

});

test("the Old Man's Journey guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Journey Begins",
            "Later Encounters & The End",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Old Man's Journey achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Beginning", "Adeline the Village Gossiper", "Window Piano", "Kassiopeia the Tortoise", "Hugo the Vagabond", "Frogs' Chorus", "Georges the Lighthouse Keeper", "Smooth Ride", "Sheep Whisperer", "Enjoy the Ride", "Tilda the Whiz Kid", "Albert the Gardener", "The End"];

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
