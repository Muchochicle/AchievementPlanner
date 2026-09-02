import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battlefield-6.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2807960 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("battlefield-6");

test("getPlannerData('battlefield-6') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for battlefield-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Battlefield 6 achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Battlefield 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Battlefield 6 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1200", "Get 6 sidearm headshot kills in a Multiplayer match"],
        ["A Joyful Nurse", "Revive 1996 players as Support in Multiplayer"],
        ["A Little C-4 Knocking on Your Door", "Deal 2000 damage to enemy vehicles with the Demolition Charge"],
        ["Armor Annihilation", "Destroy 10 enemy vehicles in Single Player"],
        ["Army of Two", "Win 7 matches in Battle Royale Duos."],
        ["Being Watched", "Spot a total of 20 enemies with your drone in Operation Ember Strike."],
        ["Bullseye Blitz", "Land 6 consecutive headshots in Moving Mountains."],
        ["Cloak and Dagger", "Complete the Battlefield 6 Campaign"],
        ["Collector", "Loot 10 Superior or Custom items in Battle Royale."],
        ["Command and Conquest 2", "Capture 128 objectives in Conquest"],
        ["Damned If You Do", "Complete Operation Ember Strike"],
        ["Deep-Six", "Destroy 3 floating mines in Operation Gladius."],
        ["Devil in the Dark", "Complete Night Raid"],
        ["Dog of War", "Get 9 dog-tags from kills in Battle Royale or Gauntlet."],
        ["Dogs of War", "Pick up 5 Campaign collectibles"],
        ["Efficiency", "Destroy 10 mannequins in The Rock."],
        ["End of an Era", "Find the hidden dinosaur figurine in the NATO base during Always Faithful."],
        ["Everybody Fights, Nobody Quits", "Win a Battle Royale match with your full squad surviving."],
        ["First Blood 2", "Perform 10 takedowns in a Multiplayer match"],
        ["Five by Five", "Get 5 multi-kills as Assault in Multiplayer"],
        ["Front line ", "Take or Defend 41 sectors in Breakthrough"],
        ["Heavy Weaponry", "Get 5 kills with LMGs without reloading in Multiplayer"],
        ["Here's Your Birthday Present ", "Use 42 call-ins in Battle Royale."],
        ["High Roller", "Complete Nile Guard"],
        ["Hounds of War", "Pick up 10 Campaign collectibles"],
        ["In Memoriam", "Pick up a Campaign collectible"],
        ["Lance Corporal Matkovic", "Reach Rank 14"],
        ["Liquidator", "Headshot kill 50 Enemies in the Campaign."],
        ["Looks Like A Nail", "Kill 5 enemies with a sledgehammer in No Sleep."],
        ["May the Odds Forever Be in Your Favor", "Play 74 matches of any version of Battle Royale."],
        ["Medal of Honor", "Commit 414 acts of valor in Multiplayer"],
        ["Mission Accepted", "Complete 214 missions in any version of Battle Royale."],
        ["Mozambique Here!", "Ping a Shotgun in Battle Royale."],
        ["Never-Ending Game", "Play 125 rounds of Gauntlet."],
        ["No Reinforcements", "Shoot down the reinforcement chopper with a tank during Always Forward."],
        ["One Stone", "Eliminate 3 enemies with a single grenade in Single Player"],
        ["Pack Leader", "Pick up all Campaign collectibles"],
        ["Peak Performance", "Complete a Single Player mission on the hardest difficulty"],
        ["Private First Class Montes", "Reach Rank 9"],
        ["Punished", "Get 129 kills in Multiplayer."],
        ["Rise from Your Grave", "Get 1,988 revives in Battle Royale or Gauntlet."],
        ["Road Rash", "Get a Roadkill with vehicles in Multiplayer"],
        ["Roadside Assistance", "Collapse an overpass onto a tank in Nile Guard."],
        ["Rock of Gibraltar", "Complete The Rock and Operation Gladius"],
        ["Secret Service", "Complete No Sleep and Moving Mountains"],
        ["Sergeant Redford", "Reach Rank 25"],
        ["Sidearm Savant", "Complete Night Raid using only pistols, knives, or gadgets."],
        ["Stand Alone", "Complete Always Faithful"],
        ["Stolz der Nation", "Get 250 sniper rifle kills as Recon in Multiplayer"],
        ["Stone Cold", "Get 316 stun effects on enemies in Battle Royale or Gauntlet."],
        ["Super Bomb man", "Arm or disarm 5 M-COM explosives in a Multiplayer match"],
        ["Wolves of War", "Pick up 20 Campaign collectibles"],
        ["Wrench Monkey", "Repair vehicles for 2042 damage in Multiplayer"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
