import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/space-engineers.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 244850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("space-engineers");

test("getPlannerData('space-engineers') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for space-engineers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Space Engineers achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Space Engineers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Space Engineers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bring It On", "Survive 30 waves of drones in Never Surrender scenario."],
        ["Crayon Box", "Build and fly ship with more than 20 colors."],
        ["Death Wish", "Armageddon Mode for 5 hours in Survival."],
        ["Declare War", "Declare war with different faction."],
        ["Engineering Degree", " Finish all tasks of Learning to Survive scenario."],
        ["Explorer", "Visit all planets and moons in Survival mode."],
        ["Giant Leap For Humankind", "Walk 1969 meters on a Moon."],
        ["Going Green", "Build 25 Solar Panels while playing in Survival Mode."],
        ["I See Dead Drones", "Survive 10 waves of drones in Never Surrender scenario."],
        ["I'm Doing My Part", "Survive 100 waves of drones in Never Surrender scenario."],
        ["I've Got Present For You", "Detonate a warhead that kills you and another player."],
        ["It Takes But One", "Complete all objectives without dying in Learning to Survive scenario."],
        ["Joint Operation", "Survive 10 waves with at least 1 other player in Never Surrender scenario."],
        ["Lock And Load", "Kill an enemy with a rifle."],
        ["Lost In Space", "Spend more than 1 hour out of sight of other players on a MP server."],
        ["Master Engineer", "150+ hours."],
        ["Millionaire Club", "Get 1,000,000 Space Credits and join the club of the wealthiest people in the galaxy."],
        ["Monolith", "Get within 5 meter radius of the monolith in Survival. *Monoliths have to be in the world on loading time"],
        ["Number 5 Is Alive", "Connect your suit to power with less than 1% power remaining in Survival."],
        ["Personality Crisis", "Change astronaut style (color or skin) 20 times in 10 minutes."],
        ["Planetesphobia", "Disable the pirate facility without entering the atmosphere in Learning to Survive scenario."],
        ["Playing it cool", "Complete the Frostbite scenario"],
        ["Promoted Engineer", "Complete the final objective of Learning to Survive scenario."],
        ["Scrap Delivery", "Destroy 1000 pirate drones in Never Surrender scenario."],
        ["Smile And Wave", "Wave to an enemy that is also waving back within 5 meters looking at you in Survival."],
        ["The Bigger They Are", "Build more than 1,000,000 Kg of cubes."],
        ["The friend of the factions", "Befriend 3 factions; earning trust always pays well in the future."],
        ["The Harder They Fall", "Destroy more than 1,000,000 Kg of cubes."],
        ["The Story Begins", "Finish the First Jump scenario."],
        ["Win-Win", "Make peace with a faction."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
