import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/loop-hero.js";

test("the Loop Hero guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "loop-hero-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "loop-hero");

});

test("the Loop Hero guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Expeditions, Death & Classes",
            "Combat & Enemies",
            "Resources & Alchemy",
            "Camp Building & Crafting",
            "Encyclopedia, Map & Cards",
            "The Four Chapter Bosses",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Loop Hero achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/loop-hero.json).
    const officialAchievementNames = [
        "New beginning", "Practically a job", "Go-getter", "First time?", "Groundhog day",
        "Trickster", "Grandma says hello", "First blood", "Lost count", "Trophy collection",
        "Part of the world", "Make a puzzle", "Can't get it back", "Foundation stone", "Hole in memory",
        "Always been here?", "Small town", "What's not tied down", "Collector", "From dust and sticks",
        "Handyman", "Easier than making", "Barbarian", "Not gold...", "Still not gold...",
        "Alchemist's apprentice", "Don't breathe it in", "Scholar", "Observer", "Book worm",
        "Small talker", "Cardsharp", "As anew", "See the world and not die", "Tripped",
        "Bartender! Refill!", "Around the world", "Undying", "Crunchy company", "Fence",
        "In time for lunch", "Broken geography", "Just starting out", "Punching bag", "Glass Queen",
        "Faith alone is not enough", "For whom the horn tolls...", "Hunter's Nightmare", "Memory pieces", "Godslayer"
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
