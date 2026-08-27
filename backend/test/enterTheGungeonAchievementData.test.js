import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/enter-the-gungeon.json - 54 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 311690 (fetched through this app's own services/steamApi.js) -
// 34 of 54 ship a real, official Steam description. The 20 remaining
// hidden achievements (the four characters' Pasts, the Sixth Chamber,
// several secret areas, both unlockable characters, and various
// curse/end-game feats) are hidden achievements Steam never describes
// publicly (confirmed via the same API call) - their descriptions here
// are curatorial summaries of their real, community-documented unlock
// conditions. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const enterTheGungeon = getPlannerData("enter-the-gungeon");

test("getPlannerData('enter-the-gungeon') returns real planner data with 54 curated achievements", () => {

    assert.ok(enterTheGungeon, "expected real planner data for enter-the-gungeon");
    assert.ok(Array.isArray(enterTheGungeon.achievements));
    assert.strictEqual(enterTheGungeon.achievements.length, 54);

});

test("every Enter the Gungeon achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = enterTheGungeon.achievements.map(a => a.id);
    const apinames = enterTheGungeon.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Enter the Gungeon achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of enterTheGungeon.achievements) {

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

test("every one of the 34 officially-described Enter the Gungeon achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 20 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Lead God", "Collect five Master Rounds in one run"],
        ["Patron", "Spend big at the Acquisitions Department"],
        ["Gunsmith", "Construct the Bullet that can kill the Past"],
        ["Historian", "Complete all 4 main character Pasts"],
        ["Slayer", "Defeat the Boss of the Fifth Chamber"],
        ["Castle Crasher", "Clear the First Chamber 50 Times"],
        ["Dungeon Diver", "Clear the Second Chamber 40 Times"],
        ["Mine Master", "Clear the Third Chamber 30 Times"],
        ["Hollowed Out", "Clear the Fourth Chamber 20 Times"],
        ["Forger", "Clear the Fifth Chamber 10 Times"],
        ["Biggest Wallet", "Carry a large amount of money at once"],
        ["Cartographer's Assistant", "Map the first Five Chambers for the lost adventurer"],
        ["Re-Armed", "Deliver the Golem's replacement arm"],
        ["Weird Tale", "Complete Frifle's Challenges"],
        ["Trickshot", "Ace Winchester's game 3 times"],
        ["Hedge Slinger", "Win a wager against the Gunsling King 5 times"],
        ["Going Down", "Open the shortcut to the Second Chamber"],
        ["Going Downer", "Open the shortcut to the Third Chamber"],
        ["Going Downest", "Open the shortcut to the Fourth Chamber"],
        ["Last Stop", "Open the shortcut to the Fifth Chamber"],
        ["Sworn Gun", "Avenge Manuel"],
        ["Gungeon Acolyte", "Complete the Tutorial"],
        ["Great Hall", "Populate the Breach"],
        ["Demolition Man", "Kill a frozen enemy by rolling into it"],
        ["Woodsie Lord", "Steal 10 things"],
        ["Day Ruiner", "Kill a boss after covering it with glitter"],
        ["Money Pit", "Kill 100 enemies by dropping chandeliers"],
        ["Rider", "Kill 100 enemies while riding in a mine cart"],
        ["Pit Lord", "Kill 100 enemies by knocking them into pits"],
        ["Rage Mode", "Always be flipping. Guns are for flippers"],
        ["Beast Master", "Complete the game with Beast Mode on"],
        ["Advanced Slayer", "Defeat an Advanced Boss"],
        ["Resourceful", "Take Revenge"],
        ["Sledge-Dog", "Complete Tonic's Challenge"]
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Gun Game", "Gungeon Master", "Wingman", "Double Jeopardy", "Squad Captain", "Deadliest Game",
        "Grate Hall", "Reverence for the Dead", "Case Closed", "Beep", "Not Just A Box",
        "I Knew Someone Would Do It", "Lion Leap", "Time Paradox", "Exorcist", "The Password",
        "Jammed", "Terminated", "Hero of Gun", "Challenger"
    ]);

    const dataPairs = enterTheGungeon.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 20 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hiddenApinames = [
        ["COMPLETE_GAME_WITH_ENCHANTED_GUN", "Gun Game"],
        ["BEAT_FLOOR_SIX", "Gungeon Master"],
        ["BEAT_PAST_ROGUE", "Wingman"],
        ["BEAT_PAST_CONVICT", "Double Jeopardy"],
        ["BEAT_PAST_MARINE", "Squad Captain"],
        ["BEAT_PAST_GUIDE", "Deadliest Game"],
        ["REACH_SEWERS", "Grate Hall"],
        ["REACH_CATHEDRAL", "Reverence for the Dead"],
        ["UNLOCK_BULLET", "Case Closed"],
        ["UNLOCK_ROBOT", "Beep"],
        ["PREFIRE_ON_MIMIC", "Not Just A Box"],
        ["PUSH_TABLE_INTO_PIT", "I Knew Someone Would Do It"],
        ["FALL_IN_END_TIMES", "Lion Leap"],
        ["DIE_IN_PAST", "Time Paradox"],
        ["BEAT_A_JAMMED_BOSS", "Exorcist"],
        ["REACH_BLACK_MARKET", "The Password"],
        ["HAVE_MAX_CURSE", "Jammed"],
        ["BEAT_PAST_ROBOT", "Terminated"],
        ["BEAT_PAST_BULLET", "Hero of Gun"],
        ["COMPLETE_GAME_WITH_CHALLENGE_MODE", "Challenger"]
    ];

    assert.strictEqual(hiddenApinames.length, 20, "sanity check on this test's own reference list");

    for (const [apiname, name] of hiddenApinames) {

        const achievement = enterTheGungeon.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
