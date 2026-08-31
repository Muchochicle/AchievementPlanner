import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fate.js";

test("the FATE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fate-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fate");

});

test("the FATE guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character, Pet & Chests",
            "Stats & Legacy",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 10-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /10 Steam achievements/);

});

test("every one of the 10 official FATE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Fate Seeker", "Best In Show", "I Guess You Were Hungry ...", "Ka-Ching!", "Lightning Bolt! Lightning Bolt!", "These Guns?", "Skillful Warrior", "Energized", "Fate Ensured", "Shiny!"];

    assert.strictEqual(officialAchievementNames.length, 10, "sanity check on this test's own reference list");

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
