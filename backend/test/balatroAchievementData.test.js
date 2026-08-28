import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/balatro.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2379780 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 31 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("balatro");

test("getPlannerData('balatro') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for balatro");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Balatro achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Balatro achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Balatro achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["1,000K", "Score 1,000,000 Chips in a single hand"],
        ["100,000K", "Score 100,000,000 Chips in a single hand"],
        ["10K", "Score 10,000 Chips in a single hand"],
        ["Ante Up!", "Reach Ante 4"],
        ["Ante Upper!", "Reach Ante 8"],
        ["Astronomy", "Discover every Planet card"],
        ["Big Hands", "Have 80 or more cards in your deck"],
        ["Card Discarder", "Discard at least 2500 Cards"],
        ["Card Player", "Play at least 2500 Cards"],
        ["Cartomancy", "Discover every Tarot card"],
        ["Clairvoyance", "Discover every Spectral card"],
        ["Completionist", "Discover 100% of your collection"],
        ["Completionist+", "Win with every deck on Gold Stake difficulty"],
        ["Completionist++", "Earn a Gold Sticker on every Joker"],
        ["Extreme Couponer", "Discover every Voucher"],
        ["Flushed", "Play a Flush with 5 Wild Cards"],
        ["Heads Up", "Win a Run"],
        ["High Stakes", "Win a run on at least Gold Stake difficulty"],
        ["Legendary", "Discover a Legendary Joker"],
        ["Low Stakes", "Win a run on at least Red Stake difficulty"],
        ["Mid Stakes", "Win a run on at least Black Stake difficulty"],
        ["Nest Egg", "Have $400 or more during a single run"],
        ["Retrograde", "Get any poker hand to level 10"],
        ["ROI", "Buy 5 Vouchers by the end of Ante 4"],
        ["Royale", "Play a Royal Flush"],
        ["Rule Bender", "Complete any challenge run"],
        ["Rule Breaker", "Complete every challenge run"],
        ["Shattered", "Break 2 Glass Cards in a single hand"],
        ["Speedrunner", "Win a run in 12 or fewer rounds"],
        ["Tiny Hands", "Thin your deck down to 20 or fewer cards"],
        ["You Get What You Get", "Win a run without rerolling the shop"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
