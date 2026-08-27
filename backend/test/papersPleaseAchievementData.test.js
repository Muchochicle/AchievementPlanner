import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/papers-please.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 239030 (fetched through this app's own services/steamApi.js) - the 7
// token achievements ship a real, official Steam description. Too
// Honest, Hired Rifle, Member of the Order, Snowier Pastures, Glory to
// Arstotzka, and Worker's Best are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions (cross-checked against
// multiple independent Steam Community guides), kept deliberately
// mechanical rather than narrating story beats. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const papersPlease = getPlannerData("papers-please");

test("getPlannerData('papers-please') returns real planner data with 13 curated achievements", () => {

    assert.ok(papersPlease, "expected real planner data for papers-please");
    assert.ok(Array.isArray(papersPlease.achievements));
    assert.strictEqual(papersPlease.achievements.length, 13);

});

test("every Papers, Please achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = papersPlease.achievements.map(a => a.id);
    const apinames = papersPlease.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Papers, Please achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of papersPlease.achievements) {

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

test("every one of the 7 officially-described Papers, Please achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden ending/apartment achievements are excluded here -
    // Steam never exposes a public description for them - and covered by
    // their own dedicated test below instead.
    const officialAchievements = [
        ["Antegria Token", "Collect the hidden Antegria Token"],
        ["Republia Token", "Collect the hidden Republia Token"],
        ["Impor Token", "Collect the hidden Impor Token"],
        ["Obristan Token", "Collect the hidden Obristan Token"],
        ["Kolechia Token", "Collect the hidden Kolechia Token"],
        ["Arstotzka Token", "Collect the hidden Arstotzka Token"],
        ["United Federation Token", "Collect the hidden United Federation Token"]
    ];

    assert.strictEqual(officialAchievements.length, 7, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Too Honest", "Hired Rifle", "Member of the Order", "Snowier Pastures", "Glory to Arstotzka", "Worker's Best"
    ]);

    const dataPairs = papersPlease.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const tooHonest = papersPlease.achievements.find(a => a.apiname === "ACH_END_TURNEDOVEREZICDOCS");
    const hiredRifle = papersPlease.achievements.find(a => a.apiname === "ACH_END_KILLEDTARGET");
    const memberOfTheOrder = papersPlease.achievements.find(a => a.apiname === "ACH_END_HELPEZICHOLDFIRE");
    const snowierPastures = papersPlease.achievements.find(a => a.apiname === "ACH_END_ESCAPE");
    const gloryToArstotzka = papersPlease.achievements.find(a => a.apiname === "ACH_END_IGNOREEZIC");
    const workersBest = papersPlease.achievements.find(a => a.apiname === "ACH_APT_CLASS5");

    assert.ok(tooHonest && tooHonest.name === "Too Honest" && tooHonest.description.length > 0);
    assert.ok(hiredRifle && hiredRifle.name === "Hired Rifle" && hiredRifle.description.length > 0);
    assert.ok(memberOfTheOrder && memberOfTheOrder.name === "Member of the Order" && memberOfTheOrder.description.length > 0);
    assert.ok(snowierPastures && snowierPastures.name === "Snowier Pastures" && snowierPastures.description.length > 0);
    assert.ok(gloryToArstotzka && gloryToArstotzka.name === "Glory to Arstotzka" && gloryToArstotzka.description.length > 0);
    assert.ok(workersBest && workersBest.name === "Worker's Best" && workersBest.description.length > 0);

});
