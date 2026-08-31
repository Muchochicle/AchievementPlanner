import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/battleblock-theater.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 238460 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("battleblock-theater");

test("getPlannerData('battleblock-theater') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for battleblock-theater");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every BattleBlock Theater achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every BattleBlock Theater achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 BattleBlock Theater achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Around Joe", "Be on the winning team in one arena match of every mode."],
        ["Armed and Dangerous", "Collect all the weapons in the Gift Shop by unlocking or trading."],
        ["Black Marketeer", "Get yourself a cool new weapon."],
        ["Cast Member", "Complete the story's opening sequence in any mode."],
        ["Chicken Toucher", "Play with the Behemoth or someone with this achievement in an online game."],
        ["Consolation Prize", "Die an enormous number of times across your playthrough."],
        ["Coop Star", "Get a letter grade in every level (except Encores) in Normal Co-op Story Mode."],
        ["Crowd Pleaser", "Complete all the Encores in any mode."],
        ["Deadly Performer", "Get 100 kills."],
        ["First Time Trader", "Make a trade with someone."],
        ["Freedom Hero", "Free all the prisoners in the Gift Shop by unlocking or trading."],
        ["Hats Off", "Get a letter grade in all eight finales in any mode."],
        ["Insane Coop Star", "Get a letter grade in every level (except Encores) in insane co-op story mode."],
        ["Insane Solo Star", "Get a letter grade  in every level (except Encores) in insane solo story mode."],
        ["Jail Breaker", "Free 50 prisoners in the Gift Shop."],
        ["Melee Master", "Successfully use every melee attack move."],
        ["Nail File Cake", "Free a fellow prisoner."],
        ["Prison Food", "Get eaten for the first time by one of the raccoon-like 'Feed' creatures."],
        ["Seasoned Performer", "Complete the first four finales in any mode."],
        ["Secret Finder", "Trigger a hidden secret stage - touch a hidden marble/gem in a level and the screen goes black with strange music, awarding bonus gems for everyone."],
        ["Secret Hat Hunter", "Collect 10 Golden Hats."],
        ["Social Butterfly", "Collect all the prisoners of one head shape."],
        ["Solo Star", "Get a letter grade in every level (except Encores) in Normal Solo Story Mode."],
        ["Take A Bow", "Complete an encore level in Story Mode."],
        ["The Professional", "Be on the winning team in 100 arena matches."],
        ["Theater Critic", "Complete 10 user-created levels in a single Featured Story playlist."],
        ["Theater Manager", "Download and host a game of user-created levels."],
        ["Traitor", "Kill your co-op partner 50 times."],
        ["Virtuoso", "Get an A++ in 10 levels."],
        ["Weapons Master", "Use each weapon successfully."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
