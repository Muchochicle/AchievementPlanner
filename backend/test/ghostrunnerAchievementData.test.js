import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ghostrunner.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1139900 (fetched through this app's own services/steamApi.js).
// 43 of 45 ship a real, official Steam description, quoted
// verbatim below. The 2 hidden achievements ship no Steam
// description; their conditions here are curatorial, cross-checked against
// each game's wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("ghostrunner");

test("getPlannerData('ghostrunner') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for ghostrunner");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Ghostrunner achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Ghostrunner achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 43 officially-described Ghostrunner achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "WhereHeStood",
        "Scrapped",
    ]);

    assert.strictEqual(hiddenApinames.size, 2, "sanity check - Ghostrunner has 2 hidden achievements");

    const officialAchievements = [
        ["A Grade", "Complete \"Another Awakening\" without dying"],
        ["About Adam", "Collect all audiologs"],
        ["Artificial Selection", "Defeat the Keymaster"],
        ["Back To Hell", "Defeat Hel"],
        ["Can't Run Can't Hide", "Kill 5 enemies with your special abilities, while they are protected by a Beacon Shield "],
        ["Control Freak", "Force enemies to kill 4 of their allies using Overlord"],
        ["Dead In The Air", "Kill 3 Sluggers using Blink, while they are in the air"],
        ["Everyone Needs A Hobby", "Find all the collectibles on Hel levels"],
        ["Fine Addition", "Complete your sword collection"],
        ["Finish Line", "Complete your climb up the Tower"],
        ["GR Project Complete", "Obtain all the other achievements"],
        ["Hit Me If You Can", "Block Warden's attack 5 times in a row"],
        ["Homerunner", "Kill an enemy with a projectile reflected by Tempest"],
        ["I Call It Luck", "Block 5 projectiles in a row using your sword"],
        ["Improvise Adapt Overrun", "Kill a sniper without getting near him"],
        ["Junkrunner", "Collect every single collectible item in the game"],
        ["Just A Man", "Defeat Bakunin in less than 3 minutes"],
        ["Legacy Drivers", "Complete \"My Friend\" without using any upgrades"],
        ["Longrunner", "Run 42 kilometers"],
        ["More Than Human", "Kill 23 enemies in a row without dying"],
        ["Obedient Machine", "Complete \"No Other Choice\" without killing any enemies (excluding Beacons)"],
        ["One Man's Trash", "Collect all story items"],
        ["One Of Those Days", "Stay Enraged for 20 seconds"],
        ["Out Of Order", "Decomission Tom"],
        ["Perfection", "Unlock your full potential!"],
        ["Preemptive Strike", "Kill a Splitter before it manages to split itself"],
        ["Push It To The Limit", "Fill up GR-SCP so that there are no empty slots left"],
        ["R Is For Running", "Complete a level without dying"],
        ["Running Out Of Breath", "Save the residents of Sector Five "],
        ["Running Wild", "Use dash, wallrun, slide and gap jammer within 1 second"],
        ["Sticks And Stones", "Fill up your Rage Bar just by deflecting projectiles (Deflect: Absorb upgrade required)"],
        ["Strafing Run", " Playing as Hel, kill 3 enemies with Surge during one jump"],
        ["Strike", "Kill 3 enemies at once with a falling Drone"],
        ["Sword Runner", "Kill 5 enemies within 10 seconds using just your sword"],
        ["Sword To A Gunfight", "Kill 30 enemies with projectiles reflected using your sword (Reflect module required)"],
        ["Triple A", "Kill 3 enemies with a single use of Blink"],
        ["Unstoppable Force", "Kill 3 enemies with a single use of Tempest"],
        ["Up Close And Personal", "Complete \"Down Below\" without using Surge on the enemies"],
        ["Upgrades Not Mandatory", "Kill 10 enemies in a row without using Sensory Boost"],
        ["Wallrunner", "Kill 74 enemies right after jumping off a wall"],
        ["Wave Of Mutilation", "Kill 3 enemies with a single use of Surge"],
        ["Where Are My Keys", "Kill 1000 enemies"],
        ["Why Not Both", "Use 2 different special abilities within 10 seconds"],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 2 hidden Ghostrunner achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["WhereHeStood", "Where He Stood"],
        ["Scrapped", "Scrapped"],
    ];

    assert.strictEqual(names.length, 2, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
