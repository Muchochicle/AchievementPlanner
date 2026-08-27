import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/transistor.js";

test("the Transistor guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "transistor-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "transistor");

});

test("the Transistor guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Boss Confrontations",
            "The Sandbox",
            "Unlocking Everything",
            "Combat Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Transistor achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/transistor.json).
    const officialAchievementNames = [
        "Drive()", "Reisz()", "Spine()", "Kendrell()", "Bracket()",
        "Sandbox()", "Speed()", "Stability()", "Planning()", "Performance()",
        "Agency()", "Anything()", "Everything()", "Contest()", "Bye()",
        "Goodbye()", "Bet()", "Dare()", "Risk()", "Search()",
        "Find()", "Reveal()", "Process()", "News()", "Function()",
        "User()", "Memory()", "Self()", "Align()", "Focus()",
        "One()", "Limiter()", "Stack()"
    ];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
