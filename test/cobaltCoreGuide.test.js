import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cobalt-core.js";

test("the Cobalt Core guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cobalt-core-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cobalt-core");

});

test("the Cobalt Core guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks",
            "Runs & Dailies",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Cobalt Core achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Now We're Cooking", "The New Kid", "We're In", "Bookmarked", "I've Been Here The Whole Time", "God Of War", "Good Communicator", "Of Two Minds", "Smooth Sailing", "Penchant for Punishment", "Prism", "Curiosity", "Daily Dabbler", "Entropic Explorer", "Looping Legend"];

    assert.strictEqual(officialAchievementNames.length, 15, "sanity check on this test's own reference list");

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
