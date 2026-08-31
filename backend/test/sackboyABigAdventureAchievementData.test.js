import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sackboy-a-big-adventure.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1599660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sackboy-a-big-adventure");

test("getPlannerData('sackboy-a-big-adventure') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for sackboy-a-big-adventure");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Sackboy: A Big Adventure achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Sackboy: A Big Adventure achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Sackboy: A Big Adventure achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Amazing Ace", "Ace 30 levels by completing them without dying."],
        ["Beast of burden", "In multiplayer, get gold in any Knitted Knight Trial while carrying another Sackperson."],
        ["BEE! ARGH! BEE!", "Pick up, and hold on to, a Boomblebee Hive for 60 seconds."],
        ["Best Friends", "In multiplayer mode, earn 10 Ace level goals."],
        ["Best Friends Forever", "In multiplayer, defeat the Topsy Turver (the final boss) as a team."],
        ["Big Adventurer", "Even Scarlet didn't get all the achievements, you're truly a Knitted Knight of legend."],
        ["Book of Dreams", "Collect all the stickers in a single World."],
        ["Bounder", "Defeat 30 of Vex's minions by bouncing on them."],
        ["Bubble Binger", "Collect a full chain of Timed Score Bubbles 30 times."],
        ["Buddy Beater", "In multiplayer, get the top score on the scoreboard 20 times."],
        ["Capitalist", "In multiplayer, snag the most Collectabells in a level 20 times."],
        ["Crash Override", "Complete 'Nervous System', the final level of the Interstellar Junction, cleaning up N.A.O.M.I's code."],
        ["Cut it out!", "Complete Highs and Glows... without throwing the Whirltool."],
        ["Daydream Believer", "Push back the Uproar for the first time (a story beat)."],
        ["Fashionista!", "Complete your first Costume."],
        ["Fun Multiplied", "In multiplayer, complete a Teamwork Level."],
        ["Golden Boy", "Earn Gold on the scoreboard in 50 different levels!"],
        ["Gymnastic Fantastic", "While in the air, perform four actions before touching the ground."],
        ["Icon of Style", "Save a custom-made costume to your Wardrobe."],
        ["Knights of Gold", "Earn a Gold rank in any Knitted Knight Trial."],
        ["Let's twist again...", "In multiplayer, start a dance party with your friends."],
        ["Master of One", "Get a golden level badge by completing all the Level Goals for a single level."],
        ["Metameric Malady", "Complete 'Centipedal Force', the final level of the Colossal Canopy, defeating its boss."],
        ["Multi-Master", "Achieve all the level goals for 10 different levels."],
        ["Multitasking", "Defeat multiple minions simultaneously 10 times."],
        ["Naturalist", "Find all of Gerald's secret spots."],
        ["Out of bounds", "Pick up and throw 30 of Vex's minions to their doom."],
        ["Player's Player", "Find and pick up every fish, paintbrush and cocktail umbrella on your journey."],
        ["Pop 'n' Lobber", "Defeat 30 of Vex's minions from a distance."],
        ["Re-Mix-Master", "Earn a Gold rank in any Remix level."],
        ["Saviour", "In multiplayer, save your fallen friends from certain doom!"],
        ["Slap Attack", "In multiplayer, have two players slap each other at exactly the same time."],
        ["Slide Away", "Over the course of your adventure, collect 3000 points while sliding."],
        ["Sonar So Good", "Complete 'The Deep End', the final level of the Kingdom of Crablantis, defeating the Bringer of Nightmares."],
        ["Sore Winner", "In multiplayer, clobber one of your chums as the champ."],
        ["Squired Up", "Discover the Trials of the Knitted Knights."],
        ["Stop! Thief!", "In multiplayer, snatch an item from the clutches of another player."],
        ["String it Together", "Get a Gold on the Knitted Knight’s ultimate trial."],
        ["Stunner", "Stun 30 of Vex's minions."],
        ["Thespian", "Create your own custom Emote in Zom Zom's shop then show the world."],
        ["Up high!", "In multiplayer, high five with a friend."],
        ["Verified Vex Vanquisher!", "Beat Vex for the fourth and final time, destroy the Topsy Turver and complete the story."],
        ["Vex Vanquisher!", "Defeat Vex in 'Until Vex Time', near the end of the Centre of Craftworld."],
        ["Walk-in Wardrobe", "Fill your wardrobe with 300 costume pieces."],
        ["Wonderplane Workout", "Mop up the last remnants of the Uproar (a late-game story beat)."],
        ["You've got potential, squire!", "Defeat the Master of the Uproar boss on The Soaring Summit (the first world's boss)."],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
