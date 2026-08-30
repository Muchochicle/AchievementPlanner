import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/prey-2017.js";

test("the Prey guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "prey-2017-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "prey-2017");

});

test("the Prey guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Talos I: Combat, Powers & Exploration",
            "Talos I: Endings & Key Choices",
            "Talos I: Hidden Story Achievements",
            "Mooncrash DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 58-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /58 Steam achievements/);

});

test("every one of the 58 official Prey achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Engineer", "I and Thou", "I and It", "No Needles", "Do No Harm",
        "Mimic Massacre", "Dead Calm", "Mimesis", "Shapeshifter", "Know Thine Enemy",
        "Know Thy Self", "Split Affinity", "Operator", "A Different Side of Yu", "Deprogramming",
        "Tee One Up", "Escape Velocity", "It's Alive!", "Thoughts Can Kill", "Ball Lightning",
        "TranStar Gourmand", "Cold Dead Hands", "Reduce, Reuse, Recycle", "Intrinsic Value", "Missing Persons",
        "Press Sneak", "Psychometry", "No Show", "Awkward Ride Home", "Push the Fat Guy",
        "Abandon Ship", "Self-Incriminating", "Brain Trust", "Dear Future Self", "Best Served Cold",
        "Suicide by Proxy", "Open Says She", "This Never Happened", "Facsimile", "A Friend in Need",
        "Prism Master", "The Gates of Hell", "Adrift", "Black Market", "You Rang?",
        "Makeup Exam", "Coffee Break", "Gift to the World", "Galaxy Brain", "Squad Goals",
        "Cryptomancer", "Psychostatic Efficiency", "Quantum Leap", "I’m Your Biggest Fan", "Apex Predator",
        "Three-Body Problem", "Contract Fulfilled", "No One Left Behind",
    ];

    assert.strictEqual(officialAchievementNames.length, 58, "sanity check on this test's own reference list");

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
