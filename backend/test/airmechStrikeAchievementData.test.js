import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/airmech-strike.json - 91 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 206500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("airmech-strike");

test("getPlannerData('airmech-strike') returns real planner data with 91 curated achievements", () => {

    assert.ok(game, "expected real planner data for airmech-strike");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 91);

});

test("every AirMech Strike achievement has a unique id from 1 to 91 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 91 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 91);
    assert.strictEqual(new Set(apinames).size, 91);

});

test("every AirMech Strike achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 91 AirMech Strike achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["20% Cooler", "Win in an online match with a total Team Style of 250% or greater."],
        ["A Win without Tanks", "Win a match, online or offline, without building any Tanks."],
        ["A Win without Turrets", "Win a match, online or offline, without building any Turrets."],
        ["AirMech Phalanx", "Shoot down 500 enemy missiles."],
        ["Blood Thirsty", "Destroy 3 Human piloted AirMechs in the first 3 minutes of an online match."],
        ["Bomber Superiority (part 1)", "Use the Bomber AirMech to destroy 30 or more enemy units with the Bombs ability in a single match."],
        ["Bomber Superiority (part 2)", "Use the Bomber AirMech's melee attack to decimate 30 or more enemy units in a single match."],
        ["Boosted", "Win a match, online or offline, using Boosters, all in Air mode."],
        ["Called to Duty", "Win a match using only infantry units."],
        ["Can't stop eating!", "Share 496 cakes."],
        ["Can't Touch This", "Destroy 100 Anti-Air enemy units (HAAT and Seeker)."],
        ["Challenger: 12 Stars", "Accumulate 12 Stars in the Challenges"],
        ["Challenger: 24 Stars", "Accumulate 24 Stars in the Challenges"],
        ["Challenger: 36 Stars", "Accumulate 36 Stars in the Challenges"],
        ["Close Encounter (part 1)", "Abduct 10 Enemy units with the Saucer, on any map, win or lose."],
        ["Close Encounter (part 2)", "Abduct 25 Enemy units with the Saucer, on any map, and win the match."],
        ["Coming back for more!", "Complete 100 matched games."],
        ["Costume Quest", "Win in a 3v3 PVP with all teammates using different custom skins"],
        ["Creep Killer", "Destroy 50 Creeps from the Air with the Warthog AirMech"],
        ["Damage Inc.", "Do 1,000,000 damage with your AirMech."],
        ["Death from Above", "Destroy 1000 Enemy Units with your Artillery, over the lifetime of your account."],
        ["Deck the halls!", "Win in an online match with a total Team Holiday Spirit of 250% or greater."],
        ["Destroy 10 Tanks", "Destroy 10 Tanks with your AirMech, in a single match; online or offline."],
        ["Destroy 1000 Creeps", "Destroy 1000 Creeps with your AirMech, over the lifetime of your account."],
        ["Destroy 1000 Tanks", "Destroy 1000 Tanks with your AirMech, over the lifetime of your account."],
        ["Destroy 20 Tanks", "Destroy 20 Tanks with your AirMech, in a single match; online or offline."],
        ["Destroy 50 Tanks", "Destroy 50 Tanks with your AirMech, in a single match; online or offline."],
        ["Do a barrel roll!", "Win in an online match with a total Team Style of 500% or greater."],
        ["FA LA LA LA LA, LA LA LA LA!", "Win in an online match with a total Team Holiday Spirit of 500% or greater."],
        ["Fast Win 1v3 Match", "Win a 1v3 Match against AIs on any map in under 10 minutes."],
        ["Finish Him!", "Make the killing blow on the enemy fort with your AirMech in an online game, 5 times."],
        ["Fortress Assault (part 1)", "Inflict 500 damage on the Enemy Fort's shields with your AirMech in an online match and win."],
        ["Fortress Assault (part 2)", "Accumulate 10,000 damage inflicted on the armor of your enemies Fortresses."],
        ["From Below", "Destroy 10 enemy AirMechs in air form from your grounded Warthog."],
        ["Functional and Stylish", "Win in an online match with a total Team Style of 100% or greater."],
        ["Getting Started", "Complete the Tutorial."],
        ["Getting Started (part 2)", "Build 10 or more units in a single match, online or offline, win or lose."],
        ["Gladiator", "Accumulate 100 Direct AirMech Kills online against human opponents."],
        ["Going Pro", "Win an online match after reaching player level 20"],
        ["Guns Blazin'", "Destroy 10 enemy AirMechs in ground form from your airborn Warthog."],
        ["Helix Superiority (part 1)", "Use the air missiles on the Helix to destroy 5 or more enemy AirMechs in a single match."],
        ["Helix Superiority (part 2)", "Use the ground rockets on the Helix to destroy 30 or more enemy units in a single match."],
        ["Hellfire", "Use the ground rockets on the Helix to destroy 500 enemy units."],
        ["High Level", "Reach Level 10 in any AirMech in an online or offline game."],
        ["I put on my robe and Santa hat.", "Win in an online match with a total Team Holiday Spirit of 100% or greater."],
        ["Interceptor", "Accumulate 20 human piloted enemy AirMech kills, each made while the enemy is carrying a unit."],
        ["Kicking Tires", "Use each of the AirMech types at least once in game; online or offline."],
        ["Kill 250 Tanks", "Destroy 250 Tanks with your AirMech, over the lifetime of your account."],
        ["King of the Mountain", "Win an online match after reaching player level 30"],
        ["Let's do this", "Complete 10 matched games."],
        ["Map Control (part 1)", "Capture 3 neutral outposts in a single online game and win."],
        ["Map Control (part 2)", "Capture 50 neutral outposts."],
        ["Map Control (part 3)", "Re-capture 250 enemy controlled outposts."],
        ["Masquerade Ball", "Win in a 3v3 PVP with all players using different custom skins"],
        ["Master Thief", "Abduct 200 Enemy units with the Saucer."],
        ["Match made in heaven", "Win 20 matched games."],
        ["Max Level", "Reach Level 15 in any AirMech in an online or offline game."],
        ["Mince Meat", "Get 300 unit kills using Gatties."],
        ["Mine Layer (part 1)", "Use mines to destroy at least 15 enemy units in a match, and go on to win the match."],
        ["Mine Layer (part 2)", "Destroy 1000 enemy Units with Mines."],
        ["Mine Sweeper (part 1)", "Deactivate 5 or more enemy mines in a single online match, and win."],
        ["Mine Sweeper (part 2)", "Deactivate 50 or more enemy mines."],
        ["Mine Sweeper (part 3)", "Deactivate 200 or more enemy mines."],
        ["Miser", "Reach Level 10 in any AirMech in an online or offline game and win without spending any Ability points."],
        ["Moving on Up", "Win an online match after reaching player level 10"],
        ["My hands are clean...", "Win a match, online or offline, without destroying any Units with your AirMech.  Let your units do the dirty work!"],
        ["Nerves of Steel", "Accumulate 10 human piloted enemy AirMech kills each made while your own health is less than 5%."],
        ["New Pair of Shoes", "Win in an online match using a custom skin"],
        ["On a Roll", "Win 3 consecutive online matches."],
        ["Osprey - Combat Support", "Use the Osprey AirMech to heal friendly units and AirMechs."],
        ["Osprey Debut", "Use the Osprey AirMech to help win an Online Co-op match against AI."],
        ["Power Play +2", "In a 2v2 Matchmade game, be in a position where all enemy AirMechs are destroyed while your teams is full force."],
        ["Project Lehman", "Destroy 100 Money Makers"],
        ["Replicators Down! (part 1)", "Win a Match on any map without building anything."],
        ["Replicators Down! (part 2)", "Win a Match on any map in 1v2 mode without building anything."],
        ["Replicators Failing!", "Win a match, online or offline, without building any Tanks or Turrets."],
        ["Rock you like a Hurricane!", "Win an online game where 100% of the enemy's base health is taken within 1 minute before being destroyed."],
        ["Serious Competitor", "Win 200 matched games."],
        ["So good!", "Share 28 cakes."],
        ["Striker Samurai", "Use the Striker AirMech's power sword melee attack to destroy 1000 or more enemy units over the lifetime of your account."],
        ["Striker Superiority (part 1)", "Use the Striker AirMech's power sword melee attack to destroy 10 or more enemy units in a single match.  Online or Offline."],
        ["Striker Superiority (part 2)", "Use the Striker AirMech's power sword melee attack to destroy 15 or more enemy units and 2 or more enemy AirMechs in a single match.  Online or Offline."],
        ["Striker Superiority (part 3)", "Use the Striker AirMech's power sword melee attack to destroy 20 or more enemy units and 3 or more enemy AirMechs in a single Online match, and win."],
        ["Tank Killer", "Destroy 10 Tanks from the Air with the Warthog AirMech"],
        ["Turret Breaker", "Destroy 200 enemy Turrets with Bombs."],
        ["United in Combat", "Join or create a Faction"],
        ["Valedictorian", "Win in a 3v3 online game at least 3 levels above anyone else."],
        ["Win 10 online Matches", "Win 10 Online Matches"],
        ["Win 1v2 Match", "Win a 1v2 Match against AIs on any map."],
        ["Win 1v3 Match", "Win a 1v3 Match against AIs on any map."],
        ["Win online Match", "Be on the winning team in any match online!"],
    ];

    assert.strictEqual(officialAchievements.length, 91, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
