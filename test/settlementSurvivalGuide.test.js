import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/settlement-survival.js";

test("the Settlement Survival guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "settlement-survival-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "settlement-survival");

});

test("the Settlement Survival guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Standard-Mode Milestones",
            "Production & Population",
            "Economy, Buildings & Roads",
            "Endgame & Reputation",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Settlement Survival achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Agriculture Tycoon", "Prosperity", "Treatment of plague", "Happiness Maintainer", "Against the Cold", "Skilled Workers", "Advanced Technology", "Civilized Land", "Thorough Cleaning", "Animal Imports", "Builder", "Cozy Houses", "Infrastructure", "Clear Road", "City Center", "Snowstorm", "Tasty Food", "Seeds Collector", "A Welcoming Settlement", "Carefree Life", "Saving Lives", "Robust Settlers", "Hard-Drinking", "Happiness", "Efficient Heating", "Luxury Clothes", "Efficient Tools", "Handcart", "Practice Makes Perfect", "Technology Town", "Well-Read", "Knowledge is Infinite", "Mineral-Rich", "Treasure Resources", "Keep Ordering", "Developed Economy", "Architect", "Building Expert", "House Remodel", "Great Castle", "Waterpower", "Full Load", "Road Planning", "Urban Construction", "Administrator", "The Sacrifice", "Goof-off Hero", "Weather-Beaten", "Integrated Development", "World-Renowned", "Business Mind"];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
