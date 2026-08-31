import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crysis-remastered.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1715130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crysis-remastered");

test("getPlannerData('crysis-remastered') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for crysis-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Crysis Remastered achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Crysis Remastered achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Crysis Remastered achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Little Trouble Parking", "Discover the fate of the Lusca's Call"],
        ["Catch This!", "Kill 10 enemies by throwing an object at them."],
        ["Choke Hold", "Kill 20 enemies with a grab."],
        ["Close Encounter", "Secure victory in the Battle of Lingshan"],
        ["Cool In A Crysis", "Complete the game on Hard or Delta difficulty"],
        ["Crysis Controlled", "Complete the game on any difficulty"],
        ["Delta: Act I", "Complete 'Contact', 'Recovery' and 'Relic' on Delta difficulty"],
        ["Delta: Act II", "Complete 'Assault', 'Onslaught' and 'Awakening' on Delta difficulty"],
        ["Delta: Act III", "Complete 'Core', 'Paradise Lost', 'Exodus', 'Ascension' and 'Reckoning' on Delta difficulty"],
        ["Easy Darlin'", "Rescue the hostage"],
        ["Empty Platform", "Secure the train station"],
        ["Enjoy The Fireworks", "Destroy the cruiser"],
        ["Expedition Team", "Escort Prophet to safety"],
        ["Following Orders", "Complete 4 Secondary Objectives"],
        ["Going Underground", "Enter the mines"],
        ["I'm A Marine, Son!", "Help the marines evacuate"],
        ["I'm Coming Home", "Escape the mysterious structure under the mountain"],
        ["It's On Like General Kyong", "Defeat General Kyong"],
        ["Keen Observer", "Tag 30 enemies with the binoculars."],
        ["Knock-off Knockout", "Kill a Nano-Suit soldier with a Strength Punch."],
        ["Livin' Up To Your Name", "Board the VTOL for extraction"],
        ["Long Distance Relationship", "Kill an enemy from 200 metres away."],
        ["Marathon Man", "Speed-sprint a total of 3 km."],
        ["Nano Ninja", "Perform 5 consecutive kills without being spotted by an enemy."],
        ["No Fly Zone", "Destroy 5 helicopters."],
        ["One Careful Owner", "Reach the end of the mission 'Onslaught' in the same tank you started it with."],
        ["Perfect, Soldier!", "Complete all Secondary Objectives"],
        ["Pro-Aircraft", "Destroy all AA guns around the harbor"],
        ["Something For Every Occasion", "Use all weapon attachments"],
        ["Special Forces", "Kill 200 enemies"],
        ["Strickland Would Be Proud", "Defeat the flight deck invader"],
        ["Tank Buster", "Destroy 5 enemy tanks."],
        ["Team Raptor", "Kill 400 enemies"],
        ["This Is My Rifle", "Customize a weapon to use all 5 modification points"],
        ["Very Strange Readings", "Infiltrate the excavation site"],
        ["Weapons Master", "Get a kill with all 9 weapons."],
        ["Without Question", "Complete 8 Secondary Objectives"],
        ["You Knew, Didn't You?", "Regroup with Prophet upriver"],
        ["You're On Your Own", "Proceed to the mining complex"],
        ["Zoology", "Pick up an animal."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
