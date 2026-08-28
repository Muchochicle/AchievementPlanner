import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/god-of-war.js";

test("the God of War guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "god-of-war-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "god-of-war");

});

test("the God of War guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story",
            "Upgrades & Gear",
            "Exploration & Collectibles",
            "Combat Challenges",
            "Completion",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official God of War achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/god-of-war.json).
    const officialAchievementNames = [
        "Father and Son", "The Journey Begins", "A New Friend", "Feels Like Home", "Dragon Slayer",
        "Troubling Consequences", "Hello, Old Friend", "Promise Fulfilled", "Round 2", "Past Haunts",
        "Twilight Beckons", "Last Wish", "Beneath the Surface", "Death Happened Here", "Trilingual",
        "Dwarven Ingenuity", "Nice Moves", "Iðunn’s Orchard", "Quick Tempered", "Best Dressed",
        "Enchanted", "All Will Fall", "Dangerous Skies", "Like Oil and Water", "Curator",
        "Allfather Blinded", "The Best Moves", "Worthy", "Why Fight It?", "Path of the Zealot",
        "Primordial", "Unfinished Business", "Treasure Hunter", "The Truth", "Fire and Brimstone",
        "Darkness and Fog", "Chooser of the Slain"
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
