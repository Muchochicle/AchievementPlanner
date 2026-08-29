import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/necesse.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1169040 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 51 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("necesse");

test("getPlannerData('necesse') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for necesse");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Necesse achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Necesse achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Necesse achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Adventure Begins!", "Reach the first major story objective"],
        ["Artificer", "Enchant an item using the mage"],
        ["Cloud Nine", "Have a settler reach Unrivaled Quality of Life level"],
        ["Cloud Ten", "Achieve Unrivaled Quality of Life on 10 settlers at the same time"],
        ["Companion For Adventure", "Get your first pet"],
        ["Complete Collector", "Obtain all possible items"],
        ["Complete Host", "Have all possible settler professions live in the same settlement"],
        ["Crystallized", "Reach the full potential of the Ruby or Amethyst set"],
        ["Demolition Expert", "Kill an enemy with a bomb"],
        ["Do It Yourself", "Start a settlement"],
        ["Dodge This!", "Defeat the Fallen Wizard while 5 Fallen Dragons are alive"],
        ["Double Catch", "Catch 2 fish in 1 throw"],
        ["Empowered", "Upgrade and equip a full set of Tier 5 armor"],
        ["Expansionist", "Have a fully upgraded settlement size"],
        ["Feeling Stylish", "Get a new look from the Stylist"],
        ["First of Many", "Defeat your first boss"],
        ["Getting Hot", "Reach the deep caves"],
        ["Grave Digger", "Find and dig up a gravestone"],
        ["Headhunter", "Recruit your first settler"],
        ["Hoarder", "Have an inventory full of different items"],
        ["Home Alone", "Kill a raider with a trap"],
        ["Hot Tub", "Swim in lava while under the effect of fire resistance"],
        ["Instant Nap", "Change your spawn point"],
        ["Magical Drop", "Increase max trinket slots"],
        ["Marathon Runner", "Run a full marathon on foot"],
        ["Master of Sun and Moon", "Defeat Sunlight Champion and Moonlight Dancer at Tier 5 or higher"],
        ["Me and this Army!", "Defeat an incursion boss with only damage from settlers"],
        ["More Than A Hobby", "Fish up a total of 500 items"],
        ["My Jam", "Listen to a vinyl on the music player"],
        ["One Tapped", "Kill a Zombie in a single hit"],
        ["Overpowered", "Upgrade and equip a full set of Tier 10 armor"],
        ["Rematch", "Defeat the Fallen Wizard"],
        ["Restored Reality", "Find and defeat the final boss"],
        ["Rich Character", "Recruit a Settler with 6 or more personalities"],
        ["Safety Last", "Take damage from a bundle of TNT"],
        ["Secret Service", "Have only 2 guards in your adventure party, both wearing sunglasses, blazer and dress shoes"],
        ["Self Proclaimed", "Wear a gold crown"],
        ["Settling Down", "Upgrade your settlement size"],
        ["Speeding Ticket", "Achieve MAXIMUM speed while driving a Bumper Car"],
        ["Spelunker", "Be careful to not get lost!"],
        ["Take it to the next level", "Complete an incursion"],
        ["Teamwork", "Have a settler join your adventure party"],
        ["That's a lot of dust!", "Have 40 perks active in a single Fallen Altar at a time"],
        ["Time Well Spent", "Play the game for a full 24 hours"],
        ["Too Easy", "Kill a boss in less than 30 seconds"],
        ["Tourist", "Visit all different biomes"],
        ["True Love", "Become Life Partners with one of your Settlers"],
        ["Wardrobe on the go!", "Get access to 4 item sets"],
        ["Washed Up", "Defeat the Pirate Captain"],
        ["Watch Me!", "Equip your first trinket ability"],
        ["You and what Army?", "Have 10 settlers in your adventure party equip a tier 5 or higher armor set and weapon"],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
