import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/devil-may-cry-5.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 601150 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 55 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("devil-may-cry-5");

test("getPlannerData('devil-may-cry-5') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for devil-may-cry-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Devil May Cry 5 achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Devil May Cry 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Devil May Cry 5 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Job", "Accept a new job from Morrison after the Red Grave incident."],
        ["Back to Life", "Clear Mission 17."],
        ["Backroad", "Destroy a certain wall in Mission 04."],
        ["Battle for the Ages", "Clear Missions 19 and 20 without using continues (any difficulty except Heaven or Hell)."],
        ["Be the Legend", "Acquire all of Dante's skills."],
        ["Break a Leg", "Fend off a menace from above in Mission 05."],
        ["Concentrated Strength", "Acquire all of Vergil's skills."],
        ["Dance with the Devil", "Complete the game on Dante Must Die mode."],
        ["Dante The Gambler", "Use more than 500,000 Red Orbs total with Dr. Faust."],
        ["Demon Breeder", "Acquire all of V's skills."],
        ["Demon Destroyer", "Defeat 1,000 enemies total."],
        ["Doing Daddy Proud", "Complete the game on Son of Sparda mode."],
        ["Don't Mess with the Best", "Use proper timing to get a leg up in a close-quarters battle against the boss in Mission 11."],
        ["Each In His Own Way", "Clear Mission 13 with Nero, V, and Dante."],
        ["Eagle-Eyed", "Destroy a certain wall in Mission 09."],
        ["End of the Line", "Clear Mission 06."],
        ["Fall from Grace", "Clear the Prologue Mission."],
        ["Gotta Hurry", "Clear Mission 14."],
        ["Heart of a Swordsman", "Clear Mission 19 as Vergil without using any weapons other than Yamato. (Heaven or Hell excluded)"],
        ["Hell of a Hunter", "Clear all missions with S rank."],
        ["Highway to Hell", "Complete the game on Hell and Hell mode."],
        ["I Believe I Can Fly", "Rack up a total of 60 minutes in the air by jumping or other means."],
        ["Jackpot!", "Collect more than 1,000,000 Red Orbs total."],
        ["Let's Rock!", "Complete the game on Human mode."],
        ["Light in the Darkness", "Clear Mission 08."],
        ["Man on a Mission", "Clear Mission 18."],
        ["Not Too Shabby", "Perform a Stylish Rank S combo."],
        ["Nothing's Impossible", "Acquire all of Nero's skills."],
        ["Obedience Training", "Go on the offensive without relying on brute force in the Mission 16 boss battle."],
        ["Pet Protection", "Clear Mission 05 without V's demons getting stalemated (any difficulty except Heaven or Hell)."],
        ["Physical Perfection", "Upgrade your vitality gauge to max."],
        ["Protect the People", "Defeat all enemies in Mission 01."],
        ["Rearm and Repeat", "Collect more than 100 Devil Breakers during missions."],
        ["Rest in Peace", "Clear the Bloody Palace with V."],
        ["Reunion", "Clear Mission 03."],
        ["Secrets Exposed", "Clear all secret missions."],
        ["Seriously Stylish Slaying!", "Perform a Stylish Rank SSS combo."],
        ["Share the Pain", "Clear Mission 07 with both Nero and V."],
        ["Showtime!", "Complete the game on Devil Hunter mode."],
        ["Sibling Rivalry", "Clear all missions as Vergil."],
        ["Slam Dunk", "Clear the Bloody Palace with Nero."],
        ["Slick Moves", "Proceed with caution and avoid unneeded damage in Mission 15."],
        ["Stairway to Heaven", "Complete the game on Heaven or Hell mode."],
        ["Steppin' up the Style", "Perform a Stylish Rank SS combo."],
        ["The Devil's Own", "Upgrade your Devil Trigger Gauge to max."],
        ["The Qliphoth", "Clear Mission 12."],
        ["The Quick and the Dead", "Defeat 5 enemies in 1 second."],
        ["This Ain't Over", "Clear Mission 10."],
        ["This is Power", "Clear the Bloody Palace as Vergil."],
        ["Too Easy", "Clear the Bloody Palace with Dante."],
        ["Unarmed and Dangerous", "Beat Mission 07 without any starting Devil Breakers equipped (any difficulty except Heaven or Hell)."],
        ["Well I'll Be Damned", "Wield overwhelming power to exact an unexpected conclusion."],
        ["Where the Red Orbs Grow", "Collected Red Orbs from an unexpected spot in Mission 02."],
        ["Who Needs Weapons Anyway?", "Clear Mission 11 without equipping a weapon set for Dante (any difficulty except Heaven or Hell)."],
        ["Worthy of Legend", "Clear all missions with S rank on all difficulties except Heaven or Hell."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
