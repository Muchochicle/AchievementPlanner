import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/war-thunder.json - 91 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 236390 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 91 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments, the same
// convention as every other planner difficulty/time field in this catalog.
const game = getPlannerData("war-thunder");

test("getPlannerData('war-thunder') returns real planner data with 91 curated achievements", () => {

    assert.ok(game, "expected real planner data for war-thunder");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 91);

});

test("every War Thunder achievement has a unique id from 1 to 91 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 91 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 91);
    assert.strictEqual(new Set(apinames).size, 91);

});

test("every War Thunder achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 91 War Thunder achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Accurate Fire", "Get 'Triple Strike'"],
        ["Air-to-Air", "Get 'Hero of the sky' 10 times"],
        ["Air-to-Ground", "Get 'Thunderer' 10 times"],
        ["American Ace", "Destroy 100 player vehicles while using US vehicles"],
        ["Arcade 1000", "Destroy 1000 players' vehicles in arcade battles"],
        ["At one blow", "Destroy 5 targets within 1 second"],
        ["Australian Ace", "Destroy 100 player vehicles while using Australian vehicles"],
        ["Belgian Ace", "Destroy 100 player vehicles while using Belgian vehicles"],
        ["British Ace", "Destroy 100 player vehicles while using British vehicles"],
        ["British Collection", "Order 50 British vehicles"],
        ["But... how?!", "Shoot down a plane with tank cannon in simulator mode"],
        ["Cadet", "Spend 10 hours in battle"],
        ["Chinese Ace", "Destroy 100 player vehicles while using Chinese vehicles"],
        ["Chinese Collection", "Order 50 Chinese vehicles"],
        ["Cold-Blooded", "Destroy 2 players' vehicles while your vehicle's on fire"],
        ["Collector", "Get 2000 vehicles"],
        ["Dead Weight", "Destroy a player's vehicle which is tied to other player's vehicle by a cable"],
        ["Destroyer", "Deal 10000 damage while controlling an aircraft or a naval vessel"],
        ["Doomsday!", "Make a nuclear strike and end the mission with a victory"],
        ["Dutch Ace", "Destroy 100 player vehicles while using Dutch vehicles"],
        ["Element of Surprise", "Capture an enemy strategic point with hostile team players in direct vision"],
        ["Falcon", "Win 50 battles using aircraft"],
        ["Family Album", "Get 100 player icons"],
        ["Finnish Ace", "Destroy 100 player vehicles while using Finnish vehicles"],
        ["Fire Arrows", "Destroy 1000 player vehicles with guided missiles"],
        ["Firestarter", "Destroy 30 players' vehicles by setting them afire"],
        ["First dozen", "Destroy 12 players’ vehicles while controlling an aircraft"],
        ["First-class", "Play 3 battles, taking first place in any team"],
        ["French Ace", "Destroy 100 player vehicles while using French vehicles"],
        ["French Collection", "Order 50 French vehicles"],
        ["Fully Modified", "Purchase 50 modifications"],
        ["German Ace", "Destroy 100 player vehicles while using German vehicles"],
        ["German Collection", "Order 50 German vehicles"],
        ["Graduate", "Spend 100 hours in battle"],
        ["Ground-to-Air", "Get 'Wing Breaker' 10 times"],
        ["Ground-to-Ground", "Get 'Heavy Metal Hero' 10 times"],
        ["Guide", "Get 'Intelligence' 10 times"],
        ["High-precision strike", "Destroy 1 player vehicle with a guided bomb at a distance of 20 km or more"],
        ["Hooked", "Land on an aircraft carrier"],
        ["Hornet", "Win 50 battles using helicopters"],
        ["Hungarian Ace", "Destroy 100 player vehicles while using Hungarian vehicles"],
        ["Invincible", "Get the 'Professional' reward 100 times"],
        ["Israeli Ace", "Destroy 100 player vehicles while using Israeli vehicles"],
        ["Israeli Collection", "Order 50 Israeli vehicles"],
        ["Italian Ace", "Destroy 100 player vehicles while using Italian vehicles"],
        ["Italian Collection", "Order 50 Italian vehicles"],
        ["Japanese Ace", "Destroy 100 player vehicles while using Japanese vehicles"],
        ["Japanese Collection", "Order 50 Japanese vehicles"],
        ["Just a Scratch", "Get the 'Adamant' award 5 times"],
        ["King of the Hill", "Destroy in one battle 5 players' vehicles while standing on the strategic point captured by your team"],
        ["Knowledge is Power", "Get 'According to Intelligence' 10 times"],
        ["Kraken", "Sink 5 aircraft carriers"],
        ["Legend", "Spend 1000 hours in battle"],
        ["Nemesis", "Get 'Avenger' 5 times"],
        ["Ninja", "Get 'Shadow Strike' 100 times"],
        ["Peaceful atom", "Shoot down a nuclear weapon carrier"],
        ["Piranha", "Win 50 battles using сoastal fleet"],
        ["Raining Lead", "Destroy 10 players’ vehicles with artillery strikes"],
        ["Rank 1", "Win 100 battles using vehicles of rank 1"],
        ["Rank 2", "Win 100 battles using vehicles of rank 2"],
        ["Rank 3", "Win 100 battles using vehicles of rank 3"],
        ["Rank 4", "Win 100 battles using vehicles of rank 4"],
        ["Rank 5", "Win 100 battles using vehicles of rank 5"],
        ["Rank 6", "Win 100 battles using vehicles of rank 6"],
        ["Rank 7", "Win 100 battles using vehicles of rank 7"],
        ["Rank 8", "Win 100 battles using vehicles of rank 8"],
        ["Rank 9", "Win 100 battles using vehicles of rank 9"],
        ["Realistic 500", "Destroy 500 players' vehicles in realistic battles"],
        ["Revenge-Seeker", "Get 'Eye for an Eye' 5 times"],
        ["Shark", "Win 50 battles using bluewater fleet"],
        ["Size Doesn’t Matter", "Destroy 3 destroyers in a boat without losing your vehicle"],
        ["Sniper", "Destroy 5 players' vehicles at the distance of 1.5 kms or more"],
        ["South African Ace", "Destroy 100 player vehicles while using South African vehicles"],
        ["Soviet Ace", "Destroy 100 player vehicles while using Soviet vehicles"],
        ["Soviet Collection", "Order 50 Soviet vehicles"],
        ["Speed up!", "Activate 10 boosters"],
        ["Street Brawler", "Destroy 2 players' vehicles within 30 seconds from a distance of 10 meters or less"],
        ["Swedish Ace", "Destroy 100 player vehicles while using Swedish vehicles"],
        ["Swedish Collection", "Order 50 Swedish vehicles"],
        ["Swiss Ace", "Destroy 100 player vehicles while using Swiss vehicles"],
        ["Thai Ace", "Destroy 100 player vehicles while using Thai vehicles"],
        ["Tiger", "Win 50 battles using ground vehicles"],
        ["Treasure Hunter", "Open 10 chests"],
        ["True 100", "Destroy 100 players' vehicles in simulator battles"],
        ["True and Fable", "Win 50 single missions"],
        ["Ultimate", "Get 'Mission Maker' 10 times"],
        ["US Collection", "Order 50 US vehicles"],
        ["Vengeful Spirit", "Destroy a player's vehicle while being dead"],
        ["Veteran", "Spend 500 hours in battle"],
        ["Warrior", "Spend 250 hours in battle"],
        ["Weapon of Heroes", "Destroy 10 enemy ships by ramming them"],
    ];

    assert.strictEqual(officialAchievements.length, 91, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
