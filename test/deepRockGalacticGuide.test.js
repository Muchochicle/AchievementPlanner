import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/deep-rock-galactic.js";

test("the Deep Rock Galactic guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "deep-rock-galactic-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "deep-rock-galactic");

});

test("the Deep Rock Galactic guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career & Mission Counts",
            "Promotions",
            "Hazard Tiers",
            "Bosses & Big Enemies",
            "Deep Dives",
            "Resources & Riding",
            "Cosmetics",
            "Hidden: Space Rig Antics",
            "Hidden: In the Caves & Solo",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 69-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /69 Steam achievements/);

});

test("every one of the 69 official Deep Rock Galactic achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/deep-rock-galactic.json).
    const officialAchievementNames = [
        "Approved Greenbeard", "If Only I Got Paid For This...", "Barrel Kicker", "That's Not How You Play This Game", "Darwin Award",
        "Happy Feet", "Big Spender", "Party Time!", "Disc Jockey", "Barrel Rider",
        "The A-Team", "Time Well Spent", "Foreign Objects In The Launch Bay", "Self Control", "Mini Fixer",
        "Now We Have  A BET-C", "Hit 'em Where It Hurts", "Big Game Hunter", "See You Later, Detonator!", "Pest Control",
        "Just Another Bug Hunt", "Jeweler", "Prospector", "What Are These Things?", "Hi Ho, Silver - Away!",
        "Farmer", "Car Pool", "Designated Decoy", "Without A Paddle", "I Like It Down Here",
        "Miner", "Expert Miner", "Legendary Miner", "Stepping It Up", "Consistent Performance",
        "Thick-Skinned", "Employee Of The Month", "Going Lethal", "Rock Solid", "Bring Your A-Game",
        "Like A Well-Oiled Machine", "Karl Would Be Proud", "Mutated Scavenger", "It's My Party", "Good Shepherd",
        "Lone Wolf", "Bosco, You're The Best", "Performance Matters", "Management Approves", "Feelin' Perky",
        "Movin' On Up", "Corporate Climber", "Hat Trick", "Full Team Ahead", "Silver-Tier Employee",
        "Gold-Tier Employee", "Pro-Team", "Legendary-Team", "Exploring My Options", "State Of The Art",
        "Advanced Robotics", "Mustacho", "Total Makeover", "Going Deeper", "Elite Diver",
        "Deep For Speed", "Veteran Diver", "Drill-by Shooting", "Roller Coaster"
    ];

    assert.strictEqual(officialAchievementNames.length, 69, "sanity check on this test's own reference list");

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
