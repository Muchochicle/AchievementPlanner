import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/noita.js";

test("the Noita guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "noita-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "noita");

});

test("the Noita guide has all 3 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Biomes, the Gods & Discovery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official Noita achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Victory", "Reached Coal Pits", "Reached Snowy Depths", "Reached Hiisi Base", "Reached Underground Jungle", "Reached The Vault", "Reached Temple of the Art", "The Gods Are Impressed", "The Gods Are Afraid", "100% Enemy Progress", "100% Spell Progress", "100% Perk Progress", "The Gods Are Enraged", "Gathered All The Knowledge"];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

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
