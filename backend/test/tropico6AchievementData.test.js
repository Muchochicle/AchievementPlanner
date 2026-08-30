import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tropico-6.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 492720 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 40 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("tropico-6");

test("getPlannerData('tropico-6') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for tropico-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Tropico 6 achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Tropico 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Tropico 6 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Apocalypso", "Complete Mission \"The Referendum\""],
        ["Been there, Done That", "Complete all Missions"],
        ["Beware The Betman", "Complete Mission \"The One-Percenters\""],
        ["Caribbean Comrade", "Complete Mission \"Better Red Than Dead\""],
        ["Chain Gang", "Generate $3,500 in a month with convict labor"],
        ["Computer Says \"No\"", "Complete Mission \"Bureaucrazy 2.0\""],
        ["Curse of the Mummy", "Have the Sphinx and the Great Pyramid constructed at the same time"],
        ["Don't Panic!", "Have a Space Mission end with a special event"],
        ["Double Trouble", "Have two faction escalations at the same time"],
        ["Fairy Tale Come True", "Have Neuschwanstein Castle and the Taj Mahal constructed at the same time"],
        ["Firestarter", "Complete Mission \"Superpower Defense\""],
        ["For Science!", "Complete Mission \"Tropicoland\""],
        ["French Connection", "Have the Statue of Liberty and the Eiffel Tower constructed at the same time"],
        ["From Knight to Little Duck", "Construct bridges with an accumulated length of 728 grid tiles"],
        ["Go Sovereigns!", "Complete Mission \"Ballgame\""],
        ["Happy Ending?", "Complete Mission \"Acts of God\""],
        ["I Owe You Nothing", "Reach a Swiss bank account credit of S$ 50k without ever accepting a single Broker request"],
        ["Just One...More...Term...", "Spend 5 hours playing Tropico 6"],
        ["Make Tropico Great Again!", "Finish a sandbox game without any imports"],
        ["My Ways", "End 50 protests by force or by bribing the protesters across all games"],
        ["Narcissist", "Have 20 inspiring statues at the same time"],
        ["Number 18", "Complete Mission \"Speakeasy\""],
        ["Of Seals And Men", "Complete Mission \"Concrete Beach\""],
        ["One Does Not Simply Stage A Coup", "Survive a military coup"],
        ["Promising Endeavors", "Perform 500 raids across all games"],
        ["Shackadelic", "Complete Mission \"Shackland\""],
        ["Sublime Subliminal Supreme", "Have 90% of all Tropicans support the same faction"],
        ["Survivor", "Win a sandbox game on a map with a volcano on it with Disasters set to \"Frequent\""],
        ["Teamplayer", "Win a multiplayer game as a team"],
        ["Terraformer", "Generate 15 random maps"],
        ["The Beginning of a Servantship", "Complete Mission \"Penultimo of the Caribbean\""],
        ["The Dreamer of Dreams", "Complete Mission \"Chocolate Factory\""],
        ["The Governator", "Remain in colonial era for 30 years in one game"],
        ["The Legend of Langostino", "Complete Mission \"Pirate King\""],
        ["The Time For Wonders", "Have four heists active at the same time"],
        ["Trade Is My Trait", "Have an active trade route for all trade licenses at the same time"],
        ["Un-Lonely Island", "Reach a population of 1000"],
        ["Viva Tropico!", "Complete Mission \"Battle Royal\""],
        ["Watch The World Burn", "Win a sandbox game without ever constructing a fire station"],
        ["We Don't Have Time For That", "Have no elections within a duration of 20 years"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
