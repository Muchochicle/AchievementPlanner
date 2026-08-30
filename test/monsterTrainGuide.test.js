import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/monster-train.js";

test("the Monster Train guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "monster-train-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "monster-train");

});

test("the Monster Train guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Clan Leveling & Covenant Mastery",
            "Runs, Bosses & Daily Challenges",
            "Ascension & Deck Size Challenges",
            "Speedkills & Special Wins",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 53-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /53 Steam achievements/);

});

test("every one of the 53 official Monster Train achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "S-imp-le!", "Early Survivor", "Level Up!", "Is That a Challenge?", "You Died!",
        "The Breaker of Horns", "Hellhorned Dominance", "A Semblance of Sentience", "Fully Awakened", "A Vicarious Remnant",
        "An Endless Flicker", "Guardian of the Styx", "Stygian Defender", "A Wisp Reanimated", "Penultimate",
        "Igniter of Pyre, Savior of Hell", "The Hellhorned", "The Awoken", "The Melting Remnant", "The Stygian Guard",
        "The Umbra", "Only Determination", "Angel Hunter", "Seraph the Defeated", "My Game, My Rules",
        "Upgraded Champion", "Trainee of the Pyre", "Apprentice of the Pyre", "Master of the Pyre", "Hell’s Finest",
        "All Brain, No Brawn", "Dante’s Inferno", "It’s a Secret...", "Thief! Stop!", "The Long Journey Begins",
        "The Devil is in the Details", "Hell Hath No Fury", "We Were Born of Monsters", "The Ragtag Bunch", "A Cramped Train",
        "Guided by Candles", "Into the Deep Sea", "Diabolical Automation", "Creators of Hell", "Buy Something, Won't You?",
        "Dead-alus", "Li-Fel-less", "Sans Seraph", "How to Deckbuilder", "On Your Own",
        "20/20 Vision", "Ta-ta Talos", "Archpocalypse",
    ];

    assert.strictEqual(officialAchievementNames.length, 53, "sanity check on this test's own reference list");

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
