import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-eighties.js";

test("the Kingdom Eighties guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-eighties-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-eighties");

});

test("the Kingdom Eighties guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes & Portals",
            "Recruits & Gags",
            "Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Kingdom Eighties achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Confidence is an Illusion", "1st Down", "2nd Down", "Hail Mary", "No Camp Pinewood!", "Calling Dr. Martha Lesh", "I Miss Hill Valley", "An Excellent Adventure", "3rd Down", "Touchdown", "Letterman", "Chief Technician", "Falken's Maze", "Rover-Rooby-Roo!", "County Connection", "BMX Model 3003", "88 mph", "The Force of Freedom", "REALLY REALLY Personal", "Muscle Machine", "My Little Horsey!", "George Burnett Had Twins", "Clumsy", "Saw Boss", "Wizard", "Captain N", "Stubborn", "Don't Smell the Flowers", "Loner", "It's Not a Wishing Well", "It Still Counts"];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
