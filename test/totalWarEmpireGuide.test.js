import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/total-war-empire.js";

test("the Total War: EMPIRE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "total-war-empire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "total-war-empire");

});

test("the Total War: EMPIRE guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Conquest",
            "Multiplayer Battles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Total War: EMPIRE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Perfidious Beast", "Observe Diplomatic Niceties", "Assassin!", "The Efforts of Others", "Affairs of Honour", "Polymath", "Bloody Madman", "Tyrant and Ogre", "Conqueror of All", "Founding Father", "Expansionist Power", "A New Rome", "Only Obeying Orders", "Into the Breach!", "The \"Chevaux de Frise\"", "Blooded", "Drumbeat to Victory", "Whiff of Grapeshot", "l337 Guard", "Marshal's Baton", "Command of the Ocean", "Raw Recruit", "Grand Tactician", "American Hero", "Accomplished Strategist", "Veteran Strategist", "Strategic Genius", "Emperor of Europe", "Master of the Americas", "Maharajah of the Indies"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
