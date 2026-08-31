import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/far-cry-primal.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 371660 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("far-cry-primal");

test("getPlannerData('far-cry-primal') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for far-cry-primal");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every Far Cry Primal achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every Far Cry Primal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 Far Cry Primal achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["And Stay Down", "Eliminate 100 enemies using a club."],
        ["Apex Predator", "Obtain all the Achievements."],
        ["Armorer", "Use the crafting ability 100 times to craft weapons or arrows."],
        ["Bad Trip", "Influence 25 enemies using poison."],
        ["BEES!", "Eliminate 10 enemies using sting bombs."],
        ["Big Teddy", "Tame the great scar bear."],
        ["Bullseye", "Kill a target 70 feet away or more using an arrow."],
        ["Cave Hoarder", "Pickup 80 collectibles."],
        ["Conquest", "Capture all forts."],
        ["Crush Your Enemies", "Complete 10 \"Tribal Clash\" quests."],
        ["David And Goliath", "Eliminate 10 enemies using a sling."],
        ["Deadeye", "Karoosh joins the Wenja village."],
        ["Endangered", "Fight the bloodtusk mammoth."],
        ["Evolution in Action", "Complete the mission, The Hunt for Ull."],
        ["Expansion", "Capture all outposts."],
        ["Expert Wenja", "Learn all skills."],
        ["Fancy Friend", "Tame 1 rare beast."],
        ["Feathered Friend", "Eliminate 15 enemies using your owl."],
        ["Good Boy", "Tame the snowblood wolf."],
        ["Good Neighbor", "Complete 15 \"Help Wenja\" quests."],
        ["Gotcha", "Eliminate 10 enemies using hunting traps."],
        ["Gray Huntress", "Jayma joins the Wenja village."],
        ["Here Kitty", "Tame the bloodfang sabretooth."],
        ["Home Improvement", "Build or upgrade any 2 village huts."],
        ["Inflammable", "Eliminate 50 enemies with fire."],
        ["Kanda Of Faith", "Climb to the peak of Pardaku Lookout and leap off."],
        ["Killer's Belief", "Eliminate 25 enemies using any takedown."],
        ["Krati, Krati, Krati!", "Steal the Izila mask of Krati."],
        ["Liberator", "Rescue a Wenja captive from the Izila."],
        ["Mapmaker", "Discover 15 hidden locations."],
        ["Mark 4 Wenja", "Discover the future past."],
        ["Master Tracker", "Complete 5 \"Beast Kill\" quests."],
        ["Menagerie", "Tame 7 beasts."],
        ["Mister Fix-It", "Wogah joins the Wenja village."],
        ["Outta My Way", "Eliminate 25 enemies while riding any beast."],
        ["Quickdraw", "Eliminate 15 enemies using throwing shards."],
        ["Real Estate Baron", "Complete all hut upgrades."],
        ["Right On Target", "Kill a target 50 feet away or more using a spear."],
        ["Sharpshooter", "Eliminate 100 enemies using a bow."],
        ["Sic 'Em", "Eliminate 50 hostile targets using a tamed beast."],
        ["Skewered", "Eliminate 100 enemies using a spear."],
        ["Skirmish", "Capture 10 outposts."],
        ["Spearproof", "Repel the Udam attack."],
        ["Spiritual Advisor", "Tensay joins the Wenja village."],
        ["Subdivisions", "Your Wenja tribe reaches a population of 20."],
        ["SURVIVAL OF THE FITTEST", "Finish the game in Survivor mode (Expert difficulty) and the Permadeath option activated... Forget it... No-one will ever achieve it."],
        ["Tears of Shame", "Kill and skin 1 tamed beast."],
        ["This Way To Oros", "Survive the mammoth hunt."],
        ["To Ash", "Complete the mission, The Fall of Batari."],
        ["TOP OF THE FOOD CHAIN", "Finish the game in Survivor mode (Any difficulty)."],
        ["TOP OF THE FOOD CHAIN (2ND CHANCE)", "Finish the game in Survivor mode (Any difficulty) and the Second chance option activated."],
        ["TOP OF THE FOOD CHAIN (PERMADEATH)", "Finish the game in Survivor mode (Any difficulty) and the Permadeath option activated."],
        ["Twelve Labors", "Complete any 12 specialist missions."],
        ["Uncaged", "Escape the Udam caverns."],
        ["Veterinarian", "Heal a tamed beast 25 times."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
