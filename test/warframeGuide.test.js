import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warframe.js";

test("the Warframe guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warframe-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warframe");

});

test("the Warframe guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapon Mastery I & Core Progression",
            "Pistol Mastery, Playtime & Mastery Rank Titles",
            "Remaining Weapon Categories & Rank Milestones",
            "Missions, Quests & Special Feats",
            "Plains of Eidolon, Orb Vallis & Railjack",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 193-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /193 Steam achievements/);

});

test("every one of the 193 official Warframe achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "We Shape Our Tools", "Our Tools Shape Us", "Blade Mastery I", "Blade Mastery II", "Blade Mastery III",
        "Blade Proficiency I", "Blade Proficiency II", "Blade Proficiency III", "Bow Mastery I", "Bow Mastery II",
        "Bow Mastery III", "Bow Proficiency I", "Bow Proficiency II", "Bow Proficiency III", "Brawler Mastery I",
        "Brawler Mastery II", "Brawler Mastery III", "Brawler Proficiency I", "Brawler Proficiency II", "Brawler Proficiency III",
        "Weaponsmith", "Inventor", "Scientist", "Tailor Made", "Dagger Mastery I",
        "Dagger Mastery II", "Dagger Mastery III", "Dagger Proficiency I", "Dagger Proficiency II", "Dagger Proficiency III",
        "Payday", "Nestegg", "Where Credit is Due", "Money is Power", "Secrets of the Orokin",
        "Behold the Possibilities", "Collector", "So Many Choices", "Greater Than the Sum", "Heavy Weapon Mastery I",
        "Heavy Weapon Mastery II", "Heavy Weapon Mastery III", "Heavy Weapon Proficiency I", "Heavy Weapon Proficiency II", "Heavy Weapon Proficiency III",
        "Angel of Death", "A Watchful Eye", "Building a Stable", "The Right Tool for the Job", "Each Tool with Its Own Purpose",
        "Pistol Mastery I", "Pistol Mastery II", "Pistol Mastery III", "Pistol Proficiency I", "Pistol Proficiency II",
        "Pistol Proficiency III", "Hooked", "It Keeps Getting Better", "Pride of The Lotus", "Initiate",
        "Silver Initiate", "Gold Initiate", "Novice", "Silver Novice", "Gold Novice",
        "Disciple", "Silver Disciple", "Gold Disciple", "Seeker", "Silver Seeker",
        "Gold Seeker", "Hunter", "Silver Hunter", "Gold Hunter", "Eagle",
        "Silver Eagle", "Gold Eagle", "Tiger", "Silver Tiger", "Gold Tiger",
        "Dragon", "Silver Dragon", "Gold Dragon", "Sage", "Silver Sage",
        "Gold Sage", "Master", "Middle Master", "True Master", "Pole Weapon Mastery I",
        "Pole Weapon Mastery II", "Pole Weapon Mastery III", "Pole Weapon Proficiency I", "Pole Weapon Proficiency II", "Pole Weapon Proficiency III",
        "All for One", "Healer", "Field Medic", "Cheater of Death", "Rifle Mastery I",
        "Rifle Mastery II", "Rifle Mastery III", "Rifle Proficiency I", "Rifle Proficiency II", "Rifle Proficiency III",
        "Entrepreneur", "Merchant", "Sentinel Mastery I", "Sentinel Mastery II", "Sentinel Mastery III",
        "Sentinel Proficiency I", "Sentinel Proficiency II", "Sentinel Proficiency III", "Shotgun Mastery I", "Shotgun Mastery II",
        "Shotgun Mastery III", "Shotgun Proficiency I", "Shotgun Proficiency II", "Shotgun Proficiency III", "Shuriken Mastery I",
        "Shuriken Mastery II", "Shuriken Mastery III", "Shuriken Proficiency I", "Shuriken Proficiency II", "Shuriken Proficiency III",
        "Agent", "Special Agent", "Operative", "Cryptographer", "Counter Intelligence",
        "No Longer a Rookie", "Practice Makes Perfect", "Alchemist", "Combat Specialist", "Control Freak",
        "Dark Sectors", "Egg Timer", "Hats off to you!", "Hive Five!", "Into the Void",
        "KABOOM!", "Liberator", "Mercenary", "No Witnesses", "Polarize This",
        "Polarize That", "Ride the Wave", "Saviour of Mercury", "Saviour of Venus", "Saviour of Uranus",
        "Saviour of Sedna", "Shield Saver", "Tenno and Hooch", "Tenno of all Trades", "The 8-fold Path",
        "The Camera Adds 10 Pounds", "The Sword Alone", "The War Within", "This is What You Are", "What a Nightmare",
        "Without a Hitch", "From on High", "Forged in Fire", "Champion of the People", "By the Dawn's Early Light",
        "Marathoner", "Sleds of Sunshine", "Master Angler", "Sharp Shooter", "Pest Control",
        "Plains Prospector", "Tomb Looter", "The Great Eidolon Hunt", "Saya's Vigil", "The Sacrifice",
        "Joyride", "Bounty Hunter", "Airborne Exterminator", "Ride or Die", "Money Can't Buy Happiness",
        "Moa Money, Moa Problems", "K-Driven", "Hang Tenno", "Stay Frosty", "Vallis Spelunker",
        "Race Ace", "Animal Lover", "The Abyss Gazes Into You", "That Which Does Not Kill Us", "Gonna Need a Bigger Boat",
        "Some Assembly Required", "From out of the Sun", "I'm the Captain Now",
    ];

    assert.strictEqual(officialAchievementNames.length, 193, "sanity check on this test's own reference list");

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
