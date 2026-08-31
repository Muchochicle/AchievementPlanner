import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/thief.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 239160 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("thief");

test("getPlannerData('thief') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for thief");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Thief achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Thief achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Thief achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend in Need ", "Finished Chapter Four "],
        ["A Man Apart ", "Finished Chapter Six "],
        ["A Moral Victory ", "Finished the game without a single kill or knockout "],
        ["All That Glitters ", "Stole 5 collectibles "],
        ["Cache Dispenser ", "Used 40,000 gold "],
        ["Child of the Shadows  ", "Finished a single chapter without alerting anyone "],
        ["Clear Headed ", "Reached the final chapter without using the focus ability "],
        ["Dark Archer ", "Completed 10 optional Thieving Objectives "],
        ["Dastardly Deeds ", "Completed all Basso Jobs in The City "],
        ["Dirty Secrets ", "Finished Chapter Three "],
        ["Dust to Dust ", "Finished Chapter Two "],
        ["Finders Keepers ", "Discovered all secret areas "],
        ["Focus on the Tasks at Hand ", "Picked a pocket and a lock using the focus ability "],
        ["Hail of Glass ", "Shot a bottle in mid-air with an arrow "],
        ["Happy Birthday ", "Sweet sixteen. Snuff said. "],
        ["Hard Times ", "Finished the game on Master difficulty "],
        ["Health Hazard ", "Killed or knocked out 10 people using the environment "],
        ["Hidden Agenda ", "Discovered 15 secret areas "],
        ["Legend in Leather ", "Completed 25 optional Thieving Objectives "],
        ["Lockdown ", "Finished Chapter One "],
        ["Mint Condition ", "Finished 3 consecutive chapters without taking damage "],
        ["Modesty Denied ", "Scored an epic 5,000,000 or more in a Challenge Map "],
        ["Obsessive Compulsive ", "Stole all loot and collectibles in a single chapter. "],
        ["Old Habits Die Hard ", "Found all the secret stashes in Moira "],
        ["One Step Ahead ", "Disarmed ten trap mechanisms "],
        ["Predatory Drive ", "Finished the game in 15 hours or more "],
        ["Priceless ", "Completed a collectible set "],
        ["Quickly Pick a Lucky Lock ", "Picked a lock with masterful speed "],
        ["Sleight of Hand ", "Picked 100 pockets in a single playthrough "],
        ["Something to Prove ", "Finished the game with a custom difficulty of 700 points or more "],
        ["The Dawn's Light ", "Finished Chapter Eight "],
        ["The Drop ", "Finished the Prologue "],
        ["The Forsaken ", "Finished Chapter Five "],
        ["The Hidden City ", "Finished Chapter Seven "],
        ["Two Faced ", "Uncovered Lyegrove's secret "],
        ["What's Yours is Mine ", "Completed all collectible sets "],
        ["Working Overtime ", "Completed all client jobs in The City "],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
