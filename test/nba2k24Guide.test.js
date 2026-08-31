import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/nba-2k24.js";

test("the NBA 2K24 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "nba-2k24-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "nba-2k24");

});

test("the NBA 2K24 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "MyCAREER: On-Court Milestones",
            "MyCAREER: Virtual Rivals",
            "Mamba Moments, MyGM & MyLEAGUE",
            "Play Now, NBA Today & WNBA",
            "MyTEAM",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official NBA 2K24 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Not Too Shabby", "Clutch", "Tre' Bomber", "Go Ahead And Jump", "Social Distancer", "Make A Wish", "Follow Me On...", "Double Trouble", "All Rise", "Green Light", "Best Friends Forever", "Board Man Gets Paid", "Block Party", "Five Finger Discount", "Timing Is Everything", "Virtual Rivals Completionist", "Everybody Makes The First Jump", "Tour Of The NBA", "NBA Historian", "They’re On To You", "Yelling At Clouds", "Must Go Faster!", "Common Dominator", "Repping Humans Over AI", "A Taste Of Their Own Medicine", "Anything You Can Do", "Theater Hopping", "Mini Mamba", "Full Mamba", "Omnipotent", "Bartering Up", "In It To Win It", "MyCHAMPION!", "Scoreboard Queens", "You're A Star", "On My Way", "All-Star", "Superstar", "She's Got Game", "New With Tags", "Got'em", "Second Opinion", "Cap Space", "True Gamer", "Direct To You", "Jigsaw", "Super Shiny", "Thunderstruck", "Enhanced", "Collector"];

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
