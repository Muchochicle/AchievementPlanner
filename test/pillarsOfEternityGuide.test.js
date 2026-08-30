import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pillars-of-eternity.js";

test("the Pillars of Eternity guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pillars-of-eternity-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pillars-of-eternity");

});

test("the Pillars of Eternity guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Difficulty Modes",
            "Crafting, Combat & Playstyle Challenges",
            "Dungeon Delving & Base Completion",
            "The White March Part I",
            "The White March Part II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Pillars of Eternity achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Completed Act I", "Completed Act II", "Completed Act III", "Won the Game!!!", "Solo",
        "The Watcher With Eight Friends", "Zero Knockouts", "Expert", "Trial of Iron", "Path of the Damned",
        "Triple Crown", "Triple Crown SOLO", "Enchanter", "Chef", "Scribe",
        "Alchemist", "Trappy", "No Rest for the Pro", "Relative Pacifism", "Super Murderer",
        "5 Upgrades in Stronghold", "All Upgrades in Stronghold", "Make an Adventurer", "From the Clouds to the Depths", "First 5 Levels of Od Nua",
        "Middle 5 Levels of Od Nua", "Last 5 Levels of Od Nua", "Appease All of the Gods", "Explorer", "Disposition",
        "Kickstarter Backer", "Soulbinder", "Bounty Hunter", "Fish Guts and Murder", "Watcher at the Breach",
        "Herald of the Old Flame", "Terror of the White March", "The Siege of Crägholdt", "The Storied Adventurer", "The Heir of Caed Nua",
        "The Giftbearer", "Legendary Enchanter", "Among the Moss and Peat", "A Voice from the Deep", "Called to their Labor",
        "Frozen Crown", "Frozen Crown Solo", "The Ultimate",
    ];

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
