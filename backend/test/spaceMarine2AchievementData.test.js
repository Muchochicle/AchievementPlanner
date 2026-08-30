import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/space-marine-2.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2183900 (fetched through this app's own services/steamApi.js). 16 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("space-marine-2");

test("getPlannerData('space-marine-2') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for space-marine-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Space Marine 2 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Space Marine 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Space Marine 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Blight to Be Purged", "Kill 20,000 enemies (all game modes combined)"],
        ["An End to Heresy", "Kill a Lesser Sorcerer while he's reviving a Rubric Marine"],
        ["Bespoke", "Customise a full Armour set for one Class"],
        ["Break of Dawn", "Complete the campaign mission that reveals the true nature of the Aurora device."],
        ["Chaos All Along", "Complete the campaign mission that uncovers the Chaos presence on Kadaku."],
        ["Crude but Effective", "In co-op Operations, deploy the acid bomb in the promethium well to destroy the Tyranid swarm (Operation 01: Inferno)."],
        ["Data Mining", "Collect all Dataslates"],
        ["Dead Center", "As a Sniper, make 250 Headshots"],
        ["Defender of Humanity", "Overcome every challenge and achieve ultimate victory"],
        ["Dominator", "Play 10 Seize Ground matches in Eternal War mode"],
        ["Douse the Flames", "In co-op Operations, destroy the Chaos warp beacon (Operation 04: Reliquary)."],
        ["Enemy Revealed", "Complete the campaign mission in which the traitors are revealed and the Chaos Sorcerer is killed."],
        ["Field of Battle", "Kill 100 enemies using environmental hazards"],
        ["Furious Retribution", "Kill 100 enemies using Righteous Fury"],
        ["Glorious Victory", "Win any match in Eternal War mode"],
        ["Guardian's Might", "As a Bulwark, kill 100 enemies with every available Melee Weapon"],
        ["I'll Be Watching You", "Complete the Warhammer 40,000: Space Marine 2 campaign."],
        ["Immovable Object", "As a Heavy, kill 500 enemies while in Heavy Stance"],
        ["Into the Abyss", "Complete the campaign mission in which you hold the line against the full Chaos invasion."],
        ["Know No Fear", "Break a Scarab Occult Terminator's Melee Combo Attack with 2 Perfect Parries in a row"],
        ["Lightning Strike", "As a Vanguard, perform 100 Gun Strikes"],
        ["Master of Arsenal", "As a Tactical, kill 25 enemies with every available Primary Weapon"],
        ["Merciless", "Achieve a streak of 5 kills without dying in Eternal War mode"],
        ["My Face Is My Shield", "Complete the campaign mission that begins with an orbital drop-pod insertion onto the planet surface."],
        ["One Ugly Xenos", "Bring down a Lictor before it attacks from an ambush"],
        ["Outbound Payload", "Deliver a nova cannon warhead to the Tyranid position"],
        ["Principia Imperialis", "Find 200 pickups in Operations mode"],
        ["Purge Them All", "Mark every enemy type"],
        ["Resurrection", "In co-op Operations, reactivate the ancient weapon \"The Sword of Atreus\" (Operation 05: Fall of Atreus)."],
        ["Sharpest Edge", "Reach the maximum Level for one Melee Weapon"],
        ["Sic Semper Tyrannis", "In co-op Operations, kill the Hive Tyrant (Operation 02: Decapitation)."],
        ["Silence", "Kill 5 enemies while they are conducting a Call for Reinforcements"],
        ["Still a True Son of the Emperor", "Kill 41,000 Enemies (all game modes combined)"],
        ["Strategic Specialty", "Reach the maximum Level for one Class"],
        ["Strongest Shot", "Reach the maximum Level for one Ranged Weapon"],
        ["Tactical Genius", "Win a match in Eternal War mode with every Class"],
        ["Target Acquired", "Complete the campaign mission that pinpoints the location of Adept Morias Leuze and defends the facility core."],
        ["The Art of Dismemberment", "Perform 50 unique Finishers"],
        ["The Die Is Cast", "Complete the campaign prologue, in which Titus is reinstated and rises again as a Primaris Space Marine."],
        ["The Thousand Dead Sons", "Kill 1000 Chaos servants in Operations mode"],
        ["Thunderous Impact", "As an Assault, hit 500 total enemies with Ground Pound"],
        ["Unhand My Brother!", "Force a Ravener to release a grabbed Squad Member"],
        ["Unleash the Cannon", "Complete the campaign mission in which you retake the anti-aircraft batteries and destroy the Tyranid hive ship."],
        ["Unwavering Faith", "Play 10 Capture and Control matches in Eternal War mode"],
        ["Valour Crest", "Complete any Mission in Operations mode on Ruthless Threat Level"],
        ["Vital Asset", "Complete the campaign mission that rescues Adept Morias Leuze from the Chaos assault."],
        ["Voice in the Dark", "In co-op Operations, eliminate the Daemonhost and restore vox communication (Operation 03: Vox Liberatis)."],
        ["War Machine", "Play 10 Annihilation matches in Eternal War mode"],
        ["Why Is It Always You Three?", "Listen to the whole of the Chaplain's dialogue when he summons Titus, Gadriel and Chairon aboard the Battle Barge."],
        ["Xenos Exterminator", "Kill 1000 Tyranids in Operations mode"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
