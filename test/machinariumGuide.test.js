import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/machinarium.js";

test("the Machinarium guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "machinarium-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "machinarium");

});

test("the Machinarium guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Escaping the Scrapyard",
            "Puzzles Around the City",
            "The Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Machinarium achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["SURVIVOR", "BACK IN TOWN", "FREE ROBOT", "PET CATCHER", "BOARD GAME MASTER", "MUSIC LOVER", "VIDEOGAMER", "PLUMBER", "DEACTIVATOR", "DEBUGGER", "RESCUER", "ESCAPER"];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
