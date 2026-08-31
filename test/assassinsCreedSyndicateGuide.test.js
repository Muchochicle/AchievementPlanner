import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-syndicate.js";

test("the Assassin's Creed Syndicate guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-syndicate-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-syndicate");

});

test("the Assassin's Creed Syndicate guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Memory Sequences & WWI",
            "London: Activities & Borough Conquest",
            "Collectibles, Skills & Progression",
            "Vehicle & Combat Feats",
            "Jack the Ripper DLC & Fear Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Assassin's Creed Syndicate achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Spanner in the Works", "A Simple Plan", "A Modern Babylon", "A Quick and Reliable Remedy", "The Perils of Business", "A Run on the Bank", "All Is Fair in Politics", "The Joys of Freedom", "Shall We Dance?", "Friends at My Back", "The War at Home", "Cerevisaphile", "No Ticket", "Flawless Conqueror", "Bare-Knuckle Champion", "A Quarter-Furlong at a Time", "Treasure Hunter", "Thieftaker", "Unqualified Success", "Children's Aid Society", "Guardian Angel", "Godlike", "A Broad Base", "Bedfellows, Strange or Otherwise", "Needle in a Haystack", "Street Sweeping", "Multitalented", "Keys to the City", "Artisan", "Bartitsu", "Phantom", "Wonder of the Age", "Ordinary Criminal", "Language of Flowers", "Student of History", "A Life in Letters", "Chimney Sweep", "Mentor", "Furious", "WHAT IS WRONG WITH YOU", "Look Out Below", "You Wouldn't Steal a Policeman's Helmet", "Queensbury Rules", "Whirlwind of Death", "Blade in the Crowd", "Opium Scourge", "Blade from Above", "Most Unsporting", "Without a Grudge", "A well-kept secret", "Brutal", "Keep calm and carry on", "Put the fear of you into them", "Are you scared yet?", "The new terror of Whitechapel", "Ripperologist"];

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
