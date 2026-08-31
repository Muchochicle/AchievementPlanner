import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ancestors-legacy.js";

test("the Ancestors Legacy guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ancestors-legacy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ancestors-legacy");

});

test("the Ancestors Legacy guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorial & Base Campaigns",
            "Multiplayer, Skirmish & Squad Mastery",
            "Campaign Secrets & Mission Challenges",
            "DLC Campaigns: Slavs, Teutons & Saracens",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 62-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /62 Steam achievements/);

});

test("every one of the 62 official Ancestors Legacy achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Off the Course", "Rebuilding Forces", "Unexpected Allies", "The Last Impediment", "Lindisfarne Riches", "Rurik's Reign", "Edward and Godwin", "Harold's Guerilla Warriors", "Rudolf of Habsburg", "Mieszko", "Firestarter", "Conqueror", "Fallen Warrior", "Indisputable", "Uber Micro", "Squad Proficiency", "Squad Veterancy", "Lost Ones", "Elite Unit", "Rock-Solid", "Through Defenses", "War Machine", "War Veteran", "Commander Veteran", "It's a... trap.", "It's a TRAP!", "Time to Work", "Untouchable", "Protector", "Panic", "A Ship That Doesn't Sink", "All for Rurik", "Edward Needs Those", "Dunstan's Revenge", "Vienna's Finest Armor", "Under Mieszko's Banner", "NO LIFE IS WORTH SAVING...", "Who is there?", "Deer hunter", "Church of misery", "Not on my watch!", "Whack a mole", "Boleslav the Brave", "Goodfella", "Elite Marksman", "Teutonic Meticulousness", "Trap Sweeper", "Blitzkrieg", "Konrad von Thierberg", "The Knights of the Cross", "Perfect Commander", "Hard To Kill", "Waterkeeper", "No Pain, No Gain", "Holy War", "Salah ad-Din Yusuf", "Righteousness of the Faith", "Assassinated", "Boy Scouts", "Tanned", "Divine Duty", "Destructive Stinger"];

    assert.strictEqual(officialAchievementNames.length, 62, "sanity check on this test's own reference list");

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
