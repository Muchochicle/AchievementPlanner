import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trailmakers.js";

test("the Trailmakers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trailmakers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trailmakers");

});

test("the Trailmakers guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Gold Medals",
            "Race Island & Treasure Island",
            "Danger Zone & Oddities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Trailmakers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ready For Takeoff", "Bring Marshmallows!", "Power Core Collector", "Gold Rush", "Slide to Win", "To Fly or Not To Fly", "Island Hopper", "Hot Air", "Best View In Town", "Moby Dick", "Sharing is Caring", "Car Collector", "Monster!", "Sonic Boom", "Man in Black", "Problem Solver", "Leonardo da Vinci", "So attractive!", "El Capitan", "Treehugger", "Pay your respect", "3-Pointer"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
