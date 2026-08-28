import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/neon-white.json - 63 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1533420 (fetched through this app's own services/steamApi.js) - 46 of
// 63 ship a real, official Steam description. The 12 mission-complete
// achievements' story-progress siblings (Absolution, Cheese!), the six
// character relationship achievements, all five Green boss-fight
// achievements, both ending achievements, one combat achievement
// (Bloody Knuckles), Mikey's two Level Rush achievements, the two
// Heavenly Delight Ticket achievements, and Idiot are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions, cross-checked against a
// Steam Community 100% Achievement Guide and GamePretty's achievement
// guide. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const neonWhite = getPlannerData("neon-white");

test("getPlannerData('neon-white') returns real planner data with 63 curated achievements", () => {

    assert.ok(neonWhite, "expected real planner data for neon-white");
    assert.ok(Array.isArray(neonWhite.achievements));
    assert.strictEqual(neonWhite.achievements.length, 63);

});

test("every Neon White achievement has a unique id from 1 to 63 and a unique apiname", () => {

    const ids = neonWhite.achievements.map(a => a.id);
    const apinames = neonWhite.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 63 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 63);
    assert.strictEqual(new Set(apinames).size, 63);

});

test("every Neon White achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of neonWhite.achievements) {

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

test("every one of the 46 officially-described Neon White achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 17 hidden achievements are excluded here - Steam never
    // exposes a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Mission 1 Complete", "Complete Mission 1"],
        ["Mission 2 Complete", "Complete Mission 2"],
        ["Mission 3 Complete", "Complete Mission 3"],
        ["Mission 4 Complete", "Complete Mission 4"],
        ["Mission 5 Complete", "Complete Mission 5"],
        ["Mission 6 Complete", "Complete Mission 6"],
        ["Mission 7 Complete", "Complete Mission 7"],
        ["Mission 8 Complete", "Complete Mission 8"],
        ["Mission 9 Complete", "Complete Mission 9"],
        ["Mission 10 Complete", "Complete Mission 10"],
        ["Mission 11 Complete", "Complete Mission 11"],
        ["Mission 12 Complete", "Complete Mission 12"],
        ["Cannonball", "Stomp off of the edge of a level"],
        ["Vending Machine", "Collect ten cards from vending machines"],
        ["Whole again", "Unlock all of White's memories"],
        ["100%", "Complete 100% of the game"],
        ["Sweet Dreams", "Unlock one of Red's memories"],
        ["Red", "Complete your relationship with Red"],
        ["Solitary Grace", "Complete Red's Sidequests"],
        ["Trinity", "Unlock one of Yellow's memories"],
        ["Yellow", "Complete your relationship with Yellow"],
        ["Don't Think", "Complete Yellow's Sidequests"],
        ["Vault", "Unlock one of Violet's memories"],
        ["Violet", "Complete your relationship with Violet"],
        ["Rigged Game", "Complete Violet's Sidequests"],
        ["Mikey", "Complete your relationship with Mikey"],
        ["Raz", "Complete your relationship with Raz"],
        ["Souvenir", "Find a Strange Coin"],
        ["Ace", "Earn your first Ace medal"],
        ["Mikey's Pet", "Earn 50% of the total Ace medals"],
        ["Straight A's", "Earn an Ace medal on every level"],
        ["Trippy", "Get killed by a Tripwire"],
        ["Not very effective...", "Use the Fists card"],
        ["How thoughtful", "Give your first gift"],
        ["Gift Collector", "Collect 50% of the total gifts"],
        ["Gift Hunter", "Collect all gifts"],
        ["Mimic", "Die from a Mimic's bullet"],
        ["Parry", "Kill an enemy by parrying a bullet at them using the Katana card"],
        ["White's Heaven Rush Complete", "Complete White's Heaven Rush"],
        ["White's Hell Rush Complete", "Complete White's Hell Rush"],
        ["Red's Heaven Rush Complete", "Complete Red's Heaven Rush"],
        ["Red's Hell Rush Complete", "Complete Red's Hell Rush"],
        ["Violet's Heaven Rush Complete", "Complete Violet's Heaven Rush"],
        ["Violet's Hell Rush Complete", "Complete Violet's Hell Rush"],
        ["Yellow's Heaven Rush Complete", "Complete Yellow's Heaven Rush"],
        ["Yellow's Hell Rush Complete", "Complete Yellow's Hell Rush"]
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Absolution", "Cheese!", "Green", "Heavenly Delight", "Lousy Keychain", "Bloody Knuckles",
        "Clocktower", "Clockwork", "Third Temple", "Divine Intervention", "Hand of God",
        "Book of Life", "Book of Death", "Surprise!", "Mikey's Heaven Rush Complete",
        "Mikey's Hell Rush Complete", "Idiot"
    ]);

    assert.strictEqual(hiddenNames.size, 17, "sanity check - Neon White has 17 hidden achievements");

    const dataPairs = neonWhite.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 17 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["BEATGAME", "Absolution"],
        ["GOODENDING", "Cheese!"],
        ["GREEN_RELATIONSHIP", "Green"],
        ["HEAVENLYDELIGHT_FIRST", "Heavenly Delight"],
        ["HEAVENLYDELIGHT_ALL", "Lousy Keychain"],
        ["FIST_DEATH", "Bloody Knuckles"],
        ["BOSS_CLOCKTOWER", "Clocktower"],
        ["BOSS_CLOCKTOWER_EARLY", "Clockwork"],
        ["BOSS_TEMPLE", "Third Temple"],
        ["BOSS_TEMPLE_EARLY", "Divine Intervention"],
        ["BOSS_HANDOFGOD", "Hand of God"],
        ["BOOKOFLIFE", "Book of Life"],
        ["BOOKOFDEATH", "Book of Death"],
        ["MIMIC_BOOKOFLIFE", "Surprise!"],
        ["LEVELRUSH_MIKEY_HEAVEN", "Mikey's Heaven Rush Complete"],
        ["LEVELRUSH_MIKEY_HELL", "Mikey's Hell Rush Complete"],
        ["IDIOTISLAND", "Idiot"]
    ];

    assert.strictEqual(names.length, 17, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = neonWhite.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
