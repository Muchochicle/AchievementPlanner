import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-walking-dead-season-two.js";

test("the The Walking Dead: Season Two guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-walking-dead-season-two-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-walking-dead-season-two");

});

test("the The Walking Dead: Season Two guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes 1-2: All That Remains & A House Divided",
            "Episodes 3-4: In Harm's Way & Amid the Ruins",
            "Episode 5: No Going Back",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official The Walking Dead: Season Two achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["River Runs Cold", "Shelter", "On the Path", "Now What?", "Sneaky", "Still. Not. Bitten.", "Headed Out", "Split Decision", "New Morning", "The Intruder", "Moving On", "Over the Bridge", "A Stranger", "Old Friends", "Past Midnight", "Reunion", "Fresh Fish", "Long Way Down", "One Long Day", "Always the Quiet Ones", "Not in Nottingham", "Come Hither", "Rehabilitated", "Eye of the Storm", "Best Laid Plans", "Path Less Traveled", "A Heavy Burden", "History Lesson", "Making an Observation", "All Fall Down", "On Foot", "Beyond the Trees", "Blood and Iron", "Miles To Go", "Right of Frost", "Center Cannot Hold", "All the Dark Night", "We Slowly Drove", "Kindly Stop for Me", "All The Dead Lie Down"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
