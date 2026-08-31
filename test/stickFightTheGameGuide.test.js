import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stick-fight-the-game.js";

test("the Stick Fight: The Game guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stick-fight-the-game-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stick-fight-the-game");

});

test("the Stick Fight: The Game guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kill Feats & Streaks",
            "Weapons, Snakes & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Stick Fight: The Game achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ace", "Royal Ace", "Explorer", "Conqueror", "4d Stickmen", "Double Kill", "Triple Kill", "Killing Spree", "Rampage", "Dominating", "Unstoppable", "Genocide", "Godlike", "Wicked Stick", "Snake", "Stick Irvin", "Ricochet", "Riposte", "Your kung fu is strong", "White Death", "Bounce", "Walkover", "Ice Age", "мигающий кинжал", "A poultry meal", "Xiao Xiao", "Bzuhzzzzzzzuhzzzzzuhzzzz", "Headshot"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
