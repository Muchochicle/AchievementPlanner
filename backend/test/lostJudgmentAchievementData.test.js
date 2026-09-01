import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lost-judgment.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2058190 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lost-judgment");

test("getPlannerData('lost-judgment') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for lost-judgment");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Lost Judgment achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Lost Judgment achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 Lost Judgment achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Man Among Amons", "Defeat the Amon superboss - after completing the first 41 side cases, take the final case from the Yokohama 99 notice board."],
        ["All Are Punished", "Completed Chapter 7."],
        ["All's Fair in Love", "Get asked out by four girls."],
        ["An Ounce of Prevention", "Obtained all equipment."],
        ["Bad Fur Day", "Complete all of Squirrel Search (find all 56 squirrel graffiti across Yokohama and Kamurocho)."],
        ["Born to Ride", "Completed the investigation of the biker gang."],
        ["Cat & Mouse", "Complete Chapter 4 of The Kaito Files DLC."],
        ["Eavesdropping", "Find ten targets with the Noise Amp."],
        ["Elementary, My Dear", "Cleared all Side Cases (not including DLC)."],
        ["Escaping a Daydream", "Defeat all masked warriors (The Kaito Files DLC finale)."],
        ["Everybody Can Change", "Completed the investigation of the boxing gym."],
        ["High School Drama", "Complete the investigation of the Professor (School Stories side content)."],
        ["Hop, Step, Rabbits", "Completed the investigation of the dance club."],
        ["Hopeless Romantic", "Get asked out by three girls."],
        ["Irresistible Charm", "Get asked out by a girl (progress School Stories to the Girls' Bar investigation to unlock dating)."],
        ["Kick Flip", "Get the skateboard for free (story-related)."],
        ["Legendary Detective", "Beat the main story on the highest difficulty."],
        ["Lessons Taught", "Completed Chapter 9."],
        ["Like Father, Like Son", "Complete Chapter 2 of The Kaito Files DLC."],
        ["Master Detective", "Obtained all achievements."],
        ["Merciful", "Made one enemy surrender."],
        ["No Blind Spots in Any Direction", "Completed the final stage of Aircelios."],
        ["On the Case", "Cleared 10 Side Cases."],
        ["Out for Blood", "Complete Chapter 3 of The Kaito Files DLC."],
        ["Party Star", "Clear all of the stages in Dice & Cube."],
        ["Private Eye", "Cleared 30 Side Cases."],
        ["Receiving Signals", "Find ten targets with the Detector."],
        ["Revenge of the Nerds", "Completed the investigation of the robotics club."],
        ["Scales of Justice", "Completed Chapter 12."],
        ["Skate or Die", "Obtained all skateboards."],
        ["Skill Dabbler", "Obtained 30 skills."],
        ["Skill Master", "Obtained all skills."],
        ["Skill Pro", "Obtained 100 skills."],
        ["Such a Flirt", "Get asked out by two girls."],
        ["Suffer Like G Did", "Obtained 50 pickups in Hama of the Dead."],
        ["Sweet Jams", "Obtained all records."],
        ["The Aviator", "Won first place in every Grand Prix drone race."],
        ["The Cycle is Broken", "Thank you for playing to the end!"],
        ["The First Penguin", "Stopped the bullying at Seiryo High School."],
        ["The Game is Afoot", "Resolved Keiko's dilemma."],
        ["The Gamer Life", "Played every arcade game."],
        ["The Mole", "Completed Chapter 11."],
        ["To Survive", "Completed Chapter 8."],
        ["TownGo Casual", "Completed 30 stores in TownGo's Shop Missions."],
        ["TownGo Freshman", "Completed ten TownGo School Missions."],
        ["TownGo Master", "Achieved 100% completion of TownGo. Wow!"],
        ["TownGo Senior", "Completed all TownGo School Missions."],
        ["TownGo Tour Guide", "Completed all TownGo City Missions."],
        ["TownGo Tourist", "Completed 20 TownGo City Missions."],
        ["TownGo Whale", "Completed all of TownGo's Shop Missions."],
        ["Trending Video", "Completed Chapter 4."],
        ["Unexpected Guests", "Completed Chapter 6."],
        ["Very Observant", "Find ten targets in Observation Mode."],
        ["What Goes Around", "Complete Chapter 1 of The Kaito Files DLC."],
        ["Who's a Good Boy?", "Find ten targets with the dog."],
        ["Yagami Pro Skater", "Get first place on the final course of the skateboard race."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
