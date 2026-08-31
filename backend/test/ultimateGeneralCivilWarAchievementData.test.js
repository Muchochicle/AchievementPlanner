import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ultimate-general-civil-war.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 502520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ultimate-general-civil-war");

test("getPlannerData('ultimate-general-civil-war') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for ultimate-general-civil-war");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Ultimate General: Civil War achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Ultimate General: Civil War achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Ultimate General: Civil War achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" Confederate hero in Battle of Bull Run", "Win the historical battle of Bull Run as Confederate"],
        [" Confederate hero in Battle of Shiloh", "Win the historical battle of Shiloh as Confederate"],
        [" Union hero in Battle of Stones River", "Win the historical battle of Stones River as Union"],
        ["Confederate hero in Battle of 2nd Manassas", "Win the historical battle of 2nd Manassas as Confederate"],
        ["Confederate hero in Battle of Antietam", "Win the historical battle of Antietam as Confederate"],
        ["Confederate hero in Battle of Chancellorsville", "Win the historical battle of Chancellorsville as Confederate"],
        ["Confederate hero in Battle of Chickamauga", "Win the historical battle of Chickamauga as Confederate"],
        ["Confederate hero in Battle of Cold Harbor", "Win the historical battle of Cold Harbor as Confederate"],
        ["Confederate hero in Battle of Fredericksburg", "Win the historical battle of Fredericksburg as Confederate"],
        ["Confederate hero in Battle of Gaines' Mill", "Win the historical battle of Gaines' Mill as Confederate"],
        ["Confederate hero in Battle of Gettysburg", "Win the historical battle of Gettysburg as Confederate"],
        ["Confederate hero in Battle of Malvern Hill", "Win the historical battle of Malvern Hill as Confederate"],
        ["Confederate hero in Battle of Stones River", "Win the historical battle of Stones River as Confederate"],
        ["The Civil War Campaign Medal", "Win a campaign battle"],
        ["The Confederate Officer Star", "3rd Level Confederate Medal"],
        ["The Defense Superior Service Medal", "4th Level Union Medal"],
        ["The Distinguished Service Cross", "6th Level Union Medal (can be achieved only on \"Major General\" difficulty)"],
        ["The Distinguished Service Medal", "5th Level Confederate Medal (can be achieved only on \"Brigadier General\" difficulty or higher)"],
        ["The Homeland Defense Cross", "2nd Level Confederate Medal"],
        ["The Medal of Honor", "7th Level Union Medal (can be achieved only on \"Major General\" difficulty)"],
        ["The Meritorious Service Cross", "5th Level Union Medal (can be achieved only on \"Brigadier General\" difficulty or higher)"],
        ["The Meritorious Service Medal", "4th Level Confederate Medal"],
        ["The Roll of Honor Medal", "6th Level Confederate Medal (can be achieved only on \"Major General\" difficulty)"],
        ["The Southern Cross of Honor", "7th Level Confederate Medal (can be achieved only on \"Major General\" difficulty)"],
        ["The Union Officer Medal", "3rd Level Union Medal"],
        ["The Union Protector Star", "2nd Level Union Medal"],
        ["The War Service Medal", "1st Level Confederate Medal"],
        ["The War Service Medal", "1st Level Union Medal"],
        ["Union hero in Battle of  Cold Harbor", "Win the historical battle of Cold Harbor as Union"],
        ["Union hero in Battle of 2nd Manassas", "Win the historical battle of 2nd Manassas as Union"],
        ["Union hero in Battle of Antietam", "Win the historical battle of Antietam as Union"],
        ["Union hero in Battle of Bull Run", "Win the historical battle of Bull Run as Union"],
        ["Union hero in Battle of Chancellorsville", "Win the historical battle of Chancellorsville as Union"],
        ["Union hero in Battle of Chickamauga", "Win the historical battle of Chickamauga as Union"],
        ["Union hero in Battle of Fredericksburg", "Win the historical battle of Fredericksburg as Union"],
        ["Union hero in Battle of Gaines' Mill", "Win the historical battle of Gaines' Mill as Union"],
        ["Union hero in Battle of Gettysburg", "Win the historical battle of Gettysburg as Union"],
        ["Union hero in Battle of Malvern Hill", "Win the historical battle of Malvern Hill as Union"],
        ["Union hero in Battle of Shiloh", "Win the historical battle of Shiloh as Union"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
