import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ea-sports-fc-26.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3405690 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ea-sports-fc-26");

test("getPlannerData('ea-sports-fc-26') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for ea-sports-fc-26");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every EA SPORTS FC 26 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every EA SPORTS FC 26 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 EA SPORTS FC 26 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Aboard the Premium Track!", "Fully complete and unlock all levels in the Premium Pass"],
        ["Authenticity", "Play a match with the Authentic Gameplay Type selected in Kick Off, Tournaments or in Career Mode"],
        ["Best of Five", "Play 5 H2H matches with a friend in Kick Off"],
        ["Bounty Buster", "Successfully complete a Bounty in UT Division Rivals"],
        ["Bring It On", "Play and win a match on Legendary difficulty with Competitor mode turned on during any offline mode"],
        ["Bullseye", "Score a goal using Precision Shooting"],
        ["Campeones", "Finish as the Champion of your Clubs Playoff table"],
        ["Challenge Accepted", "Successfully complete your first Challenge"],
        ["Champion’s Debut", "Play in a Champions Event in Football Ultimate Team"],
        ["Clean Sheet", "Get a clean sheet while playing Be-A-Goalkeeper in Career Mode or in Clubs"],
        ["Collect Them All", "Unlock 3 Archetypes"],
        ["Dead-ball Specialist", "Score a goal from a Free Kick"],
        ["Defensive Dynamo", "Keep 10 clean sheets in UT Squad Battles"],
        ["European Glory", "Win the UEFA Champions League or the UEFA Women's Champions League in Player or Manager Career"],
        ["European Legend", "Win the UEFA Champions League Final"],
        ["Event Explorer", "Play in an Event in Football Ultimate Team"],
        ["Expect the Unexpected", "Navigate the unknown"],
        ["Final Evolutionary Stage", "Complete an Evolution and claim the upgrades in UT"],
        ["First of Many", "Win your first Clubs League Match"],
        ["Football Friend", "Participate in a Clubs Rush Live Event with one or more friends"],
        ["Football is Everything", "Play a Women's International football match"],
        ["Full Chemistry Charge", "Build a squad with 33 Chemistry Points in Football Ultimate Team. Excludes Concept Players and SBCs"],
        ["Gold Standard", "Reach Gold level with an Archetype"],
        ["In a Rush", "Improve your Rush Rank in Clubs"],
        ["Intuition and Execution", "Win a penalty shoot-out without missing"],
        ["KO Kings", "Win a Clubs Rush Live Event"],
        ["Legend on the Pitch", "Field 3 ICONs or Heroes in the same match"],
        ["Makeover Maestro", "Successfully complete a Cosmetic Evolution in Football Ultimate Team"],
        ["Masterplan", "Get hired for a job you've added to the Watchlist"],
        ["Mythic Milestone", "Reach 200 Club appearances with a player in Football Ultimate Team"],
        ["One Season, wonderful!", "Fully complete and unlock all levels in a Season Pass"],
        ["PlayStyles+", "Score a goal with an active PlayStyle+"],
        ["Power Shot", "Score a goal using the Power Shot mechanic"],
        ["Shop 'Til You Drop", "Purchase any Archetype content gated item from the store"],
        ["Squad Builder Extraordinaire", "Complete 10 Squad Building Challenges in Football Ultimate Team"],
        ["Surgical Aim", "Complete 25 Precision Passes"],
        ["Tactical Designer", "Create your own custom Tactic in Football Ultimate Team"],
        ["Tactical Mastermind", "Create, customize and name your own Tactic"],
        ["Tactical Sync", "Field a starting XI with all the players having a Player Role ++"],
        ["Top of the Pyramid", "Reach Elite Division with your Club in a Clubs League Season"],
        ["Treble Glory", "Win a Treble"],
        ["Very Particular Set of Skills", "Unlock and equip a Specialization with an Archetype"],
        ["We're Going Up", "Earn a Clubs League Promotion with your Club"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
