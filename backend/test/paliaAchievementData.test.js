import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/palia.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2707930 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("palia");

test("getPlannerData('palia') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for palia");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Palia achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Palia achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 Palia achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Tail of Luck", "You've looted your first Star Quality Azure Chapaa Tail!"],
        ["Advanced Angler", "You've reached Level 10 in Fishing!"],
        ["Advanced Bug Catcher", "You've reached Level 10 in Bug Catching!"],
        ["Advanced Cook", "You've reached Level 10 in Cooking!"],
        ["Advanced Forager", "You've reached Level 10 in Foraging!"],
        ["Advanced Furniture Maker", "You've reached Level 10 in Furniture Making!"],
        ["Advanced Gardener", "You've reached Level 10 in Gardening!"],
        ["Advanced Hunter", "You've reached Level 10 in Hunting!"],
        ["Advanced Miner", "You've reached Level 10 in Mining!"],
        ["All the Stars in the Ground", "You've acquired every Starstone!"],
        ["Antlers In A Haystack", "You've looted your first Star Quality Proudhorned Sernuk Antlers!"],
        ["Bewildered in the Wind", "You've solved the Temple of the Gales!"],
        ["Chapaa Hunter", "You've hunted all types of Chapaa!"],
        ["Every Mineral is Mine", "You've acquired every type of mineral and bar in Kilima and Bahari!"],
        ["Fiery Flummox", "You've solved the Temple of the Flames!"],
        ["Glidin' High", "You built your glider!"],
        ["HOA-mazing", "You built a house!"],
        ["Kilima and Bahari Bug Collector", "You caught every type of bug in Kilima and Bahari!"],
        ["Kilima and Bahari Fish Collector", "You caught all types of fish in Kilima and Bahari!"],
        ["Kilima and Bahari Forage Collector", "You gathered all types of forage in Kilima and Bahari!"],
        ["Kilima Caches", "Found 12 of the hidden treasure chests in Kilima Village."],
        ["Makeshift Is All Mine", "You collected every Makeshift decor item!"],
        ["Mane of the Hour", "You've looted your first Star Quality Bluebristle Muujin Mane!"],
        ["Master Kilima and Bahari Bug Collector", "You caught every type of bug at star quality in Kilima and Bahari!"],
        ["Master Kilima and Bahari Fish Collector", "You caught all types of fish at star quality in Kilima and Bahari!"],
        ["Master Palia Chef: A Dish of Spice and Corn", "You've cooked a large number of unique Corn and Spicy Pepper dishes at Star Quality!"],
        ["Master Palia Chef: Cooking by the Book", "You've cooked a large number of unique dishes at Star Quality!"],
        ["Master Palia Chef: Luna New Year", "You've cooked a large number of unique Luna New Year dishes at Star Quality!"],
        ["Muujin Hunter", "You've hunted all types of Muujin!"],
        ["My First Epic Bug", "You caught your first epic bug!"],
        ["My First Epic Fish", "You caught your first epic fish!"],
        ["My First Rare Bug", "You caught your first rare bug!"],
        ["My First Rare Fish", "You caught your first rare fish!"],
        ["My First Waterlogged Chest", "You caught your first waterlogged chest!"],
        ["Palia Chef: A Dish of Spice and Corn", "You've cooked a large number of unique Corn and Spicy Pepper dishes!"],
        ["Palia Chef: Cooking by the Book", "You've cooked a large number of unique dishes!"],
        ["Palia Chef: Luna New Year", "You've cooked a large number of unique Luna New Year dishes!"],
        ["Pebbled Plunder", "Found all of Einar's lost pebbles."],
        ["Plundering the Bay", "Found 30 of the hidden treasure chests in Bahari Bay."],
        ["Puzzling when Wet", "You've solved the Temple of the Waves!"],
        ["Rooting for Meaning", "You've solved the Temple of the Roots!"],
        ["Scholar of the Flames", "You've read every lost relic in the Temple of the Flames!"],
        ["Scholar of the Gales", "You helped Elouisa and Caleri come to a conclusion about the Silverwings!"],
        ["Scholar of the Waves", "You've read every lost relic in the Temple of the Waves!"],
        ["Sernuk Hunter", "You've hunted all types of Sernuk!"],
        ["Something in the Sky", "You've filled the Bundle of the Gales!"],
        ["Something's in the Dirt", "You've filled the Bundle of the Roots!"],
        ["Something's in the Garden", "You've filled the Bundle of the Flames!"],
        ["Something's in the Water", "You've filled the Bundle of the Waves!"],
        ["Thief of the Gales", "You pilfered the Temple of the Gales for Zeki!"],
        ["Waaaay Under the Table", "You bought something from the Grimalkin Underground!"],
        ["What Brings us Together", "You acquired a villagers pin!"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
