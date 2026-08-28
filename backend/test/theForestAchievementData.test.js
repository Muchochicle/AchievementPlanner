import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-forest.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242760 (fetched through this app's own services/steamApi.js) - 39 of 45 ship a real, official Steam description. The six hidden
// achievements (Bad father, You should be looking for Timmy, Daily
// Grind, Gross!, Make It Rain, Big Spender) ship no Steam description;
// their conditions here are curatorial, sourced from Steam Community
// 100% guides and PSNProfiles.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const theForest = getPlannerData("the-forest");

test("getPlannerData('the-forest') returns real planner data with 45 curated achievements", () => {

    assert.ok(theForest, "expected real planner data for the-forest");
    assert.ok(Array.isArray(theForest.achievements));
    assert.strictEqual(theForest.achievements.length, 45);

});

test("every The Forest achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = theForest.achievements.map(a => a.id);
    const apinames = theForest.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every The Forest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of theForest.achievements) {

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

test("every one of the 39 officially-described The Forest achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Minor Cannibalism", "Eat an enemy"],
        ["Major Cannibalism", "Eat an entire family"],
        ["Be Nice", "Share a food or drink item in MP"],
        ["Be Extremely Nice", "Share a weapon in MP"],
        ["Crafty", "Craft all items"],
        ["Trophy Hunter", "Kill all animal types and display heads"],
        ["Green Thumb", "Grow all plant types"],
        ["Vegan", "Play through entire game without killing or eating animals. Alone in Single Player or together in Multiplayer."],
        ["Naturopath", "Craft 10 medicine items"],
        ["5 Star Hotel", "Sleep on yacht"],
        ["Spelunker", "Explore all caves"],
        ["First Responder", "Revive one co-op player"],
        ["Medic", "Revive 10 co-op players"],
        ["Boy Scout", "Use the compass"],
        ["Camp Out", "Sleep with another player (group sleep)"],
        ["Splatter", "Killed downed enemy with rock"],
        ["Longest Wall", "Build a super long wall"],
        ["Choppy Chop", "Chop up 50 bodies"],
        ["Unseen", "Make and wear stealth armour"],
        ["Commercial Fisherman", "Kill 6 or more fish with a stick of dynamite. Alone in Single Player or together in Multiplayer."],
        ["Survive The Forest", "Finish Game"],
        ["Serial Killer", "In Single Player, kill 100 cannibals"],
        ["Get Closure", "Find all missing passengers"],
        ["Bite me!", "Kill shark. Alone in Single Player or together in Multiplayer."],
        ["Monster", "Kill a bunny. Alone in Single Player or together in Multiplayer."],
        ["Gabe Fan", "Collect all cassette tapes!"],
        ["First Night", "Survive 1 night"],
        ["You are a fun guy", "Eat all mushroom types"],
        ["Survivalist", "Survive 5 nights"],
        ["Birdseye", "Kill bird with arrow"],
        ["Step Master", "Pass 50,000 steps"],
        ["Demolition Man ", "Set off 20 bombs"],
        ["Handyman", "Repair a shelter"],
        ["Good Father", "Collect all robot pieces "],
        ["Climate Change", "Cut down 100 trees"],
        ["Don't Save The Forest", "Cut down 1000 trees"],
        ["Pacifist", "In Single Player, don't kill any cannibals for more than 10 days in a row"],
        ["Demolition Expert", "Knock down 6 or more trees with 1 explosive. Alone in Single Player or together in Multiplayer."],
        ["Fisherman", "Catch fish with a trap. Alone in Single Player or together in Multiplayer."]
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH_BAD_FATHER",
        "ACH_BUILD_GAZEBO",
        "ACH_DRINK_COFFEE",
        "ACH_GROSS_DRINK",
        "ACH_SPRINKLERS",
        "ACH_VENDING_MACHINES"
    ]);

    assert.strictEqual(hiddenApinames.size, 6, "sanity check - The Forest has 6 hidden achievements");

    const dataPairs = theForest.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 hidden The Forest achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_BAD_FATHER", "Bad father"],
        ["ACH_BUILD_GAZEBO", "You should be looking for Timmy"],
        ["ACH_DRINK_COFFEE", "Daily Grind"],
        ["ACH_GROSS_DRINK", "Gross!"],
        ["ACH_SPRINKLERS", "Make It Rain"],
        ["ACH_VENDING_MACHINES", "Big Spender"]
    ];

    assert.strictEqual(names.length, 6, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = theForest.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
