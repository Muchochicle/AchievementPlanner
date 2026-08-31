import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/microsoft-flight-simulator-2020.js";

test("the Microsoft Flight Simulator (2020) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "microsoft-flight-simulator-2020-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "microsoft-flight-simulator-2020");

});

test("the Microsoft Flight Simulator (2020) guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Flights & Basics",
            "Activities, Landings & Bush Trips",
            "Endurance & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Microsoft Flight Simulator (2020) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Challenge Accepted", "Fill 'er Up!", "Rubberneck", "Mother Nature", "Start Me Up", "By the Book", "In The Wild", "Service with a Smile", "Back-Up Plan", "Job Shadowing", "Wheels Up, Wheels Down", "Look Ma, No Hands!", "Light Chop", "On the Green", "Stay on Target", "My Way", "Deadstick Landing", "Working for the Weekend", "Frequent Flyer Miles", "Road Trip", "A Few Bumps", "Short Stuff", "Uphill Climb", "Fire and Ice", "Anemoi", "Goldrush", "Tour Guide", "Pilot Program", "Greased", "Hydroplaning", "Flights of Fancy", "Saddle Sore", "Century Club", "Night Owl", "Instrumental", "Decathlon", "Completionist", "SIDs and STARs", "Landmarks the Spot", "World Traveler", "Jack of All Planes", "Journeyman", "Wing Commander"];

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
