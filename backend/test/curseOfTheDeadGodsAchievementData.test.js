import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/curse-of-the-dead-gods.json - 30 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 1123770 (fetched through this app's own
// services/steamApi.js) - 25 of 30 ship a real, official Steam
// description ("Clairvoyance" really does read "Perception" in Steam's
// data despite its Greed apiname - quoted as-is). The five hidden
// achievements (Deception, Deliverance, Mastery, Power, Temptation) are
// described publicly nowhere; their descriptions here are curatorial
// summaries cross-checked against a Steam Community guide and the
// achievements' own apiname strings. difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const curseOfTheDeadGods = getPlannerData("curse-of-the-dead-gods");

test("getPlannerData('curse-of-the-dead-gods') returns real planner data with 30 curated achievements", () => {

    assert.ok(curseOfTheDeadGods, "expected real planner data for curse-of-the-dead-gods");
    assert.ok(Array.isArray(curseOfTheDeadGods.achievements));
    assert.strictEqual(curseOfTheDeadGods.achievements.length, 30);

});

test("every Curse of the Dead Gods achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = curseOfTheDeadGods.achievements.map(a => a.id);
    const apinames = curseOfTheDeadGods.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Curse of the Dead Gods achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of curseOfTheDeadGods.achievements) {

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

test("every one of the 25 officially-described Curse of the Dead Gods achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Initiation", "Complete the room of Trials"],
        ["Strength", "Defeat Xak'olchir, the Blood Hunter"],
        ["Toughness", "Defeat Litz & Nepac, the Cursed Twins"],
        ["Cruelty", "Defeat the Dark Avatar of the Jaguar"],
        ["Nobility", "Defeat K'ax taca, High Lord of the Storm"],
        ["Invention", "Defeat Malok paal, the Flesh Monstrosity"],
        ["Vanity", "Defeat the Dark Avatar of the Eagle"],
        ["Awareness", "Defeat Xucat', the Witch"],
        ["Depravity", "Defeat Ratyapu, the Abomination"],
        ["Avidity", "Defeat the Dark Avatar of the Serpent"],
        ["Curiosity", "Start a \"Special Event\""],
        ["Diligence", "Complete 10 different \"Special Events\""],
        ["Belief", "Unlock a Blessing of the Dead Gods"],
        ["Devotion", "Unlock 20 Blessings of the Dead Gods"],
        ["Exhumation", "Unlock 5 Forsaken Weapons"],
        ["Collection", "Unlock 20 Forsaken Weapons"],
        ["Essay", "Write 5 Bestiary entries"],
        ["Memoirs", "Write all Bestiary entries with their complete sketches"],
        ["Restoration", "Unlock all Weapon Altars upgrades"],
        ["Greed", "Achieve a x10 \"Greed Kill\" series"],
        ["Relief", "Lift the Final Curse"],
        ["Insanity", "Make 10 Blood Offerings during a single exploration"],
        ["Invulnerability", "Complete any exploration with 50 or more Constitution"],
        ["Omnipotence", "Complete any exploration with 50 or more Dexterity"],
        ["Clairvoyance", "Complete any exploration with 50 or more Perception"]
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "DefeatDeathChampion",
        "CompleteAllExplorations",
        "Get03SuccessfulParriesIn02Seconds",
        "EquipBossWeapon",
        "EquipAllSlotsWithCursedWeapons"
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - Curse of the Dead Gods has 5 hidden achievements");

    const dataPairs = curseOfTheDeadGods.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the five hidden Curse of the Dead Gods achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["DefeatDeathChampion", "Deception"],
        ["CompleteAllExplorations", "Deliverance"],
        ["Get03SuccessfulParriesIn02Seconds", "Mastery"],
        ["EquipBossWeapon", "Power"],
        ["EquipAllSlotsWithCursedWeapons", "Temptation"]
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = curseOfTheDeadGods.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
