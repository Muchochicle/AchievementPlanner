import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/oceanhorn-monster-of-uncharted-seas.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 339200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("oceanhorn-monster-of-uncharted-seas");

test("getPlannerData('oceanhorn-monster-of-uncharted-seas') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for oceanhorn-monster-of-uncharted-seas");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Oceanhorn achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Oceanhorn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Oceanhorn achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adventurer", "Reach the 'Adventurer' Level"],
        ["Archmage", "Reach 'Archmage' Adventurer Level"],
        ["Blast'em!", "Kill an enemy with a laser beam"],
        ["Blockbuster", "Destroy 100 wooden crates"],
        ["Bomber Archeologist", "Use bombs to break walls 10 times"],
        ["Bouncer", "Bounce an enemy with a shield 10 times"],
        ["Catch Arcadian Pike", "Catch your first Arcadian Pike"],
        ["Catch Blue Fin", "Catch your first Blue Fin"],
        ["Catch Botfish", "Catch your first Botfish"],
        ["Catch Fireback", "Catch your first Fireback"],
        ["Catch Ghost Fish", "Catch your first Ghost Fish"],
        ["Catch Goliath", "Catch your first Goliath"],
        ["Catch Sol Fish", "Catch your first Sol Fish"],
        ["Centurion", "Reach 'Centurion' Adventurer Level"],
        ["Ceramic Killer", "Kill an enemy with a jar"],
        ["Champion from Below", "Clear the entrance to Grand Core"],
        ["Cosmopolitan", "Visit all islands of Uncharted Seas"],
        ["Crimson Collector", "Collect Bloodstones from all over the world"],
        ["Down for Swimming", "Drown an enemy by getting it into the water"],
        ["Encyclopedia Monstrum", "Defeat every kind of monster in the game"],
        ["Explorer", "Reach 'Explorer' Adventurer Level"],
        ["Exterminator", "Defeat the Cepedes of Abandoned Mines"],
        ["Fabled Gardener", "Lift the curse from the Forest Shrine"],
        ["Fast Blade", "Perform 10 successful combo attacks"],
        ["Fire Walk with Me", "Melt objects 15 times using Fire Spell"],
        ["First Piece", "Find your first Piece of Heart"],
        ["Frutti di Terra", "Ship an item to another island"],
        ["Hard Worker", "Move crates and other objects 100 times"],
        ["Hat Trick", "Kill three enemies with a single sword blow"],
        ["Hey, Big Spender!", "Spend 2 000 coins in the shop"],
        ["Honey Man", "Find out what happened to Honey Man"],
        ["Knight of Arcadia", "Reach 'Knight of Arcadia'  Level"],
        ["Legend", "Reach the highest Adventurer Level"],
        ["Making Friends", "Release the Direfolk's prisoner"],
        ["Master", "Reach 'Master' Adventurer Level"],
        ["Not Far from Tree", "Get father's sword and shield"],
        ["Old Enemy", "Retire 100 Direfolk"],
        ["Pathfinder", "Reach 'Pathfinder' Adventurer Level"],
        ["Pilgrim", "Reach 'Pilgrim' Adventurer Level"],
        ["Pocket Money", "Collect your first 25 coins"],
        ["Rookie Adventurer", "Reach 'Rookie Adventurer' Level"],
        ["Rusty's Treasure", "Use your wits to reveal the hidden treasure"],
        ["Scholar", "Study the Arcadian History"],
        ["Seasnake", "Swim 500 meters"],
        ["Secret Passage", "Swim to Canals"],
        ["Secret Sword Art", "Try the skill attack for the first time"],
        ["Shish Kebab", "Kill an enemy with a burning arrow"],
        ["Sleeping Giant", "Beat the Creation No. 2"],
        ["Smart Guy", "Read at least 10 signs"],
        ["Spellbinder", "Reach 'Spellbinder' Adventurer Level"],
        ["Sticky Finger", "Collect 1000 coins"],
        ["Still Going", "Smash 50 skeletons to pieces"],
        ["Tough as a Boot", "Break a crate with Trencher Boots"],
        ["Town Sheriff", "Protect the Peace in Tikarel"],
        ["Train Wreck", "Kill an enemy by pushing a crate"],
        ["Traveler", "Reach 'Traveler' Adventurer Level"],
        ["Unspawn", "Kill 50 Spawn"],
        ["Vanguard", "Reach 'Vanguard' Adventurer Level"],
        ["Vitality", "Collect 8 heart containers"],
        ["Voyager", "Reach 'Voyager' Adventurer Level"],
        ["Wayfarer", "Reach 'Wayfarer' Adventurer Level"],
        ["Witness", "Collect 10 Cursed Skulls"],
        ["Wizard", "Wield the power of all 5 spells"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
