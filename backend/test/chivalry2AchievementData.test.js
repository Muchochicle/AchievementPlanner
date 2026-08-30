import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chivalry-2.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1824220 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 41 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("chivalry-2");

test("getPlannerData('chivalry-2') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for chivalry-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every Chivalry 2 achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every Chivalry 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 Chivalry 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Avant-Garde", "Achieve 100 kills as Vanguard"],
        ["Baker's Dozen", "Kill 13 enemies with bread"],
        ["Battle Of The Bastards", "Kill an enemy wielding a bastard sword, with a bastard sword"],
        ["Brave Brave Sir Robin", "Get 50 kills in one match"],
        ["Bring Out The Big Guns", "Get 50 kills with siege weapons"],
        ["Deus Vult", "Achieve 100 kills as Knight"],
        ["Feet on the Ground", "Achieve 100 kills as Footman"],
        ["Field Medic", "Revive 10 downed teammates"],
        ["Fight In The Shade", "Fire 1000 arrows"],
        ["I got better!", "Get revived from a downed state"],
        ["Kill 10 Enemies", "Kill 10 Enemies in a Multiplayer match."],
        ["Kill 100 Enemies", "Kill 100 Enemies in a Multiplayer match."],
        ["Kill 1000 Enemies", "Kill 1000 Enemies in a Multiplayer match."],
        ["Kill 1500 Enemies", "Kill 1500 Enemies in a Multiplayer match."],
        ["Kill 2000 Enemies", "Kill 2000 Enemies in a Multiplayer match."],
        ["Kill 250 Enemies", "Kill 250 Enemies in a Multiplayer match."],
        ["Kill 50 Enemies", "Kill 50 Enemies in a Multiplayer match."],
        ["Kill 500 Enemies", "Kill 500 Enemies in a Multiplayer match."],
        ["Long Range Menace", "Kill an enemy with a projectile from over 100 meters"],
        ["Night Knight", "Get 10 unarmed kills"],
        ["Playing the wrong game", "Achieve 100 kills as Archer"],
        ["Seeing Red", "Achieve 2 kills in a row without dying while under 25 health"],
        ["The Count", "Successfully counter 200 attacks"],
        ["The Things I Do For Love", "Make an enemy fall to their death"],
        ["This Is Fine", "Die from fire"],
        ["What Do We Say To the God of Death?", "Bandage yourself 3 times in one life"],
        ["Win as Agatha 10 times", "Win as Agatha 10 times"],
        ["Win as Mason 10 times", "Win as Mason 10 times"],
        ["Win Coxwell 10 times", "Win Coxwell 10 times"],
        ["Win Coxwell 25 times", "Win Coxwell 25 times"],
        ["Win Coxwell 5 times", "Win Coxwell 5 times"],
        ["Win Dark Forest 10 times", "Win Dark Forest 10 times"],
        ["Win Dark Forest 25 times", "Win Dark Forest 25 times"],
        ["Win Dark Forest 5 times", "Win Dark Forest 5 times"],
        ["Win Lionspire 10 times", "Win Lionspire 10 times"],
        ["Win Lionspire 25 times", "Win Lionspire 25 times"],
        ["Win Lionspire 5 times", "Win Lionspire 5 times"],
        ["Win Rudhelm Siege 10 times", "Win Rudhelm Siege 10 times"],
        ["Win Rudhelm Siege 25 times", "Win Rudhelm Siege 25 times"],
        ["Win Rudhelm Siege 5 times", "Win Rudhelm Siege 5 times"],
        ["Yadome", "Deflect 100 projectiles"],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
