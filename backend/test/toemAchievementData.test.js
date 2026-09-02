import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/toem.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1307580 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("toem");

test("getPlannerData('toem') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for toem");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every TOEM achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every TOEM achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 TOEM achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 followers", "Snap a close-up photo of an influencer"],
        ["A great story", "Snap a close-up photo of the mountain explorer"],
        ["A majestic hotel", "Photograph the oakhotel from the lookout point"],
        ["A new job", "Snap a close-up photo of a stressed human"],
        ["A sparkling jump", "Snap a close-up photo of a dancer"],
        ["A true completionist", "Complete all quests in the base game"],
        ["A Viking's holiday", "Complete all quests in Basto"],
        ["A voyage underwater", "Photograph the Smiling Huntsman"],
        ["All geared up", "Defeat the winds with your style!"],
        ["And some more", "Photograph all compendium creatures on Basto"],
        ["Business executed", "Complete all quests in Logcity"],
        ["Calm as the sea", "Complete the photo challenges in Stanhamn"],
        ["Calmed down", "Snap a close-up photo of the skeleton"],
        ["City professional", "Complete the photo challenges in Logcity"],
        ["Collect them all", "Photograph all compendium creatures from the base game"],
        ["Cool moon", "Wazzuuppp"],
        ["Cosplayer", "Equip every base game item once"],
        ["Employee of the month", "Our best non-employed employee!"],
        ["Experience TOEM", "Photograph the TOEM phenomenon"],
        ["Flight ready", "Snap a close-up photo of a special seagull"],
        ["Going long!", "You just walked a thousand miles!"],
        ["Happy youth", "Snap a close-up photo of an old man"],
        ["Home sweet home", "Photograph nana's house"],
        ["Ice fighter", "Complete all quests in Kiiruberg"],
        ["Just a sock", "Snap a close-up photo of the sockman"],
        ["King's new shirt", "Snap a close-up photo of the king"],
        ["Look at those cuties", "Photograph all of the development team’s animals"],
        ["Maximum vacation", "Relax on a chair with your vacation outfit on"],
        ["Moonlit beauty", "Snap a close-up photo of the nix"],
        ["Nature's show-stopper", "Complete the photo challenges in Oaklaville"],
        ["Pro gamer", "Complete all carnival games"],
        ["Seaworthy", "Complete all quests in Stanhamn"],
        ["Self portrait", "Snap a close-up photo of yourself"],
        ["Set sail for good weather", "Visit Stanhamn"],
        ["Slow and steady", "What an amazing race that was! Thrilling action all around!"],
        ["Snowy peaks", "Visit Kiiruberg"],
        ["So close now!", "Visit the top of Kiiruberg"],
        ["Splish-splash", "Splash someone who is taking a bath"],
        ["Strong as an oak", "Complete all quests in Oaklaville"],
        ["The beginning", "Start your adventure!"],
        ["The big city", "Visit Logcity"],
        ["The biggest hurdle", "Complete the photo challenges in Kiiruberg"],
        ["The calm forest", "Visit Oaklaville"],
        ["The grand clock tower", "Photograph the grand clock tower's special event"],
        ["The Royal Castle", "Photograph the royal sand castle"],
        ["Tropical paradise", "Visit Basto"],
        ["Who's a good boy?!", "Pet a pet"],
        ["You found us!", "In the Oak Hotel in Oaklaville, point your camera up at the dark ceiling and photograph the developers hidden up there."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
