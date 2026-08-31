import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bus-simulator-18.js";

test("the Bus Simulator 18 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bus-simulator-18-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bus-simulator-18");

});

test("the Bus Simulator 18 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks & Progression",
            "Route Network & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Bus Simulator 18 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Interconnected", "Lucky 7", "Wherever I Please", "Gotta Catch 'Em All", "High Five", "Baby Steps", "Key to the City", "They grow up so fast", "Feeling Old Yet?", "Collectible One", "Collectible Two", "Collectible Three", "Collectible Four", "Collectible Five", "Half-full", "Almost...", "All mine!", "1 Up", "Kilo", "Ka-ching!", "Three's a crowd", "Dirty Dozen", "Happily Married", "Business Expansion", "The Dream of Flight", "Praise the Sun", "Another Job Well Done", "Frequent Flier"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
