import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/celeste.js";

test("the Celeste guide identifies itself correctly as Celeste's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "celeste-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "celeste");

});

test("the Celeste guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story (A-Sides)",
            "Crystal Hearts",
            "B-Sides",
            "Strawberries",
            "Secrets",
            "Farewell (Chapter 9)"
        ]
    );

});

test("the Overview states the verified 32-achievement, no-missables facts", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);
    assert.match(overview, /none of them are missable/);

});

test("every one of the 32 official Celeste achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (src/data/games/celeste.json).
    const officialAchievementNames = [
        "Forsaken", "Archaeology", "Checking Out", "Breathe", "In the Mirror", "Reflection", "Celeste",
        "Pointless Machines", "Resurrections", "Scattered and Lost", "Eye of the Storm", "Quiet and Falling",
        "Heavy and Frail", "Pink Sunrise", "Heart of the Mountain", "Sever the Skyline", "Black Moonrise",
        "Good Karma", "Golden Feather", "Mirror Magic", "Center of the Earth", "No More Running",
        "Say Goodbye", "Strawberry Badge", "Strawberry Medal", "Impress Your Friends", "Gateway",
        "1UP!", "Real Gamer", "Thanks For Playing", "Farewell", "Wow"
    ];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
