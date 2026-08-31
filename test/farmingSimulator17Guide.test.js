import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farming-simulator-17.js";

test("the Farming Simulator 17 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farming-simulator-17-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farming-simulator-17");

});

test("the Farming Simulator 17 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started",
            "Fieldwork, Forestry & Animals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official Farming Simulator 17 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["In for the Long Haul", "Breakneck Bankruptcy", "Financial Independence", "Peak Profits", "Help a Fella out", "Farmers' Favorite", "Three-Pointer", "All That Glitters...", "Preparation Is Key", "Into the Soil", "Make 'em Grow", "Bumper Harvest", "Lumber...", "...jack", "Cowboy", "Sweet Dreams", "Oink Oink!"];

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
