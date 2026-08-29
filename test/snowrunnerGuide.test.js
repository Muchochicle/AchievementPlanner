import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/snowrunner.js";

test("the SnowRunner guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "snowrunner-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "snowrunner");

});

test("the SnowRunner guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Driving & Recovery Feats",
            "Cargo, Regions & Vehicles",
            "Exploration & 100% Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official SnowRunner achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Yeah, you can drive!", "Once a Farmer always a Farmer", "Goliath", "The Blue Hall", "Where are the logs?",
        "Play Your Way", "Deer Hunt", "Moose Hunt", "Bear Hunt", "Eat, Sleep, Drill, Repeat",
        "Get over here", "Through blood & sweat", "Broken Horse", "Simply Delivered", "Workers Unite",
        "Tread Softly", "Problem Solved", "Untouchable", "Gallo-24", "18 Wheels is Not Enough",
        "What's a mile?", "Western Wind", "Uncle Scrooge", "\"Stars and Stripes\"", "The Duel",
        "Fuel Economy", "Victory Parade", "Dreams Come True", "\"All Along the Watchtower\"", "All Starts From a Garage",
        "Pedal to the Metal", "Bering Strait", "Convoy", "Workaholic", "Model Collector",
        "Ain't no rest for the...trucker?", "The Black Shuck",
    ];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
