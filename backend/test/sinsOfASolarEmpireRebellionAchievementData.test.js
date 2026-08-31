import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sins-of-a-solar-empire-rebellion.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 204880 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sins-of-a-solar-empire-rebellion");

test("getPlannerData('sins-of-a-solar-empire-rebellion') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for sins-of-a-solar-empire-rebellion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Sins of a Solar Empire: Rebellion achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Sins of a Solar Empire: Rebellion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Sins of a Solar Empire: Rebellion achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acolyte", "Win the game as an Advent player."],
        ["Actually HAL, I can do that.", "Win the game by yourself against at least four Hard AI players."],
        ["Advent Fleet Diversification", "Have at least one of every Advent Capital Ship built at the same time."],
        ["Advent Harmony Researcher", "Research every subject in the Harmony Tree while researching no subjects in the Hostility, Security or Understanding Trees."],
        ["Advent Hostility Researcher", "Research every subject in the Hostility Tree while researching no subjects in the Harmony, Security, or Understanding Trees."],
        ["Anti-Globalization", "Destroy 100 trade ships in a single game."],
        ["Archaeologist", "Find and own every artifact at the same time."],
        ["Best Defense is a Good Offense", "Win the game without building any Tactical Structures."],
        ["Capital Ship Armada", "Own the maximum number of Capital Ships possible. Your fleet research must also be max level."],
        ["Capital Ship Assassin", "Destroy 30 enemy capital ships in a single game."],
        ["Capital Ship Captain", "Get a Capital Ship to maximum experience level."],
        ["Colonizer", "Have 30 planets colonized at the same time."],
        ["Comp Stomper", "Win the game by yourself against at least three Hard AI players."],
        ["Crystal Lender", "Give 20,000 Crystal to other players in a single game."],
        ["Crystal Merchant", "Sell 10,000 Crystal from the Black Market."],
        ["Crystal Miner", "Collect 35,000 Crystal from resource extractors in a single game."],
        ["Crystal Speculator", "Buy 10,000 Crystal from the Black Market."],
        ["Dead Canaries", "Destroy 50 refinery ships in a single game."],
        ["Destroyer of Worlds", "Destroy 20 planets in a single game."],
        ["Drill Baby Drill", "Fully specialize a Ferrous planet in industry (Forbidden Worlds DLC required)."],
        ["Ensign", "Win the game as a TEC player."],
        ["Equal Opportunity", "Occupy the 10 planet types simultaneously (Forbidden Worlds DLC required)."],
        ["Escape From Max", "Travel through a wormhole to discover where it leads to."],
        ["Expert Bombardier", "Do 15,750 damage to planets."],
        ["Export Maven", "Collect 20,000 Credits from trade ships in a single game."],
        ["Family Planning", "Your empire must support at least 6,000 population at once."],
        ["Fear of Icebergs", "Win the game without building any Capital Ships."],
        ["Frigate Killer", "Destroy 1,000 enemy frigates in a single game."],
        ["Go Big or Go Home", "Win the game without building any Frigates, Cruisers or Corvettes. You will probably need Capital Ships for this! (Not achievable with Quick Start.)"],
        ["He's no good to me dead!", "Spend 66,000 Credits increasing the bounty on other players in a single game."],
        ["Initiate", "Win the game as a Vasari player."],
        ["Intrepid Explorer", "Control 20 different planet bonuses in a single game."],
        ["Master of Any Domain", "Win the game as a Random player."],
        ["Metal Lender", "Give 20,000 Metal to other players in a single game."],
        ["Metal Merchant", "Sell 10,000 Metal directly to the Black Market."],
        ["Metal Miner", "Collect 35,000 Metal from resource extractors in a single game."],
        ["Metal Speculator", "Buy 10,000 Metal from the Black Market."],
        ["Money Lender", "Give 25,000 Credits to other players in a single game."],
        ["Mutual Trader", "Form a Trade Alliance with another player."],
        ["No Exhaust Port Found", "Win the game without building any strike craft."],
        ["Outstanding Resume", "Complete at least 30 missions in a single game."],
        ["Pacifist", "Form a Peace Treaty with another player."],
        ["Pilot's Bane", "Destroy 2,500 enemy strike craft in a single game."],
        ["Pirate Baron", "Colonize a Pirate base."],
        ["Pirate Exterminator", "Destroy 1,000 Pirate ships in a single game."],
        ["Planet Visionary", "Form a Planet Vision alliance with another player."],
        ["Plug Puller", "Win the game by yourself against at least one Hard AI player."],
        ["Pop Idol", "Spread your Culture to 75% of the galaxy."],
        ["Refining Magnate", "Collect 20,000 Metal or Crystal from refinery ships in a single game."],
        ["Resource Opportunist", "Gain 15,000 Credits from other players buying up your resources."],
        ["Road to Peace", "Form a Cease Fire with another player."],
        ["Ship Swarm", "Own the maximum number of ships your fleet points can support. Your fleet research must also be at max level."],
        ["Ship Visionary", "Form a Ship Vision alliance with another player."],
        ["Space Ponies!", "Um...What?"],
        ["Squadron Leader", "Own at least 100 Squadrons at once."],
        ["Star Explorer", "Travel to another star system."],
        ["Tax Collector", "Collect 200,000 Credits from taxes in a single game."],
        ["TEC Civilian Researcher", "Research every subject in the Civilian Tree while researching no subjects in the Military, Defense or Diplomacy trees."],
        ["TEC Fleet Diversification", "Have at least one of every TEC Capital Ship built at the same time."],
        ["TEC Military Researcher", "Research every subject in the Military Tree while researching no subjects in the Civilian, Defense or Diplomacy Trees."],
        ["Toaster Roaster", "Win the game by yourself against at least two Hard AI players."],
        ["Union Buster", "Destroy 50 construction ships in a single game."],
        ["Vacation Getaway", "Fully specialize a Oceanic planet in social upgrades (Forbidden Worlds DLC required)."],
        ["Vasari Empire Researcher", "Research every subject in the Empire Tree while researching no subjects in the Warfare, Fortification or Manipulation Trees."],
        ["Vasari Fleet Diversification", "Have at least one of every Vasari Capital Ship built at the same time."],
        ["Vasari Warfare Researcher", "Research every subject in the Warfare Tree while researching no subjects in the Empire, Fortification or Manipulation Trees."],
        ["World Builder", "Create your own custom galaxy and preview the results."],
        ["Wrecking Crew", "Destroy 200 enemy planet structures in a single game."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
