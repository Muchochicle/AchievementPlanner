import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/watch-dogs-2.js";

test("the Watch Dogs 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "watch-dogs-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "watch-dogs-2");

});

test("the Watch Dogs 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Operations",
            "World Activities & Races",
            "Traversal & Combat Feats",
            "Shopping & Cosmetics",
            "Silly & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 55-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /55 Steam achievements/);

});

test("every one of the 55 official Watch Dogs 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Who Am I", "Put Your Damn Pants On", "Menace", "In Style", "DedSec-A-Roni",
        "Only God Can Judge Me", "Doggyland", "Photobombed!", "A Ride to Remember", "Bad Boys",
        "Something To Ride", "Researcher", "Smooth Felon", "Miniroadtrip!", "Knock You Out",
        "Jump Around", "Earn your Sea Legs", "Roboteer", "Third Time's the Charm", "Hold My Hair",
        "Let Me Ride", "One of the Gang", "Natural Born Killer", "Please Marcus, Don't Hurt Them", "Hold My Hand",
        "Feeding Frenzy", "Troll'r", "Got The Shutterbug", "One-Man Garage", "Pimp My eKart",
        "App'ing Around", "I Get Around", "Ain't No Stopping", "The Fox", "Joined the Mile High Club",
        "Picking Up the Pieces", "Baby, I Got Your Money", "Knight Ridden", "No Place Like Haum", "Informer",
        "100% Legit", "Hypnotize", "Old School Justice", "Sabotage", "Make Every Voice Count",
        "The Itsy Bitsy Spider", "You're On A Boat!", "Leaks and Leaks", "Hack the World", "Not the Pizza Guy",
        "The Score of Your Life", "Nanotriumph", "Prize Catch", "That Escalated Quickly", "It's the Final Showd0wn",
    ];

    assert.strictEqual(officialAchievementNames.length, 55, "sanity check on this test's own reference list");

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
