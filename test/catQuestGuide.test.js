import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cat-quest.js";

test("the Cat Quest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cat-quest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cat-quest");

});

test("the Cat Quest guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion",
            "Mew Game Modifiers",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Cat Quest achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Super Catventurer", "Dungeon Master", "Felingard Loremaster", "Saviour of the Cats", "Power of the Arcane", "Fashionista Lion", "Furry Armored", "Level One", "Naked Cat", "Nine Lives", "Stronger Enemies", "The Old Master"];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
