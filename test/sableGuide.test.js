import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sable.js";

test("the Sable guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sable-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sable");

});

test("the Sable guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & The Three Trials",
            "Masks",
            "Chum & the Wyrm",
            "Doors & Puzzles",
            "Wildlife & Collectibles",
            "The Hoverbike",
            "General Milestones",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Sable achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/sable.json).
    const officialAchievementNames = [
        "Just The Two of Us", "The Gliding", "Chum Expert", "The Quick and the Curious", "Amateur Historian",
        "The Machinist Mask", "The Beetle Mask", "The Climber Mask", "The Entertainer Mask", "The Guard Mask",
        "The Scrapper Mask", "The Merchant Mask", "The Cartographer Mask", "Many Different Faces", "Chum Novice",
        "Honorary Chum", "The Dunboyne", "Trellick's Pillar", "Shadow Of Neave", "Rowleys Way",
        "Centre Of Brunswick", "Balfron Connection", "Thread The Needle", "Gastric Bypass", "Fragile Goods",
        "Ceiling Of Stars", "Up On High", "Power to the People", "Take That!", "Glider on the Storm",
        "Smoked Out", "Nesting Giant", "Got Your Nose", "Squeeze One Out", "A Hard Place",
        "Bike Collector", "Bike Aficionado", "Badge Hobbyist", "Badge Collector", "Simoon",
        "Under The Hood", "The Gift of Gab", "Silver-Tongued Sable", "Sticky Paws", "More Than A Box Of Sand",
        "Treasure Tracker", "Bikes Don't Fly", "Dune Rider", "Bubble Up", "Not That Kind Of Gliding",
        "Wrapping Up", "Playing Dress Up", "Big Spender", "The Angler Mask", "Quite The Catch",
        "Vivacious Vivarium"
    ];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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
