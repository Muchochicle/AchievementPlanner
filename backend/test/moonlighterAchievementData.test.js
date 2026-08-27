import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/moonlighter.json - 67 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 606150 (fetched through this app's own services/steamApi.js) - 49 of
// 67 ship a real, official Steam description. The 18 hidden ones are
// hidden achievements Steam never describes publicly (confirmed via the
// same API call) - their descriptions here are curatorial summaries of
// their real, community-documented unlock conditions, sourced from an
// independent Steam Community 100% achievement guide. difficulty/
// estimatedTime remain curatorial judgments, same convention as every
// other planner difficulty/time field in this catalog.
const moonlighter = getPlannerData("moonlighter");

test("getPlannerData('moonlighter') returns real planner data with 67 curated achievements", () => {

    assert.ok(moonlighter, "expected real planner data for moonlighter");
    assert.ok(Array.isArray(moonlighter.achievements));
    assert.strictEqual(moonlighter.achievements.length, 67);

});

test("every Moonlighter achievement has a unique id from 1 to 67 and a unique apiname", () => {

    const ids = moonlighter.achievements.map(a => a.id);
    const apinames = moonlighter.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 67 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 67);
    assert.strictEqual(new Set(apinames).size, 67);

});

test("every Moonlighter achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of moonlighter.achievements) {

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

test("every one of the 49 officially-described Moonlighter achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 18 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Overthrow the king!", "Defeat the Golem King"],
        ["Prune the plant!", "Defeat Carnivurous Mutae"],
        ["Behead the snake!", "Defeat Naja"],
        ["Unplug the energy!", "Defeat Energy Flux"],
        ["Perfect Golem King", "Perfect Golem King"],
        ["Perfect Carnivurous Mutae", "Perfect Carnivurous Mutae"],
        ["Perfect Naja", "Perfect Naja"],
        ["Perfect Energy Flux", "Perfect Energy Flux"],
        ["Archeologist", "Read All Crazy Pete Notes"],
        ["Weaponmaster", "Craft all weapons"],
        ["Balanced Warrior", "Craft All Short Swords"],
        ["Heavy Warrior", "Craft All Big Swords"],
        ["Berserk Warrior", "Craft All Gloves"],
        ["Piercing Warrior", "Craft All Spears"],
        ["Distant Warrior", "Craft All Bows"],
        ["Janitor", "Kill all bosses with the broom"],
        ["Scribe", "Complete the Notebook"],
        ["Savage!", "Kill a total of 10000 enemies"],
        ["Careful Merchant", "Complete the game under 40 deaths"],
        ["Hero or Merchant?", "Discover the mistery of the 5th door"],
        ["Saver", "Have a quantity of gold bigger than 5000"],
        ["Saver+", "Have a quantity of gold bigger than 50000"],
        ["Saver++", "Have a quantity of gold bigger than 100000"],
        ["Greedy", "Have a quantity of gold bigger than 1000000"],
        ["First Investment", "Upgrade your shop to the second version"],
        ["Expansion", "Upgrade your shop to the Third version"],
        ["Luxury", "Upgrade your shop to the fourth version"],
        ["Emporium", "Upgrade your shop to the last version"],
        ["Rynoka's Major!", "Buy all improvements in the Town Board"],
        ["100%", "Complete all achievements"],
        ["Wasteful Merchant", "Buy more than 10 times on Le Retalier"],
        ["Golem Apasionate", "Arrive to the third floor of the Golem Dungeon 10 times"],
        ["Forest Apasionate", "Arrive to the third floor of the Forest Dungeon 10 times"],
        ["Desert Apasionate", "Arrive to the third floor of the Desert Dungeon 10 times"],
        ["Tech Apasionate", "Arrive to the third floor of the Tech Dungeon 10 times"],
        ["It takes a thief to catch a thief", "Earn money from the Banker 5 times."],
        ["Decorative Mind", "Buy all decorative Items"],
        ["Horde Mode", "Defeat four Waves of enemies in a Wave room"],
        ["No Secrets", "Find a secret room 10 times."],
        ["Rage against the Golems", "Kill Golem Enemies 1000 Times"],
        ["Rage against the Forest", "Kill Forest Enemies 1000 Times"],
        ["Rage against the Desert", "Kill Desert Enemies 1000 Times"],
        ["Rage against the Machinery", "Kill Tech Enemies 1000 Times"],
        ["Evil Merchant", "Sell 20 items slightly overpriced"],
        ["Good Merchant", "Sell 20 items for the perfect price"],
        ["Gotta go fast!", "Beat Game Under 10 hours"],
        ["A Bigger Family", "Get all DLC companions"],
        ["Strange Weapon", "Get your first Trick Weapon"],
        ["Trick Weapon Collector", "Get all Trick Weapons from the Dimensional Watcher"]
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "There is no avarice without penalty", "Going for supplies...", "Slime Protection Service",
        "Does it grow on the trees?!?1", "Really?!?", "Healthcare System", "Special Place", "Exterminator",
        "Distracted Merchant", "Naive Merchant", "Scammer", "Inter-Dimensional Blacksmith", "Greed is Over",
        "Second Floor", "Fourth Floor", "Sixth Floor", "Eight Floor", "Improve Yourself"
    ]);

    const dataPairs = moonlighter.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 18 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden = [
        ["DEATH_INVENTORY_FULL", "There is no avarice without penalty"],
        ["EMBLEM_BEFORE_BOSS", "Going for supplies..."],
        ["WITCH_SLIME_HIT_TIMES", "Slime Protection Service"],
        ["MONEY_TREE_ONCE", "Does it grow on the trees?!?1"],
        ["MONEY_TREE_TIMES", "Really?!?"],
        ["EARN_POTIONS_BREAKABLES", "Healthcare System"],
        ["CRAZY_PETE_SPECIAL_PLACE", "Special Place"],
        ["KILL_BUGS_TIMES", "Exterminator"],
        ["VISITORS_RUN_TIMES", "Distracted Merchant"],
        ["SELL_ITEMS_CHEAP_TIMES", "Naive Merchant"],
        ["SELL_ITEMS_EXPENSIVE_TIMES", "Scammer"],
        ["FIRST_ICT_WEAPON", "Inter-Dimensional Blacksmith"],
        ["GREED_IS_OVER", "Greed is Over"],
        ["SECOND_FLOOR", "Second Floor"],
        ["FOURTH_FLOOR", "Fourth Floor"],
        ["SIXTH_FLOOR", "Sixth Floor"],
        ["EIGHT_FLOOR", "Eight Floor"],
        ["IMPROVE_YOURSELF", "Improve Yourself"]
    ];

    assert.strictEqual(hidden.length, 18, "sanity check on this test's own reference list");

    for (const [apiname, name] of hidden) {

        const achievement = moonlighter.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
