import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yakuza-like-a-dragon.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1235140 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 63 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("yakuza-like-a-dragon");

test("getPlannerData('yakuza-like-a-dragon') returns real planner data with 63 curated achievements", () => {

    assert.ok(game, "expected real planner data for yakuza-like-a-dragon");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 63);

});

test("every Yakuza: Like a Dragon achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Yakuza: Like a Dragon achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 Yakuza: Like a Dragon achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Hero", "Raised Part-time Hero Member Rank to Executive Hero."],
        ["A New Legend", "Raised Part-time Hero Member Rank to Senior Hero."],
        ["Aggressive Executive", "Bought up over 10 companies."],
        ["Awakening Dragon", "Reached level 10 with Kasuga."],
        ["Can Quest Hero", "Beat all the can-collecting courses."],
        ["Career Counseling", "Changed all four party members to jobs different from their default jobs and won a battle."],
        ["Certified Genius", "Obtained over 10 certificates from the vocational school."],
        ["End of an Era", "Completed Chapter 12."],
        ["Fate of Our Fathers", "Completed Chapter 13."],
        ["Fight on the Sidewalk!", "Someone got run over by a car in battle."],
        ["Food for Thought", "Viewed more than 20 Table Talk scenes."],
        ["For the Family", "Completed Chapter 1."],
        ["Friends From Work", "Maxed Eri's Bond Level."],
        ["Friends in Low Places", "Maxed Nanba's Bond Level."],
        ["Friends in the Gang", "Maxed Zhao's Bond Level."],
        ["Friends Like Sisters", "Maxed Saeko's Bond Level."],
        ["Friends on the Force", "Maxed Adachi's Bond Level."],
        ["Friends With Familiar Faces", "Maxed Joon-gi Han's Bond Level."],
        ["Fulfiller of Dreams", "Completed the last dungeon in Premium Adventure."],
        ["Gear Fanatic", "Collected over 100 pieces of gear."],
        ["Gear Hoarder", "Collected over 200 pieces of gear."],
        ["Gotta Catch 'Em All", "Registered over 200 Sujimon to the Sujidex."],
        ["Heir to the Legend", "Beat the Sotenbori Battle Arena."],
        ["Heroes and Villains", "Completed Chapter 3."],
        ["Honk-Honk Hero", "Found all the people who will give you a honk-honk."],
        ["I Wanna Be the Very Best", "Registered over 100 Sujimon to the Sujidex."],
        ["Ignition", "Completed Chapter 6."],
        ["Illuminations", "Completed Chapter 10."],
        ["Jack of All Trades", "Raised 7 jobs' ranks to max."],
        ["Job Hopper", "Changed Kasuga to three different jobs other than his starting job."],
        ["Life Experiences", "Changed Kasuga to eight different jobs other than his starting job."],
        ["Like a Dragon", "Reached level 50 with Kasuga."],
        ["Make That Money", "Exceed 10 billion yen in capital for Kasuga's company."],
        ["Man About Town", "Played over 10 minigames."],
        ["Master of Trades", "Raised 3 jobs' ranks to max."],
        ["New Digs!", "Moved Kasuga's company into a new office."],
        ["Playing With Fire", "Entered into intimate relationships with over two female characters."],
        ["Pop the Cork", "Beat all Dragon Kart cups and rival races."],
        ["Pound It", "Called for Poundmates 30 times."],
        ["Presidential Power", "Raised Kasuga's company into the top company in Yokohama."],
        ["Professional", "Raised 1 job's rank to max."],
        ["Rising Dragon", "Reached level 30 with Kasuga."],
        ["Rock Bottom", "Completed Chapter 2."],
        ["Romance of the 10 Pieces", "Made 10 pieces of gear at Romance Workshop."],
        ["Romancing the Forge", "Fully upgraded Romance Workshop's equipment."],
        ["Ryu Ga Gotoku", "Reached level 70 with Kasuga."],
        ["Sleep Sheep Slapper", "Watched all the movies at the theater without falling asleep."],
        ["Smoked", "Completed Chapter 5."],
        ["Soap on a Rope", "Completed Chapter 4."],
        ["Sound Character", "Raised one of Kasuga's personality stats to max."],
        ["Stories of the Streets", "Completed 40 substories."],
        ["Stories to Live", "Completed 20 substories."],
        ["Stories to Tell", "Completed 10 substories."],
        ["Super Human", "Raised all of Kasuga's personality stats to max."],
        ["Thank You", "Completed the final chapter."],
        ["The Dragon Stirs", "Completed Chapter 11."],
        ["The New Dragon", "Obtained all achievements."],
        ["The Statesman", "Completed Chapter 8."],
        ["The Torch is Passed", "Completed Chapter 14."],
        ["Three Spiders", "Completed Chapter 7."],
        ["Time to Talk", "Completed Chapter 9."],
        ["Treasure Displeasure", "A creep crawled out of a safe for the first time."],
        ["Victory of the Millennium", "Beat the True Final Millennium Tower."],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
