import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stardew-valley.json - 49 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 413150 (fetched through this app's own services/steamApi.js) -
// 47 of 49 ship a real, official Steam description. Legend and Fector's
// Challenge are hidden achievements Steam never describes publicly
// (confirmed via the same API call) - their descriptions here are
// curatorial summaries of their real, community-documented unlock
// conditions (cross-checked against TrueAchievements' independent
// documentation). difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const stardew = getPlannerData("stardew-valley");

test("getPlannerData('stardew-valley') returns real planner data with 49 curated achievements", () => {

    assert.ok(stardew, "expected real planner data for stardew-valley");
    assert.ok(Array.isArray(stardew.achievements));
    assert.strictEqual(stardew.achievements.length, 49);

});

test("every Stardew Valley achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = stardew.achievements.map(a => a.id);
    const apinames = stardew.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Stardew Valley achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of stardew.achievements) {

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

test("every one of the 47 officially-described Stardew Valley achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // Legend and Fector's Challenge (the 2 hidden achievements) are
    // excluded here - Steam never exposes a public description for
    // them - and covered by their own dedicated test below instead.
    const officialAchievements = [
        ["Greenhorn", "Earn 15,000g"],
        ["Cowpoke", "Earn 50,000g"],
        ["Homesteader", "Earn 250,000g"],
        ["Millionaire", "Earn 1,000,000g"],
        ["A Complete Collection", "Complete the museum collection."],
        ["A New Friend", "Reach a 5-heart friend level with someone."],
        ["Best Friends", "Reach a 10-heart friend level with someone."],
        ["The Beloved Farmer", "Reach a 10-heart friend level with 8 people."],
        ["Cliques", "Reach a 5-heart friend level with 4 people."],
        ["Networking", "Reach a 5-heart friend level with 10 people."],
        ["Popular", "Reach a 5-heart friend level with 20 people."],
        ["Cook", "Cook 10 different recipes."],
        ["Sous Chef", "Cook 25 different recipes."],
        ["Gourmet Chef", "Cook every recipe."],
        ["Moving Up", "Upgrade your house."],
        ["Living Large", "Upgrade your house to the maximum size."],
        ["D.I.Y.", "Craft 15 different items."],
        ["Artisan", "Craft 30 different items."],
        ["Craft Master", "Craft every item."],
        ["Fisherman", "Catch 10 different fish."],
        ["Ol' Mariner", "Catch 24 different fish."],
        ["Master Angler", "Catch every fish."],
        ["Mother Catch", "Catch 100 fish."],
        ["Treasure Trove", "Donate 40 different items to the museum."],
        ["Gofer", "Complete 10 'Help Wanted' requests."],
        ["A Big Help", "Complete 40 'Help Wanted' requests."],
        ["Polyculture", "Ship 15 of each crop."],
        ["Monoculture", "Ship 300 of one crop."],
        ["Full Shipment", "Ship every item."],
        ["Prairie King", "Beat 'Journey Of The Prairie King'."],
        ["The Bottom", "Reach the lowest level of the mines."],
        ["Local Legend", "Restore the Pelican Town Community Center."],
        ["Joja Co. Member Of The Year", "Become a Joja Co. member and purchase all the community development perks."],
        ["Mystery Of The Stardrops", "Find every stardrop."],
        ["Full House", "Get married and have two kids."],
        ["Singular Talent", "Reach level 10 in a skill."],
        ["Master Of The Five Ways", "Reach level 10 in every skill."],
        ["Protector Of The Valley", "Complete all of the Adventure Guild Monster Slayer goals."],
        ["Well-Read", "Read every book."],
        ["Two Thumbs Up", "See a movie."],
        ["Blue Ribbon", "Get 1st place in the Stardew Valley Fair competition."],
        ["An Unforgettable Soup", "Delight the Governor."],
        ["Good Neighbors", "Help your forest neighbors grow their family."],
        ["Danger In The Deep", "Reach the bottom of the 'dangerous' mines."],
        ["Infinite Power", "Obtain the most powerful weapon."],
        ["Perfection", "Reach the summit."],
        ["A Distant Shore", "Reach Ginger Island."]
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Legend", "Fector's Challenge"]);

    const dataPairs = stardew.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 2 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const legend = stardew.achievements.find(a => a.apiname === "4");
    const fector = stardew.achievements.find(a => a.apiname === "Achievement_FectorsChallenge");

    assert.ok(legend && legend.name === "Legend" && legend.description.length > 0);
    assert.ok(fector && fector.name === "Fector's Challenge" && fector.description.length > 0);

});
