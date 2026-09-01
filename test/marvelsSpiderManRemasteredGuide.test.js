import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvels-spider-man-remastered.js";

test("the Marvel's Spider-Man Remastered guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvels-spider-man-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvels-spider-man-remastered");

});

test("the Marvel's Spider-Man Remastered guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story, Skills & City Sweep",
            "Research, Combat Feats & Benchmarks",
            "Collectibles, Traversal & The Heist DLC",
            "Turf Wars & Silver Lining DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 78-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /78 Steam achievements/);

});

test("every one of the 78 official Marvel's Spider-Man Remastered achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Superior Spider-Man", "I Heart Manhattan", "Master of Masters", "Backpacker", "Cat Prints", "Inner Sanctuary", "All the King's Men", "Mercenary Tactics", "Back in the Slammer", "Neighbourhood Watch", "A Suit For All Seasons", "Schooled", "Amazing Coverage", "Short Fuse", "Fists of Fury", "Ninja", "Spy Hunter", "Challenge Finder", "R&D", "Demons Emerge", "The Six Assemble", "End Game", "Science FTW!", "Knocking Down Kingpin", "Staying Positive", "Grounded", "Sting and Smash", "Tombstone Takedown", "Shock and Awe", "Wing It", "King of Swing", "And Stay Down!", "Pigeon Hunter", "Hug It Out", "Friendly Neighbourhood Spider-Man", "The Scientific Method", "Spider-Sensible", "Overdrive", "With Great Power...", "Hero for Higher", "Sightseeing", "Born to Ride", "Sticky and Tricky", "Snappy Dresser", "Arachnophobia", "Lost and Found", "Spider-Man About Town", "Cat's Out of the Bag", "A Bit of a Fixer-Upper", "Ace the Base", "One More Time", "Power and Responsibility", "Seduced by the City", "Screwy", "The Cat Came Back", "Here Kitty-Kitty", "Bye Felicia", "The Long Con", "Disorganised Crime", "The City is My Family", "Turning the Screw", "Pulling the Trigger", "Crossing the Thin Blue Line", "Steel Skull, Glass Jaw", "Prohibition", "The Gang War", "The City Sleeps", "Screwballed", "Frenemies", "Unplugged", "Terminated", "The Wages of War", "Unacceptable", "Grinding All the Way", "Full Arsenal", "Master's Education", "So Many Hits...", "The Untouchable Spider-Man"];

    assert.strictEqual(officialAchievementNames.length, 78, "sanity check on this test's own reference list");

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
