import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ori-and-the-blind-forest.js";

test("the Ori and the Blind Forest guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ori-and-the-blind-forest-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ori-and-the-blind-forest");

});

test("the Ori and the Blind Forest guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress (Automatic)",
            "The Ability Tree",
            "Exploration & Collectibles",
            "Combat Tricks",
            "Challenge Runs (Hardest)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Ori achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/ori-and-the-blind-forest.json).
    const officialAchievementNames = [
        "The Journey Begins", "The Ancient Being", "Get Back Here!", "Let's be Friends", "Rotten Inside",
        "Run for Your Life", "Close Call", "Obtaining Clarity", "Solid Ground", "Fight to Live Another Day",
        "Top of the world", "Into the Fire", "Rekindle", "Love", "The Journey Ends",
        "Life Saver", "Choices Choices", "Soul Master", "Utility Master", "Combat Master",
        "Phenom", "So Many Secrets", "Seasoned Explorer", "No Stone Unturned", "Marking the way",
        "Halfway There", "World at Your Feet", "Good Eye", "Safe and Sound", "Master of the Forest",
        "Power Player", "Powerhouse", "Master Guardian", "Deadly Detonation", "Deadly Deflection",
        "A New Path", "Deadly Dash", "Juggle Master", "Bash Master", "Deadly Dodge",
        "Flying Fury", "Self Destruction", "Crushing Blow", "Stomp Master", "Blast Master",
        "Flame Master", "Airborne", "Supersonic", "Immortal", "Elite"
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
