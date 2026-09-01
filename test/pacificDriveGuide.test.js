import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/pacific-drive.js";

test("the Pacific Drive guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "pacific-drive-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "pacific-drive");

});

test("the Pacific Drive guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Into the Zone",
            "Car & Collection Milestones",
            "Run Challenges & Driving Technique",
            "Secrets & Gags",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Pacific Drive achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Auto Shop", "Into the Wilderness", "Investigate the Zone", "A Leap of Faith", "Stabilizing the Route", "The Mid-Zone Crossing", "Hack the Planet!", "The Visions", "The Red Meadow Records", "The Deep Zone Crossing", "The Anomaly Barricade", "The End of the Road", "Along for the Ride", "Long Haul", "Patent Pending", "Garage Barrage", "DIY Expert", "DIY Master", "ARDA Record-Keeper", "ARDA Lorekeeper", "Great Scott!", "Scientific Pursuit", "The Eye of the Storm", "Car Of Theseus", "Fully Outfitted", "Packrat", "Personal Methods of Creative Expression are Highly Encouraged", "Fly Homeward", "Streets Ahead", "Juiced Up", "Running on Empty", "It Would Take a Miracle", "With the Top Down", "No Parking", "Driver's Ed Dropout", "Lumberjack", "They Weren't Using It", "Renewable Power", "Just Walk it Off", "Et tu?", "Graverobber", "Watch Out for Hop-ons!", "Nothing Personnel, Zone", "Sleight of Hand", "Certified Mechanic", "Car Whisperer", "Troubleshooting", "I Don’t Know What I Expected", "Where We're Going, We Don't Need Roads"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
