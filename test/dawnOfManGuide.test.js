import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dawn-of-man.js";

test("the Dawn of Man guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dawn-of-man-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dawn-of-man");

});

test("the Dawn of Man guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Survival & Progression",
            "Population & Tech",
            "Scenarios & Prestige",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Dawn of Man achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Launch Forth", "Ancient Apprentice", "Ancient Miner", "The Deer Hunter", "Massive Hunter",
        "Iron Man", "Master of Steel", "Hardened Survivor", "Completion", "Ultimate Completion",
        "Overpopulation", "Paleolithic Overpopulation", "Express Evolution", "Siege Progress", "Siege Overcome",
        "Continental Settlement", "North Settlement", "Warrior Settlement", "Megalith Madness", "Prestigious",
        "Stone Prestige", "Challenger", "Hyper Challenger", "Ultimate Challenger",
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
