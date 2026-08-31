import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hyperdimension-neptunia-rebirth1.js";

test("the Hyperdimension Neptunia Re;Birth1 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hyperdimension-neptunia-rebirth1-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hyperdimension-neptunia-rebirth1");

});

test("the Hyperdimension Neptunia Re;Birth1 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Character Levels & Party",
            "Systems & Combat",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Hyperdimension Neptunia Re;Birth1 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hyperdimension Neptunia Re;Birth1 Master", "...and the story begins", "Chapter 1 Clear", "Chapter 2 Clear", "Chapter 3 Clear", "Chapter 4 Clear", "Chapter 5 Clear", "Chapter 6 Clear", "Chapter 7 Clear", "Chapter 8 Clear", "Normal Ending", "True Ending", "Combo Maker", "Neptune Level Max", "Compa Level Max", "IF Level Max", "Noire Level Max", "Vert Level Max", "Blanc Level Max", "MAGES. Level Max", "Marvelous AQL Level Max", "Falcom Level Max", "Broccoli Level Max", "CyberConnect2 Level Max", "Tekken Level Max", "Nepgear Level Max", "Uni Level Max", "Rom Level Max", "Ram Level Max", "Nepgear Teams Up", "Uni Teams Up", "Rom and Ram Teams Up", "Item Creator", "Item Master", "Millionaire", "Game Creator", "Game Remake", "First Battle", "Battle Master", "Shopping", "Godsized", "Overclocked", "First Quest", "Maximum Fire Power", "Combo Master"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
