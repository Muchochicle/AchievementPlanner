import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/serious-sam-4.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 257420 (fetched through this app's own services/steamApi.js). 0 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("serious-sam-4");

test("getPlannerData('serious-sam-4') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for serious-sam-4");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Serious Sam 4 achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Serious Sam 4 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Serious Sam 4 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Kleer", "Kill 50 healthy Kleers with a direct double shotgun hit."],
        ["All Roads Lead To Rome", "Head into Rome. Ditch Rodriguez."],
        ["Are You Not Entertained?", "Party like it's 199."],
        ["Atomic Wedgie", "Use the mininuke to eliminate 100 enemies at once."],
        ["Brass Lantern", "Finish a text adventure. On an oil rig. During an alien invasion."],
        ["Bullseye", "One-shot kill 3 Werebulls with a shotgun."],
        ["Class Reunion", "Navigate the citadel of Carcassonne. Start reassembling your team."],
        ["Classic Hero Stuff", "Save a princess. Doesn't get more classic than that."],
        ["Cultist Stimulator", "Recover a key stolen by a cultist."],
        ["Dismemberfest", "Dismember 50 enemies with cannonballs."],
        ["Ecclesiastical Extraction", "Save the rookie. Find Father Mikhail. See the sights."],
        ["Enemy of My Enemy", "Make 20 enemies kill each other using Psychotropic Grenades."],
        ["For the Cause", "Find out what happened to Alessandro."],
        ["From Earth With Love", "Send Mental a message he won't forget."],
        ["Fulbert le Fou", "Discover Fulbert's great invention."],
        ["Get Serious", "Unlock 10 S.A.M.s in a single playthrough."],
        ["Hard Science Fiction", "Get a weaponized black hole, using science."],
        ["Harvest Festival", "Harvest 100 enemies with a combine harvester."],
        ["Harvest Noon", "Don't fear the reaper. Be the reaper."],
        ["Heads Up!", "Kill 100 enemies with a headshot."],
        ["Holy Driver", "Ride the Popemobile to victory."],
        ["Hot Hot Hot", "Run away from an angry volcano you foolishly antagonized."],
        ["La Nonna é Mobile", "Meet a powerful granny."],
        ["Max Pain", "Kill 5 enemies during a single Time Warp slowdown."],
        ["Megabarf", "Kill a Belcher using Belcher collateral barf damage."],
        ["Mushroom Surprise", "Find out what happened to the English airman."],
        ["No Surrender", "Kill 5 enemies in a row while your health is below 10 HP."],
        ["Oh, Shut Up", "Destroy 10 propaganda drones."],
        ["Oil's Well That Ends Well", "Escape the Oil Rig."],
        ["Pow Pow!", "Kill an Aludran Reptiloid using nothing but a pistol."],
        ["Quadruple the Gun", "Kill 20 enemies while dual wielding double shotguns."],
        ["Quality Time", "Go on a date with Hellfire."],
        ["Regression", "Get knocked on the head and remember how you got here."],
        ["Roman Holiday", "Get together with your friends and kill something big."],
        ["Say Hello To My Mini Friend", "Spend 1000 minigun rounds while firing continuously."],
        ["See Carcassonne And Die", "Cross the French countryside and get very cross."],
        ["Serious Art", "Protect humanity's treasures from invaders with no taste."],
        ["Serious Sam", "Beat the game on any difficulty."],
        ["Signature Move", "Sign Secchi's rifle."],
        ["Southern Gentleman", "Assist a couple of young ladies out hunting."],
        ["Spinal Tap", "Kill 11 different enemies using melee attacks."],
        ["Spread the Joy", "Kill 3 enemies with a double shotgun blast."],
        ["Tear 'n' Rip", "Melee a big enemy."],
        ["That Belongs In A Museum", "Recover the alien artifact located by Dr. Stein."],
        ["That Burning Sensation", "Collect scorched aliens for Professor Kiesel."],
        ["The French Achievement", "Achievement is your middle name."],
        ["The Informant?", "What if you could talk to the monsters?"],
        ["The Last Human", "Get justice. Get the Holy Grail. Get screwed over."],
        ["The Spirit of Roma", "Fight alongside Massimo Murena."],
        ["This Seems Safe", "Unlock a S.A.M."],
        ["Veni Vidi Witchy", "Kill a Witchbride using C4."],
        ["Volcano Antagonizer", "Die HAARP With A Vengeance."],
        ["Where's That Girl", "Make sure Gabriella is OK."],
        ["You Have Been Wormed", "Assist Dr. Vermetti in his war on worms."],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
