import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-5.json - 71 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1029690 (fetched through this app's own services/steamApi.js).
// 68 of 71 ship a real, official Steam description, quoted
// verbatim below. The 3 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sniper-elite-5");

test("getPlannerData('sniper-elite-5') returns real planner data with 71 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-5");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 71);

});

test("every Sniper Elite 5 achievement has a unique id from 1 to 71 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 71 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 71);
    assert.strictEqual(new Set(apinames).size, 71);

});

test("every Sniper Elite 5 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 officially-described Sniper Elite 5 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "REWARD_5_BUNKER_BUSTER",
        "REWARD_7_TARGET_AMERICA",
        "REWARD_8_THE_KRAKEN_SLEEPS",
    ]);

    assert.strictEqual(hiddenApinames.size, 3, "sanity check - Sniper Elite 5 has 3 hidden achievements");

    const officialAchievements = [
        ["Alpha", "Wolf Mountain - Complete the mission on Authentic difficulty."],
        ["As quiet as a mouse", "Kill 50 enemies during a Sound Mask."],
        ["Best of the Best", "Complete the entire campaign on Authentic difficulty."],
        ["Brains of the Operation", "Kill Möller with a headshot."],
        ["Burn after reading", "Collect 39 classified documents."],
        ["Can't Outrun A Bullet", "Kill Möller with a rifle at a distance of 600 meters or more."],
        ["Climbing the Ladder", "Reach rank 40."],
        ["Close Quarters", "Perform 100 lethal takedowns."],
        ["Confirming Suspicions", "Raid Chateau de Berengar and Möller's Office."],
        ["Covert Elimination", "Wolf Mountain - Kill Hitler and exfiltrate without ever being detected."],
        ["Das Familienjuwel", "Wolf Mountain - Kill Hitler with a testicle shot."],
        ["Der Geist", "Achieve 250 ghost kills."],
        ["Die Nussknacker Sweet!", "Get a testicle shot with a rifle from a distance of 100 meters or more."],
        ["Don't hold your breath", "Make the final shot in St Nazaire without using Empty Lung."],
        ["Eagle Eyed", "Destroy 24 Dead-eye Targets."],
        ["Enemy at the Gates", "Defeat an invading Sniper Jager."],
        ["Explosive Efficiency", "Kill 3 on-foot soldiers with one grenade."],
        ["Fields of Glory", "Play one team-based PVP match"],
        ["Fight Another Day", "Rough Landing - Complete the mission with a 2 star rating."],
        ["From Führer Away", "Wolf Mountain - Kill Hitler at a distance of 300 meters or more."],
        ["From Paris with Love", "Collect 41 Personal letters."],
        ["Führerious Repetition", "Wolf Mountain - Kill Hitler 5 times."],
        ["Ghost of Falaise", "Conqueror - Complete the mission with a 2 star rating."],
        ["Going Overboard", "Kraken Awakes - Complete the mission on Authentic difficulty."],
        ["Gunslinger", "Kill 150 enemies with a Pistol."],
        ["Herr Today, Gone Tomorrow", "Wolf Mountain - Complete the mission."],
        ["If You Go Down To The Woods Today", "Complete the campaign mission - Rough Landing"],
        ["It'll Buff Right Out", "Destroy Möller's shiny new car."],
        ["It's Starting to Crack", "Destroy Operation Kraken's production facility at Martressac."],
        ["Just a Flesh Wound", "Complete a mission, excluding the \"Loose Ends\" mission, in any difficulty without healing."],
        ["Last Resort", "Complete the campaign mission - Landing Force."],
        ["Liberté", "Complete the campaign."],
        ["Locomotion Commotion", "In Martressac, create an accident that destroys the train in the storage area."],
        ["Lord of War", "Get a kill with 20 different weapons."],
        ["Master of Pistols", "Obtain six pistol-related mastery medals."],
        ["Master of Rifles", "Obtain six rifle-related mastery medals."],
        ["Master of Secondaries", "Obtain six secondary-related mastery medals."],
        ["Master-at-arms", "Become the Master of each weapon."],
        ["Meeting Resistance", "Weaken the Atlantic wall and rendezvous with Blue Viper."],
        ["My Little Friend", "Kill 50 soldiers with heavy weapons."],
        ["No Stone Unturned", "Complete 16 optional objectives."],
        ["Operation Foxley", "Wolf Mountain - Complete the mission with a 2 star rating."],
        ["Operation Overlord", "Conqueror - Complete the mission on Authentic difficulty."],
        ["Opposing Force", "Win one Axis Invasion as an Invader."],
        ["Organ Grinder", "Hit every organ at least once with a rifle."],
        ["Out of Scope", "Kill 150 enemies with a rifle while in Iron Sights."],
        ["Precision Is Key", "Kill 150 enemies with any weapon while in Iron Sights."],
        ["Reich To The Point", "Wolf Mountain - Kill only Hitler and exfiltrate."],
        ["Resourceful", "Kill 50 enemy soldiers with Found Weapons."],
        ["Rigged to Blow", "Kill 20 soldiers using booby traps."],
        ["Road Rage", "In Secret Weapons, find and destroy one of each type of vehicle present in this mission."],
        ["Set Europe Ablaze", "Kill 50 enemies with traps."],
        ["Sharpshooter", "Kill 350 enemies with a Rifle."],
        ["Shipbreaker", "Complete the campaign mission - Kraken Awakes."],
        ["Shoot for the Moon", "Complete three survival missions."],
        ["Siegebreaker", "Complete the campaign mission - Conqueror"],
        ["Sight Beyond Sights", "Kill Möller with a rifle, while in Iron Sights."],
        ["Sink or Swim", "Kraken Awakes - Complete the mission with a 2 star rating."],
        ["Skirmisher", "Kill 300 enemies with a Secondary Weapon."],
        ["Snake in the Grass", "While in Tall Grass, kill 50 soldiers."],
        ["Souvenir hunter", "Collect 24 Hidden Items."],
        ["Strategist", "Make a tank shoot and destroy another enemy vehicle."],
        ["Stroll in the Woods", "Rough Landing - Complete the mission on Authentic difficulty."],
        ["Taking it Back", "Liberate Desponts-sur-Douve and secure Allied transport routes."],
        ["The Kraken Wakes", "Infiltrate Beaumont-Saint-Denis and Uncover Operation Kraken."],
        ["The Long Game", "Total kill distance of 100,000 meters."],
        ["Tinkerer", "Interact with 24 workbenches."],
        ["Up close and personal", "Melee takedown each one of the three snipers guarding the bridge."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 3 hidden Sniper Elite 5 achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["REWARD_5_BUNKER_BUSTER", "Change the Channel"],
        ["REWARD_7_TARGET_AMERICA", "Target America"],
        ["REWARD_8_THE_KRAKEN_SLEEPS", "The Kraken Sleeps"],
    ];

    assert.strictEqual(names.length, 3, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
