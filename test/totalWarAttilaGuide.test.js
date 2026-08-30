import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-attila.js";

test("the Total War: ATTILA guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-attila-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-attila");

});

test("the Total War: ATTILA guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Battles, Kills & Tactical Feats",
            "Legendary, Grand Campaign & Victory Conditions",
            "Faction Campaign Victories",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 118-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /118 Steam achievements/);

});

test("every one of the 118 official Total War: ATTILA achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Resting In My Account...", "This is Total War!", "Bloodthirsty", "Butcher", "Gore-drenched", "Veni, Vedi, Vici!", "A Scourge is Born", "Social Climber", "Take No Prisoners", "Scholae Romanes", "Cupid's Arrow", "Cloak & Dagger", "Grizzled Veterans", "Burn Baby Burn", "Beheading the Snake", "Against All Odds", "The Other Way", "Tribute", "The More Things Change", "Nepotism", "Attila the Dead", "Demagoguery", "Saboteur", "Inside Man", "Boarding Action", "Ramming Speed!", "Noctophilia", "Hammer & Anvil", "Raw Recruit", "Boatmen", "Ram has touched the wall", "Fresh meat", "It's a start…", "Ride the Dragon's Breath", "Siege? What Siege?", "Iron Resolve", "Burning Seas", "Semper Fi", "Obey my command!", "To formation!", "Heroic defense", "Burning Convictions ", "Red Sky at Night? Admirals' Delight!", "Cost-effective Killer", "Regular solider", "Seasoned Besieger", "Seasoned Scrapper", "Watery Graves", "Killing Mode", "Tactical Genius", "Access Denied!", "Show No Mercy!", "Legendary General", "Famous General", "Veteran General", "Veteran Admiral", "Veteran Besieger", "Veteran Scrapper", "Slaughter at Sea", "The Power of Three", "Scorched Earth Policy", "Siege Engineer ", "Governor", "Very Cheap Labour", "All-Rounder", "Sanctuary", "Head For Business", "A Taste for Murder", "Veni, Vedi, Vici!", "Caesar Reborn", "Imperator", "Steppe Survivors", "Viking Dawn", "Eternal Eagle", "Franci, My Dear, I Couldn't Give a Damn!", "Gothic War", "Scourge of Civilisation", "Jute a Minute!", "Ostrogothic Kingdom", "Sassanid Supremacy", "Saxon Shores", "Sheer Vandalism", "Visigothic Kingdom", "I'm Still Standing", "The Gothic War", "All men. Some swords", "The House Red", "Godan's Chosen", "A Second Force", "Eire & Back Again", "Pict Apart", "The Last Roman", "Barbaricum Trans Rhenum", "King of Italy", "The Sacred & Profane", "Abject Vandalism", "Tolosanisches Reich", "Kingdom of Gallaecia", "Obelisks to Eternity", "A Friend to Emperors", "Tanukhid You Not", "One Day in Al-Hirah", "Arabia Felix", "Arabia Magna", "Arabia Petraea", "Pater Europae", "Regnum Asturorum", "Avar Go If You Think You're Hard Enough", "Don't Get Umayyad, Get Even", "Furore Normannorum", "Corona Ferrea", "The Mercian Supremacy", "Epic Westphalia", "Hephthalite Scourge", "Upping the Antes", "Vistula Veneti", "Garamantes In Excelsis", "The Sons of Hyperborea"];

    assert.strictEqual(officialAchievementNames.length, 118, "sanity check on this test's own reference list");

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
