import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rise-of-nations-extended.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 287450 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("rise-of-nations-extended");

test("getPlannerData('rise-of-nations-extended') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for rise-of-nations-extended");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Rise of Nations: Extended Edition achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Rise of Nations: Extended Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Rise of Nations: Extended Edition achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Air", "Train 10,000 air units"],
        ["Ambassador", "Finish a multiplayer game"],
        ["Archaeologist", "Collect 5,000 resources from ruins"],
        ["Armageddon", "Finish a game in Armageddon"],
        ["Artillery", "Train 50,000 artillery units"],
        ["Assassin", "Win Assassin"],
        ["Big Huge", "Win on a Big Huge Map"],
        ["Brigadier", "Win 25 games"],
        ["CIA Spymaster", "Complete Espionage as the USA"],
        ["Colonel", "Win 10 games"],
        ["Conqueror", "Capture a city"],
        ["Decon", "Destroy 10,000 buildings"],
        ["Economical Guru", "Collect 1,000,000 resources"],
        ["Field Marshal", "Win 100 games"],
        ["Footsteps", "Complete the Alexander the Great Campaign"],
        ["General", "Win 50 games"],
        ["Generous", "Send resources to an ally"],
        ["Genius", "Research 4 finals in game"],
        ["Good Ear", "Win Musical Chairs"],
        ["Grand Architect", "Build 10,000 buildings"],
        ["KGB Spymaster", "Complete Espionage as the Soviets"],
        ["Knockout", "Knockout in Sudden Death"],
        ["Marco Polo", "Gain control of 250 rare resources"],
        ["Mass Cavalry", "Train 1,000,000 cavalry units"],
        ["Mass Infantry", "Train 1,000,000 infantry units"],
        ["Master Of War", "Beat Toughest"],
        ["Napoleon", "Complete the Napoleon Campaign"],
        ["Naval", "Train 25,000 naval units"],
        ["New World", "Complete the New World Campaign"],
        ["Sacrificer", "Lose 100,000 units"],
        ["Science Nerd", "Win Peaceful Tech Race"],
        ["Skilled", "Get a high score on any skill"],
        ["Student Of War", "Beat Tougher"],
        ["Supreme", "Complete the World Map Campaign"],
        ["Tactical", "Kill 50,000 units"],
        ["Territory", "Win Territory"],
        ["Thawed", "Complete the Cold War Campaign"],
        ["Wonder", "Win Wonder"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
