import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/war-thunder.js";

test("the War Thunder guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "war-thunder-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "war-thunder");

});

test("the War Thunder guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat Awards & Repeat Feats",
            "Battle Modes, Ranks & Kill Counts",
            "Time Played & Vehicle-Type Wins",
            "Nation Collections & Aces",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 91-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /91 Steam achievements/);

});

test("every one of the 91 official War Thunder achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Kraken", "Hooked", "Air-to-Air", "Ground-to-Air", "Air-to-Ground",
        "Ground-to-Ground", "Ultimate", "Ninja", "At one blow", "Treasure Hunter",
        "But... how?!", "Speed up!", "Guide", "Knowledge is Power", "Arcade 1000",
        "Realistic 500", "True 100", "Nemesis", "Revenge-Seeker", "Firestarter",
        "Rank 1", "Rank 2", "Rank 3", "Rank 4", "Rank 5",
        "Accurate Fire", "Sniper", "Vengeful Spirit", "True and Fable", "Japanese Collection",
        "US Collection", "Soviet Collection", "British Collection", "German Collection", "Fully Modified",
        "Element of Surprise", "Cold-Blooded", "King of the Hill", "Dead Weight", "Street Brawler",
        "Rank 6", "French Collection", "Weapon of Heroes", "Size Doesn’t Matter", "Raining Lead",
        "Italian Collection", "Destroyer", "First dozen", "Just a Scratch", "First-class",
        "Chinese Collection", "Swedish Collection", "Rank 7", "Rank 8", "Israeli Collection",
        "Cadet", "Graduate", "Warrior", "Veteran", "Legend",
        "Falcon", "Hornet", "Tiger", "Piranha", "Shark",
        "American Ace", "German Ace", "Soviet Ace", "British Ace", "Japanese Ace",
        "Chinese Ace", "French Ace", "Italian Ace", "Swedish Ace", "Israeli Ace",
        "Hungarian Ace", "Finnish Ace", "South African Ace", "Australian Ace", "High-precision strike",
        "Doomsday!", "Peaceful atom", "Dutch Ace", "Belgian Ace", "Fire Arrows",
        "Invincible", "Family Album", "Collector", "Thai Ace", "Swiss Ace",
        "Rank 9"
    ];

    assert.strictEqual(officialAchievementNames.length, 91, "sanity check on this test's own reference list");

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
