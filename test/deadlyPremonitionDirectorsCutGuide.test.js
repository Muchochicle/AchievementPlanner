import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deadly-premonition-directors-cut.js";

test("the Deadly Premonition: The Director's Cut guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deadly-premonition-directors-cut-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deadly-premonition-directors-cut");

});

test("the Deadly Premonition: The Director's Cut guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Episodes",
            "Side Quests I",
            "Side Quests II & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Deadly Premonition: The Director's Cut achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["All Achievements Unlocked", "Prologue CLEARED", "Episode 1 CLEARED", "Episode 2 (part 1) CLEARED", "Episode 2 (part 2) CLEARED", "Episode 3 CLEARED", "Episode 4 CLEARED", "Episode 5 CLEARED", "Episode 6 CLEARED", "Episode 7 CLEARED", "Delivery Man Q", "Guardian of the Art Gallery", "Memories of Anna", "Lost Arnold", "Nameless Flower", "Nice Try Cooking", "Another Nice Try Cooking", "Memorable Cooking", "Unwanted Customer", "Periodic Riddle", "Snack for Willie", "Someone in the Forest", "Legendary Tabatha", "Map to Psychic Spot A", "Map to Psychic Spot B", "Map to Psychic Spot C", "The Bond Between Men", "Part Time Job 1", "Part Time Job 2", "Part Time Job 3", "The Legendary Guitar", "Greenvale Trivia", "Incomplete Treasure", "Nick's Letter", "Big Bag", "A Return to Better Things", "Where's the Dress?", "Anna's Dairy", "Engagement Ring", "Top Rank", "Pure and Beautiful", "Medical Studies", "Special Service", "Benjamin Franklin", "Beginner Collector", "Amateur Collector", "Normal Collector", "Great Collector", "Top Collector", "Low Gear Parts", "High Gear Parts", "Gas Tank Parts", "York's Car", "Cold Pot 1", "Cold Pot 2", "Cold Pot 3", "Cold Pot 4", "Cold Pot 5", "7 Bones", "Ghost House Treasure"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
