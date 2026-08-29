import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/party-animals.js";

test("the Party Animals guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "party-animals-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "party-animals");

});

test("the Party Animals guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Social",
            "Quick Match & Custom Games",
            "Map Challenges - Classic Maps",
            "Map Challenges - More Maps",
            "Special Modes",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 116-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /116 Steam achievements/);

});

test("every one of the 116 official Party Animals achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Platinum Animal", "Level 50", "Level 100", "Animal Unlock: 20", "Outfit Unlocked: 20",
        "Fashionista", "Avatar Master", "Punch In", "Keep On Keeping On", "Yo Man",
        "Friends", "Welcome To The Party", "Nemo For Speed", "First Strike", "10 Quick Match Wins",
        "I Have A Friend", "Give Me Five", "Currahee", "Band Of Brothers", "Hot Shot",
        "The Dream Team", "OHHHHHH", "Piece of Cake", "Match Point", "Fight Everywhere",
        "Twice The Fun", "My Rules", "Who Did That", "Sportsmanship", "Who's Laughing Now",
        "Hooray! The Earth's Strongest Animal", "Ice Block", "Sayonara", "Justice Rains From Above", "Navy OTTERs",
        "Superdry", "Case Closed", "Fireworks", "Die Hard", "Touch Down",
        "Not Like Pat Roach", "Survivor", "Man vs. Wild", "Hot Dog", "Dog In The Wind",
        "Chill In The Wind", "Dog Behind The Door", "Wreck-It Ralph", "G-Man", "The Vortigaunts",
        "Arthur's Dream", "Mission: Impossible", "Waterloo Bridge", "Peace Elite", "Tarzan",
        "Escape the Gator", "Still Waters", "Surfer Dogs", "Reservoir Dogs", "Ice Dog",
        "Jack And Rose", "Smooth Operator", "Willy Wonka", "Less is More", "I'm Back",
        "L'arrivée d'un train", "Working Dog", "Biofuels", "Dutch's Plan", "Ready Player One",
        "Diamond Merchant", "Gold Rusher", "Immortal Kombat", "Fly Me To The Moon", "Up",
        "Mine Cart Carnage", "Balloon Runner", "Total War", "The Hurt Locker", "Airline VIP",
        "Thunderbolt", "Shock Damage", "666", "The Klaw", "The Mighty Ducks",
        "Perfect Guard", "Bowling Alley Cat", "Super Bowl", "Ball Weapon", "Run Forrest Run",
        "Patte d'Or", "Hat Trick", "Roy Makaay", "Big Brains", "I'm Enlightened",
        "Aye aye, Captain!", "Captain Nemo", "An Able Bodied Crew", "Drink up, me hearties, yo ho!", "Keep Breathing",
        "This is my island!", "Hey, Wilson", "Safely First", "Fast and Furry", "Beast of Mount Akina",
        "Fur Weight Champion", "Nimble As A Cat", "Iron Mike", "Infinity And Beyond", "New Dawn",
        "I'm Sorry, Dave", "The Monolith", "The Call", "Tale of the Inspector", "The Horror in Clay",
        "Madness from the Sea",
    ];

    assert.strictEqual(officialAchievementNames.length, 116, "sanity check on this test's own reference list");

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
