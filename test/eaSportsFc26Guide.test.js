import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ea-sports-fc-26.js";

test("the EA SPORTS FC 26 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ea-sports-fc-26-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ea-sports-fc-26");

});

test("the EA SPORTS FC 26 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career, Clubs & Archetypes",
            "On-Pitch Skills & Tactics",
            "Football Ultimate Team",
            "Kick Off & Season Passes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official EA SPORTS FC 26 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Masterplan", "Treble Glory", "Challenge Accepted", "Expect the Unexpected", "Legend on the Pitch", "European Glory", "Tactical Sync", "Campeones", "We're Going Up", "Top of the Pyramid", "First of Many", "Collect Them All", "Very Particular Set of Skills", "Shop 'Til You Drop", "Gold Standard", "In a Rush", "Football Friend", "KO Kings", "Dead-ball Specialist", "Intuition and Execution", "Power Shot", "Bring It On", "Surgical Aim", "Bullseye", "PlayStyles+", "Tactical Mastermind", "Clean Sheet", "Authenticity", "Squad Builder Extraordinaire", "Bounty Buster", "Full Chemistry Charge", "Tactical Designer", "Defensive Dynamo", "Final Evolutionary Stage", "Champion’s Debut", "Mythic Milestone", "Makeover Maestro", "Event Explorer", "European Legend", "Best of Five", "Football is Everything", "One Season, wonderful!", "All Aboard the Premium Track!"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
