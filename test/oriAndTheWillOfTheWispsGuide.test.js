import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ori-and-the-will-of-the-wisps.js";

test("the Ori and the Will of the Wisps guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ori-and-the-will-of-the-wisps-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ori-and-the-will-of-the-wisps");

});

test("the Ori and the Will of the Wisps guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boss Progression",
            "Abilities & Shards",
            "Collectibles & Side Content",
            "Combat Tricks",
            "No-Damage & Speed Boss Variants",
            "Full-Run Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Ori and the Will of the Wisps achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/ori-and-the-will-of-the-wisps.json).
    const officialAchievementNames = [
        "Close Call", "Take the Bug by the Horn", "Laser Brain", "Home Sweet Home", "Let the Waters Flow",
        "Icy Escape", "Dark Triumph", "Guardian's Rest", "Quick Sand", "Stone Cold",
        "Destiny", "Hardcore Fan", "Tools of the Trade", "Mad Skills", "Fully Slotted",
        "Shard Hunter", "Shard Specialist", "Powerful", "Cartographer's Protégé", "Shrine Bright",
        "Lost and Found", "Mark of the Trader", "Completionist", "Fixer Upper", "Speed Demon",
        "Healthy", "Untouchable", "Timely Demise", "Juggling Act", "Bring it On",
        "High and Dry", "Damage Spike", "Did I Do That?", "Shardless", "Lightless",
        "Look at the Time", "Immortal"
    ];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
