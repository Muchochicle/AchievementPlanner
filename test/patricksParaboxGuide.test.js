import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/patricks-parabox.js";

test("the Patrick's Parabox guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "patricks-parabox-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "patricks-parabox");

});

test("the Patrick's Parabox guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Mechanics & Discoveries",
            "Side Puzzle Sets & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Patrick's Parabox achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Recurse", "Level select select", "Challenge puzzle", "Side puzzle", "Double", "Inverse", "Push against yourself", "Cycle", "Oh dear", "Solid", "Infinity", "Epsilon", "Paradox paradox", "Even", "Oblong", "Friend", "One", "Bottom of the rabbit hole", "Alternate universes", "Tidy", "200 solved", "Perfect Parabox"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
