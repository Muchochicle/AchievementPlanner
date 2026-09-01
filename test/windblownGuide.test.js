import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/windblown.js";

test("the Windblown guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "windblown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "windblown");

});

test("the Windblown guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Biomes & Bosses",
            "Progression & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Windblown achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Factory", "Rat Village", "Incubator", "Fungal Swamp", "FREND-43V3R", "Pietro", "Sigourney", "Off with its head!", "Tribomber", "Headbanger", "Pirate Captain", "Head", "Navelless Brothers", "Alterattack", "Gear Adept", "Gift Adept", "Endless Adept", "Sanctuary", "Memoreaper", "Stone Cutter", "Lost Archipelago", "Broken Banger", "Rhodie", "Carving", "Original Copy"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
