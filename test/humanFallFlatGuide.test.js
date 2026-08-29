import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/human-fall-flat.js";

test("the Human: Fall Flat guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "human-fall-flat-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "human-fall-flat");

});

test("the Human: Fall Flat guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Original Campaign Levels",
            "Cumulative Counters",
            "Free Update Levels - Part 1",
            "Free Update Levels - Part 2",
            "Free Update Levels - Part 3",
            "Hidden Achievements",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 151-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /151 Steam achievements/);

});

test("every one of the 151 official Human: Fall Flat achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Leap of Fail", "Choo Choo!", "Don't Get a Splinter!", "What Goes Up", "Brute Force",
        "Storm the Gate!", "Feet First", "Head First", "The End?", "Speedrun ",
        "No escape", "Pigeon Simulator", "Mind the gap!", "Public service", "Perfectionist",
        "It's stuck", "Tower", "AH, EO, EO, EO, EO, OOOOO!", "Silent hours (Noisy neighbours)", "My treasure",
        "Wrong direction", "Surprise! (Avalanche!)", "Primal", "Improvised Ammo", "For whom the bell tolls",
        "Zipline", "Smooth moves", "Row, row, row your boat", "Reverse gear", "Beacon",
        "Breathing exercise", "Surfer", "Electricity 101", "Will it fry?", "Delivery boy",
        "Thief", "Tourist", "Traveler", "Adventurer", "Let it rain",
        "Trampoline", "Climber", "Heavy lifting", "Learn to swim", "Sail away!",
        "Petrolhead", "Convertible ride", "The End", "Bird's eye view", "Rollin'",
        "Clockwork", "It's Alive!", "Tick Tock", "Planks? No Thanks!", "Fry Me to the Moon",
        "Under Pressure", "Walk the Plank", "Get Dizzy", "Whoops!", "Avalanche",
        "Tricky", "No Ice Ice Baby", "Taking the Piste", "Candy Rush", "Deck the Halls",
        "Bah, Humbug!", "Top the Hat", "Wrapped Up", "Pay Day", "Hook, Line and Jumper",
        "Amped!", "The Foreman", "Radio Silence", "After Hours", "How to get Fired!",
        "Hole in One", "Birdie", "Bogey (1 Over Par)", "Mulligan", "Sports Fan",
        "Tip-Top Ten Pin", "Hitchhiker", "Temper Tantrum", "Lucky Carp", "Zodiac",
        "Laojun’s Furnace", "Fortune Tree", "Wrecking Crew", "Toasty", "On Thin Ice",
        "Wrong Turn", "KABOOM!", "Bullseye", "Cast it into the fire", "Overachiever",
        "The Great Outdoors", "Safety first", "Bedwetter", "Lights out", "Don’t blame it on the sunshine",
        "Pipe dream", "Pretty fly for a cacti", "Currently Attractive", "Out of the orbinary", "Time saver",
        "Foot in the door", "Just walked in", "Small fish, big pond", "Top Shelf", "Spotless clean",
        "The floor is lava", "Square peg in a round hole", "Unlimited Power!", "Loose change", "Cu later",
        "Barrel of laughs", "A call for aid", "Spring cleaning", "To beach their own", "Explorer of the Deep",
        "Improvised Exploration Device", "Subpar parking job", "Cove-r up!", "Ship it", "Olympic Grandeur",
        "Shattered Dreams", "Seas the day", "Exclusive Tour", "Buckshot", "Laser Accurate",
        "Eye Spy", "A Leisurely Stroll", "Human Thawed Flat", "Speed Skating", "Prepared for winter",
        "Sweet Dreams", "Stay Puft", "Route Canal", "Dodgeball", "Test Complete",
        "Half-baked puzzle", "Need to vent", "Hope that wasn't important", "Full steam ahead", "Party Animal",
        "Let off some steam", "Bellhop", "A fjord-midable adventure", "Go with the flow", "Practice makes perfect",
        "Cheaters never prosper",
    ];

    assert.strictEqual(officialAchievementNames.length, 151, "sanity check on this test's own reference list");

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
