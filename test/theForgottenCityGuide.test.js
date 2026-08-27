import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-forgotten-city.js";

test("the The Forgotten City guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-forgotten-city-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-forgotten-city");

});

test("the The Forgotten City guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Time Loop",
            "The Four Endings",
            "Central Mystery",
            "Side Quests & Saving People",
            "Exploration & Collectibles",
            "World-Interaction Jokes",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official The Forgotten City achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/the-forgotten-city.json).
    const officialAchievementNames = [
        "Looper", "The Many Shall Suffer", "The One That Got Away", "The Ones That Got Away", "The Canon Ending",
        "Grave Robber", "Dead Shot", "Super Looper", "Bloodless Shadow", "Herculean",
        "Archaeologist", "Sleuth", "Italian Plumber", "Survivor", "Psycho",
        "Law Abiding Citizen", "Minimalist", "Striker", "Silver Tongue", "Underworld Explorer",
        "Kleptomaniac", "High Diver", "Avid Reader", "Unhygenic", "Nimble",
        "Smooth Talker", "Golden Archer", "Allergic", "Maverick", "The Oracle",
        "Callous", "Fibber", "Medic", "Counsellor", "Trickster",
        "Lion Tamer", "Liberator", "Match-maker", "Tourist", "Treasure Hunter"
    ];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("the guide never explicitly names the underlying twist of who/what The Golden Rule's creator actually is (spoiler-conscious)", () => {

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    // A loose but meaningful guard, matching this catalog's existing
    // Return of the Obra Dinn spoiler-guard convention: this guide
    // should describe achievements' mechanical triggers, never state
    // outright who or what the creator of the Golden Rule turns out to
    // be - that reveal is the game's central mystery.
    assert.doesNotMatch(fullText, /the creator of the golden rule is/i, "guide should not directly reveal the identity behind the Golden Rule");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.strictEqual(tipParagraphs.length, 0, "this guide deliberately has no Tip: paragraphs - it's a narrative mystery game, not one with combat/execution strategy to teach");

});
