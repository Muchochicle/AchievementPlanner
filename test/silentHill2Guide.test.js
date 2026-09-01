import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/silent-hill-2.js";

test("the Silent Hill 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "silent-hill-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "silent-hill-2");

});

test("the Silent Hill 2 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Toluca Lake, the Hotel & the Final Fight",
            "Combat Feats & the Six Endings",
            "Playthrough Challenges & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Silent Hill 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["No Turning Back Now", "Enjoy Your Stay", "Nice and Cozy", "Let's NOT Party!", "Otherworldly", "Passed", "Uncanny", "All Seems in Order", "Leftovers", "Admitted", "Nightmare Fuel", "Alone Again", "Into the Abyss", "Unforgivable", "Inner Sanctum", "A Human Being", "Scourge of Toluca Lake", "Glimmer of Hope", "Truly Special", "It's Bread", "Obsolete", "That Part of Me", "Lumberjack", "Merciless", "No Big Deal", "Blunt Force Trauma", "You Never Know...", "Shattered", "Making Peace", "Vicious Circle", "Only Way Out", "Defy Even Death", "The Goodest Boi", "Tinfoil Hat", "I Saw That Town", "Radio Silence", "James of All Trades", "Pieces Unarranged", "Faster Than Fog", "Archivist", "As Close as You Like", "Party Like It's 2001", "Echoes"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
