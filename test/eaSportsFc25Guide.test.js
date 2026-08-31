import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ea-sports-fc-25.js";

test("the EA SPORTS FC 25 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ea-sports-fc-25-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ea-sports-fc-25");

});

test("the EA SPORTS FC 25 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Player & Manager Career",
            "Clubs & Rush",
            "On-Pitch Skills & Tactics",
            "Football Ultimate Team",
            "Kick Off & Season Pass",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official EA SPORTS FC 25 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Silverware Legacy", "From Origins to Legacy", "European Glory", "Perfect Fit", "Tactical Sync", "Rising Talent", "Scouting Network", "Campeones", "We're Going Up", "Top of the Pyramid", "First of Many", "Walk the Walk", "Make the Grade", "Shop till you drop", "That's One", "Gold Rush", "For the Club", "Dead-ball specialist", "Intuition and Execution", "Power Shot", "Bring it on", "Surgical Aim", "Bullseye", "PlayStyles+", "Tactical Mastermind", "Squad Building Composer", "Equal Footing", "Chemistry Degree", "Tactically Savvy", "You Shall Not Score!", "Final Form", "Play-Off Passport", "The Myth, the Legend!", "Social Kickabout", "In the Gaffer We Trust", "European Legend", "Best of Five", "Football is Everything", "One season, wonderful!"];

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
