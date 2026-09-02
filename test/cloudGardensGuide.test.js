import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cloud-gardens.js";

test("the Cloud Gardens guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cloud-gardens-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cloud-gardens");

});

test("the Cloud Gardens guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Progress","Gardening & Sandbox","Suggested Order"]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Cloud Gardens achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Getting the Band Back Together","Big Picture","Biodiversity","Discovery","Green Thumb","Halfway There","Master Gardener","Overgrowth","Reforestation","They're Watching","Up"];

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
