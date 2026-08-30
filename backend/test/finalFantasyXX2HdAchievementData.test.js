import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-x-x2-hd.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 359870 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-x-x2-hd");

test("getPlannerData('final-fantasy-x-x2-hd') returns real planner data with 69 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-x-x2-hd");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 69);

});

test("every FINAL FANTASY X/X-2 HD Remaster achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every FINAL FANTASY X/X-2 HD Remaster achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 69 FINAL FANTASY X/X-2 HD Remaster achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Journey's Catalyst", "View \"Eternal Calm\""],
        ["A Talent for Acquisition", "Steal successfully with Rikku 200 times"],
        ["Alchemist", "Use Mix 30 times"],
        ["All Together", "All party members come together"],
        ["Almost There", "Reach the 60th floor of Iutycyr Tower and defeat the boss"],
        ["Blitzball Master", "Unlock all slot reels"],
        ["Chocobo License", "Pass all chocobo training"],
        ["Chocobo Master", "Get 5 treasure chests during the Chocobo Race at Remiem Temple and win the race"],
        ["Chocobo Rider", "Win a race with a catcher chocobo with a total time of 0:0:0"],
        ["Chocobo Whisperer", "Catch the Amazing Chocobo"],
        ["Complete Ability", "Complete the ability set for one dress"],
        ["Complete Episode ", "Complete an episode in Chapter 5"],
        ["Dancing Queen", "Obtain Magical Dances, Vol. II"],
        ["Defeating an Old Friend", "Defeat Bahamut"],
        ["Delta Attack!", "Obtain Magus Sisters"],
        ["Dousing the Fire", "Defeat Zalamander"],
        ["Dressed for the Occasion", "Change dresspheres on Yuna, Rikku, and Paine in one battle"],
        ["Excellent Negotiator", "Use Bribe 30 times"],
        ["Feel the Pain", "Obtain Anima"],
        ["FINAL FANTASY X Completion", "Obtain all available FINAL FANTASY X achievements"],
        ["FINAL FANTASY X-2 Completion", "Obtain all available FINAL FANTASY X-2 achievements"],
        ["Founder", "Defeat Trema"],
        ["Full Chain", "Achieve a 99 chain attack"],
        ["Gambler's Dream", "Roll the same number on all the Gambler's Dice"],
        ["Giant Tower", "Reach the 80th floor of Iutycyr Tower and defeat the boss"],
        ["Good Listener", "Listen to all of Maechen's stories"],
        ["Heartstrings", "View the \"Underwater Date\" scene"],
        ["It's All About the Money", "Obtain Yojimbo"],
        ["Just Starting", "Reach the 10th floor of Iutycyr Tower"],
        ["Learner", "Learn 5 Blue Bullet skills"],
        ["Learning!", "Learn to use all enemy abilities"],
        ["Lifetime Support", "View one complete fiend tale"],
        ["Lightning Dancer", "Dodge 200 lightning strikes and obtain the reward"],
        ["Machine of War", "Defeat Vegnagun"],
        ["Master Linguist", "Find all 26 Al Bhed Primers"],
        ["Mega Strike", "Deal 99999 damage with one attack"],
        ["Messenger from the Past", "Obtain all Jecht Spheres"],
        ["Midway Through", "Reach the 40th floor of Iutycyr Tower and defeat the boss"],
        ["Millionaire", "Pay off O'aka's debt"],
        ["Monster Master", "Complete Shinra's Bestiary"],
        ["Overcoming the Nemesis", "Defeat Nemesis"],
        ["Overcoming the Past", "Defeat Yunalesca"],
        ["Overkill", "Deal 99999 damage with one attack"],
        ["Perfect Sphere Master", "Complete the Sphere Grids for all main characters"],
        ["Perseverance", "Defeat Penance"],
        ["Power Strike", "Do 9999 damage or more in a single attack"],
        ["Show Off!", "Win a blitzball tournament"],
        ["Speaking in Tongues", "Find 1 Al Bhed Primer"],
        ["Specialty", "Obtain one special dress"],
        ["Sphere Breaker", "Win 10 times at Sphere Break"],
        ["Sphere Hunter", "Obtain all dresspheres"],
        ["Sphere Master", "Complete a Sphere Grid for one character"],
        ["Still a Ways ", "Reach the 20th floor of Iutycyr Tower and defeat the boss"],
        ["Striker", "Learn the Jecht shot"],
        ["Summon Master", "Obtain all Aeons"],
        ["Sweet Perfection", "Complete 100% of the main story"],
        ["Teamwork in FINAL FANTASY X !", "Win a blitzball match in FINAL FANTASY X"],
        ["Teamwork in FINAL FANTASY X-2 !", "Win a blitzball match in FINAL FANTASY X-2"],
        ["The Destination of Hatred", "Defeat Seymour Omnis"],
        ["The Eternal Calm", "Defeat Yu Yevon"],
        ["The Gunner", "Reach the highest level (LVMAX) in Gunner's Gauntlet"],
        ["The Right Thing", "Clear the Besaid Cloister of Trials"],
        ["Theater Enthusiast", "Buy every sphere at the Luca Theater"],
        ["Tonberry's Treasure", "Obtain treasure in the Tonberry area"],
        ["Treasure Hunter", "Open the chest that includes the Ribbon in the Bevelle Underground"],
        ["Tricky Trapper", "Help Clasko catch a chocobo by the end of Chapter 3"],
        ["Under the Table", "Spend 100,000 gil or more in bribes"],
        ["Weapon Master", "Obtain all Celestial Weapons"],
        ["Zeroed Out", "Defeat YSLS-Zero"],
    ];

    assert.strictEqual(officialAchievements.length, 69, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
