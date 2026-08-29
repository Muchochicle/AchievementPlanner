import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/necesse.js";

test("the Necesse guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "necesse-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "necesse");

});

test("the Necesse guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses & Progression",
            "Settlements & Exploration",
            "Crafting & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 51-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /51 Steam achievements/);

});

test("every one of the 51 official Necesse achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Spelunker", "First of Many", "Companion For Adventure", "Do It Yourself", "Instant Nap",
        "Artificer", "Complete Collector", "Tourist", "More Than A Hobby", "Marathon Runner",
        "Time Well Spent", "Magical Drop", "Hoarder", "Self Proclaimed", "Double Catch",
        "Complete Host", "Getting Hot", "My Jam", "Cloud Nine", "One Tapped",
        "Too Easy", "Headhunter", "Rematch", "Washed Up", "Grave Digger",
        "Watch Me!", "Demolition Expert", "Take it to the next level", "Master of Sun and Moon", "Teamwork",
        "Empowered", "Feeling Stylish", "Safety Last", "Wardrobe on the go!", "Hot Tub",
        "Adventure Begins!", "Dodge This!", "Secret Service", "Home Alone", "Crystallized",
        "You and what Army?", "Me and this Army!", "That's a lot of dust!", "Overpowered", "Settling Down",
        "Expansionist", "Restored Reality", "Cloud Ten", "Rich Character", "True Love",
        "Speeding Ticket",
    ];

    assert.strictEqual(officialAchievementNames.length, 51, "sanity check on this test's own reference list");

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
