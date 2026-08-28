import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/no-mans-sky.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 275850 (fetched through this app's own services/steamApi.js) - all 27 ship a real, official Steam description. No Man's Sky
// has no Steam-hidden achievements.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const noMansSky = getPlannerData("no-mans-sky");

test("getPlannerData('no-mans-sky') returns real planner data with 27 curated achievements", () => {

    assert.ok(noMansSky, "expected real planner data for no-mans-sky");
    assert.ok(Array.isArray(noMansSky.achievements));
    assert.strictEqual(noMansSky.achievements.length, 27);

});

test("every No Man's Sky achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = noMansSky.achievements.map(a => a.id);
    const apinames = noMansSky.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every No Man's Sky achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of noMansSky.achievements) {

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

test("every one of the 27 official No Man's Sky achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Scanner Darkly", "Attain ‘Naturalist’ status in Planet Zoology Scanned"],
        ["The Stars, Like Dust", "Attain 'Trailblazer' status in Space Exploration"],
        ["Foundation", "Attain ‘Entrepreneur’ status in Most Units Accrued"],
        ["Babel-17", "Attain ‘Confused’ status in Words Collected"],
        ["Contact", "Attain ‘Known’ status in Alien Colonist Encounters"],
        ["Use of Weapons", "Attain ‘Novice’ status in Ships Destroyed"],
        ["The Star Beast", "Attain ‘Archivist’ status in Planet Zoology Scanned"],
        ["The Longest Voyage", "Attain 'Pioneer' status in Space Exploration"],
        ["The Space Merchants", "Attain ‘Trader’ status in Most Units Accrued"],
        ["The Languages of Pao", "Attain ‘Interpreter’ status in Words Collected"],
        ["Who Goes There?", "Attain ‘Diplomat’ status in Alien Colonist Encounters"],
        ["Pattern for Conquest", "Attain ‘Notorious’ status in Ships Destroyed"],
        ["Stranger in a Strange Land", "Attain ‘Robust’ status in Extreme Survival"],
        ["Symphony For A Lost Traveler", "Attain ‘Nomad’ status in On-foot Exploration"],
        ["Galapagos", "Attain ‘Encyclopedia’ status in Planet Zoology Scanned"],
        ["A Space Odyssey", "Attain ‘Discoverer’ status in Space Exploration"],
        ["The Diamond Age", "Attain ‘Magnate’ status in Most Units Accrued"],
        ["Citizen of the Galaxy", "Attain ‘Babelfish’ status in Words Collected"],
        ["What Mad Universe", "Attain ‘Ambassador’ status in Alien Colonist Encounters"],
        ["The Forever War", "Attain ‘Legend’ status in Ships Destroyed"],
        ["The Sentinel", "Attain ‘Everlasting’ status in Extreme Survival"],
        ["Have Spacesuit - Will Travel", "Attain ‘Adventurer’ status in On-foot Exploration"],
        ["Cradle", "Claim a Base or Buy a Freighter"],
        ["Navigators", "Build an Exocraft"],
        ["Reunion", "Visit another Player's Base"],
        ["Take a Deep Breath", "Reach the Centre of the Galaxy in Survival Mode"],
        ["To Live Forever", "Reach the Centre of the Galaxy in Permadeath Mode"]
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = noMansSky.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
