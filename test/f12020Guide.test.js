import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/f1-2020.js";

test("the F1 2020 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "f1-2020-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "f1-2020");

});

test("the F1 2020 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "My Team & Driver Career",
            "Online & Multiplayer",
            "Progression Feats & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official F1 2020 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["New Kids on the Block", "First Outing", "Promising Start", "Data Gatherer", "Hats Off", "You Didn't See Anything", "Become One with the Car", "Look at you go!", "Phoenix from the Ashes", "Get Shifty", "Enthusiast", "Sign on the Dotted Line", "Make it Yours", "Represent", "Who are you!?", "Ditch the Downforce", "Making Paper", "We Are the Champions", "Legend Status Achieved", "Started from the Bottom", "Big Name Signing", "Front of the Grid", "The Perfect Weekend", "So it Begins", "Finding your Feet", "Well on Your Way", "Half Centurion", "Full Potential", "One for the 'gram", "Who You Gonna Call!?", "Squeaky Clean", "Mad Tash for the Finish Line", "The Orange Army", "Bragging Rights", "Red River Racer", "Team Building", "Here Comes the Money", "Its Time for the Perk-olator", "The Camera Loves You", "Ohh Friends", "What do you want, a medal?", "Glove at First Sight", "Chicken Dinner", "Grab the Popcorn", "Busy Body", "Show Off!", "Maxing Out", "Remember the Name", "My Precious", "Dat Reaction Speed (DRS)"];

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
