import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/six-days-in-fallujah.js";

test("the Six Days in Fallujah guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "six-days-in-fallujah-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "six-days-in-fallujah");

});

test("the Six Days in Fallujah guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Roles, Training & Co-op",
            "FUBAR Hard & Conditions",
            "Hard-AI Veteran & Campaign",
            "Single-Player Tactician & Training",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Six Days in Fallujah achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Band of Brothers", "Six in Six", "Heal a Teammate", "First Promotion", "Assist", "Fire", "Ready", "Proven Leader", "Apartment Expert", "Jolan Square Expert", "Own the Night", "Phase Line Henry Expert", "Ride Out the Storm", "Slow is Smooth, Smooth is Fast", "Train Station Expert", "Train Station Veteran", "Apartment Veteran", "Phase Line Henry Veteran", "Jolan Square Veteran", "Amusement Park Veteran", "Objective Virginia Veteran", "West Manor Veteran", "HLZ Wolf Veteran", "Vigilant Resolve Veteran", "Operation al-Fajr Veteran", "Train Station Tactician", "Apartment Tactician", "Phase Line Henry Tactician", "Jolan Square Tactician", "Amusement Park Tactician", "Objective Virginia Tactician", "West Manor Tactician", "HLZ Wolf Tactician", "Firewatch Medal"];

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
