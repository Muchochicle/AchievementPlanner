import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-warhammer-2.js";

test("the Total War: WARHAMMER II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-warhammer-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-warhammer-2");

});

test("the Total War: WARHAMMER II guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Vortex Campaign & Race Objectives (Part 1)",
            "Vortex Campaign & Race Objectives (Part 2)",
            "DLC Race Challenges",
            "Mortal Empires: WARHAMMER I Races",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 152-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /152 Steam achievements/);

});

test("every one of the 152 official Total War: WARHAMMER II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Loremaster of Hoeth", "Tyrant of Tor Anlec", "Tyrant of Naggarond", "Cave In", "Origin Unknown",
        "Stargazer", "Tiranoc Charioteer", "Camera Obscura", "Lothern Sea Helm", "Black Ark Corsair",
        "Dreadlord of Hag Graef", "Dark Mother Superior", "Skaven by Name…", "Breed Like Rats", "Herald of Decay",
        "Asur Ambassador", "Colonial Governor", "See What You Did There…", "Legacy of the Great Necromancer", "Uplink Established",
        "Skilled Geomancer", "Slaver", "Slave Trader", "Magma Master", "Yarrrrr!!!",
        "Yurrrggghhh!!!", "The Forest Whispers My Name", "Forge of the Blind God", "Best Served Cold", "The End of Suffering",
        "Coldblood, Full Stomach", "Reduced to Ashes", "Incendiary Tendencies", "Taxman", "Tax Collector",
        "Tax Farmer", "Trader", "Merchant", "Factor", "Veteran",
        "Champion", "Paragon", "Retainer", "Councillor", "Honour Guard",
        "Power Petitioner", "Spoils Seeker", "The Collector", "Treasure Hunter", "Antique Dealer",
        "The Treasurer", "Beast Tamer", "The Menagerist", "Trade Attaché", "Master Diplomat",
        "Military Envoy", "Grand Ambassador", "Abominator", "Inhuman Ingenuity", "Master of Contagion & Disease",
        "Dragon Lord", "Phoenix Lord", "Keeper of the Eternal Fire", "Dark Dragon Lord", "Soul Eater",
        "Burnt to Cinders", "A Taste for Blood", "Lookout Below!", "Revered Guardian", "Phoenix King",
        "Asur Prince", "Witch King", "Dreadlord", "Old One", "Slann Mage-Priest",
        "Verminlord", "Warlord", "Living Legend", "Skink Priest Initiate", "Skink Priest Adept",
        "Skink Priest Decipherer", "Librarian", "Mage", "Archmage", "Seer",
        "Sorceress", "Supreme Sorceress", "Artificer", "Warlock Engineer", "Grey Seer",
        "Neophyte", "Ipsissimus", "Adventurer", "Conqueror", "Exceptionally Able",
        "Vanguardian", "Liquidator", "The Stuff of Legend", "Waylayer", "Assailant",
        "Field Marshal", "Generalissimo", "Spoiling for a Fight", "First Among Equals", "Plaguebearer",
        "A Taste for Glory", "Dark Side of Morrslieb", "Black is the New Black", "See-Nile Crafter", "Family Feud",
        "Settra Rules!", "Book Monitor", "Organ Collector", "Fetch Me the Green Stuff!", "That's a Wrap!",
        "Thralls of Nagash", "Priestly Congregation", "Asp-Irational", "Tombtastic", "Walk Like a Nehekharan",
        "King of Kings", "The Good Old Times", "Back in Business", "Bottom Dweller", "Phantasm of the Opera",
        "Leech", "Know My Name", "Scourge of the Seven Seas", "Parrot Talk", "X Marks the Spot",
        "Bring Out the Big Guns", "Motley Crew", "Master of the Seas", "A Tale will be Told", "Imperials of Excellence",
        "Legends Amongst Men", "Realm of the Ruinous", "Blood-Grounds, Everywhere!", "Heirs of Breton ", "Age of Chivalry",
        "Favoured Son of Chaos", "The End Times Approach", "Dawi Dominance", "Age of Reckoning", "Da Best Waaagh!",
        "Da Greatest Waaagh! Ever!", "Lambs to the Slaughter", "Necromantic Dominance", "Season of Supremacy", "Age of the Eternal Oak",
        "The Dark Gods' Playthings", "Immortal Marauders"
    ];

    assert.strictEqual(officialAchievementNames.length, 152, "sanity check on this test's own reference list");

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
