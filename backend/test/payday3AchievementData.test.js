import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/payday-3.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1272080 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 22 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("payday-3");

test("getPlannerData('payday-3') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for payday-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every PAYDAY 3 achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every PAYDAY 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 PAYDAY 3 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Afterparty", "Complete Rock The Cradle after surviving 4 full assaults on Very Hard or above."],
        ["Art Critic", "Complete Under The Surphaze having stolen all art from the 7 exhibitions on Very Hard or above."],
        ["Arts and Crafts", "Customize a mask."],
        ["Cleanin' It Out", "Complete Dirty Ice having secured all cleaned jewelry bags on Overkill."],
        ["Closing the Account", "On Gold and Sharke empty the vault of its valuables and secure all the loot on Hard or above."],
        ["Color Me Surprised", "Complete No Rest For The Wicked without letting a dye pack explode on Very Hard or above."],
        ["Crowd Control", "Complete Road Rage without letting a single civilian flee, die or be traded on Hard or above."],
        ["Danger, High Voltage", "Stun 4 law enforcers by destroying a Zapper's battery pack on Hard or above."],
        ["Guns Don't Kill People...", "Complete a heist after getting at least 50 turret kills on Hard or above."],
        ["Insurance Policy", "Complete Touch The Sky with 4 active human shields on Hard or above."],
        ["Just... One... More...", "Complete No Rest For The Wicked having opened all deposit boxes."],
        ["Kitted Out", "Unlock all mods to a primary weapon."],
        ["No One Cared Who I Was...", "Until I put on the mask."],
        ["No Stone Unturned", "Complete 99 Boxes having secured the maximum amount of bags on Hard or above."],
        ["Party Crasher", "Complete Rock The Cradle without having the VIP invitation in stealth on Hard or above."],
        ["Smash and Grab", "Complete Dirty Ice within 120 seconds of spawning."],
        ["Spec Ops", "Complete Touch The Sky in stealth without killing a single guard on Overkill."],
        ["Tech Mogul", "On 99 Boxes secure both hi-tech devices at their maximum value on Very Hard or above."],
        ["The Hard Way", "Complete Gold and Sharke in stealth without accessing the HR computer."],
        ["Traffic Control", "Complete Road Rage without the truck having stopped until the end on Overkill."],
        ["True Connoisseur", "Steal the painting by Shanda Latrell in Under the Surphaze on Very Hard or above."],
        ["Unlimited Power", "Have the EDGE, GRIT and RUSH buffs active at the same time."],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
