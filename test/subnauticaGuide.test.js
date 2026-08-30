import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/subnautica.js";

test("the Subnautica guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "subnautica-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "subnautica");

});

test("the Subnautica guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Repairing the Aurora & Precursor Facilities",
            "Survival & the Degasi Survivors",
            "Vehicles & the Journey Home",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 17-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /17 Steam achievements/);

});

test("every one of the 17 official Subnautica achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Getting Your Feet Wet", "Extinction Event Avoided", "Ancient Technologies", "Thermal Activity", "Follow the Lost River",
        "Fourteen Thousand Leagues Under the Sea", "Optimal Health", "Leave Only Time Capsules", "Seaside Living with an Ocean View", "Follow the Degasi",
        "Seamonsters", "Settling in for the Long Haul", "Personal Propulsion", "40-foot Sub For One", "Ordered the Prawn",
        "Go Among the Stars", "\"Man's Best Friend\"",
    ];

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
