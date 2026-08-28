import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-forest.js";

test("the The Forest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-forest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-forest");

});

test("the The Forest guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival & Progress",
            "Building & Crafting",
            "Combat & Hunting",
            "Multiplayer",
            "Exploration & Collectibles",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official The Forest achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/the-forest.json).
    const officialAchievementNames = [
        "Minor Cannibalism", "Major Cannibalism", "Be Nice", "Be Extremely Nice", "Crafty",
        "Bad father", "Trophy Hunter", "Green Thumb", "Vegan", "Naturopath",
        "5 Star Hotel", "Spelunker", "First Responder", "Medic", "You should be looking for Timmy",
        "Boy Scout", "Camp Out", "Splatter", "Longest Wall", "Choppy Chop",
        "Unseen", "Commercial Fisherman", "Survive The Forest", "Daily Grind", "Gross!",
        "Serial Killer", "Make It Rain", "Get Closure", "Big Spender", "Bite me!",
        "Monster", "Gabe Fan", "First Night", "You are a fun guy", "Survivalist",
        "Birdseye", "Step Master", "Demolition Man ", "Handyman", "Good Father",
        "Climate Change", "Don't Save The Forest", "Pacifist", "Demolition Expert", "Fisherman"
    ];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
