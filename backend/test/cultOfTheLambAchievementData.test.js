import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cult-of-the-lamb.json - 57 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 1313140 (fetched through this app's own services/steamApi.js) -
// 49 of 57 ship a real, official Steam description. Do No Evil, True
// Love Found, Leader of Leaders, Regenerate, Eat the Rich, Swing of the
// Axe, Rot No More, and Respect Thy Mother are hidden achievements
// Steam never describes publicly (confirmed via the same API call) -
// their descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const cultOfTheLamb = getPlannerData("cult-of-the-lamb");

test("getPlannerData('cult-of-the-lamb') returns real planner data with 57 curated achievements", () => {

    assert.ok(cultOfTheLamb, "expected real planner data for cult-of-the-lamb");
    assert.ok(Array.isArray(cultOfTheLamb.achievements));
    assert.strictEqual(cultOfTheLamb.achievements.length, 57);

});

test("every Cult of the Lamb achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = cultOfTheLamb.achievements.map(a => a.id);
    const apinames = cultOfTheLamb.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Cult of the Lamb achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of cultOfTheLamb.achievements) {

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

test("every one of the 49 officially-described Cult of the Lamb achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 8 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["First Follower", "The first devotee to the Cult of the Lamb."],
        ["Deal with the Devil", "A deal that cannot be undone."],
        ["Preacher of Truth", "Let the Word be known."],
        ["The First Death", "Salvation awaits the fallen soul."],
        ["Death to Non-Believers", "Defeat the first mini-boss."],
        ["The Flock Grows", "Gain 5 Followers."],
        ["Flock of Many", "Gain 10 Followers."],
        ["Flock of All", "Gain 20 Followers."],
        ["See No Evil", "Defeat Leshy."],
        ["Speak No Evil", "Defeat Heket."],
        ["Hear No Evil", "Defeat Kallamar."],
        ["Think No Evil", "Defeat Shamura."],
        ["Order", "Beat Leshy without taking damage."],
        ["Sate", "Beat Heket without taking damage."],
        ["Cure", "Beat Kallamar without taking damage."],
        ["Peace", "Beat Shamura without taking damage."],
        ["Keeper of Secrets", "Take confession."],
        ["Leader of the Crusade", "Find all 5 locations."],
        ["Bringer of Light", "Reignite the lighthouse."],
        ["Full Flock", "Unlock all Follower Skins."],
        ["Full Deck", "Unlock all tarot cards."],
        ["Teach a Lamb to Fish", "Catch 1 of every fish."],
        ["Crosser of Thresholds", "A new world awaits."],
        ["Sacrificial Beast", "Sacrifice a Follower."],
        ["Weigher of Souls", "Sacrifice 10 Followers."],
        ["Hoarder of Wealth", "Have 666 gold coins."],
        ["Weapons of Plenty", "Unlock all weapons."],
        ["Curses of Plenty", "Unlock all curses."],
        ["Devotion", "Fully Upgrade Cult."],
        ["Transform", "Unlock a new fleece."],
        ["Transmute", "Unlock all fleeces."],
        ["Cannibal", "Cook a Follower meat meal."],
        ["Gospel", "Unlock all doctrines."],
        ["Game of Chance", "Win a game of Knucklebones."],
        ["Master of Chance", "Defeat all opponents in Knucklebones."],
        ["Godhood", "No longer a servant, no less than a God."],
        ["Relics of the Old Faith", "Collect all Relics."],
        ["Shake Down", "Get your Gold back from Midas."],
        ["Slayer of Souls", "Complete a row in Purgatory."],
        ["Holder of History", "Unlock all lore."],
        ["Setter of Trends", "Unlock all outfits."],
        ["Apostles", "Have 12 Disciples."],
        ["Aesthetics of the Lamb", "Completely Upgrade the Temple."],
        ["Propagate the Flock", "Hatch 5 eggs."],
        ["Maker of Legends", "Restore all Legendary Weapons"],
        ["The Prodigal Child", "Inherit Ratau's legacy"],
        ["The Complete Collection", "Collect all Flockade pieces"],
        ["Woolhaven Reborn", "Complete everything in Woolhaven"],
        ["Killer Instinct", "Defeat Marchosias"]
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Do No Evil", "True Love Found", "Leader of Leaders", "Regenerate", "Eat the Rich",
        "Swing of the Axe", "Rot No More", "Respect Thy Mother"
    ]);

    const dataPairs = cultOfTheLamb.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 8 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["KILL_BOSS_5", "Do No Evil"],
        ["RETURN_BAAL_AYM", "True Love Found"],
        ["ALL_LEADER_FOLLOWERS", "Leader of Leaders"],
        ["SOZO_QUEST", "Regenerate"],
        ["INDOCTRINATE_MIDAS", "Eat the Rich"],
        ["BEAT_EXECUTIONER", "Swing of the Axe"],
        ["BEAT_YNGYA", "Rot No More"],
        ["BEAT_YNGYA_NOATTACK", "Respect Thy Mother"]
    ];

    assert.strictEqual(names.length, 8, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = cultOfTheLamb.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
