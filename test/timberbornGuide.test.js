import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/timberborn.js";

test("the Timberborn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "timberborn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "timberborn");

});

test("the Timberborn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Wonders & Engineering Challenges",
            "Growth & Survival Milestones",
            "Misfortunes (Hidden)",
            "Factions, Well-being & Basics",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Timberborn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Smile, everybeaver!", "No More Leaks", "So Long, and Thanks for the Coffee!", "Ninety-nine Balloons and Counting", "Unnecessary Expenses", "Overachiever", "Rush B-eaver!", "Mastered the Flow", "Sweet Teeth", "Plankster", "Power Around the Clock", "Enough to Power a Car Battery", "Endless Crunch", "Sky Is the Limit", "Refined Refinement", "Windy Day", "Hedge Fund", "I Am Become Deaf", "Shaka Bra!", "Tube City", "Hanging Gardens", "Beaver-made Thicket", "Beaver-made Forest", "Beaver-made Wilderness", "One Big Family", "One Big Colony", "One Big... Horde?", "Survivor", "Survival 101", "Wasteland Expert", "Legendary Pioneer", "Castor Posthumus", "Time of the Bots", "Oops!", "Quadfecta of Misery", "Not Again!", "Not the Bees!", "Desert of the Real", "Wet Floor", "It Happens.", "Rock Bottom", "We Have the Technology", "Iron Teeth at the Ready", "That's... Acceptable", "That's... Okay", "That's... Nice", "That's... Good", "That's... Awesome", "That's... Amazing", "That's... Incredible", "That's... Paradise!", "Created in Beaver’s Image", "Fixed a Leak", "Folktails Master Builder", "Iron Teeth Master Builder", "It's an Instinct", "Crackling with Ideas", "Not Bad!", "Smell of Water in the Morning"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
