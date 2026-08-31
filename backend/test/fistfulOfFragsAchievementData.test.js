import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fistful-of-frags.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 265630 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fistful-of-frags");

test("getPlannerData('fistful-of-frags') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for fistful-of-frags");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Fistful of Frags achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Fistful of Frags achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Fistful of Frags achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fistful of Dynamite", "Get some kills with explosive chain reaction effect (their own dynamite kills them)"],
        ["Best Friends", "Kill a few Steam friends with bare hands"],
        ["Bouncing around", "Kill 25 enemies by kick right after wall-jumping"],
        ["Certified mobile cannon operator", "Complete the mobile cannon tutorial"],
        ["Defuser", "Pick lit dynamite sticks thrown by other players"],
        ["Detonator", "Get some kills shooting at a lit dynamite"],
        ["Dutch Courage", "Kill some enemies while being under whiskey's effect"],
        ["Frag Robber", "Kill some enemies severely injured by another player, while that player is still close to the victim"],
        ["Hat-Shooter", "Drop 15 enemy player's hat by shooting over their heads"],
        ["Kick their asses", "Kick some enemies into water, fire or a large fall"],
        ["Level: Gunfighter", "Complete 100 games"],
        ["Level: Legend", "Complete 500 games"],
        ["Level: Rancher", "Complete 25 games"],
        ["More Dead Than Alive", "Get some frags while your health is lower than 15 HP "],
        ["My Name is Nobody ", "Your first kill in a game among other human players"],
        ["Overpowered", "Kill enemies with dual Colt Walkers"],
        ["Overweighted", "Kill enemies while reaching 100% overencumber due weapon accumulation"],
        ["Robin Hood", "Make headshots with bow from long range"],
        ["Sliding killer", "Kill 25 enemies while sliding"],
        ["The Unforgiven", "Kill enemies ending their streak of 7 or more kills"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
