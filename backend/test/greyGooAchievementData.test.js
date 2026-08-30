import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grey-goo.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 290790 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("grey-goo");

test("getPlannerData('grey-goo') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for grey-goo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Grey Goo achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Grey Goo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Grey Goo achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ain't Nobody Got Time for That", "Have at least 20 units mounted on wall pillars at the same time during a single ranked multiplayer match"],
        ["Back from the Dead", "Rebuild your HQ  (in any aspect of the game)"],
        ["Barca's Finest", "Win all missions and complete all bonus objectives in the Beta campaign on any difficulty"],
        ["Call for Help", "Complete the Goo campaign on any difficulty"],
        ["Civil Servant", "Complete the Mago's Pass mission without losing a single civilian"],
        ["Completionist", "Win all missions and complete all bonus objectives in the campaign on hard difficulty"],
        ["End of the Beginning", "Complete all missions of the campaign on any difficulty"],
        ["Epic Escalation", "Build the Epic unit for each faction"],
        ["Epic Loss", "Destroy each faction's Epic unit during a multiplayer or skirmish match"],
        ["Even Ground", "Win a one-on-one multiplayer match"],
        ["Evolutionary Pinnacle", "Win all missions and complete all bonus objectives in the Goo campaign on any difficulty"],
        ["Fort Awesome", "Have at least 3 of every Sentinel type in your base at once during a single ranked multiplayer match"],
        ["Full Time Job", "Win 100 multiplayer matches of any size or mode"],
        ["Galactic Explorer", "Win all missions and complete all bonus objectives in the Human campaign on any difficulty"],
        ["Game Ender", "Win a multiplayer match after destroying an enemy Epic unit"],
        ["GG", "Complete all missions of the campaign on Hard difficulty"],
        ["Glutton for Punishment", "Win a skirmsh match against 3 AI opponents on hard difficulty"],
        ["Hat Trick", "Win a skirmish match against the AI with each of the factions"],
        ["I Could Do This All Day", "Win 100 skirmish matches"],
        ["Kickin' It Old School", "Win a LAN match (against an actual person or persons)"],
        ["Macro Master", "As Human or Beta, complete a multiplayer or skirmish match without ever hitting the resource cap"],
        ["Master of Teleportation", "Use the Teleporter structure at least 3 times and teleport at least 5 structures during a single ranked multiplayer match"],
        ["Maxed Out!", "During a multiplayer match, build the maximum possible number of units"],
        ["No More Running", "Complete the Beta campaign on any difficulty"],
        ["One Player to Rule Them All", "Win a four player free-for-all match"],
        ["Point of First Contact", "Complete the Human campaign on any difficulty"],
        ["Practice Makes Perfect", "Win a skirmish match against an AI"],
        ["Seasoned Engineer", "Heal 1000 or more damage using the Repair Pad structure during a single ranked multiplayer match"],
        ["Self Sacrifice", "Feed a Mother Goo to a Proto-Purger (in any aspect of the game)"],
        ["Sharing is Caring", "Destroy 5 Extractors or Mother Goos with a Mother Goo in a single ranked multiplayer match"],
        ["Start of Something Epic", "Build an Epic unit"],
        ["Tag Team", "Win a 2v2 multiplayer match"],
        ["Uncompromised Conquest", "Win all missions and complete all bonus objectives in the campaign on any difficulty"],
        ["Weapon of Mass Destruction", "Win a skirmish or multiplayer match in Total Annihilation mode"],
        ["World War G", "Consume 100 enemy units or structures with formless Goo in a ranked multiplayer match"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
