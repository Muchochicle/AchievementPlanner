import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bugsnax.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 674140 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("bugsnax");

test("getPlannerData('bugsnax') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for bugsnax");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Bugsnax achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Bugsnax achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Bugsnax achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bossy Bugs", "Defeat all of the Legendary Bugsnax."],
        ["Candid Cryptid", "Scan the Snaxsquatch - it appears at spots such as the Scorched Gorge windmills at midnight."],
        ["Clothesline", "Stun a Bugsnak with the Trip Shot attached to your Buggy Ball."],
        ["Combo Meal", "Transform a Grumpus with Bunger, Fryder, and Sodie."],
        ["Dapper Capper", "Collect 10 hats."],
        ["Deep Impact", "Complete the adventure at Broken Tooth."],
        ["Documentarian", "Watch all of Lizbert's video diaries."],
        ["Double Trapper", "Catch more than one Bugsnak in your Snak Trap at once."],
        ["Everybody Gets One", "Catch your first Bugsnak."],
        ["Feeding Frenzy", "Fully transform every Grumpus."],
        ["Gone Home", "Find your way to Snaxburg."],
        ["Got to Catch Them All", "Catch 100 unique species of Bugsnax."],
        ["Grab Bag", "Empty one biome of all its Snakpods."],
        ["Halfway There", "Catch 50 unique species of Bugsnax."],
        ["I'm Stuffed", "Fully transform a Grumpus."],
        ["In The Arms of the Gramble", "Donate max amount of Bugsnax to Gramble's ranch."],
        ["Know Thy Neighbor", "Return every Grumpus to Snaxburg."],
        ["Launch Party", "Stun a flying Bugsnak by launching another Bugsnak at it."],
        ["Live Laugh Hut", "Fully furnish your hut."],
        ["Midnight Snak", "Fully transform Gramble with Bugsnax."],
        ["Perf Dirt", "Steal Beffica's diary from her cave."],
        ["Quartermaster", "Catch 25 unique species of Bugsnax."],
        ["Say Cheese!", "Scan a Grumpus after saucing them with cheese."],
        ["Sidetracked", "Complete all of the side quests."],
        ["Sundae Best", "Transform a Grumpus with Scoopy, Banopper, and Cheery."],
        ["Survivor", "Reach the ending with every Grumpus still alive."],
        ["Talkin' Bout Bugsnax", "Interview every Grumpus."],
        ["That Reminds Me of A Puzzle", "Solve the secret of the lava cave or the secret of the dunes."],
        ["Vacation's End", "Complete the main story of Bugsnax."],
        ["Wonderfalls", "Enter the hidden passage behind the left waterfall at Flavor Falls."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
