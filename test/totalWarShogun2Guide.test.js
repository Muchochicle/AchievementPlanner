import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-shogun-2.js";

test("the Total War: Shogun 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-shogun-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-shogun-2");

});

test("the Total War: Shogun 2 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Multiplayer Combat & Ranks",
            "Multiplayer Mastery & Battle Tactics",
            "Grand Campaign Progression",
            "Clan Campaign Victories",
            "Fall of the Samurai: Avatar & Historical Battles",
            "Fall of the Samurai: Clan-Specific & Naval Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 106-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /106 Steam achievements/);

});

test("every one of the 106 official Total War: Shogun 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Stranglehold", "Carve a Path", "Uniter of Japan", "Loyal to the Clan", "Serve with Honour",
        "Path of the Leader", "Heroic Warriors", "Exceptional Warriors", "Commander of Commoners", "Elusive Strike force",
        "Spreading Like Wildfire", "Legendary Force", "Battlefield Dominance", "Experienced Taisho", "Inspiring Counterattack",
        "Castle-stormer", "Man the Defences", "The Dragon of Japan", "Master of the Waves", "Bringer of Death",
        "Zen-like Dedication", "The Army on the March", "Claw of the Tiger", "Swathed in Fire", "Balanced Attacker",
        "The Gathering Storm", "Berserk Charge", "Fear No Horseman", "Onna-Bugeisha", "Forged in the Hottest Flame",
        "Swift and Deadly", "Unnecessary Force", "Divine Right", "Holder of Kyushu", "Holder of Shikoku",
        "Eradicate the Hattori", "Head-Hunter", "Fearsome Commander of Men", "Master Interrogator", "Servant of God",
        "Legendary Sohei", "Agent of the Stealthy Blade", "Soaring Fame", "Living for Battle", "Trade Route Monopoly",
        "Glittering Grand Cities", "Advanced Firearms", "Military Might", "Belligerent Admiral", "Hojo Victory",
        "Oda Victory", "Takeda Victory", "Tokugawa Victory", "Chosokabe Victory", "Date Victory",
        "A Promising Beginning", "One Rule Under God", "Famed Shogun", "A Respectable Rule", "Mori Victory",
        "United in Conquest", "Japan Torn Asunder", "Dishonoured Foe", "Shimazu Victory", "Uesugi Victory",
        "Eradicate the Ikko-Ikki", "Stubborn Pursuer of Victory", "There Can Be Only One", "Against All Odds", "Summer Son ",
        "Skilled Warrior", "Double Dragons", "Keeping to Traditions", "Modernisation", "Not On My Watch",
        "A Journey Begins", "Uphill Struggle", "A Blow to the Temple", "Wrecking Ball", "The Iron Lady",
        "Perfect Ten", "Journey's End", "Requiem of the Dead", "Gift-wrapped", "Agent Provocateur",
        "Gateway to the West", "Father of the Imperial Navy", "Wolves of Mibu", "One Hundred Sacks of Rice", "Hereditary Honour",
        "Semper Fi", "Rule, Britannia!", "L'Ocean is Mine!", "Embrace the New", "All Aboard!",
        "Thy Will Be Done", "Hero of the Empire", "Hero of the Shogunate", "The Duellist", "Ezo Republic",
        "A Warrior's Bane", "Hard Pounding", "Damn the Torpedoes", "Warhead", "Towering Inferno",
        "Redoubtable",
    ];

    assert.strictEqual(officialAchievementNames.length, 106, "sanity check on this test's own reference list");

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
