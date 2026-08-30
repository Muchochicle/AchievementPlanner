import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-division.js";

test("the Tom Clancy's The Division guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-division-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-division");

});

test("the Tom Clancy's The Division guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions & Manhattan",
            "Collectibles & Base of Operations",
            "Skills, Gear & Crafting",
            "Dark Zone, Underground & Survival",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 60-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /60 Steam achievements/);

});

test("every one of the 60 official Tom Clancy's The Division achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Activated", "Outbreak", "Can't Stand the Heat!", "Crime and Punishment", "I've Got the Power", "Fly on the Wall ", "Last Man Standing", "You Win Some, You Lose Some", "What Needs To Be Done", "The Final Curtain", "On the Level", "Marathon", "Know No Fear", "Hardened Combatant", "United We Stand", "Shadows of the past", "Droning on...", "Survivalist", "Agent Diaries", "The Finder", "Incident Reports", "Gain a Foothold", "The Engineer", "The Doctor", "The Captain", "State of the Art", "Skillz", "Skill Kill", "The Humanitarian", "Those Signature Moves", "Natural Talent", "One Down, Two to Go!", "Fixer Upper", "Bling! Bling!", "Good With My Hands", "Master Craftsman", "Deconstructive Criticism", "Looking for Group", "Medic!", "Lean On Me", "Networking", "Shut that door", "Raid the Arsenal", "Worth the Wait", "Mass Extraction", "Plundered!", "Headhunter", "You Just Made the List...", "For Justice!", "I am the LAW!", "Begin with a BANG", "Objectively Experienced", "The Beast Below", "Tier One", "Gone Spelunking", "Born Survivor", "Subzero Hero", "For the Hoarder…", "Tools of the Trade", "Survival Instincts"];

    assert.strictEqual(officialAchievementNames.length, 60, "sanity check on this test's own reference list");

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
