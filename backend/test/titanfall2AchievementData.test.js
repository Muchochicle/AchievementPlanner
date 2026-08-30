import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/titanfall-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1237970 (fetched through this app's own services/steamApi.js). 21 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("titanfall-2");

test("getPlannerData('titanfall-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for titanfall-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Titanfall 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Titanfall 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Titanfall 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...Becomes the Master", "Place in the top 3 on the Gauntlet scoreboard"],
        ["4 Bars", "Retrieve a working Uplink Module."],
        ["Aim Bot", "Destroy a Titan with your Smart Core in the Campaign"],
        ["Angel of Death", "Destroy a Titan with your Flight Core in the Campaign"],
        ["Annihilation", "Kill 25 infantry in 2 seconds as a Titan in the Campaign"],
        ["Apex Predator", "Perform a melee takedown while cloaked in the Campaign"],
        ["BT Prime", "Fully power up and restore BT-7274."],
        ["Calling CQ", "Power the Beacon."],
        ["Certified Pilot", "Complete the Campaign on Regular"],
        ["Close Shave", "Keep both Lieutenant Shaver and Lieutenant Freeborn alive through the campaign."],
        ["Collector", "Find 25 Collectibles"],
        ["Coup de Grace", "Destroy a Mercenary Titan with a melee execution in the Campaign"],
        ["Cowboy Up", "Rodeo an enemy Titan in the Campaign"],
        ["Defanged", "Defeat Viper."],
        ["Dust to Dust", "Defeat Ash at the end of the \"Into the Abyss\" mission."],
        ["Every Nook and Cranny", "Find All Collectibles"],
        ["Excessive Force", "Destroy a Titan with your Burst Core in the Campaign"],
        ["Face Melter", "Destroy a Titan with your Laser Core in the Campaign"],
        ["Fire Everything!", "Destroy a Titan with your Salvo Core in the Campaign"],
        ["Flame On!", "Destroy a Titan with your Flame Core in the Campaign"],
        ["Following the Footsteps", "View Pilot Anderson's first Holographic Log."],
        ["Free Association", "Join a multiplayer network"],
        ["Hat Trick", "Destroy 3 enemy Titans with 1 Core ability in the Campaign"],
        ["Hot Mess", "Defeat Kane during the \"Trial by Fire\" mission."],
        ["I have the Power!", "Destroy a Titan with your Sword Core in the Campaign"],
        ["I know Kung Fu", "Shoot and kill 3 enemies in a row while wallrunning as a Pilot in the Campaign"],
        ["I'm Not Locked in Here With You", "Defeat the Reapers inside Ash's simulation."],
        ["Incepted", "Climb through Sideways Town during the time-shifting \"Effect and Cause\" mission."],
        ["It Was Coming Right For Us", "Kill a Caged Prowler in the Wildlife Research Labs"],
        ["Jack of All Trades", "Collect all of BT's loadouts in the Campaign"],
        ["Legendary Pilot", "Complete the Campaign on Master"],
        ["Lock and Load", "Customize a multiplayer loadout"],
        ["No Salvage", "Defeat Slone."],
        ["Off the Beaten Path", "Find 10 Collectibles"],
        ["Pied Piper", "Activate a Stalker rack using the Arc Tool."],
        ["Power Slide", "Shoot and kill 3 enemies in a row while sliding as a Pilot in the Campaign"],
        ["Precious Cargo", "Locate the Ark."],
        ["Renowned Pilot", "Complete the Campaign on Hard"],
        ["Robot Army", "Acquire 6 or more friendly Stalkers at the same time in the Campaign"],
        ["Secret Plans", "Complete Special Operation 217."],
        ["See You at the Party", "Defeat Richter."],
        ["So It Begins...", "Win a multiplayer match"],
        ["Some Shortcut!", "Enter the World's Foundry."],
        ["The Ark", "Secure the Ark."],
        ["The Graduate", "Complete the campaign's opening Pilot training."],
        ["The Real Pilot's Gauntlet", "Complete the Rising World run during \"Effect and Cause\" without falling."],
        ["The Student...", "Beat Pilot Anderson's Gauntlet ghost recorder time"],
        ["Titanfall!", "Call in a new BT after losing your original Titan."],
        ["Unlicensed Nuclear Accelerator", "Find the Arc Tool."],
        ["You can be my Wingman anytime", "Destroy an enemy Titan as a Pilot in the Campaign"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
