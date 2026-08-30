import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/7-billion-humans.js";

test("the 7 Billion Humans guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "7-billion-humans-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "7-billion-humans");

});

test("the 7 Billion Humans guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Milestones & Challenges",
            "Worker's Comp Mishaps",
            "Optimization & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official 7 Billion Humans achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Career Milestone 1", "Career Milestone 2", "Career Milestone 3", "Career Milestone 4", "Career Milestone 5",
        "Social Engineer", "King of Verbosity", "Queen of Inefficiency", "Glorious Failure: Solution Not Robust", "Worker's Comp: Crushing It",
        "Worker's Comp: Shredding It", "Worker's Comp: Explosive Failure", "Worker's Comp: Trust Exercise", "Worker's Comp: Shrieking Steel Blades", "Green Optimization Award",
        "Blue Optimization Award", "Orange Optimization Award", "Red Optimization Award", "Excellent Instruction Follower",
    ];

    assert.strictEqual(officialAchievementNames.length, 19, "sanity check on this test's own reference list");

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
