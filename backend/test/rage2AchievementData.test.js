import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rage-2.json - 64 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 548570 (fetched through this app's own services/steamApi.js).
// 56 of 64 ship a real, official Steam description, quoted
// verbatim below. The 8 hidden achievements ship no Steam description;
// their conditions here are curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rage-2");

test("getPlannerData('rage-2') returns real planner data with 64 curated achievements", () => {

    assert.ok(game, "expected real planner data for rage-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 64);

});

test("every RAGE 2 achievement has a unique id from 1 to 64 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 64 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 64);
    assert.strictEqual(new Set(apinames).size, 64);

});

test("every RAGE 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 officially-described RAGE 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_054",
        "ACHIEVEMENT_055",
        "ACHIEVEMENT_056",
        "ACHIEVEMENT_057",
        "ACHIEVEMENT_058",
        "ACHIEVEMENT_059",
        "ACHIEVEMENT_060",
        "ACHIEVEMENT_061",
    ]);

    assert.strictEqual(hiddenApinames.size, 8, "sanity check - RAGE 2 has 8 hidden achievements");

    const officialAchievements = [
        ["A Noah Lot", "Complete 5 Arks"],
        ["Acid House", "Complete the Torn Plains Race under 3:03"],
        ["Air Drop Down", "Activate all Air Drops in Overgrown City"],
        ["Bytesize Takedown", "Destroy 128 Vehicles while driving the Phoenix"],
        ["Can't Stop Pop", "Pop 17 Balloons"],
        ["Captive", "Complete mission: Captive"],
        ["Come on and Slam!", "Crush 50 enemies using Slam"],
        ["Crushed", "Kill an Abadon Mutant Crusher with the Phoenix"],
        ["Dozing", "Scoop up an enemy with the Dumper Truck"],
        ["EcoLocation", "Visit the Overgrown City EcoPod"],
        ["Efficiency", "Use the Assault Rifle to kill 5 enemies in a row without reloading"],
        ["Explosive Ending", "Kill an enemy with a Turret Drone explosion"],
        ["Flying Skulls", "Kill 25 airborne Skeletons with the Sword of Transitus"],
        ["Forlorn Watcher", "Travel to the summit of the Broken Tract EcoPod"],
        ["Friend of Ford", "Complete the Reclaim & Rebuild Project"],
        ["Furorem Bonetower", "Complete Bonetower: Furorem"],
        ["Gonevoy", "Take down 1 Convoy Leader"],
        ["Goon De-leet", "Kill 1337 Goons"],
        ["Goon Fire", "Blow up a Goon with the Goon tank \"Booma\""],
        ["Hangtime", "Jump over 100 meters with a ground vehicle"],
        ["Heavy Boots", "Complete the game in Ironman Mode"],
        ["Hellspring Bonetower", "Complete Bonetower: Hellspring"],
        ["Hot Potato", "Reflect an enemy's grenade"],
        ["Hyper-Express", "Kill 2 enemies with the same shot using the Hyper-Cannon"],
        ["I am Death Incarnate!", "Complete the game on Ultra Nightmare Difficulty"],
        ["Mata Hari Manners", "Destroy 30 Spy Drones"],
        ["Means to an End", "Complete mission: Means to an End"],
        ["Nightmare", "Complete the game on Nightmare Difficulty"],
        ["Off Balance", "Knock 19 bikers off their bikes with the Phoenix's \"Dodge\""],
        ["Off With Their Heads", "Headshot a total of 100 enemies using the Wingstick"],
        ["On The Limit", "Maintain top speed for 10 seconds with the Raptor"],
        ["Over 9000", "Drive over 9000 meters"],
        ["Overly driven", "Reach an Overdrive multiplier of 10"],
        ["Peek-a-boo", "Kill a cloaked Shrouded enemy"],
        ["Postmodern Picasso", "Rupture a total of 200 enemies using the Rocket Launcher"],
        ["Pseudo Post-Mortem", "Kill 3 enemies within 10 seconds after restoring all health with the Defibrillation"],
        ["Questionable Sanctity", "Complete all Ghost Sanctuaries in Overgrown City"],
        ["Reaching out to the Past", "Traverse the bridge to the EcoPod in the Wilds"],
        ["Recondite", "Complete the Recondite Ark location"],
        ["Ringbender", "Complete the Bendring Ark location"],
        ["Sensus Bonetower", "Complete Bonetower: Sensus"],
        ["Skeet Shooting", "Hit an airborne enemy with the Shotgun's Slug Shot"],
        ["Slaughter to the Lamb", "Complete mission: Slaughter to the Lamb"],
        ["Striking Skulls", "Kill 100 Skeletons with the Sword Transitus"],
        ["Sunken Hope", "Visit the Wetlands EcoPod"],
        ["TerrorMania", "Return the NECRODISC and stop the Skeletal Army"],
        ["The Bigger They Are...", "Kill 7 Abadon Mutant Crushers"],
        ["The Bowels of a Rust Giant", "Venture inside the Dune Sea EcoPod"],
        ["The Enemy Of My Enemy", "Kill an enemy that is trying to kill an enemy"],
        ["THIS IS RAGE", "Use Dash Strike kick to kill 10 enemies"],
        ["Tristitia Bonetower", "Complete Bonetower: Tristitia"],
        ["Unloaded", "Shoot 70 bullets within 16 seconds using the Assault Rifle"],
        ["Veritas Bonetower", "Complete Bonetower: Veritas"],
        ["Wasteland Vagabond", "Visit every Trade Coalition settlement"],
        ["Within the Walls", "Complete mission: Within the Walls"],
        ["Zipper", "Kill 13 enemies while riding ziplines"],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 8 hidden RAGE 2 achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_054", "The Ranger"],
        ["ACHIEVEMENT_055", "Blackout"],
        ["ACHIEVEMENT_056", "The Signal"],
        ["ACHIEVEMENT_057", "Wasteland Celebrity"],
        ["ACHIEVEMENT_058", "Beneath the Surface"],
        ["ACHIEVEMENT_059", "Ground Control"],
        ["ACHIEVEMENT_060", "Double Cross"],
        ["ACHIEVEMENT_061", "Project Dagger"],
    ];

    assert.strictEqual(names.length, 8, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
