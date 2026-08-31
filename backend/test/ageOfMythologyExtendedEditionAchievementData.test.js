import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-mythology-extended-edition.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 266840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("age-of-mythology-extended-edition");

test("getPlannerData('age-of-mythology-extended-edition') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-mythology-extended-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Age of Mythology: EE achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Age of Mythology: EE achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Age of Mythology: EE achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aimless Wonderer", "Play 100 random map games"],
        ["Annihilation", "Kill 10000 units in battle"],
        ["Champion of the Community", "Be victorious in 100 online games"],
        ["Commander of Fu Xi", "Lead Fu Xi to victory 10 times!"],
        ["Commander of Gaia", "Lead Gaia to victory 10 times!"],
        ["Commander of Hades", "Lead Hades to victory 10 times!"],
        ["Commander of Isis", "Lead Isis to victory 10 times!"],
        ["Commander of Kronos", "Lead Kronos to victory 10 times!"],
        ["Commander of Loki", "Lead Loki to victory 10 times!"],
        ["Commander of Nü Wa", "Lead Nü Wa to victory 10 times!"],
        ["Commander of Odin", "Lead Odin to victory 10 times!"],
        ["Commander of Oranos", "Lead Oranos to victory 10 times!"],
        ["Commander of Poseidon", "Lead Poseidon to victory 10 times!"],
        ["Commander of Ra", "Lead Ra to victory 10 times!"],
        ["Commander of Set", "Lead Set to victory 10 times!"],
        ["Commander of Shennong", "Lead Shennong to victory 10 times!"],
        ["Commander of Thor", "Lead Thor to victory 10 times!"],
        ["Commander of Zeus", "Lead Zeus to victory 10 times!"],
        ["Conquest Certified", "Play 100 Conquest games"],
        ["Creating a Masterpiece", "Complete 10 Wonders"],
        ["Deathmatch Certified", "Play 100 Deathmatch games"],
        ["Defeat the Army", "Defeat 10 AI opponents single handedly!"],
        ["Defeat the Battalion", "Defeat 6 AI opponents single handedly!"],
        ["Defeat the Brigade", "Defeat 8 AI opponents single handedly!"],
        ["Defeat the Company", "Defeat 5 AI opponents single handedly!"],
        ["Defeat the Division", "Defeat 9 AI opponents single handedly!"],
        ["Defeat the Horde", "Defeat 11 AI opponents single handedly!"],
        ["Defeat the Platoon", "Defeat 4 AI opponents single handedly!"],
        ["Defeat the Regiment", "Defeat 7 AI opponents single handedly!"],
        ["Defeat the Soldier", "Defeat 1 AI opponent single handedly!"],
        ["Defeat the Squad", "Defeat 2 AI opponents single handedly!"],
        ["Defeat the Troop", "Defeat 3 AI opponents single handedly!"],
        ["Demolition", "Destroy 2000 buildings in battle"],
        ["Eradicator of the Machine", "Be victorious against 100 AI opponents"],
        ["Foe of Fu Xi", "Defeat Fu Xi 10 times!"],
        ["Foe of Gaia", "Defeat Gaia 10 times!"],
        ["Foe of Hades", "Defeat Hades 10 times!"],
        ["Foe of Isis", "Defeat Isis 10 times!"],
        ["Foe of Kronos", "Defeat Kronos 10 times!"],
        ["Foe of Loki", "Defeat Loki 10 times!"],
        ["Foe of Nü Wa", "Defeat Nü Wa 10 times!"],
        ["Foe of Odin", "Defeat Odin 10 times!"],
        ["Foe of Oranos", "Defeat Oranos 10 times!"],
        ["Foe of Poseidon", "Defeat Poseidon 10 times!"],
        ["Foe of Ra", "Defeat Ra 10 times!"],
        ["Foe of Set", "Defeat Set 10 times!"],
        ["Foe of Shennong", "Defeat Shennong 10 times!"],
        ["Foe of Thor", "Defeat Thor 10 times!"],
        ["Foe of Zeus", "Defeat Zeus 10 times!"],
        ["Horror Unleashed", "Complete 25 Titans"],
        ["Hour of Alpacas", "Play any game (a single-player skirmish vs the AI counts) while the developer-run 'Alpaca Hour' event is active - it runs at random intervals and is announced on the official Age of Empires Twitch and social channels."],
        ["Leader of the Fearless", "Host 25 multiplayer games"],
        ["Lightning Certified", "Play 100 Lightning games"],
        ["Master of Conquest", "Be victorious in 10 Conquest games"],
        ["Master of Deathmatch", "Be victorious in 10 Deathmatch games"],
        ["Master of Lightning", "Be victorious in 10 Lightning games"],
        ["Master of Supremacy", "Be victorious in 10 Supremacy games"],
        ["Master of Treaty", "Be victorious in 10 Treaty games"],
        ["One Among the Eager", "Play 50 quickmatch games"],
        ["One Among the Flock", "Play 1000 online games"],
        ["Remember the Fallen", "Lose 5000 units in battle"],
        ["Ruler of Atlantis", "Complete the New Atlantis campaign"],
        ["Ruler of Dragons", "Complete the Tale of the Dragon campaign"],
        ["Ruler of Gold", "Complete the Golden Gift campaign"],
        ["Ruler of Knowledge", "Complete the Learn to Play campaign"],
        ["Ruler of the Trident", "Complete the Fall of the Trident campaign"],
        ["Stone and Steel", "Complete 100 Fortress type buildings"],
        ["Supremacy Certified", "Play 100 Supremacy games"],
        ["Time to Rebuild", "Lose 1000 buildings in battle"],
        ["Treaty Certified", "Play 100 Treaty games"],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
