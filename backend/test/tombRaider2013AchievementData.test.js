import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tomb-raider-2013.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 203160 (fetched through this app's own services/steamApi.js).
// 47 of 50 ship a real, official Steam description, quoted
// verbatim below. The 3 hidden achievement(s) ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("tomb-raider-2013");

test("getPlannerData('tomb-raider-2013') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for tomb-raider-2013");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Tomb Raider (2013) achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Tomb Raider (2013) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 officially-described Tomb Raider (2013) achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "NEW_ACHIEVEMENT_3_0",
        "NEW_ACHIEVEMENT_3_1",
        "NEW_ACHIEVEMENT_3_2",
    ]);

    assert.strictEqual(hiddenApinames.size, 3, "sanity check - Tomb Raider (2013) has 3 hidden achievement(s)");

    const officialAchievements = [
        ["A Survivor Is Born ", "Complete the game. "],
        ["Adventurer ", "Complete a match in all multiplayer modes. "],
        ["Archaeologist ", "Collect 75% of all relics. "],
        ["Artilleryman ", "Kill 20 enemy players in multiplayer using a turret. "],
        ["Bag Full O' Cache ", "Find 75% of GPS caches. "],
        ["Big Game Hunter ", "Kill and loot 10 large animals (deer, boar, wolves). "],
        ["Bookworm ", "Find 25% of all documents. "],
        ["Clever Girl ", "Purchase all skills in one category. "],
        ["Deadeye ", "Shoot 10 enemies off zip lines. "],
        ["Down and Dirty ", "Perform 15 finishers. "],
        ["Down Boy! ", "Kill a zip-lining enemy player in multiplayer. "],
        ["Entrapment ", "Catch a player in a snare trap in multiplayer. "],
        ["Epic Fumble ", "Force an enemy to drop dynamite that kills two people when exploding. "],
        ["Equalizer ", "Kill 75 enemies with the rifle. "],
        ["Escapist ", "Survive 10 explosions in multiplayer. "],
        ["Feather Duster ", "Kill and loot 10 flying animals (crows and gulls). "],
        ["Former Adventurer ", "Incapacitate 25 enemies with dodge counter. "],
        ["Get Over Here! ", "Rope pull 5 enemies off edges. "],
        ["Good Samaritan ", "Revive a teammate in a multiplayer match. "],
        ["Gunslinger ", "Kill 35 enemies with the pistol. "],
        ["Historian ", "Find 75% of all documents. "],
        ["I'm all that! ", "Win a ranked match in every multiplayer mode. "],
        ["Inconceivable! ", "Complete all challenges. "],
        ["Intellectually Superior ", "Complete all optional tombs. "],
        ["Lethal ", "Purchase all skills in all categories. "],
        ["Lights Out ", "Kill 10 multiplayer enemies using your melee attack. "],
        ["Looking for Trouble ", "Find 25% of GPS caches. "],
        ["Master Blaster ", "Kill 2 multiplayer enemies with a single explosive. "],
        ["Monkey Around ", "In multiplayer, escape death 3 times by using the rope ascender. "],
        ["Narcissistic ", "Purchase a new multiplayer character. "],
        ["No Stone Left Unturned ", "Find all documents, relics and GPS caches. "],
        ["Now We're Getting Serious ", "Fully mod and completely upgrade any weapon. "],
        ["On My Way Up ", "Reach level 10 in multiplayer. "],
        ["One Smart Cookie ", "Complete one optional tomb. "],
        ["Opportunist ", "Kill 25 unaware enemies. "],
        ["Picky ", "Loot 200 enemies. "],
        ["Predator ", "Kill 50 enemies with the bow. "],
        ["Relic Hunter ", "Collect 25% of all relics. "],
        ["Scrounger ", "Collect 5000 pieces of salvage. "],
        ["Sharp Shooter ", "Perform 50 headshot kills in the single player campaign. "],
        ["Shopaholic ", "Buy every upgrade and character in multiplayer. "],
        ["Sole Survivor ", "In multiplayer, be the only player on your team that isn't dead or downed. "],
        ["Tastes Like Chicken! ", "Kill and loot 10 small animals (rabbits, chickens, rats). "],
        ["The Professional ", "Fully mod and completely upgrade all weapons. "],
        ["True Commitment ", "Reach level 60 in multiplayer. "],
        ["Unfinished Business ", "Complete one challenge. "],
        ["Widowmaker ", "Kill 40 enemies with the shotgun. "],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Tomb Raider (2013) achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["NEW_ACHIEVEMENT_3_0", "Boom Goes the Dynamite "],
        ["NEW_ACHIEVEMENT_3_1", "Crab Cakes "],
        ["NEW_ACHIEVEMENT_3_2", "Chatterbox "],
    ];

    assert.strictEqual(names.length, 3, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
