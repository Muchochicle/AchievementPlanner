import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dome-keeper.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1637320 (fetched through this app's own services/steamApi.js) - 36 of
// 47 ship a real, official Steam description. The 11 hidden achievements
// are described publicly nowhere; their descriptions here are curatorial
// summaries of their real unlock conditions, cross-checked against a
// Steam Community 100% guide and the Last Word on Gaming achievements
// guide. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const domeKeeper = getPlannerData("dome-keeper");

test("getPlannerData('dome-keeper') returns real planner data with 47 curated achievements", () => {

    assert.ok(domeKeeper, "expected real planner data for dome-keeper");
    assert.ok(Array.isArray(domeKeeper.achievements));
    assert.strictEqual(domeKeeper.achievements.length, 47);

});

test("every Dome Keeper achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = domeKeeper.achievements.map(a => a.id);
    const apinames = domeKeeper.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Dome Keeper achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of domeKeeper.achievements) {

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

test("every one of the 36 officially-described Dome Keeper achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 11 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Gifts from the past", "Retrieve a relic."],
        ["Shield Completed", "Unlock every battle ability of the shield."],
        ["Land of the orbs", "Unlock the orb world."],
        ["Land of the behemoth", "Unlock the behemoth world."],
        ["Land of the stalks", "Unlock the stalk world."],
        ["Land of the Spores", "Unlock the mushroom world."],
        ["Stick them with the pointy end", "Unlock the sword dome."],
        ["Hoarder", "Hoard 8 cobalt."],
        ["Doping", "Feed 10 treats to Drillbert in one run."],
        ["Quick Finish", "Retrieve the relic within 20 minutes."],
        ["Compounding interest", "Reach a prestige multiplier of 10 in endless mode."],
        ["My name shall be known", "Win a prestige run with 1000 points or more."],
        ["A keeper of status", "Unlock the prestige mode."],
        ["Bringing home the big bucks", "Gain 200 prestige in one wave."],
        ["Half Marathon", "Travel half the length of a Marathon in one run."],
        ["Shopping Bag Conundrum", "Carry 20 resources back to the dome in one go."],
        ["We're gonna need a bigger lift", "Have 80 resources hanging in the lift."],
        ["I came prepared", "After retrieving the relic, beat the final wave without the help of the relic bomb."],
        ["The deep end", "Complete relic hunt on a large map."],
        ["The regular", "Complete relic hunt on a medium sized map."],
        ["Bite sized", "Complete relic hunt on a small map."],
        ["Take your time", "Delay a wave by more than 0.5 cycles."],
        ["Ready for Battle", "Have 200 or more shield hp ready."],
        ["Earth shattering", "Use 15 blast charges in one run."],
        ["The third eye", "Detect 15 resources with the probe in one cycle."],
        ["Waterworld", "Produce 10 water with the condenser in one run."],
        ["Transmogrification", "Perform 10 conversions in one run."],
        ["Repellent completed", "Unlock every battle ability of the repellent."],
        ["Orchard completed", "Unlock every battle ability of the orchard."],
        ["My good mule", "Have the lift transport 200 resources in one run."],
        ["Veteran Keeper", "Win 10 runs."],
        ["Rich in Fiber", "Consume a fruit that buffs you for at least 0.9 cycles."],
        ["Master of Gravity", "Unlock the Assessor."],
        ["Great-Great-Grandspheres", "Split a sphere into the 5th generation as the Assessor."],
        ["Hat Trick", "Explode 3 spheres with one activation as the Assessor."],
        ["Full Clip", "Have 6 spheres ready to fire as the Assessor."]
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "DOME_LOWHEALTH",
        "KEEPER_BOTTOM",
        "KEEPER_TIMELY",
        "MINE_ALL",
        "RUN_LOSEMANY",
        "RESOURCES_COBALTRESCUE",
        "PET_FOUND",
        "KEEPER1_SPEED",
        "KEEPER2_REFLECTIONS",
        "KEEPER2_SPHEREDURATION",
        "KEEPER2_BIGBUNDLE"
    ]);

    assert.strictEqual(hiddenApinames.size, 11, "sanity check - Dome Keeper has 11 hidden achievements");

    const dataPairs = domeKeeper.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 11 hidden Dome Keeper achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["DOME_LOWHEALTH", "Close Call"],
        ["KEEPER_BOTTOM", "Deep and Greedy"],
        ["KEEPER_TIMELY", "Precisely when I meant to"],
        ["MINE_ALL", "Thorough"],
        ["RUN_LOSEMANY", "Learning Opportunity"],
        ["RESOURCES_COBALTRESCUE", "My Savior"],
        ["PET_FOUND", "Find a Friend"],
        ["KEEPER1_SPEED", "The Need for Speed"],
        ["KEEPER2_REFLECTIONS", "Solitaire Pong"],
        ["KEEPER2_SPHEREDURATION", "Perfect Placement"],
        ["KEEPER2_BIGBUNDLE", "Bulky Goods"]
    ];

    assert.strictEqual(names.length, 11, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = domeKeeper.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
