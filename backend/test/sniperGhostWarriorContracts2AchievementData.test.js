import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-ghost-warrior-contracts-2.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1338770 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sniper-ghost-warrior-contracts-2");

test("getPlannerData('sniper-ghost-warrior-contracts-2') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-ghost-warrior-contracts-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Sniper Ghost Warrior Contracts 2 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Sniper Ghost Warrior Contracts 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 Sniper Ghost Warrior Contracts 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Better Safe Than Sorry", "Unlock all Secondary Weapons"],
        ["Caravan", "Kill everyone from all of the reinforcement waves during the Oil Field contract."],
        ["Castling", "Complete Rashida Qalat"],
        ["Check", "Escape the Server Room ambush without being detected"],
        ["Convict freed", "Complete The Tajmid Heights"],
        ["Deadly Efficient", "Complete Maladh Wadi at the Highest Difficulty in a single playthrough"],
        ["Desert Storm", "Complete Zindah Province at the Highest Difficulty in a single playthrough"],
        ["Discreet", "Kill the contract target and all the other suspects without raising the alarm."],
        ["Distance Doesn't Matter", "Land a shot from over 1300m away"],
        ["Employee of the Year", "Complete all Mission Contracts"],
        ["Fatal Accuracy", "Kill Taj Taheer in the car with a headshot."],
        ["Finders Keepers", "Find your first Collectible"],
        ["First Payday", "Buy your first skill"],
        ["Full Arsenal", "Unlock all Sniper Rifles"],
        ["Full House", "Kill at least 1 of each enemy type in the same mission"],
        ["Full Potential", "Buy 54 skills"],
        ["Genuine Professional", "Complete The Tajmid Heights at the Highest Difficulty in a single playthrough"],
        ["Hoarder", "Find all of the Collectibles"],
        ["Horseshoes and Hand Grenades", "Kill 2 enemies with a grenade"],
        ["Karma", "Lead the prisoner to safety without raising the alarm."],
        ["King of The Castle", "Complete Rashida Qalat at the Highest Difficulty in a single playthrough"],
        ["Lethal Business", "Provoke both targets into fleeing and kill them both before they escape."],
        ["Lock, Stock, and Barrel", "Kill 2 enemies using an explosion"],
        ["Long Live the Queen", "Retrieve the security chips without killing Bibi"],
        ["Look, but Don't Touch", "Finish all Contracts in a Region without ever taking damage from enemies"],
        ["Lungs of Steel", "Kill 5 enemies while holding your breath with Stamina Booster active"],
        ["Meeting Cancelled", "Complete Maladh Wadi"],
        ["Mirage", "Complete Zindah Province"],
        ["New Toy", "Unlock 1 Weapon"],
        ["One Shot One Kill", "Complete a contract when every time you hit the enemy is a kill"],
        ["One Trick Pony", "Finish a Contract using only sniper rifles"],
        ["Patience is key", "Kill Novikov while he is inspecting a damaged antenna."],
        ["Quick and Discreet", "Kill 5 enemies in 1 minute without raising the alarm"],
        ["Single Shot Killer", "Kill each suspect with a single body shot during an alarm."],
        ["Small and Lethal", "Unlock all Sidearms"],
        ["Sniping the Sniper", "Kill Ronald Payne after he takes up a sniping position."],
        ["Spectre", "Be within 2 meters of an enemy for 10 seconds without being detected"],
        ["Sunshine Roof", "Kill Antwana Zarza while he is in his vehicle - drop a shipping container onto the car as he drives off."],
        ["Take the Nerd Down", "Complete Mount Kuamar"],
        ["The Gun is the Best Hacking Tool", "Complete Mount Kuamar at the Highest Difficulty in a single playthrough"],
        ["Thrifty Shooter", "Kill 2 enemies with the same bullet"],
        ["Turret Operator", "Kill 5 enemies in the same mission using the Sentry Turret"],
        ["Venom", "Kill any contract target using your drone's poison rifle"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
