import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wasteland-2-directors-cut.js";

test("the Wasteland 2: Director's Cut guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wasteland-2-directors-cut-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wasteland-2-directors-cut");

});

test("the Wasteland 2: Director's Cut guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Arizona: Hub Outcomes",
            "Los Angeles, Skills & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Wasteland 2: Director's Cut achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Persona Non Grata", "A Night To Remember", "What Does This Button Do?", "They Walk Among Us", "Peace On The Rails", "Wasteland Justice", "Tasty!", "Embrace The Glow", "Fight Fire With Fire", "Red Wire, Blue Wire", "Fateful Reunion", "A Gentle Heart", "Under Old Management", "Hell Bent For Leather", "Self Actualized", "How Rude", "Civilized", "Divine Retribution", "Religious Persecution", "Sinners And Saints", "Too Much Time On Yer Hands", "I Am Legend", "Blast From The Past", "Pop Idol", "Ezekiel 18:20", "Cat Burglar", "Not Monkeying Around", "Know Your Roots", "Sinister Legacy", "Sweet, Sweet Squeezins", "Scavenger", "Call Of The Wild", "Locked And Loaded", "Moo, I Say", "Goat Simulator", "Son Of A Motherless Goat", "Better Left Buried", "Relics Of A Bygone Age", "Skin 'O Yer Teeth", "Oops", "Wasteland Historian", "Elbow Grease", "West Of Eden", "Back Where It All Began", "A General and a Gentleman", "Pushed The Button"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
