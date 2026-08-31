import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pummel-party.js";

test("the Pummel Party guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pummel-party-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pummel-party");

});

test("the Pummel Party guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Board Game & Item Feats",
            "Minigame Challenges I",
            "Minigame Challenges II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Pummel Party achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Goodluck!", "The First of Many!", "So Shiny", "You Are The Winner", "A Daring Devil", "You Made a Mistake", "The Trifecta", "Extra Meat", "Minigame Master", "Unlucky", "Altitude Achiever", "Two Birds", "Dodge This", "Elementfull", "Lightning Rod", "Seeing Stars", "Road Warrior", "Thread The Needle", "Too Slow", "Rolling Master", "Chopped To Bits", "Starman", "Raider", "Fatal Slip", "Floor is Lava", "Hoarder", "Move Quick", "Steal From The Poor", "Light Foot", "Quick Reactions", "No Diamonds"];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
