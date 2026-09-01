import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mycopunk.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3247750 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mycopunk");

test("getPlannerData('mycopunk') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for mycopunk");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Mycopunk achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Mycopunk achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Mycopunk achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["ABOMINATION", "Get the final hit on an Abomination"],
        ["BANG!", "In the hub, kill a teammate and throw one of their body parts into the basketball hoop."],
        ["Best Teammate", "Kill a member of your crew"],
        ["Big Damage", "Deal a lot of damage"],
        ["Big Shot", "Reach level 15"],
        ["Bush League", "Complete a mission on threat level 4"],
        ["Calm Down", "Say hi to Roachard many times in a row."],
        ["Collector", "Collect 50 upgrades"],
        ["Cranius", "Defeat the Cranius boss."],
        ["Employee of the Day", "Reach level 30"],
        ["Employee of the Month", "Die 31 times."],
        ["Exotic", "Find an exotic upgrade"],
        ["Full Crew", "Complete a mission with a Wrangler, Bruiser, Scrapper, and Glider on your team"],
        ["Hard Landing", "Die from fall damage"],
        ["Hazard Pay", "Complete a mission on threat level 3"],
        ["Hi", "Say hi to Roachard"],
        ["I Like Sand", "Complete a mission in the Desert"],
        ["I Think I Left My Keys in the Taxi, Can We Go Back And Get Them?", "Complete a mission in Titan City"],
        ["I Want Saxitos", "Punch a bag of Saxitos™"],
        ["It's So Red", "Complete a mission in the Moldy Tundra"],
        ["No Broccoli Please", "Complete a mission in the Gravity Farms"],
        ["Not Too Bad", "Complete a mission on threat level 2"],
        ["Ok Then", "Complete a mission on threat level 6"],
        ["Oops", "Knock over a pipe."],
        ["Overclocked", "Die to an overclocked enemy core"],
        ["Ow", "Take a lot of damage"],
        ["Serial Killer", "Kill 5000 enemies"],
        ["Slap", "Kill a hornet with your melee attack"],
        ["Space Optimization", "Fit 9 upgrades on one grid"],
        ["Swinger", "Swing around a grapple pole for its full duration without touching the ground"],
        ["Thanks", "Complete a mission on threat level 5"],
        ["That Was Tough", "Complete a mission on threat level 1"],
        ["Upgrader", "Apply an upgrade"],
        ["Yeehaw", "As the Wrangler, lasso another player"],
        ["Yikes", "Complete a mission with at least 4 active modifiers"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
