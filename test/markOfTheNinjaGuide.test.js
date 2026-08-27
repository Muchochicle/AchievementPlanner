import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mark-of-the-ninja.js";

test("the Mark of the Ninja guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mark-of-the-ninja-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mark-of-the-ninja");

});

test("the Mark of the Ninja guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Completionist Challenges",
            "Stealth & Non-Lethal Playstyles",
            "Combat & Terror Techniques",
            "Special Edition & Developer Commentary",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Mark of the Ninja achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/mark-of-the-ninja.json).
    const officialAchievementNames = [
        "Hisomu's Heir", "Awakened", "The Mercenary", "Karajan's Fate", "Escape",
        "Fated", "True Ninja", "Descendent of Iga", "Perfection", "Haiku",
        "Marked", "Mercy", "Masterful", "Ghost", "Of The Mind",
        "Oni", "Manipulator", "Trickster", "Stealth Assassin", "Crimson Haiku",
        "Inner Heaven", "The Dark Project", "Things Better Left Unseen", "Tactical Espionage Action", "No One Lives Forever",
        "Deadly Shadows", "The Worst Allies", "Unstable Footing", "Gallows", "Snare",
        "Days Long Past", "The Humble Moth", "Behind the Curtain", "Back to Bed With You", "What Could Have Been",
        "Cordyceps", "Well, I Think It's Interesting", "Couldn't Do That Before"
    ];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
