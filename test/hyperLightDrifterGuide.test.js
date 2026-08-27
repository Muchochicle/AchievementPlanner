import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hyper-light-drifter.js";

test("the Hyper Light Drifter guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hyper-light-drifter-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hyper-light-drifter");

});

test("the Hyper Light Drifter guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Collectibles & World Achievements",
            "Combat Techniques",
            "Boss Rush & One Shot",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Hyper Light Drifter achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/hyper-light-drifter.json).
    const officialAchievementNames = [
        "One Shot", "Nice Shot!", "Dummy", "Don't Give Up!", "Natural Leader",
        "Meditation", "Nothing's Easy, Now is it?", "Chain Dash Champion", "Diamonds Are Forever",
        "Shine Bright", "Walk-In Closet", "Hoarder", "The Dash Eternal", "Star Athlete",
        "Librarian", "Contender", "Bully", "Masochist", "Line Em' Up",
        "Armory", "Boss Rush Level 1", "Boss Rush Level 2", "Boss Rush Level 3"
    ];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
