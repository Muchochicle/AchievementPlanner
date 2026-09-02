import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/islets.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1669420 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("islets");

test("getPlannerData('islets') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for islets");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Islets achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Islets achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Islets achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["9 Lives and 8 Knives", "Defeat the Buried Beast"],
        ["A Better Bucket", "Upgrade your Airship"],
        ["A Little Stronger", "Collect an Upgrade"],
        ["A Sky Tail", "Defeat MechaRat"],
        ["A Swampy Situation", "Defeat Swamp Frog"],
        ["All in a Row", "Complete Boss Rush"],
        ["All Mapped Out", "Buy Upgrade Markers"],
        ["An Old Friend", "Visit the Forgotten Grave's Spirit"],
        ["Back to Life", "Reverse the Stone Witch's Curse"],
        ["Behind the Mask", "Defeat GutGhoul"],
        ["Boney Battle", "Defeat BoneGolem"],
        ["Burning Bridges", "Defeat FilthPest"],
        ["Can't Touch This", "Beat a Boss With Full Health"],
        ["Coming to Grips", "Defeat GrappleBot"],
        ["Exterminator", "Defeat Defender Unit"],
        ["Feeling Stronger", "Upgrade your Health"],
        ["Fully Equipped", "Collect all 60 Upgrades"],
        ["Getting Thirsty", "Find a hidden nook"],
        ["Grave Danger", "Defeat the Forgotten Grave"],
        ["Halfway There", "Collect 30 Upgrades"],
        ["Keeping Up with Friends", "Open a Post Box"],
        ["Loving the Rain", "Find both hiding spots in Rainy Plains"],
        ["Make it out Alive", "Complete Boss Rush Without Dying"],
        ["Paying Your Dues", "Open All 5 Paid Gates"],
        ["Pins in the Map", "Buy Map Markers"],
        ["Pretty Tough!", "Collect 10 Upgrades"],
        ["Robot Rampage", "Defeat Rogue Bot"],
        ["Root of Evil", "Defeat Grave Crawler"],
        ["Sharper Arrows", "Upgrade your Arrow Strength"],
        ["Sharpest Arrows", "Reach an Arrow Strength of 10"],
        ["Shrine Bright", "Buy the Shrine Shifter"],
        ["Something's fishy...", "Defeat the Sky Pirates"],
        ["Stone Cold Witch", "Defeat the Stone Witch"],
        ["Strengthened Sword", "Upgrade your Sword Strength"],
        ["Strongest Sword", "Reach a Sword Strength of 10"],
        ["The Mystery Beyond", "Open the Final Gate"],
        ["The Pits", "Fall into the Deadly Pit of Recently Escaped Spirits"],
        ["The Toughest Warrior", "Beat Boss Rush on Hard Difficulty"],
        ["Ticking Timebomb", "Defeat the ClockMaker"],
        ["Top of the Line", "Upgrade your Airship Again"],
        ["Tour Trouble", "Defeat the Tomb of 1000 Spirits"],
        ["Tulip Tussle", "Defeat the Runaway Plant"],
        ["Turning a New Leaf", "Visit Snoots Shop"],
        ["X Marks the Spot", "Complete the Scavenger Hunt"],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
