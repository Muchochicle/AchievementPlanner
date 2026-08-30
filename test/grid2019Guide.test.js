import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grid-2019.js";

test("the GRID (2019) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grid-2019-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grid-2019");

});

test("the GRID (2019) guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Showdowns & Progression",
            "Race Challenges & Objectives",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official GRID (2019) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Final Stretch", "Best of the Best", "Down Under", "All-American", "Pro Tuned", "Das Beste", "Triple Crowned", "Mercenary", "Pro Driver", "A Fine Choice", "Content Tracker", "Race Driver", "Worth its Weight", "Around the Globe", "By Invitation Only", "Personal Touch", "FA Racing Specialist", "Cruise Control", "Out Of Stock", "Tour Guide", "Fine Tuned", "Show Off", "Brawler", "RavenBest", "Coupon Car", "Next Contestant Please", "Underdog", "Pristine", "First Of Many", "High Altitude", "Delta Time", "Fast for a Hatchback", "British Heritage", "Burning Rubber", "A Wheely Good Time", "Gone in a Flash", "Painting the Track red", "Flights to Catch"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
