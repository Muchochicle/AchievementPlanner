import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-unity.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 289650 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-unity");

test("getPlannerData('assassins-creed-unity') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-unity");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Assassin's Creed Unity achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Assassin's Creed Unity achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Assassin's Creed Unity achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Long Time Ago", "Complete the Prologue."],
        ["Accurate Prediction", "Complete a Nostradamus Enigma."],
        ["An Old Internet Meme", "Renovate all the Social Clubs and complete all the Social Club missions."],
        ["And Stay Down!", "Perform a ground execution."],
        ["Blade In The Crowd", "Assassinate 100 enemies."],
        ["Bloody Trail", "Complete Memory Sequence 8."],
        ["Business and Pleasure", "Earn a total of 50,000 livres."],
        ["Chopped!", "Kill 20 enemies with a heavy weapon."],
        ["Choreography", "Perform 10 Co-op sync kills."],
        ["Curiosity", "Open every chest in the game."],
        ["Curtain Call", "Complete Memory Sequence 12."],
        ["Defender of Franciade", "Complete Suger's Legacy and recover the Eagle of Suger."],
        ["Don't Need It", "Drop 20 Money Pouches in the streets."],
        ["Down But Not Out", "Complete Memory Sequence 11."],
        ["Falling From The Sky", "Perform 10 air assassinations."],
        ["First Blood", "Complete Memory Sequence 3."],
        ["Fraternité!", "Complete the Heist and the Co-op mission in Dead Kings at least once."],
        ["Freedom Fighter", "Kill 15 Raider leaders."],
        ["From the Past", "Unlock the Medieval Armor in the Café Théâtre."],
        ["Gentleman Cambrioleur", "Lockpick 20 chests."],
        ["Guillotined", "Kill an enemy with a lift counterweight."],
        ["Hand of Justice", "Solve a Murder Mystery."],
        ["Help Me!", "Complete 10 Crowd Events."],
        ["Hydrogen Bonded", "Achieve 100% synchronization in Dead Kings."],
        ["I Got Skills", "Unlock all Skills."],
        ["I Want It All", "Complete all Single Player mission challenges."],
        ["Know-It-All", "Complete all training missions."],
        ["La Cour des Miracles", "Complete Memory Sequence 4."],
        ["Liberator", "Free every outpost in Franciade."],
        ["Love And Duty", "Complete Memory Sequence 10."],
        ["Master Architect", "Complete all the renovations of the Café Théâtre."],
        ["Merciful Killer", "Perform 10 non-lethal takedowns in a Co-op mission."],
        ["Must've Left it Open", "Lockpick 5 doors."],
        ["Mystery Solved", "Complete Memory Sequence 7."],
        ["Needs More Data", "Earn 3 Data Bonuses"],
        ["Networking", "Renovate your first Social Club."],
        ["Never Say Die", "Revive a partner in Co-op."],
        ["No Man's Land", "Complete all Rift missions."],
        ["Panoramic View", "Synchronize all Viewpoints."],
        ["Patron of the Arts", "Watch a play in the Café Théâtre."],
        ["Piece of Eden", "Complete Memory Sequence 13."],
        ["Poked!", "Kill 20 enemies with a Long Weapon."],
        ["Ransacking Versailles", "Earn 100% completion of Versailles."],
        ["Rebirth", "Complete Memory Sequence 2."],
        ["Reign of Terror", "Kill 5 enemies at the same time with a Guillotine Gun."],
        ["Road To Starvation", "Complete Memory Sequence 9."],
        ["Room With A View", "Enjoy the view of Paris from Arno's balcony."],
        ["Safe and Secure", "Perform all Social Club missions in a district."],
        ["Secret Meeting", "Complete Memory Sequence 6."],
        ["Share the Wealth", "Get all the rewards in a Co-op mission."],
        ["Thawed", "Free a total of 10 trapped Assassins."],
        ["The Baguette Boyband", "Complete a Co-op mission."],
        ["The Bells! The Bells!", "Sabotage 5 alarm bells."],
        ["The Root Of Evil", "Complete Memory Sequence 5."],
        ["Tricolore", "Collect all Cockades"],
        ["Visited Once", "Complete all Co-op and Heist missions at least once."],
        ["Youth In Versailles", "Complete Memory Sequence 1."],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
