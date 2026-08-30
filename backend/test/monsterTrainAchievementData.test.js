import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/monster-train.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1102190 (fetched through this app's own services/steamApi.js).
// 4 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("monster-train");

test("getPlannerData('monster-train') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for monster-train");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every Monster Train achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every Monster Train achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 Monster Train achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["20/20 Vision", "Win a run with googly eyes enabled."],
        ["A Cramped Train", "Win a run with at least 40 cards at the end of the run."],
        ["A Semblance of Sentience", "Reach Level 5 on The Awoken."],
        ["A Vicarious Remnant", "Reach Level 5 on The Melting Remnant."],
        ["A Wisp Reanimated", "Reach Level 5 on The Umbra."],
        ["All Brain, No Brawn", "Have a spell deal at least 120 damage in one hit."],
        ["An Endless Flicker", "Reach Level 10 on The Melting Remnant."],
        ["Angel Hunter", "Defeat Fel."],
        ["Apprentice of the Pyre", "Score at least 40,000 points in a Daily Challenge."],
        ["Archpocalypse", "Defeat Archus before his combat phase."],
        ["Buy Something, Won't You?", "Spam-click the shopkeeper NPC in the shop screen repeatedly until the achievement pops - purely an easter egg with no in-run cost."],
        ["Creators of Hell", "View the credits."],
        ["Dante’s Inferno", "Recruit Dante the Deceptive. Triggered by a cavern event where you're offered 3 Candle cards that damage your own Pyre unless played each turn - survive long enough carrying them and Dante rewards you with his cloak and his unit card."],
        ["Dead-alus", "Defeat Daedalus before his combat phase."],
        ["Diabolical Automation", "Unlock The Umbra."],
        ["Early Survivor", "Defeat the first boss."],
        ["Fully Awakened", "Reach Level 10 on The Awoken."],
        ["Guardian of the Styx", "Reach Level 5 on The Stygian Guard."],
        ["Guided by Candles", "Unlock The Melting Remnant."],
        ["Hell Hath No Fury", "Win a run at Covenant 15."],
        ["Hell’s Finest", "Have a monster deal at least 60 damage in one hit."],
        ["Hellhorned Dominance", "Reach Level 10 on The Hellhorned."],
        ["How to Deckbuilder", "Win a run with 0 cards at the end of the run."],
        ["Igniter of Pyre, Savior of Hell", "Achieve max level on all clans."],
        ["Into the Deep Sea", "Unlock The Stygian Guard."],
        ["Is That a Challenge?", "Start a Daily Challenge."],
        ["It’s a Secret...", "Triggered by a cavern event depicting the remains of a battlefield, where you're given a Purge card. Don't use that Purge card for 2 full battles, and a follow-up event appears granting the \"Hope for Peace\" artifact - a rare flower reward."],
        ["Level Up!", "Level up any clan."],
        ["Li-Fel-less", "Defeat Fel before her combat phase."],
        ["Master of the Pyre", "Score at least 50,000 points in a Daily Challenge."],
        ["My Game, My Rules", "Create a Custom Challenge."],
        ["On Your Own", "Win a run without a Champion."],
        ["Only Determination", "Win a run without collecting any artifacts."],
        ["Penultimate", "Reach Level 10 on The Umbra."],
        ["S-imp-le!", "Play an Imp card."],
        ["Sans Seraph", "Defeat Seraph before his combat phase."],
        ["Seraph the Defeated", "Defeat Seraph."],
        ["Stygian Defender", "Reach Level 10 on The Stygian Guard."],
        ["Ta-ta Talos", "Defeat Talos before her combat phase."],
        ["The Awoken", "Win a run with all covenants enabled on The Awoken."],
        ["The Breaker of Horns", "Reach Level 5 on The Hellhorned."],
        ["The Devil is in the Details", "Win a run at Covenant 10."],
        ["The Hellhorned", "Win a run with all covenants enabled on The Hellhorned."],
        ["The Long Journey Begins", "Win a run at Covenant 5."],
        ["The Melting Remnant", "Win a run with all covenants enabled on The Melting Remnant."],
        ["The Ragtag Bunch", "Win a run with 10 or fewer cards at the end of the run."],
        ["The Stygian Guard", "Win a run with all covenants enabled on The Stygian Guard."],
        ["The Umbra", "Win a run with all covenants enabled on The Umbra."],
        ["Thief! Stop!", "First, get the 'Petty Thief' card from a cavern event. Later in the same run, find a different cavern event that asks you to sacrifice life for money - with Petty Thief in hand, a third dialogue option appears letting you discard it for gold instead of paying with life."],
        ["Trainee of the Pyre", "Score at least 30,000 points in a Daily Challenge."],
        ["Upgraded Champion", "Upgrade your Champion twice."],
        ["We Were Born of Monsters", "Win a run at Covenant 25."],
        ["You Died!", "Lose a run."],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 4 hidden Monster Train achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Dante’s Inferno", "It’s a Secret...", "Thief! Stop!", "Buy Something, Won't You?"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
