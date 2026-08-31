import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/hard-west.js";

test("the Hard West guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "hard-west-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "hard-west");

});

test("the Hard West guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scenario Challenges",
            "Scenario Completions & Endings",
            "Difficulty & Tactical Feats",
            "Scars of Freedom DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Hard West achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Aspirton Incident", "His Leniency, The Inquisitor", "Through Thick and Thick", "Double Excellence", "Daring but Careful", "What Goes Around, Comes Around", "Vengeance Served Cold", "Drowned in Blood", "The Meaning of Life", "A Gift Scorned", "Sanity Engineered", "Everlasting Fame and Fortune", "Raw Deal", "On Earth, as It Is in Hell", "Requiem for a Gunfighter", "Once Upon a Time in the Weird West", "Welcome to Hard Times", "Welcome to Even Harder Times", "Sudden Death", "The Searcher", "Arizona Colts", "The Shootist", "The Wild Bunch", "Blind Justice", "Fight No More Forever", "Treasures of the Sierra Madre", "Trickshooter", "Brimstone Killer", "Aces in the Hole", "Fastest Gun in the West", "Scars of Freedom", "Dr Frankenstein", "Army of Two", "High Stakes", "Human Resources"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
