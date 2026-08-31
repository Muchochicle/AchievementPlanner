import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sonic-cd.js";

test("the Sonic CD guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sonic-cd-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sonic-cd");

});

test("the Sonic CD guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Time Travel & Stage Feats",
            "Completion & Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Sonic CD achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["88 Miles Per Hour", "Just one hug is enough", "Paradise Found", "Take the High Road", "King of the Rings", "Statue Saviour", "Heavy Metal", "All Stages Clear!", "Treasure Hunter", "Dr. Eggman Got Served", "Just in Time!", "Saviour of the Planet"];

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
