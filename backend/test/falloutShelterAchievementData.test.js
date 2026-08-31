import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fallout-shelter.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 588430 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fallout-shelter");

test("getPlannerData('fallout-shelter') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for fallout-shelter");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Fallout Shelter achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Fallout Shelter achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Fallout Shelter achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Better Future, Underground", "Upgrade 20 Rooms to Level 3"],
        ["A Little off the Top", "Change the appearance of 10 NPCs in the Barbershop"],
        ["A Vault For My Vault", "Collect 10,000 Caps"],
        ["Armed and Dangerous", "Collect 20 Legendary weapons"],
        ["Atom Splitter", "Merged 3 Power Rooms"],
        ["Better Settler", "Level up a Dweller from 1 to Level 10"],
        ["Big Pharma", "Collect 100 Stimpacks and 100 Radaway on Quests"],
        ["Blast From The Past", "Collect 20 Legendary Dwellers"],
        ["Decorator", "Collect all Pieces of 4 Themes"],
        ["Dine and Dash", "Merged 3 Food Rooms"],
        ["Enemy of the Wastes", "Kill 500 enemies on Quests"],
        ["Fashion Statement", "Collect 20 Legendary outfits"],
        ["Fashionista", "Craft 10 Outfits"],
        ["Get Off My Lawn", "Successfully stop 50 Raider Attacks"],
        ["Hard Work is Happy Work", "Successfully complete 50 Room Rushes"],
        ["Higher and Higher", "Level up a Dweller to level 25"],
        ["Home Sweet Home", "Build 1 of every room type"],
        ["Interior Designer", "Craft 1 of every room theme"],
        ["Legend of the Wastes", "Complete 100 Quests"],
        ["Mattress Stuffer", "Collect 1000 Caps"],
        ["More than Handy", "Craft an Outfit, a Weapon and a Theme"],
        ["Overachieve Much?", "Complete 100 objectives"],
        ["Overseer", "Level up a Dweller to level 50"],
        ["Paint ‘n Elbow Grease", "Collect all Pieces of 1 Theme"],
        ["Prepared For The Future", "Make 25 babies"],
        ["Project Purity", "Merged 3 Water Rooms"],
        ["Scraptastic", "Scrap 500 items"],
        ["Smooth Talker", "Make 25 Dialogue Choices in Quests"],
        ["Survivalist", "Complete 60 Quests"],
        ["Urban Ranger", "Complete 30 Quests"],
        ["Vault-Tec Architect", "Build 25 rooms"],
        ["Vault-Tec Engineer", "Build 50 rooms"],
        ["Wasteland Wanderer", "Complete 10 Quests"],
        ["Weaponsmith", "Craft 10 Weapons"],
        ["You're Fired!", "Kill 10 Quest Bosses"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
