import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-plague-tale-innocence.js";

test("the A Plague Tale: Innocence guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-plague-tale-innocence-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-plague-tale-innocence");

});

test("the A Plague Tale: Innocence guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Story: 17 Chapters",
            "Collectibles, Upgrades & Moments",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official A Plague Tale: Innocence achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The de Rune Legacy", "The Strangers", "Retribution", "The Apprentice", "The Ravens' Spoils", "Damaged Goods", "The Path Before Us", "Our Home", "In the Shadow of Ramparts", "The Way of Roses", "Alive", "All That Remains", "Penance", "Blood Ties", "Remembrance", "Coronation", "Knights!", "Herbalist", "Botanist", "Curiosities hunter", "Curiosities collector", "Big sister", "Not a toy anymore", "Handfull of pockets", "Alchemist", "Resource sharing", "More practice", "Feeding the hungry", "Found!", "Savior", "Tribute", "The hard way", "Merciful", "Captain Sidekick", "The Blacksmith"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
