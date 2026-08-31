import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/disc-room.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1229580 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("disc-room");

test("getPlannerData('disc-room') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for disc-room");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Disc Room achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Disc Room achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Disc Room achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AGAIN", "START HARD MODE"],
        ["BIG BANG", "DEFEAT THE ULTIMATE GATEKEEPER"],
        ["CELESTIAL BODY", "DEFEAT THE CARNIVOROUS GATEKEEPER"],
        ["ENIGMA", "FOLLOW THE PATH"],
        ["EXPLORER I", "EXPLORE ALL ROOMS"],
        ["EXPLORER II", "EXPLORE ALL HARD ROOMS"],
        ["FLOORED", "???? THE ????"],
        ["GOLD I", "DISCOVER THE FIRST GOLDEN ROOM"],
        ["GOLD II", "DISCOVER THE SECOND GOLDEN ROOM"],
        ["GOLD III", "DISCOVER THE THIRD GOLDEN ROOM"],
        ["GOLD IV", "DISCOVER THE FOURTH GOLDEN ROOM"],
        ["GOTTA CATCH 'EM ALL", "DIE FROM ALL DISCS"],
        ["HIGH HELL", "SURVIVE 20 SECONDS IN ANY HARD ROOM"],
        ["I AM THE DISC", "SURVIVE 10 SECONDS IN EVERY HARD ROOM"],
        ["I AM THE ZONE", "SURVIVE 20 SECONDS IN EVERY ROOM"],
        ["I CAME I SAWED I CONQUERED", "COMPLETE HARD MODE"],
        ["IN THE ZONE", "SURVIVE 20 SECONDS IN EVERY ROOM IN ONE ZONE"],
        ["LET IT RIP", "DIE FROM ALL DISCS IN ONE ZONE"],
        ["MINIT", "SURVIVE 60 SECONDS IN ANY ROOM"],
        ["MULTICASKET", "DIE FROM 4 DIFFERENT DISCS IN ONE LIFE"],
        ["MULTITASKER", "DEFEAT THE ULTIMATE GATEKEEPER USING EVERY ABILITY"],
        ["PIONEER", "EXPLORE ALL ???? ROOMS"],
        ["PITCH BLACK", "DEFEAT THE PHANTOM GATEKEEPER"],
        ["POWER SURGE", "UNLOCK ALL 6 ABILITIES"],
        ["RAGEQUIT", "QUIT TO MAIN MENU WITHIN 2 SECONDS AFTER DYING"],
        ["SKELETON REVIVAL", "DEFEAT AND REVIVE AN ANTIBODY"],
        ["SPAWN KILL", "SURVIVE 0 SECONDS OR LESS"],
        ["SPEED DEMON", "HOLD DOWN FFW FOR 10 SECONDS STRAIGHT"],
        ["STRONG SCIENCE", "DEFEAT THE ARMORED GATEKEEPER"],
        ["TELEPORTER ACCIDENT", "END A RUN FROM THE MAP"],
        ["THE WALLS HAVE EYES", "FACE THE GOLDEN CARCASS"],
        ["THERE’S ENOUGH FOR EVERYBODY", "FEED ???? 4 ????"],
        ["VIOLENT NATURE", "DEFEAT THE OVERGROWN GATEKEEPER"],
        ["VOYAGER", "UNCOVER THE GOLDEN MYSTERY"],
        ["WHO’S COUNTING? ", "WALK 10K STEPS"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
