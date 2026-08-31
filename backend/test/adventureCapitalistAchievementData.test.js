import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/adventure-capitalist.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 346900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("adventure-capitalist");

test("getPlannerData('adventure-capitalist') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for adventure-capitalist");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every AdVenture Capitalist achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every AdVenture Capitalist achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 AdVenture Capitalist achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1 Small Step...", " Get 1 of every Moon investment - 1 giant leap for management! "],
        ["2 Decillion Wings", " Reach 2 Decillion angels - Holy!"],
        ["Accurate Description", " Purchase the “Forever And Ever” Earth upgrade - Many Angels died to bring us this acceleration..."],
        ["Capitalism Classic", "Unlock 500 Earth Achievements - Grats! The cash amounts you’ve earned have no meaningful mathematical comparison in the universe!"],
        ["Delegation!", " Hire 20 Managers on the Moon - The mark of a true leader!"],
        ["Divine Intervention", " Reset for your first Moon Angel - Help is on the way!"],
        ["Earth Overlord!", "Purchase the \"Buy Earth\" Upgrade on Earth"],
        ["Frankly Ridiculous!", "Buy 3000 of Everything on Earth"],
        ["Gallery Tour", " Click the Gallery button on the Moon (in the Unlock Menu) - Did you know that was a button?"],
        ["Googolaire!", "Become a Googolaire on Earth"],
        ["Grand Standing!", "Buy 1000 of Everything on Earth"],
        ["Here We Go Again!", " Purchase the first angel upgrade on the Moon, “It Begins Again” - Great renewable resource, or GREATEST?"],
        ["Let's Learn Big Numbers!", "Become a Decillionaire on Earth"],
        ["Life's Manager", " Buy 32 of Earth's managers with only Lemonade Stands - The only investment you need."],
        ["Lucky Ducky", "Buy 777 or more of each Moon investment. Jackpot!"],
        ["Mars Attacks", "Unlock \"2500\" of Everything Achievement - \"Show Them the Meaning of Haste\""],
        ["Meta Reference", " Purchase the “Cana-dough Exchange” Earth upgrade - Where’s the roof on this thing?"],
        ["Moogal", " Reach 10^100 Moon Bucks - It’s fun to say."],
        ["Moon Walk", " Hire 20 Moon managers with only Moon Shoes. - One Product. One Destiny."],
        ["Moonumental Achievement", " Reach 1111 of everything on the Moon - Literally out of this world. "],
        ["Ominous...", " Buy 666 or more of each Earth investment - A lot of unlucky numbers."],
        ["One More", " Purchase your 1112nd Giant Laser - Not because it is easy..."],
        ["OVER 9000!", " Purchase more than 9000 Moon Shoe investments - No reference is too tired."],
        ["Release The Hounds", "Deploy your Profit Martians for the First Time"],
        ["Serious Citrus!", "Purchase 100 Lemonade Stands"],
        ["That Achievement's Name...", " Reach the “Special Relativity” Moon unlock (100 everything) - …Was Albert Einstein."],
        ["The Big Hundsky!", "Buy 100 of Everything on Earth"],
        ["The Great AdVenture!", "Unlock the 626th Achievement on Earth "],
        ["Triumph!", " Unlock the “Achievement” Everything unlock on Earth (5000) - This is probably quite stupendous. "],
        ["Wholy Holy!", "Reach 100,000 Total Angels on Earth"],
        ["You've Struck Oil!", "Purchase Your First Oil Rig"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
