import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/risk-of-rain.js";

test("the Risk of Rain guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "risk-of-rain-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "risk-of-rain");

});

test("the Risk of Rain guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses & Combat Feats",
            "Mechs, Difficulty & the Relic",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official Risk of Rain achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Grabber", "Plumbing", "Maku and Dan", "Giant face", "Shake Shake",
        "Fly trap", "Fish food", "Smash", "Combustion", "Swordsman",
        "Pilot", "Harpoon", "Hardboiled", "The Relic",
    ];

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
