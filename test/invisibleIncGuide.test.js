import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/invisible-inc.js";

test("the Invisible, Inc. guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "invisible-inc-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "invisible-inc");

});

test("the Invisible, Inc. guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Clears",
            "Endless Mode & Single-Run Tactics",
            "Contingency Plan & Extra Modes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Invisible, Inc. achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Meta-Hacking", "Ant Society", "Invisible Inc.", "Fully Equipped", "The Limit", "Ghost Moves", "Never Look Back", "Rebuilding the Firm", "Corporate Ladder", "Acceptable Host", "Meat Machine", "Daemon Code", "Contact Re-established", "Nearing Confidence Threshold", "Target Resolved", "Attention to Detail", "Smooth Operator", "Time Attack", "Training Wheels", "Powerful Toast", "Technical Macguffin", "\"surprised\" Face", "Empire builder"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
