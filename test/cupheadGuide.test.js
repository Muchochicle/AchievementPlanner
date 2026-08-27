import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cuphead.js";

test("the Cuphead guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cuphead-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cuphead");

});

test("the Cuphead guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress",
            "Ranks & Rare Runs",
            "Combat Techniques & Collectibles",
            "Ms. Chalice & the DLC's New Toys",
            "The DLC's Secret Devil Fight & Paladin",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Cuphead achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/cuphead.json).
    const officialAchievementNames = [
        "Taking Names", "A Walk in the Park", "A Day at the Fair", "A Trip Downtown", "Casino Night",
        "Swing You Sinner", "Selling Out", "Put On a Show", "Sheriff", "Boss",
        "Mayor", "King", "Souls Saved", "Beat The Devil At His Own Game", "Butter-and-Egg Man",
        "Cutting Corners", "Ceramic Strike", "Porcelain Power", "Bravo Zulu P-26", "Magician Lord",
        "Perfect Run", "Coffers Full", "Bouncing Ball", "Parry Persistance", "Parry Performance",
        "Rolling Sixes", "High Roller", "Pacifist", "A Vacation in the Wilds", "Ranger",
        "Alive and Kicking", "Decadent", "The Golden Touch", "The Latest Sensation", "Checkmate",
        "A King's Admiration", "Compliments to the Chef", "Cooked to Perfection", "The High Hat", "Hearty",
        "A Horrible Night To Have a Curse", "Paladin"
    ];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
