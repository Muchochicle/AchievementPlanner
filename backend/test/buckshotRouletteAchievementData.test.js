import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/buckshot-roulette.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2835570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("buckshot-roulette");

test("getPlannerData('buckshot-roulette') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for buckshot-roulette");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Buckshot Roulette achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Buckshot Roulette achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Buckshot Roulette achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1000K", "Cash out over 1,000,000 in 'Double or Nothing'."],
        ["140K", "Double your earnings in 'Double or Nothing' and win."],
        ["70K", "Beat the game."],
        ["Bronze Gates", "It rains metal here."],
        ["Chasing Losses", "Consume the 'Double or Nothing' pills."],
        ["Coin Flip", "Successfully shoot yourself with a blank, facing 50/50 odds."],
        ["Digita, Orava and Koni", "Breakfast of champions."],
        ["Full House", "Use all 9 unique items in a single turn during Double or Nothing (steal one from the dealer with Adrenaline to fit them all)."],
        ["Going Out With Style!", "Saw off the shotgun's barrel, then shoot yourself with a live round."],
        ["High Rollers", "Check the leaderboard by clicking the computer in the first room."],
        ["Know When To Quit", "Lose more than 1000K in 'Double or Nothing'"],
        ["Name Taken", "Enter 'GOD' or 'DEALER' as your player name."],
        ["Nope!", "Cash out immediately in 'Double or Nothing'."],
        ["Overdose", "Start the 'Double or Nothing' mode 10 times."],
        ["Soak It In", "After exiting the bathroom, don't enter the Dealer's room - stay out in the hallway and listen to the nightclub music for over a minute."],
        ["Why?", "Use the magnifying glass to identify a live round, then shoot yourself with it."],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
