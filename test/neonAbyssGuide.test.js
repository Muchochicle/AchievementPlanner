import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/neon-abyss.js";

test("the Neon Abyss guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "neon-abyss-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "neon-abyss");

});

test("the Neon Abyss guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The God Bosses",
            "Eggs & Hatching",
            "Single-Run Challenges",
            "Lifetime Grinds & Oddities",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Neon Abyss achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/neon-abyss.json).
    const officialAchievementNames = [
        "First Blood", "Don't Panic", "Sovereign of Eggs", "Mom's Love", "Sad Eggs",
        "Mind Your Steps", "Grim Squad", "Hi Death!", "Demolition Expert", "Rugged Tenacity",
        "Shields Up!", "Abyss Veteran", "The Real Game", "First Light", "Natural Products",
        "Stay Clam", "Seek the Truth", "Shutdown", "Key Master", "Bug Squisher",
        "Burning Ground", "Acrobatic", "Piano Virtuoso", "Fishing Joy", "Dark trade",
        "Born Gambler", "I believe I can fly", "Sherlock", "Pro Gamer", "Ultimate Challenge",
        "Safety First", "I'm Fine", "Shopping Maniac", "Action Supremacist", "Saturday Night Fever"
    ];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
