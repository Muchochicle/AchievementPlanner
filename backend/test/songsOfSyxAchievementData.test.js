import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/songs-of-syx.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1162750 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 34 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("songs-of-syx");

test("getPlannerData('songs-of-syx') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for songs-of-syx");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Songs of Syx achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Songs of Syx achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Songs of Syx achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Breaker of Chains", "Gained by freeing many slaves."],
        ["First of Their Name", "Gained by having 1500 happy people and increases your starting population and supplies of new games."],
        ["Heaviest of Hands", "Gained by a lot of executions. Increases law."],
        ["Herdsman of Entelodonts", "Have loads of Entelodont pastures."],
        ["Lifebringer", "Cure a lot of people in the hospital."],
        ["Lord of the Seven Kingdoms", "Control 7 regions to gain this ancient and prestigious title."],
        ["Protector of the Realm", "Gained by defending against invasions."],
        ["Richest of Kings", "Decreases inflation, allowing you to amass even greater wealth."],
        ["Ruler of Kings", "A master of Syx, a title only granted to the greats."],
        ["Ruler of Sedge and Bee", "Survive and thrive in a hot climate to gain the goodwill of its hardened people."],
        ["Seer of the Gods", "A ruler making his people pay homage to the spiritual realm. Surely the gods reward such piety."],
        ["The Artisan", "Gained by workshop output. Increases productivity of all workshops."],
        ["The Builder", "Build a bunch of fancy buildings on the world map."],
        ["The Bureaucrat", "Gained by having your papers in order. Increases admin."],
        ["The Caretaker", "Gained by having proper access to hospitals. Increases health."],
        ["The Child of the Sun", "Have loads of farms and orchards."],
        ["The Clumsy", "Gained by living through multiple accidents. Makes people a bit more cautious in your presence."],
        ["The Conquerer", "Gained by killing your enemies."],
        ["The Drunkard", "Gained by having lots of drunk subjects. Increases drink production."],
        ["The Entertainer", "Gained by having good access to entertainment and repeatedly shouting 'Are you not entertained?' at the screen. Increases happiness."],
        ["The Gourmand", "Gained by having lots of food. Increases food production."],
        ["The Great", "Gained by having many people follow and love you."],
        ["The Mad", "Have a bunch of insane people running around in your city."],
        ["The Merciful", "Gained by being a saint after battles. Adds some loyalty to your name."],
        ["The merciless", "Gained by being harsh on your conquered foes. Slaves will be more easily controlled."],
        ["The Nudist", "Keep your citizens naked, and gain an extra boost to exposure."],
        ["The Pleasurer", "Gained by having good access to Massage Parlour. Increases happiness."],
        ["The Provider", "Produce a lot of stuff natively."],
        ["The Slaver", "Gained by having many slaves."],
        ["The Undefeated", "Gained by being a badass on the field of battle. Increases morale and detriments raids."],
        ["The Uniter", "Gained by absorbing a lot of kingdoms."],
        ["The Usurper", "Kill a couple of foreign royalties to gain this lucrative title."],
        ["The Wise", "Gained by being a knowledge nerd. Increases knowledge and education rates."],
        ["Warden of the North", "Survive and thrive in a cold climate to gain the goodwill of its hardened people."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
