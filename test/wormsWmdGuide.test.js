import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/worms-wmd.js";

test("the Worms W.M.D guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "worms-wmd-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "worms-wmd");

});

test("the Worms W.M.D guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Training & Campaign",
            "Combat & Vehicle Feats",
            "Online, Challenges & Customisation",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Worms W.M.D achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Recruitment Drive", "Specialist Forces Qualified", "Grave Digger", "Training Day", "Passing Out Parade", "That Camp was no Pain", "You Crafty Devil", "Do It Yourself!", "You're so Pushy", "Bleating Ranker", "No Challenge at all", "Call that a Challenge!", "Halfway House", "Tanks a lot buddy", "Mech me Proud", "Roto Boating", "Mount Killmore", "Bottom Rung", "Online Warrior", "I'm Your Father!", "Unstoppable", "The Worm that Turned", "I built this city", "Challenge Accepted", "Sub Standard", "Billy No Mates", "Sweat Shop", "Gym Membership", "Full of Swag "];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
