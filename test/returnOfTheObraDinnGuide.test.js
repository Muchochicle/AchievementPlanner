import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/return-of-the-obra-dinn.js";

test("the Return of the Obra Dinn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "return-of-the-obra-dinn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "return-of-the-obra-dinn");

});

test("the Return of the Obra Dinn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chapter Achievements",
            "Fate-Count Milestones",
            "Obra Done - The True Ending",
            "Captain Did It & Abandon Ship (Joke Achievements)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Return of the Obra Dinn achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/return-of-the-obra-dinn.json).
    const officialAchievementNames = [
        "Loose Cargo", "A Bitter Cold", "Murder", "The Calling", "Unholy Captives",
        "Soldiers of the Sea", "The Doom", "Escape", "The End",
        "Any 6", "Any 15", "Any 30", "Any 45",
        "Obra Done", "Captain Did It", "Abandon Ship"
    ];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("the guide never reveals an actual in-game fate/solution (spoiler-conscious)", () => {

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ").toLowerCase();

    // A loose but meaningful guard: this guide should never claim to
    // reveal *who* caused a given crew member's fate (the real puzzle
    // the game asks players to solve), only describe the achievements
    // themselves and the two joke endings' own mechanical requirements.
    assert.doesNotMatch(fullText, /killed by (?!captain robert witterel)/, "guide should not name a real killer/cause for any fate other than the joke Captain Did It achievement");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
