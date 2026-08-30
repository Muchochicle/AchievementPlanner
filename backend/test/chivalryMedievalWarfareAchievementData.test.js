import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chivalry-medieval-warfare.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 219640 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 49 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("chivalry-medieval-warfare");

test("getPlannerData('chivalry-medieval-warfare') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for chivalry-medieval-warfare");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Chivalry: Medieval Warfare achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Chivalry: Medieval Warfare achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Chivalry: Medieval Warfare achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Agatha Knights supporter", "Team up with Agatha Knights for 20 hours. "],
        ["All  One handed Axes Unlocked", "Gather enough experience with one handed axe weapons"],
        ["All Bastard weapons Unlocked", "Gather enough experience with bastard weapons"],
        ["All Bows Unlocked", "Gather enough experience with bow weapons"],
        ["All Crossbows Unlocked", "Gather enough experience with crossbows"],
        ["All Daggers Unlocked", "Gather enough experience with dagger weapons"],
        ["All Javelins Unlocked", "Gather enough experience with javelin weapons"],
        ["All Light weapon Unlocked", "Gather enough experience with light weapons"],
        ["All One handed blunt weapons Unlocked", "Gather enough experience with one handed blunt weapons"],
        ["All One handed sharp Unlocked", "Gather enough experience with one handed sharp weapons"],
        ["All Polearms Unlocked", "Gather enough experience with polearm weapons"],
        ["All Spears Unlocked", "Gather enough experience with spearing weapons"],
        ["All Two handed Axe Unlocked", "Gather enough experience with two handed axes weapons"],
        ["All Two handed weapon Unlocked", "Gather enough experience with two handed sword weapons"],
        ["Archer Veterans Helmet", "Become a Veteran Archer"],
        ["Bastard weapon Unlocked", "Gather enough experience with bastard weapons"],
        ["Bow Unlocked", "Gather enough experience with bow weapons"],
        ["Crossbow Unlocked", "Gather enough experience with crossbows"],
        ["Cupid", "Shoot 40 arrows into the heart"],
        ["Dagger Unlocked", "Gather enough experience with dagger weapons"],
        ["Fire Nemesis", "Put out the fire beacon in Hillside"],
        ["Fire Starter", "Have 20 kills with Oil pot"],
        ["Fists of Fury", "Have 100 kills with the fists"],
        ["Five Star Archer", "Get 10 Headshots with a ranged weapon in one game. "],
        ["Heads Together", "Decapitate 2 opponents with 1 swing"],
        ["I am a wall", "Successfully block 1000 times"],
        ["Javelin Unlocked", "Gather enough experience with javelin weapons"],
        ["King of Kings", "Survive 10 minutes as King in Stoneshill"],
        ["Knight Veterans Helmet", "Become a Veteran Knight"],
        ["Let it rain", "Fire 10,000 arrows with the Shortbow"],
        ["Light weapon Unlocked", "Gather enough experience with light weapons"],
        ["Man at Arms Veterans Helmet", "Become a Veteran Man at Arms"],
        ["Mason Order supporter", "Team up with the Mason Order for 20 hours."],
        ["One handed Axe Unlocked", "Gather enough experience with one handed axe weapons"],
        ["One handed blunt weapon Unlocked", "Gather enough experience with one handed blunt weapons"],
        ["One handed sharp Unlocked", "Gather enough experience with one handed sharp weapons"],
        ["Polearm Unlocked", "Gather enough experience with polearm weapons"],
        ["Reach level 10", "Gather enough points to reach level 10"],
        ["Reach level 20", "Gather enough points to reach level 20"],
        ["Reach level 5", "Gather enough points to reach level 5"],
        ["Rotisserie Chef", "Decapitate an opponent that is on fire."],
        ["Sands of Time", "Play Chivalry for more than 80 hours"],
        ["Sightseeing", "Play 60 minutes each on Stoneshill, Hillside, Dark Forest and Battlegrounds"],
        ["Spear Unlocked", "Gather enough experience with spearing weapons"],
        ["Swordsmith", "Unlock all swords"],
        ["Two handed Axe Unlocked", "Gather enough experience with two handed axes weapons"],
        ["Two handed weapon Unlocked", "Gather enough experience with two handed weapons"],
        ["Vanguard Veterans Helmet", "Become a Veteran Vanguard"],
        ["Vultures Chef", "Kill 100 Men at Arms."],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
