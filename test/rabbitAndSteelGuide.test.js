import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rabbit-and-steel.js";

test("the Rabbit and Steel guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rabbit-and-steel-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rabbit-and-steel");

});

test("the Rabbit and Steel guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kingdom Clears & Trinkets",
            "Stories, Music & DLC Clears",
            "DLC Areas, Trinkets & Palettes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Rabbit and Steel achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Normal Clear", "Hard Clear", "Lunar Clear", "The Scholar's Nest (Normal)", "The Scholar's Nest (Hard)", "The Scholar's Nest (Lunar)", "The King's Arsenal (Normal)", "The King's Arsenal (Hard)", "The King's Arsenal (Lunar)", "The Red Darkhouse (Normal)", "The Red Darkhouse (Hard)", "The Red Darkhouse (Lunar)", "The Churchmouse Streets (Normal)", "The Churchmouse Streets (Hard)", "The Churchmouse Streets (Lunar)", "The Emerald Lakeside (Normal)", "The Emerald Lakeside (Hard)", "The Emerald Lakeside (Lunar)", "10 Trinkets", "20 Trinkets", "30 Trinkets", "40 Trinkets", "The Moonlight Floofball", "Sisterly Love", "A Pack of Equals", "Regret", "The Strongest Mouse I Know", "A Wonderful Collab", "Forget This Ambition", "Moonlit Melodies", "Seeing Red", "Rabbit Rabbit Rabbit", "Normal Clear (Extra)", "Hard Clear (Extra)", "Lunar Clear (Extra)", "Darkhouse Depths (Normal)", "Darkhouse Depths (Hard)", "Darkhouse Depths (Lunar)", "The Subterra Sanctum (Normal)", "The Subterra Sanctum (Hard)", "The Subterra Sanctum (Lunar)", "Atelier Aurum (Normal)", "Atelier Aurum (Hard)", "Atelier Aurum (Lunar)", "50 Trinkets", "60 Trinkets", "70 Trinkets", "The Spellbound Floofball", "I Hope You Found a Friend", "Music For the Heart", "Rise to the Challenge", "A True Challenger", "Master of Many", "Dedicated Spellbreaker"];

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
