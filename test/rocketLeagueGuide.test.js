import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rocket-league.js";

test("the Rocket League guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rocket-league-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rocket-league");

});

test("the Rocket League guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Core Play, Seasons & Skill Shots",
            "Customization & Items",
            "Extra Modes (Rumble, Hoops, Snow Day, Dropshot)",
            "Arena & Battle-Car Challenges",
            "Online, Clubs & Tournaments",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 88-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /88 Steam achievements/);

});

test("every one of the 88 official Rocket League achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Virtuoso", "Stocked", "Far, Far Away...", "Super Victorious", "Champion",
        "The Streak", "Helen's Pride", "Car Collector", "Drops in the Bucket", "Rocketeer",
        "Grease Monkey", "Pitch Veteran", "Rider's Block", "Break Shot", "Turbocharger",
        "Drill Sergeant", "Minute to Win it", "Speed Demon", "Pick-Me Up", "Wall-Crawler",
        "Team Player", "SARPBC Forever", "Feather in Your Recap", "Winner", "Clean Sheet",
        "Triple Threat", "Double Up", "Singles Club", "Perfect Start", "Still A Show-Off",
        "Know the Drill", "Traveler", "Tinkerer", "First-Timer", "Barras Bravas",
        "Friendly", "Winning is Winning", "An Inch and 6.2 Miles", "Ride or Die", "Don't Look Back",
        "Family, Not Friends", "Drift King", "Sky High", "All Fours", "Gladiator",
        "Survival of the Fittest", "Heartbreaker", "Natural Progression", "Throwback", "Hot Shot, Part Two",
        "My World is Fire", "Spectacular", "Savage", "Ruthless", "Psycho-Master Exploder",
        "Mad Scientist", "Icing the Cake", "Left Wing, Right Wing", "Fast Break", "Buzzer Beater",
        "Budding Artist", "One Better", "Certifiable", "GG", "Trifecta",
        "Infinite Power!", "Stopped Cold", "Sea Turtle", "Get Up, Mr. Bubbles!", "Rocket Repleter",
        "Registered Voter", "Metaverse", "Brave the Elements", "Damage Control", "Full Course",
        "Buckminster x10", "Storm Trooper", "Good Times", "New Profile Who This?", "Trade Secret",
        "Rank Up", "Coming On Strong", "Join the Club!", "Together is Better", "New Challenger",
        "People Person", "Squad Goals", "Best of the Bunch"
    ];

    assert.strictEqual(officialAchievementNames.length, 88, "sanity check on this test's own reference list");

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
