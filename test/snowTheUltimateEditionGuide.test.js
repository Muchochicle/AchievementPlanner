import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/snow-the-ultimate-edition.js";

test("the SNOW guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "snow-the-ultimate-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "snow-the-ultimate-edition");

});

test("the SNOW guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Trick & Air Milestones",
            "Speed, Distance & Progression",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official SNOW achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Pepper Grinder", "On the grind", "Grinding your teeth", "Stomp", "Stomper", "Stompest", "Up in the air", "Air Miles", "Frequent Flyer", "Flipper", "Flip Flop", "Flipping the Bird", "On a Roll", "Keep Rollin", "You've gotta roll with it", "Spinning top", "Spin to win", "Future Spin", "Speed demon", "I've got the need...", "...The need, for speed!", "Touring", "Boring", "Snoring", "Back to front", "Sdrawkcab", "It feels like we're only going backwards", "That counts", "I get the point", "Count Dracula", "Level playing field", "Do you need a level?", "Let me level with you"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
