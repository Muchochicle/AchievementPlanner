import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dungeons-of-hinterberg.js";

test("the Dungeons of Hinterberg guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dungeons-of-hinterberg-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dungeons-of-hinterberg");

});

test("the Dungeons of Hinterberg guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dungeons & Story Secrets",
            "Coins, Gear & Combat",
            "Social Life & Endgame Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Dungeons of Hinterberg achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Still Shaking", "Double Trouble", "Beginner Slayer", "Intermediate Slayer", "Renowned Slayer", "Completionist", "Buddies", "Something Rotten", "Detective", "Town Survivor", "Hinterberg Hero", "Shiny!", "Sparkly!", "Shimmery!", "Dazzling!", "Collector", "Furry Friend", "Unlocking Potential", "Dance of Death", "Environmentalist", "Introvert", "Generous Spirit", "Efficiency", "Enchanting", "Night Owl", "Tough and Buff", "Animal Lover", "Water you looking for?", "Charmed", "Socialite", "Friendly Overtures", "Altruist", "Grove Trove", "Running on Fumes", "Social Butterfly", "Just Chilling", "Virtuoso", "We Are Amused", "Relaxpert", "Heart to Heart", "Slayer", "Honorary Monster", "Utility Belt", "Top Model", "Fashionista", "Style Icon", "Conduit Collector", "Super Strength", "All That Glitters", "Dressed like a Pro"];

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
