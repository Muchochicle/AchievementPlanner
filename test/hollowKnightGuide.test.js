import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hollow-knight.js";

test("the Hollow Knight guide identifies itself correctly as Hollow Knight's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hollow-knight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hollow-knight");

});

test("the Hollow Knight guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Bosses & the Dreamers",
            "Charms, Masks, Vessels & Exploration",
            "The Colosseum & Godhome's Hardest Challenges",
            "Missable NPC Storylines - Read Before You Choose",
            "The Four Endings",
            "Speedrun & Steel Soul Challenges"
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Hollow Knight achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (src/data/games/hollow-knight.json).
    const officialAchievementNames = [
        "Charmed", "Protected", "Soulful", "Falsehood", "Test of Resolve", "Respect", "Honour",
        "Illumination", "Release", "Enchanted", "Masked", "Worldsoul", "Blessed", "Attunement",
        "Awakening", "Ascension", "Strength", "Proof of Resolve", "Peace", "Grubfriend",
        "Metamorphosis", "Cartographer", "Connection", "Hope", "Teacher", "Watcher", "Beast",
        "Execution", "Warrior", "Conqueror", "Fool", "Obsession", "Rivalry", "Neglect", "Purity",
        "Happy Couple", "Solace", "Witness", "Passing of the Age", "Dark Romance", "Memory",
        "Grand Performance", "Ritual", "Banishment", "Mortality", "Void", "The Hollow Knight",
        "Sealed Siblings", "Dream No More", "Embrace the Void", "Brotherhood", "Inspiration",
        "Focus", "Soul & Shade", "Speedrun 1", "Speedrun 2", "Completion", "Speed Completion",
        "Steel Soul", "Steel Heart", "Keen Hunter", "True Hunter", "Pure Completion"
    ];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("the missable NPC storylines section flags Purity/Happy Couple and Neglect/Rivalry as mutually exclusive choices", () => {

    const section = GUIDE.sections.find(s => s.heading === "Missable NPC Storylines - Read Before You Choose");
    const body = section.body.join(" ");

    assert.match(body, /mutually exclusive/);

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
