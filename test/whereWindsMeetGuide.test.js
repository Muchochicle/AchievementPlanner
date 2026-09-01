import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/where-winds-meet.js";

test("the Where Winds Meet guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "where-winds-meet-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "where-winds-meet");

});

test("the Where Winds Meet guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Qinghe: Story, Exploration & Secrets",
            "Gear, Martial Arts & Kaifeng/Hexi Campaigns",
            "Endgame, Palace & Final Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Where Winds Meet achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Hero is the Voice of the World", "Goose Slayer", "Victory in the Abyss", "Mighty Wolf Rider", "Speedrun in Granary", "Past Secrets Unsung", "Source of Still Shore", "Jinming Pool Secrets", "Savior of Kaifeng", "Broken Spear Victory", "Quick on the Uptake - Kaifeng", "Qinghe · Seeker of Melodies", "Quick on the Uptake - Qinghe", "Every Inch Covered - Kaifeng", "Horizon Seeker", "Peak of All Arts", "Paws on Point - Qinghe", "Feline Riddler - Kaifeng", "Life Goes to Dogs", "The Old Timer Got It", "Echoes Unbound", "Power of Four", "Perfect Harmony", "First Resonance", "Skill at Hand", "Healing Hands", "The Grand Strategist", "The Final Destiny - Qinghe", "Buddha's Afterglow", "The First Finding", "Voice of the Valiant", "Quirks of Fate - Qinghe", "Quirks of Fate - Kaifeng", "A Promise Fulfilled", "Hexi: Relentless Hunter", "Hexi: Paws on Point", "A Fish Out of Water", "Cat Fever", "Swift Annihilation", "Egg-cellent Luck", "Alone in Chang'an", "Hexi: Full Moon Rising", "A Squeak to Remember", "Reflections of Obsession", "The Unspeakable Victory", "All Hail Me", "The Grand Tour", "Strength of Character", "We're Cool Now", "The Real Treasure", "King for a Day", "A Heart in Ruins", "Heart of Gold", "Boop the Snoot", "No Mountain High Enough", "A Flawed Ascension", "High Spirits", "Sky's the Limit", "My Domain, My Rules", "Mountain of Skulls", "Undercover Boss"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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
