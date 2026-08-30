import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/watch-dogs.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 243470 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("watch-dogs");

test("getPlannerData('watch-dogs') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for watch-dogs");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Watch Dogs achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Watch Dogs achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Watch Dogs achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Basest Base", "Complete every Gang Hideout"],
        ["Black Hat Trick", "Kill 3 enemies with a single IED"],
        ["Bookmarked", "Tag 100 enemies"],
        ["Clear Signals", "Unlock every ctOS Tower"],
        ["Communication Fail", "Using non-lethal takedown, stop 10 civilians from calling to report you"],
        ["Darkness Looms", "Complete the final mission of the Missing Persons Investigation"],
        ["Disk Space Full", "Unlock every song with the SongSneak app"],
        ["End of Line", "Complete 40 Fixer Contracts"],
        ["Enforcer", "Use the Crime Detection System to take down 20 confirmed criminals"],
        ["Escape Loop", "Escape 15 police chases"],
        ["Family Man", "Complete Act 1"],
        ["Free Radical", "Escape a level 5 police chase"],
        ["Freeware", "Unlock every Skill in the Skills Tree"],
        ["Geolocated", "Check in at every Hotspot"],
        ["Hackification", "Invade and successfully hack 10 enemy Fixers in Online Hacking"],
        ["Hard Crash", "Perform 10 vehicle take downs"],
        ["Hardware Fail", "Shoot out a tire on 15 different vehicles"],
        ["Hello World", "Take down Maurice"],
        ["Log Off", "Complete Act 5"],
        ["Magic Smoke", "Kill 4 enemies within a single instance of Focus"],
        ["One Down, One to Go", "Complete Act 3"],
        ["Peephole", "Complete every Privacy Invasion"],
        ["Piggyback", "Invade and successfully observe 10 enemy Fixers in Online Tailing"],
        ["Power Cycle", "Participate in 5 different City Games"],
        ["Read-only", "Complete the final mission in the QR Code Investigation"],
        ["Revoking Client Privileges", "Complete the final mission in the Human Traffic Investigation"],
        ["Road Rage", "Complete every Criminal Convoy"],
        ["Sanity Check", "Collect all 8 Burner Phones"],
        ["Saturday Night Special", "Complete the final mission in the Weapons Trade Investigation"],
        ["Scanproof", "Escape a level 5 police scan"],
        ["Social Lubricant", "Complete level 10 against all 3 Drinking Game opponents"],
        ["Stealth Cookie", "Complete an Online Tailing without being detected"],
        ["Superhighway", "Complete 10 Public Online Races"],
        ["System Mangler", "Complete every ctOS Breach"],
        ["T-Bone: Friends in Need", "Complete Act 1"],
        ["T-Bone: Full Circuit", "Complete 29 driving missions"],
        ["T-Bone: Looking For Trouble", "Complete all side investigations"],
        ["T-Bone: Mob Ruled", "Complete 20 Chicago South Club contracts"],
        ["T-Bone: Negative Eugenics", "Kill 4 enemies at once by blowing up the RC Car"],
        ["T-Bone: No Easy Fix", "Complete Act 2"],
        ["T-Bone: Pest Control", "Complete Act 3"],
        ["T-Bone: Second Amendment", "Complete 20 Militia contracts"],
        ["T-Bone: Tag Team", "Complete 10 coop missions"],
        ["T-Bone: Unfixable", "Complete 20 Fixer contracts"],
        ["They Call Him The Vigilante", "Complete every Investigation"],
        ["Traced", "Get tailed 5 times"],
        ["Vengeance", "Complete Act 4"],
        ["White Rabbit Object", "Escape 15 police scans"],
        ["Who Is Raymond Kenney?", "Complete Act 2"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
