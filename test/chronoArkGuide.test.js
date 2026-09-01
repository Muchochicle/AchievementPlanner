import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chrono-ark.js";

test("the Chrono Ark guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chrono-ark-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chrono-ark");

});

test("the Chrono Ark guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Clears & Challenges",
            "Friendships & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official Chrono Ark achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Jump!", "Jump, but 4 times", "Clear Expert Difficulty", "Illusion Sword!", "Master Alchemist", "Parry Master", "Burnnn!", "Almighty Pressel...", "Shadow", "Fake Madness", "You Shall Not Pass!", "Sharpshooter", "So, is her name Eve?", "Little Evil(?) Friend", "*Burps*", "Master Psychologist", "That Sounds Perfect", "Perfect Rotation", "War of Arrows", "Power of Frost, Thunder, and Vodka", "Lucy's Adventure", "All Random", "Everything is Once", "Lone but not Lonely Wolf", "Quick Building", "Leap Through Time", "A New Challenge", "Another Step", "Into the Abyss", "Push Your Limits", "Blood Mist Master", "Momori☆Victory!", "Wanna Be Friends?", "Best Friend", "Cutie of the Investigators", "Happiness within the Birdcage", "End of Project", "Farewell", "Everyone’s Friend", "Irreplaceable Bonds"];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
