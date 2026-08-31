import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/orcs-must-die-3.js";

test("the Orcs Must Die! 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "orcs-must-die-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "orcs-must-die-3");

});

test("the Orcs Must Die! 3 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Progress",
            "Endless, Gear & Weekly",
            "Scramble & Combo Scoring",
            "Cold as Eyes & Tipping the Scales DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Orcs Must Die! 3 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["War Mage", "Collector", "Assassin", "Moneybags", "Valedictorian", "Rift Lord", "Upgraded", "War Lord", "Tinkerer", "Fair Trade", "Survivor", "Well Equipped", "First Flight", "The Landing", "Top Floor", "Warpath", "Can't Stop Me Now", "Challenge Accepted", "Cracking Eggs", "Making an Omelet", "Scrambled Eggs", "Combo Apprentice", "Combo War Mage", "Combo Rift Lord", "Millionaire", "Rifts Protected", "Ice Breaker", "Poke in the Eye", "Golden Monocle", "The Eyes Have It", "Close Their Eyes", "Willing to Sacrifice", "Perfect Balance", "Scale Necklace", "Shedding Skin", "Heads and Tails", "Collecting Tails", "Thumb on the Scale"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
