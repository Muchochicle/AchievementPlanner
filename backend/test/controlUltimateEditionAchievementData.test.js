import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/control-ultimate-edition.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 870780 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("control-ultimate-edition");

test("getPlannerData('control-ultimate-edition') returns real planner data with 67 curated achievements", () => {

    assert.ok(game, "expected real planner data for control-ultimate-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 67);

});

test("every Control achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Control achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 Control achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["< Make/Unmake >", "Use Shape and Fracture a combined total of 100 times"],
        ["A Strong Foundation", "Complete all Missions in the Foundation"],
        ["Aggressive Growth", "Defeat Mold-1 in the 'Old Growth' side mission."],
        ["Altered Manifestations May Occur", "Defeat esseJ in the 'Self-Reflection' side mission (after finding the Mirror Supplement collectible)."],
        ["Astral Construction", "Construct a Weapon Form or Mod"],
        ["Astral Phenomena", "Defeat the Former in the 'Fridge Duty' side mission."],
        ["Astral Plumbing", "(The Foundation) Discover the Astral Plane restroom in the Collapsed Department."],
        ["Astral Tactician", "Complete 25 Board Countermeasures"],
        ["Bureau Archivist", "Collect 120 Collectibles"],
        ["Career Development", "Unlock all 3 Personal Mod slots"],
        ["Chief Investigator", "Find 80% of the hidden locations in the Investigations Sector"],
        ["Choose to be Chosen", "Obtain the Service Weapon"],
        ["Cognitive Intruder", "Compel 10 enemies with the Seize Ability"],
        ["Crisis Management", "Complete 5 Bureau Alerts"],
        ["Directorial Override", "Complete Mission 3."],
        ["Discerning the Pattern", "Cleanse 25 Control Points"],
        ["Elevated Mind", "Kill 25 Airborne Rangers"],
        ["Expert Parautilitarian", "Spend 50 Ability Points"],
        ["Familiar Methodologies", "(AWE) Complete the first AWE mission, 'A Dark Place' (fight off Hartman)."],
        ["FBC Crisis Solution Task Force", "Complete 15 Side Missions"],
        ["Finnish Tango", "Complete Mission 8."],
        ["First On the Scene", "Complete 1 Bureau Alert"],
        ["Head of Communications", "Defeat Mr. Tommasi in the 'Mr. Tommasi' side mission."],
        ["Hostile Work Environment", "Kill 50 Hiss Sharpened"],
        ["In-depth Investigations", "Find 80% of the Collectibles in the Investigations Sector"],
        ["Insular Telekinesis", "Obtain the Shield Ability"],
        ["Inter-Departmental Cooperation", "Complete 10 Side Missions"],
        ["Interdimensional Defender", "Killed 1000 Hiss"],
        ["Living Archetypes", "Defeat the Anchor in 'The Enemy Within' side mission."],
        ["Master Parautilitarian", "Spend 100 Ability Points"],
        ["Multiple Applications", "Use Multi-Launch to hit 3 targets"],
        ["My Brother's Keeper", "Complete Mission 6."],
        ["Niche Position", "Find all hidden locations in the Foundation"],
        ["Non-Standard Issue", "Upgrade any Weapon Form to Level 3"],
        ["Old Boys' Club", "Complete Mission 4."],
        ["One of Us", "(The Foundation) Find all eight Maneki-Neko lucky-cat figurines in the Foundation."],
        ["Paranatural Collection", "Collect more than 100,000 Source"],
        ["Paranatural Powerhouse", "Obtain the Launch Ability"],
        ["Parautilitarian", "Unlock 1 Ability Upgrade"],
        ["Polaris", "Complete Mission 9."],
        ["Proper Handling Procedures", "Use Launch to throw a grenade or rocket"],
        ["Psychic Occupation", "Obtain the Seize Ability"],
        ["Record Keeper", "Collect 80 Collectibles"],
        ["Rising Thought", "Obtain the Levitate Ability"],
        ["Ritual Intuition", "Cleanse 10 Control Points"],
        ["Ritualistic Thinking", "Cleanse 5 Control Points"],
        ["Rush Job", "Kill 100 enemies with Shield Rush"],
        ["Shifting Positions", "Obtain the Evade Ability"],
        ["Star Performance", "(The Foundation) Complete the side mission \"Jesse Faden starring in 'Swift Platform'\"."],
        ["Strange Collection", "Collect 40 Collectibles"],
        ["Subterranean Research", "Collect all Collectibles in the Foundation"],
        ["Supportive Staff", "Have a Deployed Ranger kill 5 enemies"],
        ["Surge of Power", "(AWE) Upgrade the Surge Weapon Form to the maximum level."],
        ["Surge Protector", "Kill 50 enemies with Surge"],
        ["Take Control", "Complete Mission 10 (finish the main story)."],
        ["The Face of the Enemy", "Complete Mission 7."],
        ["The Importance of Synergy", "Complete 5 Side Missions"],
        ["The Third Thing", "(AWE) Defeat Hartman in the final AWE mission, 'It's Happening Again'."],
        ["Threshold", "Complete Mission 5."],
        ["Unknown Caller ", "Complete Mission 2."],
        ["Unstable Matter", "Kill 50 enemies with the Launch Ability"],
        ["Vending Spree", "(AWE) Destroy 80% of the Altered Vending Machines in the Investigations Sector."],
        ["Volatile Debris", "Kill 10 enemies with the Shield Burst Ability"],
        ["War Games", "Complete 5 Board Countermeasures"],
        ["Welcome to the Oldest House", "Complete Mission 1."],
        ["Work Smarter, Not Harder", "(AWE) Attach a Surge grenade to an object and Launch it at an enemy."],
        ["Workplace Recreation", "Play a single game in Arcade Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
