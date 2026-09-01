import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/persona-4-golden.js";

test("the Persona 4 Golden guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "persona-4-golden-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "persona-4-golden");

});

test("the Persona 4 Golden guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: The Midnight Channel",
            "Fusion, Compendium & Combat",
            "Social Links, Town & NG+",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Persona 4 Golden achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Golden Completed", "A Prince Appears", "A True Man's Stand", "The Lounge Is Closed", "Game Over", "Boarded-Up Lab", "The Return of the Angels", "Breaking Through the Fog", "Welcome Back", "The Truth In Your Hands", "Fusion Expert", "Special Fusion Expert", "The Nose Doesn't Always Know", "Persona Shopper", "A Favor for Marie", "Card Collector", "Displaying Adaptability", "Hardcore Risette Fan", "Going Nova", "Skilled Commander", "Tactical Fighter", "Fill Your Hand", "Grasping at Greed", "One Who Has Proven Their Power", "The Reaper Becomes the Reaped", "Food Fighter", "Compulsive Reader", "It's Working Today", "Lucky Me!", "Granter of Your Desires", "Seize the Moment", "Cooking With Gas", "A Special Lady", "Mr. Perfect", "The Other Self", "The Power of Truth", "Moderate Bookkeeper", "Thorough Bookkeeper", "Fashion Plate", "Head of the Class", "Fishing Master", "A True Bond", "Bond Maniac", "Legend of Inaba", "An Acquired Taste", "Movie Buff", "Bug Hunter", "Advantage Mine", "Big Bro is Worried", "A New Quiz King"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
