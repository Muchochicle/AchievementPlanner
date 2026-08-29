import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/20-minutes-till-dawn.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1966900 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 34 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("20-minutes-till-dawn");

test("getPlannerData('20-minutes-till-dawn') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for 20-minutes-till-dawn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every 20 Minutes Till Dawn achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every 20 Minutes Till Dawn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 20 Minutes Till Dawn achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Batgun Mastery", "Use the Batgun to survive  Darkness 15."],
        ["Bullet Mania", "Survive Darkness 15 with Abby."],
        ["Celestial", "Survive Darkness 15 with Luna."],
        ["Crossbow Mastery", "Use the Crossbow to survive Darkness 15."],
        ["Cyclone Sword Mastery", "Use the Cyclone Sword to survive Darkness 15."],
        ["Dark Night", "Survive the night on Darkness 1."],
        ["Darker Night", "Survive the night on Darkness 5."],
        ["Darkest Night", "Survive the night on Darkness 10."],
        ["Elder God", "Survive Darkness 15 with Hastur"],
        ["Fallen Angel", "Survive Darkness 15 with Shana."],
        ["Flame Cannon Mastery", "Use the Flame Cannon to survive Darkness 15."],
        ["Gotta Catch 'Em ALL", "Survive the night with 8 summons as the end."],
        ["Grenade Launcher Mastery", "Use the Grenade Launch to survive Darkness 15."],
        ["Magic Bow Mastery", "Use the Magic Bow to survive Darkness 15."],
        ["Master Ninja", "Survive Darkness 15 with Hina."],
        ["Master of the Blade", "Use Katana to survive Darkness 15."],
        ["Necromastery", "Survive Darkness 15 with Lilith."],
        ["Nimble", "Survive the night without getting hit."],
        ["On the Edge", "Survive the night with 1 Max HP at the end."],
        ["Pacifist", "Survive the night without firing your gun."],
        ["Pitch Black", "Survive the night on Darkness 15."],
        ["Pyromaniac", "Survive Darkness 15 with Scarlett."],
        ["Reckless", "Survive the night with Abby and the Grenade Launcher, and only using Abby's special ability to fire."],
        ["Reindeer", "Survive Darkness 15 with Dasher."],
        ["Revolver Mastery", "Use the Revolver to survive Darkness 15."],
        ["Salvo Knives Mastery", "Use the Salvo Knives to survive Darkness 15."],
        ["Shotgun Mastery", "Use the Shotgun to survive Darkness 15."],
        ["SMG Mastery", "Use Dual SMGs to survive Darkness 15."],
        ["Strongwoman", "Survive Darkness 15 with Diamond."],
        ["Sunrise", "Survive the full 20 minutes."],
        ["Thunder God", "Survive Darkness 15 with Spark."],
        ["Watering Gun Mastery", "Use the Watering Gun to survive Darkness 15."],
        ["Witch", "Survive Darkness 15 with Raven."],
        ["Yokai", "Survive Darkness 15 with Yuki."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
