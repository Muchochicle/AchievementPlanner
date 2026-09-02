import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/enlisted.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2051620 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("enlisted");

test("getPlannerData('enlisted') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for enlisted");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Enlisted achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Enlisted achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Enlisted achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alles Kaput", "Destroy 500 enemy tanks"],
        ["Assaulter", "Kill 1 enemy using a submachine gun or an assault rifle"],
        ["Bad Doctor", "Kill 25 enemies with a Medic"],
        ["Battle hero", "Complete 50 battles as \"Battle Hero\""],
        ["Best of the best", "Achieve top 1 in battle"],
        ["Burning armor", "Destroy 1 enemy tank"],
        ["Cannon master", "Destroy 250 enemy vehicles (tanks, aircraft and APC) using engineer-built guns"],
        ["Chief in the sky", "Destroy 250 enemy aircraft"],
        ["Chief of Mining", "Destroy 100 enemy vehicles with anti-tank mines"],
        ["Close combat", "Kill an enemy using a melee weapon"],
        ["Conqueror", "Capture 10 points in one battle"],
        ["Destroyer", "Destroy 100 tanks and aircraft"],
        ["Engineer", "Build 1 fortification object using engineer class soldier"],
        ["Excellent combat training", "Complete a total of 25 Battlepass stages"],
        ["First Blood", "Get your first kill"],
        ["First Victory", "Win a battle"],
        ["Flametrooper", "Kill 10 enemies using a flamethrower or ampulomet"],
        ["General", "Complete a total of 20 researches for any country"],
        ["General's epaulets", "Achieve the military rank \"Brigadier General\""],
        ["Genius Engineer", "Your rally points or mobile spawn points on APC have been used by your teammates 100 times"],
        ["God of War", "Kill 5000 enemies with rockets or bombs or artillery fire called by Radioman class soldiers"],
        ["Grenadier", "Kill 1 enemy with hand grenades"],
        ["Gunner", "Kill 10 enemies using a machine gun"],
        ["Knowledge is Power", "Achieve research tier 3 in any country"],
        ["Marshall's baton", "Achieve the military rank \"Marshal\""],
        ["Master of Defense", "Kill 5000 enemies while defending a strategic point"],
        ["Master of Offense", "Kill 5000 enemies while attacking a strategic point"],
        ["Medal of honor", "Complete a total of 50 Battlepass stages"],
        ["Mortarman", "Kill 10 enemies using a mortar"],
        ["Natural born leader", "Finish the battle in Top 30% of your team"],
        ["Officer Academy graduate", "Achieve the military rank \"Second Lieutenant\""],
        ["Professional", "Get a level 5 soldier, with five perks"],
        ["Quick draw", "Kill 10 enemies using a pistol"],
        ["Radioman", "Kill 10 enemies using artillery fire called by Radioman class soldiers"],
        ["Research II", "Complete a total of 2 researches for any country"],
        ["Research III", "Complete a total of 3 researches for any country"],
        ["Research IV", "Complete a total of 4 researches for any country"],
        ["Research V", "Complete a total of 5 researches for any country"],
        ["Sergeant school graduate", "Achieve the military rank \"Sergeant\""],
        ["Sniper elite", "Kill 20 enemies with headshots in a single battle"],
        ["Special forces", "Reach level 35 for any given squad"],
        ["Specialist", "Kill 30 enemy soldiers in one battle using flamethrower or mortar"],
        ["Step towards progress", "Achieve research tier 2 in any country"],
        ["The Armor-piercer", "Destroy 10 enemy tanks"],
        ["The Berserk", "Perform 50-kill streak with a single soldier without dying"],
        ["The Desperado", "Perform 10-kill streak with a single soldier without dying"],
        ["The Eagle Eye", "Kill 10 enemies with a hand weapon from more than 75 meters distance"],
        ["The Hunter", "Kill 10 enemies with headshots"],
        ["The Invader", "Capture or destroy 25 strategic objectives"],
        ["The Paratrooper", "Kill 250 enemies with a Paratrooper"],
        ["The Supplier", "Your Ammo boxes have been used by your teammates"],
        ["The Technician", "Kill 10 enemies using a tank, aircraft or APC"],
        ["The Trickster", "Kill tank commander leaning out of the hatch"],
        ["The Winner", "Win 10 battles in a row. If a player left the battle early, then this breaks the winning streak even if the player's team won. Custom battles and battles in events do not affect winning streaks."],
        ["Trap Master", "Kill 10 enemies with anti-personnel mine in single battle"],
        ["Trooper", "Kill 1 enemy using an bolt-action rifle"],
        ["Veteran", "Spend 100 hours in battles"],
        ["Welcome to Battlepass", "Complete a total of 2 Battlepass stages"],
        ["Wild division", "Complete 50 battles by killing at least 100 enemy soldiers"],
        ["Wipeout", "Kill all soldiers of one enemy infantry squad in less than 5 seconds"],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
