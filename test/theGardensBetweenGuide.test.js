import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-gardens-between.js";

test("the The Gardens Between guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-gardens-between-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-gardens-between");

});

test("the The Gardens Between guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Every Garden's Snapshot",
            "Puzzle Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official The Gardens Between achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Moving In", "New Friends", "Staying Up Late", "Our Secret Clubhouse", "Mischievous Discoveries", "An Expedition Goes Down The Drain", "Stargazing", "The Gardens Complete", "Reset The Dominos", "Game Over", "Great Catch!", "Friendly Fire", "Saw Through Time", "Gone Fishing", "Found You!", "Reach For The Sky", "Don't touch that!"];

    assert.strictEqual(officialAchievementNames.length, 17, "sanity check on this test's own reference list");

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
