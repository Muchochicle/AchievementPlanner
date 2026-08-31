import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-walking-dead-telltale-definitive-series.js";

test("the The Walking Dead: Telltale Definitive Series guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-walking-dead-telltale-definitive-series-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-walking-dead-telltale-definitive-series");

});

test("the The Walking Dead: Telltale Definitive Series guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Seasons One & Two",
            "A New Frontier & Michonne",
            "The Final Season",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official The Walking Dead: Telltale Definitive Series achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Everything's Going to be Okay", "It's not stealing if you need it", "Lend Me Your Ears", "Penultimate", "What Remains", "Loose Ends", "Split Decision", "Reunion", "Eye of the Storm", "Beyond the Trees", "All The Dead Lie Down", "Family Road Trip", "Bloody Business", "Southern Hospitality", "Faces in the Crowd", "Sole Survivors", "Landfall", "Quiet Time", "Farewell", "Protector", "Defender", "Leader", "Savior"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
