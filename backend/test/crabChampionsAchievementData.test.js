import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crab-champions.json - 109 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 774801 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crab-champions");

test("getPlannerData('crab-champions') returns real planner data with 109 curated achievements", () => {

    assert.ok(game, "expected real planner data for crab-champions");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 109);

});

test("every Crab Champions achievement has a unique id from 1 to 109 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 109 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 109);
    assert.strictEqual(new Set(apinames).size, 109);

});

test("every Crab Champions achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 109 Crab Champions achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" Blade Launcher Master I", "Get a win with the Blade Launcher on any difficulty"],
        [" Blade Launcher Master II", "Get a win with the Blade Launcher on Ruby or higher difficulty"],
        ["Air Strike Master I", "Get a win with the Air Strike on any difficulty"],
        ["Air Strike Master II", "Get a win with the Air Strike on Ruby or higher difficulty"],
        ["Arcade Champion", "Get a high score of at least 300 in the Arcade minigame"],
        ["Arcane Wand Master I", "Get a win with the Arcane Wand on any difficulty"],
        ["Arcane Wand Master II", "Get a win with the Arcane Wand on Ruby or higher difficulty"],
        ["Auto Rifle Master I", "Get a win with the Auto Rifle on any difficulty"],
        ["Auto Rifle Master II", "Get a win with the Auto Rifle on Ruby or higher difficulty"],
        ["Auto Shotgun Master I", "Get a win with the Auto Shotgun on any difficulty"],
        ["Auto Shotgun Master II", "Get a win with the Auto Shotgun on Ruby or higher difficulty"],
        ["Big Spender", "Make 100 purchases at shops in a single run"],
        ["Black Hole Master I", "Get a win with the Black Hole on any difficulty"],
        ["Black Hole Master II", "Get a win with the Black Hole on Ruby or higher difficulty"],
        ["Burst Pistol Master I", "Get a win with the Burst Pistol on any difficulty"],
        ["Burst Pistol Master II", "Get a win with the Burst Pistol on Ruby or higher difficulty"],
        ["Challenger I", "Get a win with 5 or more red difficulty modifiers and 0 green difficulty modifiers active"],
        ["Challenger II", "Get a win with 10 or more red difficulty modifiers and 0 green difficulty modifiers active"],
        ["Challenger III", "Get a win with all red difficulty modifiers and 0 green difficulty modifiers active"],
        ["Claw Master I", "Get a win with the Claw on any difficulty"],
        ["Claw Master II", "Get a win with the Claw on Ruby or higher difficulty"],
        ["Cluster Launcher Master I", "Get a win with the Cluster Launcher on any difficulty"],
        ["Cluster Launcher Master II", "Get a win with the Cluster Launcher on Ruby or higher difficulty"],
        ["Crab Champion I", "Get a win on any difficulty"],
        ["Crab Champion II", "Get 3 wins total on Sapphire or higher difficulty"],
        ["Crab Champion III", "Get 5 wins total on Ruby or higher difficulty"],
        ["Crab Legend", "Complete all challenges"],
        ["Crossbow Master I", "Get a win with the Crossbow on any difficulty"],
        ["Crossbow Master II", "Get a win with the Crossbow on Ruby or higher difficulty"],
        ["Dagger Master I", "Get a win with the Dagger on any difficulty"],
        ["Dagger Master II", "Get a win with the Dagger on Ruby or higher difficulty"],
        ["Diamond", "Reach Diamond account rank"],
        ["Dual Pistol Master I", "Get a win with the Dual Pistols on any difficulty"],
        ["Dual Pistol Master II", "Get a win with the Dual Pistols on Ruby or higher difficulty"],
        ["Dual Shotgun Master I", "Get a win with the Dual Shotguns on any difficulty"],
        ["Dual Shotgun Master II", "Get a win with the Dual Shotguns on Ruby or higher difficulty"],
        ["Electro Globe Master I", "Get a win with the Electro Globe on any difficulty"],
        ["Electro Globe Master II", "Get a win with the Electro Globe on Ruby or higher difficulty"],
        ["Emerald", "Reach Emerald account rank"],
        ["EZ", "Defeat a boss in under 10 seconds"],
        ["Flamethrower Master I", "Get a win with the Flamethrower on any difficulty"],
        ["Flamethrower Master II", "Get a win with the Flamethrower on Ruby or higher difficulty"],
        ["Flawless", "Get a win on Gold or higher difficulty without taking any damage"],
        ["Flex I", "Defeat an elite without taking any damage"],
        ["Flex II", "Defeat a boss without taking any damage"],
        ["Flex III", "Clear the first biome on Ruby or higher difficulty without taking any damage"],
        ["Frugal", "Get a win on Gold or higher difficulty with 5 or less shop purchases"],
        ["Gold", "Reach Gold account rank"],
        ["Grappling Hook Master I", "Get a win with the Grappling Hook on any difficulty"],
        ["Grappling Hook Master II", "Get a win with the Grappling Hook on Ruby or higher  difficulty"],
        ["Greedy", "Defeat a boss with at least 5 greed perks in your inventory"],
        ["Grenade Master I", "Get a win with the Grenade on any difficulty"],
        ["Grenade Master II", "Get a win with the Grenade on Ruby or higher difficulty"],
        ["Gunslinger", "Get a win with all weapons in the game"],
        ["Hammer Master I", "Get a win with the Hammer on any difficulty"],
        ["Hammer Master II", "Get a win with the Hammer on Ruby or higher difficulty"],
        ["Holdout Champion", "Get a high score of at least 50 in the Holdout minigame"],
        ["Ice Blast Master I", "Get a win with the Ice Blast on any difficulty"],
        ["Ice Blast Master II", "Get a win with the Ice Blast on Ruby or higher difficulty"],
        ["Ice Staff Master I", "Get a win with the Ice Staff on any difficulty"],
        ["Ice Staff Master II", "Get a win with the Ice Staff on Ruby or higher difficulty"],
        ["Katana Master I", "Get a win with the Katana on any difficulty"],
        ["Katana Master II", "Get a win with the Katana on Ruby or higher difficulty"],
        ["Laser Beam Master I", "Get a win with the Laser Beam on any difficulty"],
        ["Laser Beam Master II", "Get a win with the Laser Beam on Ruby or higher difficulty"],
        ["Laser Cannons Master I", "Get a win with the Laser Cannons on any difficulty"],
        ["Laser Cannons Master II", "Get a win with the Laser Cannons on Ruby or higher  difficulty"],
        ["Lightning Scepter Master I", "Get a win with the Lightning Scepter on any difficulty"],
        ["Lightning Scepter Master II", "Lightning Scepter on Ruby or higher difficulty"],
        ["Looper", "Get a win after looping at least once"],
        ["Marathon", "Survive until island 100"],
        ["Marksman Rifle Master I", "Get a win with the Marksman Rifle on any difficulty"],
        ["Marksman Rifle Master II", "Get a win with the Marksman Rifle on Ruby or higher difficulty"],
        ["Master", "Get 2 wins in a row on Prismatic difficulty"],
        ["Maxed Out", "Fill all mod and perk slots in your inventory during a single run"],
        ["Millionaire", "Get a win with over 1M unspent crystals in your inventory"],
        ["Minigun Master I", "Get a win with the Minigun on any difficulty"],
        ["Minigun Master II", "Get a win with the Minigun on Ruby or higher difficulty"],
        ["Orb Launcher Master I", "Get a win with the Orb Launcher on any difficulty"],
        ["Orb Launcher Master II", "Get a win with the Orb Launcher on Ruby or higher difficulty"],
        ["Pickaxe Master I", "Get a win with the Pickaxe on any difficulty"],
        ["Pickaxe Master II", "Get a win with the Pickaxe on Ruby or higher  difficulty"],
        ["Playing With Power", "Level up a mod or perk to level 20 in a single run"],
        ["Poison Cannon Master I", "Get a win with the Poison Cannon on any difficulty"],
        ["Poison Cannon Master II", "Get a win with the Poison Cannon on Ruby or higher difficulty"],
        ["Prismatic", "Reach Prismatic account rank"],
        ["Pro", "Get 3 wins in a row on Ruby or higher difficulty"],
        ["Recycler", "Salvage 100 pickups in a single run"],
        ["Rocket Launcher Master I", "Get a win with the Rocket Launcher on any difficulty"],
        ["Rocket Launcher Master II", "Get a win with the Rocket Launcher on Ruby or higher difficulty"],
        ["Roller", "Reroll shops 50 times in a single run"],
        ["Ruby", "Reach Ruby account rank"],
        ["Sapphire", "Reach Sapphire account rank"],
        ["Seagle Master I", "Get a win with the Seagle on any difficulty"],
        ["Seagle Master II", "Get a win with the Seagle on Ruby or higher difficulty"],
        ["Silver", "Reach Silver account rank"],
        ["Skilled", "Get 3 wins in a row on any difficulty"],
        ["Slice And Dice", "Get a win without firing your weapon"],
        ["Sniper Master I", "Get a win with the Sniper on any difficulty"],
        ["Sniper Master II", "Get a win with the Sniper on Ruby or higher difficulty"],
        ["Solid Gold", "Fill 20 weapon mod slots with legendary weapon mods"],
        ["Speedrun I", "Clear island 21 in 16 minutes or less"],
        ["Speedrun II", "Clear island 56 in 40 minutes or less"],
        ["Speedrun III", "Clear island 140 in 70 minutes or less"],
        ["Tank", "Get 10000 max health on a single run"],
        ["Ultra Chaos Champion", "Get a win with all red difficulty modifiers, no green difficulty modifiers and the Random Loadout flex difficulty modifier active"],
        ["Ultra Damage", "Deal over 100K damage in a single shot"],
        ["Unstoppable", "Get a win with over 7500 eliminations"],
        ["Vandal", "Destroy 25 totems in a single run"],
    ];

    assert.strictEqual(officialAchievements.length, 109, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
