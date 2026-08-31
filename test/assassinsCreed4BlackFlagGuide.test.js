import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-4-black-flag.js";

test("the Assassin's Creed IV: Black Flag guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-4-black-flag-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-4-black-flag");

});

test("the Assassin's Creed IV: Black Flag guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: Memory Sequences & Present Day",
            "Caribbean Exploration & Naval",
            "World Activities & Combat Feats",
            "Multiplayer",
            "Freedom Cry DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Assassin's Creed IV: Black Flag achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Heroes Aren't Born", "Good While It Lasted", "A Pirate's Life For Me", "No Apologies", "Death Of A Salesman", "Mixing Up The Medicines", "The Hammer Falls", "Adrift", "A New Hope", "My Elusive Fortune", "Been Down So Long...", "Just Like Starting Over", "Saw That One Coming...", "Routine Hacking", "Getting Weird Around Here", "Bunker Buddies", "It's All Good", "By The Book", "Hungover", "Silence, Fool!", "Owned", "Vault Raider", "Killer Killer", "Help A Brother Out", "Sea Legs", "King Of The Castle", "Employee Of The Month", "Business And Pleasure", "Mer-man", "Redingote Up!", "Thug Life", "Devil Of The Caribbean", "Destroyer", "Seven Deadly Seas", "Barfly", "Cannon fodder", "FTFY", "Cartographer", "Ghost In The Machine", "Roped In", "Sharing Is Caring", "All Aboard!", "Siren Song", "Wild West Indies", "Excavator", "Committed To The Cause", "Personal Bag Of Tricks", "Master Of The Caribbean", "Lab Technician", "All Rounder", "Sacred Land", "Queen Anne’s Revenge ", "Preemptive Strike ", "Elevator to the Gallows ", "Liberation Day", "Seeds of independence", "Firepower", "His Own Medicine", "His Word Was “Perhaps”", "His Full Attention"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
