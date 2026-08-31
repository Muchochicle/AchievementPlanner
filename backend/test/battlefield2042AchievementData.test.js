import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-2042.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1517290 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("battlefield-2042");

test("getPlannerData('battlefield-2042') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-2042");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Battlefield 2042 achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Battlefield 2042 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Battlefield 2042 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A bird?  A plane?", "Wingsuit fly from the Rocket Hangar to the Launch Pad on Orbital"],
        ["Adapt and Overcome", "Reach Player Level 5"],
        ["Aerial Destroyer", "Destroy an air vehicle with a rocket launcher while parachuting"],
        ["B gun's dry", "Inflict 2500 damage in one round while defending objectives using Boris' SG-36 Sentry Gun"],
        ["Burnout", "Travel 15km using ground vehicles"],
        ["Clean Exit", "Successfully extract in Hazard Zone without anyone in the squad having died"],
        ["Command and Conquest ", "Capture 100 objectives in Conquest"],
        ["CQC Specialist", "Perform 20 melee kills in one round"],
        ["Dead in their tracks!", "Get a quad-kill while defending an objective"],
        ["Deadshot", "Perform 20 headshot kills in one round"],
        ["Doctor Falck in the house", "Heal 3000 points of damage within a single round with Falck's S21 Syrette Pistol"],
        ["Doze this", "Perform 7 kills in one life with Dozer's SOB-8 Ballistic Shield"],
        ["Escape Artist", "Successfully extract 25 times in Hazard Zone"],
        ["Foot Soldier", "Travel 25 km without using vehicles"],
        ["Going Places", "Travel for 1000m in one round with Mackay's Grappling Hook"],
        ["Good Company", "Earn first place as a squad"],
        ["Gun Master", "Earn a T1 Mastery Badge with any Weapon"],
        ["Happy birthday", "Call in 15 Loadout Crates with Angel"],
        ["I'm Five by Five, B", "Earn a Ribbon III of each type"],
        ["Jack of all Trades", "Earn a T1 Mastery Badge with any Gadget or Throwable"],
        ["Luck of the Irish", "Reach Player Level 25"],
        ["Making Dunn Proud", "Reach Player Level 15"],
        ["No-one gets left behind", "Revive 100 teammates"],
        ["One Careful Owner", "Perform a roadkill with an air vehicle"],
        ["Pack Rat", "Successfully extract with 50 Data Drives in Hazard Zone"],
        ["Showoff", "Outstanding performance achieved"],
        ["Squad Wiper", "Kill 500 enemy soldiers while not in a Vehicle"],
        ["Thank you, Santa", "Resupply 50 teammates"],
        ["The Winner Takes It All", "Win 42 rounds across all game modes"],
        ["Tool Time", "Repair 1000 damage on Vehicles in one round"],
        ["Universal Soldier", "Earn a T1 Mastery Badge with any Specialist"],
        ["War machine", "Killed 50 enemies while in Vehicles"],
        ["Wheeled Warrior ", "Earn a T1 Mastery Badge with any Vehicle"],
        ["Wrecking Crew", "Destroy 50 Vehicles"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
