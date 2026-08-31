import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yu-gi-oh-duel-links.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 601510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("yu-gi-oh-duel-links");

test("getPlannerData('yu-gi-oh-duel-links') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for yu-gi-oh-duel-links");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Yu-Gi-Oh! Duel Links achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Yu-Gi-Oh! Duel Links achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Yu-Gi-Oh! Duel Links achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced Duelist", "Win 100 Duels."],
        ["Card Collector", "Collect 300 types of cards."],
        ["Creator God", "Successfully Summon a total of 1000 monsters."],
        ["Damage Dealer", "Inflict a total of 1 million points of damage."],
        ["Duel King", "Win 300 Duels."],
        ["Duelist Awakened", "Reach Stage 3."],
        ["Fledgling Duelist", "Win 30 Duels."],
        ["God of Destruction", "Destroy a total of 1000 monsters."],
        ["Master of Destruction", "Destroy a total of 100 monsters."],
        ["Mid-Tier Duelist", "Win 50 Duels."],
        ["Novice Duelist", "Win 5 Duels."],
        ["PvP Duelist", "Win 100 PvP matches."],
        ["PvP Novice", "Win 30 PvP matches."],
        ["Rare Collector", "Collect 10 Prismatic Cards."],
        ["Single Duelist", "Reach Stage 20."],
        ["Single Novice", "Reach Stage 10."],
        ["Summoner", "Successfully Summon a total of 100 monsters."],
        ["Super Rare Collector", "Collect 100 Prismatic Cards."],
        ["Ultimate Duelist", "Earn all achievements."],
        ["Ultra Single Duelist", "Reach Stage 50."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
