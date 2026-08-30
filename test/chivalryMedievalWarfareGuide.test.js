import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chivalry-medieval-warfare.js";

test("the Chivalry: Medieval Warfare guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chivalry-medieval-warfare-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chivalry-medieval-warfare");

});

test("the Chivalry: Medieval Warfare guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Class Veterancy & Kill Milestones",
            "Weapon Mastery",
            "Swordsmith, Faction & Level Progression",
            "Combat Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Chivalry: Medieval Warfare achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Vultures Chef", "Vanguard Veterans Helmet", "Knight Veterans Helmet", "Man at Arms Veterans Helmet", "Archer Veterans Helmet",
        "Crossbow Unlocked", "All Crossbows Unlocked", "Spear Unlocked", "All Spears Unlocked", "One handed sharp Unlocked",
        "All One handed sharp Unlocked", "Polearm Unlocked", "All Polearms Unlocked", "Light weapon Unlocked", "All Light weapon Unlocked",
        "Javelin Unlocked", "All Javelins Unlocked", "Bow Unlocked", "All Bows Unlocked", "Bastard weapon Unlocked",
        "All Bastard weapons Unlocked", "Two handed weapon Unlocked", "All Two handed weapon Unlocked", "Two handed Axe Unlocked", "All Two handed Axe Unlocked",
        "Dagger Unlocked", "All Daggers Unlocked", "One handed blunt weapon Unlocked", "All One handed blunt weapons Unlocked", "One handed Axe Unlocked",
        "All  One handed Axes Unlocked", "Swordsmith", "Sightseeing", "Sands of Time", "Rotisserie Chef",
        "Reach level 20", "Reach level 10", "Reach level 5", "Mason Order supporter", "Let it rain",
        "King of Kings", "I am a wall", "Heads Together", "Five Star Archer", "Fists of Fury",
        "Fire Nemesis", "Fire Starter", "Cupid", "Agatha Knights supporter",
    ];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
