import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/homefront.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 55100 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("homefront");

test("getPlannerData('homefront') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for homefront");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Homefront achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Homefront achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Homefront achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3-Star Threat", "Become a 3-Star threat in a Battle Commander public match"],
        ["5-Star Threat", "Become a 5-Star threat in a Battle Commander public match"],
        ["Action Hero", "Bailed out of a helicopter, killing an enemy with the falling wreckage."],
        ["Archivist", "Find 30 of 61 News Pickups in the Single Player Campaign"],
        ["Chronicler", "Find the first of 61 news pickups"],
        ["David Rejected", "Complete the street section without Goliath taking any damage in Chapter 4: The Wall"],
        ["Destructive Duo", "Killed 5 enemies from the second seat of the Apache in one run."],
        ["Drone Expert", "Complete an expert challenge for any drone in Multiplayer"],
        ["Expert Of War", "Complete all challenges for weapons, drones, vehicles, and modes in Multiplayer"],
        ["Fatal and Tragic", "Jump off the Golden Gate Bridge in Chapter 7: Golden Gate"],
        ["Fire Sale", "Complete chapter 3 in the Single Player Campaign"],
        ["Fire Sale - Guerrilla", "Complete chapter 3 on the Hardest Difficulty in the Single Player Campaign"],
        ["Freedom", "Complete chapter 2 in the Single Player Campaign"],
        ["Freedom - Guerrilla", "Complete chapter 2 on the Hardest Difficulty in the Single Player Campaign"],
        ["Give Him the Stick", "Kill 25 enemies with melee attacks in Chapter 1: Why We Fight"],
        ["Golden Gate", "Complete chapter 7 in the Single Player Campaign"],
        ["Golden Gate - Guerrilla", "Complete chapter 7 on the Hardest Difficulty in the Single Player Campaign"],
        ["Good Use of Cover", "Destroy the first sentry without taking any damage in Chapter 2: Freedom"],
        ["Heartland", "Complete chapter 5 in the Single Player Campaign"],
        ["Heartland - Guerrilla", "Complete chapter 5 on the Hardest Difficulty in the Single Player Campaign"],
        ["Historian", "Find all 61 News Pickups in the Single Player Campaign"],
        ["Iron Man - Fire Sale", "Complete chapter 3 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - Freedom", "Complete chapter 2 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - Golden Gate", "Complete chapter 7 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - Heartland", "Complete chapter 5 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - Overwatch", "Complete chapter 6 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - The Wall", "Complete chapter 4 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Iron Man - Why We Fight", "Complete chapter 1 in the Single Player Campaign without dying or restarting a checkpoint"],
        ["Let 'em Burn", "Don't kill any of the enemies that are on fire in Chapter 3: Fire Sale"],
        ["Mercy", "Kill 5 enemies while they are on fire in Chapter 3: Fire Sale"],
        ["Over the Hill", "Reach experience level 50 in Multiplayer"],
        ["Overwatch", "Complete chapter 6 in the Single Player Campaign"],
        ["Overwatch - Guerrilla", "Complete chapter 6 on the Hardest Difficulty in the Single Player Campaign"],
        ["Pistol Whipped", "Kill 25 enemies with a pistol in Chapter 1: Why We Fight"],
        ["Safer Skies", "Destroy all of the SAM (surface-to-air missile) trucks in Chapter 6: Overwatch."],
        ["Soft Targets", "Destroy all vehicles using the UAV in Chapter 7: Golden Gate"],
        ["Speed Demon", "Hijack the tankers in less than 8 minutes in one life in Chapter 6: Overwatch"],
        ["Stairway to Heaven", "From the front door of the church, make it to the crow’s nest in 240 seconds in Chapter 5: Heartland"],
        ["Tea Party", "In multiplayer, crouch repeatedly ('teabag') over recently killed enemy players five times."],
        ["The Wall", "Complete chapter 4 in the Single Player Campaign"],
        ["The Wall - Guerrilla", "Complete chapter 4 on the Hardest Difficulty in the Single Player Campaign"],
        ["Vehicle Expert", "Complete an expert challenge for any vehicle in Multiplayer"],
        ["Weapon Expert", "Complete an expert challenge for any weapon in Multiplayer"],
        ["Welcome to Freedom", "Talk at least once to each inhabitant of Oasis in Chapter 2: Freedom"],
        ["Why We Fight", "Complete chapter 1 in the Single Player Campaign"],
        ["Why We Fight - Guerrilla", "Complete chapter 1 on the Hardest Difficulty in the Single Player Campaign"],
        ["Wilhelm's Nightmare", "Knock 10 enemies off of the scaffolding during the helicopter fly-in in Chapter 7: Golden Gate"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
