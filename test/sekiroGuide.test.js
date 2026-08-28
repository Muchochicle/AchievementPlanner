import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sekiro.js";

test("the Sekiro: Shadows Die Twice guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sekiro-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sekiro");

});

test("the Sekiro: Shadows Die Twice guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Four Endings",
            "Boss Defeats",
            "Skills & Gear",
            "Story Milestones",
            "Completion",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Sekiro: Shadows Die Twice achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/sekiro.json).
    const officialAchievementNames = [
        "Sekiro", "Man Without Equal", "Ashina Traveler", "Master of the Prosthetic", "Height of Technique",
        "All Prosthetic Tools", "All Ninjutsu Techniques", "Peak Physical Strength", "Ultimate Healing Gourd", "Immortal Severance",
        "Purification", "Dragon's Homecoming", "Shura", "Sword Saint, Isshin Ashina", "Master of the Arts",
        "Lazuline Upgrade", "Revered Blade", "Shinobi Prosthetic", "Memorial Mob", "Resurrection",
        "Gyoubu Masataka Oniwa", "The Phantom Lady Butterfly", "Genichiro Ashina", "Guardian Ape", "Guardian Ape Immortality Severed",
        "Folding Screen Monkeys", "Great Shinobi - Owl", "Father Surpassed", "Corrupted Monk", "Gracious Gift of Tears",
        "Isshin Ashina", "Demon of Hatred", "Great Serpent", "Great Colored Carp"
    ];

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
