import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wolfenstein-2.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 612880 (fetched through this app's own services/steamApi.js).
// 67 of 80 ship a real, official Steam description, quoted
// verbatim below. The 13 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers kept
// spoiler-light), and feat conditions cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wolfenstein-2");

test("getPlannerData('wolfenstein-2') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for wolfenstein-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Wolfenstein II: The New Colossus achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Wolfenstein II: The New Colossus achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 67 officially-described Wolfenstein II: The New Colossus achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ach_2",
        "ach_3",
        "ach_4",
        "ach_5",
        "ach_6",
        "ach_7",
        "ach_8",
        "ach_9",
        "ach_10",
        "ach_32",
        "ach_35",
        "ach_47",
        "ach_49",
    ]);

    assert.strictEqual(hiddenApinames.size, 13, "sanity check - Wolfenstein II: The New Colossus has 13 hidden achievements");

    const officialAchievements = [
        ["Across the Board", "Complete the Killboard"],
        ["Alaskan Expert", "Beat the Anchorage challenge on \"I am Death Incarnate\" difficulty"],
        ["All-Pro Warrior", "Beat \"The Adventures of Gunslinger Joe\" on \"Mein leben\" difficulty"],
        ["Army Vet", "Beat \"The Deeds of Captain Wilkins\" on \"I am Death Incarnate\" difficulty or higher"],
        ["Art Aficionado", "Found all concept art"],
        ["Audiophile", "Find all records"],
        ["Back in the Field", "Eliminate Übercommander Hans"],
        ["Bring 'em on!", "Beat the game on \"Bring 'em on!\" difficulty or higher"],
        ["Bull Rush", "Ramshackles tackle a charging Supersoldat"],
        ["California Gold", "Find all gold in \"The Diaries of Agent Silent Death\""],
        ["Call me Terror-Billy!", "Beat the game on \"Call me Terror-Billy!\" difficulty or higher"],
        ["Coming Back for More", "Visit every District"],
        ["Complete Package", "Acquire all Contraptions and Contraption upgrades"],
        ["Crippled but Able", "Perform a takedown while in the wheelchair"],
        ["Cut! Cut! Cut!", "Cancel Chuck Lorentz"],
        ["Déjà Vu", "Make the choice"],
        ["Do or die!", "Beat the game on \"Do or die!\" difficulty or higher"],
        ["Down at the Half", "Elude your pursuers"],
        ["Dunked", "Kill General Dunkel"],
        ["Expert Spy", "Beat \"The Diaries of Agent Silent Death\" on \"I am Death Incarnate\" difficulty or higher"],
        ["First Down", "Escape from Research Station Omega"],
        ["First Loser", "Achieve the second best time in the Killhouse"],
        ["First Team Soldier", "Beat the \"The Adventures of Gunslinger Joe\" on \"I am Death Incarnate\" difficulty or higher"],
        ["Ghost", "Finish a District without triggering an alarm"],
        ["Golden Boy", "Find all gold"],
        ["Gun Nut", "Fully upgrade all weapons"],
        ["Hail Mary", "Throw a hatchet and kill an enemy from 30m"],
        ["Hard Headed", "Collect 1000 helmets"],
        ["Hero's Journey", "Stop the Sun Gun"],
        ["Hollywood Medalist", "Beat the Hollywood challenge on \"I am Death Incarnate\" difficulty"],
        ["Homecoming", "Return to America"],
        ["I am death incarnate!", "Beat the game on \"I am death incarnate!\" difficulty or higher"],
        ["Intel Acquired", "Find all readables in \"The Deeds of Captain Wilkins\""],
        ["Investigation Complete", "Find all readables in \"The Diaries of Agent Silent Death\""],
        ["Kodiak Expert", "Beat the Kodiak Islands challenge on \"I am Death Incarnate\" difficulty"],
        ["Laboratory Expert", "Beat the Station Omega challenge on \"I am Death Incarnate\" difficulty"],
        ["Lunar Medalist", "Beat The Moon challenge on \"I am Death Incarnate\" difficulty"],
        ["Make a Point", "Achieve the highest score in the Shooting Range"],
        ["Max a Perk", "Max a perk"],
        ["Max all perks", "Max all Perks"],
        ["Meet the Cast", "Find all starcards"],
        ["Mein leben", "Beat the game on \"Mein leben\" difficulty"],
        ["Nightmare Expert", "Beat the Nightmare challenge on \"I am Death Incarnate\" difficulty"],
        ["Plus Package", "Upgrade a Contraption"],
        ["Puzzler", "Decipher an Übercommander's location using the Enigma Machine"],
        ["Read the Defense", "Find all readables in \"The Adventures of Gunslinger Joe\""],
        ["Retro", "Play Wolfstone 3D"],
        ["Revolution", "Beat the game"],
        ["Sacramento Medalist", "Beat the Sacramento challenge on \"I am Death Incarnate\" difficulty"],
        ["Sidetracked", "Complete all side missions"],
        ["Sightseeing", "Visit a District"],
        ["Signing Bonus", "Find all gold in \"The Adventures of Gunslinger Joe\""],
        ["Snakebite", "Perform a Constrictor Harness takedown"],
        ["Specialist", "Fully upgrade a weapon"],
        ["Starting a Collection", "Find at least one of each collectible item"],
        ["Stipend Gained", "Find all gold in \"The Deeds of Captain Wilkins\""],
        ["Sub Expert", "Beat the Submerged challenge on \"I am Death Incarnate\" difficulty"],
        ["Super Soldier", "Beat \"The Deeds of Captain Wilkins\" on \"Mein leben\" difficulty"],
        ["Terror-Billy", "Collect all Übercommander death cards"],
        ["The Sky is the Limit", "Perform a Battle Walker takedown"],
        ["They did Nazi that Coming", "Stealth kill 10 enemies in a row"],
        ["Ticket Punched", "Destroy the cannons of Kodiak Island"],
        ["Tinkerer", "Upgrade a weapon"],
        ["Touchdown", "Enact Revenge on Übercommander Metze"],
        ["Toy Collector", "Find all of Max's toys"],
        ["Ultimate Spy", "Beat \"The Diaries of Agent Silent Death\" on \"Mein leben\" difficulty"],
        ["Venusian Expert", "Beat the Venus challenge on \"I am Death Incarnate\" difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 67, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 13 hidden Wolfenstein II: The New Colossus achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ach_2", "Carrying the Torch"],
        ["ach_3", "Enemy Within"],
        ["ach_4", "Amazing Grace"],
        ["ach_5", "It's Fricking Space Aliens!"],
        ["ach_6", "R.I.P."],
        ["ach_7", "All the Gains!"],
        ["ach_8", "Sermons and Moonshine"],
        ["ach_9", "Venus"],
        ["ach_10", "The Ausmerzer"],
        ["ach_32", "Kick It"],
        ["ach_35", "I'm Machine Enough"],
        ["ach_47", "Taste of Your own Medicine"],
        ["ach_49", "Keep Playing"],
    ];

    assert.strictEqual(names.length, 13, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
