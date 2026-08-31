import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/pummel-party.json - 31 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 880940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("pummel-party");

test("getPlannerData('pummel-party') returns real planner data with 31 curated achievements", () => {

    assert.ok(game, "expected real planner data for pummel-party");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 31);

});

test("every Pummel Party achievement has a unique id from 1 to 31 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 31 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 31);
    assert.strictEqual(new Set(apinames).size, 31);

});

test("every Pummel Party achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 31 Pummel Party achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Daring Devil", "Take no damage in 'Searing Spotlights' minigame"],
        ["Altitude Achiever", "Score over 10 in 'Altitude Attack'"],
        ["Chopped To Bits", "Get a 5 player kill streak in 'Speedy Sabers'"],
        ["Dodge This", "Survive for 50 seconds in 'Bullet Barrage'"],
        ["Elementfull", "Control over 50% of the area in 'Elemental Escalation'"],
        ["Extra Meat", "Skewer three players with the rocket skewer item"],
        ["Fatal Slip", "Died in 'Acidic Atoll' without throwing a barrel"],
        ["Floor is Lava", "Win 'Magma & Mages' without taking damage"],
        ["Goodluck!", "Start your first game"],
        ["Hoarder", "Collect 40 keys in 'Morphing Maze' minigame"],
        ["Light Foot", "Complete 'Slippery Sprint' without falling in the water"],
        ["Lightning Rod", "As the lightning holder kill every other player in 'Thunderous Trench'"],
        ["Minigame Master", "Place first in every minigame"],
        ["Move Quick", "Survive in 'Breaking Blocks' for 60 seconds"],
        ["No Diamonds", "Complete 'Gift Grab' without collecting coal"],
        ["Quick Reactions", "Score over 5 in 'Bouncing Balls'"],
        ["Raider", "Find the treasure in 'Sandy Search'"],
        ["Road Warrior", "Complete 'Rusty Racers' without falling off the track"],
        ["Rolling Master", "Knock off 5 players in one game of 'Snowy Spin'"],
        ["Seeing Stars", "Knockout 10 players in one game of 'Explosive Exchange'"],
        ["So Shiny", "Get your first goal"],
        ["Starman", "Get launched off screen in 'Tunneling Tanks'"],
        ["Steal From The Poor", "Steal the last gift in a players pile in 'Grifting Gifts'"],
        ["The First of Many!", "Win your first minigame"],
        ["The Trifecta", "Hit three players with the remote control eggplant"],
        ["Thread The Needle", "Survive for at least 50 seconds in 'Sorcerers Sprint'"],
        ["Too Slow", "Got hit by the train in 'Temporal Trails'"],
        ["Two Birds", "Get a double kill in 'Barn Brawl'"],
        ["Unlucky", "Place last in every minigame"],
        ["You Are The Winner", "Win your first game"],
        ["You Made a Mistake", "Accidentally blew yourself up in the 'Strategic Shockwave' minigame"],
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
