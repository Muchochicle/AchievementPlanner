import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/shotgun-cop-man.js";

test("the Shotgun Cop Man guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "shotgun-cop-man-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "shotgun-cop-man");

});

test("the Shotgun Cop Man guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Challenge Runs & Trick Shots",
            "Worlds & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Shotgun Cop Man achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No Damage", "Kill All", "Speedrun", "Not a scratch", "Hello, anybody there?", "*Blinks*", "Total Champ", "Have you met my friend?", "Airborne", "Rest in Pieces", "Who's the Boss now?", "World 1", "World 2", "World 3", "World 4", "World 5", "World 6", "World 7", "World 8", "Justice is Served", "The Creator"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
