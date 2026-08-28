import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cities-skylines-2.js";

test("the Cities: Skylines II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cities-skylines-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cities-skylines-2");

});

test("the Cities: Skylines II guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Founding Your City",
            "Growth, Happiness & Economy",
            "Infrastructure & Transport",
            "Building & Landscaping",
            "Maps, Policies & Districts",
            "Weather, Editor & Photo Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Cities: Skylines II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "My First City", "The Inspector", "Happy to Be of Service", "Royal Flush", "Key to the City",
        "Six Figures", "Go Anywhere", "The Size of Golf Balls!", "Out for a Spin", "Now They're All Ash Trees",
        "Zero Emission", "Up and Away!", "Making a Mark", "Everything the Light Touches", "Calling the Shots",
        "Wide Variety", "Executive Decision", "All Smiles", "You Little Stalker!", "Cartography",
        "The Explorer", "The Last Mile Marker", "Four Seasons", "Spiderwebbing", "Snapshot!",
        "This Is Not My Happy Place", "The Architect", "I Made This", "Simply Irresistible", "Top of the Class",
        "The Deep End", "Groundskeeper", "Colossal Gardener", "Strength Through Diversity", "Squasher-Downer",
        "A Little Bit of TLC", "Welcome, One and All!", "One of Everything", "How Much Is the Fish?", "Ship It",
        "A Different Platformer", "Draw Me Like One of Your Lift Bridges", "It's Pronounced \"Key\"!", "Pier-fect!"
    ];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
