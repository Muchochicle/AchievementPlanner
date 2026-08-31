import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/orcs-must-die.js";

test("the Orcs Must Die! guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "orcs-must-die-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "orcs-must-die");

});

test("the Orcs Must Die! guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Kill Totals",
            "Kill Streaks & Difficulty",
            "Trap & Trick Kills",
            "Nightmare & Restrictions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Orcs Must Die! achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Dead Orc = Good Orc", "Droppin' Ten Large", "Member: 30k Club", "Defender", "Keepmaster", "Master War Mage", "Ultimate War Mage", "Perfect 10!", "Natural 20!", "What a Mess!", "Who Wants Some?!", "Tunnel Vision", "No Traps for You!", "Skin of your Teeth", "Who Wants Pancakes?", "Pow! Pow!", "Giblet Storm!", "Lights Out!", "Great Balls of Fire!", "Tenderized!", "In your Face!", "SG1", "Ogre Bisque", "Legendary Defender", "Legendary Keepmaster", "Legendary War Mage", "Deck the Halls"];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
