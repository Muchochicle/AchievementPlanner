import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/braid.js";

test("the Braid guide identifies itself correctly as Braid's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "braid-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "braid");

});

test("the Braid guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Traversing Each World",
            "Solving Each World's Puzzle",
            "Closure & Speed Run",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Braid achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (backend/catalog/games/braid.json).
    const officialAchievementNames = [
        "Traversed World 2", "Traversed World 3", "Traversed World 4", "Traversed World 5", "Traversed World 6",
        "Solved World 2", "Solved World 3", "Solved World 4", "Solved World 5", "Solved World 6",
        "Closure", "Speed Run"
    ];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
