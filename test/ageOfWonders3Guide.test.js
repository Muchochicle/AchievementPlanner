import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-wonders-3.js";

test("the Age of Wonders III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-wonders-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-wonders-3");

});

test("the Age of Wonders III guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battles, Leaders & City Building",
            "Progression & Campaign Victories",
            "Multiplayer & Wonders",
            "Eternal Lords: Undead, Necromancer & Frostling",
            "Eternal Lords: Tigran, Shadowborn & Beyond",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Age of Wonders III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Blood", "Settling Down", "Scorched Earth", "Warlord's Triumph", "Sorcerer's Triumph",
        "Rogue's Triumph", "Dreadnought's Triumph", "Archdruid's Triumph", "Theocrat's Triumph", "Siege Master",
        "Represent", "Adventurer", "Silver Tongue", "Treasure Raider", "Seasoned",
        "Seaworthy", "Friend of Monsters", "Talent Scout", "Well Equipped", "Blacksmith",
        "Mama?", "Paradise City", "Scholar", "Caster", "Protector of the Light",
        "Champion of the Commonwealth", "Champion of the Elven Court", "Rebel of the Commonwealth", "Rebel of the Elven Court", "Master of the Unknown",
        "Challenger", "Taste of Victory", "Champion of Wonders", "Grand Master of Wonders", "Overlord",
        "Best Friends Forever", "Mine Crafted", "The Importance of Being Ernest", "Mystical City", "Power Unleashed",
        "You Work for Me Now", "First!!", "Fortune's Favor", "Party Pooper", "Elephant Whisperer",
        "Fourteenth Bloodline", "Community Member", "Master of Eternal Silence", "Master of Eternal Magic", "Master of Eternal Winter",
        "Necromancer's Triumph", "For Whom the Bell Tolls", "Join Me in Death", "Who Wants to Live Forever", "Living in a Ghost Town",
        "Don't Fear the Reaper", "Winter Has Come", "Cold as Ice", "To Heal a Frozen Heart", "Cats Rule Everything",
        "Kittens Everywhere", "Lady of Darkness", "Shadowfall", "Lady of Light", "Keep the Faith",
        "Lady of Justice", "Iron Sky", "Deep Friendships", "Going Postal", "V-Mail",
        "Dedicated Monogamist", "Interracial Harmony", "Liberator", "Great Unifier",
    ];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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
