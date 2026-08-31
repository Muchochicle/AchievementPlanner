import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/atom-zombie-smasher.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 55040 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("atom-zombie-smasher");

test("getPlannerData('atom-zombie-smasher') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for atom-zombie-smasher");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Atom Zombie Smasher achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Atom Zombie Smasher achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Atom Zombie Smasher achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Dipper", "Rescue 40 or more people in one helicopter pickup."],
        ["Bombardier", "Destroy 50 Zed in one artillery strike."],
        ["Bookworm", "Unlock all the vignettes."],
        ["Champion of the People", "Rescue everyone in a mission."],
        ["Choplifter", "Rescue 100 people in a mission."],
        ["Dog Days", "Rescue at least 100 people in July."],
        ["From Above", "Get 100 artillery kills in a mission."],
        ["Giant's Drink", "Destroy a Mega Zed."],
        ["Hit Somebody", "Get 100 landmine kills in a mission."],
        ["How Fast They Are", "Complete a mission under 30 seconds."],
        ["Hypothesis Now", "Rescue 10,000 scientists."],
        ["International Killing Machine", "Complete a campaign with the Hardcore and Permadeath modifier."],
        ["KringleJammer", "Defeat Wave 7 in the KringleJammer mini-game."],
        ["Lit Fuse", "Get 100 dynamite kills in a mission."],
        ["Llama-rama", "Launch 500 Llama Bombs."],
        ["Llamas on Demand", "Purchase a Llama Bomb."],
        ["Long Arm", "Accrue 10,000 sniper kills."],
        ["Long November", "Complete a 20,000 point campaign."],
        ["Maximum Overrescue", "Rescue 300 people in a mission."],
        ["Multiplicity", "Complete a campaign with the Triplets modifier."],
        ["Night Owl", "Survive the night."],
        ["Powder Keg", "Destroy 50 Zed in one dynamite explosion."],
        ["Remote Control", "Accrue 10,000 landmine kills."],
        ["Rescue Raider", "Rescue 200 people in a mission."],
        ["Snipe Hunt", "Use snipers to destroy 100 Zed in a mission."],
        ["Spring Cleaning", "Destroy all Zed in a mission."],
        ["Street Sweeper", "Get 100 infantry kills in a mission."],
        ["Tactical Camelid", "Cleanse four Zed territories with one Llama Bomb."],
        ["Ten Thousand Hours", "Have a merc reach Level 5 veterancy."],
        ["The Big Leagues", "Complete a level-3 outbreak mission."],
        ["The Big Stick", "Accrue 10,000 artillery kills."],
        ["The Diplomats", "Complete a mission with 3 players."],
        ["The Gold Standard", "Accrue 500 gold medals."],
        ["The Lucky Ones", "Rescue 100,000 people."],
        ["The Operators", "Accrue 10,000 infantry kills."],
        ["The Worm has Turned", "Complete a level-4 outbreak mission."],
        ["They Live", "Complete a campaign with the Alt. Spawning modifier."],
        ["Watch Your Step", "Destroy 50 Zed in one landmine explosion."],
        ["Wrecking Crew", "Accrue 10,000 dynamite kills."],
        ["Zed Industrial Complex", "Complete the campaign."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
