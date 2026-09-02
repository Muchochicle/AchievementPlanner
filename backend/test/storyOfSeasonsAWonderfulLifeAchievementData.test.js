import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/story-of-seasons-a-wonderful-life.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2111170 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("story-of-seasons-a-wonderful-life");

test("getPlannerData('story-of-seasons-a-wonderful-life') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for story-of-seasons-a-wonderful-life");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every STORY OF SEASONS: A Wonderful Life achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every STORY OF SEASONS: A Wonderful Life achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 STORY OF SEASONS: A Wonderful Life achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Cleaned the grave for the first time.", "Cleaned the grave once and got the \"My Fair Ladybug\" wonder."],
        ["Cleared 10 requests.", "Cleared 10 requests and got the \"Hero in Training\" wonder."],
        ["Cleared 100 requests.", "Cleared 100 requests and got the \"Charismatic Superhero\" wonder."],
        ["Discovered 10 hybrid crops.", "Discovered 10 hybrid crops and got the \"The Fortunate Farmer\" wonder."],
        ["Discovered 20 rare crops.", "Discovered 20 rare crops and got the \"Encyclopedia Hybridtannica\" wonder."],
        ["Discovered 5 rare crops.", "Discovered 5 rare crops and got the \"Heck, That's a Hybrid!\" wonder."],
        ["Discovered all hybrid crops.", "Discovered all hybrid crops and got the \"The Capable Cultivator\" wonder."],
        ["Fished up the golden axe.", "Fished up the golden axe and got the \"True of Heart\" wonder."],
        ["Got 10 additional facilities.", "Obtained 10 additional facilities and got the \"Super-Duper Awesome Farm\" wonder."],
        ["Had an animal born on the farm.", "Had an animal born on the farm and got the \"A Little Fluff\" wonder."],
        ["Looked in the mirror 3 times.", "Looked in the mirror 3 times and got the \"Fashion-Forward Farmer\" wonder."],
        ["Made 10,000G.", "Obtained a total of 10,000G and got the \"Tiny Wallet\" wonder."],
        ["Made 100,000G.", "Obtained a total of 100,000G and got the \"Big Wallet\" wonder."],
        ["Made 500,000G.", "Obtained a total of 500,000G and got the \"Stuffed Wallet\" wonder."],
        ["Maxed out your first animal or bird's LP.", "Maxed out an animal/bird's LP and got the \"My First Best Friend\" wonder."],
        ["Obtained 10 dishes.", "Obtained 10 different dishes and got the \"Faintly Appetizing\" wonder."],
        ["Obtained 100 dishes.", "Obtained 100 different dishes and got the \"Captain of the Cookbook\" wonder."],
        ["Obtained 2 gold treasures.", "Discovered 2 golden treasures and got the \"As Good as Gold\" wonder."],
        ["Obtained 5 fish.", "Obtained 5 fish and got the \"So-fish-ticated\" wonder."],
        ["Obtained 5 tablets.", "Discovered 5 tablets and got the \"Once Upon a Curry\" wonder."],
        ["Obtained 7 total records.", "Obtained a total of 7 records and got the \"Record Keeper\" wonder."],
        ["Obtained 8 total animals.", "Obtained a total of 8 animals and got the \"A Full Barn is a Happy Barn\" wonder."],
        ["Obtained 8 total birds.", "Obtained a total of 8 birds and got the \"Poultry in Motion\" wonder."],
        ["Obtained all blessed tools.", "Obtained all Blessed Tools and got the \"Pan-paka-PAAAN!\" wonder."],
        ["Obtained all fish.", "Obtained all fish and got the \"Fish Fear Me\" wonder."],
        ["Obtained the Blade of Legend.", "Obtained the Blade of Legend and got the \"The Chosen One\" wonder."],
        ["Obtained the message in a bottle.", "Obtained the message in a bottle and got the \"I'll Never Tell\" wonder."],
        ["Reached Chapter 1: Beginnings.", "Started Chapter 1 and got the \"Nice to Meetcha, Nature Sprites!\" wonder."],
        ["Reached Chapter 2: Branching.", "Started Chapter 2 and got the \"Newfound Family\" wonder."],
        ["Reached Chapter 3: Blessings.", "Started Chapter 3 and got the \"A Happy Family\" wonder."],
        ["Reached Chapter 4: Blooming.", "Started Chapter 4 and got the \"Family Drama\" wonder."],
        ["Reached Chapter 5: Traversal.", "Started Chapter 5 and got the \"A Family Without Worry\" wonder."],
        ["Reached Chapter 6: Twilight.", "Started Chapter 6 and got the \"A Family That Stays Together\" wonder."],
        ["Reached Chapter 7: Beyond.", "Started Chapter 7 and got the \"It Was a Wonderful Life\" wonder."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
