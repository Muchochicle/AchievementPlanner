import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/alien-isolation.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 214490 (fetched through this app's own services/steamApi.js). 7 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("alien-isolation");

test("getPlannerData('alien-isolation') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for alien-isolation");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Alien: Isolation achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Alien: Isolation achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Alien: Isolation achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 Times Too Many", "Be killed by the Alien 100 times over the course of your playthrough(s)."],
        ["A Hunt Begins", "Complete the third mission"],
        ["A Perfect Organism", "Encounter the Alien in Sevastopol for the first time"],
        ["A Record of Disaster", "Collect an archive log"],
        ["A Synthetic Solution", "Complete the twelfth mission"],
        ["A True Engineer", "Construct one of each craftable item"],
        ["An Outpost of Progress", "Complete the seventh mission"],
        ["Archivist", "Collect 10 Nostromo logs in the main campaign"],
        ["Awake", "Complete the first mission"],
        ["Back Off", "Cause the Alien to retreat by using the flamethrower"],
        ["Bait", "Complete the tenth mission"],
        ["Build to Survive", "Construct an item"],
        ["Caught in the Trap", "Complete the sixth mission"],
        ["Consultation", "Complete the thirteenth mission"],
        ["End of the Hunt", "Complete the eighteenth mission"],
        ["Every Bullet Counts", "Use the revolver"],
        ["Fault Detected", "Kill an Android"],
        ["Free the Torrens", "Complete the seventeenth mission"],
        ["Hazard Containment", "Complete the eleventh mission"],
        ["Hide. Run. Survive.", "Complete Mission 5, 'The Quarantine' - your first sustained encounter with the Alien - without being killed by it."],
        ["How Do You Feel?", "Complete the fifth mission"],
        ["I Admire its Purity", "Detect 30 targets with the motion tracker"],
        ["Just out of Reach", "Contact your team and escape Comms without being attacked by an android"],
        ["Light 'em Up", "Use the flamethrower"],
        ["Mercy or Prudence?", "Complete the game without killing any humans"],
        ["Mind Your Step", "Navigate Reactor Maintenance without dying"],
        ["My Turn Now", "Kill an android using only the maintenance jack"],
        ["Not a Scratch", "Escape from android combat without taking damage"],
        ["Not the First", "Turn off the emergency beacon."],
        ["One Shot", "Complete the entire game from start to finish without dying once."],
        ["Power Games", "Access 10 different rewire points"],
        ["Retreat From Fire", "Cause the Alien to retreat using a molotov"],
        ["Ripley, Signing Off", "Complete the game on any difficulty setting"],
        ["Seegson Security Bypass", "Perform 10 successful hacks"],
        ["Seegson Systems Expert", "Complete 10 minigames successfully"],
        ["Self Defense", "Kill 10 humans"],
        ["She's in the Vents...", "Use the vent system 20 times"],
        ["Shock to the System", "Use the stun baton"],
        ["Stunned", "Knock down a human or stun an android with a non-lethal attack"],
        ["Survivor", "Complete the game on the hardest difficulty setting"],
        ["The Message", "Complete Mission 14, 'The Message'."],
        ["The Missing", "Collect an ID tag"],
        ["The Taken", "Collect all ID tags"],
        ["This Should Work", "Use the bolt gun"],
        ["Throwing the Switch", "Complete Mission 13, 'The Descent'."],
        ["Transmission", "Complete Mission 15, 'Transmission'."],
        ["Use With Caution…", "Use the shotgun"],
        ["Voices of Sevastopol", "Collect 100 archive logs"],
        ["Welcome to Sevastopol", "Complete the second mission"],
        ["You Shouldn't Be There.", "Complete the fourth mission"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
