import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hogwarts-legacy.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 990080 (fetched through this app's own services/steamApi.js).
// 24 of 45 ship a real, official Steam description; the
// 21 hidden achievements ship no Steam description and
// their conditions are curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const hogwartsLegacy = getPlannerData("hogwarts-legacy");

test("getPlannerData('hogwarts-legacy') returns real planner data with 45 curated achievements", () => {

    assert.ok(hogwartsLegacy, "expected real planner data for hogwarts-legacy");
    assert.ok(Array.isArray(hogwartsLegacy.achievements));
    assert.strictEqual(hogwartsLegacy.achievements.length, 45);

});

test("every Hogwarts Legacy achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = hogwartsLegacy.achievements.map(a => a.id);
    const apinames = hogwartsLegacy.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Hogwarts Legacy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of hogwartsLegacy.achievements) {

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

test("every one of the 24 officially-described Hogwarts Legacy achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 21 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["The Good Samaritan", "Complete all side quests"],
        ["Challenge Accepted", "Complete all tiers of a challenge"],
        ["Collector's Edition", "Complete all collections"],
        ["Loom for Improvement", "Upgrade a piece of gear"],
        ["The Root of the Problem", "Stun 10 different enemies using a Mandrake"],
        ["The Nature of the Beast", "Breed every type of beast"],
        ["Going Through the Potions", "Brew every type of potion"],
        ["Put Down Roots", "Grow every type of plant"],
        ["Third Time's a Charm", "Upgrade a piece of gear 3 times"],
        ["A Talent for Spending", "Spend 5 Talent Points"],
        ["Savvy Spender", "Spend all Talent Points"],
        ["Room with a View", "Reach the highest point in the castle, the Headmaster's upper study"],
        ["Spilled Milk", "Use Flipendo ten times – to tip one cow or several"],
        ["Floo Around the World", "Unlock all Floo Flames"],
        ["Followed the Butterflies", "Follow butterflies to a treasure"],
        ["Rise to the Challenges", "Defeat enemies in all battle arenas"],
        ["Merlin's Beard!", "Complete all Merlin Trials"],
        ["The Intrepid Explorer", "Discover all cairn dungeons"],
        ["Demiguise Dread", "Find all Demiguise statues"],
        ["The Ends Petrify the Means", "Defeat a total of fifty enemies using Petrificus Totalus"],
        ["Raising Expectations", "Reach a combo of 100"],
        ["Finishing Touches", "Use Ancient Magic on every enemy in the game"],
        ["The Spell Master", "Learn all spells"],
        ["A Forte for Achievement", "Reach Level 40"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "PFA_1",
        "PFA_2",
        "PFA_3",
        "PFA_4",
        "PFA_5",
        "PFA_6",
        "PFA_7",
        "PFA_8",
        "PFA_9",
        "PFA_10",
        "PFA_11",
        "PFA_12",
        "PFA_13",
        "PFA_14",
        "PFA_15",
        "PFA_16",
        "PFA_17",
        "PFA_18",
        "PFA_19",
        "PFA_23",
        "PFA_39",
    ]);

    assert.strictEqual(hiddenApinames.size, 21, "sanity check - Hogwarts Legacy has 21 hidden achievements");

    const dataPairs = hogwartsLegacy.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 21 hidden Hogwarts Legacy achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["PFA_1", "The Sort Who Makes an Entrance"],
        ["PFA_2", "The Toast of the Town"],
        ["PFA_3", "The Auror's Apprentice"],
        ["PFA_4", "The Gryffindor in the Graveyard"],
        ["PFA_5", "The Wise Owl"],
        ["PFA_6", "First Class Student"],
        ["PFA_7", "Troll with the Punches"],
        ["PFA_8", "That's a Keeper"],
        ["PFA_9", "Rising From the Ashes"],
        ["PFA_10", "Grappling with a Graphorn"],
        ["PFA_11", "The One Who Mastered Memories"],
        ["PFA_12", "The Hallowed Hero"],
        ["PFA_13", "The Hero of Hogwarts"],
        ["PFA_14", "The Seeker of Knowledge"],
        ["PFA_15", "The Avenging Gazelle"],
        ["PFA_16", "The Defender of Dragons"],
        ["PFA_17", "Beast Friends"],
        ["PFA_18", "A Sallow Grave"],
        ["PFA_19", "Flight the Good Flight"],
        ["PFA_23", "A Keen Sense of Spell"],
        ["PFA_39", "Coasting Along"],
    ];

    assert.strictEqual(names.length, 21, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = hogwartsLegacy.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
