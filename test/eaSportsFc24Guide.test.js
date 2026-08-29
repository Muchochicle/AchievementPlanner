import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ea-sports-fc-24.js";

test("the EA SPORTS FC 24 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ea-sports-fc-24-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ea-sports-fc-24");

});

test("the EA SPORTS FC 24 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Volta & Pro Clubs",
            "Gameplay Skills",
            "Ultimate Team",
            "Player & Manager Career",
            "Kick Off & Women's Football",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 40-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /40 Steam achievements/);

});

test("every one of the 40 official EA SPORTS FC 24 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Volta's best", "Teamwork works", "Full Wardrobe", "Shop till you drop", "On the way up",
        "Dead-ball specialist", "Intuition and Execution", "Power Shot", "Bring it on", "Surgical Aim",
        "Bullseye", "PlayStyles+", "Squad Building Completionist", "The Alchemist", "Trust me, I'm a Manager",
        "Defensive Masterclass", "One Moment Please!", "Welcome to the Big Leagues!", "Seasoned Veteran", "Record Breaker",
        "We're in the Game!", "Level Up!", "Graduation Day", "End of the Line", "Campeones",
        "We're Going Up", "Top of the Pyramid", "First of Many", "Walk the Walk", "Make the Grade",
        "Dazzling Personality", "Precious Advice", "Winning in Style", "Fashion Icon", "Golden Generation",
        "An ace up your sleeve", "Do Your Homework", "European Legend", "Best of Five", "Football is Everything",
    ];

    assert.strictEqual(officialAchievementNames.length, 40, "sanity check on this test's own reference list");

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
