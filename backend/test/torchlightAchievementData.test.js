import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/torchlight.json - 66 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 41500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("torchlight");

test("getPlannerData('torchlight') returns real planner data with 66 curated achievements", () => {

    assert.ok(game, "expected real planner data for torchlight");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 66);

});

test("every Torchlight achievement has a unique id from 1 to 66 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 66 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 66);
    assert.strictEqual(new Set(apinames).size, 66);

});

test("every Torchlight achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 66 Torchlight achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Lich to Scratch", "Defeat the Overseer"],
        ["Angler", "Catch 50 fish"],
        ["Beast of Burden", "Fill your pet's inventory"],
        ["Beast Slayer I", "Defeat Ordrak on Easy or Normal"],
        ["Beast Slayer II", "Defeat Ordrak on Hard"],
        ["Beast Slayer III", "Defeat Ordrak on Very Hard"],
        ["Big and Green and Dead all Over", "Defeat Krag"],
        ["Bum Luck", "Have an item disenchanted on the first enchantment attempt"],
        ["Cash for Trash", "Sell 10,000 items to vendors"],
        ["Deep Delver", "Reach the 50th floor of a dungeon"],
        ["Deep Pockets", "Have 100,000 gold in your inventory"],
        ["Down the Hatch", "Complete 50 Hatch Quests"],
        ["Enchanted", "Successfully enchant one item 5 times"],
        ["Enchantment Overload", "Successfully enchant one item 10 times"],
        ["Epic Strike", "Do at least 10,000 damage to an enemy in a single strike"],
        ["Fetch a Fair Price", "Send your pet to town"],
        ["Fisher King", "Catch 1000 fish"],
        ["Fisherman", "Catch 100 fish"],
        ["Gambling Addict", "Gamble 50 times"],
        ["Gambling Enthusiast", "Gamble 20 times"],
        ["Gambling Fiend", "Gamble 100 times"],
        ["Gibbed", "Blow 25 enemies to pieces with critical strikes"],
        ["Hardcore Champion", "Defeat Ordrak on Hard Hardcore"],
        ["Hardcore God", "Defeat Ordrak on Very Hard Hardcore"],
        ["Hardcore Hero", "Defeat Ordrak on Normal Hardcore"],
        ["Hardcore Victor", "Defeat Ordrak on Easy Hardcore"],
        ["Hat Trick", "Beat the game with all three classes"],
        ["Ka-Chunk!", "Pull 100 levers."],
        ["Line of Kings", "Retire over 300 levels worth of characters"],
        ["Lucky Gambler", "Gamble a unique item"],
        ["Master Smasher", "Smash 1500 Breakables"],
        ["Mod Maniac", "5 mods installed at the same time"],
        ["Mod Squad", "1 game mod installed"],
        ["Modpocalypse", "10 mods used at the same time"],
        ["Noble Lineage", "Retire two characters"],
        ["Only a Master of Evil", "Defeat Alric"],
        ["Over the Brink", "Defeat Brink"],
        ["Passing the Torch", "Retire a character"],
        ["Pension Plan", "Achieve player level 65"],
        ["Perfect Victory", "Defeat Ordrak with no deaths"],
        ["Pet Trainer", "Equip a spell on your pet"],
        ["Potion Whiz", "Drink 5,000 potions"],
        ["Price of Loyalty", "Use 50 potions on your pet"],
        ["Purple People Defeater", "Defeat Medea"],
        ["Questor", "Complete 200 Quests"],
        ["Rich", "Collect 250,000 gold"],
        ["Shape-Shifter", "Change your pet by feeding it fish"],
        ["Sir Mixes-a-lot", "Successfully create 25 items using the transmuter"],
        ["Sorcelator's Servant", "Transform your pet into a Mimic by feeding it the right fish."],
        ["Speed King", "Defeat Ordrak in less than 5 hours"],
        ["Superstar", "Achieve maximum fame"],
        ["Supreme Slayer", "Kill 50,000 monsters"],
        ["Swift Execution", "Defeat Ordrak in 8 hours or less"],
        ["The Adventure Begins", "Find the entrance to the mine"],
        ["The Horse Whisperer", "Click on the horse in town (next to the gem collectors Gorn and Furl) 100 times."],
        ["The Long Haul", "Achieve player level 100"],
        ["The Need for Greed", "Suffer 20 disenchants from the enchanter"],
        ["Tormented", "Die 500 times"],
        ["Transmogrifier", "Permanently transform your pet"],
        ["Tree Hugger", "Defeat the Root Golem"],
        ["Trolling for Punishment", "Kill 25 champion trolls"],
        ["True Delver", "Reach level 100"],
        ["Universally Understood", "Complete 25 Gar Quests"],
        ["Wabam!", "Kill 5000 Monsters"],
        ["Walkabout", "Take 25,000 steps"],
        ["When this Town's a Rockin'", "Defeat the Ember Colossus"],
    ];

    assert.strictEqual(officialAchievements.length, 66, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
