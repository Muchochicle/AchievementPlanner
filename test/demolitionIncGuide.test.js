import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/demolition-inc.js";

test("the Demolition Inc. guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "demolition-inc-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "demolition-inc");

});

test("the Demolition Inc. guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Destruction Milestones",
            "DLC: Level & Weapon Pack",
            "Steam Workshop",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Demolition Inc. achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Freshman", "First Things First", "Sophomore", "Barbeque", "Chef", "Bulldozer", "Cosmic Bulldozer", "Gourmet", "Galactic Bulldozer", "Earth Crusher", "Car Collector I", "Car Collector II", "Car Collector III", "Amateur Driver", "Professional Driver", "Expert Driver", "Oily wheels", "Slider", "Drift King", "City Eater", "City Muncher", "City Dominator", "Car Jump I", "Car Jump II", "Car Jump III", "Rainmaker", "Squad Leader I", "Squad Leader II", "Squad Leader III", "Magnetism I", "Magnetism II", "Magnetism III", "Back to Work - Complete", "Back to Work - All Stars", "Back to Work - One City", "Construction, Inc.", "Downloading, Inc."];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
