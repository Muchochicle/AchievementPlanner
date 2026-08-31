import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ea-sports-fc-25.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2669320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ea-sports-fc-25");

test("getPlannerData('ea-sports-fc-25') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for ea-sports-fc-25");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every EA SPORTS FC 25 achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every EA SPORTS FC 25 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 EA SPORTS FC 25 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Best of Five", "Play 5 H2H matches with a friend in Kick Off"],
        ["Bring it on", "Play and win a match with the competitive settings turned on during any offline mode"],
        ["Bullseye", "Score a goal using Precision Shooting"],
        ["Campeones", "Finish as the Champion of your Clubs Playoff table"],
        ["Chemistry Degree", "Build a squad with 33 Chemistry Points in Football Ultimate Team. Excludes Concept Players and SBCs"],
        ["Dead-ball specialist", "Score a goal from a Free Kick"],
        ["Equal Footing", "Play a match in UT with a squad that has players from both male and female leagues"],
        ["European Glory", "Win the UEFA Champions League or the UEFA Women's Champions League in Player or Manager Career"],
        ["European Legend", "Win the UEFA Champions League Final"],
        ["Final Form", "Complete an Evolution and claim the upgrades in UT"],
        ["First of Many", "Win your first Clubs League Match"],
        ["Football is Everything", "Play a Women's International football match"],
        ["For the Club", "Play Rush with a full squad of Clubmates"],
        ["From Origins to Legacy", "Win Player of the Year or Ballon d'Or in Player Career using one of the 4 predefined Origin Stories"],
        ["Gold Rush", "Improve your Rush Rank in Clubs"],
        ["In the Gaffer We Trust", "Apply the Tactical Preset from any manager in Football Ultimate Team"],
        ["Intuition and Execution", "Win a penalty shoot-out without missing"],
        ["Make the Grade", "Receive an A grade in a Clubs Skill Game"],
        ["One season, wonderful!", "Fully complete and unlock all levels in a Season Pass"],
        ["Perfect Fit", "Get a player to a Player Role ++ through the use of development plans"],
        ["Play-Off Passport", "Earn enough UT Champions Qualification Points to qualify for UT Champions Play-Offs"],
        ["PlayStyles+", "Score a goal with an active PlayStyle+"],
        ["Power Shot", "Score a goal using the power shot mechanic"],
        ["Rising Talent", "Win a 5v5 Youth Tournament"],
        ["Scouting Network", "Recruit a youth player to your Academy"],
        ["Shop till you drop", "Purchase an item from the Clubs Store using Clubs Coins"],
        ["Silverware Legacy", "Win any continental club competition trophy in Player Career using an Icon"],
        ["Social Kickabout", "Play 10 matches of Rush in Football Ultimate Team"],
        ["Squad Building Composer", "Complete 10 Squad Building Challenges in Football Ultimate Team"],
        ["Surgical Aim", "Complete 25 Precision Passes"],
        ["Tactical Mastermind", "Create, customize and name your own Tactic"],
        ["Tactical Sync", "Field a starting XI with all the players having a Player Role ++"],
        ["Tactically Savvy", "Create your own custom tactic in Football Ultimate Team"],
        ["That's One", "Play your first Rush Match in Clubs"],
        ["The Myth, the Legend!", "Reach 200 club appearances with a player in Football Ultimate Team"],
        ["Top of the Pyramid", "Reach Elite Division with your Club in a Clubs League Season"],
        ["Walk the Walk", "Win your first Clubs Playoff Match"],
        ["We're Going Up", "Earn a Clubs League Promotion with your Club"],
        ["You Shall Not Score!", "Keep 10 clean sheets in UT Squad Battles"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
