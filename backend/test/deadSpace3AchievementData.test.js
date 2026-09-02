import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-space-3.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238060 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dead-space-3");

test("getPlannerData('dead-space-3') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-space-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Dead Space 3 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Dead Space 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Dead Space 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aliens", "Collect all Alien Artifacts."],
        ["And Then We Doubled It!", "Dismember 1000 limbs from living enemies."],
        ["Architect", "Share a Blueprint with your Co-Op partner."],
        ["Aren't You Thankful?", "Complete the game on Hardcore Mode."],
        ["Axes High", "Kill 30 enemies using Fodder axes."],
        ["Bad Moon Rising", "Complete Dead Space™ 3 Awakened."],
        ["Blast Corps", "Kill 30 enemies with explosion damage."],
        ["Circuit's Edge", "Add a Circuit to a Weapon."],
        ["Close Encounter", "Kill 10 alien Necromorphs."],
        ["Critical Mass", "Recover the shuttle."],
        ["Drill Sergeant", "Complete the Drill Room without taking any damage."],
        ["Dropping Acid", "Dissolve 50 enemies with acid."],
        ["Electric Lawnmower", "Kill 30 enemies using an electrified Ripper blade."],
        ["Empty Chamber", "Kill 30 enemies using melee strikes or a melee Weapon Part."],
        ["EMT", "Craft a Large Med Pack."],
        ["Epic Tier 4 Engineer", "Complete the game in Classic Mode."],
        ["From the Jaws", "Save your Co-Op partner from an execution by killing the attacker."],
        ["Full House", "Craft a Weapon with 2 Tools, Tips, and Attachments with all Circuit slots filled."],
        ["Get On My Level", "Complete the game on any difficulty setting."],
        ["Get to the Chopper!", "Escape from Tau Volantis to the Terra Nova."],
        ["Ghosts of the Past", "Face all of Carver’s demons by completing all Co-Op only optional missions."],
        ["Go for the Limbs!", "Dismember 500 limbs from living enemies."],
        ["Gun Collector", "Collect all Weapon Parts."],
        ["Heaven Can Wait", "Stasis your Co-Op partner when he is downed to slow his bleed out timer."],
        ["Heretic", "Kill the Unitologist Cult Leader."],
        ["Hungry", "Reach the pump room of the Waystation without alerting any Feeders."],
        ["Hydra", "Kill the Snowbeast."],
        ["Infernal Machine", "Reach the Alien Machine."],
        ["Intestinal Fortitude", "Defeat the Hive Mind."],
        ["Just the Tip", "Craft a weapon using a MK-II Weapon Tip."],
        ["Master Plan", "Create a Blueprint that needs at least 2000 resources worth of parts and Circuits to build."],
        ["Medic!", "Revive your Co-Op partner 10 times."],
        ["Metal Detector", "Successfully deploy Scavenger Bots to 15 Resource Areas."],
        ["My Buddy", "Retrieve Resources from a Scavenger Bot at a Bench."],
        ["Overpowered Healing", "Use quick heal to heal yourself 20 times."],
        ["Payback", "Kill a Soldier by TK'ing a grenade or rocket back at them."],
        ["Pure Lunacy", "Complete Dead Space™ 3 Awakened in Pure Survival Mode."],
        ["RIG Master", "Fully upgrade your RIG."],
        ["Share and Share Alike", "Use the RIG to give an item to your Co-Op partner."],
        ["Shoot for the Moon", "Defeat the Moon - complete the game."],
        ["Shootbang", "Kill 30 Soldiers with head shots."],
        ["Slow Mo", "Kill 50 enemies while they are in stasis."],
        ["Snow Crash", "Reach Tau Volantis."],
        ["Space Ace", "Shoot at least 70 targets during the ride to Tau Volantis."],
        ["Space Odyssey", "Survive your first spacewalk."],
        ["Stranger in a Strange Land", "Complete the Prologue."],
        ["Strapped", "Craft a Weapon."],
        ["Supercharger", "Finish charging the reactor in under 90 seconds."],
        ["Survivalist", "Complete the game in Pure Survival Mode."],
        ["The Armorer", "Collect all Circuits."],
        ["The Explorer", "Complete all optional missions."],
        ["The Librarian", "Collect all Logs."],
        ["The Professor", "Collect all Artifacts."],
        ["There's Always Peng!", "Find Peng."],
        ["Together as One", "Reassemble Rosetta."],
        ["True Believer", "Allow the Unitologist Cult Leader to survive."],
        ["Under a Buck", "Shoot the deer-head trophy in the Admiral's Quarters."],
        ["Weedkiller", "Kill 5 Cysts in the Biology Building with a single poison-gas cloud."],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
