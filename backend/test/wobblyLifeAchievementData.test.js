import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wobbly-life.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1211020 (fetched through this app's own services/steamApi.js).
// 9 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wobbly-life");

test("getPlannerData('wobbly-life') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for wobbly-life");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Wobbly Life achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Wobbly Life achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Wobbly Life achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Daring Demolition", "Complete the Demolition Job"],
        ["A Deep Spooky Wobbly Secret", "Unlock the Ghost Pet, a rare hidden pet found through the game's spookier side content."],
        ["A Jelly Fueled Journey", "Complete the Jelly Car mission - a dedicated vehicle-based side mission themed around the Jelly Job."],
        ["A New Frontier", "Go To Space"],
        ["A Speedy Slice", "Complete Pizza Job"],
        ["A Supernatural Delivery", "Deliver Pizza to the UFO"],
        ["A Sweet Day At Work", "Complete Ice Cream Job"],
        ["A Tiny Adventure", "Complete the UFO storyline mission - build and finish the UFO to trigger this main-storyline secret achievement."],
        ["A Wobbly Start", "Complete Jelly Job"],
        ["Awesome Archaeologist", "Complete the Temple"],
        ["Cleaning Up The Island", "Complete Garbage Job"],
        ["Committed Collector", "Complete the Museum"],
        ["Cosmic Collector", "Complete The Collector's Emporium"],
        ["Cream Of The Crop", "Complete Harvest Farm Job"],
        ["Creative Cadet", "Complete the Space Cadet Mission Series"],
        ["Creative Courier", "Complete Furniture Job"],
        ["Dazzling On The Dance Floor", "Complete Disco Job"],
        ["Drain Diver", "Return the Sewer Queens crown"],
        ["Explorer Extraordinaire", "Collect all presents on Wobbly Island"],
        ["Feeding Frenzy", "Feed the Monster 50 toxic barrels"],
        ["Flipping The Perfect Burger", "Complete Burger Job"],
        ["Formula Frenzy", "Complete Science Job"],
        ["Frantic Fares", "Complete Taxi Job"],
        ["Galactic Gift Finder", "Collect all the presents in Space"],
        ["Growing Your Own", "Complete Seeding Farm Job"],
        ["Helping The Wobbly That Time Forgot", "Make the \"Choose Wisely\" decision at a specific story NPC encounter - the achievement is the reward for helping a Wobbly who has been forgotten by time."],
        ["Hey Gran, I'm Space Rich!", "Have 5000 Space Credits"],
        ["High Roller", "Have $5000 in the bank"],
        ["Into The Storm", "Fix the Weather Machine"],
        ["Look At Me Grandma!", "Have $1000 in the bank"],
        ["Luggage Lifter", "Complete Suitcase Delivery Job"],
        ["Lumber Legend", "Complete Woodcutter job"],
        ["Making Grandma Proud", "Buy your first house"],
        ["Making Waves", "Complete a Boat Race"],
        ["Marine Master", "Collect every fish in Wobbly Island"],
        ["Mining The Glowy Green Ore", "Deposit Uranium into the Mining Machine"],
        ["Monster Manager", "Complete Power Plant Job"],
        ["My Best Work", "Complete the Art Job"],
        ["No Delivery Too Far", "Complete Space Courier Job"],
        ["One Big Sleep", "Wake the Sleep King during the game's dream-themed story mission."],
        ["One Happy Hammerer", "Complete the Construction Job"],
        ["Piecing It All Together", "Find the Bard's Treasure by following the Lost Map mission's clues."],
        ["Plowing Ahead", "Complete Plowing Farm Job"],
        ["Powering The Whole Island", "Feed the Monster 25 toxic barrels"],
        ["Proud Protector", "Complete Asteroid Defence Job"],
        ["Putting The Pedal To The Metal", "Complete a Kart Race"],
        ["Rapid Delivery To Your Door", "Complete Newspaper Job"],
        ["Rapid Rockets", "Complete a Spaceship Race"],
        ["Recovering The Past", "Complete your first Museum collection"],
        ["Relentless Reeler", "Complete Fishing Job"],
        ["Space Mine Specialist", "Complete Asteroid Mining Job"],
        ["Spaceship Saviour", "Complete Spaceship Rescue Job"],
        ["Speedy Nee-Naw", "Complete Emergency Job"],
        ["Stealthy Sneaker", "Disable the Robot Factory's alarm during its stealth-focused mission."],
        ["Super Student", "Complete the Space Garden Classes"],
        ["Taking To The Skies!", "Complete a Plane Race"],
        ["The Balloon Buster", "Complete the Weather Job"],
        ["The Rapid Recycler", "Complete the Recycling Job"],
        ["There's A Big Spender In Wobbly Town", "Have $10000 in the bank"],
        ["Throwing Space Shapes", "Complete Space Disco Job"],
        ["Trivializing The Trials", "Complete the Ancient Wobbly Trials, a multi-stage trial sequence hidden on the island."],
        ["Uncovering The Clues", "Complete the Space Detective Missions"],
        ["Well That Was Weird", "In the Space DLC, defeat the Space Crystal - the void boss encountered at the far end of the space content."],
        ["What A Clever Wobbly", "Win the Wonderful Wobbly Quiz"],
        ["Wonderous Waiter", "Complete Space Diner Job"],
        ["Wrench Wizard", "Complete Spaceship Mechanic Job"],
        ["You're My Wobbly Hero", "Complete Fire Fighter Job"],
        ["Your New Best Friend", "Purchasing First Pet"],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 9 hidden Wobbly Life achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["A Deep Spooky Wobbly Secret", "Helping The Wobbly That Time Forgot", "A Tiny Adventure", "Trivializing The Trials", "A Jelly Fueled Journey", "One Big Sleep", "Piecing It All Together", "Well That Was Weird", "Stealthy Sneaker"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
