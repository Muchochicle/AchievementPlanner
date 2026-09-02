import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trepang2.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1164940 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("trepang2");

test("getPlannerData('trepang2') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for trepang2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Trepang2 achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Trepang2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Trepang2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["..Loved", "Completed Level: Horizon HQ"],
        ["50 shades of burnt", "Destroy 1000 cultist books"],
        ["Average Weapons Enjoyer", "Acquire all weapon parts"],
        ["Average Weapons Fan", "Use a weapon bench to customize a weapon for the first time"],
        ["Backfired", "Shoot an enemy’s thrown grenade, killing him with it"],
        ["Big Brain", "Collect all intel docs"],
        ["Complexity", "Complete Level: Gunnarson Complex"],
        ["Cost Effective", "Kill 3 enemies with 1 grenade"],
        ["CV", "Collect the Syndicate coin 'CV'."],
        ["CVI", "'Cycle 106 comes to an end' - a story-completion marker."],
        ["Dark Secrets", "Complete Level: Site 32"],
        ["Dry Party", "Destroy 100 beer/wine bottles"],
        ["Efficient", "Use every bullet in a pistol magazine to get headshot kills"],
        ["Emersus", "Eviscerate Dr. Emerson's corpse in the Pandora Institute."],
        ["Erase Your Light", "Escape from Site 14"],
        ["Flashlight!", "Alert an enemy by shining a flashlight from behind, shoot him before he turns around"],
        ["How’s That Helmet Working?", "Kill an enemy by shooting through his helmet with a DMR"],
        ["IT Specialist", "Complete Level: Iron Dragon Data Center"],
        ["JuggerNOT", "Kill a heavy soldier"],
        ["Lost and Found", "Complete Level: Crash Site"],
        ["LXXVIII", "Kill the Horizon CEO."],
        ["Not So Hard", "Complete all campaign and side missions on Hard difficulty or higher"],
        ["Oh Snap!", "Execute your first hostage"],
        ["Oil Spill", "Complete Level: Oil Rig"],
        ["One Last Mission", "'106 is reborn' - reach the post-campaign bonus mission."],
        ["Pest Control", "Kill the Mothman."],
        ["Slide Into Your DMs", "Slide into an enemy and grab him while he’s ragdolled"],
        ["Smol Brain", "Collect 50% of all intel docs"],
        ["Solid 106", "Stealth kill an entire squad without anyone becoming alerted"],
        ["Spelunker", "Complete Level: Kellington Colliery"],
        ["Stick Around", "Kill an enemy with a tomahawk"],
        ["Stylish", "Grab an enemy, throw and kill him with a headshot"],
        ["Subject 106", "Complete all campaign and side missions on Extreme difficulty or higher"],
        ["Supersoldier", "Complete all campaign and side missions on Very Hard difficulty or higher"],
        ["Take Your Flight", "Complete Level: Pandora Institute"],
        ["That Was a Close One!", "Kill an enemy with a headshot on final bullet in the mag"],
        ["The Truth", "Reach the secret ending where 106 lets the world know the truth."],
        ["Think Fast!", "Kill an enemy with a flashbang impact"],
        ["To A Place Where You Will Be Remembered", "Complete Level: Jorvik Castle"],
        ["To A Place Where You Will Be...", "Complete Level: Site 83"],
        ["TREPANG2", "Break The Cycle"],
        ["Trepangus", "Throw an enemy into the vent in the first combat encounter in  Site 14"],
        ["TrePayne", "Acquire the dual wield serum"],
        ["Unbreakable Will", "Complete all campaign and side missions on Rage Mode difficulty"],
        ["XCI", "Kill the Patriarch."],
        ["XCV", "Collect the Syndicate coin 'XCV'."],
        ["You Monster!", "Throw a TF27 soldier into the helicopter blades in Site 14"],
        ["You're a Firework!", "Shoot an enemy while he’s thrown as a hostage grenade, detonating his grenade"],
        ["You’re Paying For Their F***ing Surgery!", "Kill all TF27 soldiers in Site 14"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
