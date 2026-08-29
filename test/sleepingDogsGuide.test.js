import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sleeping-dogs.js";

test("the Sleeping Dogs guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sleeping-dogs-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sleeping-dogs");

});

test("the Sleeping Dogs guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Progression",
            "Cases, Favors & Events",
            "Combat & Driving",
            "Collectibles & 100%",
            "Stat Awards",
            "Story DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Sleeping Dogs achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "In With the Gang", "That'll Show 'em", "A Big Betrayal", "Big Smiles All Around", "Minor Face",
        "Gaining Face", "Great Face", "Fashion Statement", "Stuntman", "A Slap in the Face",
        "Take A Bite Out Of Crime", "Man Around Town", "Foodie", "Environmentalist", "Gadgetman",
        "Safe Driver", "Gun Nut", "Whatever's Handy", "Tourist", "Infowlable",
        "Kleptomaniac", "Sharpshooter", "Case Closed", "Mr. Nice Guy", "Event Driven",
        "Event Planner", "Martial Law", "Wei of the Road", "Ultimate Fighter", "Super Cop",
        "North Point Scavenger", "Central Scavenger", "West End Scavenger", "Bounty Hunter", "Karaoke Superstar",
        "Hong Kong Super Hacker", "Fashion Victim", "Spiritual Healing", "Auto Enthusiast", "Slight Silver",
        "Substantial Silver", "Solid Silver", "Strike Gold", "Gold Rush", "Golden Touch",
        "Pure Gold", "Rookie", "Officer", "Detective", "Chief Inspector",
        "Pet Cemetery", "I Can Haz Banishment", "Ghosts and Stuff", "Cursed Gold", "Hell Money",
        "Bomb Squad", "Cult Master", "Hong Kong’s Finest", "Goodie Monster",
    ];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
