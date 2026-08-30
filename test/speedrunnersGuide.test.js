import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/speedrunners.js";

test("the SpeedRunners guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "speedrunners-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "speedrunners");

});

test("the SpeedRunners guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Grapple & Air Combat",
            "Combat Techniques",
            "Ranked Progression",
            "Story Mode",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official SpeedRunners achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Gotcha!", "See Ya!", "Dive, Kick", "Two Birds, One Stone", "King of Swing",
        "Sultan of Swing", "Ultimate Swing Lord", "Vengeance, and running!", "From Way Downtown", "Backfired",
        "Get Lucky", "Smooth Moves!", "Super Crate Blox", "Mind Your Head!", "Strike!",
        "Triple Freeze!", "Super Speed", "Deflected!", "Ranking Up!", "Getting Serious!",
        "Ready for Ranked", "100%", "ez git gud", "Hook Block", "A Race against Time",
        "Officer requesting Backup", "The most dangerous Game", "Welcome to New Rush City", "The King of New Rush City",
    ];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
