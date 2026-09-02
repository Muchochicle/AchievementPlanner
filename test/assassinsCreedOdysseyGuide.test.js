import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-odyssey.js";

test("the Assassin's Creed Odyssey guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-odyssey-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-odyssey");

});

test("the Assassin's Creed Odyssey guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Main Story: The Nine Episodes","Legendary Gear, Ship & Arena","Cultists, Mythical Monsters & Questlines","Exploration, Conquest & Combat","Legacy of the First Blade DLC","The Fate of Atlantis DLC","Suggested Order"]
    );

});

test("the Overview states the verified 93-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /93 Steam achievements/);

});

test("every one of the 93 official Assassin's Creed Odyssey achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["This is Sparta!","An Odyssey in the Making","Past Mistakes","Evil Unearthed","The Bright Minds","From the Ashes","Democracy Falls","Legend in the Making","Taking Back Athens","Odyssey's End","Child of Poseidon","Make It Your Own","You Work for Me Now","Shiny!","I am Legend","Are You Not Entertained?","Demigod","Godly Power","Legacy Restored","Top of the Food Chain","The Cult Unmasked","Stink Eye","Hermes's Homie","In Perseus's Image","A-maze-ing Victory!","Eye on the Prize","Riddle Me This","Lord of the Seas","The Argonauts","Master of the Hunt","Everybody Benefits","Trust Me, I'm a Doctor","A Pirate's Life for Me","Going For Gold","Scourge of the Aegean","Blood Sport","Harder, Better, Faster, Stronger","Fashion's Creed","Aphrodite's Embrace","One Head Down…","Birthright","Ramming Speed","I Have the Power","War Master","Misthios in Training","Island Hopper","Infamous","Hero for Hire","Wrath of the Amazons","The Midas Touch","The Show Must Go On","Lightning Rod","Divine Intervention","Volcanic Sunscreen","The Image of Faith","The Daughters of Lalaia","Lone Lion","Without a trace","The Start of a Legacy","Breaking the Limit","Predator and Prey","A Poet's Legacy","A Brother's Seduction","Rain of Arrows","Fire on Water","Parry to Carry","Blood of Leonidas","Stormculler","A Friend Worth Dying For","The Heir of Memories","Seeing Red","Bittersweet Beginnings","Surgical Sniper","Kingmaker","For Love of Persia","One Really, Really Bad Day","Every Story Has an Ending","No More Rulers","In the Face of the Gods","Blasphemer","Gathering Strength","The Conqueror","Old Flames Burn Brighter","Bad Dog!","Guardian of the Underworld","The One","Gathering More Strength","A True Ruler","Your Own Medicine","Isu Bloodline","Hephaistos's Apprentice","Gathering Full Strength","1 Versus 100"];

    assert.strictEqual(officialAchievementNames.length, 93, "sanity check on this test's own reference list");

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
