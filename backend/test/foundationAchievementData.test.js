import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/foundation.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 690830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("foundation");

test("getPlannerData('foundation') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for foundation");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Foundation achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Foundation achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Foundation achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fief Too Far", "Own 30 Territories"],
        ["A Growing Village!", "Have a population of 100 or more"],
        ["A Legend is Born", "Promote a Soldier to Knight"],
        ["A Thriving City!", "Have a population of 500 or more"],
        ["Abbey of Abundance", "Complete the Aspiration: A Prosperous Priory (Challenge rules or harder)"],
        ["Against All Odds", "Complete a Military Campaign (Challenge rules or harder)"],
        ["Bathing in Gold", "Amass 10,000 Coins"],
        ["Calling a Ban", "Enact an Edict"],
        ["Centuria", "Have an army of 100 Combatants"],
        ["Civitas Maxima", "Have a population of 500 or more (Challenge rules or harder)"],
        ["Divine Architecture", "Build an Abbatial Church worth 100 Clergy Splendour"],
        ["Expansion", "Purchase your first Territory"],
        ["Feudal Overlord", "Own at least 30 Territories (Challenge rules or harder)"],
        ["First Growth", "Enact the Seal of Prestige Privilege (Challenge rules or harder)"],
        ["Fit for a King", "Build Private Quarters worth 100 Kingdom Splendour"],
        ["Hammer Time!", "Produce Tools"],
        ["Hanseatic Spirit", "Upgrade all Trade Routes at least once"],
        ["Happy as a Lark", "Have a Villager with 150% Happiness"],
        ["Honi soit qui mal y pense!", "Successfully host a Company of Royal Knights"],
        ["Iron and Oak", "Complete the Aspiration: A Mighty Stronghold"],
        ["Just this once... I promise!", "Earn Coins from the Levy Mandate"],
        ["King Midas", "Earn 15,000 Coins within 30 days"],
        ["Marching On!", "Form a Company"],
        ["Merchant Prince", "Upgrade a Trade Route to Level 5"],
        ["Montjoie! Saint Denis!", "Deploy a Battalion to a Military Campaign"],
        ["One of the People", "Complete the Aspiration: A Prestigious Burg"],
        ["Ora et Labora", "Produce a Monastic Meal"],
        ["Prior of Plenty", "Complete the Aspiration: A Prosperous Priory"],
        ["Room for One More?", "Build a Workplace Extension"],
        ["Salt Fish and Pottage", "Stock 400 War Rations"],
        ["Serf and Turf", "Tax a Villager"],
        ["Sound the Trumpets!", "Complete a Military Mission"],
        ["Spices of Life", "Start a Trade Route"],
        ["Steel and Stone", "Complete the Aspiration: A Mighty Stronghold (Challenge rules or harder)"],
        ["Teloneum", "Enact the Merchandise Taxes Privilege (Challenge rules or harder)"],
        ["The Big Cheese of Cheddar Palace", "Build a Great Hall worth 100 Labour Splendour"],
        ["The Boar's Head Feast", "Produce a Tavern Meal"],
        ["The Burgomaster", "Complete the Aspiration: A Prestigious Burg (Challenge rules or harder)"],
        ["The Exchequer's Haul", "Collect 5,000 Tax Coins in a single month"],
        ["The Gabelle Gambit", "Enact all seven Taxes"],
        ["The Way of Saint James", "Host a Pilgrim"],
        ["Veni, Vidi, Vici", "Complete a Military Mission of Grade 3"],
        ["Via Commercii, Via Dei", "Trade 500 resources with Kinstone Abbey over 30 days"],
        ["Ye Noble Black Prince!", "A rare black sheep randomly spawns among your flock. Build a sheep farm with a large pasture and keep as many sheep as possible to improve the odds - it is a Very Rare achievement."],
        ["Your First Church", "Build a Rustic Church"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
