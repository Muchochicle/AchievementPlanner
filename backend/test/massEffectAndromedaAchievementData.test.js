import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mass-effect-andromeda.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238000 (fetched through this app's own services/steamApi.js).
// None are hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mass-effect-andromeda");

test("getPlannerData('mass-effect-andromeda') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for mass-effect-andromeda");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Mass Effect: Andromeda achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Mass Effect: Andromeda achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Mass Effect: Andromeda achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Activation", "Activate the Remnant city."],
        ["All Clear", "Increase all discovered planets to 100% viability."],
        ["Alliance", "Ally with an outlaw faction."],
        ["Almost There", "Reach Level 25 in single player mode or Level 15 in multiplayer mode."],
        ["APEX", "Complete the multiplayer mode tutorial mission."],
        ["Buccaneer", "Recover the krogan colony ship."],
        ["Building Bridges", "Stop the Roekaar leader."],
        ["Close Combat Specialist", "Kill 100 enemies with melee attacks."],
        ["Craftsmanship", "Craft armor or a gun with 3 augments."],
        ["Cryptographer", "Complete 20 Remnant puzzles in a single playthrough."],
        ["Data Mining", "Scan 100 different objects."],
        ["Death from Above", "Kill 100 enemies while hovering. (Single-Player)"],
        ["Exaltation", "Destroy the exaltation facility or save the angaran prisoners."],
        ["Explorer", "Complete a combined five strike team missions or APEX extractions in multiplayer mode."],
        ["Family Connections", "Reboot the Pathfinder."],
        ["Fastball", "Hit an enemy with a thrown enemy 25 times. (Single-Player)"],
        ["Fireworks", "Perform 100 power combos."],
        ["First Contact", "Land on an alien planet."],
        ["First Steps", "Meet the angara on Aya."],
        ["Foothold", "Establish an outpost."],
        ["Friendly Fire", "Direct your Remnant VI to attack each type of Remnant enemy. (Single-Player)"],
        ["Full Power", "Evolve one tech, one combat, and one biotic power to Rank 6. (Single-Player)"],
        ["Full Roster", "In single-player mode, recruit all six squadmates."],
        ["Hang Time", "Keep the Nomad airborne for 35 seconds."],
        ["Helping Hand", "Help Vetra's sister."],
        ["High Performance", "Unlock Rank 6 for each single-player profile type, or obtain a Level 6 multiplayer bonus stat."],
        ["Icebreaker", "Shatter a frozen enemy with a jump melee attack. (Single-Player)"],
        ["Initiated", "Gain access to the Tempest."],
        ["Jack Of All Trades", "Equip three different profile types."],
        ["Kitted Out", "Kill a foe with a Rank 5 weapon in a single-player game or equip a Rank 10 weapon in multiplayer."],
        ["Liberation", "Free the salarian ark."],
        ["Long-Distance Jump", "Travel at least 30m in a single jump. (Single-Player)"],
        ["Mastermind", "Using constructs, kill 100 enemies."],
        ["Matchmaker", "Complete romances with three different characters across all playthroughs."],
        ["Medic!", "Perform 25 revivals on teammates."],
        ["Mission Accomplished", "Activate Meridian."],
        ["Pathfinder", "Become the new Pathfinder."],
        ["Peak Condition", "Reach Level 40 in single-player mode or Level 20 in multiplayer mode."],
        ["Pinpoint Shot", "Hit 250 enemy weak points while using a scope. (Single-Player)"],
        ["Pyrotechnics Expert", "Light three enemies on fire with one continuous Flamethrower attack. (Single-Player)"],
        ["Role Model", "Rescue the asari ark."],
        ["Rough Landing", "Detonate a trip mine with a thrown enemy. (Single-Player)"],
        ["Signal Tracking", "Find the source of the strange signal Peebee discovers."],
        ["Sucker Punch", "Use a melee attack to hit 25 floating enemies. (Single-Player)"],
        ["Teamwork", "Create six strike teams or earn 25 assist medals in multiplayer mode."],
        ["Terminator", "Kill 2000 enemies."],
        ["Terraformer", "Increase a discovered planet to 100% viability."],
        ["Top Talent", "Promote a strike team to Level 20."],
        ["Trapshooter", "Hit 25 floating enemies with Concussive Shot, Lance, or Incinerate. (Single-Player)"],
        ["United", "Unite the outposts against a common threat."],
        ["Unwavering", "Complete an \"Insanity\" single-player game, or 5 \"Gold\" multiplayer extractions from any firebase."],
        ["Vanguard Surprise", "While cloaked, hit an enemy with a Charge attack. (Single-Player)"],
        ["Veteran", "Successfully complete a combined 25 strike team missions or APEX multiplayer mode extractions."],
        ["With Our Powers Combined", "Detonate 10 targets that were primed by a teammate. (Single-Player)"],
        ["World-Shaper", "Activate the first Remnant vault."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
