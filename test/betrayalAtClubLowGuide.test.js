import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/betrayal-at-club-low.js";

test("the Betrayal At Club Low guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "betrayal-at-club-low-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "betrayal-at-club-low");

});

test("the Betrayal At Club Low guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The 11 Endings",
            "Story Pickups & Challenge Runs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 24-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /24 Steam achievements/);

});

test("every one of the 24 official Betrayal At Club Low achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Twilight Diner", "The Circus Rides Again", "The Bridge", "The DJ Dome", "The Gig", "Big Mo!", "Couched", "The Inner Game", "Eight Sides To Every Story", "Deep Exhaustion", "Nerve Burned", "Completionist", "Fancy Jacket acquired.", "Seeing Emotions", "Wearing the Fierce Mask", "Fooled Mo", "DJ Master", "Mortified By Bad Faith", "Solid Game Night", "The Beast Mobile", "A Spiked-Fruit Pizza", "Frugal Patron", "Twilight Warrior", "Iron Pizza Chef"];

    assert.strictEqual(officialAchievementNames.length, 24, "sanity check on this test's own reference list");

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
