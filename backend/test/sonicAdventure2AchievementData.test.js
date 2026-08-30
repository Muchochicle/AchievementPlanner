import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sonic-adventure-2.json - 15 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 213610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sonic-adventure-2");

test("getPlannerData('sonic-adventure-2') returns real planner data with 15 curated achievements", () => {

    assert.ok(game, "expected real planner data for sonic-adventure-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 15);

});

test("every Sonic Adventure 2 achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Sonic Adventure 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 15 Sonic Adventure 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beyond Good And Evil", "Clear LAST part in story mode."],
        ["Boss Attack", "Clear all 3 modes in Boss Attack Mode."],
        ["Chao Raiser", "Raise all 5 properties of any one Chao up to level 10."],
        ["Chao!", "Name your Chao for the first time."],
        ["DARK!", "Clear DARK side in story mode."],
        ["Emblem Collector", "Unlock 90 emblems."],
        ["Emblem Mania", "Unlock all 180 emblems."],
        ["Heaven or Hell", "Raise a HERO Chao and a DARK Chao with your hero and dark characters respectively."],
        ["Hello World", "Clear stage 1 on either side in story mode."],
        ["HERO!", "Clear HERO side in story mode."],
        ["Karate Master", "Beat all your enemies in Super Level in Chao Karate 1P mode."],
        ["Level 4!", "Play all level 4 stages in Action Race, Treasure Hunter and Shooting Battle."],
        ["Mission Complete", "Win all A RANKs (5 A RANKs) in any one stage in story mode."],
        ["Speedy Racer", "Win NO.1 in expert level in kart race."],
        ["You Are The Legend", "Win A RANK in all stages in Story Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
