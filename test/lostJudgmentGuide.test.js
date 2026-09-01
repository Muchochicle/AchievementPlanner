import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lost-judgment.js";

test("the Lost Judgment guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lost-judgment-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lost-judgment");

});

test("the Lost Judgment guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & Investigations",
            "Side Cases, Skills & Detective Tools",
            "TownGo, Minigames & The Kaito Files",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Lost Judgment achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Master Detective", "The Game is Afoot", "The First Penguin", "Trending Video", "Unexpected Guests", "All Are Punished", "To Survive", "Lessons Taught", "The Mole", "Scales of Justice", "The Cycle is Broken", "Legendary Detective", "Hop, Step, Rabbits", "Revenge of the Nerds", "Everybody Can Change", "Born to Ride", "High School Drama", "On the Case", "Private Eye", "Elementary, My Dear", "Kick Flip", "Merciful", "A Man Among Amons", "Very Observant", "Receiving Signals", "Eavesdropping", "Who's a Good Boy?", "Irresistible Charm", "Skill Dabbler", "Skill Pro", "Skill Master", "TownGo Casual", "TownGo Whale", "TownGo Tourist", "TownGo Tour Guide", "TownGo Freshman", "TownGo Senior", "TownGo Master", "An Ounce of Prevention", "Skate or Die", "Sweet Jams", "Bad Fur Day", "The Aviator", "Party Star", "No Blind Spots in Any Direction", "Yagami Pro Skater", "Suffer Like G Did", "The Gamer Life", "Such a Flirt", "Hopeless Romantic", "All's Fair in Love", "What Goes Around", "Like Father, Like Son", "Out for Blood", "Cat & Mouse", "Escaping a Daydream"];

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
