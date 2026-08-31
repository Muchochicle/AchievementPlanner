import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nba-2k23.js";

test("the NBA 2K23 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nba-2k23-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nba-2k23");

});

test("the NBA 2K23 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "MyCAREER: On-Court & Progression",
            "Jordan Challenge, Play Now, MyGM & MyLEAGUE",
            "MyTEAM",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official NBA 2K23 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Not Too Shabby", "Clutch", "Let Doc Do His Thing", "Tre' Bomber", "Wet From Three", "What's For Dinner", "Go Ahead And Jump", "Follow Me On...", "Social Distancer", "Popping Off", "Finding Treasure", "Money Talks", "Rival Pride", "Double Trouble", "All Rise", "Green Light", "Best Friends Forever", "Board Man Gets Paid", "Block Party", "Second Chance", "Five Finger Discount", "It's Free Real Estate", "Timing Is Everything", "No Contest", "Squeaky Clean", "Badge Collector", "Top Of The World", "Legend In The Making", "Yes, Your Airness", "Dirty Work", "Turning Point", "Omnipotent", "Bartering Up", "In It To Win It", "MyCHAMPION!", "You're A Star", "On My Way", "All-Star", "Superstar", "She's Got Game", "New With Tags", "Slabbed", "Lottery Redux", "At The Buzzer!", "Threepio!", "Déjà Vu", "Play With Me", "Locked In!", "4 For 4", "Level Up"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
