import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/plants-vs-zombies-goty.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3590 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("plants-vs-zombies-goty");

test("getPlannerData('plants-vs-zombies-goty') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for plants-vs-zombies-goty");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Plants vs. Zombies achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Plants vs. Zombies achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Plants vs. Zombies achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ask Me About Mustache Mode ", "Enable Mustache Mode "],
        ["Better Off Dead ", "Get to a streak of 10 in I, Zombie Endless "],
        ["Beyond the Grave", "Beat all 20 mini games."],
        ["China Shop ", "Get to a streak of 15 in Vasebreaker Endless "],
        ["Cryptozombologist", "Discover the top secret zombie "],
        ["Disco is Undead", "Hypnotize the lead dancer zombie "],
        ["Don't Pea in the Pool", "Complete a daytime pool level without using pea shooters of any kind."],
        ["Explodonator", "Blow up 10 zombies with a single cherry bomb "],
        ["Good Morning", "Complete a daytime level by planting only Mushrooms and Coffee Beans."],
        ["Grounded", "Defeat a normal roof level without using any catapult plants."],
        ["Home Lawn Security ", "Complete adventure mode "],
        ["Immortal", "Get to 20 flags in Survival Endless "],
        ["Morticulturalist", "Collect all 49 plants "],
        ["No Fungus Among Us", "Complete a nighttime level without planting any Mushrooms."],
        ["Nobel Peas Prize ", "Get the golden sunflower trophy "],
        ["Penny Pincher", "Pick up 30 coins in a row on a single level without letting any disappear."],
        ["Popcorn Party", "Defeat 2 Gargantuars with Corn Cob missiles in a single level."],
        ["Roll Some Heads", "Bowl over 5 zombies with a single Wall-Nut."],
        ["SPUDOW! ", "Blow up a zombie using a potato mine "],
        ["Sunny Days", "Get 8000 sun during a single level."],
        ["Towering Wisdom ", "Grow the Tree of Wisdom to 100 feet "],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
