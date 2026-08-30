import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/car-mechanic-simulator-2021.js";

test("the Car Mechanic Simulator 2021 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "car-mechanic-simulator-2021-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "car-mechanic-simulator-2021");

});

test("the Car Mechanic Simulator 2021 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Repair & Workshop Skills",
            "Buying, Selling & Exploration",
            "Career Progression",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Car Mechanic Simulator 2021 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Vulcanizer", "Professional vulcanizer", "Welcome to the world of junk", "Smash! Bash!", "Sculptor", "Handyman", "Regenerator", "Like a boss", "Job done!", "Hard worker", "New heart", "Amateur Painter", "Artist", "Wrench Master", "Life lesson", "Good tip", "Car flipper", "Trader", "Slippery floor", "Rich guy", "Piece of junk", "Scavenger", "Hidden Trasure", "Barn finder", "Little Steps", "Great roll", "First time at countryside", "Explorer", "Road tested", "Path full of stops", "Great habit", "New and shiny", "Reasonable and responsible", "Blind shot", "Gambler", "Parking boy", "Racer boy", "I like new shiny stuff", "So many unneeded parts", "Well trained", "I like scraps", "Scraps are my obsession", "Time for holidays", "I think i can fix it", "I saw many things", "The Mechanic"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
