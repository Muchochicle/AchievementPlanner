import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wizard-of-legend.js";

test("the Wizard of Legend guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wizard-of-legend-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wizard-of-legend");

});

test("the Wizard of Legend guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boss Fights",
            "Combat Mastery",
            "Collection & Challenge Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official Wizard of Legend achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Forward to the Past", "Best Friends Forever", "Feel the Burn", "Party like a Rock Star", "Breaking the Ice",
        "Wizard of Legend", "ULTRAAAAA", "Flawless Victory", "The Turn", "Heart of the Cards",
        "Indie Collector", "All the Things!", "I Make This Look Good", "Happy Birthday", "Truly Outrageous",
        "Iconoclast", "Gotta Go Fast", "Danger is My Middle Name", "Ordered Chaos",
    ];

    assert.strictEqual(officialAchievementNames.length, 19, "sanity check on this test's own reference list");

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
