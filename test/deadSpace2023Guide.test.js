import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dead-space-2023.js";

test("the Dead Space (2023) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dead-space-2023-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dead-space-2023");

});

test("the Dead Space (2023) guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Difficulty & Weapons",
            "Collectibles & Combat Feats",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 47-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /47 Steam achievements/);

});

test("every one of the 47 official Dead Space (2023) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Welcome Aboard", "Lab Rat", "All Systems Go", "Cannon Fodder", "True Believer",
        "Greenhouse Effect", "S.O.S.", "Strange Transmissions", "Wreckage", "Keeper of the Faith",
        "Betrayed", "Exodus", "Final Regeneration", "Whole Again", "Set A Benchmark",
        "Untouchable", "Trusted Contractor", "Full Arsenal", "Built To Order", "Autofire",
        "Live with the Hot Ones", "A Cut Above", "Pusher", "Eviscerator", "Full Contact",
        "One Gun", "Pack Rat", "Story Teller", "Legend Teller", "Merchant",
        "Marksman", "Surgeon", "Wishbone", "Raise The Stakes", "Freeze",
        "Backbreaker", "Maxed Out", "Front Toward Enemy", "Z-Baller", "There's Always Peng!",
        "Full Clearance", "Brute Force", "Exterminator", "Get Off My Ship!", "Mindless Prey",
        "Marked", "Reunion",
    ];

    assert.strictEqual(officialAchievementNames.length, 47, "sanity check on this test's own reference list");

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
