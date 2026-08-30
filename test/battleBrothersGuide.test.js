import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/battle-brothers.js";

test("the Battle Brothers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "battle-brothers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "battle-brothers");

});

test("the Battle Brothers guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Crises & Contracts",
            "Company Building & Economy",
            "Combat Feats I",
            "Combat Feats II & Renown",
            "Legendary Threats & Crafting",
            "Endgame & DLC Content",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 101-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /101 Steam achievements/);

});

test("every one of the 101 official Battle Brothers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Greenskin Slayer", "Bane Of The Undead", "Kingmaker", "Trial By Fire", "Blood Money",
        "Meddling With Nobles", "A Full Company", "Power In Numbers", "Bloody Toll", "Broken Promises",
        "Back In Business", "Moneymaker", "Dragon's Hoard", "Man In Black", "Beastmode",
        "Outgunned", "Wildgrowth", "King Of The Hill", "Making Friends", "Making Allies",
        "Bling Bling", "Tricked Out", "To Fight Another Day", "Lessons Learned", "Rest In Pieces",
        "Trader", "Master Trader", "Patched Up", "Scars For Life", "Survivor",
        "Campaigner", "Anniversary", "Who Let The Dogs Out?", "Overcoming Fear", "Outnumbered, Never Outclassed",
        "Swingin'", "Not So Noble", "Swordmaster", "Deadeye", "Old And Wise",
        "Field Hospital", "Hard To Kill", "Hip Shooter", "How To Berserk", "Taste Your Own Medicine",
        "Ulfhednar", "First Aid", "Savior", "Never Trust A Mercenary", "Atheist",
        "Back To The Grave", "Restless Dead", "A Knight's Tale", "There Can Be Only One", "Bullseye",
        "Walking Statue", "Never Give Up", "Making A Name", "Man Of Renown", "Stuff Of Legends",
        "Time To Rebuild", "Deserter", "Welcome Back", "Man Of Iron", "Tough Farewell",
        "Early Retirement", "A Bitter End", "Leaving A Mark", "Leaving A Legacy", "Power Of Music",
        "Bag a Hag", "Chopping Wood", "Beast of Beasts", "Sleep Tight", "Scrambled Eggs",
        "Famed Explorer", "I Made This!", "Memory Loss", "A Colorful Band", "Nothing Personal",
        "Reproach Of The Old Gods", "Voice of Davkul", "King Of The North", "Too Stubborn To Die", "Give Me That!",
        "Putting Down A God", "Friend Or Foe", "Human Wave", "Give Me Back My Legions!", "Gladiator",
        "Cultural Misunderstanding", "Burn Them All!", "Friend of the South", "Stone Mason", "Assassin",
        "Barrage", "Full House", "Campfire Company", "Under New Management", "Dance Off",
        "Hey! This is Library!",
    ];

    assert.strictEqual(officialAchievementNames.length, 101, "sanity check on this test's own reference list");

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
