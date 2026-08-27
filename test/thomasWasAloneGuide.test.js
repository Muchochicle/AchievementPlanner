import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/thomas-was-alone.js";

test("the Thomas Was Alone guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "thomas-was-alone-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "thomas-was-alone");

});

test("the Thomas Was Alone guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chapter Progress",
            "Achievement Pickups",
            "Joke Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Thomas Was Alone achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/thomas-was-alone.json).
    const officialAchievementNames = [
        "Be There or Be...", "The Hero Thomas Needs", "I'm Rubber, You're Glue", "Derezzed", "Viridian",
        "Winter is Coming", "Tighten Up the Graphics on Level 3", "Electric Boogaloo", "Up, and to the Right", "Thomas Was Not Alone",
        "On the Hop", "Experienced Jumper", "Mario", "Achievement for One", "Gamification",
        "Double Act", "They Seek It Here, They Seek It There...", "Hidden Depths", "Not Exactly a Tesseract", "A Token of Love",
        "Shared Hobby", "Distractions", "Dwindling Capacity", "The Last Place You Look", "Darwinian Collection",
        "And In the Darkness, Find Them", "Achievements, All the Way Down", "The Breakfast Club", "A Selfless Act", "49 Shades of Grey",
        "Needs More Hats", "That's What You Gets", "The Final MacGuffin", "Huge Success", "Part of the Problem"
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
