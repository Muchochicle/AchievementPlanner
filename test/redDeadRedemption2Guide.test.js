import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/red-dead-redemption-2.js";

test("the Red Dead Redemption 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "red-dead-redemption-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "red-dead-redemption-2");

});

test("the Red Dead Redemption 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Chapters",
            "100% Completion",
            "Money & Honor",
            "Red Dead Online",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Red Dead Redemption 2 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/red-dead-redemption-2.json).
    const officialAchievementNames = [
        "Back in the Mud", "Just a Scratch", "To Greener Pastures", "Settling Feuds", "Washed Ashore",
        "No Traitors", "Third Time Lucky", "Redemption", "Cowboy Builder", "Endless Summer",
        "Lending a Hand", "Best in the West", "Gold Rush", "Friends With Benefits", "Hobby Horse",
        "Breaking and Entering", "Artificial Intelligence", "Take From the Rich", "Give to the Poor", "Pony Up",
        "Extreme Personality", "Western Stranger", "Bountiful", "Collector's Item", "Paying Respects",
        "Errand Boy", "It's Art", "Self Sufficient", "Skin Deep", "Zoologist",
        "It was THIS Big!", "Locked and Loaded", "Grin and Bear it", "Trusty Steed", "Breakout",
        "Series Major", "Gun For Hire", "Eventful", "Buckle Up", "The Real Deal",
        "Horses for Courses", "Getting Started", "Notorious", "All's Fair", "Home Comforts",
        "Non-Regulation", "Posse Up", "Master Craftsman", "Butchered", "Picked to Perfection",
        "Strength in Numbers"
    ];

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
