import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-banner-saga.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 237990 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-banner-saga");

test("getPlannerData('the-banner-saga') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-banner-saga");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every The Banner Saga achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every The Banner Saga achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 The Banner Saga achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Backbiter", "Defeat an enemy with a Backbiter."],
        ["Beat the Odds", "Whew...Egil made it the whole way!"],
        ["Bowmaster", "Defeat an enemy with a Bowmaster."],
        ["Challenge", "Complete the game on Hard difficulty level without losing a single battle."],
        ["Diplomat", "Get permission to destroy a varl landmark."],
        ["Eagle Eye", "Defeat an enemy with an Eagle Eye."],
        ["Forced March", "Reach Boersgard in 120 days."],
        ["Godstone Bjorulf", "Visit the godstone Bjorulf."],
        ["Godstone Denglr", "Visit the godstone Denglr."],
        ["Godstone Dundr", "Visit the godstone Dundr."],
        ["Godstone Hadrborg", "Visit the godstone Hadrborg."],
        ["Godstone Hridvaldyr", "Visit the godstone Hridvaldyr."],
        ["Godstone Ingrid", "Visit the godstone Ingrid."],
        ["Godstone Marek", "Visit the godstone Marek."],
        ["Godstone Radormyr", "Visit the godstone Radormyr."],
        ["Godstone Stravhs", "Visit the godstone Stravhs."],
        ["Grudgewielder", "Defeat an enemy with a Grudgewielder."],
        ["Hard Difficulty", "Complete the game on Hard difficulty."],
        ["High Spirits", "Complete the game without ever getting low morale."],
        ["Hunter", "Defeat an enemy with a Hunter."],
        ["Innocent", "Alette doesn't want to harm humans or varl...don't make her."],
        ["Master Tactician", "Win a battle on Hard difficulty in the camp Training Tent using 6 rank 5 units."],
        ["Mender", "Defeat an enemy with a Mender."],
        ["Normal Difficulty", "Complete the game on Normal difficulty."],
        ["Provoker", "Defeat an enemy with a Provoker."],
        ["Quartermaster", "Complete the game without letting anyone in your caravan die to hunger."],
        ["Raidmaster", "Defeat an enemy with a Raidmaster."],
        ["Shieldmaster", "Defeat an enemy with a Shieldmaster."],
        ["Siege Archer", "Defeat an enemy with a Siege Archer."],
        ["Skystriker", "Defeat an enemy with a Skystriker."],
        ["Spearmaster", "Defeat an enemy with a Spearmaster."],
        ["Strongarm", "Defeat an enemy with a Strongarm."],
        ["Thrasher", "Defeat an enemy with a Thrasher."],
        ["Treasure Hunter", "Acquire 5 rank 5 items."],
        ["Warden", "Defeat an enemy with a Warden."],
        ["Warhawk", "Defeat an enemy with a Warhawk."],
        ["Warleader", "Defeat an enemy with a Warleader."],
        ["Warmaster", "Defeat an enemy with a Warmaster."],
        ["Warmonger", "Fight 40 battles in a single playthrough."],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
