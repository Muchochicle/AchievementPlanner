import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/for-honor.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 304390 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 60 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("for-honor");

test("getPlannerData('for-honor') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for for-honor");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every For Honor achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every For Honor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 For Honor achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Beginning", "Reach Story Level 10 in Story Mode."],
        ["A Middle", "Reach Story Level 20  in Story Mode."],
        ["A Remarkable Accomplishment", "Complete Story Mode at Hard difficulty."],
        ["A Reservist", "Manually deploy Troops in 5 different Campaigns."],
        ["Active Duty", "Manually deploy Troops in 50 different Battles."],
        ["An Average Accomplishment", "Complete Story Mode at Normal difficulty."],
        ["An End", "Reach maximum Story Level 30 in Story Mode."],
        ["An Exceptional Accomplishment", "Complete Story Mode at Realistic difficulty."],
        ["An Unstoppable Force", "Complete 10 matches with any Wu Lin Hero."],
        ["Anything Can Be A Weapon", "Throw an opponent into fire or spikes 50 times."],
        ["Brawl Master", "Win 20 Brawl PvP matches."],
        ["Brawler", "Win your first Brawl PvP match."],
        ["Breach Apprentice", "Win your first Breach match."],
        ["Breach Master", "Complete 15 Breach matches."],
        ["Cry Havoc", "Manually deploy Troops on a territory for the first time."],
        ["Discerning Taste", "Equip your first Symbol, Paint Pattern and Color Swatch on any Hero."],
        ["Dishonorable Discharge", "Complete the Knight Chapter."],
        ["Do it for the Honor!", "Complete 50 Honorable Kills in 4v4 PvP matches."],
        ["Dominator", "Win your first Dominion PvP match."],
        ["Dominion Master", "Win 20 Dominion PvP matches."],
        ["Duel Master", "Win 20 Duel PvP matches."],
        ["Duelist", "Win your first Duel PvP match."],
        ["Elimination Master", "Win 20 Elimination PvP matches."],
        ["Eliminator", "Win your first Elimination PvP match."],
        ["Evening Wear", "Update a second loadout for a Hero by setting a feat other than the default."],
        ["For Honor!", "Participate in a Season and come back to see the results at the start of the next Season."],
        ["Gear Head", "Level up a piece of Gear of any rarity to its maximum level."],
        ["Get Knighted", "Reach Reputation 1 with one of the Knight Heroes."],
        ["Getting the band back together", "Recruit 4 Heroes of a single Faction."],
        ["Heads Up!", "Kill 25 Heroes by attacking them from above in PvP."],
        ["Hooligan", "Get 100 % of the Breakables from all Missions in Story Mode."],
        ["I've Got Your Back!", "Save an ally 50 times in 4v4 PvP matches."],
        ["I've Heard Your Name", "Reach Reputation 1 with one of the Viking Heroes."],
        ["If you want peace, prepare for war", "Complete the Samurai Chapter."],
        ["Impressive", "Reach Reputation 1 with one of the Samurai Heroes."],
        ["Legendary Hero", "Reach Reputation 5 with any Hero."],
        ["Let Slip The Dogs Of War", "Manually deploy Troops on territories 100 times."],
        ["Like Killing Ants", "Kill 5000 soldiers."],
        ["Long Way Down", "Kill 50 Opponents by throwing them off a ledge."],
        ["Look At All These Feats", "Get the max Renown level 50 times in Dominion PvP matches."],
        ["Lore Master", "Get 100 % of the Observables from all Missions in Story Mode."],
        ["Loyalty and Righteousness", "Reach Reputation 7 with one of the Wu Lin Heroes."],
        ["Makeover!", "Change the visual of any piece of Gear."],
        ["Play Your Way", "Equip a different Effect, Emote and Execution on a single Hero."],
        ["Principled Warrior", "Complete a Dominion PvP match without a single Dishonorable Kill."],
        ["Protector", "Manually deploy Troops on 10 friendly territories."],
        ["Quest for Glory", "Complete your first Quest in Arcade."],
        ["Revenge Spammer", "Activate Revenge mode 50 times."],
        ["Serial Quester", "Complete Quests of 5 different rarity levels."],
        ["Skirmish Master", "Win 20 Skirmish PvP matches."],
        ["Skirmisher", "Win your first Skirmish PvP match."],
        ["Swag Up", "Equip a Hero with Heroic Armor and Weapons in all Gear slots."],
        ["Unfair Fight", "Kill an enemy in a 1V2 situation in PvP."],
        ["Warmonger", "Manually deploy Troops on 10 enemy territories."],
        ["Welcome To The Blackstone Legion", "Complete Mission 1."],
        ["Working Hard for the Loot", "Complete the Viking Chapter."],
        ["You Can't Touch This", "Parry attacks 50 Times."],
        ["You're A Wizard", "Set 4 non-default Feats for a single Hero."],
        ["You're On Fire!", "Get 5 Kill Streaks of 5 kills in Elimination or Skirmish in PvP."],
        ["You're So Vain", "Equip an Ornament on 4 Heroes of a single Faction."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
