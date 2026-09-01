import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lightyear-frontier.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1677110 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lightyear-frontier");

test("getPlannerData('lightyear-frontier') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for lightyear-frontier");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Lightyear Frontier achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Lightyear Frontier achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Lightyear Frontier achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Comfy Hand", "Pick up a Farm Animal."],
        ["A Feast for Beasts", "Feed 50 animals."],
        ["A Novice Hatcher", "Hatch 5 Farm Animals."],
        ["A Seed for Science", "Collect a Spliced Seed."],
        ["Agrarian Bombardment", "Plant 1000 seeds."],
        ["Agroforester", "Plant 200 Sprouts."],
        ["All You Need is Love", "Have 10 happy Farm Animals at once."],
        ["And I Would Plow Five Hundred More", "Plow 1,000 mounds total in Field Plow Mode (500 more after 'I Would Plow Five Hundred Mounds')."],
        ["Ballistic Agriculture", "Plant your first seed."],
        ["Born Lucky", "Have 5 rare Farm Animals at once."],
        ["Checking in on Diane", "Have 5 daily chats with Diane."],
        ["Checking in on Ulf", "Have 5 daily chats with Ulf."],
        ["Color Me Impressed", "Discover 20 Paints."],
        ["Country Roads", "Create paths in Pathmaker Mode."],
        ["Cultivation Artillery", "Plant 500 seeds."],
        ["Diane has Moved In", "Help Diane move in."],
        ["Eco-Warrior", "Restore 3 regions."],
        ["Environmentalist", "Restore a region."],
        ["Establish a Connection", "Build the Resource Delivery Cannon (part of the early questline)."],
        ["First Spill", "Spray water at another player."],
        ["Fledgling Mech-Mechanic", "Craft a Part at the Mech Depot."],
        ["Hey, Cut That Out!", "Scare away 10 animals (spray or fire near them)."],
        ["Hygge Apprentice", "Increase Homestead Coziness to 1."],
        ["Hygge Artisan", "Increase Homestead Coziness to 2."],
        ["Hygge Expert", "Increase Homestead Coziness to 3."],
        ["I Would Plow Five Hundred Mounds", "Plow 500 Mounds in Field Plow Mode."],
        ["Nice and Tidy", "Remove 50 Noxious Slimes."],
        ["Old Friend", "Have a Farm Animal for 30 days."],
        ["Projectile Farming", "Plant 100 seeds."],
        ["Put a Bow on Them", "Put an Accessory on a Farm Animal."],
        ["Ruin Sweeper", "Find 50 artifacts."],
        ["Share a Nibble", "Feed an animal for the first time."],
        ["Snack Time", "Feed 20 animals."],
        ["Spotless", "Remove 150 Noxious Slimes."],
        ["Stain Removal", "Remove 10 Noxious Slimes."],
        ["Stuck the Landing", "Trip and land on your feet 5 times."],
        ["Succesful Experiment", "Collect a Mutated Crop."],
        ["The Egg Came First", "Collect 20 Abandoned Eggs."],
        ["Tuned Up", "Craft 10 Parts at the Mech Depot."],
        ["Ulf has Moved In", "Help Ulf move in."],
        ["Weed Destroyer", "Remove 700 Noxious Weeds."],
        ["Weed Slayer", "Remove 300 Noxious Weeds."],
        ["Weed Wacker", "Remove 100 Noxious Weeds."],
        ["What Lies Beneath", "Find all 10 artifacts inside the Vault - the alien facility that opens after you restore all 3 regions and sleep for one day."],
        ["Xenoarchaeology", "Find an artifact."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
