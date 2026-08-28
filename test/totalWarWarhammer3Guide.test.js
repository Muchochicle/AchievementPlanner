import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-warhammer-3.js";

test("the Total War: WARHAMMER III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-warhammer-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-warhammer-3");

});

test("the Total War: WARHAMMER III guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Prologue",
            "Campaign Mechanics & Battles",
            "The Realm of Chaos & the Chaos Gods",
            "Kislev, Grand Cathay & the Ogre Kingdoms",
            "Winning Campaigns",
            "Mirror of Madness Trials",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 138-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /138 Steam achievements/);

});

test("every one of the 138 official Total War: WARHAMMER III achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Battle for Bokha", "Animated Adversary", "Obliterate the Odds", "Quest for Success", "Talented Amateur",
        "Professional Tactician", "The Art of Surprise", "Blazing Besieger", "The Road to Riches", "Heavens Above",
        "Man the Wall", "Celestial City Secured", "Shoulders of Giants", "Sensational Steed", "Elevated Excellence",
        "White Hat", "Centres of Excellence", "The Height of Valour", "Rising Power", "Dominating Force",
        "Peak Nobility", "The Gatekeeper", "The Gardener", "The Courtesan", "The Librarian",
        "Tear Down the Walls", "Burn the World", "Forward Position", "Most Constant Votary", "Godly Might Given",
        "Benisons of the Capricious", "Boons of the Mercurial", "Common Cause", "League of Nations", "Commercial Comforts",
        "Trading Nation", "A Steady Stream", "Well-Heeled", "Your Coffers Overfloweth", "Into the Aethyr",
        "The Blood Must Flow", "The Collector", "Unmaker of Magick", "The Blood is the Life", "Intravenous Injection",
        "Matriarchal Power", "Reclaim Your Place", "Bear With Me", "Arms Appropriated", "Partners in Conquest",
        "Ailment Accumulator", "The Fly Master Cometh", "Pustulent Promotion", "Angel of Disease", "Elements of Decay",
        "Volcanic Vehemence", "Bilious Builder", "Trader Raider", "Votive Victuals", "Royal Ranks Ramped",
        "A Mortal Wound Inflicted", "Establish & Advance", "The End of the Beginning", "Enchanted Arsenal", "Two Noble Heads",
        "Reverser of Ruin", "Spires to the Sky", "Self-Improvement", "Opus Eternal", "Feaster on Fear",
        "Succulence Selected", "Purveyor of Perversion", "Temptation's Troops", "Revelry in Riddles", "Change Up",
        "Face the Strange", "Eastern Emperor", "Dragon Emperor", "All Souls Slain", "Dark Master",
        "Blood God", "Blood-Soaked Victor", "Northern Nicator", "Oblast Overlord", "Legendary Strategist",
        "Lord of Decay", "Decrepit Defeater", "Tyrant Over All", "Odious Overtyrant", "Prince of Excess",
        "Twisted Vanquisher", "Changer of Ways", "Winged Warlord", "Terror Transmogrified", "Municipal Manipulator",
        "Black Fire Schemer", "Hel Fenn Schemer", "Fallen Schemer", "Dark Schemer", "Tzeentchian Schemer",
        "Black Fire Mastermind", "Hel Fenn Mastermind", "Fallen Mastermind", "Dark Mastermind", "Tzeentchian Mastermind",
        "Ultimate Mastermind", "Realm of the Ruinous", "Blood-Grounds, Everywhere!", "Heirs of Breton", "Age of Chivalry",
        "Favoured Son of Chaos", "The End Times Approach", "Sons of Hashut", "Engines of Ruin", "Dreadlord",
        "Witch King", "Dawi Dominance", "Age of Reckoning", "Imperials of Excellence", "Legends Amongst Men",
        "Da Best Waaagh!", "Da Greatest Waaagh! Ever!", "Asur Prince", "Phoenix King", "Slann Mage-Priest",
        "Old One", "The Dark Gods' Playthings", "Immortal Marauders", "Warlord", "Verminlord",
        "Walk Like a Nehekharan", "King of Kings", "Master of the Seas", "A Tale will be Told", "Lambs to the Slaughter",
        "Necromantic Dominance", "Season of Supremacy", "Age of the Eternal Oak"
    ];

    assert.strictEqual(officialAchievementNames.length, 138, "sanity check on this test's own reference list");

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
