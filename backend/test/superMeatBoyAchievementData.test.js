import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/super-meat-boy.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 40800 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("super-meat-boy");

test("getPlannerData('super-meat-boy') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for super-meat-boy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Super Meat Boy achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Super Meat Boy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Super Meat Boy achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["(=+66&1$ ", "8*(@31^ "],
        ["*|-0&&", "8*(@31^ "],
        ["&*>?1$ ", "8*(@31^ "],
        ["^**5%_=+12 ", "8*(@31^ "],
        ["Accidental Arsonist  ", "Unlock Mr. Minecraft (100 bandages) "],
        ["Blood Clot Boy", "Complete the Hospital Dark World without dying "],
        ["Brimstone Boy ", "Complete Hell without dying "],
        ["Dead Boy ", "Complete The End without dying "],
        ["Demon Boy", "Complete the Hell Dark World without dying."],
        ["Dr.Fetus Boy", "Complete The End Dark World without dying"],
        ["Girl Boy ", "Complete the Cotton Alley without dying "],
        ["Golden God ", "100% the game "],
        ["I Have Crabs! ", "Unlock the Head Crab (10 bandages) "],
        ["I Smell something Fishy... ", "Unlock Naija (50 bandages) "],
        ["Impossible Boy", "Complete The Cotton Alley Dark World without dying"],
        ["Living In the Past ", "Complete 5 retro warp zones "],
        ["Maggot Boy ", "Complete the Rapture without dying "],
        ["Medium", "Beat The Salt Factory (light and dark worlds) within the par time."],
        ["Medium Rare", "Beat The Hospital (light and dark worlds) within the par time."],
        ["Medium Well", "Beat Hell (light and dark worlds) within the par time."],
        ["Metal Head ", "Unlock the Machinarium Robot (30 bandages) "],
        ["Missile Boy", "Complete the Salt Factory Dark World without dying "],
        ["MS PAINT RULZ! ", "Unlock RunMan (70 bandages) "],
        ["N&8^2^%$1`` ", "8*(@31^ "],
        ["N#7*<1!23 ", "8*(@31^ "],
        ["Needle Boy ", "Complete the Hospital without dying "],
        ["Nostalgia ", "Unlock a single retro warp zone "],
        ["Old School ", "Complete 10 retro warp zones "],
        ["Rare", "Beat The Forest (light and dark worlds) within the par time."],
        ["Retro Rampage ", "Complete all retro warp zones "],
        ["Salt Boy ", "Complete the Salt Factory without dying "],
        ["Seneca Falls ", "Complete Cotton Alley's dark world (dying is allowed)."],
        ["Squirrel Boy", "Complete the Forest Dark World without dying "],
        ["Suffragette ", "Complete Cotton Alley's light world (dying is allowed)."],
        ["The Bootlicker ", "Unlock Jill "],
        ["The Commander ", "Unlock CommanderVideo "],
        ["The End ", "Beat the light world "],
        ["The Fly guy ", "Unlock Flywrench "],
        ["The Golden Gift!", "Complete all levels in \"The Kids Xmas\" chapter in super meat world IN ONE PLAY SESSION."],
        ["The Jump man ", "Unlock Ogmo "],
        ["The Kid ", "Unlock the Kid "],
        ["The Kids Xmas!", "Complete a single level of \"The Kids Xmas\" chapter in super meat world"],
        ["The Real End ", "Beat the dark world "],
        ["Vx6 ", "Unlock Captain Viridian (90 bandages) "],
        ["Well Done", "Beat The Rapture (light and dark worlds) within the par time."],
        ["Well look at you!", "Unlock Tofu Boy - on the character select screen, type 'petaphile'."],
        ["Wood Boy ", "Complete the Forest without dying "],
        ["Zombie Boy", "Complete the Rapture Dark World without dying"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
