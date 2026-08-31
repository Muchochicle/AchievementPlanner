import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hand-of-fate.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 266510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hand-of-fate");

test("getPlannerData('hand-of-fate') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for hand-of-fate");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Hand of Fate achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Hand of Fate achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Hand of Fate achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventurer", "Complete the first 3 levels of a play session, without taking any damage."],
        ["Arch Mage", "Equip all the Mage items at once."],
        ["Bling", "Have 10 rings in your inventory at once."],
        ["Champion", "Kill one of each monster type in a single session."],
        ["Close Shave", "Win a combat with less than 5 health remaining."],
        ["Combat Ready", "Have at least 1 of each type of equipment in your inventory."],
        ["Corrupted", "Complete all 6 Demon Trader encounters."],
        ["Deep Delver", "Reach level 30 in Endless Mode."],
        ["Dragon Slayer", "Equip all the Dragon Relic items at once."],
        ["Drained", "Complete all 6 Blood Auction encounters."],
        ["Dungeon Conqueror", "Defeat the Dealer as the Warlord."],
        ["Dungeon Master", "Defeat the Dealer."],
        ["Elite Training", "Complete all Soldier's Training encounters."],
        ["Explorer", "Complete all Explorer's Gift encounters."],
        ["Graduation", "Complete all Apprentice encounters."],
        ["Great Hunter", "Defeat the White Minotaur."],
        ["Holy Champion", "Complete all Monk encounters."],
        ["Humbled", "Complete all 6 Charity encounters."],
        ["Hunger Satiated.", "Complete all Iron Hunger encounters."],
        ["Hunter", "Land the killing blow on 10 enemies with a trap."],
        ["Juggernaut", "Possess 150 or more health."],
        ["King of the Undead", "Equip all the Skeleton King items at once."],
        ["Kraken Master", "Defeat the Kraken."],
        ["Lord of War", "Complete all Warlord encounters."],
        ["Master Combatant", "Complete 3 combats in a single run, without taking any damage."],
        ["Master of the Shadows", "Complete all Shadow Agent encounters."],
        ["Master of Traps", "Bash 5 enemies into traps in a single session."],
        ["Merchant's Saviour", "Complete all Merchant Guard encounters."],
        ["Metal Mogul", "Possess 300 or more Ore."],
        ["Never Enough", "Complete all Hoarder's Desire encounters."],
        ["Ninja", "Kill an enemy with their own reflected projectile."],
        ["One with the Kraken", "Equip the Kraken Sword and Mask at once."],
        ["Pure Enlightenment", "Possess 10 Blessings at once."],
        ["Quick Reflexes", "Reflect 100 projectiles over multiple play sessions."],
        ["Release the Lava Golems!", "Complete the Fire in the Deep encounter."],
        ["Release the Lich!", "Complete the Lich encounter."],
        ["Release the Mages!", "Complete the Mages encounter."],
        ["Release the Minotaur!", "Complete the Minotaur encounter."],
        ["Slayer", "Perform 2 prone attacks in a row."],
        ["Squire", "Complete the first level of a play session, without taking any damage."],
        ["The Elder Lizard", "Trade with the Elder Lizard."],
        ["The Lion Prince", "Complete all Curse of the Lion Prince encounters."],
        ["The Wanderer", "Complete all Nomad encounters."],
        ["Vault Raider", "Complete the Goblin King's Halls IV encounter."],
        ["Very Brave or Very Stupid", "Enter a combat with less than 5 health remaining."],
        ["Very Lucky", "Get 15 'Success' or 'Huge Success' chance cards in a single session."],
        ["Very Unlucky", "Get 12 'Failure' or 'Huge Failure' chance cards in a single session."],
        ["Wealthy Lord", "Possess 200 or more gold."],
        ["Well Equipped", "Unlock every equipment card."],
        ["Well Supplied", "Possess 120 or more food."],
        ["Well Travelled", "Unlock every encounter card."],
        ["World Saviour", "Turn back the invasion from the Underworld."],
        ["Wretched Soul", "Possess 10 Curses at once."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
