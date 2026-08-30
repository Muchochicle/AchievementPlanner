import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crusader-kings-2.js";

test("the Crusader Kings II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crusader-kings-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crusader-kings-2");

});

test("the Crusader Kings II guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Titles, Ascension & Early Challenges",
            "Holy Places, Empires & Religions",
            "The Old Gods & Rajas of India",
            "Charlemagne & Way of Life",
            "Horse Lords & Conclave",
            "The Reaper's Due & Immortality",
            "Monks and Mystics & Jade Dragon",
            "Holy Fury, Shattered & Random Worlds",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 161-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /161 Steam achievements/);

});

test("every one of the 161 official Crusader Kings II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Marriage Game", "A Pope of My Own", "All Three Popes", "Exalted Among Men", "Until Death Do Us Part", "Always Bet On Duke", "Full House", "Crusader", "Paragon of Virtue", "United the Kingdoms", "On English Neck a Norman Yoke", "It's Good to be the King", "It's Better to be the Emperor", "Survivor", "Hard Ruler", "Crusader King", "Prester John", "Russkaya Pravda", "The Outside Bet", "Protector of the Holy Places", "Pentarch", "Legacy of Rome", "S.P.Q.R.", "The One Who Brings Benefit", "Kingdom of David", "New Ways for Old Gods", "To Mecca!", "Pilgrim", "Mr. Doge-Elect", "Merchant Prince", "Saint", "Celebrity", "Dream Home", "Trade Empire", "Khan of Khans", "Viking Raider", "And Stay Out!", "Persistent Survivor", "Divine Blood", "Dragon Blood", "Royal Blood", "The Black Bishop", "The Caliphate Strikes Back", "Decadent Warrior", "Keeping it in the Family", "Turbulent Priest", "Dwarf Fortress", "Holy Smoke", "Empressive", "Black Widow", "The British Raj", "Beyond the Indus", "My Very Own Subcontinent", "Kali Maaa", "I can see its Stripes", "Great Indian Sultanate", "Saint Thomas's Dream", "What Schism?", "Red Sea Resort", "Looking East and West", "Holy and Roman", "Empire of the Sun", "I Shed Blood of Saxon Men", "Saxons Everywhere, Unite!", "The Frisian Coast is Long", "Little Brother Rules!", "Iron Crown", "Viking Ummah", "Medieval Schlieffen", "I'm Sorry, Desiderata", "Seven Centuries", "Not a Tribe", "Res Publica", "Great Hunter", "Casanova", "Mudslinger", "Family Bliss", "We’re In Business", "Bring it On", "Wise Guy", "Let’s Play", "Stargazer", "By the Gods", "Steppe by Steppe", "\"Never start a Land War in Asia\"", "Norse-East", "Pax Mongolica", "Sword to Ploughshare", "Let's go out into the Field", "Nobody's Business but the Turks", "One Arrow Alone can be Easily Broken but Many Arrows are Indestructible", "Go West Young Mongol", "Who Needs Vasco da Gama?", "Run With the Wolf", "The Yes Men", "You Owe Me", "Shadow Prince", "Pay to Win", "Mercotransaction", "One is not Amused", "Follow Me", "Prodigious Five", "I am the Law", "Peace in Our Time", "Hospitable", "Papal Mache", "Close Call", "An Honest Mistake", "No Solicitors", "Not So Bad", "Eternity Denied", "There Can Be Only One", "Typhoid Mary", "Scarrrrrred for Life", " I Got Better", "Aptly Named", "Unwelcome Visitors", "Dark Lord", "Birthright", "Jihad Sultan", "Black Pope", "Smash the Patriarchy", "The Good Old Days", "Got Land", "Legacy of the Indo-Norse", "Off with their heads!", "Aladdin", "Ten Thrones", "A Servant No More", "White Hun", "The Conqueror", "Sakya Trizin", "Child of the Dragon", "Bön Appétit!", "Snipped off to China", "A Curious Trinket", "Headhunter", "Defender of the Holy Sepulchre", "Venetian Guile", "Deus Vult", "History is in my Blood", "I Do Not Play Chess", "L'Eglise, c'est Moi!", "Zero to Hero", "Heathenous Ways", "By Jupiter!", "Bloody Line", "Pagan Fury", "Under the Power of the Eternal Heaven", "From Servant to Saint", "Family First", "Bless my Reign down in Africa", "Over Your Dead Body", "Lech, Czech, and Rus", "Baptism of Rus’", "Love is a Battlefield", "From the Ashes", "Not so Great", "Rise of Civilization", "What Could Have Been", "Lord of the Flies"];

    assert.strictEqual(officialAchievementNames.length, 161, "sanity check on this test's own reference list");

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
