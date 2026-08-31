import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/grip-combat-racing.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 396900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("grip-combat-racing");

test("getPlannerData('grip-combat-racing') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for grip-combat-racing");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every GRIP: Combat Racing achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every GRIP: Combat Racing achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 GRIP: Combat Racing achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bullet", "Average a speed 700kmph+ in a race"],
        ["Combat Racing Legend", "Finish the campaign"],
        ["Death from above", "Hit an opponent with a Scorpion launched when airborne"],
        ["Demolition man", "Destroyed some scenery"],
        ["Double Kill", "Destroy 2 players without dying"],
        ["Driller killer", "Hit 3 or more opponents with a single Hydra"],
        ["Dropped your load", "Hit an opponent with a full round of Raptor bullets"],
        ["Duck hunt", "Hit an airborne opponent with the Scorpion"],
        ["Endurance", "Finish a 20 lap race"],
        ["Got a GRIP", "Finish the tutorial"],
        ["GRIP Addict", "Race 250 laps in total"],
        ["GRIP Master", "Race 1000 laps in total"],
        ["GRIP Rookie", "Race 50 laps in total"],
        ["I did it my way", "Create a custom tournament"],
        ["It's a play on words. Get it?", "Finish a carkour course"],
        ["More than a pink slip", "Destroy an opponent"],
        ["Participated in a death ballet", "Finish an arena match"],
        ["Penta Kill", "Destroy 5 players without dying"],
        ["Playground bound", "Finish all carkour courses"],
        ["Quad Kill", "Destroy 4 players without dying"],
        ["Serpent's kiss", "Hit only vehicles with every Hydra missile in a salvo"],
        ["Skewered", "Hit 3 or more opponents with a single charged RamRaider"],
        ["Skill or luck?", "Finish 1st 3 races in a row"],
        ["Skillz", "Finish 1st 6 races in a row"],
        ["Stolen victory", "Win a race by passing the leader in the last second"],
        ["Stunt double", "Pull a wheelie on the ceiling"],
        ["There are no cars left to kill, so chill", "Destroy 250 opponents"],
        ["There's a first for everything", "Finish 1st in a race"],
        ["Triple Kill", "Destroy 3 players without dying"],
        ["Twisted", "Perform a double-somersault when airborne"],
        ["Underdog", "Go from 10th to 1st within one lap"],
        ["Vehicular genocide", "Destroy 100 opponents"],
        ["Vehicular homicide", "Destroy 50 opponents"],
        ["We've gone plaid", "Hit Mach 1 in a race"],
        ["You did a thing", "Finish a race"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
