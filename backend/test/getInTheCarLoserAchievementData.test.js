import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/get-in-the-car-loser.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 938860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("get-in-the-car-loser");

test("getPlannerData('get-in-the-car-loser') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for get-in-the-car-loser");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Get In The Car, Loser! achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Get In The Car, Loser! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Get In The Car, Loser! achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["3 2 1 Let's Jam!", "Tank 10 000 damage for the team"],
        ["AH AH AH! DROPPED THAT S***!", "Get a 30 chain"],
        ["Borrow Checking Compiler", "Increase stagger by 10 000 % with rust"],
        ["Cast In The Name Of God", "Kill 20 enemies with smite"],
        ["Champion Of Bad Civilization", "Sacrifice 1000 Items While Upgrading"],
        ["Devil Clock Accelerationist", "Beat Gaius with Devil Clock activated"],
        ["Done With That Guy", "Finish Act II"],
        ["Elegy for an Edgelord", "Finish The Fate of Another World"],
        ["Emily + Jo Forever", "Unlock every Jo road story in DLC2"],
        ["Exploit Damage Princess", "Exploit 100 000 damage on staggered enemies"],
        ["Exploit Damage Queen", "Exploit 1 000 000 damage on staggered enemies"],
        ["Extra Arms", "Finish Battle on the Big Boardwalk"],
        ["Fate (8HR EXTENDED)", "Use Sword of Fate 300 times"],
        ["From Downtown", "Get 20 seconds airtime off a single juggle"],
        ["Keep Honking -- I'm Building Meter", "Use 10 fully charged Level 5 Fate attacks"],
        ["Local Hero", "Complete every Community Request"],
        ["Lore Fiend", "Unlock every road story in the main game"],
        ["MACHINE DEVIL RETIRE B****", "Finish Act IV"],
        ["Multiversal Librarian", "Unlock every guest item road story in Battle on the Big Boardwalk"],
        ["On The Road", "Finish tutorial"],
        ["Pearly Revolving Door", "Revive 100 times"],
        ["She's A 10", "Acquire a platonic ideal"],
        ["Sideloading Super User", "Unlock all three apps"],
        ["The Unfairest Of Them All", "Beat Mirror Sam with Devil Clock activated"],
        ["Thousand Year Cycle", "Beat the Machine Devil with Devil Clock activated"],
        ["Thus Always To Gatekeepers", "Beat Orphan with the Devil Clock activated"],
        ["What Never Was", "Finish Act III"],
        ["Worthy Of Her Grace", "Finish Act I"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
