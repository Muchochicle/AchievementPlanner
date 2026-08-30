import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/book-of-demons.js";

test("the Book of Demons guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "book-of-demons-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "book-of-demons");

});

test("the Book of Demons guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Unlocks & Early Kill Counts",
            "Kill Counts, Cards & Equipment",
            "Campaign, Classes & Bosses",
            "Quest Mastery & Difficulty",
            "Challenges & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 202-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /202 Steam achievements/);

});

test("every one of the 202 official Book of Demons achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Trek", "Voyage", "Odyssey", "Adept Bone Collector", "Master Bone Collector", "Legendary Bone Collector", "Adept Exterminator", "Master Exterminator", "Legendary Exterminator", "Adept Goatherd", "Master Goatherd", "Legendary Goatherd", "Adept Exorcist", "Master Exorcist", "Legendary Exorcist", "Adept Ghostbuster", "Master Ghostbuster", "Legendary Ghostbuster", "Adept Survivor", "Master Survivor", "Legendary Survivor", "Adept Mason", "Master Mason", "Legendary Mason", "Heartbreaker", "Heartcracker", "Heartripper", "Path to Hell", "Road to Hell", "Highway to Hell", "Full Armory", "Grand Armory", "Epic Armory", "Full Library", "Arcane Library", "Unbelievable Library", "Full Stash", "Fancy Stash", "Legendary Stash", "Hell's Kitchen", "Cutthroat Kitchen", "Kitchen Nightmare", "Breaking the Ritual", "Averting the Sacrilege", "Ending the Blasphemy", "All Hail the New King", "Twice the Fun", "Third Time's a Charm", "Who's the Boss?", "Don't Boss Around", "Not the Boss of Me", "Inter-raptor", "Inter-raptor Evolved", "Inter-raptor Rex", "Crash!", "Smash!", "Bash!", "Heartpicker", "Heart Hoarder", "Organ Harvester", "Magic Sweep", "Mystic Sweep", "Arcane Sweep", "Fast & Furious", "Faster & Furier", "The Fastest & the Furiest", "Badger", "Badger, Badger", "Badger, Badger, Badger", "Wearing Only a Smile", "Birthday Suit", "Hardcore Nudist", "Quest Master", "Quest Champion", "Quest Genius", "Unlucky", "Jinxed", "Cursed", "Smelly Fingers", "Dirty Hands", "I'll Never Wash It Off", "In Good Hands", "Frequent Patient", "Hypochondriac", "Tasty Soup", "Yummy Brew", "Delicious Stew", "Occasional Buyer", "Frequent Client", "Loyal Customer", "First Riddle", "Shrouded in Mysteries", "No More Secrets", "Deck Shuffle", "Deck Tactics", "Deck Strategy", "Stayin' Alive", "Stayin' Alive, Stayin' Alive", "A! A! A! A! Stayin' Alive", "Cleansing Spark", "Cleansing Flame", "Cleansing Fire", "Breaking the Ice", "Keep It Cool", "Ice Ice Baby", "Poison Ivy", "Venomous Spider", "King Cobra", "Easy Come, Easy Go", "Money Isn't Everything", "Riches Have Wings", "Nightmare on Elm Street", "Hellraiser", "Texas Massacre", "Nothing More to Learn", "Magnificent Duo", "Fantastic Three", "Cleanser", "Pedantic", "Obsessive–Compulsive", "Slow as a Turtle", "Clumsy as an Ox", "Blind as a Bat", "Commando", "Predator", "Terminator", "Ready for Action", "Ready for War", "Ready for Anything", "Bronze Division", "Silver Division", "Golden Division", "Don't Look Back", "Straight to the Point", "Always Ahead", "Loads of Ammo", "Piles of Ammo", "Tons of Ammo", "Blast!", "Boom!", "KABOOM!", "Magic Friend", "Mages Companion", "Wizards BFF", "Scary", "Horrifying", "Terrifying", "Battering Ram", "With All One's Strength", "Push It to the Limit", "Wave of Silence", "Storm of Silence", "Tsunami of Silence", "Stomp Harder", "Stomp Better", "Stomp Stronger", "So Far So Good", "Getting Better", "The Fun Goes On", "Warming Up", "Lucky 7", "Bull's Eye!", "Chit Chat", "Gossip Girl", "You Have Your Way with Words!", "Game of Crows", "Captain Planet", "Eeny, Meeny, Miny, Moe", "The Alchemist", "Roguelite", "Roguelikelike", "Roguelike", "'Tis but a Scratch!", "Just a Flesh Wound", "I'm Invincible!", "Lay on Hands", "Lightwell", "Holy Light", "Golden Pot", "Golden Bowl", "Golden Vessel", "1 Step Back", "2 Steps Back", "3 Steps Back", "Ready for Magic", "Ready for Sorcery", "Ready for Wizardry", "Ready for Stories", "Ready for Tales", "Ready for Legends", "A-maze-ing!", "Cata-bomb!", "Hell Yeah!", "Don't Die Hard", "Don't Die Harder", "Don't Die Hard with a Vengeance", "Master Chef", "Master of Puppets", "Master of Disaster", "Craving Battle", "Hungry Campaign", "Starving War"];

    assert.strictEqual(officialAchievementNames.length, 202, "sanity check on this test's own reference list");

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
