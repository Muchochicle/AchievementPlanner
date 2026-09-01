import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/prince-of-persia-the-lost-crown.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2751000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("prince-of-persia-the-lost-crown");

test("getPlannerData('prince-of-persia-the-lost-crown') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for prince-of-persia-the-lost-crown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every The Lost Crown achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every The Lost Crown achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 The Lost Crown achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Warrior's End", "Complete the Lost Warriors side quest."],
        ["Air Dancer", "Eliminate 30 enemies in the air"],
        ["All the Time in the World", "Earn 10,000 Time Crystals"],
        ["An Honorable End", "Defeat a Lost Warrior"],
        ["Betrayal", "Eliminate an enemy with the Dimensional Claw "],
        ["Blessing of Shamshir", "Fully upgrade sword and bow"],
        ["Broken Mask", "Defeat Radjen, the Mask of Darkness DLC's final boss."],
        ["Charitable Soul", "Complete every side quest"],
        ["Cut the Power", "Defeat all sentinels "],
        ["Cyra's Last Hope", "Find the Herbalist's camp."],
        ["Deadly Trap", "Eliminate 5 enemies by throwing them into spikes"],
        ["Easy Come, Easy Go", "Defeat the undead master"],
        ["Elixir of Gods", "Acquire all Soma Tree petals"],
        ["Fists & Arrows", "Defeat Menolias, the artful legend."],
        ["Glory of Faravahar", "Fully upgrade the necklace"],
        ["Health Is Wealth", "Acquire all Soma Tree flowers in Mask of Darkness"],
        ["King of Kings", "Defeat King Darius."],
        ["Natural Resources", "Collect 5 ores"],
        ["Parallel Universe", "Defeat the alternate version of Sargon in an optional encounter."],
        ["Remember Me", "Complete the east side of Radjen's Mind Palace."],
        ["Remember Us", "Complete the third area of Radjen's Mind Palace after accessing the northern path."],
        ["Remember You", "Complete the west side of Radjen's Mind Palace."],
        ["Shock Trooper", "Eliminate 20 enemies with an opportunity attack"],
        ["Snake in the Sand", "Defeat Azhdah, the banished God."],
        ["Spectre of the Seas", "Find the ghost ship."],
        ["The Dead Die Twice", "Defeat the undead general in the Mask of Darkness DLC."],
        ["The End of Time", "Defeat the God Prince at the End of Time."],
        ["The Forest Trespasser", "Defeat Kian, the otherworldly Queen."],
        ["The Maneater", "Defeat Jahandar, the King of Beasts."],
        ["The Storm Master", "Defeat Orod, the Storm Master."],
        ["The True Moon", "Complete the Moon Gatherer's quest."],
        ["The White Lion", "Defeat Vahram, the White Lion."],
        ["Thoughtful Accessories", "Collect all amulets in Mask of Darkness"],
        ["Time Served", "Eliminate the Jailer in the Sacred Archives."],
        ["Tools of a Prophet", "Collect all amulets"],
        ["Total Recall", "Find all memory fragments"],
        ["Tree of Life", "Speak with every Wak-Wak head"],
        ["Two Birds with One Saw", "Defeat an enemy with a Saw Bird"],
        ["Warrior Within", "Use every Athra Surge"],
        ["Written in the Sand", "Complete the prophecy fresco"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
