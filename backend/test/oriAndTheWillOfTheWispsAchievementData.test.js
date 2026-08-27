import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ori-and-the-will-of-the-wisps.json - 37 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 1057090 (fetched through this app's own
// services/steamApi.js) - 25 of 37 ship a real, official Steam
// description. Close Call, Take the Bug by the Horn, Laser Brain, Home
// Sweet Home, Let the Waters Flow, Icy Escape, Dark Triumph, Guardian's
// Rest, Quick Sand, Stone Cold, Untouchable, and Timely Demise are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions (cross-checked against
// multiple independent achievement-guide sites). difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const oriWisps = getPlannerData("ori-and-the-will-of-the-wisps");

test("getPlannerData('ori-and-the-will-of-the-wisps') returns real planner data with 37 curated achievements", () => {

    assert.ok(oriWisps, "expected real planner data for ori-and-the-will-of-the-wisps");
    assert.ok(Array.isArray(oriWisps.achievements));
    assert.strictEqual(oriWisps.achievements.length, 37);

});

test("every Ori and the Will of the Wisps achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = oriWisps.achievements.map(a => a.id);
    const apinames = oriWisps.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Ori and the Will of the Wisps achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of oriWisps.achievements) {

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

test("every one of the 25 officially-described Ori and the Will of the Wisps achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 12 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Destiny", "Complete the Game"],
        ["Hardcore Fan", "Complete Hard Mode"],
        ["Tools of the Trade", "Unlock all Abilities"],
        ["Mad Skills", "Upgrade all Abilities"],
        ["Fully Slotted", "Upgrade all Shard Slots"],
        ["Shard Hunter", "Unlock all Shards"],
        ["Shard Specialist", "Upgrade all Shards"],
        ["Powerful", "Max out Energy"],
        ["Cartographer's Protégé", "Buy all Maps from Lupo"],
        ["Shrine Bright", "Complete all Spirit Shrines"],
        ["Lost and Found", "Find all Collectibles"],
        ["Mark of the Trader", "Complete the Trade Sequence Quest"],
        ["Completionist", "Complete every Side Quest"],
        ["Fixer Upper", "Complete all Wellspring Glades Projects"],
        ["Speed Demon", "Complete all Spirit Trials"],
        ["Healthy", "Max out Life"],
        ["Juggling Act", "Juggle 3 or More Projectiles in the Air for Over 5 Seconds"],
        ["Bring it On", "Defeat 5 Enemies Without Touching the Ground"],
        ["High and Dry", "Avoid Touching any Corrupted Water"],
        ["Damage Spike", "Defeat 3 Enemies with a Single Spike"],
        ["Did I Do That?", "Defeat 10 Enemies using Environmental Hazards"],
        ["Shardless", "Beat the Game Without Equipping a Shard"],
        ["Lightless", "Beat the Game Without Spending any Spirit Light"],
        ["Look at the Time", "Complete the Game in Under 4 Hours"],
        ["Immortal", "Complete the Game without Dying"]
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Close Call", "Take the Bug by the Horn", "Laser Brain", "Home Sweet Home",
        "Let the Waters Flow", "Icy Escape", "Dark Triumph", "Guardian's Rest",
        "Quick Sand", "Stone Cold", "Untouchable", "Timely Demise"
    ]);

    const dataPairs = oriWisps.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const closeCall = oriWisps.achievements.find(a => a.apiname === "1");
    const bug = oriWisps.achievements.find(a => a.apiname === "3");
    const laserBrain = oriWisps.achievements.find(a => a.apiname === "4");
    const homeSweetHome = oriWisps.achievements.find(a => a.apiname === "7");
    const waters = oriWisps.achievements.find(a => a.apiname === "8");
    const icyEscape = oriWisps.achievements.find(a => a.apiname === "9");
    const darkTriumph = oriWisps.achievements.find(a => a.apiname === "10");
    const guardiansRest = oriWisps.achievements.find(a => a.apiname === "11");
    const quickSand = oriWisps.achievements.find(a => a.apiname === "12");
    const stoneCold = oriWisps.achievements.find(a => a.apiname === "13");
    const untouchable = oriWisps.achievements.find(a => a.apiname === "30");
    const timelyDemise = oriWisps.achievements.find(a => a.apiname === "31");

    assert.ok(closeCall && closeCall.name === "Close Call" && closeCall.description.length > 0);
    assert.ok(bug && bug.name === "Take the Bug by the Horn" && bug.description.length > 0);
    assert.ok(laserBrain && laserBrain.name === "Laser Brain" && laserBrain.description.length > 0);
    assert.ok(homeSweetHome && homeSweetHome.name === "Home Sweet Home" && homeSweetHome.description.length > 0);
    assert.ok(waters && waters.name === "Let the Waters Flow" && waters.description.length > 0);
    assert.ok(icyEscape && icyEscape.name === "Icy Escape" && icyEscape.description.length > 0);
    assert.ok(darkTriumph && darkTriumph.name === "Dark Triumph" && darkTriumph.description.length > 0);
    assert.ok(guardiansRest && guardiansRest.name === "Guardian's Rest" && guardiansRest.description.length > 0);
    assert.ok(quickSand && quickSand.name === "Quick Sand" && quickSand.description.length > 0);
    assert.ok(stoneCold && stoneCold.name === "Stone Cold" && stoneCold.description.length > 0);
    assert.ok(untouchable && untouchable.name === "Untouchable" && untouchable.description.length > 0);
    assert.ok(timelyDemise && timelyDemise.name === "Timely Demise" && timelyDemise.description.length > 0);

});
