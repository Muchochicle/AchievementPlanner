import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/resident-evil-2-remake.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 883710 (fetched through this app's own services/steamApi.js).
// 28 of 44 ship a real, official Steam description, quoted
// verbatim below. The 16 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against PowerPyx, TrueAchievements/XboxAchievements and the Resident
// Evil Wiki, and kept spoiler-light (boss/act name only).
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("resident-evil-2-remake");

test("getPlannerData('resident-evil-2-remake') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for resident-evil-2-remake");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Resident Evil 2 (2019) achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Resident Evil 2 (2019) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 officially-described Resident Evil 2 (2019) achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "NEW_ACHIEVEMENT_1_1",
        "NEW_ACHIEVEMENT_1_2",
        "NEW_ACHIEVEMENT_1_3",
        "NEW_ACHIEVEMENT_1_4",
        "NEW_ACHIEVEMENT_1_5",
        "NEW_ACHIEVEMENT_1_6",
        "NEW_ACHIEVEMENT_1_9",
        "NEW_ACHIEVEMENT_1_24",
        "NEW_ACHIEVEMENT_1_27",
        "NEW_ACHIEVEMENT_1_28",
        "NEW_ACHIEVEMENT_1_29",
        "NEW_ACHIEVEMENT_1_30",
        "NEW_ACHIEVEMENT_1_34",
        "NEW_ACHIEVEMENT_1_35",
        "NEW_ACHIEVEMENT_1_41",
        "NEW_ACHIEVEMENT_1_42",
    ]);

    assert.strictEqual(hiddenApinames.size, 16, "sanity check - Resident Evil 2 (2019) has 16 hidden achievements");

    const officialAchievements = [
        ["A Hero Emerges", "Complete Leon's story."],
        ["A Heroine Emerges", "Complete Claire's story."],
        ["A Small Carbon Footprint", "Take 14000 steps or fewer in one playthrough."],
        ["A Vault-like Mind", "Open a portable safe."],
        ["A Waist of Space", "Expand inventory slots to max."],
        ["Bon Appétit", "Shoot the grenade you fed to an enemy."],
        ["Chasing Jill", "Read a letter left behind by Jill."],
        ["Complete Vermin Extermination", "Destroy all Mr. Raccoons."],
        ["Customizer", "Customize a weapon."],
        ["Don't Need No Stinkin' Gun", "Defeat an enemy with a knife."],
        ["Eat This!", "Counterattack with a sub-weapon."],
        ["First Break-In", "Open a dial safe."],
        ["Frugalist", "Complete the game without using a recovery item."],
        ["Got 'Em", "Destroy all Mr. Raccoons hidden in The Ghost Survivors mode."],
        ["Hardcore College Student", "Complete Claire's story on \"Hardcore\" game mode."],
        ["Hardcore Rookie", "Complete Leon's story on \"Hardcore\" game mode."],
        ["Hats Off!", "Shoot Tyrant's hat off his head."],
        ["Hip to Add Squares", "Increase your inventory slots."],
        ["Keep Their Heads Ringin'", "Paralyze a licker's sense of hearing."],
        ["Like Skeet Shooting", "Shoot a zombie dog or a licker out of the air."],
        ["Lore Explorer", "Read all of the files."],
        ["Master of Unlocking", "Open all of the safes and locks in the game."],
        ["Minimalist", "Clear the game without opening the item box."],
        ["That'll Hold 'Em", "Use Wooden Boards to board up a window."],
        ["The Basics of Survival", "Combine two items together."],
        ["Treasure Hunter", "Using the photo hints, find 2 hidden items."],
        ["Vermin Extermination", "Destroy a Mr. Raccoon."],
        ["Zombie Roundup", "Kill 3 enemies at once with a sub-weapon."],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 16 hidden Resident Evil 2 (2019) achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["NEW_ACHIEVEMENT_1_1", "Welcome to the City of the Dead"],
        ["NEW_ACHIEVEMENT_1_2", "Path to the Goddess"],
        ["NEW_ACHIEVEMENT_1_3", "Never-Ending Rain"],
        ["NEW_ACHIEVEMENT_1_4", "Hack Complete"],
        ["NEW_ACHIEVEMENT_1_5", "Hide and Seek"],
        ["NEW_ACHIEVEMENT_1_6", "A Great Need for a Shower"],
        ["NEW_ACHIEVEMENT_1_9", "Broken Umbrella"],
        ["NEW_ACHIEVEMENT_1_24", "Gotcha!"],
        ["NEW_ACHIEVEMENT_1_27", "One Slick Super-spy"],
        ["NEW_ACHIEVEMENT_1_28", "Young Escapee"],
        ["NEW_ACHIEVEMENT_1_29", "With Time to Spare"],
        ["NEW_ACHIEVEMENT_1_30", "In the Blink of an Eye"],
        ["NEW_ACHIEVEMENT_1_34", "Leon \"S.\" Kennedy"],
        ["NEW_ACHIEVEMENT_1_35", "Sizzling Scarlet Hero"],
        ["NEW_ACHIEVEMENT_1_41", "Grim Reaper"],
        ["NEW_ACHIEVEMENT_1_42", "Hell of a Sheriff"],
    ];

    assert.strictEqual(names.length, 16, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
