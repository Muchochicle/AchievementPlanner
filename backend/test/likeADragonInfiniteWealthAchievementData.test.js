import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/like-a-dragon-infinite-wealth.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2072450 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("like-a-dragon-infinite-wealth");

test("getPlannerData('like-a-dragon-infinite-wealth') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for like-a-dragon-infinite-wealth");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Like a Dragon: Infinite Wealth achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Like a Dragon: Infinite Wealth achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 74 Like a Dragon: Infinite Wealth achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["30 Mins or It's Free", "Completed all Crazy Delivery courses."],
        ["Abundant Memories", "Gathered 70 Memoirs of a Dragon."],
        ["Alo-Happy as Can Be", "Experienced 8 activities offered by Alo-Happy Tours."],
        ["Apex Dragon", "Reached level 50 with Kasuga."],
        ["Back in Action", "Reached at a specific point in the main story."],
        ["Basking in Glory", "Transformed Dondoko Island into a 4-star resort."],
        ["Break It Up!", "Won 20 raids."],
        ["Breaking Free", "Viewed all of Han's Drink Links."],
        ["Building Bonds and Making Gains", "Celebrated your victory over sector one of the Big Swell."],
        ["Commanding Respect", "Viewed all of Sonhi's Drink Links."],
        ["Craftaholic", "Crafted 100 different pieces of DIY furniture."],
        ["Don't Hate the Player", "Met up with 5 people from Miss Match."],
        ["Dondoko A-Go-Go!", "Ran a TV ad on Dondoko Island."],
        ["Dondoko Denouement", "Completed the Dondoko Island story."],
        ["Down and Out", "Reached at a specific point in the main story."],
        ["Dungeon Sweeper", "Conquered the Yokohama Underground."],
        ["Dying Breed", "Reached at a specific point in the main story."],
        ["Endless Vacation", "Completed New Game+."],
        ["Fish Out of Water", "Reached at a specific point in the main story."],
        ["Found and Lost", "Reached at a specific point in the main story."],
        ["Funk Goes On", "Pushed Kiryu's Soul, Tech, or Body to the max."],
        ["Having Fun Yet?", "Played 10 different minigames."],
        ["Hiding in Plain Sight", "Reached at a specific point in the main story."],
        ["Holding the Line", "Reached at a specific point in the main story."],
        ["Infinite Wealth", "Obtained all achievements."],
        ["Investing in the Future", "Completed all of Julie's investments."],
        ["Island Hospitality", "Welcomed 100 guests to Dondoko Island."],
        ["Kei is for Kinship", "Celebrated your victory over sector three of the Big Swell."],
        ["Layered Lies", "Reached at a specific point in the main story."],
        ["Legendary Dragon", "Reached level 70 with Kasuga."],
        ["Letting Go", "Viewed all of Tomizawa's Drink Links."],
        ["License to Skill", "Obtained 10 certificates from the Ounabara Vocational School."],
        ["Living Your Best Life", "Completed 40 substories."],
        ["Mad Hustle", "Raised 3 jobs to rank 30."],
        ["Metahuman", "Raised all of Kasuga's personality stats to max."],
        ["Misgivings", "Reached at a specific point in the main story."],
        ["Missing Words", "Viewed all of Saeko's Drink Links."],
        ["No Regrets", "Viewed all of Adachi's Drink Links."],
        ["Not a Total Waste", "Obtain an item from a toilet bowl."],
        ["Photo Hunter", "Took 30 different photos for the Photo Rally."],
        ["Pound for Pound", "Dialed up Poundmates 30 times."],
        ["Precious Memories", "Gathered 30 Memoirs of a Dragon."],
        ["Prize Fighter", "Maxed out a Sujimon's level and friendship."],
        ["Renewed Purpose", "Completed all Life Links."],
        ["Resolute Dragon", "Reached level 30 with Kasuga."],
        ["Rest Assured", "Viewed all of Chitose's Drink Links."],
        ["Reunion", "Reached at a specific point in the main story."],
        ["Ruffians Beware", "Conquered the Hawaiian Haunt."],
        ["Saving Lives", "Completed 20 substories."],
        ["Separate Ways", "Reached at a specific point in the main story."],
        ["Sicko Stopper", "Completed all Sicko Snap courses."],
        ["Side Hustle", "Raised a job to rank 30."],
        ["Something from Nothing", "Made 10 pieces of gear at Julie's Gearworks."],
        ["Somewhere Over the Rainbow", "Photograph a rainbow in the skies of Hawaii (appears after rainfall)."],
        ["Spirit of Aloha", "Befriended 50 people through Aloha Links."],
        ["Squared Away", "Viewed all of Nanba's Drink Links."],
        ["Starting Fresh", "Viewed all of Chou's Drink Links."],
        ["Suji League Champion", "Completed all Sujimon-related substories."],
        ["Sujimaniac", "Registered 100 Sujimon to the Sujidex."],
        ["Sujimon Sensei", "Registered 200 Sujimon to the Sujidex."],
        ["Sujimon Snag 'Em", "Recruited 10 Sujimon from battle."],
        ["Superhuman", "Raised one of Kasuga's personality stats to max."],
        ["The Hero Returns", "Took up the Hero's mantle in New Game+."],
        ["The Man Who Regained His Name", "Completed the main story."],
        ["Time Marches On", "Reached at a specific point in the main story."],
        ["Titillating Teamwork", "Celebrated your victory over sector two of the Big Swell."],
        ["Touching Lives", "Completed 10 substories."],
        ["Turning the Tides", "Reached at a specific point in the main story."],
        ["Ultimate Hustle", "Raised 7 jobs to rank 30."],
        ["Unboxed Brotherhood", "Celebrated your victory over sector four of the Big Swell."],
        ["Wandering Dragon", "Reached level 10 with Kasuga."],
        ["We Did It?", "Celebrated your victory over the fifth and final sector of the Big Swell."],
        ["We're Definitely the Best!", "Completed New Game+ on Legend difficulty."],
        ["We're Probably the Best!", "Completed New Game+ on Hard difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 74, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
