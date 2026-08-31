import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/galaxy-on-fire-2.json - 92 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 212010 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("galaxy-on-fire-2");

test("getPlannerData('galaxy-on-fire-2') returns real planner data with 92 curated achievements", () => {

    assert.ok(game, "expected real planner data for galaxy-on-fire-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 92);

});

test("every Galaxy on Fire 2 achievement has a unique id from 1 to 92 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 92 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 92);
    assert.strictEqual(new Set(apinames).size, 92);

});

test("every Galaxy on Fire 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 92 Galaxy on Fire 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Addict Bronze", "Played for more than 5 hours."],
        ["Addict Gold", "Played for more than 20 hours."],
        ["Addict Silver", "Played for more than 10 hours."],
        ["Adv. Geologist Bronze", "Mined at least 5 different cores."],
        ["Adv. Geologist Gold", "Mined at least 11 different cores."],
        ["Adv. Geologist Silver", "Mined at least 8 different cores."],
        ["Adv. Miner Bronze", "Mined more than 3t of cores."],
        ["Adv. Miner Gold", "Mined more than 25t of cores."],
        ["Adv. Miner Silver", "Mined more than 10t of cores."],
        ["Alien Hunter Bronze", "Collected more than 5t of alien remains."],
        ["Alien Hunter Gold", "Collected more than 25t of alien remains."],
        ["Alien Hunter Silver", "Collected more than 10t of alien remains."],
        ["Barkeeper Bronze", "Owned at least 5 different types of booze."],
        ["Barkeeper Gold", "Owned at least 22 different types of booze."],
        ["Barkeeper Silver", "Owned at least 16 different types of booze."],
        ["Carrier Bronze", "Transported more than 25t of goods on courier missions."],
        ["Carrier Gold", "Transported more than 200t of goods on courier missions."],
        ["Carrier Silver", "Transported more than 100t of goods on courier missions."],
        ["Champion", "You got all the medals!"],
        ["Chatterbox Bronze", "Spoke with more than 20 people."],
        ["Chatterbox Gold", "Spoke with more than 100 people."],
        ["Chatterbox Silver", "Spoke with more than 50 people."],
        ["Commander Bronze", "Commanded more than 3 wingmen."],
        ["Commander Gold", "Commanded more than 20 wingmen."],
        ["Commander Silver", "Commanded more than 10 wingmen."],
        ["Daredevil", "Accepted 10 missions without asking about the difficulty."],
        ["Engineer Bronze", "Finished at least 3 different blueprints."],
        ["Engineer Gold", "Finished at least 13 different blueprints."],
        ["Engineer Silver", "Finished at least 6 different blueprints."],
        ["Explorer Bronze", "Been to at least 5 different systems."],
        ["Explorer Gold", "Been to at least 22 different systems."],
        ["Explorer Silver", "Been to at least 10 different systems."],
        ["Garbage Man Bronze", "Destroyed more than 30t of space junk."],
        ["Garbage Man Gold", "Destroyed more than 150t of space junk."],
        ["Garbage Man Silver", "Destroyed more than 100t of space junk."],
        ["Geologist Bronze", "Mined at least 5 different types of ore."],
        ["Geologist Gold", "Mined at least 11 different types of ore."],
        ["Geologist Silver", "Mined at least 8 different types of ore."],
        ["Globetrotter Bronze", "Used the jumpgate at least 10 times."],
        ["Globetrotter Gold", "Used the jumpgate at least 100 times."],
        ["Globetrotter Silver", "Used the jumpgate at least 50 times."],
        ["Handyman Bronze", "Owned at least 3 blueprints."],
        ["Handyman Gold", "Owned at least 13 blueprints."],
        ["Handyman Silver", "Owned at least 6 blueprints."],
        ["Harum-Scarum", "Left a station without weapons or equipment."],
        ["Killer Bronze", "More than 50 kills."],
        ["Killer Gold", "More than 250 kills."],
        ["Killer Silver", "More than 100 kills."],
        ["Looter Bronze", "Salvaged more than 50t of freight."],
        ["Looter Gold", "Salvaged more than 500t of freight."],
        ["Looter Silver", "Salvaged more than 200t of freight."],
        ["Mason Bronze", "Destroyed more than 50 asteroids."],
        ["Mason Gold", "Destroyed more than 250 asteroids."],
        ["Mason Silver", "Destroyed more than 150 asteroids."],
        ["Miner Bronze", "Mined more than 100t of ore."],
        ["Miner Gold", "Mined more than 1000t of ore."],
        ["Miner Silver", "Mined more than 500t of ore."],
        ["Moneybags Bronze", "Earned more than 125000$."],
        ["Moneybags Gold", "Earned more than 1000000$."],
        ["Moneybags Silver", "Earned more than 500000$."],
        ["Naysayer", "Rejected more than 50 job offers."],
        ["Ninja Bronze", "Invisible for more than 2 minutes."],
        ["Ninja Gold", "Invisible for more than 5 minutes."],
        ["Ninja Silver", "Invisible for more than 3 minutes."],
        ["Nuclear Armament Bronze", "Detonated more than 5 bombs."],
        ["Nuclear Armament Gold", "Detonated more than 50 bombs."],
        ["Nuclear Armament Silver", "Detonated more than 20 bombs."],
        ["Personal Need Bronze", "Bought more than 25t of booze."],
        ["Personal Need Gold", "Bought more than 1000t of booze."],
        ["Personal Need Silver", "Bought more than 100t of booze."],
        ["Renegade", "Evoked hostility in one faction."],
        ["Space Saver Bronze", "Had more than 100t of free cargo space."],
        ["Space Saver Gold", "Had more than 500t of free cargo space."],
        ["Space Saver Silver", "Had more than 250t of free cargo space."],
        ["Space Tourist Bronze", "Been to at least 25 different stations."],
        ["Space Tourist Gold", "Been to at least 100 different stations."],
        ["Space Tourist Silver", "Been to at least 50 different stations."],
        ["Survivor Bronze", "Arrived with less than 30% of hull energy."],
        ["Survivor Gold", "Arrived with less than 5% of hull energy."],
        ["Survivor Silver", "Arrived with less than 15% of hull energy."],
        ["Tour Operator Bronze", "Carried more than 5 passengers."],
        ["Tour Operator Gold", "Carried more than 50 passengers."],
        ["Tour Operator Silver", "Carried more than 20 passengers."],
        ["Tracker", "Accepted 12 missions without asking about the location."],
        ["Veteran", "You got this medal from Admiral Smith for outstanding services to the Terran Space Fleet."],
        ["Void Terror", "Congratulations! You fought off the Voids."],
        ["Weapon Fanatic Bronze", "Mounted 2 primary weapons."],
        ["Weapon Fanatic Gold", "Mounted 4 primary weapons."],
        ["Weapon Fanatic Silver", "Mounted 3 primary weapons."],
        ["Workaholic Bronze", "Finished more than 5 missions."],
        ["Workaholic Gold", "Finished more than 50 missions."],
        ["Workaholic Silver", "Finished more than 25 missions."],
    ];

    assert.strictEqual(officialAchievements.length, 92, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
