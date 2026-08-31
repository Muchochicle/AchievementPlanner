import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/production-line.js";

test("the Production Line guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "production-line-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "production-line");

});

test("the Production Line guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Output, Efficiency & Revenue Awards",
            "Factory Setup & Single-Game Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official Production Line achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["High Octane Output", "High-Octane Efficiency", "Efficiency Awareness", "Bumper Output", "Mainstream Production", "Mass Production", "Start-up Production", "Millionized revenue", "Premium Car Production", "Full Throttle Revenue", "Middle of the Road Output", "Revenue Overdrive", "Power Trip", "Off-Grid", "Job Creator", "Robot Army", "Efficient Layout", "Innovator", "Min Spec", "Experienced Manager", "Industry Veteran", "Wide Product Range", "Big Spender", "Research Addict", "Luxury Range: Sophistication sells", "Marketing: Let’s go mad!", "Zero Emissions: And breathe…", "Local production: Keeping it in-house", "Rapid Assembly: We’re on a deadline", "High-End cars: Executive order", "Customer Awareness: it’s all about the brand", "Production: scale it up"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
