import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/guilty-gear-strive.js";

test("the GUILTY GEAR -STRIVE- guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "guilty-gear-strive-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "guilty-gear-strive");

});

test("the GUILTY GEAR -STRIVE- guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Arcade Mode",
            "Missions & Survival",
            "Customization & Match Milestones",
            "Advanced Techniques",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official GUILTY GEAR -STRIVE- achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["STRIVE", "That's Heavy...", "Armor-Clad Faith", "Heart is Blazing", "Messiah Will Not Come", "Play the Hero till I Die", "I'll have a Little of Your Time", "Battle Ready", "Knowledge is Power", "Gaze of the Strong", "At the End of the Struggle", "Gym Regular", "Begin Assessment of the Target", "Extinct Species", "Gateway to the Tower", "To the World Outside", "The Room where Demons Dwell", "Day 1 Bounty Hunter", "This Year's Fashion Trend", "Beautiful Catch, Ain't It?", "Everlasting Thirst", "Destruction and Creation", "A Pleasant Flight", "Strike from Heaven", "Manipulator of Time", "In the Blink of an Eye", "Nothing Personal, Kid", "You've Fallen Right into my Trap", "Ready to Meet Your Maker?", "Extraordinary Defensive Instinct", "Shine When Polished", "I'm Overflowing with Power", "Give It My All", "I'm Your God Now", "Not Missing an Opportunity", "Around the World", "No Return, High Risk", "Behold the Power of My Lightning", "Triple Cross"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
