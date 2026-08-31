import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-revelations.js";

test("the Assassin's Creed Revelations guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-revelations-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-revelations");

});

test("the Assassin's Creed Revelations guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Sequences",
            "Challenges & Assassin Feats",
            "Collectibles & Combat",
            "The Lost Archive",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Assassin's Creed Revelations achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Early Years", "Best Served Cold", "The Reluctant Assassin", "Istanbul and Constantinople", "Escape To New York", "Seal the Deal", "The Prince", "The Plot Thickens", "Successes and Failures", "The Rotten Apple", "Old Boss, New Boss", "Priorities", "Are You Desmond Miles?", "Revelations", "Fond Memories", "Holy Wisdom", "Capped", "Pyromaniac", "Armchair General", "Iron Curtain", "Spider Assassin", "A Friend Indeed", "Tax Evasion", "The Mentor", "Lightning Strikes", "Overkiller", "Show-Off", "Sage", "Fast Fingers", "Mosh Pit", "Mouse Trap", "Craft Maniac", "My Protégé", "Almost flying", "Silent but deadly", "I can see you", "Monster's dance", "Bully", "Part of the Creed", "Jump they say", "Enter the Animus", "Meet your maker", "The Loop", "Find all Pieces", "Breaking the Loop", "Save yourself", "Impress Warren Vidic", "Cross Styx without dying"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
