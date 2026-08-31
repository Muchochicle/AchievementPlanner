import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bloody-good-time.js";

test("the Bloody Good Time guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bloody-good-time-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bloody-good-time");

});

test("the Bloody Good Time guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Round Feats",
            "Career & Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Bloody Good Time achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First Blood", "Last Moment Upset", "The Great Escapist", "Untouchable", "Award Winning Scene", "V for Vindictive", "Rising Star", "Superstar", "Director’s Darling", "Character Actor", "Screen Legend", "Hogging the Limelight"];

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
