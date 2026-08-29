import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/barotrauma.js";

test("the Barotrauma guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "barotrauma-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "barotrauma");

});

test("the Barotrauma guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Creatures & Combat",
            "Crew Roles & Rounds",
            "Survival & Depth",
            "Exploration & Travel",
            "Missions",
            "Special Hires & Meta",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 76-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /76 Steam achievements/);

});

test("every one of the 76 official Barotrauma achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Killed a Moloch", "Stop the Hammertime", "The Bigger They Are, the Harder They Fall", "Xenoarchaeologist", "For the Coalition",
        "Viva la Revolution", "Don't You Die on Me!", "As Good As New", "Insurgency", "Not On My Watch",
        "No Fun Allowed", "Getting Clean", "A Gaze into the Abyss", "Nuclear Blast Survivor", "I Am the Cure",
        "Poisoner", "I Am Become Death", "Whatever Works", "Praise the Honkmother", "Last Man Standing",
        "The Lone Sailor", "Gotta Go Fast", "Smooth Sailing", "Where No Man Has Gone Before", "This is Fine.",
        "The Cold Caverns", "The Europan Ridge", "The Hydrothermal Wastes", "The Aphotic Plateau", "The Great Sea",
        "Novice Seafarer", "Experienced Seafarer", "Xenocide", "Genocide", "Freighter",
        "Naval Architect", "Extravehicular Activity", "Here I Recognize No Superiors", "I am the Law", "Ever Increasing in Speed and Power",
        "Truth in Simplicity", "According to Ability and Judgment", "Do What You Love", "The End is the Beginning", "Underwater Coffin",
        "Safety Not Guaranteed", "The Abyss Gazes Back", "The King of Cling", "Spinal Tapped", "Kill It Before It Lays Eggs!",
        "Ascension", "The Grandest of Jesters", "Top Brass", "The Cream of the Crop", "Force for the Forceless",
        "Some Men Just Want to Watch the World Burn", "Heralds of the Tide", "The Teacher of Nothing", "Ruin Raider", "Aggressive Archaeology",
        "A Light in the Darkness", "Knight in Rusty Armor", "Bounty Hunter", "Unwanted Guests", "Pest Control",
        "Don't Count Them Before They Hatch", "Amateur Geologist", "Fight the Power", "Resistance is Futile", "Get Out Alive",
        "The Abyss Beckons", "Europa's Finest", "King of the Hull", "Hide And Seek", "Ancient Novelty",
        "What Smirks Below",
    ];

    assert.strictEqual(officialAchievementNames.length, 76, "sanity check on this test's own reference list");

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
