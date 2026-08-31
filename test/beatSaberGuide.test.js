import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/beat-saber.js";

test("the Beat Saber guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "beat-saber-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "beat-saber");

});

test("the Beat Saber guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorial & Milestones",
            "Rank & Combo Challenges",
            "Modifiers & Campaign",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Beat Saber achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["You Are Ready", "100 Million", "Day & Night", "Traveller", "Hope", "No Mistakes", "Precision", "Drum Kit", "Expert", "Supreme", "Drill", "Good Enough", "Special", "Flawless", "Pay Attention", "Concentrate", "Focus", "Pure", "Faster", "On the Edge", "Memory", "Charge", "Progress", "Not the End", "Peace", "Warm-up"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
