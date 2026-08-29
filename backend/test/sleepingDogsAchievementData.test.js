import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sleeping-dogs.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 307690 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 59 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sleeping-dogs");

test("getPlannerData('sleeping-dogs') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for sleeping-dogs");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Sleeping Dogs achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Sleeping Dogs achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Sleeping Dogs achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Big Betrayal", "Complete Dockyard Heist."],
        ["A Slap in the Face", "Kill someone with a fish."],
        ["Auto Enthusiast", "Purchase all vehicles."],
        ["Big Smiles All Around", "Complete Big Smile Lee."],
        ["Bomb Squad", "Complete End of the World."],
        ["Bounty Hunter", "Complete all of Roland's Jobs."],
        ["Case Closed", "Complete all cases."],
        ["Central Scavenger", "Unlock every lockbox in Central."],
        ["Chief Inspector", "Complete 100% of all missions, cases, favors, events, jobs and races."],
        ["Cult Master", "Defeat the cultists."],
        ["Cursed Gold", "Achieve 5 Gold Awards."],
        ["Detective", "Complete 50% of all missions, cases, favors, events, jobs and races."],
        ["Environmentalist", "Perform 5 unique environmental kills."],
        ["Event Driven", "Complete half of the open world events."],
        ["Event Planner", "Complete all of the open world Events."],
        ["Fashion Statement", "Change all your clothes in your wardrobe or a clothing store."],
        ["Fashion Victim", "Purchase all clothing."],
        ["Foodie", "Try 10 different foods or drinks."],
        ["Gadgetman", "Pick a lock, plant a bug, trace a phone, crack a safe, and take over a spy camera."],
        ["Gaining Face", "Achieve Face Level 5."],
        ["Ghosts and Stuff", "Complete all secondary content of Nightmare in North Point."],
        ["Gold Rush", "Achieve 5 Gold Stat Awards."],
        ["Golden Touch", "Achieve 15 Gold Stat Awards."],
        ["Goodie Monster", "Find all the Evidence Collectibles."],
        ["Great Face", "Achieve Face Level 10."],
        ["Gun Nut", "Use 10 different firearms to defeat enemies."],
        ["Hell Money", "Find all the money shrines."],
        ["Hong Kong Super Hacker", "Hack every Security Camera in the game."],
        ["Hong Kong’s Finest", "Complete all secondary content of Year of the Snake."],
        ["I Can Haz Banishment", "Banish Smiley Cat."],
        ["In With the Gang", "Complete Night Market Chase."],
        ["Infowlable", "Win 50,000 on a single cockfight."],
        ["Karaoke Superstar", "Achieving 90% and above for all songs at the Karaoke Bars in HK."],
        ["Kleptomaniac", "Hijack 5 trucks and collect their cargo."],
        ["Man Around Town", "Visit Aberdeen, Central, Kennedy Town and North Point."],
        ["Martial Law", "Defeat all 4 Martial Arts Clubs"],
        ["Minor Face", "Achieve Face Level 2."],
        ["Mr. Nice Guy", "Complete all Favors."],
        ["North Point Scavenger", "Unlock every lockbox in North Point."],
        ["Officer", "Complete 25% of all missions, cases, favors, events, jobs and races."],
        ["Pet Cemetery", "Send Dogeyes, Ratface and Ponytail back to Hell."],
        ["Pure Gold", "Achieve 30 Gold Stat Awards."],
        ["Rookie", "Complete 10% of all missions, cases, favors, events, jobs and races."],
        ["Safe Driver", "Cruise for 2 minutes over 60 Km/h without damaging your car."],
        ["Sharpshooter", "Shoot out a cop's tires while fleeing in a police chase."],
        ["Slight Silver", "Achieve 5 Silver Stat Awards."],
        ["Solid Silver", "Achieve 30 Silver Stat Awards."],
        ["Spiritual Healing", "Pray at all of the Health Shrines."],
        ["Strike Gold", "Achieve 1 Gold Stat Award."],
        ["Stuntman", "Successfully perform an action hijack."],
        ["Substantial Silver", "Achieve 15 Silver Stat Awards."],
        ["Super Cop", "Unlock ten Cop Upgrades."],
        ["Take A Bite Out Of Crime", "Complete a Case."],
        ["That'll Show 'em", "Complete Payback."],
        ["Tourist", "Win a bet on a cockfight."],
        ["Ultimate Fighter", "Unlock ten Triad Upgrades."],
        ["Wei of the Road", "Complete all Street Races."],
        ["West End Scavenger", "Unlock every lockbox in Kennedy Town and Aberdeen."],
        ["Whatever's Handy", "Use 10 different melee weapons to defeat enemies."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
