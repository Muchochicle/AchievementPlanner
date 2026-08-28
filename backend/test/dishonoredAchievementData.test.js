import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dishonored.json - 80 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 205100 (fetched through this app's own services/steamApi.js).
// 63 of 80 ship a real, official Steam description, quoted
// verbatim below. The 17 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dishonored");

test("getPlannerData('dishonored') returns real planner data with 80 curated achievements", () => {

    assert.ok(game, "expected real planner data for dishonored");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 80);

});

test("every Dishonored achievement has a unique id from 1 to 80 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 80 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 80);
    assert.strictEqual(new Set(apinames).size, 80);

});

test("every Dishonored achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 63 officially-described Dishonored achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ACHIEVEMENT_31",
        "ACHIEVEMENT_32",
        "ACHIEVEMENT_33",
        "ACHIEVEMENT_34",
        "ACHIEVEMENT_35",
        "ACHIEVEMENT_36",
        "ACHIEVEMENT_37",
        "ACHIEVEMENT_38",
        "ACHIEVEMENT_39",
        "ACHIEVEMENT_40",
        "ACHIEVEMENT_41",
        "ACHIEVEMENT_42",
        "ACHIEVEMENT_43",
        "ACHIEVEMENT_44",
        "ACHIEVEMENT_45",
        "ACHIEVEMENT_46",
        "ACHIEVEMENT_47",
    ]);

    assert.strictEqual(hiddenApinames.size, 17, "sanity check - Dishonored has 17 hidden achievements");

    const officialAchievements = [
        ["All Come To Ruin", "Complete The Brigmore Witches in High Chaos"],
        ["Art Dealer", "Collect all the Sokolov paintings"],
        ["Assassin Vs. Machine", "Complete Train Runner before the train arrives at the station"],
        ["Back Home", "Grab a live grenade and use it to kill an attacker"],
        ["Big Boy", "Kill a tallboy with only your sword"],
        ["Breakout", "Break Lizzy Stride out of Coldridge Prison"],
        ["By My Hand Alone", "Get to Wave 13 in Back Alley Brawl killing all combatants personally"],
        ["Capturing Genius and Madness", "Complete the Bridge mission"],
        ["Changed Ways", "Complete The Brigmore Witches in Low Chaos"],
        ["Child Care", "Find Emily Kaldwin"],
        ["Clean Hands", "Complete the game without killing anyone"],
        ["Cleaner", "Fight with 5 enemies at once, without any of them surviving"],
        ["Cleaner Hands", "Complete The Knife of Dunwall without killing anyone"],
        ["Cleanest Hands", "Complete The Brigmore Witches without killing anyone"],
        ["Daredevil", "In Bonfires, perform all the special combination jumps in 1 round"],
        ["Deal Maker", "Purchase at least 8 favors in The Brigmore Witches"],
        ["Dishonored", "Complete the Intro missions"],
        ["Enough Coin to Disappear", "Survive The Brigmore Witches in low chaos with 10,000 coins"],
        ["Excommunication", "Eliminate High Overseer Campbell"],
        ["Faceless", "After escaping Coldridge Prison, complete a single mission without alerting anyone"],
        ["Gangs of Dunwall", "Restore the Undine to working condition"],
        ["Ghost", "Complete all missions after the prologue, alerting no one or killing no one but key targets"],
        ["Harm's Way", "Cause 5 unintentional suicides"],
        ["Headhunter", "Complete Assassin's Run with 100% accuracy using only head shots"],
        ["Hornets' Nest", "Kill 4 enemies in less than 1 second using the crossbow"],
        ["Inhabitant", "Stay in possession of others for most of a 3 minute period"],
        ["Just Business ", "Get the information you need from the Rothwild Slaughterhouse"],
        ["Long Way Down", "Perform a drop assassination of at least 150 meters in the Kill Cascade challenge"],
        ["Manipulator", "Make others kill 5 of their own allies"],
        ["Merchant of Disorder", "Acquire 15 equipment upgrades"],
        ["Message from the Empress", "Perform a drop assassination from atop the Empress statue in The Knife of Dunwall"],
        ["Missing Pieces", "Meet with Thalia Timsh, the Barrister's Niece"],
        ["Mostly Flesh and Steel", "Finish the game without purchasing any supernatural powers or enhancements, besides Blink"],
        ["Mrs Pilsen's Remorse", "Find Emily's doll hidden in each of the 10 challenges"],
        ["Natural Talent", "Finish Mystery Foe without using any active supernatural powers"],
        ["No Regrets", "Complete The Knife of Dunwall in High Chaos"],
        ["Occultist", "Collect 10 bone charms"],
        ["Parting Shot", "Deliver (or attempt) the killing blow on Corvo"],
        ["Political Suicide", "Expose the Lord Regent's crimes and bring about his arrest"],
        ["Rare Collector", "Find all of the collectable figurines in Burglar on Expert"],
        ["Rats and Ashes", "Attach an arc mine to a rat, resulting in a kill"],
        ["Razor Rain", "Kill 5 characters with Drop Assassination"],
        ["Redemptive Path", "Complete The Knife of Dunwall in Low Chaos"],
        ["Regicide", "Assassinate the Lord Regent, Hiram Burrows"],
        ["Resolution", "Complete the game"],
        ["Rogue", "Assassinate 10 unaware enemies"],
        ["Shadow", "Complete all missions after the prologue without alerting anyone"],
        ["Silence is Golden", "Complete The Brigmore Witches without alerting anyone"],
        ["Specter", "After escaping prison, complete a mission without alerting anyone, and kill less than 5 people"],
        ["Speed of Darkness", "Travel 30 meters in less than 1 second"],
        ["Stone Cold Heart", "Speak with the statue of Delilah Copperspoon in Timsh's estate"],
        ["Surgical", "Play from the first mission through Kaldwin's Bridge killing fewer than 10 characters"],
        ["Tempest", "Kill 6 enemies in less than 1 second"],
        ["The Escapist", "After Coldridge Prison, elude 5 pursuers at once without killing them or leaving the map"],
        ["Thief", "Pickpocket items worth a total of 200 coins"],
        ["This Is Mine", "Recover your belongings"],
        ["Time Management", "Finish Chain Kill or Bend Time Massacre without failing any wave, including bonuses"],
        ["Versatile", "Kill characters with each weapon and offensive gadget"],
        ["Void Star", "Complete all Normal and Expert challenges with a 3-Stars rating"],
        ["Wall of Flesh", "Use an enemy lifted with Pull as a shield"],
        ["Wall of Sparks", "Kill an enemy using a Wall of Light"],
        ["Well Connected", "Purchase all of the Favors in The Knife of Dunwall"],
        ["Whisper Ways", "Complete The Knife of Dunwall without alerting anyone"],
    ];

    assert.strictEqual(officialAchievements.length, 63, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 17 hidden Dishonored achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_31", "Dunwall in Chaos"],
        ["ACHIEVEMENT_32", "Just Dark Enough"],
        ["ACHIEVEMENT_33", "Vanished"],
        ["ACHIEVEMENT_34", "Gentleman Caller"],
        ["ACHIEVEMENT_35", "Street Conspiracy"],
        ["ACHIEVEMENT_36", "The Art of the Steal"],
        ["ACHIEVEMENT_37", "An Unfortunate Accident"],
        ["ACHIEVEMENT_38", "Well Mannered"],
        ["ACHIEVEMENT_39", "King of the World"],
        ["ACHIEVEMENT_40", "Bodyguard"],
        ["ACHIEVEMENT_41", "Mercy is the Mark"],
        ["ACHIEVEMENT_42", "Lights Out"],
        ["ACHIEVEMENT_43", "Long Live the Empress"],
        ["ACHIEVEMENT_44", "Poetic Justice"],
        ["ACHIEVEMENT_45", "Food Chain"],
        ["ACHIEVEMENT_46", "Alive Without Breath"],
        ["ACHIEVEMENT_47", "Creepy Crawly"],
    ];

    assert.strictEqual(names.length, 17, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
