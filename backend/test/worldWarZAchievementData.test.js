import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/world-war-z.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 699130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("world-war-z");

test("getPlannerData('world-war-z') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for world-war-z");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every World War Z achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every World War Z achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 World War Z achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Builder", "Build 100 defences"],
        ["Burglar", "Open 15 rooms or containers with breaching charge"],
        ["Can't fool me", "Kill 20 lying zombies before they get up"],
        ["Chain reaction", "Hit 10 zombies with one tazer shot"],
        ["Dispenser", "Dispense 10 explosive ammo packs to teammates"],
        ["Effective communication", "Mark special zombies 50 times"],
        ["Escape", "Finish episode \"New York\" on any difficulty"],
        ["Explosive", "Kill 10 zombies with balloon explosions"],
        ["First Aid", "Rescue 30 incapacitated teammates"],
        ["Friend of machines", "Capture 15 turrets"],
        ["Genocide", "Kill 10,000 zombies"],
        ["Handyman", "Open and buy all perks in game"],
        ["High caution", "Finish any level without dealing friendly damage"],
        ["Hope", "Finish episode \"Jerusalem\" on any difficulty"],
        ["I am safe!", "Use masking grenade on 3 teammates with zombies near"],
        ["Imposing arsenal", "Open and buy final versions of all weapons"],
        ["Madman", "Finish 100 games in PvE"],
        ["Owner", "Capture the point and hold it until the end of match"],
        ["Salvation of the Motherland", "Finish episode \"Moscow\" on any difficulty"],
        ["Specialist", "Open and buy all perks in one specialization"],
        ["Sport kills", "Kill Lurker midair"],
        ["Strong immunity", "Finish any level without using health packs"],
        ["Teamwork", "Finish any level with full team"],
        ["The floor is lava", "Burn 10 zombies with one gasoline puddle"],
        ["The most effective way", "Finish any level using just pistol"],
        ["There are many guns but this one is mine", "Open and buy final version of any weapon"],
        ["This is just the beginning", "Finish all episodes on any difficulty"],
        ["Torero", "Kill Bull during charge"],
        ["Toxicomaniac", "Walk into toxic cloud 100 times"],
        ["Veteran", "Finish 25 PvP matches in any mode"],
        ["Walking bank", "Gather 200 resources during single match in scavenge raid mode"],
        ["Waste of time", "Defuse 10 mines"],
        ["Well, what did you achieve?", "Finish all episodes on insane or extreme difficulty"],
        ["What the doctor ordered", "Heal 30 teammates with health lower than 20% with health packs or stim pistol"],
        ["Winner in life", "Finish PvP match with highest score in any mode"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
