import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/papers-please.js";

test("the Papers, Please guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "papers-please-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "papers-please");

});

test("the Papers, Please guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Seven Hidden Tokens",
            "The Five Endings",
            "Worker's Best",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Papers, Please achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/papers-please.json).
    const officialAchievementNames = [
        "Antegria Token", "Republia Token", "Impor Token", "Obristan Token", "Kolechia Token",
        "Arstotzka Token", "United Federation Token", "Too Honest", "Hired Rifle", "Member of the Order",
        "Snowier Pastures", "Glory to Arstotzka", "Worker's Best"
    ];

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
