import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/doom-plus-doom-ii.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("doom-plus-doom-ii");

test("getPlannerData('doom-plus-doom-ii') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for doom-plus-doom-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every DOOM + DOOM II achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every DOOM + DOOM II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 DOOM + DOOM II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Man and a Half", "Get 20 kills using the berserk powerup in a single level."],
        ["Alternate Dimension", "Find a secret level."],
        ["An Important Looking Door", "Find a secret area."],
        ["Bowling for Gibs", "Gib three or more enemies with a single rocket explosion."],
        ["Burning Out of Control", "Complete any monster-filled level with 100% kills, items, and secrets."],
        ["Clean Slate", "Kill all monsters in any monster-filled level on 'Hurt me plenty' or higher."],
        ["Cookin' With Plasma", "Kill 5 enemies in 5 seconds with the Plasma Rifle."],
        ["DOOM", "Reach the end of 'DOOM'."],
        ["DOOM II", "Reach the end of 'DOOM II'."],
        ["Doormat", "Crush a corpse in a door."],
        ["Evilution", "Reach the end of 'TNT: Evilution'."],
        ["Groovy", "Get 3 multi-kills with the Shotgun."],
        ["Guns Are For Wusses", "Get 25 kills with your Fists in a single level."],
        ["Heavenly Joy", "Shoot 200 bullets consecutively with the Chaingun."],
        ["Hoarder", "Finish a level with 100% items picked up."],
        ["Indiscriminate Headhunter", "Kill one of every enemy."],
        ["Kill It With Fire", "Immolate a total of 30 arachnoid enemies with the Incinerator."],
        ["Legacy of Rust", "Reach the end of 'Legacy of Rust'."],
        ["Master Levels", "Reach the end of 'Master Levels for DOOM II'."],
        ["More Like a Dream", "Complete a level on Nightmare difficulty."],
        ["No Rest for the Living", "Reach the end of 'No Rest for the Living'."],
        ["Not So Friendly Fire", "Cause an enemy to kill another enemy."],
        ["Overkill", "Kill only a single enemy with a BFG9000 blast."],
        ["Overprepared", "Finish a level with 200% armor and 200% health."],
        ["Plutonia", "Reach the end of 'The Plutonia Experiment'."],
        ["Screen Wipe", "Obliterate 50 enemies with a single shot of the Calamity Blade."],
        ["Shoot It Until It Dies", "Finish off a Cyberdemon with the Pistol."],
        ["Sigil", "Reach the end of 'Sigil'."],
        ["Skeet Shooting", "Kill 4 enemies in 1 shot with the Super Shotgun."],
        ["The Only Thing They Fear Is You", "Complete any monster-filled level with 100% kills without taking any damage on Ultra-Violence or higher."],
        ["Timing Is Everything", "Kill 2 enemies with a single barrel explosion."],
        ["Until It Is Done", "Get 100 Chainsaw kills."],
        ["Untouchable", "Complete 8 different levels sequentially under par time without dying on Ultra-Violence or higher."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
