import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/call-of-duty-modern-warfare-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 10180 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("call-of-duty-modern-warfare-2");

test("getPlannerData('call-of-duty-modern-warfare-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for call-of-duty-modern-warfare-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Call of Duty: Modern Warfare 2 (2009) achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Call of Duty: Modern Warfare 2 (2009) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Call of Duty: Modern Warfare 2 (2009) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Back in the Saddle", "Help train the local militia."],
        ["Black Diamond", "Complete 'Cliffhanger' on Veteran Difficulty."],
        ["Blackjack", "Earn 21 stars in Special Ops."],
        ["Charlie On Our Six", "Earn 8 stars in Special Ops."],
        ["Cold Shoulder", "Infiltrate the snowy mountain side base."],
        ["Colonel Sanderson", "Kill 7 chickens in under 10 seconds in 'The Hornet's Nest'."],
        ["Danger Close", "Get hand picked for Shepherd's elite squad."],
        ["Desperado", "Kill 5 enemies in a row using 5 different weapons or attachments in Single Player or Special Ops."],
        ["Desperate Times", "Execute the plan to help the Americans."],
        ["Downed but Not Out", "Kill 4 enemies in a row while downed in Special Ops."],
        ["Drive By", "Kill 20 enemies in a row while driving a vehicle in Single Player or Special Ops."],
        ["Ends Justify the Means", "Complete 'Contingency' on Veteran Difficulty."],
        ["First Day of School", "Complete 'S.S.D.D.' and 'Team Player' on Veteran Difficulty."],
        ["For the Record", "Complete the Single Player campaign on any difficulty."],
        ["Ghost", "Plant the C4 in 'Cliffhanger' without alerting or injuring anyone in the blizzard."],
        ["Gold Star", "Earn 1 star in Special Ops."],
        ["Homecoming", "Complete 'Of Their Own Accord', 'Second Sun', and 'Whiskey Hotel' on Veteran Difficulty."],
        ["Honor Roll", "Earn at least 1 star in each Special Op mission."],
        ["Hotel Bravo", "Earn 4 stars in Special Ops."],
        ["I'm the Juggernaut…", "Kill a Juggernaut in Special Ops."],
        ["It Goes to Eleven", "Earn at least 1 star in 11 different Special Op missions."],
        ["Knock-knock", "Kill 4 enemies with 4 shots during a slow-mo breach in Single Player or Special Ops."],
        ["Leave No Stone Unturned", "Collect 45 enemy intel items."],
        ["Look Ma Two Hands", "Kill 10 enemies in a row using akimbo weapons in Single Player or Special Ops."],
        ["No Rest For the Wary", "Knife an enemy without him ever knowing you were there in Single Player or Special Ops."],
        ["Off the Grid", "Complete 'Just Like Old Times' and 'Endgame' on Veteran Difficulty."],
        ["Operational Asset", "Earn all 3 stars in at least 5 different Special Op missions."],
        ["Operative", "Earn all 3 stars in at least 10 different Special Op missions."],
        ["Out of the Frying Pan…", "Complete the mission in the airplane graveyard."],
        ["Pit Boss", "Run The Pit in 'S.S.D.D.' and finish with a final time under 30 seconds."],
        ["Prisoner #627", "Complete 'The Only Easy Day... Was Yesterday' and 'The Gulag' on Veteran Difficulty."],
        ["Professional", "Earn all 3 stars in at least 15 different Special Op missions."],
        ["Queen takes Rook", "Complete 'Loose Ends' and 'The Enemy of My Enemy' on Veteran Difficulty."],
        ["Red Dawn", "Complete 'Wolverines!' and 'Exodus' on Veteran Difficulty."],
        ["Royale with Cheese", "Defend Burger Town."],
        ["Soap on a Rope", "Storm the gulag."],
        ["Some Like it Hot", "Kill 6 enemies in a row using a thermal weapon in Single Player or Special Ops."],
        ["Specialist", "Earn 30 stars in Special Ops."],
        ["Star 69", "Earn 69 stars in Special Ops."],
        ["Tag 'em and bag 'em", "Find Rojas in the Favelas."],
        ["Ten plus foot-mobiles", "Kill at least 10 enemies with one Predator missile in Single Player or Special Ops."],
        ["The Harder They Fall", "Kill 2 rappelling enemies in a row before they land on their feet in Single Player or Special Ops."],
        ["The Pawn", "Assault Makarov's safe house."],
        ["The Price of War", "Complete the single player campaign on Hardened or Veteran Difficulty."],
        ["The Road Less Traveled", "Collect 22 enemy intel items."],
        ["Three-some", "Kill at least 3 enemies with a single shot from a grenade launcher in Single Player or Special Ops."],
        ["Turistas", "Complete 'Takedown' and 'The Hornet's Nest' on Veteran Difficulty."],
        ["Two Birds with One Stone", "Kill 2 enemies with a single bullet in Single Player or Special Ops."],
        ["Unnecessary Roughness", "Use a riot shield to beat down an enemy in Single Player or Special Ops."],
        ["Whiskey Hotel", "Take back Whiskey Hotel."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
