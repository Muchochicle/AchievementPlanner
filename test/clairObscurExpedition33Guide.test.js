import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/clair-obscur-expedition-33.js";

test("the Clair Obscur: Expedition 33 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "clair-obscur-expedition-33-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "clair-obscur-expedition-33");

});

test("the Clair Obscur: Expedition 33 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story: Across the Continent",
            "World Exploration & Superbosses",
            "Progression & Combat Mastery",
            "Records, Encounters & the Legend",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Clair Obscur: Expedition 33 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Lumière", "Spring Meadows", "Flying Waters", "Ancient Sanctuary", "Gestral Village", "Esquie's Nest", "Stone Wave Cliffs", "Forgotten Battlefield", "Monoco's Station", "Old Lumière", "First Axon", "Second Axon", "Monolith", "Paintress", "Back to Lumière", "The End", "Plane, Train, and Submarine", "Follow The Trail", "Aiding the Enemy", "Peace At Last", "Gestral Games", "Clea", "“Endless”", "Lost Gestrals", "À On", "Sprong", "Noir et Blanc", "Sciel", "Monoco", "Maelle", "Lune", "Esquie", "Weapon Upgrade", "Weapon Mastery", "Lumina", "Expeditioner", "Trailbreaker", "Survivor", "Overcharge", "Perfect Flow", "Synergy", "Maximisation", "Perfection", "Wheel Control", "Carreau Parfait", "Feet Collection", "Expedition 33", "Chroma Proficiency", "Connoisseur", "Paint Cage", "Time to Spill Some Ink", "Professional", "Curious", "Legend", "A Peculiar Encounter"];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
