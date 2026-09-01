import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/a-musical-story.js";

test("the A Musical Story guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "a-musical-story-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "a-musical-story");

});

test("the A Musical Story guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Finishing Every Chapter",
            "Perfecting Every Chapter",
            "Full Mastery & Secret Chapter",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official A Musical Story achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["ECG", "Rehearsal", "Daily Life", "Assembly Line Work", "Solitude", "Pinewood, Here we come!", "The Van", "Road-Trip", "A Musical Pause", "Briget's", "Love at First Sight", "First Kiss", "A Bigger Band", "Fuel", "Alone Together", "Threatening Nature", "Flat Tire", "The Clash", "Bad Trip", "Chase the Crow", "Regrets", "Love", "Here we go again!", "The Accident", "The Awakening", "Pinewood", "Time", "Symbiosis", "Big City Music", "Sound of Noise", "TV Dreams", "Dreamers", "The Fix", "The Mountains, The Valleys", "Flight of the Bumblebee", "As the Crow Flies", "Milk and Alcohol", "Unintended", "On the Road Again", "Gasoline", "Under the Bridge", "Riders on the Storm", "Under my Wheels", "The Fight Song", "Purple Haze", "The Show Must Go On", "All Apologies", "Closer", "Carry On", "Killer Cars", "Hospital Flowers", "Love is All", "Voodoo  Child", "Stairway to Heaven"];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
