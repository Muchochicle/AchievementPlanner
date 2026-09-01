import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fashion-police-squad.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1319460 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fashion-police-squad");

test("getPlannerData('fashion-police-squad') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for fashion-police-squad");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Fashion Police Squad achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Fashion Police Squad achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Fashion Police Squad achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4d3d3d3 Engaged", "Defeat the boss Hackerman."],
        ["A Game by Mopeful Games", "Read the credits."],
        ["A Huge Boss", "Defeat Hugo Bauss."],
        ["BULL’S EYE!", "Find the sniper secret."],
        ["Butting heads", "Stun a Sagging Pants Enemy with a weapon."],
        ["Challenge Accepted.", "Complete all challenges."],
        ["Congratulations on Your Promotion!", "Open the game for the first time."],
        ["D.R.I.P. Mode Activated", "Collect every piece of swag during a mission."],
        ["Dominating!", "Stun enemies 250 times with the Belt of Justice."],
        ["Drink and Thrive", "Find a mocktail on the ground and drink it."],
        ["Drive to Succeed", "Get first place on the driving range scoreboard."],
        ["Everything Turned out Well in the End", "Defeat the boss Turn Coat."],
        ["Funk NFTs", "Decline a business deal with the Belt of Justice."],
        ["Gotta Catch ‘Em All!", "Find all the secret posters."],
        ["Hole in One", "Put the ball in the hole."],
        ["Justice Has Been Served", "Stun enemies 100 times with the Belt of Justice."],
        ["L’Art", "Visit the Cheesus is Bling merch exhibit."],
        ["Potayto, Potahto", "Transform a Karen into a fashionista with the Tailormade, and another with the Belt of Justice."],
        ["Seasoned Slapper", "Fab Slap 50 enemies."],
        ["Slap Some Fashion Sense Into Them", "Fab Slap 25 enemies."],
        ["Tens Tens Tens Across The Board", "Fully complete all missions and challenges."],
        ["Toilet Is You", "Solve the only puzzle in the game."],
        ["Top Rated", "Finish both sniper encounters while maximum Live rating."],
        ["Where The Fog Rises", "Meet with the mysterious stranger for the first time."],
        ["You’re a Winner Baby!", "Complete all of the story missions."],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
