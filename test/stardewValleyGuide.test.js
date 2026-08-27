import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/stardew-valley.js";

test("the Stardew Valley guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "stardew-valley-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "stardew-valley");

});

test("the Stardew Valley guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Money Milestones",
            "Friendship",
            "Cooking, Crafting, Skills & Home",
            "Fishing & the Museum",
            "Farming, Shipping & Help Wanted",
            "Mining & Combat",
            "Story Paths, Collectibles & Special Events",
            "Prairie King & Fector's Challenge",
            "Perfection - The True Endgame",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Stardew Valley achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/stardew-valley.json).
    const officialAchievementNames = [
        "Greenhorn", "Cowpoke", "Homesteader", "Millionaire", "Legend",
        "A Complete Collection", "A New Friend", "Best Friends", "The Beloved Farmer", "Cliques",
        "Networking", "Popular", "Cook", "Sous Chef", "Gourmet Chef",
        "Moving Up", "Living Large", "D.I.Y.", "Artisan", "Craft Master",
        "Fisherman", "Ol' Mariner", "Master Angler", "Mother Catch", "Treasure Trove",
        "Gofer", "A Big Help", "Polyculture", "Monoculture", "Full Shipment",
        "Prairie King", "The Bottom", "Local Legend", "Joja Co. Member Of The Year", "Mystery Of The Stardrops",
        "Fector's Challenge", "Full House", "Singular Talent", "Master Of The Five Ways", "Protector Of The Valley",
        "Well-Read", "Two Thumbs Up", "Blue Ribbon", "An Unforgettable Soup", "Good Neighbors",
        "Danger In The Deep", "Infinite Power", "Perfection", "A Distant Shore"
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
