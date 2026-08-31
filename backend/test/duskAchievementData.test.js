import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dusk.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 519860 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("dusk");

test("getPlannerData('dusk') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for dusk");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every DUSK achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every DUSK achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 DUSK achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Survived", "Get past wave 10 in Endless Mode"],
        ["20 Survived", "Get past wave 20 in Endless Mode"],
        ["5 Survived ", "Get past wave 5 in Endless Mode"],
        ["Completionist", "Earn the 'Completionist' award"],
        ["Don't Drop It", "Pick up a bar of soap in each level"],
        ["Duskbaby", "In E3M8 (As Above, So Below), reach the giant room and find the Hallowed Health behind bars."],
        ["Duskwife", "In E1M2 (Down On The Farm), carry a basketball through the teleporter back to the farmhouse and put it through the hoop to open a secret."],
        ["Frag your Friends", "Open Duskworld"],
        ["Go Away", "Find the hidden 'you aren't supposed to be here, go away' sign."],
        ["Gotta Go Fast", "Beat par time in a level"],
        ["Hardcore Parkour", "Reach E2MS"],
        ["Intoxigated", "Kill Intoxigator while intoxicated"],
        ["It Lives", "Find the Dopefish painted on a wall in a secret area of E1M3."],
        ["Low Tech", "Earn the 'Low Tech\" award"],
        ["Mother!", "Find the 'Wife of Intoxigator' at the end of E2M9."],
        ["Not Even Remotely Fair", "Beat a level on 'Duskmare'"],
        ["Only the Beginning", "Complete all three episodes"],
        ["Pacifist", "Earn the 'Pacifist' award"],
        ["So I Hear You Like...", "Reach E3MS"],
        ["Somebody's Poisoned the Waterhole!", "Neutralize Chomper"],
        ["Spin 2 Win", "Kill an enemy by spinning your weapons"],
        ["Swamped", "Reach E1MS"],
        ["Telefragged", "Telefrag the Guardian"],
        ["Thanks!", "Watch the credits to the end"],
        ["The Facilities", "Complete episode 2"],
        ["The Foothills", "Complete episode 1"],
        ["The Nameless City", "Complete episode 3"],
        ["True 100%", "Earn the 'Completionist' award in every level"],
        ["Untouchable", "Earn the 'Untouchable' award"],
        ["UNWORTHY", "Use cheats"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
