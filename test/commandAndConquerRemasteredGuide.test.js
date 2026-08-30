import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/command-and-conquer-remastered.js";

test("the Command & Conquer Remastered Collection guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "command-and-conquer-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "command-and-conquer-remastered");

});

test("the Command & Conquer Remastered Collection guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tiberian Dawn Campaigns & Missions",
            "Red Alert Campaigns & Cross-Game Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Command & Conquer Remastered Collection achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Eagle has Landed", "I did Nod See that Coming!", "Cloak and Daggers", "Console Madness", "The Best Around", "Befriend the Robot Overlords", "Destroy the Robot Overlords", "Making Friends", "Death From Above", "Life... Finds a Way", "Capture X16-Y42", "Nikoomba's Demise", "Tanks A Lot!", "To the Front Lines!", "Tiberian Historian", "Act on Instinct", "No Remorse", "Crush the Resistance", "Electrotherapy", "Time is only a concept", "Ants?", "DEFCON None.", "Time will Tell", "No Survivors", "Ship Happens", "Short Fuse", "Mission Casualties", "High Anxiety", "A Bit of Everything", "All of Everything", "Red Alert Historian", "Hell March", "I've got a present for ya!"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
