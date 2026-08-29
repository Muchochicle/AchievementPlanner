import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/football-manager-2024.js";

test("the Football Manager 2024 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "football-manager-2024-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "football-manager-2024");

});

test("the Football Manager 2024 guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Match & Season Milestones",
            "Trophies & Titles",
            "Awards & Recognition",
            "Transfers & Finances",
            "Board, Squad & Staff",
            "Network, Versus & Fantasy Draft",
            "Meta & Misc",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 100-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /100 Steam achievements/);

});

test("every one of the 100 official Football Manager 2024 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Hat-trick", "Flavour Of The Month", "You're Up!", "Cup Glory!", "Team Performance",
        "Parked The Bus", "A Game of Two Halves", "Star Player", "Goal Machine", "Unstoppable Force",
        "Immovable Object", "Scoring Streak", "Unbeatable!", "Parked The Tank", "National Service",
        "The Special One", "Best In The World", "You're On Fire", "Do The Double", "Domination",
        "Part Of The Furniture", "Trophy Hoarder", "Best In The Business", "Freedom Of The Country", "On Top Of The World",
        "Legend", "Invincible!", "First Victory", "Value For Money", "The Greatest",
        "World Renowned", "Off the Books", "Thumping", "Record Signing", "Record Sale",
        "Full Faith", "Beating Expectations", "#DoneDeal", "Clean Sheet", "What A Goal!",
        "Superb Strike", "Splashing The Cash", "Cash To Burn", "Outstanding Defence", "Tremendous Trio",
        "Goal Rush", "Irresistible Force", "On A Roll", "Top Form", "You Shall Not Pass",
        "Immortality", "National Hero", "Tête-à-tête", "Invitational", "Window Shopping",
        "Beat your Mates", "Perfect Host", "Total Support", "They're a Natural", "Money, Money, Money",
        "The Rich Get Richer", "200 Club", "Draft Dominator", "Online Rivalry", "Draft Value",
        "Online Streak", "World Beaters", "\"I Would Love It If We Beat Them\"", "Bragging Rights", "Clean Sheet Network",
        "Clean Sheet Versus", "Cupset Between Friends", "Drilling Down", "First Goal Network", "First Goal Versus",
        "First Win Network", "First Win Versus", "GOAT", "Import To Victory", "Mini League Champion",
        "Motivational Speaker", "New Kids On The Block", "One Of Our Own", "One of Us, One of Us!", "People Pleaser",
        "Planned Signing", "Red Hot Newgen", "Second Hand Signing", "Shots For Days", "Squad Goals",
        "Super-Sub", "The Only Stat That Matters", "The People's Champion", "The Player Whisperer", "The Unstoppables",
        "Versus Anyone", "Versus Champ", "We Go Again", "Wheeler Dealer", "You Can Buy Happiness",
    ];

    assert.strictEqual(officialAchievementNames.length, 100, "sanity check on this test's own reference list");

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
