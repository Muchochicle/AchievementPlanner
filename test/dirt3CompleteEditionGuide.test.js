import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dirt-3-complete-edition.js";

test("the DiRT 3 Complete Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dirt-3-complete-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dirt-3-complete-edition");

});

test("the DiRT 3 Complete Edition guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "DiRT Tour & Gymkhana Academy",
            "DC Challenges & Battersea Compound",
            "Online, Multiplayer & Rep",
            "Car Packs & Monte Carlo / Shibuya DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official DiRT 3 Complete Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Into the DiRT", "Driving School", "Teacher's Pet", "Kick Off the Training Wheels!", "Reputation Boost", "The Extra Mile", "Crash Proof", "Call me Ace!", "Today's Forecast is...Victory!", "Assistance is Futile", "Driven", "Pace Setter", "Air Miles", "Self Preservation Society", "The Real Thing", "California Dreams", "Sub Zero Hero", "Rally Evolution", "Rising Talent", "Shake and Bake", "Eat my DiRT!", "World Renowned", "Gymkhana Aficionado", "SuperSeries Champion", "From DiRT to Glory", "Gym-Carnage", "Cool Running", "No-bot Wars", "Perfect Sprint", "Showcase Drifter", "DC Challenger", "DC Silver", "DC Gold", "Platinum Performance", "Hooning Around", "Donut Addict", "Burnt Rubber", "Battered Battersea", "Road Trip", "The Professional", "Taking the Trophy", "The Road Ahead", "Honourable Driver", "Steer Hunter", "Can't Touch This!", "Cheeze It!", "Flag Stealer", "Join the Party", "King of the Road", "Super Star", "New Wheels", "Service History", "The Lively Set", "Watch the Paintwork!", "La Grande Victoire", "The Tourist", "French Connection", "Tokyo Story", "Rush Hour", "Metropolis Racer"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
