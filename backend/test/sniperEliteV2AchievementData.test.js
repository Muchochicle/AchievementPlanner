import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-v2.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 63380 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sniper-elite-v2");

test("getPlannerData('sniper-elite-v2') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-v2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Sniper Elite V2 achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Sniper Elite V2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Sniper Elite V2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice Sniper", "Destroy the V2 Facility and escape to safety"],
        ["Bedpan Commando", "Resuscitate your partner in co-op 10 times"],
        ["Bomb Happy", "Survive 10 games of Bombing Run"],
        ["Can Do!", "Complete all co-op Overwatch Missions"],
        ["Cooking Off", "Snipe a grenade on an enemy's webbing from 100m"],
        ["Deadeye", "Snipe an enemy through his eye"],
        ["Detonator", "Career total of 50 shots on explosives"],
        ["Double Dose", "Snipe 2 people with one shot"],
        ["Ear Plugs", "Kill an enemy while your rifle fire is masked by a loud sound"],
        ["Expert Sniper", "Eliminate Müller"],
        ["Feared Sniper", "Destroy the V2 rocket"],
        ["Fish Tank", "Send the tank into the river by blowing up the bridge"],
        ["Front and Center", "Get a scoped headshot over 150m"],
        ["Fuel Tank", "Destroy a tank by sniping the fuel supply"],
        ["Get Off the Ground", "Kill everyone in the convoy from ground level, except for Kreidl"],
        ["Go the Distance", "Get a cumulative sniped kill distance of a marathon"],
        ["Gold Rush", "Find and retrieve all the stolen gold bars"],
        ["Gung Ho", "Snipe 100 moving targets"],
        ["Head Honcho", "Get 100 sniped headshots"],
        ["Hide and Hope", "Complete a level without being shot a single time"],
        ["High and Mighty", "Wipe out the Elite Russian Sniper Team from the rooftops"],
        ["Iron Lung", "Hold your breath for a cumulative time of half an hour"],
        ["Journeyman Sniper", "Hold off the Russian advance"],
        ["Jungle Juice", "Find and snipe all the hidden bottles throughout the game"],
        ["Kilroy was Here", "Make it through the tower to the winch room without being spotted"],
        ["Legendary Sniper", "Prevent Wolff from escaping"],
        ["Make Every Bullet Count", "Complete a level with 100% accuracy, using only rifles"],
        ["Master Sniper", "Uncover Wolff's plan"],
        ["Mousetrap Fuse", "Use a trip mine to kill an enemy who is trying to assault your position"],
        ["Novice Sniper", "Stop the convoy"],
        ["Pass the Buck", "Get a sniped ricochet headshot"],
        ["Potato Masher", "Kill 100 enemies with explosives"],
        ["Pro Sniper", "Collect intel from the church and make it out alive"],
        ["Secret Service", "SAINT PIERRE – Kill all the guards before getting to the church without being detected"],
        ["Shoot the Alps", "SAINT PIERRE – Get a total shot distance of over 4000 meters"],
        ["Silence is Golden", "Complete Neudorf Outpost without alerting any AI"],
        ["Silent but Deadly", "Covertly kill 25 unaware enemies"],
        ["Skilled Sniper", "Stop the execution"],
        ["Smoking Kills", "Kill 6 smoking soldiers on Neudorf Outpost"],
        ["Sniper Elite", "Complete all missions on highest difficulty"],
        ["Target Eliminated!", "As a sniper in Overwatch, snipe 50 enemies tagged by your partner"],
        ["Target Spotted!", "As a spotter in Overwatch, tag 50 enemies"],
        ["Trainee Sniper", "Escape the German assault"],
        ["Veteran Sniper", "Discover the location of the V2 launch site"],
        ["Watchmen", "Eliminate all 5 Snipers watching the meeting point on Landwehr Canal without them spotting you"],
        ["World Record", "Get 506 cumulative sniper kills"],
        ["You were only supposed to...", "Allow all 3 commanders to enter the command centre in Landwehr Canal, then blow the doors"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
