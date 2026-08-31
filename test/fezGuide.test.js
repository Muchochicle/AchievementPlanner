import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fez.js";

test("the FEZ guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fez-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fez");

});

test("the FEZ guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Cubes",
            "Artifacts & Anti-Cubes",
            "Warp Gates & Codes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official FEZ achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Sum total", "Get a cube", "Kill screen", "Hexahedronaut", "Haikus not epics", "Phrenologist", "Mightier than the sword", "A numbers game", "Equal and opposite", "Warp zone", "Cryptographer", "Achievement unlocked"];

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
