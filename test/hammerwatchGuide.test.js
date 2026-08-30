import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hammerwatch.js";

test("the Hammerwatch guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hammerwatch-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hammerwatch");

});

test("the Hammerwatch guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Castle Hammerwatch: Bosses & Milestones",
            "Temple of the Sun & Easter Eggs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Hammerwatch achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Queen", "The Knight", "The Lich", "The Dragon", "The Hard Queen", "The Hard Knight", "The Hard Lich", "The Hard Dragon", "Harvesting", "The Heist", "Earth & Void", "Doomed Space Marine", "Affluent", "Rich", "Millionaire", "Mass murder", "Massacre", "Genocide", "Survivalist", "Crystal Lich", "Hard Crystal Lich", "Midway", "The Grisly Combination", "Worse than Ghost and Goblins", "Combo Killer!", "Combo Master!", "The Dune Sharks", "The Frost Sorcerer", "The Sun Guardian", "The Hard Dune Sharks", "The Hard Frost Sorcerer", "The Hard Sun Guardian", "Temple of the Sun", "Full House", "Do it like Jones", "Serious Pickup", "Desert Zone...", "Pyramid of Fear"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
