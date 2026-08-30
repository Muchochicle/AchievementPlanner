import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bayonetta.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 460790 (fetched through this app's own services/steamApi.js). 4 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bayonetta");

test("getPlannerData('bayonetta') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for bayonetta");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Bayonetta achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Bayonetta achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Bayonetta achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Mother's Love", "Defend Cereza during the out of body experience, ensuring she takes no damage."],
        ["A Primer In The Magical Arts", "Complete the Vestibule."],
        ["Angel May Cry", "Complete half of all Alfheim portals."],
        ["Angel Slayer", "Complete all Alfheim portals."],
        ["Chapters 1-4 (Normal)", "Complete Chapters 1 through 4 on Normal difficulty."],
        ["Chapters 12-13 (Normal)", "Clear Chapters 12 and 13 on Normal difficulty."],
        ["Chapters 14-Epilogue (Normal)", "Clear Chapter 14 through the Epilogue on Normal difficulty, finishing the story."],
        ["Chapters 5-7 (Normal)", "Complete Chapters 5 through 7 on Normal difficulty."],
        ["Chapters 8-11 (Normal)", "Complete Chapters 8 through 11 on Normal difficulty."],
        ["Come Here, Little Boy", "Taunt and defeat five plus angered enemies while taking no damage. Gaze of Despair may be equipped."],
        ["Commander Of Magic", "Purchase all techniques."],
        ["Double, Double, Toil And Trouble", "Create 20 Concoctions."],
        ["Feels Good, Doesn't It?", "Execute 50 Torture Attacks."],
        ["Fire The Afterburners", "Earn Platinum Medals during Verse 1 and Verse 2 of Chapter 14."],
        ["Fortitudo, Bringer Of Flame", "Defeat Fortitudo on any difficulty."],
        ["Higher And Higher", "While never setting foot on the ground, grab enemies 10 times using Kulshedra."],
        ["I'm A Bit... I Mean Witch.", "Execute a Torture Attack."],
        ["Iustitia, Giver Of Life", "Defeat Iustitia on any difficulty."],
        ["Just In The Nick Of Time", "Dodge the runaway streetcar during Chapter 2."],
        ["Legendary Dark Witch", "Complete all Chapters on ∞ Climax difficulty."],
        ["Master Of The Heavens", "Defeat Father Balder on any difficulty."],
        ["Naughty Tentacles", "Destroy all the tentacles that drop down together during in single sequence in Chapter 9."],
        ["New Testament: Ch. 1-4 (Hard)", "Complete Chapters 1 through 4 on Hard difficulty."],
        ["New Testament: Ch. 12-13 (Hard)", "Clear Chapters 12 and 13 on Hard difficulty."],
        ["New Testament: Ch. 5-7 (Hard)", "Complete Chapters 5 through 7 on Hard difficulty."],
        ["New Testament: Ch. 8-11 (Hard)", "Complete Chapters 8 through 11 on Hard difficulty."],
        ["New Testament: Close The Book", "Clear Chapter 14 through the Epilogue on Hard difficulty, finishing the story on Hard."],
        ["Nice And Relaxed", "Avert 10 enemy attacks with the Moon of Mahaa-Kalaa equipped."],
        ["Nice Try", "Engage Witch Time successfully 10 times consecutively."],
        ["Platinum!", "Earn 10 Platinum Medals. Must be earned in 10 different battles."],
        ["Record Collector", "Obtain three complete Angelic Hymn Gold LPs."],
        ["Record Fanatic", "Obtain seven complete Angelic Hymn Gold LPs."],
        ["Sapientia, Controller Of Seas", "Defeat Sapientia on any difficulty."],
        ["Seeker Of Magic", "Purchase three new techniques."],
        ["Taste Of The Witching Hour", "Complete all Chapters on any difficulty."],
        ["Temperantia, Manipulator Of Wind", "Defeat Temperantia on any difficulty."],
        ["The Deepest Cut", "Kill 20 enemies using only Iai-Jutsu with Shuraba. (Iai-Jutsu performed by holding the Y button.)"],
        ["The Ice Witch", "Freeze 20 enemies while wearing Odette."],
        ["The Path To The Heavens", "Discover all Alfheim portals."],
        ["Touch And It Will Hurt", "Counter 10 enemy attacks with the Moon of Mahaa-Kalaa equipped."],
        ["Touch And It Will REALLY Hurt", "Counter three enemy attacks consecutively with the Moon of Mahaa-Kalaa equipped."],
        ["Tread Not So Softly", "Kill an enemy by jumping on top of them."],
        ["Treasure Collector", "Discover half of all the Umbra Witches' final resting places."],
        ["Treasure Fanatic", "Discover all of the Umbra Witches' final resting places."],
        ["Truth In Its Purest Form", "Collect all of Antonio's Notes."],
        ["Umbra Elder", "Complete all Chapters on Hard difficulty."],
        ["Umbra Witch", "Complete all Chapters on Normal difficulty."],
        ["Wicked Weave Master", "Execute 20 Wicked Weave attacks while using Dodge Offset."],
        ["Wicked Weaver", "Execute a Wicked Weave attack while using Dodge Offset."],
        ["You Want To Touch Me?", "Engage Witch Time successfully 10 times."],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
