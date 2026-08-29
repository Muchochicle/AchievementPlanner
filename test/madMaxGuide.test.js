import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mad-max.js";

test("the Mad Max guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mad-max-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mad-max");

});

test("the Mad Max guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Wasteland Missions & Legend",
            "Death Runs & Archangels",
            "Territory & Strongholds",
            "Collectibles & Camps",
            "Feats & Upgrades",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Mad Max achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Everything Lost Again", "Wasteland of Opportunities", "Digging a Deeper Hole", "Power in the Machine", "Downward Spiral Reawakening",
        "Slight Distraction", "Stop and Smell the Roses", "Golden Boy", "Road Warrior", "The Quick Driver",
        "The Smart Driver", "The Skilled Driver", "Running Wild", "The Saint", "The Guardian",
        "The Messenger", "The Exiled", "Start of Something Good", "Keep Up the Good Work", "Spreading the Word",
        "Jeet Thrives", "Gutgash Thrives", "Pink Eye Thrives", "Daddy Wants a New Grill", "A Thousand Words",
        "Quench Their Thirst", "Fresh Air", "Maximum Air", "Doing Jeet a Big Favor", "Doing Gutgash a Big Favor",
        "Doing Pink Eye a Big Favor", "The Constructionist", "Just Rewards", "Scrap Collector", "On the Road to Nowhere",
        "The Bigger they are…", "Razing Legend", "Wasteland Chef", "Up, Up and Away", "Bomb Specialist",
        "No Brainer", "Sniper Suppressor", "Rust is the New Black", "Blockhead", "Looked Everywhere",
        "Explosions Are Not Enough", "Maximum", "Up to the Task", "Just Walk Away",
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
