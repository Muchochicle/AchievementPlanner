import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/worms-wmd.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 327030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("worms-wmd");

test("getPlannerData('worms-wmd') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for worms-wmd");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every Worms W.M.D achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Worms W.M.D achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 Worms W.M.D achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Billy No Mates", "Complete all the Sub Goals"],
        ["Bleating Ranker", "Reach Sheep Rank"],
        ["Bottom Rung", "Play a Ranked Match"],
        ["Call that a Challenge!", "Complete 5 Challenges"],
        ["Challenge Accepted", "Collect a wanted poster"],
        ["Do It Yourself!", "Craft every weapon in the game"],
        ["Full of Swag ", "Fully customise a team of Worms using unlocked customisations."],
        ["Grave Digger", "Kill 500 worms"],
        ["Gym Membership", "Finish a game with a worm on more health than it started with"],
        ["Halfway House", "Complete 15 Campaign Missions"],
        ["I built this city", "Win an Online game with all worms in Buildings"],
        ["I'm Your Father!", "Win an online multiplayer match in Sudden Death"],
        ["Mech me Proud", "Get 80 kills in a Mech"],
        ["Mount Killmore", "Get 40 kills using a Mounted Gun"],
        ["No Challenge at all", "Complete all Challenges"],
        ["Online Warrior", "Play 50 Online Multiplayer Games"],
        ["Passing Out Parade", "Complete all Training levels"],
        ["Recruitment Drive", "Complete Navigation Training"],
        ["Roto Boating", "Get 80 kills in a Helicopter"],
        ["Specialist Forces Qualified", "Gain a Gold Medal on all Training levels"],
        ["Sub Standard", "Complete 40 Sub Goals"],
        ["Sweat Shop", "Unlock all the Customisation Items"],
        ["Tanks a lot buddy", "Get 80 kills in a Tank"],
        ["That Camp was no Pain", "Complete the Campaign"],
        ["The Worm that Turned", "Kill 4 worms in a single turn"],
        ["Training Day", "Complete all the Basic Training levels"],
        ["Unstoppable", "Win 3 online games in a row"],
        ["You Crafty Devil", "Craft 30 weapons across all game modes"],
        ["You're so Pushy", "Kill 20 worms with Prod"],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
