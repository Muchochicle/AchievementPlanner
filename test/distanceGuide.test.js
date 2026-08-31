import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/distance.js";

test("the Distance guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "distance-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "distance");

});

test("the Distance guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Medals & Campaigns",
            "Feats, Workshop & Adventure",
            "Mastery & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Distance achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Advanced Driver", "Better than Sliced Bread", "Big Bother", "Cheat the System", "Down But Not Out", "Expert Driver", "Grounded Departure", "Meet your Rival", "Ninja in Training", "Driving Ace", "Pumpkin King", "Rampage", "Self-Termination", "Split Personality", "Still Alive", "The Long Grind", "Trackmogrifier", "Welcome to the Family", "Wordsmith", "World Traveler", "Adventurer", "Millionaire", "Keymaster", "Gold Collector", "Six Figures", "Moving Forward", "Speed Runner", "Blast from the Past", "Vendor Bender", "The Other Side", "Worthy"];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
