import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rhythm-doctor.js";

test("the Rhythm Doctor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rhythm-doctor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rhythm-doctor");

});

test("the Rhythm Doctor guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Acts, Finale & S-Ranks",
            "Co-op, Late Acts & Level Select Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Rhythm Doctor achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Day On The Job", "One Step At A Time", "A Usual Day Around Here", "Working Remotely", "We’re All Part Of The Team", "The Donut Trilogy", "First Date", "Insomnia Cure", "Maybe Try Decaf?", "Rush Hour", "No Items, Final Destination", "Greenhouse", "Sing From The Heart", "Overworked, Underpaid", "Conductor", "Beats To Travel To", "Focused", "Nimble", "Hey, I Wasn’t Ready Yet!", "Two-Handed", "Whole-hearted Performance", "Woof", "I’m Dizzy", "Worth a Shot", "Wow!", "One Slip, Too Late, S+, For Me", "Feel The Burn", "Eavesdropping", "World Champion", "The Coach of Middlesea", "Doctor’s Orders", "The Future of Middlesea", "Perfect Matchmaker", "Perfect Finale"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
