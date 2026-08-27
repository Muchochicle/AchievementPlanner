import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/void-bastards.js";

test("the Void Bastards guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "void-bastards-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "void-bastards");

});

test("the Void Bastards guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress",
            "Ship Upgrades & Progress Buildings",
            "Collectibles & Encounters",
            "Difficulty & No-Death Runs",
            "Single-Restriction Runs",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Void Bastards achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/void-bastards.json).
    const officialAchievementNames = [
        "Bodge Job", "Specially Selected", "Tooled Up", "Swanning Around", "Staff Turnover",
        "Sorted", "Cooking with Gas", "Cor Blimey!", "Coffin Dodger", "Off the Hook",
        "Brown Noser", "Human Resource", "Chilled Out", "Software Pirate", "Kippers for Breakfast",
        "Shiver Their Timbers", "Trainspotter", "Mingin", "Lombard", "Mahatma",
        "Squaddie", "Guy Fawkes", "Clever Dick", "Tight Arse"
    ];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
