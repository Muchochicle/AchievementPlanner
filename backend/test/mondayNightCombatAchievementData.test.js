import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monday-night-combat.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 63200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("monday-night-combat");

test("getPlannerData('monday-night-combat') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for monday-night-combat");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Monday Night Combat achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Monday Night Combat achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Monday Night Combat achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3-fer", "Achieved a Triple Kill"],
        ["All Star", "Completed \"Playoff\" Blitz Mode"],
        ["All Star Sacker", "Score 30 Kills in a Crossfire Match"],
        ["All Time Great", "Score a 6 Kill Multikill"],
        ["Bacon Hunter", "Collect 100 Bacon Pickups"],
        ["Bayheimer", "Cool guys don't look at explosions"],
        ["Big Break", "Score 100,000 Kills on Slim Bots"],
        ["Break The Armor", "Destroy 2500 RockIt Turrets"],
        ["Bzzz", "Score 100,000 Kills on Buzzers"],
        ["Caught 'em Nappin'", "Achieved a kill on an opposing player while they were upgrading skills in a Crossfire match"],
        ["Center of Attention", "Score 2500 Kills with Assault's Rifle"],
        ["Drop The Boom", "Score 2500 Kills with the Sniper Rifle"],
        ["Elusive", "Completed \"The Scramble\" Blitz Mode"],
        ["Exhibitor", "Completed \"Exhibition\" Blitz Mode"],
        ["Flapjack Master", "Achieved a pancake on an opposing player using the Gunner's Ground Slam ability"],
        ["G's", "Score 100,000 Kills on Gremlins"],
        ["Get Out Of Here", "Score 150 Ejector Kills"],
        ["Global Warming", "Destroy 2500 Shave Ice Turrets"],
        ["Grand Prize", "Score 1000 Kills on Jackbot XLs"],
        ["Grappler", "Achieved 10 grapple kills in a Crossfire match"],
        ["Ground Rule", "Score 2500 Kills on Gap Shots"],
        ["Ground Zero", "Attach a Support Air Strike Beacon to an enemy Pro"],
        ["Head Crab", "Attach an Assault Bomb to an enemy Pro"],
        ["Hell Mary", "Destroy 2500 Long Shot Turrets"],
        ["Hot Streak", "Achieved a 3 kill streak in a Crossfire match"],
        ["House Wins", "Score 100,000 Kills on Black Jacks"],
        ["Humiliation", "Score a Kill with a melee attack"],
        ["I Got Candy!", "Pickup a total of 100 prizes in one match"],
        ["Into The Breach", "Destroy 2500 Lazer Blazer Turrets"],
        ["Keep 'Em Down", "Score 2500 Kills with the Gunner's Minigun or Dual Minigun"],
        ["Lich", "Score 2500 Kills on Scramblers"],
        ["MVP", "Achieved \"Most Valuable Player\" in a Crossfire match"],
        ["Ninja", "Score 2500 Kills with the Assassin's Dagger or Sword"],
        ["Outta My House!", "Achieved a Ring Out during a Crossfire match"],
        ["Over 9000", "Receive over $9000 in lifetime earnings after a Crossfire Match"],
        ["Overdose", "Use Juice 7 times in one match"],
        ["Pew Pew", "Build or Upgrade a Lazer Blazer Turret 500 times"],
        ["Red Hot", "Score 2500 Kills with the Tank's Jet Gun"],
        ["Ringouts", "Score 150 Ringouts"],
        ["Rookie", "Finish Tutorial"],
        ["Sacker", "Achieved 15 kills in a Crossfire match"],
        ["Seasoned Veteran", "Completed \"Season\" Blitz Mode"],
        ["Speed Kills", "Build or Upgrade a Shave Ice Turret 500 times"],
        ["Spin N Juice", "Score a Kill with the Jet Gun's alternate fire spin while juiced"],
        ["Stand N Deliver", "Build or Upgrade a RockIt Turret 500 times"],
        ["Strike It XL", "Score 2 Jackbot Kills in a single Crossfire Match"],
        ["Team Leader", "Score the most kills in a single Crossfire Match"],
        ["Team Player", "Score the most assists in a single Crossfire Match"],
        ["The Draw", "Score 2500 Kills with Support's Heal/Hurt Gun"],
        ["Thrown Out", "Score 2500 Kills on Bouncers"],
        ["Uber Streak", "Score a 25 Kill Streak"],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
