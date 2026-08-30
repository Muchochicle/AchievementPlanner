import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/spec-ops-the-line.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 50300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("spec-ops-the-line");

test("getPlannerData('spec-ops-the-line') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for spec-ops-the-line");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Spec Ops: The Line achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Spec Ops: The Line achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Spec Ops: The Line achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bridge Too Far", "The end of the line."],
        ["A Farewell To Arms", "You are relieved."],
        ["A Line, Crossed", "Choose vengeance."],
        ["A Line, Held", "Choose restraint."],
        ["A Man of Action", "Play it loose."],
        ["A Man of Patience", "Play it smart."],
        ["Adapt and Overcome", "Blow up 10 explosive objects, killing at least one enemy each time. (campaign only)"],
        ["Aim High", "Kill 250 enemies with headshots. (campaign only)"],
        ["Airspace Control", "Kill 10 enemies while they use zip lines or are rappelling. (campaign only)"],
        ["All You Can Be", "Complete any chapter with 60%+ accuracy without dying or reloading a checkpoint."],
        ["Applied Force", "Hit 10 enemies with your melee attack. (campaign only)"],
        ["Army of One", "Kill 3 enemies with a single grenade. (campaign only)"],
        ["Battle Management", "Kill 50 enemies using only the Attack Command. (campaign only)"],
        ["Blind Luck", "Kill 5 enemies using blind fire. (campaign only)"],
        ["Boot", "Complete game on \"Walk on the Beach\" difficulty."],
        ["Close Combat Carnage", "Kill 4 enemies with a shotgun in 10 seconds or less. (campaign only)"],
        ["Damn Close", "Kill an Edged Weapon Expert while he is up to 5 meters away. (campaign only)"],
        ["Damned if You Do", "Follow your orders."],
        ["Damned if You Don't", "Buck the chain of command."],
        ["Deer Hunter", "Kill an oryx. (campaign only)"],
        ["Desert Storm", "Engineer an exit strategy."],
        ["Friendly Fire", "Show mercy."],
        ["Good Training", "Sprint into cover 10 times while under fire. (campaign only)"],
        ["In Your Face", "Kick an enemy by vaulting over a cover. (campaign only)"],
        ["Intel Operative", "Recover all Intel Items."],
        ["Marksman - Grenade", "Kill 50 enemies with grenades. (campaign only)"],
        ["Marksman - Heavy Arms", "Kill 150 enemies with any heavy weapon. (campaign only)"],
        ["Marksman - Rifle", "Kill 350 enemies with any rifle. (campaign only)"],
        ["Marksman - Shotgun ", "Kill 75 enemies with any shotgun. (campaign only)"],
        ["Marksman - Small Arms", "Kill 100 enemies with any pistol or SMG. (campaign only)"],
        ["Marksman - Sniper", "Kill 50 enemies with any sniper rifle. (campaign only)"],
        ["MFWIC", "Complete game on \"FUBAR\" difficulty."],
        ["Preventive Diplomacy", "Kill an enemy just as they are throwing a grenade. (campaign only)"],
        ["Recon", "Recover 12 Intel Items."],
        ["Sierra Hotel", "Complete three chapters in a row without being killed or reloading a checkpoint."],
        ["Situational Awareness", "Stun an enemy by dumping sand on their head. (campaign only)"],
        ["Spotter", "Recover one Intel Item."],
        ["The Devil's Disciple", "Complete game on \"Suicide Mission\" difficulty."],
        ["The Great Escape", "Get out of here!"],
        ["The Horror", "Face the horrors of war."],
        ["The Human Factor", "Kill an enemy by tagging him with a sticky grenade. (campaign only)"],
        ["The Lost Battalion", "We have contact."],
        ["The Road Back", "Live and let live."],
        ["The Road To Glory", "Live and let die."],
        ["They Live", "What's lost is found."],
        ["Three Kings", "Stand united."],
        ["Too Late The Hero", "Carry on, soldier."],
        ["Treacherous Ground", "Look out below."],
        ["Unfriendly Fire", "Save a bullet."],
        ["We Were Soldiers", "Complete game on \"Combat Op\" difficulty."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
