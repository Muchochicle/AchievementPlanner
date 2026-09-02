import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dishonored-death-of-the-outsider.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 614570 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dishonored-death-of-the-outsider");

test("getPlannerData('dishonored-death-of-the-outsider') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for dishonored-death-of-the-outsider");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Dishonored: Death of the Outsider achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Dishonored: Death of the Outsider achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Dishonored: Death of the Outsider achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Agent of Mercy", "Finished a mission without killing anyone"],
        ["Art Aficionado", "Collected all Eleuterio Cienfuegos paintings"],
        ["Big-time Player", "Won the auction at Colibron Plaza"],
        ["Clever Planning", "Used Displace on a marker placed with Foresight and eliminated a target"],
        ["Dead Eye", "Touch the Eye of the Dead God (Mission 5: A Hole in the World)."],
        ["Deicide", "Kill the Outsider (one of the two endings)."],
        ["Final Nudge", "Pushed an enemy to his demise using Void Strike"],
        ["Final Release", "Return the Outsider to the mortal world (one of the two endings)."],
        ["Gnosis", "Recover the stolen archive (Mission 4: The Stolen Archive)."],
        ["Golden Locks", "Stole the audiograph from the gallery without disabling the safeguard floor"],
        ["Good Old Times", "Finished the Original Game+"],
        ["Harder than Stone", "Destroyed an Envisioned cultist"],
        ["Hooked", "Sent someone flying 40 meters using Hook Mines"],
        ["Mercenary Work", "Completed all contracts"],
        ["Mightier than the Sword", "Shot a guard in the head with a fountain pen"],
        ["Nightingale", "Used Semblance to mimic Shan Yun and sing into the microphone"],
        ["Obsessive Safe-cracker", "Opened every safe inside the main vault"],
        ["Occupational Hazard", "Made an enemy explode into pieces using Displace"],
        ["Party Crasher", "Sent the vault crashing through the floor"],
        ["Public Shaming", "Dropped Ivan Jacobi through the trapdoor"],
        ["Rat Whisperer", "Listened to what swarms of rats have to say 5 times"],
        ["Salute!", "Had a guard salute you"],
        ["Shadow", "Finished the game without being detected"],
        ["Side Effects", "Made 3 people vomit using a single bottle of Plagued Spirit"],
        ["The Face of the Abbey", "Attended the meeting as Brother Cardoza"],
        ["The Perfect Crime", "Emptied the vault without tampering with any security systems, leaving everyone unharmed and asleep"],
        ["Twin-bladed Knife", "Obtain the ancient weapon (Mission 3: The Bank Job)."],
        ["Two Turns", "Take both bank vault keys (Mission 2: Follow the Ink)."],
        ["Uncaged", "Free the assassin Daud (Mission 1: One Last Fight)."],
        ["Voices", "Broke 4 Oraculum censers and listened to the prophecies"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
