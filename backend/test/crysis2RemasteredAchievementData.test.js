import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crysis-2-remastered.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2096600 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crysis-2-remastered");

test("getPlannerData('crysis-2-remastered') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for crysis-2-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Crysis 2 Remastered achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Crysis 2 Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Crysis 2 Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Band of Brothers", "Keep all Marines alive during the rescue in the mission 'Semper Fi or Die'."],
        ["Blast Radius", "Kill at least 3 enemies with a single grenade"],
        ["Can it run Crysis?", "Complete In at the Deep End"],
        ["City That Never Sleeps", "Complete 6 levels on Veteran difficulty"],
        ["Close Encounters", "Stealth kill 25 enemies"],
        ["Crossroads of the World", "Complete the evacuation at Times Square"],
        ["Dark Night of the Soul", "Defend Central Station"],
        ["Death Grip", "Kill 10 enemies with grab and throw"],
        ["Death Slide", "Kill 5 enemies while sliding"],
        ["Evolution", "Complete 12 levels on Veteran difficulty"],
        ["False Prophet", "Find Nathan Gould"],
        ["Fastball", "Kill 10 enemies by throwing an object at them"],
        ["Fire Walker", "Assist the evacuation at Bryant Park"],
        ["Food for thought", "Kill a CELL operator with the giant donut in the mission 'Second Chance' (drop it on an enemy next to a car)."],
        ["Foreign Contaminant", "Escape the Battery Park evacuation center"],
        ["Headhunter", "Kill 4 enemies in a row with headshots"],
        ["Heart of Darkness", "Complete 6 levels on Post-Human Warrior difficulty"],
        ["Hole in One", "Throw an alien down the sinkhole in the mission 'Dark Heart'."],
        ["Home Stretch", "Reach Central Park"],
        ["Hung Out to Dry", "Reach the Hargreave-Rasch building"],
        ["Internal Affairs", "Infiltrate the CELL facility at Wall Street"],
        ["Into the Abyss", "Infiltrate the alien hive"],
        ["Literary Agent", "Scan all of Richard Morgan's books in the New York Public Library."],
        ["Medal of Honor", "Complete 12 levels on Post-Human Warrior difficulty"],
        ["Men of Destiny", "Complete the single player campaign on Veteran difficulty"],
        ["More than Human", "Assimilate alien tissue at the crash site"],
        ["Once a Marine, Always a Marine", "Assist the Marines in Madison Square"],
        ["Popcorn", "Kill 20 enemies with the Microwave cannon"],
        ["Post-Human Warrior", "Complete the single player campaign on Post-Human Warrior"],
        ["Speeding Ticket", "Trigger 10 different speed cameras by sprinting past them across the campaign."],
        ["Start Spreading the News", "Finish the single player campaign on any difficulty"],
        ["Stealth Assassin", "Re-route the power in the mission 'Eye of the Storm' without being detected."],
        ["The Tourist", "Find all 18 New York Souvenirs."],
        ["Theseus at Last", "Locate Jacob Hargreave"],
        ["Two Heads Are Better Than One", "Kill two enemies with a single bullet."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
