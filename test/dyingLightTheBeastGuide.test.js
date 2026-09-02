import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dying-light-the-beast.js";

test("the Dying Light: The Beast guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dying-light-the-beast-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dying-light-the-beast");

});

test("the Dying Light: The Beast guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Combat & Crafting",
            "Secrets & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Dying Light: The Beast achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Free at Last", "New Friends", "Largo Embargo", "Less Obedient", "Enhanced Telepathy", "There You Are!", "Glimpse into the Future", "Good Samaritan", "Ultimate Survivor", "Ultimate Beast", "We're Safe Here!", "And Then There Was Light", "Experiment on the Loose", "I Still Don't Approve of Mindless Fun", "Gunslinger", "Craftsman", "Kylin McCrane", "Apex Predator", "Blacksmith", "Firefighter", "Hexakosioihexekontahexa ", "Iconic", "Sunday Morning Run", "Cabinet of Curiosities", "Know What 'Castor' Means?", "And Don't Forget to Wash Your Hands", "Craftsman's Apprentice", "Crane on a Monument", "What Happened at the Asylum", "Family Picture", "Second Ascent", "The Legend Dawns", "Beast's Dowry", "I am The Alpha now", "The Nightmare is over", "Pushing Through", "True Survivor", "Unbeatable", "Hoarder", "Better Be Safe", "The Fearless Samaritan", "Peace Bringer"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
