import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/naraka-bladepoint.js";

test("the NARAKA: BLADEPOINT guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "naraka-bladepoint-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "naraka-bladepoint");

});

test("the NARAKA: BLADEPOINT guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Modes",
            "Combat Feats & Weapons",
            "Undying Glory & Match Ranking",
            "Souljades & Fortune",
            "Zone Domination & Survival",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official NARAKA: BLADEPOINT achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Jack of All Trades", "Apogee", "As Fate Wills", "Close Combat", "Accuracy Assured",
        "Spoils of War", "Unbreakable", "Bloodthirsty", "Sure Shot", "The Overcomer",
        "Give Thanks", "Mighty Mortal", "Mortal Coil", "Deep Pockets", "Hand of Grace",
        "Miracle Encounter", "Focused Momentum", "Augmented Arms", "Ancient Wrath", "Super Weaponry",
        "Luster", "Brawler", "Sixth Sense", "Lurker", "Marathon Runner",
        "First Blood", "And So It Begins", "Mask of Immortality", "A Legend is Born", "Spirit Spikes",
        "Drunken Fire", "Yi's Instrument", "What Lies Within", "Divine Lord", "Temple Warrior",
        "Sunwing's Messenger", "Captain's Bloodlust", "Fight Fire With Fire", "Fickle Fortune", "Fearful Aura"
    ];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
