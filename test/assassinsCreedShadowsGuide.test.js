import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/assassins-creed-shadows.js";

test("the Assassin's Creed Shadows guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "assassins-creed-shadows-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "assassins-creed-shadows");

});

test("the Assassin's Creed Shadows guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story & The League",
            "Skills, Gear & Combat Technique",
            "Exploration, Hideout & Collectibles",
            "Claws of Awaji DLC & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official Assassin's Creed Shadows achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Prologue", "A New League Rises", "An Oath Fulfilled", "Fall of the Shinbakufu", "Epilogue", "Death Blossom", "The Thief", "The Toxin Master", "The Eager Assassin", "The Ronin", "The Warrior Monk", "The Sharpshooter", "Build Your League", "Front of the Pack", "Art of Ninjutsu", "Art of Kenjutsu", "Make it Personal", "Better than a Bucket", "Limitless", "In Case of Trouble", "Suture Self", "Sometimes", "Reeding is Fundamental", "Just Your Shadow", "Hook, Line, and Swinger", "Acrobatics", "Leap of Fail", "Adept Shinobi", "Master Shinobi", "Unseen", "Giant Slayer", "Adept Samurai", "Master Samurai", "Unstoppable", "This is Japan, Actually", "Overdesign III", "Final Hearing", "Adventurer", "Mortal Reminder", "Test Your Might", "Kofun Raider", "Good Form", "Zen Master", "A Rare Occurrence", "Collector", "Sole Sanctum", "Chase the Morning", "Against Wood and Stone", "Everybody Benefits!", "Happy Place", "Pathfinder", "Scouting Mission", "Would You Kindly?", "Made You Look!", "Critical Hit!", "Enjoy the Ride", "Stars Unseen", "Worth Its Wait", "Ran", "Hunters Hunted", "Unity", "Clawless", "The Stick of Truth", "One, Two, Sweep", "Slice of Life", "Backfire", "Assassin's Focus", "Boat Rocked", "Breathtaking!", "Master Builder", "Skill Swap", "All Clear", "End of Order", "Infinite Introduction", "MOD Runner"];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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
