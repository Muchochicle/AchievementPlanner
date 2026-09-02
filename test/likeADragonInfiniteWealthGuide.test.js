import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/like-a-dragon-infinite-wealth.js";

test("the Like a Dragon: Infinite Wealth guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "like-a-dragon-infinite-wealth-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "like-a-dragon-infinite-wealth");

});

test("the Like a Dragon: Infinite Wealth guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Main Story",
            "Substories & Bonds",
            "Character Growth & Activities",
            "Side Content & Minigames",
            "Secrets & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 74-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /74 Steam achievements/);

});

test("every one of the 74 official Like a Dragon: Infinite Wealth achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Infinite Wealth", "Back in Action", "Fish Out of Water", "Time Marches On", "Down and Out", "Misgivings", "Hiding in Plain Sight", "Separate Ways", "Layered Lies", "Found and Lost", "Dying Breed", "Reunion", "Holding the Line", "Turning the Tides", "The Man Who Regained His Name", "Touching Lives", "Saving Lives", "Living Your Best Life", "Squared Away", "No Regrets", "Missing Words", "Breaking Free", "Starting Fresh", "Rest Assured", "Letting Go", "Commanding Respect", "Wandering Dragon", "Resolute Dragon", "Apex Dragon", "Legendary Dragon", "Superhuman", "Metahuman", "Renewed Purpose", "Precious Memories", "Abundant Memories", "Funk Goes On", "Alo-Happy as Can Be", "Side Hustle", "Mad Hustle", "Ultimate Hustle", "Pound for Pound", "Something from Nothing", "Investing in the Future", "Sujimaniac", "Sujimon Sensei", "Dungeon Sweeper", "Ruffians Beware", "Break It Up!", "Suji League Champion", "Sujimon Snag 'Em", "Prize Fighter", "Craftaholic", "Island Hospitality", "Dondoko A-Go-Go!", "Basking in Glory", "Dondoko Denouement", "Having Fun Yet?", "License to Skill", "30 Mins or It's Free", "Sicko Stopper", "Photo Hunter", "Spirit of Aloha", "Don't Hate the Player", "Not a Total Waste", "Somewhere Over the Rainbow", "The Hero Returns", "Endless Vacation", "We're Probably the Best!", "We're Definitely the Best!", "Building Bonds and Making Gains", "Titillating Teamwork", "Kei is for Kinship", "Unboxed Brotherhood", "We Did It?"];

    assert.strictEqual(officialAchievementNames.length, 74, "sanity check on this test's own reference list");

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
