import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hunt-showdown-1896.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 594650 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("hunt-showdown-1896");

test("getPlannerData('hunt-showdown-1896') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for hunt-showdown-1896");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Hunt: Showdown 1896 achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Hunt: Showdown 1896 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Hunt: Showdown 1896 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["7 Days Later", "Complete seven Challenges."],
        ["All In A Day's Work", "Complete a Challenge."],
        ["Battering Ram", "Break 50 doors."],
        ["Bloodline Peak", "Unlock Bloodline rank 100."],
        ["Centennial Contractor", "Complete 100 Bounty Hunt contracts."],
        ["Clairvoyant", "Locate a Boss Target without investigating a single clue."],
        ["Convalescent Home", "Retire 25 Hunters."],
        ["Deadeye", "Kill 100 enemy Hunters with headshots."],
        ["Debut", "Kill your first enemy Hunter."],
        ["Do Not Disturb", "Hide in a toilet (step into any outhouse and close the door)."],
        ["Easier than Mining Sulphur", "Absorb at least 250 energy from the Wellspring in Soul Survivor."],
        ["Eeny, Melee, Miny, Moe", "Kill any Boss Target with a melee attack."],
        ["Exploration Tour", "Visit every location on any map in one mission."],
        ["Fifty Shades of Survival", "Get a Hunter to level 50."],
        ["First Come, First Served", "Be the first to activate the Wellspring in Soul Survivor."],
        ["Five-Ace Hand", "Have 5 level 50 Hunters at the same time."],
        ["In the Footsteps of Flaxman Low", "Investigate 250 clues."],
        ["Initiation Complete", "Complete Trainee Mode."],
        ["Jack of All Trades", "Have 15 traits on a Hunter at the same time."],
        ["Live to Fight Another Day", "Survive Soul Survivor."],
        ["Lone Wolf", "Kill 50 Boss Targets solo."],
        ["Louisiana Fried Chicken", "Burn 50 chicken coops."],
        ["Master Headhunter", "Recruit 100 Hunters."],
        ["On The Nose", "Kill 150 monsters with headshots."],
        ["Playing Tonight: Buddy Bolden", "Play the gramophone and the piano in one mission."],
        ["Regards from John L. Sullivan", "Kill 150 Grunts with the dusters."],
        ["Sealed and Secured", "Close 250 rifts in Soul Survivor."],
        ["Simmer Down, Hothead!", "Kill an Immolator without making it explode."],
        ["Supply Tour", "Visit every supply point on any map in one mission."],
        ["Throw Hammer or Run", "Kill an enemy Hunter with a sledgehammer throw."],
        ["To The Bitter End", "Be the last Hunter standing in Soul Survivor."],
        ["Trinity Of Pain", "Be on fire, poisoned and bleeding at the same time."],
        ["Vestal Contract", "Complete your first Bounty Hunt contract."],
        ["Weapons Expert", "Unlock any 50 pieces of gear."],
        ["Welcome to Tier 2", "Unlock Bloodline Tier 2."],
        ["Welcome to Tier 3", "Unlock Bloodline Tier 3."],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
