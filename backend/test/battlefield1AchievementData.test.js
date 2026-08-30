import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-1.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238840 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("battlefield-1");

test("getPlannerData('battlefield-1') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-1");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Battlefield 1 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Battlefield 1 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Battlefield 1 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced Studies", "Perform 1 kill with the Livens Projector"],
        ["All men dream", "Unlock all Codex Entries in Nothing is Written"],
        ["Assault Enlistment", "Reach Assault Rank 2 in multiplayer"],
        ["Avanti Savoia!", "Complete Avanti Savoia!"],
        ["Become Operational", "Complete the Gallipoli Operation"],
        ["Catching up on some reading", "Collect one Field Manual in the campaign"],
        ["Charged into Battle", "Kill 25 enemies with the Lance as Cavalry"],
        ["Conquering the mountains", "Unlock all Codex Entries in Avanti Savoia!"],
        ["Corporal", "Reach Rank 10 in multiplayer"],
        ["Counter-sniper", "Using a bolt action rifle, kill an enemy Scout in multiplayer"],
        ["Decorated", "Reach Rank 1 with all 4 Infantry classes in multiplayer"],
        ["Drei Vier Grenadier", "Kill 4 enemies with the Trench Raider Elite Class"],
        ["Endured the Winter", "Play a round on all \"In the Name of the Tsar\" maps"],
        ["Enough for a library", "Collect all Field Manuals in the campaign"],
        ["Filled the Stockpile", "Perform a kill with all \"In the Name of the Tsar\" weapon variants"],
        ["Firefighter", "Perform a melee kill on a Flametrooper Elite"],
        ["Flyswatter", "Destroy 5 airplanes while in the Behemoth Airship L30"],
        ["French War Hero", "Spend 30 minutes in-game as French Republic Medic"],
        ["Friends in High Places", "Complete Friends in High Places"],
        ["Maître d'Armes", "Perform one kill with each of the 5 primary Weapon Assignments weapons"],
        ["Master of adaptation", "Complete all challenges in the campaign"],
        ["Medic Enlistment", "Reach Medic Rank 2 in multiplayer"],
        ["Mightier than the shovel", "Find the hidden Cavalry Sword and take down an enemy on the French countryside in the campaign"],
        ["Modern Technology", "Perform 1 kill with the Broken Bottle"],
        ["Naval Weapons Collection", "Perform a kill with all \"Turning Tides\" weapon variants"],
        ["Nothing is Written", "Complete Nothing is Written"],
        ["Operations", "Win 1 round of Operations in multiplayer"],
        ["Play the Objective", "Complete 25 Squad Orders in multiplayer"],
        ["Putting in the effort", "Complete 10 challenges in the campaign"],
        ["Rough Seas", "Perform a roadkill in a Sea Vehicle"],
        ["Saint Chamond Operator", "Kill 25 enemies with the St Chamond Heavy Tank"],
        ["Scout Enlistment", "Reach Scout Rank 2 in multiplayer"],
        ["Secured the Resources", "Win 5 games of Supply Drop"],
        ["Serve With Honor", "Complete 1 Service Assignment"],
        ["Shock Wave", "Kill 5 enemies by using dynamite in the campaign"],
        ["Sound of thunder", "Unlock all Codex Entries in Through Mud and Blood"],
        ["Support Enlistment", "Reach Support Rank 2 in multiplayer"],
        ["Taking down giants", "Unlock all Codex Entries in Friends in High Places"],
        ["The Great War", "Complete the campaign on Normal difficulty"],
        ["The hills of Gallipoli", "Unlock all Codex Entries in The Runner"],
        ["The Power in These Waters", "Kill 15 enemies with the L-Class Destroyer"],
        ["The Revolution is Coming", "Play all \"In the Name of the Tsar\" operations"],
        ["The Runner", "Complete The Runner"],
        ["The War to End All Wars", "Complete the campaign on Hard difficulty"],
        ["Through Mud and Blood", "Complete Through Mud and Blood"],
        ["Triple Boluk-Bashi", "Kill all 3 Ottoman officers in Young Men's Work with melee kills in the campaign"],
        ["Up close and personal", "Perform a melee kill on 10 enemies anywhere in the campaign"],
        ["Up to the challenge", "Complete one challenge in the campaign"],
        ["Warbonds", "Earn 450 Warbonds in multiplayer"],
        ["Weapons of the Apocalypse", "Perform a kill with all \"Apocalypse\" weapon variants"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
