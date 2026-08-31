import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-v2-remastered.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 728740 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sniper-elite-v2-remastered");

test("getPlannerData('sniper-elite-v2-remastered') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-v2-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every Sniper Elite V2 Remastered achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every Sniper Elite V2 Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 71 Sniper Elite V2 Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Seasoned Sniper", "Complete 40 hours of service"],
        ["A Stones Throw", "Distract 20 enemies with rocks"],
        ["Ambush King", "Kill 25 enemies with traps"],
        ["Apprentice Sniper", "Destroy the V2 Facility and escape to safety"],
        ["Bedpan Commando", "Resuscitate your partner 10 times in Cooperative mode"],
        ["Big Bang Splat", "Get an explosive kill in Multiplayer"],
        ["Bomb Happy", "Survive 10 games of Bombing Run"],
        ["Can Do!", "Complete all Overwatch missions in Cooperative mode"],
        ["Competitive Nature", "Complete 3 Multiplayer Deathmatch games"],
        ["Cooking Off", "Snipe a grenade on an enemy's webbing from 100m"],
        ["Cooperative Play", "Complete any mission in Campaign Coop"],
        ["Deadeye", "Snipe an enemy through his eye"],
        ["Detonator", "Career total of 50 shots on explosives"],
        ["Dog Tag Collector", "Collect 12 dog tags in Multiplayer games"],
        ["Double Dose", "Snipe 2 people with one shot"],
        ["Ear Plugs", "Kill an enemy while your rifle fire is masked by a loud sound"],
        ["Expert Sniper", "Eliminate Müller"],
        ["Exploding Pants", "Snipe a grenade on an enemy's webbing 12 times"],
        ["Feared Sniper", "Destroy the V2 rocket"],
        ["Fingered", "Snipe off an enemy's finger"],
        ["First Kill", "Get the first kill in a Multiplayer game"],
        ["Fish Tank", "Send the tank into the river by blowing up the bridge"],
        ["Flag Bearer", "Capture the flag in a Multiplayer game"],
        ["Flesh Wounds", "Incapacitate 50 enemies"],
        ["Front and Center", "Get a scoped headshot over 150m"],
        ["Fuel Tank", "Destroy a tank by sniping the fuel supply"],
        ["Get Off the Ground", "Kill everyone in the convoy from ground level, except for Kreidl"],
        ["Go the Distance", "Get a cumulative sniped kill distance of a marathon"],
        ["Gold Rush", "Find and retrieve all the stolen gold bars"],
        ["Gung Ho", "Snipe 100 moving targets"],
        ["He Tripped!", "Kill 25 enemies with trip mines"],
        ["Head Honcho", "Get 100 sniped headshots"],
        ["Hide and Hope", "Complete a mission without being shot"],
        ["High and Mighty", "Wipe out the Elite Russian Sniper Team from the rooftops"],
        ["Iron Lung", "Hold your breath for a cumulative time of half an hour"],
        ["Journeyman Sniper", "Hold off the Russian advance"],
        ["Jungle Juice", "Find and snipe all the hidden bottles throughout the game"],
        ["Kill Tally Killer", "Get 25 kills in Kill Tally"],
        ["Kill Tally Survivor", "Survive 5 waves in Kill Tally"],
        ["Kilroy was Here", "Make it through the tower to the winch room without being spotted"],
        ["Legendary Sniper", "Prevent Wolff from escaping"],
        ["Long Shot Hot Shot", "Earn 10 longest shot trophies in Multiplayer"],
        ["Make Every Bullet Count", "Complete a mission with 100% accuracy, using only rifles"],
        ["Master Sniper", "Uncover Wolff's plan"],
        ["Mousetrap Fuse", "Use a trip mine to kill an enemy who is trying to assault your position"],
        ["Novice Sniper", "Stop the convoy"],
        ["Pass the Buck", "Get a sniped ricochet headshot"],
        ["Potato Masher", "Kill 100 enemies with explosives"],
        ["Pro Sniper", "Collect intel from the church and make it out alive"],
        ["Secret Service", "Kill all the guards in Saint Pierre before getting to the church without being detected"],
        ["Shoot the Alps", "Get a total shot distance of over 4,000 meters in Saint Pierre"],
        ["Silence is Golden", "Complete Neudorf Outpost without alerting any AI"],
        ["Silent but Deadly", "Covertly kill 25 unaware enemies"],
        ["Skilled Sniper", "Stop the execution"],
        ["Smoking Kills", "Kill 6 smoking soldiers on Neudorf Outpost"],
        ["Sneaky", "Accumulate 50 stealth kills in single player"],
        ["Sniper Elite", "Complete all missions on Sniper Elite difficulty"],
        ["Social Killer", "Get 100 Multiplayer kills"],
        ["Target Eliminated!", "As a sniper in Overwatch, snipe 50 enemies tagged by your partner"],
        ["Target Exploded", "Kill an enemy by shooting nearby explosive barrels"],
        ["Target Führer", "Kill Hitler with a testicle shot"],
        ["Target Spotted!", "As a spotter in Overwatch, tag 50 enemies"],
        ["Team Leader", "Finish with the highest points in any team based Multiplayer game"],
        ["Trainee Sniper", "Escape the German assault"],
        ["Veteran Sniper", "Discover the location of the V2 launch site"],
        ["War Host", "Host any Multiplayer game through to completion"],
        ["War Reporter", "Capture 20 war stories in Photo Mode"],
        ["Watchmen", "Eliminate all 5 Snipers watching the meeting point on The Landwehr Canal without them spotting you"],
        ["Windy Sniper", "Win a Distance King Multiplayer game with Wind Strength set to High"],
        ["World Record", "Get 506 cumulative sniper kills"],
        ["You were only supposed to...", "Allow all 3 commanders to enter the command centre in The Landwehr Canal, then blow the doors"],
    ];

    assert.strictEqual(officialAchievements.length, 71, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
