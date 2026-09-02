import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/front-mission-1st-remake.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2399730 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("front-mission-1st-remake");

test("getPlannerData('front-mission-1st-remake') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for front-mission-1st-remake");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every FRONT MISSION 1st: Remake achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every FRONT MISSION 1st: Remake achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 FRONT MISSION 1st: Remake achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["ACE PILOT", "Achieve the highest level in one piloting statistic"],
        ["BORDER DEFENDER", "Thwart the enemy's plan to blow up the dam"],
        ["BUBBLEGUM CRISIS", "Recover all items before explosives destroy the carriage"],
        ["CASStOWAYS", "Destroy HAH04 Cassowary before it reaches the final waypoint"],
        ["DEFENSIVE FORMATION", "Prevent enemy units from reaching the central building"],
        ["FOR WHAT WE BELIEVE IN", "Complete the UCS campaign"],
        ["HELL YEA", "Defeat Hell's Walls within the first 10 turns"],
        ["HERO LEAGUE", "Meet Morgan, Randy, Hector, Walter, Billy, Darril and Ernest"],
        ["HEROES DON'T DIE", "Locate the rebel camp"],
        ["HOT-BLOODED", "Win 10 fights in the Arena"],
        ["I HAVE MY OWN SYSTEM", "Change the paint of the Wanzer"],
        ["I'M STRONGER THAN YOU", "Defeat Driscoll one-on-one in the 2090 mission - leave one other enemy alive so the duel can trigger."],
        ["IMPOSSIBLE SPARRING", "Win a skirmish with Grieg's team"],
        ["KABUUM!", "Damage an enemy unit with a BA mine"],
        ["MAD LECTER", "Help Glen at Fort Monus"],
        ["NEW SCARS", "Clear the Karen valley of enemy units"],
        ["ONE AGAINST ALL", "Complete the mission alone"],
        ["OUTDAMAGED", "Eliminate Gina inside the weapons depot"],
        ["OUTSTANDING CAPTAIN", "Complete the mission without losing a single unit"],
        ["RECRUITER", "Recruit all team members in the OCU campaign"],
        ["SAFE RETURN", "Meet Griff"],
        ["SAKATA'S SHAREHOLDER", "Obtain all the available mobile weapons in the game"],
        ["SHOULDER TO SHOULDER", "Recruit all team members in the UCS campaign"],
        ["THE BEST MATERIAL", "Achieve the highest level in three piloting statistics"],
        ["THE COLLECTOR", "Earn all the remaining achievements"],
        ["TILL THE VERY END...", "Complete the OCU campaign"],
        ["VETERAN", "Destroy 100 enemy Wanzers"],
        ["WHATEVER THE COMMAND MAY BE", "Do not lose a single supply unit in Gentz's attack"],
        ["WHEN THE WAR BEGAN", "Watch a feature about the outbreak of the war"],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
