import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-planet-crafter.js";

test("the The Planet Crafter guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-planet-crafter-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-planet-crafter");

});

test("the The Planet Crafter guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Terraformation Stages & Rare Ores",
            "Buildings, Locations & Events",
            "Automation, Trading & Endings",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official The Planet Crafter achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "New Sky", "Clouds in the sky", "Life from the sky", "Liquid water", "So much water",
        "Greenery", "It's growing", "The Forests", "Shelter", "Are we leaving?",
        "Biomass", "Flowers on hostile planet", "Jungle", "Vegetables in space", "What could go wrong?",
        "Genetic Engineer", "The Rare Red Ore", "The Blue Rare Ore", "The White Rare Ore", "A Door ?",
        "Golden flower", "Fusion Energy", "The Pink Rare Ore", "Vivarium", "Farming on Mars",
        "Automation", "Mushrooms river", "Not the face!", "Ancient paradise", "Breath",
        "Bubbles under water", "Logistics", "The factory must grow", "Space Trading", "Space frogs",
        "Space smuggler", "Space pirate", "Space trader", "Space magnate", "Cookie factory",
        "New life forms", "Distant Wrecks", "Space zoo", "Barely surviving", "Getting comfy",
        "Unstoppable", "Subjection", "Subservience", "Subversion", "Rainbow caves",
        "Jump in lava", "Evolution", "Biosphere", "The Yellow Rare Ore", "The Cenote",
    ];

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
