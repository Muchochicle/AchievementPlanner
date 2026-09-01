import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/farthest-frontier.json - 74 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1044720 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("farthest-frontier");

test("getPlannerData('farthest-frontier') returns real planner data with 74 curated achievements", () => {

    assert.ok(game, "expected real planner data for farthest-frontier");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 74);

});

test("every Farthest Frontier achievement has a unique id from 1 to 74 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 74 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 74);
    assert.strictEqual(new Set(apinames).size, 74);

});

test("every Farthest Frontier achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 74 Farthest Frontier achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Academia", "Contruct the Academy and upgrade it to Tier 2."],
        ["Age of Heroes", "Construct the Military Monument."],
        ["Barely a Scratch", "Crush raiders in 3 consecutive Flawless Victories in a row on non-pacifist difficulty."],
        ["Barren Land", "Upgrade the Town Center to Tier 4 while never building crop fields on Vanquisher Difficulty."],
        ["Bearly Tried", "Activate Bear Mode."],
        ["Beautification", "Construct 100 Decorative Structures in a single settlement."],
        ["Black Death", "Have a bubonic plague outbreak that sickens 50 villagers at once."],
        ["City", "Reach 250 population in a single settlement."],
        ["Conscientious Diet", "Upgrade the Town Center to Tier 4 without producing or consuming any meat on Vanquisher Difficulty."],
        ["Cry Wolf", "Destroy a wolf den on Vanquisher, using only villagers."],
        ["Curator of the Arts", "Construct the Theater and upgrade it to Tier 2."],
        ["Death Rites", "Bury 10 dead."],
        ["Dig Greedily and Deeply", "Construct 10 Deep Mines of any kind in a single settlement."],
        ["Distinguished Scholar", "Earn 25 Knowledge Points in a single settlement."],
        ["Elite Squad", "Defeat all raider camps on the map on non-pacifist Vanquisher Difficulty without training any tier 2 or cavalry units."],
        ["Era of Civility", "Construct the Civic Monument."],
        ["Establishing a Foothold", "Upgrade the Town Center to Tier 2."],
        ["Extreme Living", "Construct 5 Shelters on the tallest mountain tops."],
        ["Faith through Conquest", "Discover all Warrior Relics."],
        ["Faith through Harmony", "Discover all Wilds Relics."],
        ["Faith through Sacrifice", "Discover all Martyr Relics."],
        ["Finish Them!", "Crush raiders in 3 consecutive Flawless Victories in a row on non-pacifist Vanquisher Difficulty."],
        ["Forbidden Flesh", "Buy 2000 meat from Scorv the Butcher in a single settlement."],
        ["Founding a Settlement", "Construct the Town Center."],
        ["Garrison", "Recruit 50 military units."],
        ["Generational Wealth", "Upgrade 20 Shelters to Tier 5 in a single settlement."],
        ["Gentrification", "Upgrade 20 Shelters to Tier 4 in a single settlement."],
        ["Golden Age", "Construct the Economic Monument."],
        ["Guild Dues", "Construct the Guild Hall."],
        ["Heart of the Frontier", "Upgrade the Town Center to Tier 3."],
        ["Highlanders", "Survive to 500 population without building a single defensive wall in non-pacifist mode."],
        ["Honor the Dead", "Bury 1000 dead."],
        ["Intellectual Scholar", "Earn 10 Knowledge Points in a single settlement."],
        ["Jewel in the Desert", "Reach 500 population in the Arid Highlands on non-pacifist Vanquisher Difficulty."],
        ["Legendary Hoard", "Accumulate 100,000 Gold Ingots in a single settlement on non-pacifist Vanquisher Difficulty."],
        ["Locality", "Construct 50 Shelters in a single settlement."],
        ["Market Forces", "Construct the Trading Post and upgrade it to Tier 2."],
        ["Master of the Frontier", "Upgrade the Town Center to Tier 4."],
        ["Metropolis", "Reach 500 population in a single settlement."],
        ["Militia", "Recruit 12 military units."],
        ["Monumental Age of Heroes", "Construct the Military Monument on non-pacifist Vanquisher Difficulty."],
        ["Monumental Era of Civility", "Construct the Civic Monument on non-pacifist Vanquisher Difficulty."],
        ["Monumental Golden Age", "Construct the Economic Monument on non-pacifist Vanquisher Difficulty."],
        ["Most Dangerous Game", "Kill 10 raiders with a hunter in a single settlement on non-pacifist difficulty."],
        ["Mourn the Dead", "Bury 100 dead."],
        ["Moving Up", "Upgrade 20 Shelters to Tier 3 in a single settlement."],
        ["My Happy Place", "Reach 100% overall happiness in a Tier 4 Settlement on Vanquisher difficulty."],
        ["Neighborhood", "Construct 25 Shelters in a single settlement."],
        ["Not on My Watch", "Recover all of your loot after being robbed by raiders, on non-pacifist Vanquisher difficulty."],
        ["Philosopher", "Complete all Research in the Technology Tree."],
        ["Piety", "Construct the Temple and upgrade it to Tier 2."],
        ["Playing the Market", "Generate 1,000,000 Gold Ingots in total."],
        ["Raider Incursion", "Defeat 500 Raiders on non-pacifist difficulty."],
        ["Raider Invasion", "Defeat 1000 Raiders on non-pacifist difficulty."],
        ["Raider Menace", "Defeat 2000 Raiders on non-pacifist difficulty."],
        ["Raider Threat", "Defeat 100 Raiders on non-pacifist difficulty."],
        ["Rainy Day Fund", "Accumulate 100,000 Gold Ingots in a single settlement."],
        ["Renovation", "Upgrade 20 Shelters to Tier 2 in a single settlement."],
        ["Scholar", "Earn 5 Knowledge Points in a single settlement."],
        ["Sheltering", "Construct 6 Shelters in a single settlement."],
        ["Standing Army", "Recruit 100 military units."],
        ["Stocks Only Go Up", "Generate 1,000,000 Gold Ingots in total on non-pacifist Vanquisher Difficulty."],
        ["The Collector", "Find or purchase 10 relics in a single settlement."],
        ["The First Winter", "Survive the first winter without losing a villager."],
        ["The First Winter Vanquished", "Survive the first winter without losing a villager on Vanquisher difficulty."],
        ["There can only be 500", "Survive to 500 population without building a single defensive wall or gate on non-pacifist Vanquisher Difficulty."],
        ["Town", "Reach 100 population in a single settlement."],
        ["True Devotion", "Discover all Relics."],
        ["Vanquished Raider Horde", "Defeat 10,000 Raiders on non-pacifist Vanquisher Difficulty."],
        ["Vanquished Raider Menace", "Defeat 2000 Raiders on non-pacifist Vanquisher Difficulty."],
        ["Vanquished Raider Scourge", "Defeat 5000 Raiders on non-pacifist Vanquisher Difficulty."],
        ["Vengeful Survivor", "Survive for 10 consecutive years while the Ark of the Vengeful Dead is active within your Temple in non-pacifist mode."],
        ["Vengeful Vanquisher", "Survive for 10 consecutive years on non-pacifist Vanquisher Difficulty while the Ark of the Vengeful Dead is active within your Temple."],
        ["Ward", "Construct 100 Shelters in a single settlement."],
    ];

    assert.strictEqual(officialAchievements.length, 74, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
