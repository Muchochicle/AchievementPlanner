import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/farming-simulator-19.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 787860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("farming-simulator-19");

test("getPlannerData('farming-simulator-19') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for farming-simulator-19");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Farming Simulator 19 achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Farming Simulator 19 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Farming Simulator 19 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Good Deed", "Complete 1 mission"],
        ["Ample Yield", "Harvest 10 hectares"],
        ["Backyard Gardener", "Cultivate 1 hectare"],
        ["Chief of Cultivation", "Cultivate 100 hectares"],
        ["Delighted Plants", "Fertilize 10 hectares"],
        ["Ecstatic Plants", "Fertilize 100 hectares"],
        ["Egg Lord", "Breed 100 chickens"],
        ["Fervent Farmer ", "Cultivate 10 hectares"],
        ["Happy Plants", "Fertilize 1 hectare"],
        ["Helping Out", "Complete 50 missions"],
        ["Humongous Harvest", "Harvest 100 hectares"],
        ["I Saw That Coming!", "Cut down 1 tree"],
        ["Legendary Aide", "Complete 100 missions"],
        ["Longplay", "Reach 10 hours of playing time in a single savegame"],
        ["Lucrative Labor", "Own a bank account with 10 million ingame money"],
        ["Milk Magnate", "Breed 20 cows"],
        ["More Wood!", "Cut down 25 trees"],
        ["Pink Progress", "Breed 50 pigs"],
        ["Plant Prosperity", "Sow 10 hectares"],
        ["Reap What You Sow", "Harvest 1 hectare"],
        ["Serial Sower", "Sow 100 hectares"],
        ["Starting Small", "Sow 1 hectare"],
        ["Wool Commander", "Breed 30 sheep"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
