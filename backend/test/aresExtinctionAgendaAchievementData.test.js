import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ares-extinction-agenda.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 92300 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ares-extinction-agenda");

test("getPlannerData('ares-extinction-agenda') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for ares-extinction-agenda");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every A.R.E.S.: Extinction Agenda achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every A.R.E.S.: Extinction Agenda achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 A.R.E.S.: Extinction Agenda achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Art of Destruction", "Destroy 20 enemies, using your Grenade Attack"],
        ["Bookworm", "Collect all the Data cubes"],
        ["Boss Headhunter", "In Hard Mode, defeat all the bosses using only the Zytron Blaster"],
        ["Burst with the Energy", "Destroy 5 or more enemies, at once with Valkyl's Zypher Cannon"],
        ["Close Combat Fighter", "Destroy 10 enemies, using your Dash Attack"],
        ["Die Another Day", "Finish all of the stages without dying"],
        ["Don't Come Back Again", "Perfect the Goliath boss fight"],
        ["Extinction of the Robots", "Destroy 1000 enemies"],
        ["Fight with the Same Size", "Perfect the Sentinel boss fight"],
        ["Here is my True Strength", "Achieve Synthesis Soldier rank 'S'"],
        ["I am the Destroyer", "Achieve Synthesis Soldier rank 'A'"],
        ["I Am Trashman", "Collect 1000 units of each material type"],
        ["It's a Long Story", "Watch all the cut-scenes without skipping"],
        ["It's getting too hot!", "Trick a Bomber to hit and destroy a Zytron Walker (LA)"],
        ["Master of Stun", "Stun 10 enemies with the EMP grenade"],
        ["Ninety-Nine Combo", "Maximize your attack combo"],
        ["Primary Objective", "Finish the game once"],
        ["Ready For Action", "Finish all of the in-game tutorials"],
        ["Soldier of the Universe", "Achieve Synthesis Soldier rank 'SS'"],
        ["Unlimited Energy", "Finish all of the stages without using a single repair kit"],
        ["Weapon At Maximum", "Upgrade one of your weapons to its maximum level"],
        ["Whatever Your Size Is", "Perfect the Prime Guardian boss fight"],
        ["Where is the Emergency?", "Discover and use your first repair machine"],
        ["You Should Have Two", "Perfect the Carrion boss fight"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
