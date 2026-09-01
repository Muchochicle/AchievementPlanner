import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kine.js";

test("the Kine guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kine-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kine");

});

test("the Kine guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Band's Story",
            "The Big Time & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Kine achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This is Perfect!", "Who's That?", "Okay, Maybe One Obstacle", "No Machine Left Behind", "Sometimes the Job Finds You", "Fate", "Don't Worry, They're Waterproof", "Turnt Up", "What's the Point", "We Have a Band!", "The Big Time", "Thanks for Playing!", "Virtuoso"];

    assert.strictEqual(officialAchievementNames.length, 13, "sanity check on this test's own reference list");

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
