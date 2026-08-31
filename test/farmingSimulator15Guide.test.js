import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/farming-simulator-15.js";

test("the Farming Simulator 15 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "farming-simulator-15-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "farming-simulator-15");

});

test("the Farming Simulator 15 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Money & Driving",
            "Field Work & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Farming Simulator 15 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Nouveau-Riche", "Well-Heeled", "Pots of Gold", "Out of Debt", "Mobile Farmer", "Very Frequent Driver", "Longplayer", "Fruits of Your Labor", "Harvest King", "Sower", "Mass Production", "Something Shiny", "Coins on the Streets", "Numismatist", "Mission Master", "Financial Folly"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

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
