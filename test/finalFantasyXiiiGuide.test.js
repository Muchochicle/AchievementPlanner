import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-xiii.js";

test("the FINAL FANTASY XIII guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-xiii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-xiii");

});

test("the FINAL FANTASY XIII guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: The Thirteen Instruments",
            "Gran Pulse Missions & Exploration",
            "Battle Roles & Endgame Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official FINAL FANTASY XIII achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Instrument of Fate", "Instrument of Dissent", "Instrument of Tragedy", "Instrument of Flight", "Instrument of Vengeance", "Instrument of Survival", "Instrument of Rebellion", "Instrument of Shame", "Instrument of Wrath", "Instrument of Truth", "Instrument of Hope", "Instrument of Faith", "Instrument of Change", "Pulsian Pioneer", "Gysahl Wreath", "Kelger's Cup", "Xezat's Chalice", "Exorcist", "Floraphobe", "Natural Selector", "Dorgann's Trophy", "Galuf's Grail", "L'Cie Paragon", "Commando's Seal", "Ravager's Seal", "Sentinel's Seal", "Saboteur's Seal", "Synergist's Seal", "Medic's Seal", "Limit Breaker", "Adamant Will", "Master's Seal", "Treasure Hunter", "Loremaster", "Superstar"];

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
