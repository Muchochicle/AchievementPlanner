import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/slay-the-spire.js";

test("the Slay the Spire guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "slay-the-spire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "slay-the-spire");

});

test("the Slay the Spire guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat Stat Checks",
            "Every Named Boss",
            "Beating the Game with Each Character",
            "Self-Imposed Challenge Runs",
            "Ascension Mode",
            "The Secret Corrupt Heart Ending",
            "Daily Climb & Eternal One",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Slay the Spire achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/slay-the-spire.json).
    const officialAchievementNames = [
        "Shrug It Off", "Purity", "Come At Me", "The Pact", "Adrenaline",
        "Powerful", "Jaxxed", "Impervious", "Barricaded", "Catalyst",
        "Plague", "Ninja", "Infinity", "You Are Nothing", "Perfect",
        "The Guardian", "The Ghost", "The Boss", "The Automaton", "The Collector",
        "The Champion", "The Crow", "The Shapes", "The Time Eater", "Ruby",
        "Emerald", "Who Needs Relics?", "Speed Climber", "Minimalist", "Ooh Donut!",
        "Ascend 0", "Ascend 10", "Sapphire", "Common Sense", "Focused",
        "Neon", "My Lucky Day", "The Transient", "Ascend 20", "Ruby+",
        "Emerald+", "Sapphire+", "The End?", "Eternal One", "Amethyst",
        "Amethyst+"
    ];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
