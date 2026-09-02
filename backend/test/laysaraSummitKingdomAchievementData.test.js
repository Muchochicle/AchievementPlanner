import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/laysara-summit-kingdom.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1823950 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("laysara-summit-kingdom");

test("getPlannerData('laysara-summit-kingdom') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for laysara-summit-kingdom");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Laysara: Summit Kingdom achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Laysara: Summit Kingdom achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Laysara: Summit Kingdom achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And lived happily ever after", "Build two more Summit Temples in a sandbox continuation of a finished campaign."],
        ["Because it is hard", "Sell 24 or more of Ornamented Cedar through a single Trading Post"],
        ["Believer", "Raise a Summit Temple on Celestial Rise in Sandbox"],
        ["Better safe than sorry", "Reduce snow cap avalanche strength from 3 to 1 using two Avalanche Inducers"],
        ["Brilliant management", "Money penalty incurred for building buried in snow, failed weather breakdown quest, overloaded Lift Station Bases and missing research applied simultaneously"],
        ["Close call", "Complete a challenge in the last possible moment"],
        ["Conquered Demon's Rest", "Complete scenario on Demon's Rest"],
        ["Conquered Mount Plenty", "Complete scenario on Mount Plenty"],
        ["Conquered Plain Rock", "Complete scenario on Plain Rock"],
        ["Conquered Saltspire Peaks", "Complete scenario on Saltspire Peaks"],
        ["Conquered Smothered Flame", "Complete scenario on Smothered Flame"],
        ["Conquered Snowfury Summit", "Complete scenario on Snowfury Summit"],
        ["Conquered Splintered Soul", "Complete scenario on Splintered Soul"],
        ["Conquered Talontop", "Complete scenario on Talontop"],
        ["Conquered Windslab", "Complete scenario on Windslab"],
        ["Discerning", "Start a game on a Custom difficulty"],
        ["Expert puzzle-solver", "Complete any challenge on a boosted dificulty"],
        ["Fanatic", "Reach research level 24"],
        ["Follower", "Raise a Summit Temple in campaign"],
        ["Free spirit", "Have level 4 house buried in snow in Free Build mode"],
        ["Heavy fumes", "Distribute 10 or more incense via a single Shrine"],
        ["Human resources", "Have 2000 citizens of each caste in the city"],
        ["Inflation? What's this?", "Have +7000 or more revenue from minting"],
        ["Kingdom builder", "Raise Summit Temples on all big mountains in Sandbox"],
        ["Laysara's saviour", "Complete the campaign"],
        ["Maniac puzzle-solver", "Complete 8 challenges"],
        ["Master disaster", "Have money balance -10000 or less"],
        ["Mastering the basics", "Complete two tutorial missions in campaign"],
        ["Midas", "Have money balance +3000 or more"],
        ["Miner", "In any scenario, have operational mines on all resource deposits"],
        ["Mole", "Extract 100 or more of a single resource from a tunnel network"],
        ["Morning walk", "Create a transport route from Yak Post that is at least 1000 metres long"],
        ["Observer", "Take a screenshot in the Photo Mode"],
        ["On the edge", "Pause the game with 1 coin left in the treasury"],
        ["Puzzle-solver", "Complete any challenge"],
        ["Rainy close call", "Complete a weather breakdown quest in the last possible moment"],
        ["Rough start", "Lose a game on Novice difficulty"],
        ["Savant", "Complete 8 challenges on a boosted difficulty"],
        ["Snowy consequences", "Have a single avalanche strike 10 buildings"],
        ["Tech-sceptic", "At the moment of completing Summit Temple have only Simple Yak Breedings as a source of your yak population"],
        ["This is the life", "Fulfill all needs of the citizens living in any given house (outside of tutorial and challenges)"],
        ["Totally not taxes", "Have +2500 donations revenue from a single Donation Spot"],
        ["Trade union", "Have +5000 or more revenue from trade"],
        ["True veteran", "Complete any scenario on Veteran difficulty"],
        ["Yak demiurg", "Have 1000 yak population"],
        ["Yak enthusiast", "Have 100 yak population"],
        ["Yak master", "Have 500 yak population"],
        ["Yak of all trades", "Trade with 24 different resources in Sandbox"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
