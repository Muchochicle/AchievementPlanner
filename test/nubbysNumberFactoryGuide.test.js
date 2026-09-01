import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nubbys-number-factory.js";

test("the Nubby's Number Factory guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nubbys-number-factory-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nubbys-number-factory");

});

test("the Nubby's Number Factory guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks & Collections",
            "Trials & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Nubby's Number Factory achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Big One", "Item Skin Maniac", "Nubby Skin Maniac", "Tons of Tonys", "Attention Span Issue", "Nubby Adept", "Nubby Professional", "Nubby Expert", "Nubby Prodigy", "Nubmaster", "Number Factory CEO", "Tony Slayer", "Dopamine Depletion"];

    assert.strictEqual(officialAchievementNames.length, 13, "sanity check on this test's own reference list");

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
