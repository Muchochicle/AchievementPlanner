import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/yakuza-like-a-dragon.js";

test("the Yakuza: Like a Dragon guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "yakuza-like-a-dragon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "yakuza-like-a-dragon");

});

test("the Yakuza: Like a Dragon guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Substories & Bonds",
            "Character & Job Growth",
            "Gear, Sujimon & Combat",
            "Side Content & Post-Game",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official Yakuza: Like a Dragon achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The New Dragon", "For the Family", "Rock Bottom", "Heroes and Villains", "Soap on a Rope",
        "Smoked", "Ignition", "Three Spiders", "The Statesman", "Time to Talk",
        "Illuminations", "The Dragon Stirs", "End of an Era", "Fate of Our Fathers", "The Torch is Passed",
        "Thank You", "Stories to Tell", "Stories to Live", "Stories of the Streets", "Friends in Low Places",
        "Friends on the Force", "Friends Like Sisters", "Friends With Familiar Faces", "Friends in the Gang", "Friends From Work",
        "Food for Thought", "A New Legend", "A New Hero", "Awakening Dragon", "Rising Dragon",
        "Like a Dragon", "Ryu Ga Gotoku", "Sound Character", "Super Human", "Job Hopper",
        "Life Experiences", "Career Counseling", "Professional", "Master of Trades", "Jack of All Trades",
        "Romance of the 10 Pieces", "Romancing the Forge", "Gear Fanatic", "Gear Hoarder", "I Wanna Be the Very Best",
        "Gotta Catch 'Em All", "Pound It", "Heir to the Legend", "Fulfiller of Dreams", "Make That Money",
        "New Digs!", "Presidential Power", "Aggressive Executive", "Man About Town", "Certified Genius",
        "Pop the Cork", "Can Quest Hero", "Sleep Sheep Slapper", "Playing With Fire", "Honk-Honk Hero",
        "Fight on the Sidewalk!", "Treasure Displeasure", "Victory of the Millennium",
    ];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
