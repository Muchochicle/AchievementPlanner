import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/phasmophobia.js";

test("the Phasmophobia guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "phasmophobia-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "phasmophobia");

});

test("the Phasmophobia guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Ghost Identification",
            "Contracts & Prestige",
            "Money & Equipment",
            "Challenges & Tasks",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Phasmophobia achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/phasmophobia.json).
    const officialAchievementNames = [
        "III", "Banshee Discovered", "Demon Discovered", "Deogen Discovered", "Goryo Discovered",
        "Hantu Discovered", "Jinn Discovered", "Mare Discovered", "Moroi Discovered", "Myling Discovered",
        "Obake Discovered", "Oni Discovered", "Onryo Discovered", "Phantom Discovered", "Poltergeist Discovered",
        "Raiju Discovered", "Revenant Discovered", "Shade Discovered", "Spirit Discovered", "Thaye Discovered",
        "The Mimic Discovered", "The Twins Discovered", "Wraith Discovered", "Yokai Discovered", "Yurei Discovered",
        "I", "II", "Boss", "Professional", "Rookie",
        "Chump Change", "Fat Stack", "Cash Cow", "Break The Bank", "No More Training Wheels",
        "Extra Mile", "They're here", "Work Experience", "The Bait", "Doom Slayed",
        "Bronze Hunter", "Silver Hunter", "Gold Hunter", "Bare Essentials", "Tools of the Trade",
        "Fully Loaded", "Flawless Execution", "Director", "Escape Artist", "Dedicated",
        "Devoted", "Challenger Approaching", "Rise to the Challenge", "Taking All Challenges"
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
