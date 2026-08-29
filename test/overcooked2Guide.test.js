import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/overcooked-2.js";

test("the Overcooked! 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "overcooked-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "overcooked-2");

});

test("the Overcooked! 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Campaign",
            "General & Party Modes",
            "DLC Packs",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Overcooked! 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Unbread", "The Secret Ingredient", "A Grand Dining Experience", "Sous Chef", "Head Chef",
        "Executive Chef", "The Spice of Life", "Clockwork Kitchen", "Hot Pot Shot", "Battered!",
        "Kitchen Porter", "Commis Chef", "Chef de Partie", "Too Many Cooks", "If You Can't Stand the Heat",
        "And Suet Begins", "Dinner Party Posse", "It's A Cook-Off!", "Toss Lightly", "I Ain't No Butterfingers",
        "Bangers And Trash", "Dishwasher", "It's Bean Emotional", "Jelly-Porter", "Get To The Chopper",
        "Switch It Up", "Surf 'n' Turf", "You Got Served", "Smoothie Criminal", "Skewer Rat",
        "Carte Blanched", "Soaker Cola", "Heat and Greet", "Cooked Off!", "Full Mashings",
        "S'more Than a Feeling", "The Greasy Spoon", "Specials Board", "Tree Hater", "Backpack Hijack",
        "You Shallot Pass!", "Star Braiser", "Get Roasted", "Pie Me a River", "Wrap Artist",
        "Coal of Duty", "Heads Will Roll", "Carnival of Chaos", "Fast Foodie", "Mealer Dealer",
        "The Breaded Lady", "Big Topping", "Cannoned Goods", "Condiment Connoisseur",
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
