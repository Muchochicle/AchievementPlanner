import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/turnip-boy-commits-tax-evasion.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1205450 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("turnip-boy-commits-tax-evasion");

test("getPlannerData('turnip-boy-commits-tax-evasion') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for turnip-boy-commits-tax-evasion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Turnip Boy Commits Tax Evasion achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Turnip Boy Commits Tax Evasion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Turnip Boy Commits Tax Evasion achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["???", "Defeat the game's secret shadow encounter."],
        ["Adventurer", "You grew your own Soil Sword!"],
        ["Anarchist", "You destroyed every single tax document."],
        ["Book worm", "You ripped a lame book in half."],
        ["Computer wiz", "You broke some computer software."],
        ["Conductor", "Reach the train."],
        ["Contractor", "You tore up someone's 1099."],
        ["Criminal", "Obtain the Shovel."],
        ["Destroyer of the world", "Trigger the nuclear ending."],
        ["Devil", "Rip up a vandalised document."],
        ["Doomsdayers", "Rip up nuclear-launch paperwork."],
        ["Draft dodger", "Rip up a draft notice."],
        ["Dumpster diver", "You ripped up a receipt in the trash."],
        ["Estate agent", "Rip up an estate document."],
        ["Fashionista", "You found all the hats."],
        ["Gravedigger", "Rip up a document found in the graveyard."],
        ["Hat wearer", "You obtained your first hat."],
        ["Heartless", "You tore up a love letter."],
        ["Home owner", "Rip up a property deed."],
        ["Liz", "Rip up a diary page."],
        ["Most wanted", "You ripped up a wanted poster."],
        ["Murderer", "You brutally murdered Jerry and ripped up his rent."],
        ["News boy", "Rip up a newspaper."],
        ["Passenger", "Die on the train."],
        ["Petitioner", "Rip up a petition."],
        ["Savvy shopper", "You destroyed a receipt for seeds."],
        ["Simp", "You shredded slayQueen32's autograph."],
        ["Tank", "You grew all the heart fruits!"],
        ["Tax evader", "You committed tax evasion!"],
        ["Taxation with representation", "Reach 100% completion / the true ending."],
        ["Teacher", "Rip up an English homework paper."],
        ["The messenger", "Rip up a telegram."],
        ["Turnip Boy", "Beat the game."],
        ["Turnipchino", "Rip up a document belonging to your father."],
        ["Tyrant", "Rip up an official decree."],
        ["Waifu", "Rip up an imageboard 'waifu' printout."],
        ["Winner", "Obtain the trophy key item."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
