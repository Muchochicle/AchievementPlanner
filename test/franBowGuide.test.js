import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fran-bow.js";

test("the Fran Bow guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fran-bow-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fran-bow");

});

test("the Fran Bow guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Puzzles & Minigames",
            "Story & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 18-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /18 Steam achievements/);

});

test("every one of the 18 official Fran Bow achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["I burn you!", "Sleepy Princess", "Hello dolly!", "Faster than a snail!", "The kind thief", "Check!", "Oops! You crashed the game", "This is Electroman!", "It tasted fabulous!", "I found my way out", "Toad on board!", "A troll... RUN!", "The end", "Find Mr. Midnight!", "Dr. Love", "Feeding the robot rabbit ", "Memorial", "The old story"];

    assert.strictEqual(officialAchievementNames.length, 18, "sanity check on this test's own reference list");

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
