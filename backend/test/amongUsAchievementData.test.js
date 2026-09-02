import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/among-us.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 945360 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("among-us");

test("getPlannerData('among-us') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for among-us");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Among Us achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Among Us achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Among Us achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A SHIP ADRIFT", "Win 3 games on Skeld"],
        ["A TASTE FOR IT", "Get your first kill"],
        ["A WELL-OILED MACHINE", "Win a game by completing all tasks as a crewmate"],
        ["ASSASSIN", "Get 50 total kills"],
        ["BUT YOU CAN HIDE", "50 wins as a hider in Hide n Seek Mode"],
        ["BUT YOU CAN'T HIDE", "200 kills as a seeker in Hide n Seek Mode"],
        ["CIRCUMVENTER", "Win a game as Impostor without using a vent."],
        ["CORPORATE LOCKDOWN", "Win 3 games on MIRA"],
        ["CREWPOSTOR", "Fix a sabotage that you yourself called as Impostor."],
        ["H U N G E R", "Get 3 kills before a single meeting is called."],
        ["HIDDEN TALENT", "Survive a Game as Crew in Hide n Seek Mode"],
        ["I CAN BE YOUR ANGLE", "Block a kill as a guardian angel"],
        ["IMPOSSIBLE TASK", "Complete the card-swipe task on your first try."],
        ["INTERN", "Complete 10 total tasks"],
        ["KILLER", "Get 5 total kills"],
        ["LIGHTS OUT", "Get a kill during a lights sabotage"],
        ["MANAGER", "Complete 100 total tasks"],
        ["NEVER SUSPECT A THING", "Win a 2-Impostor game with both Impostors alive at the end."],
        ["NO ESCAPE", "Kill all hiders as impostor in Hide n Seek Mode"],
        ["PERFORM UNDER PRESSURE", "Do all your tasks in Hide n Seek Mode"],
        ["SABOTEUR", "Win a game by sabotaging a critical system as Impostor."],
        ["SCOURGE", "Get 150 total kills."],
        ["SHERLOCK", "Win a game as crew with your only votes being for the Impostor"],
        ["SLASHER", "Win a game by killing all crewmates as Impostor."],
        ["SMOOTH TALKER", "Win a game by vote as Impostor"],
        ["SURVIVOR", "Survive and win a game as a crewmate"],
        ["TASKMASTER", "Complete 500 total tasks."],
        ["TOPPAT CREWMATES", "Win 3 games on The Airship"],
        ["TRUST NO ONE", "Kill Someone while disguised as them"],
        ["UNEARTHED", "Win 3 games on Polus"],
        ["WATCH ME SCAN", "Get killed by the Impostor during your own medbay scan."],
        ["YOU CAN RUN", "100 kills as a seeker in Hide n Seek Mode"],
        ["YOU CAN'T RUN", "10 wins as a hider in Hide n Seek Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
