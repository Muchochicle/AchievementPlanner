import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/armored-core-vi-fires-of-rubicon.js";

test("the Armored Core VI guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "armored-core-vi-fires-of-rubicon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "armored-core-vi-fires-of-rubicon");

});

test("the Armored Core VI guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Missions, Endings & Playthroughs",
            "Collectibles, Tuning & Customization",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Armored Core VI achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Armored Core", "The Perfect Mercenary", "Stargazer", "Master of Arena", "Asset Holder", "Tuning Expert", "The Fires of Raven", "Liberator of Rubicon", "Alea Iacta Est", "Weapon Collector", "External Parts Collector", "Internal Parts Collector", "Expansion Collector", "Combat Log Collector", "Data Log Collector", "Testing Complete", "Illegal Entry", "Operation Wallclimber", "Contact", "Ocean Crossing", "A New Threat", "Ayre and the Coral", "Into Unknown Territory", "Re-education", "The Floating City", "MIA", "Training Complete", "Hardware Engineer", "Software Engineer", "Graphic Designer"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
