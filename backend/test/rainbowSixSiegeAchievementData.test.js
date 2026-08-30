import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rainbow-six-siege.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 359550 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 48 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rainbow-six-siege");

test("getPlannerData('rainbow-six-siege') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for rainbow-six-siege");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Tom Clancy's Rainbow Six Siege achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Tom Clancy's Rainbow Six Siege achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Tom Clancy's Rainbow Six Siege achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Accessorizing", "Equip 50 weapon attachments."],
        ["Asset Protection", "Destroy 20 gadgets in Quick Match/Ranked Multiplayer."],
        ["Back in the Day ATK", "Play 10 rounds with a Pathfinder Attacker in Quick Match/Ranked Multiplayer."],
        ["Bang!", "Get 5 kills with a handgun."],
        ["Boomshakalaka", "Win 10 matches of Bomb in Quick Match/Ranked Multiplayer."],
        ["Brain Surgeon", "Get 50 headshots in Quick Match/Ranked Multiplayer."],
        ["Camera Shy", "Destroy 10 cameras as an Attacker."],
        ["Can't Breach This", "Win 100 rounds as a Defender in Quick Match/Ranked Multiplayer."],
        ["Close, but No Cigar", "Deactivate the defuser in 5 Bomb matches in Quick Match/Ranked Multiplayer."],
        ["Collector", "Collect and save 5000 Renown."],
        ["Coming Through!", "Breach and rappel through a window in Quick Match/Ranked Multiplayer."],
        ["Death From Above", "Destroy a floor with a Breach Charge in Quick Match/Ranked Multiplayer."],
        ["Designer", "Customize a weapon."],
        ["Don't Go in There!", "Kill an Attacker caught inside Barbed Wire in Quick Match/Ranked Multiplayer."],
        ["Drone Destruction", "Destroy 5 drones in Quick Match/Ranked Multiplayer."],
        ["Fashion Week", "Apply weapon skins to 30 weapons."],
        ["First Class Defense", "Play 10 rounds with a Pathfinder Defender in Quick Match/Ranked Multiplayer."],
        ["Fortress", "Reinforce 2 breakable walls in Quick Match/Ranked Multiplayer."],
        ["Full Auto", "Get 5 kills with an AR."],
        ["Full Roster", "Play 10 rounds with each Pathfinder Operator in Quick Match or Ranked Multiplayer."],
        ["Globetrotter", "Play 10 Multiplayer Matches on 10 different maps."],
        ["Greaser", "Get 5 kills with an SMG."],
        ["It Begins...", "Complete 10 matches in Quick Match/Ranked Multiplayer."],
        ["Jack of All Trades", "Win 1 round with every Pathfinder Operator in Quick Match/Ranked Multiplayer."],
        ["Just Getting Started", "Get 100 kills in Quick Match/Ranked Multiplayer."],
        ["Meat Wall", "Kill an enemy with a Breach Charge in Quick Match/Ranked Multiplayer."],
        ["No Trespassing", "Get 10 Claymore kills in Quick Match/Ranked Multiplayer."],
        ["Objective Driven", "Win 50 rounds in Quick Match/Ranked Multiplayer."],
        ["Oh Yeah!", "Destroy a reinforced wall with Thermite's Exothermic Charge in Quick Match/Ranked Multiplayer."],
        ["Old School", "Play 10 rounds with all Operators from one Pathfinder ORG in Quick Match/Ranked Multiplayer."],
        ["One Mind", "Win 1 match without losing a single round in Quick Match/Ranked Multiplayer."],
        ["Overachiever", "Win 100 rounds as an Attacker in Quick Match/Ranked Multiplayer."],
        ["Perfectionist", "Get 5 Flawless Victories in Quick Match/Ranked Multiplayer."],
        ["Perimeter Secured", "Win a match of Secure Area in Quick Match Multiplayer."],
        ["Ride Shotgun", "Get 5 kills with a shotgun."],
        ["Room Cleared", "Get 10 Frag Grenade kills in Quick Match/Ranked Multiplayer."],
        ["Senseless", "Kill 10 enemies blinded by Stun Grenades in Quick Match/Ranked Multiplayer."],
        ["Specialist", "Complete all Operator Specialties."],
        ["Speed Round", "Win a round in Quick Match/Ranked Multiplayer in under 2 minutes."],
        ["Strength in Numbers", "Win 10 games as a Squad in Quick Match/Ranked Multiplayer."],
        ["Sureshot", "Get 5 kills with a DMR."],
        ["That Bullet Pen...", "Get 10 kills through bullet penetration in Quick Match/Ranked Multiplayer."],
        ["That Was Close", "Plant the defuser in 10 Bomb rounds in Quick Match/Ranked Multiplayer."],
        ["That Was Fast!", "Find a bomb within 15 seconds of the Preparation Phase in Unranked/Ranked Multiplayer."],
        ["To the Rescue", "Revive injured teammates 10 times in Quick Match/Ranked Multiplayer."],
        ["To the Top", "Reach Clearance level 50."],
        ["Woodworker", "Place 5 barricades as a Defender in Quick Match/Ranked Multiplayer."],
        ["Wrong Number", "Kill 10 enemies with Nitro Cells in Quick Match/Ranked Multiplayer."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
