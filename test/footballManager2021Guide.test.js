import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/football-manager-2021.js";

test("the Football Manager 2021 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "football-manager-2021-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "football-manager-2021");

});

test("the Football Manager 2021 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Match & Player Awards",
            "Managerial Milestones & Club Records",
            "Streaks, Titles & Continental Glory",
            "Dynamics, Staff & Squad Management",
            "Career Earnings & Fantasy Draft",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 98-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /98 Steam achievements/);

});

test("every one of the 98 official Football Manager 2021 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hat-trick", "Top Of The Class", "You're Up!", "Cup Glory!", "Team Performance", "International Superstar", "Parked The Bus", "Comeback King!", "Star Man", "Goal Machine", "Unstoppable Force", "Iron Curtain", "Scoring Streak", "Unbeatable!", "Parked The Tank", "National Service", "The Boss", "Best In Europe", "Golden Boot", "Best In The World", "You're On Fire", "Do The Double", "Domination", "Part Of The Furniture", "Trophy Hoarder", "Best In The Business", "Freedom Of The Country", "On Top Of The World", "Legend", "Invincible!", "First Victory", "Value For Money", "Club Legend", "The Greatest", "World Renowned", "Headhunted", "He's Sold!", "Thumping", "Going Places", "Overachiever!", "Record Signing", "Record Sale", "Full Faith", "Shrewd Spender", "Beating Expectations", "We Trust You", "I'm The Boss!", "He's Signed!", "Clean Sheet", "What A Goal!", "Superb Strike", "Splashing The Cash", "Cash To Burn", "Outstanding Defence", "Tremendous Trio", "Fantastic Five", "Attack!", "Irresistible Force", "On A Roll", "Top Form", "Immovable Object", "Icon", "Immortality", "Childhood Dream", "National Hero", "Head-to-Head", "Invitational", "Window Shopping", "Living the Dream", "Beat your Mates ", "Armchair Expert", "Perfect Host", "Total Support", "Superb Dressing Room Atmosphere", "He's a Natural", "Impervious", "Clean Bill of Health", "Rushed signing", "Eyes and Ears", "Mr Delegator", "Millionaire's Club", "Money, Money, Money", "The Rich Get Richer", "One more draft", "Beat all the AI Managers", "100 club", "Knockout King", "Shoestring Budget", "200 Club", "Draft Dominator", "Draft Rivalry", "Draft Value", "Excellent Match Cohesion", "Online Streak", "Scout's Honour", "Set Piece Specialist", "There Is Always Plan B", "Win the Club World Cup"];

    assert.strictEqual(officialAchievementNames.length, 98, "sanity check on this test's own reference list");

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
