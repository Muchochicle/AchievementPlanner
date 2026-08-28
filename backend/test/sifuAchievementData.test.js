import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sifu.json - 61 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 2138710
// (fetched through this app's own services/steamApi.js) - 43 of 61 ship
// a real, official Steam description. The 18 hidden achievements (the
// prologue, the five Vengeance boss kills, the five Wude talismans,
// Path of the Prospect, and six Arena achievements) are described
// publicly nowhere; their descriptions here are curatorial summaries
// cross-checked against Steam Community achievement guides.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const sifu = getPlannerData("sifu");

test("getPlannerData('sifu') returns real planner data with 61 curated achievements", () => {

    assert.ok(sifu, "expected real planner data for sifu");
    assert.ok(Array.isArray(sifu.achievements));
    assert.strictEqual(sifu.achievements.length, 61);

});

test("every Sifu achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = sifu.achievements.map(a => a.id);
    const apinames = sifu.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Sifu achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of sifu.achievements) {

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

test("every one of the 43 officially-described Sifu achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 18 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Fist of the Immortal", "All achievements unlocked! Thank you for playing."],
        ["Scareless", "Beat the game while being 50 years old or less."],
        ["Prodigal Child", "Beat the game while being 25 years old or less."],
        ["Kill Nil", "Beat any boss without dying."],
        ["Detective Story", "Complete the Squats' detective board."],
        ["Drunken Fighter", "Complete the Club's detective board."],
        ["Martial Artist", "Complete the Museum's detective board."],
        ["Knowledge Greed", "Complete the Tower's detective board."],
        ["Healing Memory", "Complete the Sanctuary's detective board."],
        ["Stuntmaster", "Climbing and going across the environment allows you to control the flow of the fight."],
        ["Dance of the Praying Mantis", "Throwing enemies around makes handling big groups easier. (Ignored in training mode.)"],
        ["Street Fighting", "Anything can be a weapon, so keep using your environment to your advantage. All is fair in such fights! (Ignored in training mode.)"],
        ["Life is your teacher", "Unlock your first skill."],
        ["State of constant learning", "Permanently unlock a skill for the first time."],
        ["Qi Gong: Mind", "Receive the highest XP-based shrine reward for the first time."],
        ["Qi Gong: Breath", "Receive the highest score-based shrine reward for the first time."],
        ["Qi Gong: Essence", "Receive the highest age-based shrine reward for the first time."],
        ["The 36th Chamber of Kung-Fu", "Bare handed or with a weapon, standing up, against a wall, a ledge, or on the ground... Perform each takedown type at least once."],
        ["Master of the Phoenix Eye Fist", "Use each Focus Attack at least once. (Ignored in introduction level.)"],
        ["I know Kung-Fu", "Reach a level score of 10 000."],
        ["Ferocity, speed, strength, accuracy", "Reach a level score of 20 000."],
        ["Old Child", "Reach your oldest appearance. Will you still have enough strength left to reach your goal?"],
        ["Sword Stained With Blood", "Successfully use a blade weapon's one-shot attack on an enemy. (Ignored in training mode.)"],
        ["Lightning Hands", "Perform 3 takedowns within 12 seconds. (Ignored in introduction level.)"],
        ["Kung-Fu Tussle", "Hit 3 enemies in a single strike. (Ignored in introduction level.)"],
        ["Rumble in the Hangar", "In the Squats, clear the hangar in less than 1 minute 20 seconds after being detected by the main group."],
        ["The Pit Protector", "In the Club's pit, beat the Juggernaut before any other enemy is beaten."],
        ["Be like water my friend", "In the Museum, throw an enemy into the fountain from a higher floor."],
        ["Take damage to save time", "In the Tower's caves, drop from a high point to get deeper faster."],
        ["Warriors from the Mountain", "In the Sanctuary, throw an enemy into the mountains."],
        ["Come Snap With Me", "Give the Photo Mode a shot!"],
        ["Project Arena", "Unlock a new arena pack."],
        ["Diligence as a goal", "Get 3 stamps in any arena challenge."],
        ["Bloody Sport", "Clear 25 different arena challenges."],
        ["Martial Hub", "Clear 45 different arena challenges."],
        ["Crouching Tiger", "Clear all tiger arena challenges."],
        ["Hidden Dragon", "Clear all dragon arena challenges."],
        ["Skill and an even stronger will", "Collect 240 stamps in arenas."],
        ["Master of the Flying Assassins", "Clear any challenge of the Heliport arena by throwing all enemies out."],
        ["Here Cometh the Iceman", "Finish the target with a snowball in the \"Cyclone\" arena challenge."],
        ["Fighter in the Pond", "Throw the Disciple in the lake in the \"Bellowing Mountains\" arena challenge."],
        ["Fight the way you practice", "Clear an arena challenge with the Custom Mode enabled."],
        ["A Bit Of Everything, Simultaneously", "Attempt to clear any level with the Modifiers Randomizer enabled."]
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "Prologue",
        "Vengeance_H1",
        "Vengeance_H2",
        "Vengeance_H3",
        "Vengeance_H4",
        "Vengeance_H5",
        "Wude_H1",
        "Wude_H2",
        "Wude_H3",
        "Wude_H4",
        "Wude_H5",
        "Calbot_Trophy",
        "Arena_GoldManhunt",
        "Arena_GoldCapture",
        "Arena_GoldSurvival",
        "Arena_GoldTimePerf",
        "Arena_Car",
        "Arena_Music"
    ]);

    assert.strictEqual(hiddenApinames.size, 18, "sanity check - Sifu has 18 hidden achievements");

    const dataPairs = sifu.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 18 hidden Sifu achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["Prologue", "The Old Grandmaster"],
        ["Vengeance_H1", "The Assault"],
        ["Vengeance_H2", "The Hateful Pole Fighter"],
        ["Vengeance_H3", "A Lady's Blood in the Snow"],
        ["Vengeance_H4", "Lady Wing Chun"],
        ["Vengeance_H5", "Furious Fists"],
        ["Wude_H1", "Muk Yan Master"],
        ["Wude_H2", "Tiger on Fire"],
        ["Wude_H3", "Source of Flying Daggers"],
        ["Wude_H4", "Iron Money"],
        ["Wude_H5", "Legendary Talismans of Wuxing"],
        ["Calbot_Trophy", "Path of the Prospect"],
        ["Arena_GoldManhunt", "Deadly Venom"],
        ["Arena_GoldCapture", "Secure, Protect, Leave"],
        ["Arena_GoldSurvival", "The best strikes are the ones we avoid"],
        ["Arena_GoldTimePerf", "A Touch of Acumen"],
        ["Arena_Car", "Bonus Stage"],
        ["Arena_Music", "Beatmaker"]
    ];

    assert.strictEqual(names.length, 18, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = sifu.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
