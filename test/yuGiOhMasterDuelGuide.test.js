import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yu-gi-oh-master-duel.js";

test("the Yu-Gi-Oh! Master Duel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yu-gi-oh-master-duel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yu-gi-oh-master-duel");

});

test("the Yu-Gi-Oh! Master Duel guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Duel Milestones",
            "Advanced Feats & Rank",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Yu-Gi-Oh! Master Duel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to MASTER DUEL", "Come Forth...", "Master of Special Summoning", "Chain Blazer", "Let's Duel!", "Beginner No More", "Master of Spells ＆ Traps", "Ultra Burst", "Necromancer", "Burn It All", "To Greater Heights"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
