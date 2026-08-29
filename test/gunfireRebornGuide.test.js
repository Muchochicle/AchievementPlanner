import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gunfire-reborn.js";

test("the Gunfire Reborn guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gunfire-reborn-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gunfire-reborn");

});

test("the Gunfire Reborn guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game - Part 1",
            "Base Game - Part 2",
            "Base Game - Part 3",
            "Spirit Realm & Later Heroes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 134-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /134 Steam achievements/);

});

test("every one of the 134 official Gunfire Reborn achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Blood", "Death Proof", "Accidental Explosion", "All for Nothing", "Die After Revival",
        "Abstracted Driver", "Lava Hell", "Lethal Gas", "Thunder Outrage", "Painful Death",
        "Shopaholic", "Generous Boss", "One More Time", "A Penny Left", "Money for Nothing",
        "Enlightened Beast", "Slayer of Ichthyosaur", "Powerful Fire", "Deft Move", "Rookie",
        "Junior", "Field Proficiency", "Expert", "Master", "New Beginning",
        "Sharpshooter", "Tactical Sniper", "Savage Butcher", "Blacksmith's Apprentice", "Just for Fun",
        "Best Equipment", "Rambo", "Grenade Master", "Dual-Wield Elite", "Energy Orb Master",
        "Happy-Go-Lucky", "An Eye for Detail", "Elementary Upgrade", "Ultimate Grinder", "Chronic Disaster",
        "Burning City", "Poison Ivy", "Electromagnetic Effect", "Hallucination Poison", "Mad Bomber",
        "Gas Attack", "Combat Medic", "Easy Win", "Team Captain", "Hard Fight",
        "Death of Yoruhime-Maru", "No Way to Escape", "No Place to Hide", "Crab Buffet", "Wave-like Subtle Step",
        "Top Athlete", "Conqueror", "Buzzer Beater", "Worm Hunter", "Battlefield Radar",
        "Air Strike", "Eyes on Weakness", "Erudition", "Painting Master", "Victory of Crown Prince",
        "Victory of Ao Bai", "Victory of Qing Yan", "Arms Dealer", "Occultism Leader", "Art of Explosion",
        "Victory of Lei Luo", "Son of Thunder", "Philanthropist", "Lucky Draw", "Professional Athlete",
        "Sports Car", "The Sky is the Limit", "Fresh Start", "Master of Daily Challenge", "Legendary Shot",
        "Advanced Weapon", "Everlasting Martyr", "Raging Winds", "Victory of Tao", "Sword Storm",
        "Pacified Serpent", "Drown Into Nightmare", "1 Life Clear", "Qian Sui's Win", "Absolute Defense",
        "Breaking Dawn", "Hold Your Breath", "Fully in Control", "Efficient Utilization", "Diligence and Thrift",
        "Thrifty Expert", "Energy Chain", "Full Force", "Soaring Eagle", "Thunderous Growl",
        "Sword Dance", "Blue Wave", "Temporary Close", "Born of Fire", "Victory of Xing Zhe",
        "Spare No Effort", "Deadly Strike", "Legend of Crimson Fox", "Soul Taker", "Pragmatist",
        "Return to the Apex", "Hell Hunter", "Greater Evil Exorcised", "Spiritual Jade", "Victory of Zi Xiao",
        "Victory of Nona", "Destiny's Choice", "Shelter From Storm", "Unwavering Preference", "Never Defeated",
        "Endless Journey", "Back-to-Back", "Victory of Lyn", "Victory of Momo", "The Most Slient Winter",
        "Spirit and Shade", "Frost Strike", "Poised Brush", "Victory of Cang Jue", "Victory of Yoyo",
        "Soaring Shadow", "Leaf Lord", "Unrivaled Wrath", "Wild Rite",
    ];

    assert.strictEqual(officialAchievementNames.length, 134, "sanity check on this test's own reference list");

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
