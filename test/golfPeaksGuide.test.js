import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/golf-peaks.js";

test("the Golf Peaks guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "golf-peaks-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "golf-peaks");

});

test("the Golf Peaks guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Worlds 1-6",
            "Worlds 7-10, Bonus & Secret Level",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Golf Peaks achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Steps", "Taking It To The Skies", "Unstoppable", "Making A Splash", "Bouncing Off", "Thinking With Portals", "Grand Slam", "Lost Peaks", "19th Hole", "Special Delivery", "Frostbite", "Dessert"];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
