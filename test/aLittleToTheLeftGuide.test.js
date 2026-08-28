import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-little-to-the-left.js";

test("the A Little to the Left guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-little-to-the-left-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-little-to-the-left");

});

test("the A Little to the Left guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign",
            "Daily Tidy",
            "Lifetime Tidy Counts",
            "Secret Puzzle Solutions",
            "Cupboards & Drawers DLC",
            "Seeing Stars DLC",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 65-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /65 Steam achievements/);

});

test("every one of the 65 official A Little to the Left achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/a-little-to-the-left.json).
    const officialAchievementNames = [
        "Home Sweet Home", "Lost Recipe", "Nitty Gritty", "Inner Nature", "Near Earth Organizer",
        "A Cozy Completion", "Guests Coming Over", "Clean Kitchen", "Spring Cleaning", "One With Nature",
        "Encounters of the Tidy Kind", "Tidy Triumph", "Seeing In A New Light", "Triple Digit Tidier", "Today's Tidy",
        "Tidy Toddler", "Let It Be", "Helpful Hints", "Hint Hunter", "Categorization Cadet",
        "Adept Aligner", "Extraordinary Organizer", "No Squint Hint", "One Clean Page", "What Is Will Be",
        "No Mess Left Behind", "My Lucky Number", "Neat As A Pin", "Flip the Calendar", "Halfway There",
        "Three-Quarter Sorter", "Sqweeky Clean", "Two-week Sweep", "Calendar Collector", "Highly Decorated",
        "Fun for Humans Too", "Bad Kitty", "Keep Away", "Exacting Eggs", "Draw Me A Rainbow",
        "Harmonized Purr", "Rainbow To The Moon", "Unstable Stacker", "Be The Chaos", "Triple Threat",
        "Path of Destruction", "Sweep Them On The Floor", "The Other Side", "Everything Put Away", "Where Is My Cap?",
        "Can Do Altitude", "A Balanced Meal", "In No Rush", "Now You’re Playing With Power", "Show Off",
        "Shooting Star", "Nine Lives", "Full Orbit", "Sticky Wand", "I'll Take My Water Neat",
        "Whatcha Lookin' At?", "Keeping Count", "Dead End Boss Gems", "Top Heavy Slice", "Grabbed the Wrong End"
    ];

    assert.strictEqual(officialAchievementNames.length, 65, "sanity check on this test's own reference list");

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
