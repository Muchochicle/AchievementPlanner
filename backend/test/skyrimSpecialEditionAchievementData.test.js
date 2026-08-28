import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/skyrim-special-edition.json - 75 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 489830 (fetched through this app's own
// services/steamApi.js) - all 75 ship a real, official Steam
// description. Skyrim Special Edition has no Steam-hidden achievements;
// the Dawnguard and Dragonborn add-ons are bundled in and their
// achievements are included. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog.
const skyrimSpecialEdition = getPlannerData("skyrim-special-edition");

test("getPlannerData('skyrim-special-edition') returns real planner data with 75 curated achievements", () => {

    assert.ok(skyrimSpecialEdition, "expected real planner data for skyrim-special-edition");
    assert.ok(Array.isArray(skyrimSpecialEdition.achievements));
    assert.strictEqual(skyrimSpecialEdition.achievements.length, 75);

});

test("every The Elder Scrolls V: Skyrim Special Edition achievement has a unique id from 1 to 75 and a unique apiname", () => {

    const ids = skyrimSpecialEdition.achievements.map(a => a.id);
    const apinames = skyrimSpecialEdition.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 75 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 75);
    assert.strictEqual(new Set(apinames).size, 75);

});

test("every The Elder Scrolls V: Skyrim Special Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of skyrimSpecialEdition.achievements) {

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

test("every one of the 75 official The Elder Scrolls V: Skyrim Special Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Unbound", "Complete \"Unbound\""],
        ["Bleak Falls Barrow", "Complete \"Bleak Falls Barrow\""],
        ["The Way of the Voice", "Complete \"The Way of the Voice\""],
        ["Diplomatic Immunity", "Complete \"Diplomatic Immunity\""],
        ["Alduin's Wall", "Complete \"Alduin's Wall\""],
        ["Elder Knowledge", "Complete \"Elder Knowledge\""],
        ["The Fallen", "Complete \"The Fallen\""],
        ["Dragonslayer", "Complete \"Dragonslayer\""],
        ["Take Up Arms", "Join the Companions"],
        ["Blood Oath", "Become a member of the Circle"],
        ["Glory of the Dead", "Complete \"Glory of the Dead\""],
        ["Gatekeeper", "Join the College of Winterhold"],
        ["Revealing the Unseen", "Complete \"Revealing the Unseen\""],
        ["The Eye of Magnus", "Complete \"The Eye of Magnus\""],
        ["Taking Care of Business", "Join the Thieves Guild"],
        ["Darkness Returns", "Complete \"Darkness Returns\""],
        ["One with the Shadows", "Returned the Thieves Guild to its former glory"],
        ["With Friends Like These…", "Join the Dark Brotherhood"],
        ["Bound Until Death", "Complete \"Bound Until Death\""],
        ["Hail Sithis!", "Complete \"Hail Sithis!\""],
        ["Taking Sides", "Join the Stormcloaks or the Imperial Army"],
        ["War Hero", "Capture Fort Sungard or Fort Greenwall"],
        ["Hero of Skyrim", "Capture Solitude or Windhelm"],
        ["Sideways", "Complete 10 side quests"],
        ["Hero of the People", "Complete 50 Misc Objectives"],
        ["Hard Worker", "Chop wood, mine ore, and cook food"],
        ["Thief", "Pick 50 locks and 50 pockets"],
        ["Snake Tongue", "Successfully persuade, bribe, and intimidate"],
        ["Blessed", "Select a Standing Stone blessing"],
        ["Standing Stones", "Find 13 Standing Stones"],
        ["Citizen", "Buy a house"],
        ["Wanted", "Escape from jail"],
        ["Married", "Get married"],
        ["Artificer", "Make a smithed item, an enchanted item, and a potion"],
        ["Master Criminal", "Bounty of 1000 gold in all nine holds"],
        ["Golden Touch", "Have 100,000 gold"],
        ["Delver", "Clear 50 dungeons"],
        ["Skill Master", "Get a skill to 100"],
        ["Explorer", "Discover 100 Locations"],
        ["Reader", "Read 50 Skill Books"],
        ["Daedric Influence", "Acquire a Daedric Artifact"],
        ["Oblivion Walker", "Collect 15 Daedric Artifacts"],
        ["Dragon Soul", "Absorb a dragon soul"],
        ["Dragon Hunter", "Absorb 20 dragon souls"],
        ["Words of Power", "Learn all three words of a shout"],
        ["Thu'um Master", "Learn 20 shouts"],
        ["Apprentice", "Reach Level 5"],
        ["Adept", "Reach Level 10"],
        ["Expert", "Reach Level 25"],
        ["Master", "Reach Level 50"],
        ["Awakening", "Complete \"Awakening\""],
        ["Beyond Death", "Complete \"Beyond Death\""],
        ["Kindred Judgement", "Complete \"Kindred Judgment\""],
        ["Lost to the Ages", "Complete \"Lost to the Ages\""],
        ["Soul Tear", "Learn all three words of Soul Tear"],
        ["Auriel's Bow", "Use the special power of Auriel's Bow"],
        ["Werewolf Mastered", "Acquire 11 werewolf perks"],
        ["Vampire Mastered", "Acquire 11 vampire perks"],
        ["A New You", "Change your face"],
        ["Legend", "Defeat a Legendary Dragon"],
        ["Proud Parent", "Adopt a child"],
        ["Landowner", "Buy a plot of land"],
        ["Architect", "Build three wings on a house"],
        ["Land Baron", "Buy three plots of land"],
        ["Master Architect", "Build three houses"],
        ["Outlander", "Arrive on Solstheim"],
        ["The Temple of Miraak", "Complete \"The Temple of Miraak\""],
        ["The Path of Knowledge", "Complete \"The Path of Knowledge\""],
        ["At the Summit of Apocrypha", "Complete \"At the Summit of Apocrypha\""],
        ["Dragon Aspect", "Learn all 3 words of Dragon Aspect"],
        ["Hidden Knowledge", "Learn the secrets of 5 Black Books"],
        ["Stalhrim Crafter", "Craft an item out of Stalhrim"],
        ["Dragonrider", "Tame and ride 5 dragons"],
        ["Raven Rock Owner", "Own a house in Raven Rock"],
        ["Solstheim Explorer", "Discover 30 locations on the island of Solstheim"]
    ];

    assert.strictEqual(officialAchievements.length, 75, "sanity check on this test's own reference list");

    const dataPairs = skyrimSpecialEdition.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
