import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/code-vein.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 678960 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("code-vein");

test("getPlannerData('code-vein') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for code-vein");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every CODE VEIN achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every CODE VEIN achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 CODE VEIN achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Weapon for Every Season", "Equip every weapon type"],
        ["Blade Bearer and Cannoneer", "Defeat the Blade Bearer and Cannoneer in the Crypt Spire"],
        ["Building Trust", "Give a desired valuable to a friend"],
        ["Burning Spirit", "Unlock the ability to inherit 50 Gifts"],
        ["Butterfly of Delirium", "Defeat the Butterfly of Delirium in the ruined city center"],
        ["Coco's Memories", "View Coco's memory echoes"],
        ["Davis's Memories", "View Davis's memory echoes"],
        ["Deep Trailblazer", "Explore every part of the depths"],
        ["Determiner of Fate", "View every ending"],
        ["Drink Deep", "Successfully use a special drain from a parry, back attack, or launch attack"],
        ["Dweller in the Dark", "View the \"Dweller in the Dark\" ending"],
        ["Exalted Reputation", "Raise your reputation as a companion to rank 30"],
        ["Gift Gatherer", "Learn 150 Gifts (excluding those learned when acquiring a blood code)"],
        ["Gifted", "Learn 50 Gifts (excluding those learned when acquiring a blood code)"],
        ["Gilded Hunter", "Defeat the Gilded Hunter in the Ashen Cavern"],
        ["Heirs", "View the \"Heirs\" ending"],
        ["Insatiable Despot", "Defeat the Insatiable Despot in the dried-up trenches"],
        ["Invading Executioner", "Defeat the Invading Executioner in the Howling Pit"],
        ["Io's Memories", "View Io's memory echoes"],
        ["Juzo Mido", "Defeat the boss of the Crypt Spire, Juzo Mido"],
        ["Louis's Memories", "View Louis's memory echoes"],
        ["Mender of Minds", "Restore all Vestiges"],
        ["Mia's Memories", "View Mia's memory echoes"],
        ["Miasma Manager", "Activate all mistles"],
        ["Murasame's Memories", "View Murasame's memory echoes"],
        ["Oliver Collins", "Defeat Oliver Collins in the ruined city underground"],
        ["Proven Devotion", "Receive 30 presents from friends"],
        ["Queen's Knight", "Defeat the Queen's Knight within your memory"],
        ["Queen's Knight Reborn", "Defeat the Queen's Knight Reborn in the provisional government outskirts"],
        ["Resonant Power", "Execute a Communal Gift"],
        ["Revenant Preeminent", "Unlocked all other achievements"],
        ["Revenant Requisites", "Equip every Blood Veil type"],
        ["Skull King", "Defeat the Skull King in the Gaol of the Stagnant Blood"],
        ["Successor of the Breath", "Defeat the Successor of the Breath in the Ridge of Frozen Souls"],
        ["Successor of the Claw", "Defeat the Successor of the Claw in the City of Falling Flame"],
        ["Successor of the Ribcage", "Defeat the Successor of the Ribcage in the Cathedral of the Sacred Blood"],
        ["Successor of the Throat", "Defeat the Successor of the Throat in the Crown of Sand"],
        ["To Eternity", "View the \"To Eternity\" ending"],
        ["Together Until Oblivion", "Listen to partner conversations 50 times while exploring"],
        ["Ultimate Armament", "Upgrade a weapon to its maximum level"],
        ["Unbreakable Veil", "Upgrade a Blood Veil to its maximum level"],
        ["Weaver of Wills", "Collect every blood code"],
        ["Yakumo's Memories", "View Yakumo's memory echoes"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
