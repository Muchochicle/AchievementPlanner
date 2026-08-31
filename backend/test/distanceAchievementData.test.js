import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/distance.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 233610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("distance");

test("getPlannerData('distance') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for distance");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Distance achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Distance achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Distance achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced Driver", "Get a silver medal on a track"],
        ["Adventurer", "Finish the Adventure campaign"],
        ["Better than Sliced Bread", "Slice off all wheels"],
        ["Big Bother", "Break a camera drone's screen"],
        ["Blast from the Past", "Finish the Lost To Echoes campaign"],
        ["Cheat the System", "Beat a Trackmogrify track in less than 10 seconds"],
        ["Down But Not Out", "Narrowly miss the kill grid then hit a checkpoint"],
        ["Driving Ace", "Get a diamond medal on a track"],
        ["Expert Driver", "Get a gold medal on a track"],
        ["Gold Collector", "Get Gold medals on all Adventure levels in Sprint"],
        ["Grounded Departure", "Finish Entanglement without wings"],
        ["Keymaster", "Unlock all official levels"],
        ["Meet your Rival", "Finish an online match"],
        ["Millionaire", "Earn 5,000,000 lifetime eV"],
        ["Moving Forward", "Finish Cataclysm in the Adventure campaign"],
        ["Ninja in Training", "Complete a wall ride of 250 meters or more"],
        ["Pumpkin King", "Break all pumpkins in Spooky Town"],
        ["Rampage", "Break apart 15 street lights in a level"],
        ["Self-Termination", "Press the Reset button for the car"],
        ["Six Figures", "Land a trick over 100,000 eV"],
        ["Speed Runner", "Finish the Adventure campaign in 1 hour"],
        ["Split Personality", "Get sliced by a laser"],
        ["Still Alive", "Complete Overload without dying"],
        ["The Long Grind", "Complete a grind of 250 meters or more"],
        ["The Other Side", "Find all the hidden crabs in the Lost to Echoes campaign (one per track) to unlock the secret map 'The Other Side', then complete it."],
        ["Trackmogrifier", "Play a Trackmogrify track"],
        ["Vendor Bender", "Find pieces from the past in Lost to Echoes"],
        ["Welcome to the Family", "Play a Workshop level"],
        ["Wordsmith", "Discover 10 keywords in Trackmogrify"],
        ["World Traveler", "Complete 10 Workshop maps"],
        ["Worthy", "Find and complete the secret routes within the 'The Other Side' level."],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
