import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/insurgency-sandstorm.js";

test("the Insurgency: Sandstorm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "insurgency-sandstorm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "insurgency-sandstorm");

});

test("the Insurgency: Sandstorm guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Kills & Combat",
            "Objectives & Vehicles",
            "Matches & Progression",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Insurgency: Sandstorm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Carrying", "Turf War", "Special Delivery", "Self-destructive", "First Blood",
        "Flaccid Paralysis", "It's All in the Reflexes", "Efficient", "High Speed Low Drag", "Thanks Station!",
        "Personal", "Point Shooting", "Knock Knock", "Wallbanger", "Grounded",
        "Road Hazard", "Designated Driver", "Hit and Run", "Mount & Gun", "J.R. .50",
        "Wet Feet", "Firefight Victory", "Push Victory", "Checkpoint Victory", "Stylin'",
        "#1", "Play to Win", "There For You", "Exploitative", "Lucky",
        "Banged", "Blindfire", "Cinematic", "Ruthless", "Semper Paratus",
    ];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
