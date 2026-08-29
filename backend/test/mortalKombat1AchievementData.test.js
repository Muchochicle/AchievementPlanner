import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mortal-kombat-1.json - 50 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1971870 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 50 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mortal-kombat-1");

test("getPlannerData('mortal-kombat-1') returns real planner data with 50 curated achievements", () => {

    assert.ok(game, "expected real planner data for mortal-kombat-1");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 50);

});

test("every Mortal Kombat 1 achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Mortal Kombat 1 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 50 Mortal Kombat 1 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Timeline", "Komplete 50% Of Story Mode Part 1"],
        ["ABACABB", "Use A Key"],
        ["Adventure Time", "Komplete 25 Unique Encounters"],
        ["Always Accessorize", "Equip A Relic"],
        ["Annihilation", "Perform 10 Different Kameo Fatalities"],
        ["Beaten And Broken", "Spill 5,000 Pints Of Blood"],
        ["Become A Ninja In No Time", "Komplete The Basic Tutorial"],
        ["Big Spender", "Spend 10,000 Seasonal Kredits"],
        ["Buddy System", "Komplete Mastery With 1 Kameo Character"],
        ["Deadly Assassin", "Perform 20 Different Fatalities"],
        ["Eye Of The TaiGore", "Spend A Total Of 1 Hour In Practice"],
        ["Feeling Stronger", "Reach Invasions Level 5"],
        ["Found You", "Unlock A Secret Fight"],
        ["Give A Koin", "Spend 10,000 Koins On The Shrine"],
        ["Happy Endings", "Unlock 10 Tower Endings"],
        ["High Score, Is That Good?", "Obtain A Total Score Of 5,000,000 In Towers Of Time"],
        ["It Has Begun!!!", "Komplete Cage Mansion Tutorial"],
        ["Juggernaut", "Reach Invasions Level 20"],
        ["Karnage", "Perform 10 Different Brutalities"],
        ["King Slayer", "Dethrone A King"],
        ["Kollector", "Equip 3 Different Relics"],
        ["Kontender", "Play 5 Kombat League Sets"],
        ["Made It Out Alive", "Komplete A Survival Encounter"],
        ["Make Way, I'm Koming Through", "Klear An Obstruction In Invasions"],
        ["Making Friends Is Easy", "Use 10 Different Kameo Characters"],
        ["Not So Big Now, Are You??", "Defeat A Mini Boss In Invasions"],
        ["Puppet Master", "Komplete A Klassic Tower With 5 Different Characters"],
        ["Quest Master", "Komplete 3 Daily Quests"],
        ["Rollin' With My Krew", "Komplete Mastery With 5 Kameo Characters"],
        ["Running On Empty", "Recharge A Talisman"],
        ["So I Just Kill Stuff??", "Komplete 5 Unique Encounters"],
        ["So Krafty", "Forge A Talisman"],
        ["Stop Hiding", "Survive An Ambush"],
        ["Take And Deny", "Trade For An Item From An Earthrealm Shop"],
        ["Talis-Mania", "Use A Talisman 10 Times"],
        ["Test Your Might", "Komplete 5 Unique Test Your Might Encounters"],
        ["Thank You For Being A Fan!!!", "Watch The Kredits"],
        ["The Mighty Have Fallen", "Komplete A Titan Battle"],
        ["There Is No Knowledge That Is Not Power", "Use 10 Konsumables"],
        ["Titan", "Deal 10,000 Damage To Opponents"],
        ["Total Disrespect", "Perform A Taunt Without Being Interrupted During An Online Match"],
        ["Ultimate Power", "Use A Talisman"],
        ["Unstoppable", "Reach Invasions Level 10"],
        ["Vanquished", "Defeat The Final Boss Of An Invasions Season"],
        ["What Just Happened??", "Komplete 100% Of Story Mode Part 1"],
        ["Where's Blanche", "Trade For An Item From An Outworld Shop"],
        ["Who Da Boss??", "Defeat A Major Boss In Invasions"],
        ["Who Was That???", "Komplete Chapter 15 Twice"],
        ["Witness Me!!!", "Change Your Kombat Kard Player Module"],
        ["Working Overtime", "Komplete A Weekly Quest"],
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
