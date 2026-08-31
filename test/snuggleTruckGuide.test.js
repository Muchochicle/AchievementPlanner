import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/snuggle-truck.js";

test("the Snuggle Truck guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "snuggle-truck-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "snuggle-truck");

});

test("the Snuggle Truck guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Fuzzies & Stunts",
            "Runs & Medals",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Snuggle Truck achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["10 Fuzzy Catcher", "50 Fuzzy Catcher", "200 Fuzzy Catcher", "Truck Flip", "Wheelie Master", "High Flier", "Horrible Driver", "Fuzzy Run", "50 Medals", "100 Medals", "All Medals"];

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
