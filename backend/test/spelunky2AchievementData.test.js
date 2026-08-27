import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/spelunky-2.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 418530 (fetched through this app's own services/steamApi.js) - 17 of
// 32 ship a real, official Steam description. The 15 hidden ones are
// hidden achievements Steam never describes publicly (confirmed via
// the same API call) - their descriptions here are curatorial
// summaries of their real, community-documented unlock conditions,
// sourced from independent, cross-agreeing achievement guides.
// difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const spelunky2 = getPlannerData("spelunky-2");

test("getPlannerData('spelunky-2') returns real planner data with 32 curated achievements", () => {

    assert.ok(spelunky2, "expected real planner data for spelunky-2");
    assert.ok(Array.isArray(spelunky2.achievements));
    assert.strictEqual(spelunky2.achievements.length, 32);

});

test("every Spelunky 2 achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = spelunky2.achievements.map(a => a.id);
    const apinames = spelunky2.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every Spelunky 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of spelunky2.achievements) {

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

test("every one of the 17 officially-described Spelunky 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 15 hidden achievements are excluded here - Steam never
    // exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["The Full Spelunky", "Obtain all other trophies."],
        ["You Got This", "Unlock the entrance."],
        ["Feels Good", "Make it past 1-4 in a non-seeded run."],
        ["Journeyman", "Complete the game in a non-seeded run."],
        ["Ironman", "Complete the game without using shortcuts in a non-seeded, single-player run."],
        ["Speedlunky", "Complete the game in 10 minutes or less without shortcuts in a non-seeded, single-player run."],
        ["Low Scorer", "Complete the game without collecting any treasure and without using shortcuts in a non-seeded, single-player run."],
        ["Millionaire", "End a run with $1,000,000 or more in a non-seeded, single-player run."],
        ["Seen a Lot", "Complete 50% of the Journal or more."],
        ["Seen It All", "Complete the Journal."],
        ["Mama's Little Helper", "Unlock the first shortcut."],
        ["Mama's Big Helper", "Unlock all three shortcuts."],
        ["Track Star", "Finish the Tutorial Speedrun in under 30 seconds."],
        ["Arena Champion", "Win a First-to-Five Deathmatch against three bots using the Default ruleset."],
        ["Turkey Whisperer", "Bring two turkeys to Yang in a non-seeded run."],
        ["Support a Local Business", "Buy out Yang's Pet Shop in a non-seeded run."],
        ["VIP", "Enter Madame Tusk's Palace of Pleasure as a guest (in a non-seeded run)."]
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Skills Improving", "Persistent", "Pilgrim", "Master", "Awakened", "Excavator", "Torchbearer",
        "Survivor", "Shadow Shopper", "Legendary", "Her Favorite", "Divine Right", "A Second Chance",
        "Chosen One", "Parenthood"
    ]);

    const dataPairs = spelunky2.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 15 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden = [
        ["C356BD3F920AA007", "Skills Improving"],
        ["CD2247AB88095173", "Persistent"],
        ["5C97977A1C41E1D8", "Pilgrim"],
        ["12BB5BD07F56194C", "Master"],
        ["EA488CC02AD233FD", "Awakened"],
        ["1BFD11B72624F4C6", "Excavator"],
        ["887316D012E74D3B", "Torchbearer"],
        ["5B7F2E4EAEC18E51", "Survivor"],
        ["ECBEF23A87A0737A", "Shadow Shopper"],
        ["B7EFFD56C8457082", "Legendary"],
        ["061E03E6CA94CA71", "Her Favorite"],
        ["4F080C487BB27C26", "Divine Right"],
        ["112E2F91AC19A57A", "A Second Chance"],
        ["710891CB8FE6D822", "Chosen One"],
        ["C999E58F1EF15759", "Parenthood"]
    ];

    assert.strictEqual(hidden.length, 15, "sanity check on this test's own reference list");

    for (const [apiname, name] of hidden) {

        const achievement = spelunky2.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
