import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/skyrim.json - 75 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 72850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("skyrim");

test("getPlannerData('skyrim') returns real planner data with 75 curated achievements", () => {

    assert.ok(game, "expected real planner data for skyrim");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 75);

});

test("every The Elder Scrolls V: Skyrim achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every The Elder Scrolls V: Skyrim achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 75 The Elder Scrolls V: Skyrim achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New You", "Change your face"],
        ["Adept", "Reach Level 10"],
        ["Alduin's Wall", "Complete \"Alduin's Wall\""],
        ["Apprentice", "Reach Level 5"],
        ["Architect", "Build three wings on a house"],
        ["Artificer", "Make a smithed item, an enchanted item, and a potion"],
        ["At the Summit of Apocrypha", "Complete \"At the Summit of Apocrypha\""],
        ["Auriel's Bow", "Use the special power of Auriel's Bow"],
        ["Awakening", "Complete \"Awakening\""],
        ["Beyond Death", "Complete \"Beyond Death\""],
        ["Bleak Falls Barrow", "Complete \"Bleak Falls Barrow\""],
        ["Blessed", "Select a Standing Stone blessing"],
        ["Blood Oath", "Become a member of the Circle"],
        ["Bound Until Death", "Complete \"Bound Until Death\""],
        ["Citizen", "Buy a house"],
        ["Daedric Influence", "Acquire a Daedric Artifact"],
        ["Darkness Returns", "Complete \"Darkness Returns\""],
        ["Delver", "Clear 50 dungeons"],
        ["Diplomatic Immunity", "Complete \"Diplomatic Immunity\""],
        ["Dragon Aspect", "Learn all 3 words of Dragon Aspect"],
        ["Dragon Hunter", "Absorb 20 dragon souls"],
        ["Dragon Soul", "Absorb a dragon soul"],
        ["Dragonrider", "Tame and ride 5 dragons"],
        ["Dragonslayer", "Complete \"Dragonslayer\""],
        ["Elder Knowledge", "Complete \"Elder Knowledge\""],
        ["Expert", "Reach Level 25"],
        ["Explorer", "Discover 100 Locations"],
        ["Gatekeeper", "Join the College of Winterhold"],
        ["Glory of the Dead", "Complete \"Glory of the Dead\""],
        ["Golden Touch", "Have 100,000 gold"],
        ["Hail Sithis!", "Complete \"Hail Sithis!\""],
        ["Hard Worker", "Chop wood, mine ore, and cook food"],
        ["Hero of Skyrim", "Capture Solitude or Windhelm"],
        ["Hero of the People", "Complete 50 Misc Objectives"],
        ["Hidden Knowledge", "Learn the secrets of 5 Black Books"],
        ["Kindred Judgement", "Complete \"Kindred Judgment\""],
        ["Land Baron", "Buy three plots of land"],
        ["Landowner", "Buy a plot of land"],
        ["Legend", "Defeat a Legendary Dragon"],
        ["Lost to the Ages", "Complete \"Lost to the Ages\""],
        ["Married", "Get married"],
        ["Master", "Reach Level 50"],
        ["Master Architect", "Build three houses"],
        ["Master Criminal", "Bounty of 1000 gold in all nine holds"],
        ["Oblivion Walker", "Collect 15 Daedric Artifacts"],
        ["One with the Shadows", "Returned the Thieves Guild to its former glory"],
        ["Outlander", "Arrive on Solstheim"],
        ["Proud Parent", "Adopt a child"],
        ["Raven Rock Owner", "Own a house in Raven Rock"],
        ["Reader", "Read 50 Skill Books"],
        ["Revealing the Unseen", "Complete \"Revealing the Unseen\""],
        ["Sideways", "Complete 10 side quests"],
        ["Skill Master", "Get a skill to 100"],
        ["Snake Tongue", "Successfully persuade, bribe, and intimidate"],
        ["Solstheim Explorer", "Discover 30 locations on the island of Solstheim"],
        ["Soul Tear", "Learn all three words of Soul Tear"],
        ["Stalhrim Crafter", "Craft an item out of Stalhrim"],
        ["Standing Stones", "Find 13 Standing Stones"],
        ["Take Up Arms", "Join the Companions"],
        ["Taking Care of Business", "Join the Thieves Guild"],
        ["Taking Sides", "Join the Stormcloaks or the Imperial Army"],
        ["The Eye of Magnus", "Complete \"The Eye of Magnus\""],
        ["The Fallen", "Complete \"The Fallen\""],
        ["The Path of Knowledge", "Complete \"The Path of Knowledge\""],
        ["The Temple of Miraak", "Complete \"The Temple of Miraak\""],
        ["The Way of the Voice", "Complete \"The Way of the Voice\""],
        ["Thief", "Pick 50 locks and 50 pockets"],
        ["Thu'um Master", "Learn 20 shouts"],
        ["Unbound", "Complete \"Unbound\""],
        ["Vampire Mastered", "Acquire 11 vampire perks"],
        ["Wanted", "Escape from jail"],
        ["War Hero", "Capture Fort Sungard or Fort Greenwall"],
        ["Werewolf Mastered", "Acquire 11 werewolf perks"],
        ["With Friends Like These…", "Join the Dark Brotherhood"],
        ["Words of Power", "Learn all three words of a shout"],
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
