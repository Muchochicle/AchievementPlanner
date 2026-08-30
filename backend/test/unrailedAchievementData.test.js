import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/unrailed.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1016920 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 53 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("unrailed");

test("getPlannerData('unrailed') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for unrailed");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Unrailed! achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Unrailed! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Unrailed! achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["20 Miles Under the Sea", "You tend to like it underwater!"],
        ["Achievement Master", "You're still playing?"],
        ["Advanced Explorer", "Reached 2000m in endless mode (medium)."],
        ["Advanced Hiker", "Reached 200m in endless mode (medium)."],
        ["Advanced Stroller", "Reached 100m in endless mode (medium)."],
        ["Advanced Voyager", "Reached 500m in endless mode (medium)."],
        ["Advanced Wayfarer", "Reached 1000m in endless mode (medium)."],
        ["Apollo 13", "Reached for the far side of the universe."],
        ["Climate Change", "Use the bucket to melt snow."],
        ["Collector", "Unlocked everything."],
        ["Cowter Space", "Brought a cow into space."],
        ["Deep Space Transit", "Built a 4000m long track in endless (any difficulty)."],
        ["Destructionist", "Used (a lot of) dynamite."],
        ["Ducky Danger", "Removed 100 ducks with dynamite."],
        ["Dynamite Fishing", "These fish are explosive - handle with care!"],
        ["Engineer", "Crafted over 10000 tracks in total."],
        ["Expert Explorer", "Reached 2000m in endless mode (hard)."],
        ["Expert Hiker", "Reached 200m in endless mode (hard)."],
        ["Expert Stroller", "Reached 100m in endless mode (hard)."],
        ["Expert Voyager", "Reached 500m in endless mode (hard)."],
        ["Expert Wayfarer", "Reached 1000m in endless mode (hard)."],
        ["Explorer", "Reached 2000m in endless mode (easy)."],
        ["Fire fighter", "Extinguish 10 Lava Blobs in one game."],
        ["Fireworks!", "Getting all those bolts surely took some time!"],
        ["Hiker", "Reached 200m in endless mode (easy)."],
        ["Incurious", "There are other biomes?!"],
        ["Industrialist", "Crafting wagon busy for an entire minute."],
        ["Leet", "Crashed at exactly 1337m."],
        ["Lost", "Please come back!"],
        ["Marathon", "You just ran a marathon!"],
        ["Martian", "Discover a new world."],
        ["Megalomaniac", " Blow up 3 different types of animals at once with dynamite."],
        ["Missed Opportunities", "50 train stations successfully ignored!"],
        ["Mojave Courier", "The heat never bothered you anyway."],
        ["Nanuk", "You really like cold weather, don't you?"],
        ["No Space For Improvement", "Reach the space biome without spending any bolts except for the engines."],
        ["Orient Express", "Built a 1000m long track in endless (any difficulty)."],
        ["Rocketman", "Flew around with the jetpack for 30 minutes in one round."],
        ["Satan's Minion", "Is it really that pleasant around here?"],
        ["Saved by Nausicaä", "You found the exit."],
        ["Scrooge", "Hoarded 25 bolts."],
        ["Shepherd", "Had four different animals attached to the milk wagon at the same time."],
        ["Shopaholic", "Who doesn't like long shopping trips?"],
        ["Snowman's Land", "Disassemble 20 snowmen."],
        ["Stroller", "Reached 100m in endless mode (easy)."],
        ["Terminal Station", "Reach the terminal station in endless"],
        ["Tough Nut!", "Reach the winter biome on extreme."],
        ["Toy Train", "Built a 500m long track in endless (any difficulty)."],
        ["Trans-Siberian Railway", "Built a 2000m long track in endless (any difficulty)."],
        ["Voyager", "Reached 500m in endless mode (easy)."],
        ["Wayfarer", "Reached 1000m in endless mode (easy)."],
        ["Where They Belong", "Bring a bandit or outlaw into hell."],
        ["Wrong way!", "You need to get to the right side!"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
