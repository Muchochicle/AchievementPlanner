import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/phasmophobia.json - 54 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 739630 (fetched through this app's own services/steamApi.js) -
// 48 of 54 ship a real, official Steam description. The six hidden
// achievements (Work Experience, They're here, The Bait, Doom Slayed,
// Flawless Execution, Escape Artist) are described publicly nowhere;
// their descriptions here are curatorial, cross-checked against
// community achievement guides and the apiname strings.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field.
const phasmophobia = getPlannerData("phasmophobia");

test("getPlannerData('phasmophobia') returns real planner data with 54 curated achievements", () => {

    assert.ok(phasmophobia, "expected real planner data for phasmophobia");
    assert.ok(Array.isArray(phasmophobia.achievements));
    assert.strictEqual(phasmophobia.achievements.length, 54);

});

test("every Phasmophobia achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = phasmophobia.achievements.map(a => a.id);
    const apinames = phasmophobia.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Phasmophobia achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of phasmophobia.achievements) {

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

test("every one of the 48 officially-described Phasmophobia achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["III", "Reach Prestige III"],
        ["Banshee Discovered", "Successfully identify your first Banshee and survive"],
        ["Demon Discovered", "Successfully identify your first Demon  and survive"],
        ["Deogen Discovered", "Successfully identify your first Deogen and survive"],
        ["Goryo Discovered", "Successfully identify your first Goryo and survive"],
        ["Hantu Discovered", "Successfully identify your first Hantu and survive"],
        ["Jinn Discovered", "Successfully identify your first Jinn and survive"],
        ["Mare Discovered", "Successfully identify your first Mare and survive"],
        ["Moroi Discovered", "Successfully identify your first Moroi and survive"],
        ["Myling Discovered", "Successfully identify your first Myling and survive"],
        ["Obake Discovered", "Successfully identify your first Obake and survive"],
        ["Oni Discovered", "Successfully identify your first Oni and survive"],
        ["Onryo Discovered", "Successfully identify your first Onryo and survive"],
        ["Phantom Discovered", "Successfully identify your first Phantom and survive"],
        ["Poltergeist Discovered", "Successfully identify your first Poltergeist and survive"],
        ["Raiju Discovered", "Successfully identify your first Raiju and survive"],
        ["Revenant Discovered", "Successfully identify your first Revenant and survive"],
        ["Shade Discovered", "Successfully identify your first Shade and survive"],
        ["Spirit Discovered", "Successfully identify your first Spirit and survive"],
        ["Thaye Discovered", "Successfully identify your first Thaye and survive"],
        ["The Mimic Discovered", "Successfully identify The Mimic for the first time"],
        ["The Twins Discovered", "Successfully identify The Twins for the first time"],
        ["Wraith Discovered", "Successfully identify your first Wraith and survive"],
        ["Yokai Discovered", "Successfully identify your first Yokai and survive"],
        ["Yurei Discovered", "Successfully identify your first Yurei and survive"],
        ["I", "Reach Prestige I"],
        ["II", "Reach Prestige II"],
        ["Boss", "Complete 100 contracts"],
        ["Professional", "Complete 50 contracts"],
        ["Rookie", "Complete 10 contracts"],
        ["Chump Change", "Spend $1"],
        ["Fat Stack", "Spend $10,000"],
        ["Cash Cow", "Spend $50,000"],
        ["Break The Bank", "Spend $100,000"],
        ["No More Training Wheels", "Complete Training"],
        ["Extra Mile", "Complete 50 optional objectives"],
        ["Bronze Hunter", "Obtain the Bronze Apocalypse Trophy"],
        ["Silver Hunter", "Obtain the Silver Apocalypse Trophy"],
        ["Gold Hunter", "Obtain the Gold Apocalypse Trophy"],
        ["Bare Essentials", "Unlock all tier one equipment"],
        ["Tools of the Trade", "Unlock all tier two equipment"],
        ["Fully Loaded", "Unlock all tier three equipment"],
        ["Director", "Create a custom difficulty"],
        ["Dedicated", "Complete 30 daily tasks"],
        ["Devoted", "Complete 10 weekly tasks"],
        ["Challenger Approaching", "Complete a weekly challenge mode"],
        ["Rise to the Challenge", "Complete the weekly challenge mode 5 times"],
        ["Taking All Challenges", "Complete the weekly challenge mode 10 times"]
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACH_WITNESS_POLTERGEIST_ABILITY",
        "ACH_COMPLETE_YOUR_FIRST_CONTRACT",
        "ACH_GET_KILLED_BY_A_BANSHEE_IN_MULTIPLAYER",
        "ACH_DOOM_SLAYED",
        "ACH_COMPLETE_A_PERFECT_GAME",
        "ACH_ESCAPE_A_REVENANT"
    ]);

    assert.strictEqual(hiddenApinames.size, 6, "sanity check - Phasmophobia has 6 hidden achievements");

    const dataPairs = phasmophobia.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the six hidden Phasmophobia achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACH_WITNESS_POLTERGEIST_ABILITY", "They're here"],
        ["ACH_COMPLETE_YOUR_FIRST_CONTRACT", "Work Experience"],
        ["ACH_GET_KILLED_BY_A_BANSHEE_IN_MULTIPLAYER", "The Bait"],
        ["ACH_DOOM_SLAYED", "Doom Slayed"],
        ["ACH_COMPLETE_A_PERFECT_GAME", "Flawless Execution"],
        ["ACH_ESCAPE_A_REVENANT", "Escape Artist"]
    ];

    assert.strictEqual(names.length, 6, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = phasmophobia.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
