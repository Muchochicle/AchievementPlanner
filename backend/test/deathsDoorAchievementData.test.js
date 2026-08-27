import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deaths-door.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 894020 (fetched through this app's own services/steamApi.js) - 21 of
// 24 ship a real, official Steam description. A Stroll with Jefferson,
// In Caw-Hoots, and A True End are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const deathsDoor = getPlannerData("deaths-door");

test("getPlannerData('deaths-door') returns real planner data with 24 curated achievements", () => {

    assert.ok(deathsDoor, "expected real planner data for deaths-door");
    assert.ok(Array.isArray(deathsDoor.achievements));
    assert.strictEqual(deathsDoor.achievements.length, 24);

});

test("every Death's Door achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = deathsDoor.achievements.map(a => a.id);
    const apinames = deathsDoor.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Death's Door achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of deathsDoor.achievements) {

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

test("every one of the 21 officially-described Death's Door achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 3 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Crow Gamer", "Beat the game"],
        ["Academy of Umbrellas", "Beat the game only ever using an umbrella as your melee weapon"],
        ["Meal for a King", "Feed the Frog King an explosive treat"],
        ["Hot Pot", "Set Grandma's pot on fire"],
        ["Banging Tune", "Listen to Barb's magnum opus"],
        ["Clever Too Much", "Gain a devoted fan"],
        ["Specialist", "Max out any of the 4 stats"],
        ["Big Spender", "Purchase 12 stat upgrades"],
        ["Ooh Shiny!", "Collect all shiny things"],
        ["Weapon Master", "Collect all weapons"],
        ["Zen", "Find all shrines"],
        ["Reap what you sow", "All seeds collected and planted"],
        ["Conga Line", "Have a gang of 10+ forest spirits follow you"],
        ["Plot Head", "Access Pothead's secret garden"],
        ["Lord of Chores", "100% Complete the game"],
        ["Squid Soup?", "Accept Jefferson's Soup"],
        ["Baul Plart, Hall Cop", "Trigger the metal detector without detecting a threat"],
        ["Cremation", "Upgrade the fire ability"],
        ["Demo Crow", "Upgrade the bomb ability"],
        ["Crouching Tiger Hidden Crow", "Upgrade the hookshot ability"],
        ["Hawk Eye", "Upgrade the arrow ability"]
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["A Stroll with Jefferson", "In Caw-Hoots", "A True End"]);

    const dataPairs = deathsDoor.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 3 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const jefferson = deathsDoor.achievements.find(a => a.apiname === "ach_jeff");
    const owls = deathsDoor.achievements.find(a => a.apiname === "ach_owls");
    const trueEnd = deathsDoor.achievements.find(a => a.apiname === "ach_truth");

    assert.ok(jefferson && jefferson.name === "A Stroll with Jefferson" && jefferson.description.length > 0);
    assert.ok(owls && owls.name === "In Caw-Hoots" && owls.description.length > 0);
    assert.ok(trueEnd && trueEnd.name === "A True End" && trueEnd.description.length > 0);

});
