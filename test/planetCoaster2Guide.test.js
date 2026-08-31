import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/planet-coaster-2.js";

test("the Planet Coaster 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "planet-coaster-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "planet-coaster-2");

});

test("the Planet Coaster 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career Progress & Medals",
            "Park Building & Guests",
            "Advanced Coasters & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Planet Coaster 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ancient Achievements", "What Lurks Beneath", "Park Half Full", "Sunken Pleasures", "People Person's Person People", "On a Roll", "Get Your Feet Wet", "Time to Ride", "Showstopper", "First Drop", "Rolling With It", "Wheel-y Good Time", "What a View!", "Ride the Waterfall", "Quite the Crowd", "Not For The Faint-Hearted", "In a Word, Whoooosh", "Satisfaction Guaranteed", "Slip 'n Slide", "No Track Required", "Mess Without Stress", "Envy of the Gods", "Water Wonderful World", "Crowd Pleaser", "Twisting Tracks", "Final Plunge", "Eugene Would Be Proud", "Splashing Around", "Test of Endurance", "All the Slides", "Down Is Up", "Golden Oldies", "What Even Is Interest?", "Best of the Best", "Against the Odds", "Fully Loaded"];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
