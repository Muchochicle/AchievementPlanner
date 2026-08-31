import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/doom-plus-doom-ii.js";

test("the DOOM + DOOM II guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "doom-plus-doom-ii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "doom-plus-doom-ii");

});

test("the DOOM + DOOM II guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Level Feats",
            "Campaign Completions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official DOOM + DOOM II achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Guns Are For Wusses", "Until It Is Done", "Shoot It Until It Dies", "Groovy", "Skeet Shooting", "Heavenly Joy", "Bowling for Gibs", "Cookin' With Plasma", "Overkill", "Timing Is Everything", "Doormat", "Overprepared", "Indiscriminate Headhunter", "Not So Friendly Fire", "More Like a Dream", "Hoarder", "The Only Thing They Fear Is You", "An Important Looking Door", "Alternate Dimension", "Clean Slate", "Burning Out of Control", "A Man and a Half", "Untouchable", "Kill It With Fire", "Screen Wipe", "DOOM", "Sigil", "DOOM II", "No Rest for the Living", "Master Levels", "Evilution", "Plutonia", "Legacy of Rust"];

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
