import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/resident-evil-village.js";

test("the Resident Evil Village guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "resident-evil-village-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "resident-evil-village");

});

test("the Resident Evil Village guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Village & Combat Feats",
            "Collectibles & Full Clears",
            "Difficulty & Challenge Runs",
            "The Mercenaries, DLC & Additional Orders",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 56-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /56 Steam achievements/);

});

test("every one of the 56 official Resident Evil Village achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Not Lycan This...", "Four Lords", "That Sucked!", "Got No Strings", "Fish Out of Water",
        "Up Urs!", "Temporary Measures", "Iron Giant Down", "The Root of the Matter", "Great Dad",
        "Best Dad Ever", "World's Best Dad", "Universe's Best Dad", "Crafter", "Patron",
        "Petty Thief", "Repairer", "Hunter", "Get the Ball Rolling", "Goooaaal!",
        "Squawk Shot", "When You Gotta Go...", "Hooligan", "Quit Hanging Around", "Push Comes to Shove",
        "Trick Shot", "Strategist", "Medium Rare", "Fast Reflexes", "Leader of the Pack",
        "Timber", "Photographer", "Lucky Number 7", "Mapmatician", "Cynic",
        "Heretic", "Gunsmith", "Veteran Gunsmith", "Tinkerer", "Artisan",
        "Bookworm", "Don't Trust That Snake Oil", "Dashing Dad", "Frugal Father", "Knives Out",
        "Combo King", "Legendary Cowboy", "Doll Collector", "Art Collector", "Green Teen",
        "Serene Teen", "Supreme Teen", "It's Starting to Grow on Me", "Craftsmaster", "Village of Blood",
        "River of Blood"
    ];

    assert.strictEqual(officialAchievementNames.length, 56, "sanity check on this test's own reference list");

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
