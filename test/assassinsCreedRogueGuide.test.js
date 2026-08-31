import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-rogue.js";

test("the Assassin's Creed Rogue guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-rogue-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-rogue");

});

test("the Assassin's Creed Rogue guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Present Day",
            "Completion & Naval Campaign",
            "Exploration & Ship Combat",
            "Combat & Cheat Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Assassin's Creed Rogue achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Halcyon days", "The end of youth", "Making new friends", "Picking teams", "One legend dies, and one is born", "Brotherhood broken", "No page unturned", "Templar then; Templar now", "Did I do that?", "He's not dead, is he?", "A worthy cause", "Sending a message", "Achieve full synchronization", "Capture all Gang HQs", "Stalker killer", "Property Tycoon", "Dedicated Employee", "Phantom Queen", "Camper", "What's yours is mine", "Do not want", "Repairman", "Cartographer", "Ancient Hero", "Knight of Yore", "Globe Trotter", "Memory collector", "Owned", "For the Empire!", "I'll take that", "Master of the North Atlantic", "Smashing", "Ice Breaker", "Freedom Fighter", "Unicorn Slayer", "Defence First", "Denied", "King of the Hill", "Ninja", "Instant Vikings", "Nap Time", "This war of mine", "Hunt the hunted", "I ENDURE", "Supplier", "Killing machine"];

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
