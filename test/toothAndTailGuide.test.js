import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tooth-and-tail.js";

test("the Tooth and Tail guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tooth-and-tail-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tooth-and-tail");

});

test("the Tooth and Tail guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Heroic Objectives",
            "Ranked Arena",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Tooth and Tail achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Revolutionary", "Platinum", "Exiled", "Well Paid Militia", "Industrial Farmer", "Hot Butter", "Dirty Insurgents", "duDudu", "Slippery", "Rags to Riches", "Wa-pa-pa-pa-pa-pa-pow!", "What's Yours is Mine", "An Offal You Can't Refuse", "There's No Place Like Home", "Fire Wire", "Miracle Diet", "Look out Below!", "Lock and Key", "Pacifist", "Fire On Me", "Bonepit Redux", "The Hand that Feeds", "Windwalker", "Sent to Slaughter", "Pigherder", "The Fate of Animals", "State of Nature", "Tyranny of the Masses", "Peace over Morality", "We Feast", "Agitator", "Rabble Rouser", "Militant", "Firebrand", "Hero of the Hungry", "The Great Provider", "Fury of the Feast", "Deadbones"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
