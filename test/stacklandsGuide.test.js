import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stacklands.js";

test("the Stacklands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stacklands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stacklands");

});

test("the Stacklands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Village & Mainland",
            "Economy & The Island",
            "Fishing, Combat & Curiosities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Stacklands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Berry!", "$$$", "My Crib", "Good Company", "Babby", "Packed", "Goblet Cave", "The End?", "Oh shoot, a rat!", "Skelet", "Hearty Meal", "Best Friend", "Merch", "Rich", "Longevity", "Marketing", "Row, row, row your boat", "The Seven Seas", "Chilling on the beach", "A true adventurer", "Tentacle Hater", "Another one?!", "Tasty Beverage", "A bit too much", "Fishy", "Friend with an eye patch", "Sour fish, what's not to like?", "Sustainable", "OoOoOoOoOo", "Time for Revenge", "Magic Number 6", "Bad Witch", "Getting Stronger", "Ranged!", "Adorable Villager", "Dripped Out"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
