import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/speedrunners.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 207140 (fetched through this app's own services/steamApi.js).
// 6 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("speedrunners");

test("getPlannerData('speedrunners') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for speedrunners");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every SpeedRunners achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every SpeedRunners achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 SpeedRunners achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100%", "Reach max XP."],
        ["A Race against Time", "Beat the first Chapter in Story."],
        ["Backfired", "Get hit and knocked out by your own rocket."],
        ["Deflected!", "Deflect a fireball with a shockwave."],
        ["Dive, Kick", "Tackle 10 opponents mid-air."],
        ["ez git gud", "Win a Ranked match while playing as a maxed-out \"gold\" character (unlocked by earning enough XP with that character to reach its highest cosmetic tier)."],
        ["From Way Downtown", "Land a grapple on an opponent from a very long distance away."],
        ["Get Lucky", "In a custom lobby, enable the \"SpeedRoulette\" mutator and play until a Roulette wheel appears at the start of a race."],
        ["Getting Serious!", "Promote to the Bronze League."],
        ["Gotcha!", "Grapple 100 opponents using the golden hook."],
        ["Hook Block", "Block 10 golden hooks with crates."],
        ["King of Swing", "Don't touch the floor for 5 seconds."],
        ["Mind Your Head!", "Drop a Crate on an opponent's head 10 times."],
        ["Officer requesting Backup", "Beat the second Chapter in Story."],
        ["Ranking Up!", "Promote to the Beginner League."],
        ["Ready for Ranked", "Unlock Ranked matches."],
        ["See Ya!", "Overtake 1000 opponents."],
        ["Smooth Moves!", "Dodge the Golden Hook 10 times."],
        ["Strike!", "Hit 3 opponents with one fireball."],
        ["Sultan of Swing", "Don't touch the floor for 10 seconds."],
        ["Super Crate Blox", "Block 10 Rockets with Crates."],
        ["Super Speed", "Maintain superspeed for a full second."],
        ["The King of New Rush City", "Beat all Chapters on Unfair difficulty."],
        ["The most dangerous Game", "Beat the third Chapter in Story."],
        ["Triple Freeze!", "Freeze 3 opponents with one ray."],
        ["Two Birds, One Stone", "Hit two or more opponents with a single bomb at the same time."],
        ["Ultimate Swing Lord", "Don't touch the floor for 30 seconds."],
        ["Vengeance, and running!", "Grapple an opponent immediately after they grapple you."],
        ["Welcome to New Rush City", "Beat the final Chapter in Story."],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 6 hidden SpeedRunners achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Two Birds, One Stone", "Vengeance, and running!", "From Way Downtown", "Backfired", "Get Lucky", "ez git gud"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
