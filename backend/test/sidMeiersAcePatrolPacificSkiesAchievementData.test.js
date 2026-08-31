import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sid-meiers-ace-patrol-pacific-skies.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 244090 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sid-meiers-ace-patrol-pacific-skies");

test("getPlannerData('sid-meiers-ace-patrol-pacific-skies') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for sid-meiers-ace-patrol-pacific-skies");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Ace Patrol: Pacific Skies achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Ace Patrol: Pacific Skies achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Ace Patrol: Pacific Skies achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10,000 point mission - Japanese Army", "Achieve a 10,000 point mission with the Japanese Army"],
        ["10,000 point mission - Japanese Navy", "Achieve a 10,000 point mission with the Japanese Navy"],
        ["10,000 point mission - US Army", "Achieve a 10,000 point mission with the US Army"],
        ["10,000 point mission - US Navy", "Achieve a 10,000 point mission with the US Navy"],
        ["100,000 Squadron points - Japanese Army", "Earn 100,000 points with a Japanese Army squadron"],
        ["100,000 Squadron points - Japanese Navy", "Earn 100,000 points with a Japanese Navy squadron"],
        ["100,000 Squadron points - US Army", "Earn 100,000 points with a US Army squadron"],
        ["100,000 Squadron points - US Navy", "Earn 100,000 points with a US Navy squadron"],
        ["15,000 point mission - Japanese Army", "Achieve a 15,000 point mission with the Japanese Army"],
        ["15,000 point mission - Japanese Navy", "Achieve a 15,000 point mission with the Japanese Navy"],
        ["15,000 point mission - US Army", "Achieve a 15,000 point mission with the US Army"],
        ["15,000 point mission - US Navy", "Achieve a 15,000 point mission with the US Navy"],
        ["150,000 Squadron points - Japanese Army", "Earn 150,000 points with a Japanese Army squadron"],
        ["150,000 Squadron points - Japanese Navy", "Earn 150,000 points with a Japanese Navy squadron"],
        ["150,000 Squadron points - US Army", "Earn 150,000 points with a US Army squadron"],
        ["150,000 Squadron points - US Navy", "Earn 150,000 points with a US Navy squadron"],
        ["5,000 point mission - Japanese Army", "Achieve a 5,000 point mission with the Japanese Navy"],
        ["5,000 point mission - Japanese Navy", "Achieve a 5,000 point mission with the Japanese Navy"],
        ["5,000 point mission - US Army", "Achieve a 5,000 point mission with the US Army"],
        ["5,000 point mission - US Navy", "Achieve a 5,000 point mission with the US Navy"],
        ["50,000 Squadron points - Japanese Army", "Earn 50,000 points with a Japanese Army squadron"],
        ["50,000 Squadron points - Japanese Navy", "Earn 50,000 points with a Japanese Navy squadron"],
        ["50,000 Squadron points - US Army", "Earn 50,000 points with a US Army squadron"],
        ["50,000 Squadron points - US Navy", "Earn 50,000 points with a US Navy squadron"],
        ["Four Aces", "Create a Squadron with four aces"],
        ["Hat Trick - Ace", "Shoot down 3 planes with 1 pilot in 1 mission: Ace"],
        ["Hat Trick - Leader", "Shoot down 3 planes with 1 pilot in 1 mission: Leader"],
        ["Hat Trick - Legend", "Shoot down 3 planes with 1 pilot in 1 mission: Legend"],
        ["Hat Trick - Pilot", "Shoot down 3 planes with 1 pilot in 1 mission: Pilot"],
        ["Hat Trick - Rookie", "Shoot down 3 planes with 1 pilot in 1 mission: Rookie"],
        ["Japanese Army Ace Pilot (5 Victories)", "Earn 5 Victories with a Japanese Army  Pilot"],
        ["Japanese Navy Ace Pilot (5 Victories)", "Earn 5 Victories with a Japanese Navy Pilot"],
        ["Legendary Japanese Army Pilot (50 Victories)", "Earn 50 Victories with a Japanese Army  Pilot"],
        ["Legendary Japanese Navy Pilot (50 Victories)", "Earn 50 Victories with a Japanese Navy Pilot"],
        ["Legendary US Army Pilot (50 Victories)", "Earn 50 Victories with a US Army Pilot"],
        ["Legendary US Navy Pilot (50 Victories)", "Earn 50 Victories with a US Navy Pilot"],
        ["US Army Ace Pilot (5 Victories)", "Earn 5 Victories with a US Army Pilot"],
        ["US Navy Ace Pilot (5 Victories)", "Earn 5 Victories with a US Navy Pilot"],
        ["Win a Battle - Japanese Army", "Win a Battle as the Japanese Army"],
        ["Win a Battle - Japanese Navy", "Win a Battle as the Japanese Navy"],
        ["Win a Battle - US Army", "Win a Battle as the US Army"],
        ["Win a Battle - US Navy", "Win a Battle as the US Navy"],
        ["Win a Mission - Ace", "Win a Mission at Ace difficulty level"],
        ["Win a Mission - Leader", "Win a Mission at Leader difficulty level"],
        ["Win a Mission - Legend", "Win a Mission at Legend difficulty level"],
        ["Win a Mission - Pilot", "Win a Mission at Pilot difficulty level"],
        ["Win the Campaign - Japanese Army", "Win the Campaign as the Japanese Army"],
        ["Win the Campaign - Japanese Navy", "Win the Campaign as the Japanese Navy"],
        ["Win the Campaign - US Army", "Win the Campaign as the US Army"],
        ["Win the Campaign - US Navy", "Win the Campaign as the US Navy"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
