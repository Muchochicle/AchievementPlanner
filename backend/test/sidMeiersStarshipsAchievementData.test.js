import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sid-meiers-starships.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 282210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sid-meiers-starships");

test("getPlannerData('sid-meiers-starships') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for sid-meiers-starships");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Sid Meier's Starships achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Sid Meier's Starships achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Sid Meier's Starships achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…We don't need roads", "Create a warp portal between two planets"],
        ["…Wretched hive of scum and villainy", "Defeat the Pirate planet"],
        ["A new order of intelligence", "Win the game as Supremacy"],
        ["A wondrous civilization", "Win a Wonder Victory"],
        ["Building a better today", "Raise a planetary improvement to level 5"],
        ["Can you turn the tide of war?", "Take over an enemy's home planet"],
        ["Dodge this", "Destroy a ship with a torpedo"],
        ["Food for the masses", "Upgrade the population on an earth-like planet"],
        ["Hit 'em where it hurts", "Score a critical hit on an enemy ship"],
        ["I am the swarm", "Have 4 or more fighters on the map at once during a battle"],
        ["I, uh, I've been to another planet, Ma.", "Travel to another planet"],
        ["It's dangerous to go alone! Take this.", "Upgrade the lasers on your ship"],
        ["It's just a flesh wound", "Repair a critical hit on a ship in your fleet"],
        ["It's our time down here.", "Defend your home planet"],
        ["Knowledge is the key to success", "Win a Science Victory"],
        ["Light years ahead of the competition!", "Research a tech to level 4"],
        ["Like rabbits", "Increase the population on a planet to 10"],
        ["Of all the wonders that I have heard…", "Control 5 Galactic Wonders"],
        ["Perpetual peace is a futile dream", "Win a Domination Victory"],
        ["Span the galaxy", "Win a Population Victory"],
        ["Take to the skies", "Start a game using a save game from Beyond Earth"],
        ["Tell me of your homeworld", "Bring a planet fully into your empire"],
        ["That is the sound of inevitability...", "Win the game as Purity"],
        ["The technology of tomorrow", "Research 5 techs to level 4"],
        ["The trouble with science…", "Give away a tech through negotiating with an enemy"],
        ["They can't shoot what they can't see", "Upgrade the stealth module to level 6"],
        ["They've gone to plaid!", "Have a ship in your fleet move 7 or more hexs in one turn during a battle"],
        ["Through the wormhole", "Use a jump gate during battle"],
        ["We choose our own path", "Win the game as Harmony"],
        ["We gotta get outta here", "Win a mission by bringing your flagship to a warp portal"],
        ["Women and children first", "Win a mission by bringing the colony ship to a warp portal"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
