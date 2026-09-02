import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fuga-melodies-of-steel.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1357860 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fuga-melodies-of-steel");

test("getPlannerData('fuga-melodies-of-steel') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for fuga-melodies-of-steel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Fuga: Melodies of Steel achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Fuga: Melodies of Steel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Fuga: Melodies of Steel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Real Friend", "Save an ally who falls into despair in Chapter 11 by building Britz's affection high enough before the end of Chapter 10."],
        ["Ace", "Reached level 25 with a character."],
        ["Badge of the Hero", "Won an elite battle."],
        ["Comic Collector", "Obtained all comic pages."],
        ["Completion of Intelligence", "Obtained information on 30 locations from the observation room."],
        ["Conversationalist", "Raised affinity to level 3 with an ally."],
        ["Cooking Enthusiast", "Succeeded at cooking."],
        ["Engineering Enthusiast", "Successfully made an upgrade."],
        ["Evenings Lit by the Burning Coals", "Cleared Chapter 5."],
        ["Expert Angler", "Scrap fished 50 times."],
        ["Expert Team", "Reached level 50 with all characters."],
        ["Explorer Enthusiast", "Went exploring."],
        ["Explorer Expert", "Attained S rank in exploration 10 times."],
        ["Farming Enthusiast", "Harvested 200 items from the farm."],
        ["Fishing Enthusiast", "Succeeded at scrap fishing."],
        ["Forgotten Songs", "Cleared Chapter 11."],
        ["From Dawn to Noon on the Sea", "Cleared Chapter 12."],
        ["Gardening Enthusiast", "Harvested the farm."],
        ["Honest Effort", "Reached level 50 with a character."],
        ["Laundry Enthusiast", "Succeeded at the laundry."],
        ["Legendary Hero", "Won 10 elite battles."],
        ["Link Attacker", "Used a link attack."],
        ["Little Veteran", "Attained S rank in battle 50 times."],
        ["Moon Descends Upon the Temple that Once Was", "Cleared Chapter 7."],
        ["Night Without End", "Cleared Chapter 1."],
        ["One Small Step", "Won a battle."],
        ["Perfect Facility", "Expanded all facilities to the max level."],
        ["Perfect Harmony", "Beat the final boss with all 12 children alive, then pick 'We swear on our tails, we'll never give up!' - this requires never firing the Soul Cannon outside its mandatory tutorial."],
        ["Perfect Player", "Unlocked all achievements."],
        ["Prankster", "Delayed the enemy 100 times."],
        ["Prelude to the Afternoon of a Faun", "Cleared Chapter 6."],
        ["Serenade for the Doll", "Cleared Chapter 4."],
        ["Shared Destiny", "Raised affinity to level 10 with 30 pairs."],
        ["Skilled Craftsman", "Fully upgraded something."],
        ["Sleep Well, Grow Up Healthy", "Relieved status ailments by sleeping in the dormitory."],
        ["Soothing Nature", "Revitalized a depressed ally."],
        ["Steady Enhancement", "Expanded a facility."],
        ["The Council of the False Gods", "Cleared Chapter 10."],
        ["The Morning Rain", "Cleared Chapter 2."],
        ["The Wind in the Plain", "Cleared Chapter 8."],
        ["The Wounded Laurel", "Cleared Chapter 9."],
        ["True Bonds", "Raised affinity to level 10 with an ally."],
        ["Two Arabesques", "Cleared Chapter 3."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
