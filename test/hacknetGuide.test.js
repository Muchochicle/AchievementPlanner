import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hacknet.js";

test("the Hacknet guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hacknet-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hacknet");

});

test("the Hacknet guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Progression",
            "Secrets & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Hacknet achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Quickdraw", "Rude", "Hacknet", "CSEC", "Entropy", "PointClicker", "You better not have clicked for those...", "TRUE ULTIMATE POWER", "Makeover!", "To the Wire", "/el Sec Champion"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
