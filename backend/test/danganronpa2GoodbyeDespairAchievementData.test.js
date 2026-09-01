import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/danganronpa-2-goodbye-despair.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 413420 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("danganronpa-2-goodbye-despair");

test("getPlannerData('danganronpa-2-goodbye-despair') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for danganronpa-2-goodbye-despair");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Danganronpa 2: Goodbye Despair achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Danganronpa 2: Goodbye Despair achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 47 Danganronpa 2: Goodbye Despair achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Fool and His Money...", "Obtained all types of items in vending machine"],
        ["A Magical Ending", "Complete the Magical Girl Miracle Monomi minigame."],
        ["A Royal Affair", "Filled in every page of Sonia's Report Card"],
        ["Abandon All Hope", "Complete Chapter 5."],
        ["Any Objections?", "Cleared a class trial without taking any damage"],
        ["Be Beary, Beary Quiet...", "Found half of the Hidden Monokumas"],
        ["Blowin' Through My Screen", "Destroyed 100 white noise lines across all class trials"],
        ["Bred for Destruction", "Complete Chapter 4."],
        ["Can We Keep Him?", "Fully raised one type of pet"],
        ["Capped Out!", "Hajime Hinata breaks through level 99"],
        ["Case Closed", "Cleared a class trial without having to retry once"],
        ["Caught in a Rad Bromance", "Filled in every page of Nekomaru's Report Card"],
        ["Co-Op Partner", "Filled in every page of Chiaki's Report Card"],
        ["Cooking With Passion", "Filled in every page of Teruteru's Report Card"],
        ["Dead Man's Party", "Complete Chapter 1."],
        ["Death, Lies, and Video Games", "Complete Chapter 2."],
        ["Dynamic Duet", "Filled in every page of Ibuki's Report Card"],
        ["Feudal Friendship", "Filled in every page of Peko's Report Card"],
        ["For the Hoard", "Collected every possible present"],
        ["Goodbye Academy of Despair", "Complete the main story (Chapter 6)."],
        ["Gotta Raise 'Em All!", "Fully raised every type of pet"],
        ["Grease Monkeying Around", "Filled in every page of Kazuichi's Report Card"],
        ["Halfway There!", "Hajime Hinata breaks through level 50"],
        ["Helloooooooooooooooo Nurse!", "Filled in every page of Mikan's Report Card"],
        ["Hey, Big Vendor", "Challenged vending machine 100 times"],
        ["Honor and Humanity", "Filled in every page of Fuyuhiko's Report Card"],
        ["Hope Springs Eternal", "Filled in every page of Nagito's Report Card"],
        ["Hope's Last Reward", "Earned every other achievement in the game"],
        ["I Should Start a Circus", "Found every Hidden Monokuma"],
        ["I Wanna Soak Up Some Sun", "Clear Island Mode once (unlocked after finishing the main story)."],
        ["I'm Sorry, What Were You Saying?", "Cleared a class trial without using your Concentration skill once"],
        ["Is It Medicine or Social Skill?", "Complete Chapter 3."],
        ["It's Lolita Complicated", "Filled in every page of Hiyoko's Report Card"],
        ["Life's a Real Beach", "Complete every character's events in Island Mode."],
        ["Look at This Stuff, Isn't it Neat?", "Collected 50 unique presents"],
        ["Monomi Won't Miss These, Right?", "Collect all items in the Magical Girl Miracle Monomi minigame."],
        ["Mr. Congeniality", "Filled in every page of every character's Report Card"],
        ["Murderous Marooning", "Complete the Prologue."],
        ["Nice Calves", "Break through 10,000 total number of steps"],
        ["Overlord's Vassal", "Filled in every page of Gundham's Report Card"],
        ["Picture Perfect", "Filled in every page of Mahiru's Report Card"],
        ["Starving for Affection", "Filled in every page of Akane's Report Card"],
        ["The 1 Percent", "Collected 999 Monocoins"],
        ["The Airborne Static Event", "Destroyed 500 white noise lines across all class trials"],
        ["The Game Hungers for Seconds...and Thirds", "Filled in every page of Byakuya's Report Card"],
        ["This Belongs in a Museum!", "Unlocked all gallery items"],
        ["Walking the Walk", "Break through 5000 total number of steps"],
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
