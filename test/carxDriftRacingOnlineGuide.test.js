import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/carx-drift-racing-online.js";

test("the CarX Drift Racing Online guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "carx-drift-racing-online-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "carx-drift-racing-online");

});

test("the CarX Drift Racing Online guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorials & Progression",
            "Multiplayer & Drift Events",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official CarX Drift Racing Online achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Newcomer", "Pilgrim", "Traveler", "#Drift4life", "...Drifting? No, Never Heard of It", "DP-Man", "On the Path to Glory", "Master of Drift", "DriftKing", "Prizewinner", "Half a Step to Victory", "Gold", "#Winner", "#OnwardToVictory", "Pioneer", "On the Rise", "No Limits", "Champion", "Eat Dust Gringo", "Did You See That?", "Nothing Personal", "Wolf Amid Sheep", "Entry Master", "Transition Master", "Awesome angle", "Drawn-out Drift", "Masterful Race", "Backward", "Clipping Zone Master", "Clipping Point Master", "Stylish drift", "Winter Drift", "And the weather is not an obstacle...", "Voodoo", "Drift guardian", "Quantity and quality"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
