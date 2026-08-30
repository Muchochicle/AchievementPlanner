import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tooth-and-tail.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 286000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("tooth-and-tail");

test("getPlannerData('tooth-and-tail') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for tooth-and-tail");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Tooth and Tail achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Tooth and Tail achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Tooth and Tail achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Agitator", "Advance to the Agitator checkpoint in Ranked OR win a 1v1 against a medium CPU"],
        ["An Offal You Can't Refuse", "Complete the Heroic objective in \"Scrapetown Racket\""],
        ["Bonepit Redux", "Complete the Heroic objective in \"Bonepit Exile\""],
        ["Deadbones", "Win 100 matches in Ranked OR win a 1v1 against a ruthless CPU in less than 5 minutes"],
        ["Dirty Insurgents", "Complete the Heroic Objective in \"Hollow in the Gut\""],
        ["duDudu", "Complete the Heroic objective in \"To the Ends\""],
        ["Exiled", "Complete the Heroic objective in \"The Bonepit Riots\""],
        ["Fire On Me", "Complete the Heroic objective in \"What Might Be\""],
        ["Fire Wire", "Complete the Heroic objective in \"Frozen in Noe\""],
        ["Firebrand", "Advance to the Firebrand checkpoint in Ranked OR win a 2v1 against two medium CPUs"],
        ["Fury of the Feast", "Advance to the Fury of the Feast checkpoint in Ranked OR win a 2v1 against two ruthless CPUs"],
        ["Hero of the Hungry", "Advance to the Hero of the Hungry checkpoint in Ranked OR win a 2v1 against two hard CPUs"],
        ["Hot Butter", "Complete the Heroic Objective in \"Fuel of the Firebrand\""],
        ["Industrial Farmer", "Complete the Heroic objective in \"46 South Dockside\""],
        ["Lock and Key", "Complete the Heroic objective in \"Betrayal at Vacancee\""],
        ["Look out Below!", "Complete the Heroic objective in \"Defense of the Cold Mark Lows\""],
        ["Militant", "Advance to the Militant checkpoint in Ranked OR win a 1v1 against a brutal CPU"],
        ["Miracle Diet", "Complete the Heroic objective in \"Howling Vell\""],
        ["Pacifist", "Complete the Heroic objective in \"The War for Meat\""],
        ["Peace over Morality", "Complete \"What Might Be\""],
        ["Pigherder", "Complete the Heroic objective in \"Swine, Inscribed\""],
        ["Platinum", "Get all Achievements"],
        ["Rabble Rouser", "Advance to the Rabble Rouser checkpoint in Ranked OR win a 1v1 against a hard CPU"],
        ["Rags to Riches", "Complete the Heroic objective in \"The Siege of Ragfall Road\""],
        ["Revolutionary", "Complete all Heroic Objectives"],
        ["Sent to Slaughter", "Complete the Heroic objective in \"Sage Marro Speaks\""],
        ["Slippery", "Complete the Heroic objective in \"Snikaree Liberation\""],
        ["State of Nature", "Complete \"To the Ends\""],
        ["The Fate of Animals", "Complete the Heroic objective in \"Victors Will Feast\""],
        ["The Great Provider", "Advance to the Great Provider checkpoint in Ranked OR win a 2v1 against two brutal CPUs"],
        ["The Hand that Feeds", "Complete the Heroic objective in \"Awash in Salawa\""],
        ["There's No Place Like Home", "Complete the Heroic objective in \"The Hungry Face a Stiff Wind\""],
        ["Tyranny of the Masses", "Complete \"The Hungry Face a Stiff Wind\""],
        ["Wa-pa-pa-pa-pa-pa-pow!", "Complete the Heroic objective in \"The Sand Kiln at Levacaloo\""],
        ["We Feast", "Complete \"Victors Will Feast\""],
        ["Well Paid Militia", "Complete the Heroic objective in \"Black Sledge Uprising\""],
        ["What's Yours is Mine", "Complete the Heroic objective in \"Scrapetown Cutpurse\""],
        ["Windwalker", "Complete the Heroic objective in \"Vacancee Downfall\""],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
