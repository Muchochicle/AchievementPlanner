import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/orcs-must-die-3.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1522820 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("orcs-must-die-3");

test("getPlannerData('orcs-must-die-3') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for orcs-must-die-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Orcs Must Die! 3 achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Orcs Must Die! 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Orcs Must Die! 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Assassin", "Kill 100 minions."],
        ["Can't Stop Me Now", "Survive 25 waves in a single endless match."],
        ["Challenge Accepted", "Complete any Weekly Challenge."],
        ["Close Their Eyes", "Kill 1000 Cyclopes"],
        ["Collecting Tails", "Kill 1000 Tuatara"],
        ["Collector", "Acquire every item in the game."],
        ["Combo Apprentice", "Score 500,000 in any campaign scenario."],
        ["Combo Rift Lord", "Score 5,000,000 total in Scramble."],
        ["Combo War Mage", "Score 5,000,000 in any endless match."],
        ["Cracking Eggs", "Complete Tier 2 in Scramble."],
        ["Fair Trade", "Purchase a new piece of gear."],
        ["First Flight", "Complete the Drastic Steps campaign."],
        ["Golden Monocle", "Purchase all 3 pieces of \"Cold as Eyes\" gear"],
        ["Heads and Tails", "5 Skull one \"Tipping the Scales\" scenario on Endless"],
        ["Ice Breaker", "Beat all \"Cold as Eyes\" scenarios"],
        ["Making an Omelet", "Complete Tier 5 in Scramble."],
        ["Millionaire", "Earn 1,000,000 coin."],
        ["Moneybags", "Earn 100,000 coin."],
        ["Perfect Balance", "Beat all \"Tipping the Scales\" scenarios"],
        ["Poke in the Eye", "Kill 250 Cyclopes"],
        ["Rift Lord", "Complete the story campaign on Rift Lord difficulty."],
        ["Rifts Protected", "Complete all acheivements."],
        ["Scale Necklace", "Kill 250 Tuatara"],
        ["Scrambled Eggs", "Reroll a debuff in Scramble."],
        ["Shedding Skin", "Purchase one upgrade for any \"Tipping the Scales\" gear"],
        ["Survivor", "Survive 10 waves in a single endless match."],
        ["The Eyes Have It", "5 Skull one \"Cold as Eyes\" scenario on Endless"],
        ["The Landing", "Complete the Drastic Steps campaign on Rift Lord difficulty."],
        ["Thumb on the Scale", "5 Skull all \"Tipping the Scales\" scenarios on Rift Lord"],
        ["Tinkerer", "Upgrade a piece of gear."],
        ["Top Floor", "Earn 5 skulls on every scenario of the Drastic Steps campagin on Rift Lord difficulty."],
        ["Upgraded", "Purchase all upgrades for a single trap."],
        ["Valedictorian", "Earn 5 skulls on every scenario of the story campagin on Rift Lord difficulty."],
        ["War Lord", "Beat the first war scenario."],
        ["War Mage", "Complete the main campaign."],
        ["Warpath", "Kill 10,000 minions."],
        ["Well Equipped", "Unlock all gear slots."],
        ["Willing to Sacrifice", "5 Skull all \"Cold as Eyes\" scenarios on Rift Lord"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
