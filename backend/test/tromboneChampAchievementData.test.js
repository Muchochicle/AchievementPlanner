import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trombone-champ.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1059990 (fetched through this app's own services/steamApi.js).
// 5 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trombone-champ");

test("getPlannerData('trombone-champ') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for trombone-champ");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Trombone Champ achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Trombone Champ achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Trombone Champ achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aesthete", "Unlock a trombone color"],
        ["Apex Aesthete", "Unlock all trombone colors"],
        ["Big Brain Scholar", "Develop an enormous brain full of facts"],
        ["Card Collector", "Get 50 Tromboner Cards"],
        ["ENGOLDENATION GOD", "The follow-up to Engoldenating a single card: repeat the same 10-copies-into-one \"Engoldenate\" process (see I DID ENGOLDENATION) until every unique card in your Collection has been converted to its gold-bordered Engoldenated version."],
        ["Gettin' Tootier", "Unlock a Sound Set"],
        ["Got Tootiest", "Unlock all Sound Sets"],
        ["I DID ENGOLDENATION", "Collect 10 copies of the same Tromboner Card, then select and confirm the \"Engoldenate\" prompt on it - the 10 duplicates combine into a single card with a gold border instead of the usual blue one. (Turding an Engoldenated card removes the effect, so you would need to collect 10 copies again.)"],
        ["I Want Them All!", "Express your love of baboons"],
        ["I Would Prefer Not To", "Abstain from tooting"],
        ["Never Liked the Guy", "Turd your last Mozart card"],
        ["New Friend", "In the Card Collection screen, look in the bottom-right corner for a small candle icon. Spam-click it to summon a new friend and unlock the achievement."],
        ["No more", "Abstain from sound completely"],
        ["S Aficionado", "Receive an \"S\" score on ten tracks"],
        ["S Apprentice", "Receive an \"S\" score on one track"],
        ["S Associate", "Receive an \"S\" score on five tracks"],
        ["S GOD", "Receive an \"S\" score on twenty or more tracks"],
        ["S ULTRA-GOD", "Receive an \"S\" score on twenty-five or more tracks"],
        ["S ULTRA-MEGA-GOD", "Receive an \"S\" score on thirty or more tracks"],
        ["S Virtuoso", "Receive an \"S\" score on fifteen tracks"],
        ["The Bassmaster", "Obtain a copy of the Bass Clef card (#23), open your Collection, click the card to view its full-size art, then spam-click the card art itself. This drops you into a dimly lit room with a hatch on the left and the Turdvessel's silhouette on the right - meet Bassmaster Ben, the game's Turd Vessel character, to unlock it."],
        ["The Music Enjoyer", "Play at least 20 tracks"],
        ["The Tootmaster", "Get an \"S\" score on 4 different tracks first. Then, from the Main Menu, click \"Baboon\" to reach a dimly lit room; click the hatch to inspect it, click all 4 \"S\" corners then the center to unlock it, then spam-click the hatch to meet Tootmaster Tom, the game's Toot Vessel character."],
        ["TROMBONE CHAMP", "Become the Trombone Champ of Legend"],
        ["Yo! I Got a Sack", "Get a sack"],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 5 hidden Trombone Champ achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["The Tootmaster", "The Bassmaster", "New Friend", "I DID ENGOLDENATION", "ENGOLDENATION GOD"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
