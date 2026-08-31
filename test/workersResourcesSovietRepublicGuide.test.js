import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/workers-resources-soviet-republic.js";

test("the Workers & Resources: Soviet Republic guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "workers-resources-soviet-republic-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "workers-resources-soviet-republic");

});

test("the Workers & Resources: Soviet Republic guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Campaigns",
            "Population & Society Goals",
            "Late-Game & Hard Mode",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official Workers & Resources: Soviet Republic achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Novice to Planned Economy", "Disciple of Planned Economy", "Republic Founder", "Revolutionary of the Republic", "Master of Research", "Trabi Maker", "Soviet Society", "Soviet Paradise", "Cableway Lover", "Nature Lover", "Waste Incinerator", "Wrong Communist", "Right Communist", "Very Important Soviets", "Soviet Airways", "Nuclear Manufacturer", "Soviet Republic Expert"];

    assert.strictEqual(officialAchievementNames.length, 17, "sanity check on this test's own reference list");

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
