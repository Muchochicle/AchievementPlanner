import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cyber-shadow.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 861250 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("cyber-shadow");

test("getPlannerData('cyber-shadow') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for cyber-shadow");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Cyber Shadow achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Cyber Shadow achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Cyber Shadow achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100%", "Finish normal mode with all powerups collected."],
        ["A thousand souls", "Find all HP upgrades."],
        ["Airtime", "Stay airborne for 30 seconds."],
        ["Attacking aggressively", "Defeat the Dropship in under 30 seconds."],
        ["Blade's plenty", "Defeat Biohunter with sword only."],
        ["Boring", "Destroy 5 hunter bores."],
        ["Born ready", "Finish normal mode without collecting any HP or SP upgrades."],
        ["Deflect evil", "Get parry."],
        ["Don't touch the paint", "Complete the bike ride without taking damage."],
        ["Dry socks", "Defeat Mekadragon without falling into water."],
        ["Eye for an eye", "Defeat each of the small eyes before defeating Spiderail."],
        ["Fast as lightning", "Finish normal mode in under 3 hours."],
        ["Fast track", "Defeat Tunnel Cleaner in under 60 seconds."],
        ["Fight with honor", "Defeat the Apparitor without hitting him in the back."],
        ["Floor is lava", "Defeat six AI vessel defense system turrets without touching floor."],
        ["Focused effort", "Defeat Hunter Tank without destroying the popup turrets."],
        ["Forged will", "Get katana forge."],
        ["Gadgetmaster", "Find eight different special items."],
        ["Live forever", "Reach the dojo without dying."],
        ["Lonely robot", "Find the lone robot in the train tunnel."],
        ["Long distance", "Defeat Laserbrain without hitting it with your sword."],
        ["Maximum power", "Find all SP upgrades."],
        ["Monkey around", "Get wall slide."],
        ["No you", "Parry 50 times."],
        ["Not a scratch", "Defeat Scrambler without taking damage."],
        ["Overpowered", "Get charge."],
        ["Pacifist", "Reach the Smasher without killing enemies."],
        ["Ping pong", "Defeat Subject Alpha v1 by parrying only."],
        ["Pogo master", "Lightning strike the Combinatron head ten times without landing."],
        ["Returned to ethos", "Finish normal mode."],
        ["Rise to the challenge", "Get rising fire."],
        ["Saving the clan", "Get shuriken."],
        ["Show off", "Defeat Subject Alpha v2 with 0 SP at the start of battle."],
        ["Smashing", "Defeat Smasher without destroying the wall turrets."],
        ["Strike them down", "Get airstrike."],
        ["Sudden movements", "Get dash."],
        ["Super ninja", "Shadow dash through 10 enemies without touching ground."],
        ["This is my boat", "Complete boat ride without teambots touching the deck."],
        ["Tools of the trade", "Find four different special items."],
        ["Wouldn't hurt a fly", "Complete Chapter 2 elevator without killing rust flies."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
