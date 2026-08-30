import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yooka-laylee.js";

test("the Yooka-Laylee guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yooka-laylee-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yooka-laylee");

});

test("the Yooka-Laylee guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Pagies, Moves & Upgrades",
            "Collectibles, Worlds & Bosses",
            "Secrets & Hidden Treasures",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Yooka-Laylee achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["TURNING A PAGIE", "PAGIE RAMPAGIE", "THE AGIE OF PAGIE", "FROM SOMEONE ELSE'S BOOK", "SSSSERPENT SSSSENPAI", "SSSMASHING", "BOTTOM'S UP", "POTION COMMOTION", "RAISING THE BAR", "BAR STAR", "SQUID'S IN", "KARTOS RETURNS", "WHEN I'M 64", "WHAT'S A LEADERBOARD?", "BOOK SPOOK", "GRABBED THE GHOULS", "LICENSE TO QUILL", "FITS THE QUILL", "HAD ONE'S QUILL", "THE ADVENTURE BEGINS", "OPEN BOOKS", "SIZE MATTERS", "QUACKERS", "OUT OF BUSINESS", "SLIPPERY SLOPE", "KNOCKING DOWN WALLS", "CREEP FROM THE DEEP", "OBSOLETE", "PLANETARY ANNIHILATION", "PETTY VANDALISM", "PRIVATE PILLAGE", "SECRET SALVAGE", "CAPTAIN'S CACHE", "THINKING BIG", "SUPER SIZED"];

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
