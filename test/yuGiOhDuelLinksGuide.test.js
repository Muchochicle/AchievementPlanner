import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yu-gi-oh-duel-links.js";

test("the Yu-Gi-Oh! Duel Links guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yu-gi-oh-duel-links-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yu-gi-oh-duel-links");

});

test("the Yu-Gi-Oh! Duel Links guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Win & Stage Milestones",
            "Collection & Combat Totals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Yu-Gi-Oh! Duel Links achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ultimate Duelist", "Novice Duelist", "Fledgling Duelist", "Mid-Tier Duelist", "Advanced Duelist", "Duel King", "Duelist Awakened", "Single Novice", "Single Duelist", "Ultra Single Duelist", "Damage Dealer", "Rare Collector", "Super Rare Collector", "PvP Novice", "PvP Duelist", "Card Collector", "Master of Destruction", "God of Destruction", "Summoner", "Creator God"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
