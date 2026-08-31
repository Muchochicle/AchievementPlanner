import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tropico-5.js";

test("the Tropico 5 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tropico-5-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tropico-5");

});

test("the Tropico 5 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Tutorials & Campaign",
            "Multiplayer & Economy Milestones",
            "Dynasty, Survival & Sandbox",
            "Waterborne & Espionage DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 70-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /70 Steam achievements/);

});

test("every one of the 70 official Tropico 5 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Dictatorship 101", "A New Dawn", "Day 0", "Back to the Past", "Leon Must Die!", "Hope", "Good Sportsmanship", "Project Beale", "It Prints Money!", "Architerissimo", "Naughty Docks", "What Energy Crisis?", "Sheep For Wood", "Mine! All Mine!", "Middle Manager Of The Revolution", "Friends With Benefits", "Everlasting Colony", "Made In Tropico", "Agricultural Community", "The Madness Of Crowds", "The Town Of Cityville", "Pension Plan", "Infrastructor", "The China Card", "United States of Tropico", "Globalist", "Booked Solid", "A Barrel Of Monkeys", "The Great Mogul", "Extraordinary Popular Delusions", "In Seventh Heaven", "Cause of Death", "Greasing Palms", "Overqualified", "Heir And Now", "Mirror, Mirror On The Wall", "Presidente's Seven", "History Will Absolve Me", "Let Them Eat Cake", "Putsch and Judy", "The Bay Of Pigs", "Think Tanks", "Tower Defense", "Retro-futurism", "For Science!", "Fundamental Principles", "Bureaucrat", "... But To Take Part", "Claustrophilia", "To Live In Interesting Times", "The Black Pearl", "Surfin' Tropico!", "Herbivore", "My Precious", "Thanks for all the fish!", "The King of Pearls", "Do not press!", "Waterworld", "Seasteading", "Offshore Haven", "The Maltese Toucan", "Presidente 007", "The Silent Front", "Tropicoleaks", "Catch me a Spy", "Antiutopia", "Big Brother", "From Tropico with love", "The Greybar Hotel", "Kill all Humans"];

    assert.strictEqual(officialAchievementNames.length, 70, "sanity check on this test's own reference list");

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
