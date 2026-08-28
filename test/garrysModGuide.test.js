import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/garrys-mod.js";

test("the Garry's Mod guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "garrys-mod-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "garrys-mod");

});

test("the Garry's Mod guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "First Steps",
            "Playtime Milestones",
            "Sandbox Tool Grinds",
            "Combat Counters",
            "Maps & Workshop",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Garry's Mod achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/garrys-mod.json).
    const officialAchievementNames = [
        "Play Singleplayer", "Play Multiplayer", "Startup Millenium", "Secret Phrase", "Addict",
        "Map Loader", "Play Around", "War Zone", "Friendly", "Yes, I am the real garry!",
        "Marathon", "Half Marathon", "One Day", "One Week", "One Month",
        "Innocent Bystander", "Ball Eater", "Creator", "Popper", "Destroyer",
        "Menu User", "Bad Coder", "Procreator", "Dollhouse", "Bad Friend",
        "10 Thumbs", "100 Thumbs", "1000 Thumbs", "Mega Upload"
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
