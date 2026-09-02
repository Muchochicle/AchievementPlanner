import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/planet-coaster.js";

test("the Planet Coaster guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "planet-coaster-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "planet-coaster");

});

test("the Planet Coaster guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Career",
            "Business, Staff & Guests",
            "Coaster Engineering",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official Planet Coaster achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to Planet Coaster.", "A Star is born", "Rising Star", "Brightest Star in the Sky", "Star Studded Career", "Princess Amelie's Fairy Tale", "Dex-R's Science Shenanigans", "King Coaster's Royal Decree", "Rise to the Challenge", "Challenge Experience", "Challenge Veteran", "Money Spinner", "Loan Survivor", "Marketing Mogul", "Doing Your Homework", "The Ratings Are Through the Roof!", "Crashing the Party", "Salt on the Senses ", "Investing in People", "You're Fired!", "Scream if You Want to Go Faster!", "Speed Freak ", "Faster than Lightning", "A Head for Heights", "Jaw Dropping", "Coasting Along", "Don't Stop Me Now", "The Ride of Your Life", "Hang Time", "Air Raising", "Air Miles", "You're a winner!"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
