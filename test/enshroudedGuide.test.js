import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/enshrouded.js";

test("the Enshrouded guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "enshrouded-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "enshrouded");

});

test("the Enshrouded guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Crafting",
            "Bosses & Elixir Wells",
            "Character Level",
            "Region Mastery - Shrines & Spires",
            "Region Mastery - Mining & Obelisks",
            "Region Mastery - Shroud Roots",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official Enshrouded achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Thundering success", "Dethroned", "Pieces of the past", "A place to call home", "Freefall",
        "Shortcut", "Thus it begins", "Winged Victory", "Spark of the Springlands", "Spark of the Revelwoods",
        "Spark of the Nomad Highlands", "Spark of the Kindlewastes", "Mole of the Springlands", "Mole of the Revelwoods", "Mole of the Nomad Highlands",
        "Mole of the Kindlewastes", "Leave a mark", "Springlands secret keeper", "Revelwoods secret keeper", "Nomad Highlands secret keeper",
        "Kindlewastes secret keeper", "Doing something right", "On the way", "Things come together", "Getting a feel for it",
        "How far we have come", "Impressive journey", "Erudite", "Springlands stargazer", "Revelwoods stargazer",
        "Nomad Highlands stargazer", "Kindlewastes stargazer", "Well done!", "Springland weeding", "Revelwood weeding",
        "Nomad Highlands weeding", "Kindlewastes weeding", "Climbing to new heights", "Reaching the top", "Albaneve Summits weeding",
        "Albaneve Summits stargazer", "Mole of the Albaneve Summits", "Albaneve Summits secret keeper", "Spark of the Albaneve Summits", "King of the mountain",
        "Spark of the Veilwater Basin", "Mole of the Veilwater Basin", "Veilwater Basin secret keeper", "Ready for new lands", "Onto new horizons",
        "Veilwater Basin stargazer", "Veilwater Basin weeding",
    ];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
