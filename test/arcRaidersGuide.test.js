import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/arc-raiders.js";

test("the ARC Raiders guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "arc-raiders-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "arc-raiders");

});

test("the ARC Raiders guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Exploration & Progression",
            "Miscellaneous Feats",
            "PvE: Fighting the ARC",
            "PvP: Raiders vs Raiders",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official ARC Raiders achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Scavenger", "Well-Traveled", "The Big Haul", "Three Birds, One Stone", "Snitches get Stitches", "Escape Artist", "Rite of Passage", "Into Thin Air", "Behind Closed Doors", "The Long Haul", "Expert Weaponsmith", "Well-Armed", "Back from the Brink", "Legend of Speranza", "Dedicated to the Craft", "Self-Sufficient", "In Your Element", "Getting Serious", "Same Song, Same Verse", "In the Nick of Time", "Not Over Till It's Over", "Bells and Whistles", "Long Shot", "No Going Back", "Just Dropping In", "Most Durable Pants in Speranza", "See You Never", "Today You, Tomorrow Me", "Top of the World", "For Science!", "Shots Fired", "Racking Them Up", "Trail of Destruction", "Death From Above", "Bringing Down the Big Guns", "Into the Breach", "A Tale for the Ages", "Blindsided", "Comparative Study", "Hook, Line, and Sinker", "Mechanical Failure", "Unyielding", "A Vendetta Is Born", "Horseshoes and Hand Grenades", "Crossed the Threshold", "Up Close and Personal", "The Friends We Made Along The Way", "Enemy of My Enemy", "Heart of Gold", "Practice Makes Perfect"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
