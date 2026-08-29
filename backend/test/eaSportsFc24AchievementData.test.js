import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ea-sports-fc-24.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2195250 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 40 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ea-sports-fc-24");

test("getPlannerData('ea-sports-fc-24') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for ea-sports-fc-24");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every EA SPORTS FC 24 achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every EA SPORTS FC 24 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 officially-described EA SPORTS FC 24 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["An ace up your sleeve", "While spectating a match in Tactical View in Manager Career, jump in and score a goal"],
        ["Best of Five", "Play 5 H2H matches with a friend in Kick Off"],
        ["Bring it on", "Play/Win a match with the competitive settings turned on during any offline mode"],
        ["Bullseye", "Score a goal using Precision Shooting"],
        ["Campeones", "Finish as the Champion of your Clubs Playoff table"],
        ["Dazzling Personality", "Develop a dominant personality trait of over 75%"],
        ["Dead-ball specialist", "Score a goal from a Free Kick"],
        ["Defensive Masterclass", "Keep 10 clean sheets in UT Squad Battles"],
        ["Do Your Homework", "Check a pre-match report, complete a training session and attend a press conference before a match"],
        ["End of the Line", "Reach the last level of a Seasonal Objectives Progress during any Season of UT 24"],
        ["European Legend", "Win the UEFA Champions League Final"],
        ["Fashion Icon", "Equip a face guard and a tattoo from the avatar customization menu in Player Career Mode"],
        ["First of Many", "Win your first Clubs League Match"],
        ["Football is Everything", "Play a Women's International football match"],
        ["Full Wardrobe", "Unlock 50 different vanity items"],
        ["Golden Generation", "Hire an Expert level coach for each department in your club"],
        ["Graduation Day", "Complete an Evolution and claim the upgrades in UT"],
        ["Intuition and Execution", "Win a penalty shoot-out without missing"],
        ["Level Up!", "Complete an Evolution level in UT and claim the upgrades"],
        ["Make the Grade", "Receive an A grade in a Clubs Skill Game"],
        ["On the way up", "Reach Level 7 in a Season in Volta Football or Clubs"],
        ["One Moment Please!", "Complete 1 Moment in Football Ultimate Team"],
        ["PlayStyles+", "Score a goal with an active PlayStyle+"],
        ["Power Shot", "Score a goal using the power shot mechanic"],
        ["Precious Advice", "Follow your agent's team recommendation twice during the same Player Career"],
        ["Record Breaker", "Reach 200 club appearances with a player in Football Ultimate Team"],
        ["Seasoned Veteran", "Reach Milestone 3 in a UT Division Rivals Season"],
        ["Shop till you drop", "Purchase an item in the Volta Shop using Volta Coins"],
        ["Squad Building Completionist", "Complete 10 Squad Building Challenges in Football Ultimate Team"],
        ["Surgical Aim", "Complete 25 Precision Passes"],
        ["Teamwork works", "Win a Volta Squads match with 3 friends"],
        ["The Alchemist", "Build a squad with 33 Chemistry Points in Football Ultimate Team. Excludes Concept Players and SBCs"],
        ["Top of the Pyramid", "Reach Elite Division with your Club in a Clubs League Season"],
        ["Trust me, I'm a Manager", "Create your own custom tactic in Football Ultimate Team"],
        ["Volta's best", "Reach 90 OVR with your Avatar in Volta Football"],
        ["Walk the Walk", "Win your first Clubs Playoff Match"],
        ["We're Going Up", "Earn a Clubs League Promotion with your Club"],
        ["We're in the Game!", "Play a match in UT with a squad that has players from both male and female leagues"],
        ["Welcome to the Big Leagues!", "Earn enough UT Champions Qualification Points to qualify for UT Champions Play-Offs"],
        ["Winning in Style", "Win the UEFA Women's Champions League Final"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
