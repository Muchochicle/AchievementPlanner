import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sackboy-a-big-adventure.js";

test("the Sackboy: A Big Adventure guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sackboy-a-big-adventure-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sackboy-a-big-adventure");

});

test("the Sackboy: A Big Adventure guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "World Bosses & Story",
            "Combat & Level Feats",
            "Multiplayer & Customisation",
            "Collectibles, Mastery & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 46-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /46 Steam achievements/);

});

test("every one of the 46 official Sackboy: A Big Adventure achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Big Adventurer", "You've got potential, squire!", "Metameric Malady", "Sonar So Good", "Crash Override", "Vex Vanquisher!", "Verified Vex Vanquisher!", "Daydream Believer", "Book of Dreams", "Squired Up", "Out of bounds", "Pop 'n' Lobber", "Multitasking", "Bounder", "Stunner", "Fashionista!", "Re-Mix-Master", "Knights of Gold", "Cut it out!", "Slide Away", "Bubble Binger", "Gymnastic Fantastic", "BEE! ARGH! BEE!", "Buddy Beater", "Thespian", "Icon of Style", "Let's twist again...", "Up high!", "Sore Winner", "Stop! Thief!", "Slap Attack", "Beast of burden", "Fun Multiplied", "Capitalist", "Saviour", "Naturalist", "Player's Player", "Amazing Ace", "Best Friends", "Walk-in Wardrobe", "Master of One", "Multi-Master", "Best Friends Forever", "Wonderplane Workout", "Golden Boy", "String it Together"];

    assert.strictEqual(officialAchievementNames.length, 46, "sanity check on this test's own reference list");

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
