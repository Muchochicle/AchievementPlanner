import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/orcs-must-die.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 102600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("orcs-must-die");

test("getPlannerData('orcs-must-die') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for orcs-must-die");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Orcs Must Die! achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Orcs Must Die! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Orcs Must Die! achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Dead Orc = Good Orc", "Kill 1,000 orcs"],
        ["Deck the Halls", "Complete the Hallway using only the Arrow Wall trap, weapons, and spells"],
        ["Defender", "Complete Act 1"],
        ["Droppin' Ten Large", "Kill 10,000 orcs"],
        ["Giblet Storm!", "Gib more than 200 enemies on one level"],
        ["Great Balls of Fire!", "Get 300 fireball kills in one level"],
        ["In your Face!", "Get 100 acid pot kills in one level"],
        ["Keepmaster", "Complete Act 2"],
        ["Legendary Defender", "Complete Act 1 on Nightmare mode"],
        ["Legendary Keepmaster", "Complete Act 2 on Nightmare mode"],
        ["Legendary War Mage", "Complete Act 3 on Nightmare mode"],
        ["Lights Out!", "Get 20 chandelier kills in one level"],
        ["Master War Mage", "Complete Act 3"],
        ["Member: 30k Club", "Kill 30,000 orcs"],
        ["Natural 20!", "Get a 20 kill streak"],
        ["No Traps for You!", "Win an act 2 or 3 level without using any traps"],
        ["Ogre Bisque", "Kill an Ogre in a Lava Pit or an Acid Pit"],
        ["Perfect 10!", "Get a 10 kill streak"],
        ["Pow! Pow!", "Get 50 kills with explosive barrels on one level"],
        ["SG1", "Go through portals 20 times in one level"],
        ["Skin of your Teeth", "Win a level with 1 rift point left"],
        ["Tenderized!", "Get 50 pounder kills in one level"],
        ["Tunnel Vision", "Win an act 2 or 3 level using a single trap type"],
        ["Ultimate War Mage", "Earn 5 skulls on every level on War Mage difficulty"],
        ["What a Mess!", "Get a 30 kill streak"],
        ["Who Wants Pancakes?", "Get 50 kills with the rolling log in one level"],
        ["Who Wants Some?!", "Get a 40 kill streak"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
