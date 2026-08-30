import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/steel-division-2.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 919640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("steel-division-2");

test("getPlannerData('steel-division-2') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for steel-division-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every Steel Division 2 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every Steel Division 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 Steel Division 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Hoppe", "Win the \"Last Hope\" historical scenario with the Germans"],
        ["Annexation Complete", "Win Turda campaign with the Hungarians"],
        ["Back to Brest", "Win the \"Escape from Brest\" historical scenario with the Soviets"],
        ["Battle-Hardened", "Reach the level 10"],
        ["Berezina, fateful waters ...", "Win the Berezina strategic campaign with the Germans"],
        ["Berlingowcy", "Win the \"River of Blood\" historical scenario with the Soviets"],
        ["Black Sunday", "Win the Iasi strategic campaign with the Germans"],
        ["Bobr, Berezina, Niemen...", "Win the \"Stemming the Tide\" historical scenario with the Soviets"],
        ["Bobruisker", "Win the Bobruisk strategic campaign with the Germans"],
        ["Bonecrusher", "Win the \"Memento Mori\" historical scenario with the Soviets"],
        ["Breakthrough!", "Win the Orscha strategic campaign with the Soviets"],
        ["Captain", "Beat an easy AI in skirmish mode"],
        ["Cat Hunt", "Win the \"Terminus Krupki\" historical scenario with the Soviets"],
        ["Colonel", "Beat a medium AI in skirmish mode"],
        ["Companiable", "Win a 4v4 multiplayer game"],
        ["Conqueror", "Win a multiplayer game in Conquest mode"],
        ["Cossack", "Win the \"Fighting Retreat\" historical scenario with the Soviets"],
        ["Crossroad of Destiny", "Win the \"Fate of a Nation\" historical scenario with the Soviets"],
        ["Death of an Army Group", "Win the Baranovichi strategic campaign with the Germans"],
        ["Desperate assault", "Win the \"Desperate Measures\" historical scenario with the Germans"],
        ["Desperate resistance", "Win the \"Desperate Measures\" historical scenario with the Soviets"],
        ["Engagez-vous, rengagez-vous ...", "Win the \"Stemming the Tide\" historical scenario with the Germans"],
        ["Finland won the peace", "Win the \"The Last Battle\" historical scenario with the Germans"],
        ["Free Finland", "Win the Karelia strategic campaign with the Germans"],
        ["General", "Beat a hard AI in skirmish mode"],
        ["Hanging by a thread", "Win the \"Fate of a Nation\" historical scenario with the Germans"],
        ["Highway to Hell", "Win the \"Autobähn zur Hölle\" historical scenario with the Germans"],
        ["Hurrah!", "Win the \"Cavalry Action\" historical scenario with the Soviets"],
        ["Hussar", "Win the \"Fighting Retreat\" historical scenario with the Germans"],
        ["Immortal Transylvania", "Win Turda campaign with the Romanians"],
        ["Insurgent", "Win the Dukla Pass strategic campaign with the Soviets"],
        ["Killing Blow", "Win the Iasi strategic campaign with the Soviet"],
        ["Last train for glory", "Win the \"Terminus Krupki\" historical scenario with the Germans"],
        ["Marshal", "Beat a very hard AI in skirmish mode"],
        ["Memento Mori", "Win the \"Memento Mori\" historical scenario with the Germans"],
        ["Not a step back!", "Win the Orscha strategic campaign with the Germans"],
        ["Order No. 227", "Win the \"Last Hope\" historical scenario with the Soviets"],
        ["Party Animal", "Win a 10v10 multiplayer game"],
        ["Peacemaker", "Win a game with each faction in skirmish mode"],
        ["Polish Marshal", "Win the Vistula strategic campaign with the Soviet"],
        ["Red Finland", "Win the Karelia strategic campaign with the Soviet"],
        ["Red Fortress", "Win the Tiraspol strategic campaign with the Soviet"],
        ["Red Triumph", "Win the Baranovichi strategic campaign with the Soviets"],
        ["Remember Leningrad", "Win the \"The Last Battle\" historical scenario with the Soviets"],
        ["Repression", "Win the Dukla Pass strategic campaign with the German"],
        ["River of Blood", "Win the \"River of Blood\" historical scenario with the Germans"],
        ["Rookie", "Reach the level 5"],
        ["Same place, different enemy ...", "Win the Berezina strategic campaign with the Soviets"],
        ["Stairway to Heaven", "Win the \"Autobähn zur Hölle\" historical scenario with the Soviets"],
        ["Teammate", "Win a 3v3 multiplayer game"],
        ["The Great Escape", "Win the \"Escape from Brest\" historical scenario with the Germans\""],
        ["Trapping the fascists!", "Win the Bobruisk strategic campaign with the Soviets"],
        ["Veteran", "Reach the level 20"],
        ["Vorwärts!", "Win the \"Cavalry Action\" historical scenario with the Germans"],
        ["Warsaw has fallen", "Win the Vistula strategic campaign with the Germans"],
        ["White Castle", "Win the Tiraspol strategic campaign with the Germans"],
        ["Wingman", "Win a 2v2 multiplayer game"],
        ["With a little help from my friends…", "Add one friend"],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
