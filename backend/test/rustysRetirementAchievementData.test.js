import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rustys-retirement.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2666510 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rustys-retirement");

test("getPlannerData('rustys-retirement') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for rustys-retirement");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every Rusty's Retirement achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every Rusty's Retirement achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 71 Rusty's Retirement achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["666", "Build 666 crop tiles on a single farm"],
        ["A Big Production Line", "Produce 25,000 biofuel across all farms"],
        ["A New Crop!", "Unlock a new crop"],
        ["A Nice Little Income", "Earn 50,000 spare parts across all farms"],
        ["A Small Production Line", "Produce 5,000 biofuel across all farms"],
        ["Architect", "Build on every available tile"],
        ["Automatization", "Deploy one of each robot on a single farm"],
        ["Berry Collector", "Unlock all berries"],
        ["Bigger and better crops", "Improve 25 crops with chips"],
        ["Blossom Forest", "Unlock the Blossom Forest farm"],
        ["Buzzing!", "Place 10 Bulb Hives on a single farm"],
        ["Cluck, cluck!", "Place down 10 chickens on one farm"],
        ["Crop Collector", "Unlock all crops"],
        ["Desert Oasis", "Unlock the Desert Oasis farm"],
        ["Earning Big Bucks", "Earn 250,000 spare parts across all farms"],
        ["Echo's Uber Upgrades", "Build Echo's Workshop"],
        ["Excellent!", "Buy a legendary chip"],
        ["Flower Swamp", "Unlock the Flower Swamp farm"],
        ["Forbic's Bulbs and Butterflies", "Build Forbic's House"],
        ["Full-scale Mass Production", "Produce 1 MILLION biofuel across all farms"],
        ["Get a pet", "Build a pet house"],
        ["Green Thumb", "Unlock 10 crops"],
        ["Haiku's Helping Hand", "Build Haiku's House"],
        ["Have a few pets", "Build 4 pet houses on one farm"],
        ["Heavily modified crops", "Improve all crops with chips"],
        ["Horticulturist", "Unlock 25 crops"],
        ["Industrial Revolution", "Produce 100,000 biofuel across all farms"],
        ["Let's Spruce this Place Up!", "Place at least one decoration"],
        ["Maxed Berry Bot", "Max upgrade a Berry Bot"],
        ["Maxed Biofuel Bot", "Max upgrade a Biofuel Bot"],
        ["Maxed Feeder Bot", "Max upgrade a Feeder Bot"],
        ["Maxed Fertilizer Bot", "Max upgrade a Fertilizer Bot"],
        ["Maxed Harvest Bot", "Max upgrade a Harvest Bot"],
        ["Maxed Waste Bot", "Max upgrade a Waste Bot"],
        ["Maxed Water Bot", "Max upgrade a Water Bot"],
        ["Millionaire", "Earn 1 MILLION spare parts across all farms"],
        ["Modifying crops", "Improve a crop by purchasing a chip"],
        ["Modifying for efficiency", "Improve 10 crops with chips"],
        ["Moo...", "Place down ten cows on one farm"],
        ["Multi-Millionaire", "Earn 10 MILLION spare parts across all farms"],
        ["Nah, I don't like those", "Reroll ALL the chips in store"],
        ["Not-so-bad", "Buy a common chip"],
        ["Oh poop!", "Collect 1,000 animal waste"],
        ["Oink!", "Place down ten pigs on one farm"],
        ["Pinion's Counting Crops", "Build Pinion's House"],
        ["Play for 1hr", "Play the game for 1 hour"],
        ["Play for 24hrs", "Play the game for 24 hour (across all farms)"],
        ["Play for 48hrs", "Play the game for 48 hour (across all farms)"],
        ["Pretty good", "Buy a rare chip"],
        ["Reaper's Genetically Modified Organisms", "Build Reaper's Outpost"],
        ["Relocation Specialist", "Move a building at least once"],
        ["Sandy Desert", "Unlock the Sandy Desert farm"],
        ["Slate's Biodynamic Barn", "Build Slate's Barn"],
        ["Snowy Fields", "Unlock the Snowy Fields farm"],
        ["Sonnet's Shopping Spree", "Build Sonnet's Shop"],
        ["Splunk's Planting Seeds", "Build Splunk's House"],
        ["That's a Bit Excessive", "Build 10 Biofuel Converters on a single farm"],
        ["That's a Lot of Crops", "Harvest 250,000 crops (across all farms)"],
        ["That's a Lot of Water", "Water 1 MILLION crops (across all farms)"],
        ["This is a Good Start", "Produce 1,000 biofuel across all farms"],
        ["This is a Pretty Farm", "Place 100 decorations on a single farm"],
        ["This is nice!", "Spin the cog once"],
        ["This is not so nice.", "Spin the Cog a thousand times"],
        ["This is Something", "Earn 15,000 spare parts across all farms"],
        ["This Looks Nice", "Place 25 decorations on a single farm"],
        ["Woah, that's a big Cucumber!", "Grow a Giant Cucumber"],
        ["Woah, that's a big Pumpkin!", "Grow a Giant Pumpkin"],
        ["Woah, that's a big Red Cabbage!", "Grow a Giant Red Cabbage"],
        ["Woah, that's a big Tomato!", "Grow a Giant Tomato"],
        ["Woah, that's a big White Pumpkin!", "Grow a Giant White Pumpkin"],
        ["Woah, that's a big Zucchini!", "Grow a Giant Zucchini"],
    ];

    assert.strictEqual(officialAchievements.length, 71, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
