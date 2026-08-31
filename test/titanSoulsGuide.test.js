import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/titan-souls.js";

test("the Titan Souls guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "titan-souls-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "titan-souls");

});

test("the Titan Souls guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Game Modes",
            "Titan Takedowns I",
            "Titan Takedowns II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Titan Souls achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Out of the Frying Pan...", "...Into the Fire", "Aerodynamics", "Titan Soul", "TRUTH", "Iron Human", "Iron Titan", "Hard Bizkit", "Slimeball", "New Game+", "Laser Eye Surgery", "Brain Freeze", "Short Back and Sides", "Drug Trial", "Demo Man", "Ca$h Mon£y", "COME AT ME BRO", "Bomberman", "Leak Spin", "Beating the Yeti", "Dental Plan", "Titanic", "A Collision of Souls", "Shadow of the Colossus", "First Blood", "The Switch", "Iron God"];

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
