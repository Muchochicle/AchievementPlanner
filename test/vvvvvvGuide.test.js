import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/vvvvvv.js";

test("the VVVVVV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "vvvvvv-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "vvvvvv");

});

test("the VVVVVV guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Death Counts",
            "Super Gravitron & No Death Mode",
            "Time Trial V Ranks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official VVVVVV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Game Complete", "Flip Mode Complete", "Less than 500 deaths", "Less than 250 deaths", "Less than 100 deaths", "Less than 50 deaths", "Super Gravitron: 5 Seconds", "Super Gravitron: 10 seconds", "Super Gravitron: 15 Seconds", "Super Gravitron: 20 seconds", "Super Gravitron: 30 seconds", "Super Gravitron: 1 minute", "Master of the universe", "Space Station 1 Mastered", "Laboratory Mastered", "The Tower Mastered", "Space Station 2 Mastered", "Warp Zone Mastered", "Final Level Mastered"];

    assert.strictEqual(officialAchievementNames.length, 19, "sanity check on this test's own reference list");

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
