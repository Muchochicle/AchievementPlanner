import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nightsky.js";

test("the NightSky guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nightsky-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nightsky");

});

test("the NightSky guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Levels I",
            "Levels II",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official NightSky achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Prologue", "Harara Mountains", "Skymning", "Ranna Caverns", "The Void", "Aurora's North", "Slightly Nonsense", "Harara Mountains Alternative", "Skymning Alternative", "Old Ruins Alternative", "Perpetuum Factory Alternative", "Ranna Caverns Alternative", "The Void Alternative", "Murky Depths Alternative", "Giant Leaf Alternative", "Aurora's North Alternative", "Slightly Nonsense Alternative", "Old Ruins", "Perpetuum Factory", "Murky Depths", "Giant Leaf", "Prologue Alternative"];

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
