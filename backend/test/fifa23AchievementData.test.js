import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fifa-23.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1811260 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fifa-23");

test("getPlannerData('fifa-23') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for fifa-23");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every FIFA 23 achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every FIFA 23 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 FIFA 23 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Moment of Your Time", "Complete 1 FUT Moment"],
        ["Aiming High", "Complete 10 enhanced objectives across all matches"],
        ["Balanced Path", "Reach 40% Personality Points in two personalities of your choice"],
        ["Becoming Unplayable", "Unlock all the traits within a skill-tree in Pro Clubs"],
        ["Best of Five", "Play 5 H2H matches with a friend in Kick Off"],
        ["Bring it on", "Play/Win a match with the competitive settings turned on during any offline mode"],
        ["Dazzling Personality", "Have a personality trait being over 75% dominant"],
        ["Dead-ball specialist", "Score a goal from a Free Kick"],
        ["European Legend", "Win the UEFA Champions League Final"],
        ["First of Many", "Complete and win your first Pro Club Seasons league match"],
        ["Football is Everything", "Play a women's football match"],
        ["Fresh Fit", "Change an item in the \"Outfits\" tab"],
        ["Full wardrobe", "Unlock 50 different vanity items"],
        ["Full-House", "Play and Complete a Cup House Rules Match in Pro Clubs"],
        ["Girl Power", "Win a tournament with a team from a women's league"],
        ["High Grades", "Get an \"A\" rating for a transfer negotiation"],
        ["I Played Them All", "Reach Milestone 3 in a FUT Division Rivals Season"],
        ["In Cahoots", "Win 10 Co-Op games with online friends in FUT Squad Battles or FUT Division Rivals"],
        ["Intuition and Execution", "Win a penalty shoot-out without missing"],
        ["Let the Games Begin", "Earn enough FUT Champions Qualification Points to qualify for FUT Champions Play-Offs"],
        ["Life-Like", "Complete a season with a real manager and his original team"],
        ["Make the Grade", "Receive an A grade in a Pro Clubs Skill Game"],
        ["Momentous Achievement", "Earn 100 Stars in FUT Moments"],
        ["Multitasking", "Complete 10 or more activities during a season"],
        ["On the way up", "Reach Level 7 in a Season in VOLTA FOOTBALL or Pro Clubs"],
        ["Parking the Bus", "Keep 10 clean sheets in FUT Squad Battles"],
        ["Power Shot", "Score a goal using the power shot mechanic"],
        ["Safe House", "Play a game using any House Rule in FUT Friendlies"],
        ["Sharing is Caring", "Purchase a shareable item in the VOLTA Shop"],
        ["Shop till you drop", "Purchase an item from the VOLTA Shop using VOLTA Coins"],
        ["Specialist", "Unlock an Archetype in Pro Clubs"],
        ["Squad Building Connoisseur", "Complete 10 Squad Building Challenges in FIFA Ultimate Team"],
        ["Tactical Tinkerer", "Create your own custom tactic in FIFA Ultimate Team"],
        ["Teamwork works", "Win a VOLTA SQUADS match with 3 friends"],
        ["The Chosen One", "Reach 200 club appearances with a player in FIFA Ultimate Team"],
        ["The Winning Formula", "Build a squad with 33 Chemistry Points in FIFA Ultimate Team"],
        ["Training Addict", "Complete all Main Menu Skill Games"],
        ["Tune Your Club", "Play at least a match with 3 different goal songs in FIFA Ultimate Team"],
        ["Volta's best", "Reach 90 OVR with your Avatar in VOLTA FOOTBALL"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
