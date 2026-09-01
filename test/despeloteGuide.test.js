import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/despelote.js";

test("the despelote guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "despelote-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "despelote");

});

test("the despelote guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Playing the Match",
            "Trick Shots & Misadventures",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official despelote achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Gol", "Si Se Puede", "Goleada", "Invicto", "Listo", "Golazo", "El Gol Del Tin", "Gol De Arquero", "Auto Gol", "Jugamos Como", "Despelotini"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
