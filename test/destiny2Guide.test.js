import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/destiny-2.js";

test("the Destiny 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "destiny-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "destiny-2");

});

test("the Destiny 2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Guardian Progress",
            "Endgame & Collections",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Destiny 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Long and Winding Road", "Zavala's Lieutenant", "Cayde's Pathfinder", "Ikora's Protégé", "Show Me What You Got", "In A Flash", "The People's Hero", "Heart of Darkness", "The Life Exotic", "Challenge Accepted", "Belly Of The Beast", "The Prestige", "Lest Ye Be Judged", "Legends Grow", "Exotique", "Seal the Deal", "Fashion Statement", "Heart of the Awoken", "An Exotic Journey", "High-Stakes Play", "Darkness Falls", "Nothing Left to Say", "Wishing for the Best"];

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
