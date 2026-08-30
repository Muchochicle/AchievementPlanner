import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/banished.js";

test("the Banished guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "banished-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "banished");

});

test("the Banished guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Population Milestones",
            "Specialized Playstyles",
            "Trade & Resources",
            "Production & Infrastructure",
            "Building & Legacy",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Banished achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Settlement", "Village", "Town", "Educated", "Uneducated",
        "Jack of all Trades", "Mountain Men", "Tombstone", "Blacksmith", "Stylish",
        "Isolationist", "One with Nature", "Trader", "Master Trader", "Exports",
        "Firefighter", "Farmer", "Livestock", "Food Variety", "Miner",
        "Mason", "Foodie", "Lumberjack", "Stonework", "Smelter",
        "Highwaymen", "Golden Gate", "Immigrants", "Smiles all Around", "Healthy",
        "Built from Stone", "Ready for Anything", "Builder", "Master Builder", "Established",
        "Tenure",
    ];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
