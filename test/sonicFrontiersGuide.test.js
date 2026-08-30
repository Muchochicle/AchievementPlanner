import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sonic-frontiers.js";

test("the Sonic Frontiers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sonic-frontiers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sonic-frontiers");

});

test("the Sonic Frontiers guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Island Completion",
            "Skills, Stats & Combat",
            "Portals, Cyber Space & Fishing",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Sonic Frontiers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Journey Begins", "The Beginning", "Ancient Defiance", "Futile Resistance", "Hope Across Ages", "A Land at Peace", "Kronos Island Expert", "Ares Island Expert", "Chaos Island Expert", "Ouranos Island Expert", "Expert Historian", "Kronos Island Explorer", "Ares Island Explorer", "Chaos Island Explorer", "Ouranos Island Explorer", "Unrivaled Aptitude", "Speed Demon", "Combo Convert", "Combo Crackerjack", "Koco Leader", "Elder Koco Encounter", "Hermit Koco Encounter", "Herculean Hedgehog", "Hardened Hedgehog", "Hearty Hedgehog", "Hypersonic Hedgehog", "Easy Prey", "Unknown Threat", "Threats Identified", "Swath of Destruction", "Celestial Rain", "Kronos Island Memories", "Ares Island Memories", "Chaos Island Memories", "Ouranos Island Memories", "Perfect Run", "Superior Ranking", "Big Encounter", "Ticket to Tranquility", "Angler's Club"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
