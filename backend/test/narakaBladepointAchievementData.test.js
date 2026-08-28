import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/naraka-bladepoint.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1203220 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 40 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("naraka-bladepoint");

test("getPlannerData('naraka-bladepoint') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for naraka-bladepoint");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every NARAKA: BLADEPOINT achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every NARAKA: BLADEPOINT achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 40 officially-described NARAKA: BLADEPOINT achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Legend is Born", "Obtain a piece of legendary-quality gear."],
        ["Accuracy Assured", "Raise a ranged weapon to Lv. 25."],
        ["Ancient Wrath", "Defeat an enemy with a Moonbane Charm."],
        ["And So It Begins", "Play a game of The Survival."],
        ["Apogee", "Attain 'Undying Glory' 20 times."],
        ["As Fate Wills", "Raise a hero's Cultivation to 'The Chosen One'."],
        ["Augmented Arms", "Equip 3 different Souljades for a single weapon at once."],
        ["Bloodthirsty", "Defeat 3 enemies in 60 seconds."],
        ["Brawler", "Defeat an enemy with your bare fists."],
        ["Captain's Bloodlust", "In a single game, defeat 5 enemies in Shipwreck Expanse."],
        ["Close Combat", "Raise a melee weapon to Lv. 25."],
        ["Deep Pockets", "Possess 30,000 Dark Tide Coins."],
        ["Divine Lord", "In a single game, defeat 5 enemies in Celestra."],
        ["Drunken Fire", "Deal 5,000 damage with Flamebringers."],
        ["Fearful Aura", "Become the Kill Leader (the player with the most kills in the game so far)."],
        ["Fickle Fortune", "Feel the effects of a statue another player's prayed to."],
        ["Fight Fire With Fire", "In a single game, defeat 5 enemies in Eventide Temple."],
        ["First Blood", "Get the first kill."],
        ["Focused Momentum", "Equip the Focus Slide Souljade and use its effects to knock an enemy airborne."],
        ["Give Thanks", "Pray to a statue in a Stash."],
        ["Hand of Grace", "Rescue 3 downed party members in a single game."],
        ["Jack of All Trades", "Complete 20 Heroic Tales quests."],
        ["Lurker", "In a single game, spend a total of 150 sec hiding in bushes."],
        ["Luster", "Obtain a Gold Souljade."],
        ["Marathon Runner", "Travel 7,500m in a single game."],
        ["Mask of Immortality", "Attain 'Undying Glory'."],
        ["Mighty Mortal", "Equip 3 Gold Souljades at once."],
        ["Miracle Encounter", "Kill a Golden Toad."],
        ["Mortal Coil", "Defeat an enemy with the waterwheel."],
        ["Sixth Sense", "Defeat an enemy from over 50m away."],
        ["Spirit Spikes", "Deal 5,000 damage with Bloodrippers."],
        ["Spoils of War", "Unlock 8 achievements in a single match."],
        ["Sunwing's Messenger", "In a single game, defeat 5 enemies in Sunwing's Rest."],
        ["Super Weaponry", "Defeat an enemy with a Ballista."],
        ["Sure Shot", "Unlock Perfect Aim achievement in 3 matches."],
        ["Temple Warrior", "In a single game, defeat 5 enemies in Shadowjade Mine."],
        ["The Overcomer", "Survive for over 3 minutes and achieve victory while the only one in your party still alive."],
        ["Unbreakable", "Perform 2 Counters in 60 seconds."],
        ["What Lies Within", "Open a Stash."],
        ["Yi's Instrument", "Deal 5,000 damage with Swarms."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
