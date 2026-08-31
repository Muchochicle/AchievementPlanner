import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grid-2.js";

test("the GRID 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grid-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grid-2");

});

test("the GRID 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "World Series of Racing Career",
            "Career Feats & Challenges",
            "Driving & Progression Feats",
            "DLC Track Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official GRID 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Here's My Number, Call Me Maybe?", "That New Showroom Smell", "Oriental Express", "Going Global", "Even Balboa Had a Montage", "The World's Greatest", "T3XT M3SSAG1NG I5 GR8", "Internet Famous", "Clubbed to Death", "Toca Juniors No More", "Imma Let You Finish", "Touge Fast, Touge Furious", "C-C-C-Combo Maker", "All Night Long", "Pinball Wizard", "Mo Money, No Problems", "Vanishing Point", "Rocket Manski", "Sellout", "One For The Team", "A Different Class", "Ring Master", "Tokyo Drift", "Shaken, Not Stirred", "Keep Your Friends Close... ", "You rOCDed!", "Dipping Your Toes", "Social Butterfly", "Sideways Shenanigans", "Could It Be Magic?", "Master Racer", "Harder, Better, Faster, Stronger", "A Vision of What's to Come", "Beginner's Luck", "Remember Me?", "Eat It!", "Making My Way Down Town", "Pedal to the Medal", "SWAGtastic!", "Global Domination", "California Dreaming", "Jack of All Trades", "Natural Ability", "The Artist", "Quantum Leap", "Gone in 60 Seconds", "Harlem Globeshaker", "Drifting Like a Boss", "Flawless Victory", "Winging It", "Spa Time", "Staying the Distance", "Super Drift", "Rouge Racer", "Aussie Rules", "Bush-bash", "Time Extended", "Outback and Gone", "An Old Favourite", "Turn Back Time"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
