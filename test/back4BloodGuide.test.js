import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/back-4-blood.js";

test("the Back 4 Blood guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "back-4-blood-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "back-4-blood");

});

test("the Back 4 Blood guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign & Difficulty",
            "Combat, Teamplay & Secrets",
            "DLC: Tunnels of Terror & Children of the Worm",
            "DLC: River of Blood & Trial of the Worm",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 93-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /93 Steam achievements/);

});

test("every one of the 93 official Back 4 Blood achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome to the Apocalypse", "Paid the Toll", "This Round's On Me", "Breakfast Can Wait", "Enemy of Mine", "Act 1 Recruit", "Act 1 Veteran", "Act 1 Cleaner", "Bob's Your Uncle", "Down the Drain", "Of Biblical Proportions", "Act 2 Recruit", "Act 2 Veteran", "Act 2 Cleaner", "Don't You Eat My Neighbor", "Paved With Good Intestines", "Act 3 Recruit", "Act 3 Veteran", "Act 3 Cleaner", "Act 4 Recruit", "Act 4 Veteran", "Act 4 Cleaner", "Good Riddence!", "Snitches Get Stitches", "Breakfest", "Jugger-not", "Brute Force", "No Time for a Nap", "Hippocrates Would be Proud", "Share the Load", "Don't Ask…", "Cleanup Crew", "Expanding the Arsenal", "Grateful Eight", "Squad Up", "Apocalypse Pacifist", "Dead Quiet", "Stacked Deck", "Jukebox Hero", "Nemesis", "Down, But Not Out", "Brought a Knife to a Gunfight", "Smörgåsbord", "A Humerus Weapon", "Swarmed", "Port Man Toe?", "Bell Hop", "Pallet Cleanser", "Easily Mist", "Cooped Up", "Dangerous To Go Alone", "Cryptozoologist", "Night of the Living Hedge", "Extra Credit", "Mind Your Step", "Master Spelunker", "Overwhelming Power", "Totem Toter", "Using Your Noggin", "Unnatural Selection", "Left Ventricle", "Nook, or Cranny?", "Unholy Grail", "Precarious Perch", "Backtrack", "Round the Riverbend", "Pipe Dream", "Act 5 Recruit", "Act 5 Veteran", "Act 5 Cleaner", "Act 5 Ace", "Left Fork Dead End", "Jar Jar Bonks", "Force Majeure Claws", "Who Snipes The Snipers?", "Take A Bow", "Smoke And Mirrors, But Without The Mirrors", "Barely Made It", "Duffel Brothers", "Balanced Meal", "Act 6 Recruit", "Act 6 Veteran", "Act 6 Cleaner", "Act 6 Ace", "TR's Secret Stash", "And The LAW Won", "This Is Fine", "A Can Of Worms", "Going For Broke", "The Path To Glory", "Constant Vigilance", "Hard-Boiled", "LAW and Hors D'oeuvres"];

    assert.strictEqual(officialAchievementNames.length, 93, "sanity check on this test's own reference list");

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
