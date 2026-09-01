import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ozymandias-bronze-age-empire-sim.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1768280 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ozymandias-bronze-age-empire-sim");

test("getPlannerData('ozymandias-bronze-age-empire-sim') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for ozymandias-bronze-age-empire-sim");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Ozymandias: Bronze Age Empire Sim achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Ozymandias: Bronze Age Empire Sim achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 Ozymandias: Bronze Age Empire Sim achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Assyrians on Fertile Crescent", "Win as Assyrians on Fertile Crescent at Scholar difficulty or higher"],
        ["Assyrians on Near East", "Win as Assyrians on Near East at Scholar difficulty or higher"],
        ["Athens on Greece", "Win as Athens on Greece at Scholar difficulty or higher"],
        ["Babylonians on Fertile Crescent", "Win as Babylonians on Fertile Crescent at Scholar difficulty or higher"],
        ["Babylonians on Mediterranean", "Win as Babylonians on Mediterranean at Scholar difficulty or higher"],
        ["Babylonians on Near East", "Win as Babylonians on Near East at Scholar difficulty or higher"],
        ["Ban Chiang on Asia", "Win as Ban Chiang on Asia at Scholar difficulty or higher"],
        ["Britons on Mediterranean", "Win as Britons on Mediterranean at Scholar difficulty or higher"],
        ["Canaanites on Fertile Crescent", "Win as Canaanites on Fertile Crescent at Scholar difficulty or higher"],
        ["Canaanites on Near East", "Win as Canaanites on Near East at Scholar difficulty or higher"],
        ["Carthaginians on Mediterranean", "Win as Carthaginians on Mediterranean at Scholar difficulty or higher"],
        ["Celts on Mediterranean", "Win as Celts on Mediterranean at Scholar difficulty or higher"],
        ["Chu on China", "Win as Chu on China at Scholar difficulty or higher"],
        ["Cimmerians on Mediterranean", "Win as Cimmerians on Mediterranean at Scholar difficulty or higher"],
        ["Dholavira on Indus Valley", "Win as Dholavira on Indus Valley at Scholar difficulty or higher"],
        ["Dong Son on Asia", "Win as Dong Son on Asia at Scholar difficulty or higher"],
        ["Egyptians on Mediterranean", "Win as Egyptians on Mediterranean at Scholar difficulty or higher"],
        ["Egyptians on Near East", "Win as Egyptians on Near East at Scholar difficulty or higher"],
        ["Elamites on Fertile Crescent", "Win as Elamites on Fertile Crescent at Scholar difficulty or higher"],
        ["Elamites on Near East", "Win as Elamites on Near East at Scholar difficulty or higher"],
        ["Gauls on Mediterranean", "Win as Gauls on Mediterranean at Scholar difficulty or higher"],
        ["Gojoseon on Asia", "Win as Gojoseon on Asia at Scholar difficulty or higher"],
        ["Harappans on Asia", "Win as Harappans on Asia at Scholar difficulty or higher"],
        ["Harappans on Indus Valley", "Win as Harappans on Indus Valley at Scholar difficulty or higher"],
        ["Hittites on Fertile Crescent", "Win as Hittites on Fertile Crescent at Scholar difficulty or higher"],
        ["Hittites on Mediterranean", "Win as Hittites on Mediterranean at Scholar difficulty or higher"],
        ["Hittites on Near East", "Win as Hittites on Near East at Scholar difficulty or higher"],
        ["Huns on Asia", "Win as Huns on Asia at Scholar difficulty or higher"],
        ["Iolcos on Greece", "Win as Iolcos on Greece at Scholar difficulty or higher"],
        ["Jin on China", "Win as Jin on China at Scholar difficulty or higher"],
        ["Kosala on Ganges Plain", "Win as Kosala on Ganges Plain at Scholar difficulty or higher"],
        ["Kuru on Asia", "Win as Kuru on Asia at Scholar difficulty or higher"],
        ["Kuru on Ganges Plain", "Win as Kuru on Ganges Plain at Scholar difficulty or higher"],
        ["Mitanni on Near East", "Win as Mitanni on Near East at Scholar difficulty or higher"],
        ["Mohenjo-Dara on Indus Valley", "Win as Mohenjo-Dara on Indus Valley at Scholar difficulty or higher"],
        ["Mycenaeans on Greece", "Win as Mycenaeans on Greece at Scholar difficulty or higher"],
        ["Mycenaeans on Mediterranean", "Win as Mycenaeans on Mediterranean at Scholar difficulty or higher"],
        ["Mycenaeans on Near East", "Win as Mycenaeans on Near East at Scholar difficulty or higher"],
        ["Orchomenos on Greece", "Win as Orchomenos on Greece at Scholar difficulty or higher"],
        ["Oxus on Asia", "Win as Oxus on Asia at Scholar difficulty or higher"],
        ["Pancala on Ganges Plain", "Win as Pancala on Ganges Plain at Scholar difficulty or higher"],
        ["Polynesians on Asia", "Win as Polynesians on Asia at Scholar difficulty or higher"],
        ["Pylos on Greece", "Win as Pylos on Greece at Scholar difficulty or higher"],
        ["Qi on China", "Win as Qi on China at Scholar difficulty or higher"],
        ["Scythians on Mediterranean", "Win as Scythians on Mediterranean at Scholar difficulty or higher"],
        ["Song on China", "Win as Song on China at Scholar difficulty or higher"],
        ["Sparta on Greece", "Win as Sparta on Greece at Scholar difficulty or higher"],
        ["Thebes on Greece", "Win as Thebes on Greece at Scholar difficulty or higher"],
        ["Videha on Ganges Plain", "Win as Videha on Ganges Plain at Scholar difficulty or higher"],
        ["Wu on China", "Win as Wu on China at Scholar difficulty or higher"],
        ["Zhou on Asia", "Win as Zhou on Asia at Scholar difficulty or higher"],
        ["Zhou on China", "Win as Zhou on China at Scholar difficulty or higher"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
