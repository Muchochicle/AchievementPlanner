import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dawn-of-war-2.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 15620 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dawn-of-war-2");

test("getPlannerData('dawn-of-war-2') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for dawn-of-war-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Warhammer 40,000: Dawn of War II achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Warhammer 40,000: Dawn of War II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Warhammer 40,000: Dawn of War II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A proper Waaagh!", "20 online ranked games completed with Orks in Dawn of War II."],
        ["Allies to the Cause", "Complete a mission in co-op mode in Dawn of War II."],
        ["Allies to the Chapter", "Complete 15 missions in co-op in Dawn of War II."],
        ["Angel of Death", "20 online ranked games played with Space Marines in Dawn of War II."],
        ["Aspect Warrior", "20 online ranked games completed with Eldar in Dawn of War II."],
        ["Astronomical", "Recover the data from the Astronomic Array in Dawn of War II."],
        ["Bad Example", "Get any squad to maximum Corruption in Chaos Rising. Not available to guests."],
        ["Bane of Chaos", "Complete campaign on Captain difficulty or harder in Chaos Rising."],
        ["Battle Brothers", "Complete the campaign in co-op in Dawn of War II."],
        ["Blood God", "Win a ranked game using only Khorne-themed units in Chaos Rising."],
        ["Bringer of Change", "Win a ranked game using only Tzeentch-themed units in Chaos Rising."],
        ["Chaos Lord", "Play 20 ranked games using Chaos in Chaos Rising."],
        ["Chaos Undivided", "Win a ranked Team Battle with each Chaos hero on the team in Chaos Rising."],
        ["Common Foe", "Complete 1 Chaos Rising mission in co-op."],
        ["Conqueror of Chaos", "Complete campaign on Sergeant difficulty or harder in Chaos Rising."],
        ["Crush the Enemy", "Complete campaign on Primarch difficulty in Dawn of War II."],
        ["Death from Above", "Kill 20 enemies using Assault Jump in Dawn of War II."],
        ["Domination", "Hold 5+ victory points at once in an online Free for All in Chaos Rising."],
        ["Dug In", "Successfully defend 5 Strategic Assets in Dawn of War II."],
        ["Duty is its own Reward", "Complete 6 Chaos Rising missions as a GUEST in Co-Op."],
        ["Elite", "Max out a Combat Discipline on a squad in Dawn of War II. Not applicable to guests."],
        ["Elite Strike Force", "Create a 3 player party and play a ranked multiplayer game together in Dawn of War II."],
        ["Emperor's Champion", "Kill a boss using only your Force Commander in Dawn of War II."],
        ["End of Chaos", "Complete campaign on Primarch difficulty in Chaos Rising."],
        ["Enemy of Chaos", "Complete campaign on Recruit difficulty or harder in Chaos Rising."],
        ["Even In Death I Still Serve", "Complete \"Into the Hive\" in Dawn of War II."],
        ["Fast Attack", "Gain a second deployment in a single day in Dawn of War II."],
        ["Feel No Pain", "Earn a 5 star Resilience rating in Dawn of War II."],
        ["Fight to Survive", "Complete campaign on Recruit difficulty in Dawn of War II."],
        ["Flawless victory", "Achieve an online ranked victory with 500 victory points remaining in Dawn of War II."],
        ["Fleet of Foot", "Earn a 5 star Speed rating in Dawn of War II."],
        ["Forbidden Knowledge", "Unlock the dark secrets of \"The Fate of Galan\" in Chaos Rising."],
        ["Gladiator", "Play 10 ranked multiplayer games in Dawn of War II."],
        ["Great Devourer", "20 online ranked games completed with Tyranids in Dawn of War II."],
        ["Hail the Champion", "Earn Champion rating 20 times during online ranked play in Dawn of War II."],
        ["Heavy Support", "Reach level 20 with one of your squads in Dawn of War II. Not applicable to guests."],
        ["Hero of the Imperium", "Attain a campaign score of over 30,000 points in Dawn of War II. Not applicable to guests."],
        ["Heroes of Angel Gate", "Complete \"Secrets of Angel Forge\" in Dawn of War II."],
        ["Hold back the Xenos", "Complete campaign on Sergeant difficulty in Dawn of War II."],
        ["In the name of the Emperor", "Own all Strategic Assets in a campaign in Dawn of War II. Not applicable to guests."],
        ["King of the Hill", "Win 10 online Free for All matches in Chaos Rising."],
        ["Legend", "Attain a campaign score of over 90,000 points in Dawn of War II. Not applicable to guests."],
        ["Lightning Assassin", "Kill a boss in less than one minute in Dawn of War II."],
        ["Manipulator", "Score 500,000 in The Last Stand with the Hive Tyrant or Sorcerer in Chaos Rising."],
        ["Massacre", "Complete 10 missions in a row without failing in Dawn of War II."],
        ["Master of the Apothecarion", "Revive your teammates 50 times during online ranked play in Dawn of War II."],
        ["Not one inch", "Defend a province without losing a single generator in Dawn of War II."],
        ["Overlord", "Reach level 20 in The Last Stand with the Hive Tyrant or Sorcerer in Chaos Rising."],
        ["Plague Father", "Win a ranked game using only Nurgle-themed units in Chaos Rising."],
        ["Purge the Xenos", "Earn a 5 star Fury rating in Dawn of War II."],
        ["Purist", "Complete a mission on the Space Hulk with 4 Terminators in Chaos Rising."],
        ["Rant All You Will", "Complete \"The True Enemy\" in Dawn of War II."],
        ["Red Ones Go Fastah!", "Create a customized look for any race in the Army Painter in Dawn of War II."],
        ["Relentless", "Reach level 30 with any campaign squad in Chaos Rising. Not available to guests."],
        ["Rush 'em", "Complete a mission under five minutes in Dawn of War II."],
        ["Sweeping Advance", "Kill an enemy who is retreating in Dawn of War II."],
        ["Taint Your Wagon", "Destroy a Wartrukk with a Noxious Cloud during a ranked game in Chaos Rising."],
        ["That's Close Enough", "Complete a mission with only ranged weapons in Dawn of War II."],
        ["The Avatar of Khaine", "Complete \"The Wailing Doom\" in Dawn of War II."],
        ["The Book of Honor", "Get 15 stars on one mission in Dawn of War II."],
        ["The Challenge Answered", "Answer the enemy commander's challenge on Aurelia in Chaos Rising."],
        ["The Cleansing Begins", "Complete \"The Defense of Argus Gate\" in Dawn of War II."],
        ["The Emperor's Justice", "Defeat the Traitor Guardsmen on Aurelia in Chaos Rising."],
        ["The Enemy Exposed", "Defeat the true enemy attacking Angel Forge in Chaos Rising."],
        ["The Warboss", "Complete \"Raid Against the Warboss\" in Dawn of War II."],
        ["There Is Only War", "Terminate 500 enemy targets in Dawn of War II."],
        ["Tireless warrior", "Gain a third deployment in a single day in Dawn of War II."],
        ["Usurper", "Beat wave 20 in The Last Stand with the Hive Tyrant or Sorcerer in Chaos Rising."],
        ["Veteran Victor", "100 ranked wins in Dawn of War II."],
        ["Welcome to Calderis", "Complete \"Stand With Your Brothers\" and \"Retake the Hamlet\" in Dawn of War II."],
        ["Win the War", "Complete campaign on Captain difficulty in Dawn of War II."],
        ["Winning rush", "Earn a 5 game win streak during online ranked play in Dawn of War II."],
        ["Wisdom of the Ancients", "View a recorded game in Dawn of War II."],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
