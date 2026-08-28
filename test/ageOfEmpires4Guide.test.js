import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/age-of-empires-4.js";

test("the Age of Empires IV guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "age-of-empires-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "age-of-empires-4");

});

test("the Age of Empires IV guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game: Campaigns & Their Mission Challenges",
            "Base Game: Victories, Art of War, AI & Masteries",
            "Civilization Challenges & the Ottomans / Malians",
            "Masteries, the Byzantines & Japanese, and Sultans Ascend",
            "Knights of Cross, the Crucible & the Steppe / Jin Content",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 175-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /175 Steam achievements/);

});

test("every one of the 175 official Age of Empires IV achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Empires Will Rise", "Kingdoms Will Fall", "A New Age Is Upon Us", "The Normans", "The Hundred Years War",
        "The Mongol Empire", "The Rise of Moscow", "Age of Empires IV Campaign", "Counter-Raider", "Chivalry",
        "Siegebreaker", "Quit Touching Me!", "Fill the Coffers", "Battle Royal", "Careful Cannons",
        "Twinkle Hooves", "Yeah, Well, You Should See the Other Guy", "Forgot a Batu", "Boom Boom Pao", "Keep the Change",
        "Get Off My Bailey!", "Ancient Tower Defense", "Classic Conquest", "The Fundamentals", "Quick Study",
        "Master of the French", "Master of the Holy Roman Empire", "Master of the Delhi Sultanate", "Master of the Chinese", "Master of the Abbasid Dynasty",
        "Recorded History", "By Force", "By Faith", "By Fortune", "Make It Quick",
        "Walk the Earth", "Wonderstruck", "Precious Medals", "Challenge Taker", "Record Breaker",
        "Sub-Human Subduer", "Par-Human Potentate", "High-Human Hero", "Super-Human Subjugator", "The Faithful",
        "All the World's Knowledge", "Shifting Winds", "A Golden Age", "Dread Fort", "Pass the Marshmallows",
        "Lancerlot", "Who Needs Infantry?", "Big Shot", "Do You Deliver?", "Wild's Bounty",
        "Big Game Hunter", "Deforestation", "In Memory of Kulikovo", "Raiding Party", "Jagutu-iin Darga",
        "Long Live the Khan", "Explore, Expand, Exploit", "Who Needs Cavalry?", "Inspired Economics", "Servants of the Land",
        "Swift Site", "Herd You Like Elephants", "Field Construction", "Higher Education", "Pantomath",
        "Be Subtle", "Great Walls", "Move Like Wind, Attack Like Fire", "Four Histories", "Wololottery",
        "Having a Blast", "All Creek, No Paddle", "Through the Ages", "Coast Is Clear", "Accurate Likeness",
        "To Remind, To Advise, To Warn", "A Heraldic Achievement", "Du Bois Are Back in Town", "We Charge Extra for That", "Hope Is Kindled",
        "Master of the English", "Master of the Mongols", "Master of the Rus", "Master of the Ages", "Ottoman Expansion",
        "Transcontinental Empire", "Regimented Training", "Mobile Strikes", "A Wonderful Cannon", "Sound Advice",
        "Hell of a Beat", "Trojan Horses", "Malian Rise", "Trans-Saharan Empire", "Tax Collector",
        "From the Shadows", "Just a Prick", "All Mine", "Aerial Poisoned Attacks", "All in the Ranch",
        "Master of the Ottomans", "Master of the Malians", "The Ottoman Arts", "The Malian Arts", "Win for the Empire",
        "Protecting Constantinople", "Unsinkable", "Getting Some Help", "Bulwark", "Let There Be Fire",
        "Overflow", "Let It Flow", "A First for the Emperor", "Established Lands", "Protecting Us",
        "Daimyo Mastery", "Exchange Rates", "Shinobi Mastermind", "Gunpowder Mastery", "Successful Gatherer",
        "The Sultans", "Master Naval Trader", "In the Lead by a Quarter Nile", "Saving the Day Early", "Rescue",
        "Victory Through Cross and Sword", "Journey to the Sacred Land", "Castle Crasher", "'Tis But a Scratch", "Feeding the Rich",
        "The Red Rose Flourishes", "Blot out the Sun", "My House is Richer Than Yours", "Lead the Charge", "Knife to Meet You",
        "Against All Odds", "Get Off My Lawn", "Jerusalem Has Come", "A Rose for the Fallen", "Conqueror of History",
        "The Greatest Khan", "Lords of the Forest", "Uncontested", "Gingko’s Grandeur", "No Luck Needed",
        "Toomai's Dance", "Elevated Theology", "Thunder and Trumpets", "Great Things", "Ready, Aim, Fire!",
        "By Odin's Beard", "Var-Aegean", "The Great Unifier", "Itadakimasu!", "Daimyo Dance-Off",
        "Bombard Barrage", "Just Like Batu Khan", "Well Stocked", "Let’s Goooooooooo!", "More Cuman than Cuman",
        "Giddy Up!", "Ready and Waiting", "Master of the Jin Dynasty", "Good Karma", "An Offer They Couldn’t Refuse",
        "Serve the Country with Perfect Loyalty", "There is no Escape", "Master Negotiator", "Under Cover of Night", "Resourceful Raider"
    ];

    assert.strictEqual(officialAchievementNames.length, 175, "sanity check on this test's own reference list");

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
