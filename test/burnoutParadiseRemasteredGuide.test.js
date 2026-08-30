import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/burnout-paradise-remastered.js";

test("the Burnout Paradise Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "burnout-paradise-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "burnout-paradise-remastered");

});

test("the Burnout Paradise Remastered guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Licenses & Single-Player Progression",
            "100% Completion & Criterion Elite",
            "Online & Big Surf Island",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Burnout Paradise Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Lookin' Good", "Watt?", "It's Showtime", "Great Start", "Misdemeanor", "Off the Beaten Path", "Bottom of the Class", "Perfect Rage", "Rising From the Ashes", "Spinnin' Around", "Underachiever", "Learning to Fly", "Duckin' and Weavin'", "The Show Must Go On", "Rampage!", "Must Try Harder", "Parallel Park", "Daredevil", "Boosting Around the World", "Flying Colours", "Millionaires' Club", "Supercharged", "Car in a China Shop", "Paradise Won", "All Pimped Out", "Explorer", "Paid and Displayed", "Bustin' Out", "Totally Smashed", "Flying High", "Speed King", "Crashin' All Over The World", "Shopaholic", "Elite", "Criterion Elite", "Online Racer", "First Win", "Online Champion", "Online and Kicking", "Firestarter", "Just for Pics", "Join the Party", "Party Crasher", "Party Animal", "Block Party", "Burnout Skills", "Perfect Party Game", "Massive Party Game", "The Right Side of the Law", "The Gang Is Back In Town", "Golden", "Smash n' Grab", "Surf Boards", "Island Explorer", "Crash TV Air Time", "People Person"];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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
