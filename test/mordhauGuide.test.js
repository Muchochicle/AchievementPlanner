import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mordhau.js";

test("the MORDHAU guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mordhau-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mordhau");

});

test("the MORDHAU guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapon Kills",
            "Combat Feats",
            "Mayhem & Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official MORDHAU achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The ABCs", "Boxer", "I Know Kung Fu", "That’s No Ordinary Cold", "Poacher", "Clobbered", "Training Accident", "Ended Rightly", "Vlad the Impaler", "Virtuoso", "Living Sculpture", "Rock’n’Roll", "The Queen of Weapons", "Unstoppable", "Eagle Eye", "Lived to Tell the Tale", "Home Run", "Guts", "Pyromaniac", "Whack-A-Mole", "Put That Away", "Tough Nut to Crack", "Flyswatter", "Chambermaid", "Highlander", "Keeps Coming Off", "Yoink", "Just a Scratch", "Crybaby", "Justice from the Grave", "Stairway to Hell", "You’re Welcome", "Meat Grinder", "Coming Through", "This isn’t Sparta", "Burning Man", "Long List of Names", "Friend Indeed"];

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
