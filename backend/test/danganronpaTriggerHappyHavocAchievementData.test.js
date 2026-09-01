import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/danganronpa-trigger-happy-havoc.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 413410 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("danganronpa-trigger-happy-havoc");

test("getPlannerData('danganronpa-trigger-happy-havoc') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for danganronpa-trigger-happy-havoc");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Danganronpa: Trigger Happy Havoc achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Danganronpa: Trigger Happy Havoc achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Danganronpa: Trigger Happy Havoc achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All's Well That Ends...Umm...", "Complete the main story (Chapter 6)."],
        ["Almost Almost Famous", "Filled in every page of Leon's Report Card"],
        ["Despair's Last Reward", "Earned every other achievement in the game"],
        ["Five Alive", "Complete Chapter 5."],
        ["Four by Gore", "Complete Chapter 4."],
        ["From Zero to Hero", "Complete the Prologue."],
        ["Ghostface Skillah", "Cleared the 30 SP threshold"],
        ["GoodFellows", "Filled in every page of Chihiro's Report Card"],
        ["Hey, Big Spender", "Enjoyed the exciting excitement of the MonoMono Machine 100 times"],
        ["Hope's Peak Confidential", "Filled in every page of Kyoko's Report Card"],
        ["Lost in Scanslation", "Filled in every page of Hifumi's Report Card"],
        ["Lovesport", "Filled in every page of Sakura's Report Card"],
        ["Memoirs of a Fashionista", "Filled in every page of Junko's Report Card"],
        ["Mr. Know-It-All", "Filled in every page of every character's Report Card"],
        ["Mystic Donut", "Filled in every page of Aoi's Report Card"],
        ["Nine Coins, Nine Purses, Nine Bears", "Collected 999 Monocoins"],
        ["Not From Concentrate", "Cleared a class trial without using your Concentration skill a single time"],
        ["One Is the Loneliest Number", "Complete Chapter 1."],
        ["Ooh, For Me?", "Collected 50 unique presents"],
        ["Psychic", "Filled in every page of Sayaka's Report Card"],
        ["Rebel Without a High School Degree", "Filled in every page of Mondo's Report Card"],
        ["Rogue's Gallery", "Unlocked all gallery items"],
        ["School's Out For Summer", "Clear School Mode once (unlocked after finishing the main story)."],
        ["School's Out Forever", "Complete every character's events in School Mode."],
        ["Seriously, You Shouldn't Have", "Collected every possible present"],
        ["Skill or Be Skilled", "Cleared the 20 SP threshold"],
        ["Skilling 'Em Softly", "Cleared the 10 SP threshold"],
        ["Strangers in a Brain", "Filled in every page of Toko's Report Card"],
        ["The Color of Television", "Destroyed 100 white noise lines across all class trials"],
        ["The Devil Wears a High School Uniform", "Filled in every page of Kiyotaka's Report Card"],
        ["The French Disconnection", "Filled in every page of Celeste's Report Card"],
        ["The Game Hungers", "Filled in every page of Byakuya's Report Card"],
        ["The Sixth Nonsense", "Filled in every page of Yasuhiro's Report Card"],
        ["Three's a Crowd", "Complete Chapter 3."],
        ["Tuned to a Dead Channel", "Destroyed 500 white noise lines across all class trials"],
        ["Two of a Kind", "Complete Chapter 2."],
        ["What's a Mistrial?", "Cleared a class trial without having to retry a single time"],
        ["You Must Acquit", "Cleared a class trial without taking any damage"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
