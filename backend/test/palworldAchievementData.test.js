import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/palworld.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1623730 (fetched through this app's own services/steamApi.js) - 51 of
// 75 ship a real, official Steam description. The 24 hidden achievements
// are almost all boss defeats (tower Sovereigns, raid Sirens, legendary
// Pals) plus a few endgame markers; their descriptions here are
// curatorial, cross-checked against videogamer.com, Game8, and
// PSNProfiles. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field.
const palworld = getPlannerData("palworld");

test("getPlannerData('palworld') returns real planner data with 75 curated achievements", () => {

    assert.ok(palworld, "expected real planner data for palworld");
    assert.ok(Array.isArray(palworld.achievements));
    assert.strictEqual(palworld.achievements.length, 75);

});

test("every Palworld achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = palworld.achievements.map(a => a.id);
    const apinames = palworld.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every Palworld achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of palworld.achievements) {

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

test("every one of the 51 officially-described Palworld achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 24 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Beginning of the Legend", "Caught your first Pal"],
        ["Newbie Pal Tamer", "Caught 10 kinds of Pals"],
        ["Intermediate Pal Tamer", "Caught 20 kinds of Pals"],
        ["Skilled Pal Tamer", "Caught 50 kinds of Pals"],
        ["Seasoned Pal Tamer", "Caught 90 kinds of Pals"],
        ["Exceptional Pal Tamer", "Caught 140 kinds of Pals"],
        ["Overhunting", "Caught 1000 Pals"],
        ["Inhuman Act", "Caught a Human"],
        ["Trail of the Castaway", "Obtained 40 Notes"],
        ["Palpagos Guru", "Obtained 50 Lifmunk Effigies"],
        ["All for One", "Maximized the rank of a Pal"],
        ["Voice of Resentment", "Maximized the rank of 5 Pals"],
        ["Senior Adventurer", "Cleared 20 dungeons"],
        ["Conqueror of the Sea", "Seized the Oil Rig"],
        ["Sphere Craftsman", "Crafted 2,000 spheres"],
        ["Iron Heart", "Crafted 10,000 ingots"],
        ["Blood and Iron", "Crafted 20,000 ammo"],
        ["Palpagos Guardian", "Obtained 100 Lifmunk Effigies"],
        ["Pal Labor Student", "Completed 10 Pal Labor Research projects"],
        ["Pal Labor Researcher", "Completed 30 Pal Labor Research projects"],
        ["Pal Labor Professor", "Completed 70 Pal Labor Research projects"],
        ["Novice Pal Dispatcher", "Undertook 10 Pal Expeditions"],
        ["Elite Pal Dispatcher", "Undertook 20 Pal Expeditions"],
        ["Freshman Surveyor", "Found 10 new areas"],
        ["Junior Surveyor", "Found 30 new areas"],
        ["Senior Surveyor", "Found 70 new areas"],
        ["Novice Angler", "Reeled in 10 Pals"],
        ["Seasoned Angler", "Reeled in 30 Pals"],
        ["Veteran Angler", "Reeled in 50 Pals"],
        ["Lunker Hunter", "Reeled in 1 Lunker"],
        ["Silver Champ", "Reached Silver Rank in the Arena"],
        ["Arena Champion", "Reached Master Rank in the Arena"],
        ["Best Friends Forever", "Reached Trust level 10 with a Pal"],
        ["Successful Infiltration", "Cleared 1 enemy faction base"],
        ["Unstoppable Streak", "Cleared 10 enemy faction bases"],
        ["A Nose for Treasure", "Found 5 treasures with Treasure Maps"],
        ["Forest Guru", "Obtained 20 Lamball Effigies"],
        ["Volcano Guru", "Obtained 20 Pengullet Effigies"],
        ["Desert Guru", "Obtained 20 Munchill Effigies"],
        ["Snowy Mountain Guru", "Obtained 20 Rooby Effigies"],
        ["Sakurajima Guru", "Obtained 20 Herbil Effigies"],
        ["Feybreak Guru", "Obtained 20 Tanzee Effigies"],
        ["Sunreach Guru", "Obtained 20 Depresso Effigies"],
        ["World Tree Guru", "Obtained 20 Cattiva Effigies"],
        ["Forest Traveler", "Obtained 4 Lunaris Effigies"],
        ["Island Traveler", "Obtained 4 Relaxaurus Effigies"],
        ["World Traveler", "Obtained 4 Yakumo Effigies"],
        ["Meddling With Mutation", "Mutated a Pal for the first time"],
        ["Hidden Potential", "Awakened a Pal for the first time"],
        ["Arena Legend", "Reached legend rank in the arena"],
        ["To the World Tree", "Set foot within the World Tree"]
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Pal_Achievement_1",
        "Pal_Achievement_2",
        "Pal_Achievement_3",
        "Pal_Achievement_4",
        "Pal_Achievement_5",
        "Pal_Achievement_11",
        "Pal_Achievement_12",
        "Pal_Achievement_13",
        "Pal_Achievement_14",
        "Pal_Achievement_18",
        "Pal_Achievement_19",
        "Pal_Achievement_20",
        "Pal_Achievement_21",
        "Pal_Achievement_28",
        "Pal_Achievement_32",
        "Pal_Achievement_33",
        "Pal_Achievement_43",
        "Pal_Achievement_44",
        "Pal_Achievement_55",
        "Pal_Achievement_56",
        "Pal_Achievement_57",
        "Pal_Achievement_72",
        "Pal_Achievement_73",
        "Pal_Achievement_75"
    ]);

    assert.strictEqual(hiddenApinames.size, 24, "sanity check - Palworld has 24 hidden achievements");

    const dataPairs = palworld.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 24 hidden Palworld achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Pal_Achievement_1", "Hillside Sovereign"],
        ["Pal_Achievement_2", "Forest Sovereign"],
        ["Pal_Achievement_3", "Desert Sovereign"],
        ["Pal_Achievement_4", "Volcano Sovereign"],
        ["Pal_Achievement_5", "Astral Sovereign"],
        ["Pal_Achievement_11", "Twilight Siren"],
        ["Pal_Achievement_12", "Eclipsed Siren"],
        ["Pal_Achievement_13", "Blossom Sovereign"],
        ["Pal_Achievement_14", "Incarnation of the Eternal Flame"],
        ["Pal_Achievement_18", "Legendary Celestial Dragon"],
        ["Pal_Achievement_19", "Holy Knight of Legend"],
        ["Pal_Achievement_20", "Dark Knight of Legend"],
        ["Pal_Achievement_21", "Legendary Steed of Ice"],
        ["Pal_Achievement_28", "Champion of the Palpagos Islands"],
        ["Pal_Achievement_32", "Feybreak Sovereign"],
        ["Pal_Achievement_33", "Invader from Space"],
        ["Pal_Achievement_43", "Predator Hunter"],
        ["Pal_Achievement_44", "No-Fly Zone"],
        ["Pal_Achievement_55", "Rookie Pal Slayer"],
        ["Pal_Achievement_56", "Alpha Pal Slayer"],
        ["Pal_Achievement_57", "King of Salvation"],
        ["Pal_Achievement_72", "Sunreach Sovereign"],
        ["Pal_Achievement_73", "Legendary Ocean King"],
        ["Pal_Achievement_75", "Savior of Palpagos"]
    ];

    assert.strictEqual(names.length, 24, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = palworld.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
