import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/final-fantasy-vii.js";

test("the FINAL FANTASY VII guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "final-fantasy-vii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "final-fantasy-vii");

});

test("the FINAL FANTASY VII guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story, Progression & Ultimate Rewards",
            "First Battles & First Limit Breaks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official FINAL FANTASY VII achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["End of Part I", "End of Part II", "End of Game", "Master of Gil", "Top Level", "Omnislash", "Catastrophe", "Final Heaven", "Great Gospel", "Cosmo Memory", "All Creation", "Slots", "Chaos", "Highwind", "Knights of the Round", "Master Materia", "Bahamut Zero", "Ultimate Weapon", "Diamond Weapon", "Ruby Weapon", "Emerald Weapon", "Vincent", "Yuffie", "Materia Overlord", "Gold Chocobo", "Won 1st battle", "Braver", "Big Shot", "Galian Beast", "Healing Wind", "Boost Jump", "Beat Rush", "Greased Lightning", "Sled Fang", "Dice", "Battle Square"];

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
