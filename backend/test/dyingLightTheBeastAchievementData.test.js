import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dying-light-the-beast.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3008130 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dying-light-the-beast");

test("getPlannerData('dying-light-the-beast') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for dying-light-the-beast");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Dying Light: The Beast achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Dying Light: The Beast achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Dying Light: The Beast achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And Don't Forget to Wash Your Hands", "Collect all 8 podcasts."],
        ["And Then There Was Light", "Activate all transformer stations"],
        ["Apex Predator", "Kill a Volatile."],
        ["Beast's Dowry", "Get an Iconic Weapon"],
        ["Better Be Safe", "Complete all Safe Zones and Safe Spots in Restored Land Mode"],
        ["Blacksmith", "Repair your weapons 50 times"],
        ["Cabinet of Curiosities", "Find all collectibles"],
        ["Craftsman", "Upgrade all blueprints to their maximum"],
        ["Craftsman's Apprentice", "Install your first weapon mod"],
        ["Crane on a Monument", "Reach the vantage point atop the Hill of Heroes memorial."],
        ["Enhanced Telepathy", "Reached at a later point in the main story."],
        ["Experiment on the Loose", "Defeat your first Chimera."],
        ["Family Picture", "Collect both Fischer family clippings."],
        ["Firefighter", "Kill 112 enemies with the flamethrower"],
        ["Free at Last", "Escape from the Baron's bunker."],
        ["Glimpse into the Future", "Complete the main story"],
        ["Good Samaritan", "Complete all side quests"],
        ["Gunslinger", "Do 6 headshots with a revolver within 20 seconds"],
        ["Hexakosioihexekontahexa ", "Kill 666 enemies using your beast-like powers"],
        ["Hoarder", "Complete all Dark Zones and Convoys in Restored Land Mode"],
        ["I am The Alpha now", "Kill the Alpha Volatile."],
        ["I Still Don't Approve of Mindless Fun", "Kill 500 zombies with your vehicle"],
        ["Iconic", "Kill an enemy using a Dropkick"],
        ["Know What 'Castor' Means?", "Collect all 11 Beaver collectibles."],
        ["Kylin McCrane", "Win gold in all of Travis's races."],
        ["Largo Embargo", "Discover the Baron's sabotage."],
        ["Less Obedient", "Reached at a later point in the main story."],
        ["New Friends", "Save the survivors at town hall."],
        ["Peace Bringer", "Reclaim all the regions of Castor Woods in Restored Land Mode"],
        ["Pushing Through", "Complete the 'Vengeance is Mine' quest in Restored Land Mode."],
        ["Second Ascent", "Finish the game in NewGame+ mode"],
        ["Sunday Morning Run", "Run at least 10,000 meters"],
        ["The Fearless Samaritan", "Complete all Side Quests in Restored Land Mode"],
        ["The Legend Dawns", "Spend your first Legend Point"],
        ["The Nightmare is over", "Complete the story on Nightmare difficulty"],
        ["There You Are!", "Capture 'The Beast'."],
        ["True Survivor", "Complete the story in Restored Land Mode"],
        ["Ultimate Beast", "Fully unlock your inner beast"],
        ["Ultimate Survivor", "Fully regain your survival skills"],
        ["Unbeatable", "Complete the story in Restored Land Mode with the One Life option turned on"],
        ["We're Safe Here!", "Activate all safe zones"],
        ["What Happened at the Asylum", "Collect all 6 Asylum files."],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
