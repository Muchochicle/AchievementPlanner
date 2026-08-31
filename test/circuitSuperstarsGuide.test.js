import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/circuit-superstars.js";

test("the Circuit Superstars guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "circuit-superstars-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "circuit-superstars");

});

test("the Circuit Superstars guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Wins & Pole Positions",
            "Championship Cups",
            "Distance Driven",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Circuit Superstars achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Mysterious Challenger", "Career Driver", "Worldwide Superstar", "Promising Amateur", "A True Pro", "Circuit Superstar", "First Time Leader", "Seasoned Leader", "Leader of the Pack", "Paving the Way", "Fast like Lightning ", "Speed Superstar", "The Journey Begins", "The Learner's Path", "Make Donuts for the Fans", "Feel The Thrill", "Look at this Trophy!", "Featherweight Champion", "Iron Racer", "Power and Glory", "Heavyweight Champion", "Boxer Legend", "Mercurial Racer", "Captain Oversteer", "Sideways Legend", "World Champion", "Adorable Champion", "Endurance Legend", "Timeless Champion", "From Mexico to Vancouver", "2015 KM", "Go the Distance", "Petrolhead"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
