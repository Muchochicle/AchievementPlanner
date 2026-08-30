import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wolfenstein-the-old-blood.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 350080 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wolfenstein-the-old-blood");

test("getPlannerData('wolfenstein-the-old-blood') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for wolfenstein-the-old-blood");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Wolfenstein: The Old Blood achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Wolfenstein: The Old Blood achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Wolfenstein: The Old Blood achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All that glitters", "Collect 8 gold items"],
        ["Ammunition upgrade", "Unlock the Ammunition upgrade perk"],
        ["Annette saved", "Choose to save Annette"],
        ["Armor upgrade I", "Unlock the Armor upgrade I perk"],
        ["Armor upgrade II", "Unlock the Armor upgrade II perk"],
        ["Bathhouse combat master", "Achieve gold medal for this challenge map"],
        ["Bombenschuss clip upgrade", "Unlock the Bombenschuss clip upgrade perk"],
        ["Cable car platform combat master", "Achieve gold medal for this challenge map"],
        ["Carry heavy machinegun", "Unlock the Carry heavy machinegun perk"],
        ["Caves combat master", "Achieve gold medal for this challenge map"],
        ["Die, Grösse, die!", "Complete all nightmare levels"],
        ["Docks nightmare", "Complete the nightmare in chapter 2"],
        ["Eagle Eye", "Unlock the Eagle Eye perk"],
        ["Escape! nightmare", "Complete the nightmare in chapter 4"],
        ["Freedom", "Escape Castle Wolfenstein"],
        ["German Alps nightmare", "Complete the prologue nightmare"],
        ["Glittering gold", "Collect 16 gold items"],
        ["Gold master", "Collect 64 gold items"],
        ["Graveyard combat master", "Achieve gold medal for this challenge map"],
        ["Grenade belt", "Unlock the Grenade belt perk"],
        ["Guten tag!", "Complete the nightmare boss level"],
        ["Health upgrade I", "Unlock the Health upgrade I perk"],
        ["Health upgrade II", "Unlock the Health upgrade II perk"],
        ["Health upgrade III", "Unlock the Health upgrade III perk"],
        ["Hero", "Complete game on any difficulty"],
        ["Kampfpistole ammo storage upgrade", "Unlock the Kampfpistole ammo storage upgrade perk"],
        ["Keep foyer combat master", "Achieve gold medal for this challenge map"],
        ["Kessler saved", "Choose to save Kessler"],
        ["Old town nightmare", "Complete the nightmare in chapter 7"],
        ["Paderborn bridge combat master", "Achieve gold medal for this challenge map"],
        ["Paperboy", "Collect 5 letters"],
        ["Postman", "Collect all letters"],
        ["Prison docks combat master", "Achieve gold medal for this challenge map"],
        ["Prison nightmare", "Complete the nightmare in chapter 1"],
        ["Quick turn", "Unlock the Quick turn perk"],
        ["Reload mash", "Unlock the Reload mash perk"],
        ["Research centre combat master", "Achieve gold medal for this challenge map"],
        ["Revenge", "Complete part one"],
        ["Ruins nightmare", "Complete the nightmare in chapter 6"],
        ["Schockhammer clip upgrade", "Unlock the Schockhammer clip upgrade perk"],
        ["Super hero", "Complete game on I AM DEATH INCARNATE! (or ÜBER)"],
        ["The ecstasy of gold", "Collect 32 gold items"],
        ["Tough Skin", "Unlock the Tough Skin perk"],
        ["Über hero", "Complete game on ÜBER"],
        ["Undercover", "Infiltrate Castle Wolfenstein"],
        ["Vampire", "Unlock the Vampire perk"],
        ["Wolfenstein Keep nightmare", "Complete the nightmare in chapter 3"],
        ["Workshop combat master", "Achieve gold medal for this challenge map"],
        ["Wulfburg nightmare", "Complete the nightmare in chapter 5"],
        ["Wulfburg square combat master", "Achieve gold medal for this challenge map"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
