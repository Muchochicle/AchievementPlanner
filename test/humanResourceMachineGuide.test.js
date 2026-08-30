import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/human-resource-machine.js";

test("the Human Resource Machine guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "human-resource-machine-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "human-resource-machine");

});

test("the Human Resource Machine guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Optimization & Challenges",
            "Career Milestones",
            "Glorious Failures & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Human Resource Machine achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Green Optimization Award", "Blue Optimization Award", "Orange Optimization Award", "Social Engineer", "Queen of Inefficiency",
        "King of Verbosity", "Career Milestone 1", "Career Milestone 2", "Career Milestone 3", "Career Milestone 4",
        "Career Milestone 5", "Career Milestone 6", "Glorious Failure: Overflow", "Glorious Failure: Out of Bounds", "Glorious Failure: Solution Not Robust",
        "Excellent Instruction Follower",
    ];

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
