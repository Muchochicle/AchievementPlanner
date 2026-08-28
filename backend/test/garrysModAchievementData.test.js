import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/garrys-mod.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 4000 (fetched through this app's own services/steamApi.js) - all 29
// ship a real, official Steam description. Garry's Mod has no
// Steam-hidden achievements. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog.
const garrysMod = getPlannerData("garrys-mod");

test("getPlannerData('garrys-mod') returns real planner data with 29 curated achievements", () => {

    assert.ok(garrysMod, "expected real planner data for garrys-mod");
    assert.ok(Array.isArray(garrysMod.achievements));
    assert.strictEqual(garrysMod.achievements.length, 29);

});

test("every Garry's Mod achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = garrysMod.achievements.map(a => a.id);
    const apinames = garrysMod.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Garry's Mod achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of garrysMod.achievements) {

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

test("every one of the 29 official Garry's Mod achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Play Singleplayer", "Play singleplayer at least once"],
        ["Play Multiplayer", "Play multiplayer at least once"],
        ["Startup Millenium", "Start Garry's Mod 1000 times"],
        ["Secret Phrase", "Say the secret phrase"],
        ["Addict", "You have wasted a year of your life playing GMod!"],
        ["Map Loader", "Play 20 different maps"],
        ["Play Around", "Play a gamemode that isn't sandbox"],
        ["War Zone", "Killed 1000 Baddies"],
        ["Friendly", "Play with 10 friends"],
        ["Yes, I am the real garry!", "Play on the same server as garry"],
        ["Marathon", "Play on the same server & map for 8 hours"],
        ["Half Marathon", "Play on the same server & map for 4 hours"],
        ["One Day", "24 hours of your life wasted"],
        ["One Week", "One whole week of your life wasted"],
        ["One Month", "One whole month of your life wasted"],
        ["Innocent Bystander", "Kill 1000 innocent animals"],
        ["Ball Eater", "Eat 200 balls"],
        ["Creator", "Spawn 5000 props"],
        ["Popper", "Burst 1000 balloons"],
        ["Destroyer", "Remove 5000 things"],
        ["Menu User", "Open the spawnmenu 100,000 times"],
        ["Bad Coder", "Experience 500 Lua programming errors"],
        ["Procreator", "Spawn 1000 NPCs"],
        ["Dollhouse", "Spawn 2000 ragdolls"],
        ["Bad Friend", "Kill 1000 friendly NPCs"],
        ["10 Thumbs", "Your Workshop uploads got 10 thumbs"],
        ["100 Thumbs", "Your workshop uploads got 100 thumbs"],
        ["1000 Thumbs", "Your Workshop uploads got 1000 thumbs"],
        ["Mega Upload", "Get 1000 thumbs on a single upload (then go to jail)"]
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = garrysMod.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
